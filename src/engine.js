/**
 * ChargeDossier Deterministic Evidence-Quality Rules Engine
 * 
 * Evaluates dispute evidence packages against deterministic rules modeled on
 * Mastercard Mastercom Second Presentment standards and First-Party Trust vectors.
 * 
 * Strict deterministic calculations: Zero LLM hallucinations, zero probabilistic guessing.
 */

export const QUALITY_TIERS = {
  HIGH_QUALITY: {
    tier: "TIER_A",
    label: "High Quality — Strong Evidence (Illustrative)",
    recommendedAction: "APPROVE_FOR_PRESENTMENT",
    badgeClass: "badge-success",
    description: "Compelling evidence satisfies prototype heuristic checklist modeled on common merchant second presentment guidelines. Does not guarantee issuer acceptance or official network determination."
  },
  MARGINAL_FIXABLE: {
    tier: "TIER_B",
    label: "Marginal — Fixable Gaps Detected",
    recommendedAction: "REVIEW_AND_ATTACH_EVIDENCE",
    badgeClass: "badge-warning",
    description: "Partial evidence attached. Prototype checklist indicates additional documentation (such as return policy or carrier remedy logs) should be reviewed prior to gateway drafting."
  },
  DEFICIENT_RISK: {
    tier: "TIER_C",
    label: "Deficient — High Risk / Contradictory",
    recommendedAction: "REJECT_AND_ACCEPT_LOSS",
    badgeClass: "badge-danger",
    description: "Critical evidence is missing or contains contradictions (e.g. non-delivery scan or address mismatch). Representation carries high risk of dispute loss under standard representation practices."
  }
};

/**
 * Audit a single dispute package deterministically.
 * @param {Object} dispute - The dispute data object.
 * @returns {Object} Audit result with numerical score, tier, itemized rules, contradictions, and actionable fixes.
 */
export function auditDispute(dispute) {
  if (!dispute) {
    throw new Error("Invalid dispute object provided to audit engine");
  }

  const { reasonCode } = dispute;
  const isFraud = reasonCode === "4837";
  const isMerchandise = reasonCode === "4853";

  const evaluatedRules = [];
  const contradictions = [];
  const missingCriticalItems = [];
  const actionableFixes = [];

  let totalPoints = 0;
  let maxPossiblePoints = 100;
  let penaltyPoints = 0;

  // Safely default nested objects to prevent crashes on partial or invalid input
  const payment = dispute.payment || {};
  const order = dispute.order || {};
  const fulfillment = dispute.fulfillment || {};
  const policy = dispute.policy || {};
  const communications = dispute.communications || {};

  // ==========================================
  // 1. PAYMENT & IDENTITY VERIFICATION (30 PTS)
  // ==========================================
  {
    const avsPass = payment.avsAddressMatch === "Y" && payment.avsZipMatch === "Y";
    const avsPartial = (payment.avsAddressMatch === "Y" || payment.avsZipMatch === "Y") && !avsPass;
    const cvcPass = payment.cvcCheck === "M";
    const threeDPass = payment.threeDSecure === "authenticated";

    let ruleScore = 0;
    if (avsPass) ruleScore += 12;
    else if (avsPartial) ruleScore += 6;

    if (cvcPass) ruleScore += 8;
    if (threeDPass) ruleScore += 10;
    else if (payment.threeDSecure === "attempted") ruleScore += 5;

    let status = "PASS";
    if (ruleScore < 10) status = "FAIL";
    else if (ruleScore < 22) status = "WARN";

    if (!cvcPass) missingCriticalItems.push("CVC Security Code Match");
    if (!avsPass && !avsPartial) missingCriticalItems.push("AVS Billing Address Verification");

    evaluatedRules.push({
      id: "RULE-PAY-01",
      category: "Payment & Identity",
      name: "Gateway Authentication & AVS/CVC Match",
      status,
      awardedPoints: ruleScore,
      maxPoints: 30,
      detail: `AVS Street: ${payment.avsAddressMatch || "N/A"}, AVS Zip: ${payment.avsZipMatch || "N/A"}, CVC: ${payment.cvcCheck || "N/A"}, 3DS: ${payment.threeDSecure || "none"}`,
      whyIssuerCares: "Issuing banks cross-reference AVS and CVC matches to evaluate whether the authorized cardholder completed checkout. Under EMV 3DS guidelines, authentication can support liability shift determinations.",
      actionToFix: !avsPass ? "Obtain merchant payment gateway authentication logs confirming cardholder billing zip match." : null
    });
    totalPoints += ruleScore;
  }

  // ==========================================
  // 2. FULFILLMENT & DELIVERY PROOF (35 PTS)
  // ==========================================
  {
    const f = fulfillment;
    const isDelivered = Boolean(f.carrierStatus && typeof f.carrierStatus === "string" && f.carrierStatus.toLowerCase().includes("delivered"));
    const hasSignature = Boolean(f.signatureCaptured && f.signedBy);
    const destinationMatches = Boolean(f.deliveryAddressMatch);

    let ruleScore = 0;
    let status = "PASS";
    let failureDetail = "";

    if (isDelivered) {
      ruleScore += 15;
    } else {
      status = "FAIL";
      failureDetail = `Carrier status indicates '${f.carrierStatus || "No Tracking Scan"}'. Item was not delivered.`;
      missingCriticalItems.push("Carrier Proof of Completed Delivery");
      actionableFixes.push("Check carrier tracking portal for final delivery scan before submitting presentment.");
    }

    if (destinationMatches) {
      ruleScore += 10;
    } else {
      status = "FAIL";
      failureDetail += " Delivery destination does not match customer order shipping address.";
      contradictions.push({
        code: "CONTRADICTION_DELIVERY_DESTINATION",
        severity: "CRITICAL",
        message: "Delivery destination mismatch: Package was delivered to a different location than the verified shipping address."
      });
      penaltyPoints += 20;
    }

    const orderAmount = typeof dispute.amountUSD === "number" ? dispute.amountUSD : 0;
    if (orderAmount >= 150) {
      if (hasSignature) {
        ruleScore += 10;
        // Safely check if signature matches customer surname
        const rawName = (order.customerName || "").trim();
        const customerLastName = rawName.includes(" ") ? rawName.split(" ").pop().toUpperCase() : rawName.toUpperCase();
        const signedByUpper = typeof f.signedBy === "string" ? f.signedBy.toUpperCase() : "";

        if (customerLastName && !signedByUpper.includes(customerLastName)) {
          // Signed by third party / forwarder
          contradictions.push({
            code: "THIRD_PARTY_SIGNATURE",
            severity: "WARNING",
            message: `Signature capture '${f.signedBy}' does not match cardholder surname '${customerLastName}'.`
          });
          penaltyPoints += 10;
        }
      } else {
        if (status === "PASS") status = "WARN";
        missingCriticalItems.push("Direct Cardholder Signature Proof");
        actionableFixes.push("For orders exceeding $150 USD, request a formal delivery signature manifest from the freight carrier.");
      }
    } else {
      ruleScore += 10; // Orders < $150 don't mandate signature in heuristic
    }

    evaluatedRules.push({
      id: "RULE-FUL-02",
      category: "Fulfillment & Tracking",
      name: "Carrier Proof of Delivery (POD) & Signature Verification",
      status,
      awardedPoints: Math.max(0, ruleScore),
      maxPoints: 35,
      detail: `Status: ${f.carrierStatus || "None"} | Destination Match: ${destinationMatches ? "Yes" : "No"} | Signed By: ${f.signedBy || "No Signature"}`,
      whyIssuerCares: "Under common representation practice and Mastercard compelling evidence guidelines, carrier proof of delivery to the verified cardholder address is standard compelling evidence for Second Presentment.",
      actionToFix: failureDetail || null
    });
    totalPoints += ruleScore;
  }

  // ==========================================
  // 3. TERMS, POLICIES & DISCLOSURES (15 PTS)
  // ==========================================
  {
    const p = policy;
    let ruleScore = 0;
    let status = "PASS";

    if (p.termsAcceptedAtCheckout) {
      ruleScore += 8;
    } else {
      status = "WARN";
      missingCriticalItems.push("Timestamped Checkout Terms Acceptance");
      actionableFixes.push("Attach checkout audit log showing cardholder agreed to terms of sale prior to payment.");
    }

    if (p.refundPolicyAttached) {
      ruleScore += 7;
    } else {
      if (isMerchandise) {
        status = "WARN";
        missingCriticalItems.push("Published Return & Replacement Policy");
        actionableFixes.push("Attach store published 30-day Return/Warranty Policy clause to satisfy Reason Code 4853 requirements.");
      } else {
        ruleScore += 4; // Less critical for pure fraud claims
      }
    }

    evaluatedRules.push({
      id: "RULE-POL-03",
      category: "Policies & Disclosures",
      name: "Checkout Terms Acceptance & Return Policy Disclosure",
      status,
      awardedPoints: ruleScore,
      maxPoints: 15,
      detail: `Terms Accepted: ${p.termsAcceptedAtCheckout ? "Yes (" + (p.termsAcceptedTimestamp || "Recorded") + ")" : "No"} | Return Policy Attached: ${p.refundPolicyAttached ? "Yes" : "Missing"}`,
      whyIssuerCares: "Issuing banks typically reject merchant counter-claims if the return or cancellation policy was not visibly disclosed to the consumer prior to order finalization.",
      actionToFix: !p.refundPolicyAttached ? "Attach company return and warranty policy documentation." : null
    });
    totalPoints += ruleScore;
  }

  // ==========================================
  // 4. FIRST-PARTY TRUST & BEHAVIORAL PROOF (20 PTS)
  // ==========================================
  {
    const o = order;
    const c = communications;
    let ruleScore = 0;
    let status = "PASS";

    // Prior transaction tenure
    const priorOrders = typeof o.priorSuccessfulOrders === "number" ? o.priorSuccessfulOrders : 0;
    const tenureMonths = typeof o.customerAccountTenureMonths === "number" ? o.customerAccountTenureMonths : 0;

    if (priorOrders > 0 && tenureMonths >= 3) {
      ruleScore += 10;
    } else if (priorOrders > 0) {
      ruleScore += 5;
    } else {
      ruleScore += 2;
    }

    // Customer communication logs
    if (c.hasCustomerContact && Array.isArray(c.records) && c.records.length > 0) {
      const commText = c.records.map(r => r.summary || "").join(" ").toLowerCase();
      
      // Check for contradictory cardholder statements
      if (commText.includes("fraudulent") || commText.includes("never ordered") || commText.includes("stolen")) {
        contradictions.push({
          code: "CARDHOLDER_FRAUD_AFFIRMATION",
          severity: "CRITICAL",
          message: "Customer communications record contains an explicit cardholder statement denying authorization or claiming fraud."
        });
        penaltyPoints += 25;
        status = "FAIL";
      } else if (isMerchandise && (commText.includes("crack") || commText.includes("defective") || commText.includes("missing"))) {
        // Defect claim under 4853: check if merchant offered remedy
        const hasRemedy = commText.includes("replacement") || commText.includes("remedy") || commText.includes("repair") || commText.includes("refunded");
        if (hasRemedy) {
          ruleScore += 10;
        } else {
          status = "WARN";
          penaltyPoints += 10;
          missingCriticalItems.push("Documented Merchant Remedy or Repair Offer");
          actionableFixes.push("Attach customer support transcript showing merchant offered replacement parts or repair per warranty.");
        }
      } else if (commText.includes("got it working") || commText.includes("thank you") || commText.includes("received")) {
        // First-party usage proof!
        ruleScore += 10;
      } else {
        ruleScore += 5;
      }
    } else {
      status = "WARN";
      actionableFixes.push("Search customer support logs (Zendesk/Gorgias/Email) for tickets or chats demonstrating customer engagement.");
    }

    evaluatedRules.push({
      id: "RULE-TRU-04",
      category: "First-Party Trust & Behavior",
      name: "Customer Interaction & Historical Account Tenure",
      status,
      awardedPoints: Math.min(20, ruleScore),
      maxPoints: 20,
      detail: `Prior Orders: ${priorOrders} | Account Tenure: ${tenureMonths} mo | Support Logs: ${Array.isArray(c.records) ? c.records.length : 0}`,
      whyIssuerCares: "Modeled on Mastercard First-Party Trust program heuristics (such as established account history and communication confirming the customer interacted with the merchant).",
      actionToFix: null
    });
    totalPoints += ruleScore;
  }

  // ==========================================
  // 5. ADDRESS & FREIGHT FORWARDER CONTRADICTION CHECK
  // ==========================================
  {
    const bState = order.billingAddress?.state || "";
    const sState = order.shippingAddress?.state || "";
    const avsMatch = payment.avsAddressMatch === "Y";

    if (bState && sState && bState !== sState && !avsMatch) {
      contradictions.push({
        code: "HIGH_RISK_ADDRESS_DISCREPANCY",
        severity: "CRITICAL",
        message: `Billing state (${bState}) does not match shipping state (${sState}) while AVS street verification failed ('${payment.avsAddressMatch || "N/A"}'). Common freight forwarding fraud pattern.`
      });
      penaltyPoints += 20;
    }
  }

  // Calculate final score with penalties
  const grossScore = Math.min(maxPossiblePoints, totalPoints);
  const netScore = Math.max(0, Math.min(100, Math.round(grossScore - penaltyPoints)));

  // Determine Quality Tier
  let tierKey = "DEFICIENT_RISK";
  if (netScore >= 80 && contradictions.length === 0 && missingCriticalItems.length === 0) {
    tierKey = "HIGH_QUALITY";
  } else if (netScore >= 60 && !contradictions.some(c => c.severity === "CRITICAL")) {
    tierKey = "MARGINAL_FIXABLE";
  } else {
    tierKey = "DEFICIENT_RISK";
  }

  const qualityTier = QUALITY_TIERS[tierKey];

  return {
    disputeId: dispute.id,
    evaluatedAt: new Date().toISOString(),
    network: dispute.network,
    reasonCode: dispute.reasonCode,
    qualityScore: netScore,
    qualityTier: qualityTier.tier,
    qualityLabel: qualityTier.label,
    recommendedAction: qualityTier.recommendedAction,
    badgeClass: qualityTier.badgeClass,
    summaryExplanation: qualityTier.description,
    scoreBreakdown: {
      grossScore,
      penaltyPoints,
      netScore
    },
    evaluatedRules,
    contradictions,
    missingCriticalItems,
    actionableFixes
  };
}
