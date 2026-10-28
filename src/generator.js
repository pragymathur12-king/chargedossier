/**
 * ChargeDossier Structured Dossier Generator
 * 
 * Compiles an illustrative Second Presentment Dossier draft modeled on
 * typical Mastercard reason code exhibit layouts (<18 pages).
 * Prototype only; not an official network certification or guarantee of recovery.
 */

import { auditDispute } from "./engine.js";

/**
 * Generate a complete, structured Second Presentment Dossier.
 * @param {Object} dispute - The dispute data object.
 * @param {Object} [auditResult] - Optional pre-computed audit result.
 * @returns {Object} Structured dossier with narrative, exhibits, and quality summary.
 */
export function generateDossier(dispute, auditResult = null) {
  if (!dispute) {
    throw new Error("Cannot generate dossier for undefined dispute");
  }

  const audit = auditResult || auditDispute(dispute);
  const now = new Date().toISOString();

  const order = dispute.order || {};
  const payment = dispute.payment || {};
  const fulfillment = dispute.fulfillment || {};
  const policy = dispute.policy || {};
  const communications = dispute.communications || {};

  // 1. Executive Rebuttal Narrative
  let rebuttalNarrative = "";
  if (dispute.reasonCode === "4837") {
    rebuttalNarrative = `This draft Second Presentment responds to the Cardholder Unauthorized Dispute (Reason Code 4837) for Order ${order.orderId || "N/A"} in the amount of $${(dispute.amountUSD || 0).toFixed(2)} ${dispute.currency || "USD"}. ` +
      `The merchant processed the transaction with standard gateway authorization (CVC Match: ${payment.cvcCheck || "N/A"}, AVS Street: ${payment.avsAddressMatch || "N/A"}, AVS Zip: ${payment.avsZipMatch || "N/A"}). ` +
      `The ordered merchandise (${dispute.productName || "Item"}) was fulfilled via ${fulfillment.carrier || "Carrier"} under tracking number ${fulfillment.trackingNumber || "N/A"} and was marked delivered to the order address on ${fulfillment.deliveryDate || "N/A"} ` +
      (fulfillment.signedBy ? `with signature recorded as "${fulfillment.signedBy}". ` : ". ") +
      (communications.records && communications.records.length > 0
        ? `Customer support records reflect post-order communication regarding the merchandise. `
        : "") +
      `Submitted as merchant evidence supporting cardholder authorization and fulfillment under standard second presentment practices.`;
  } else if (dispute.reasonCode === "4853") {
    rebuttalNarrative = `This draft Second Presentment responds to the Merchandise Dispute (Reason Code 4853) for Order ${order.orderId || "N/A"} in the amount of $${(dispute.amountUSD || 0).toFixed(2)} ${dispute.currency || "USD"}. ` +
      `The customer placed the order on ${(order.orderDate || "").split("T")[0] || "N/A"} with recorded terms acceptance. ` +
      `Fulfillment tracking records carrier status as "${fulfillment.carrierStatus || "N/A"}" via ${fulfillment.carrier || "Carrier"} (${fulfillment.trackingNumber || "N/A"}). ` +
      `The merchant has provided available itemized purchase proof and customer communication records.`;
  } else {
    rebuttalNarrative = `Second Presentment defense draft for dispute ${dispute.id || "N/A"}.`;
  }

  // 2. Compile Exhibits Manifest
  const exhibits = [];

  // Exhibit A: Order Details
  exhibits.push({
    exhibitId: "EXHIBIT_A",
    title: "Verified Order Invoice & Itemized Bill of Sale",
    description: `Order #${order.orderId || "N/A"} placed on ${(order.orderDate || "").split("T")[0] || "N/A"} by ${order.customerName || "Customer"}`,
    metadata: {
      orderId: order.orderId || "N/A",
      customerName: order.customerName || "N/A",
      customerEmail: order.customerEmail || "N/A",
      item: dispute.productName || "N/A",
      totalAmount: `$${(dispute.amountUSD || 0).toFixed(2)} ${dispute.currency || "USD"}`,
      billingAddress: order.billingAddress ? `${order.billingAddress.line1 || ""}, ${order.billingAddress.city || ""}, ${order.billingAddress.state || ""} ${order.billingAddress.postalCode || ""}` : "Not provided",
      shippingAddress: order.shippingAddress ? `${order.shippingAddress.line1 || ""}, ${order.shippingAddress.city || ""}, ${order.shippingAddress.state || ""} ${order.shippingAddress.postalCode || ""}` : "Not provided"
    }
  });

  // Exhibit B: Payment Authentication
  exhibits.push({
    exhibitId: "EXHIBIT_B",
    title: "Card Gateway Payment Authentication & Security Ledger",
    description: `Gateway authorization records from ${payment.gateway || "Processor"} for card ending in *${payment.cardLast4 || "XXXX"}`,
    metadata: {
      paymentIntent: payment.paymentIntentId || "N/A",
      cardBrand: payment.cardBrand || "N/A",
      cardLast4: payment.cardLast4 || "N/A",
      avsStreetResult: payment.avsAddressMatch || "N/A",
      avsZipResult: payment.avsZipMatch || "N/A",
      cvcCheckResult: payment.cvcCheck || "N/A",
      threeDSecureResult: payment.threeDSecure || "N/A",
      ipAddress: payment.customerIp || "N/A",
      ipLocation: payment.customerIpLocation || "N/A"
    }
  });

  // Exhibit C: Fulfillment & Carrier Delivery Proof
  exhibits.push({
    exhibitId: "EXHIBIT_C",
    title: "Carrier Proof of Delivery (POD) & Transit Chain",
    description: `Shipping manifest and carrier tracking records from ${fulfillment.carrier || "Carrier"}`,
    metadata: {
      carrier: fulfillment.carrier || "N/A",
      trackingNumber: fulfillment.trackingNumber || "N/A",
      carrierStatus: fulfillment.carrierStatus || "N/A",
      deliveryDate: fulfillment.deliveryDate || "Pending / Not Delivered",
      destinationMatched: fulfillment.deliveryAddressMatch ? "MATCH" : "MISMATCH",
      signatureCaptured: fulfillment.signatureCaptured ? "YES" : "NO",
      signedBy: fulfillment.signedBy || "N/A"
    }
  });

  // Exhibit D: Policy Acceptance
  exhibits.push({
    exhibitId: "EXHIBIT_D",
    title: "Published Terms of Service & Policy Acceptance Audit Trail",
    description: "Checkout audit trail recording consumer acceptance of terms",
    metadata: {
      termsAccepted: policy.termsAcceptedAtCheckout ? "YES" : "NO",
      timestamp: policy.termsAcceptedTimestamp || "N/A",
      policyVersion: policy.termsVersion || "Standard",
      refundPolicyAttached: policy.refundPolicyAttached ? "YES" : "NO"
    }
  });

  // Exhibit E: Customer Communications
  if (communications.records && communications.records.length > 0) {
    exhibits.push({
      exhibitId: "EXHIBIT_E",
      title: "Customer Communications & Support Transcripts",
      description: "Customer interaction records documenting order context and customer engagement",
      records: communications.records
    });
  }

  return {
    dossierId: `DOS-${dispute.id}-${Date.now().toString().slice(-4)}`,
    generatedAt: now,
    disputeId: dispute.id,
    orderId: order.orderId || "N/A",
    productName: dispute.productName,
    disputedAmountUSD: dispute.amountUSD,
    scheme: dispute.network,
    reasonCode: dispute.reasonCode,
    reasonDescription: dispute.reasonDescription,
    evidenceQualityScore: audit.qualityScore,
    qualityTier: audit.qualityTier,
    qualityLabel: audit.qualityLabel,
    recommendedAction: audit.recommendedAction,
    rebuttalNarrative,
    exhibits,
    auditSummary: {
      passedRulesCount: audit.evaluatedRules.filter(r => r.status === "PASS").length,
      warningRulesCount: audit.evaluatedRules.filter(r => r.status === "WARN").length,
      failedRulesCount: audit.evaluatedRules.filter(r => r.status === "FAIL").length,
      criticalContradictionsCount: audit.contradictions.filter(c => c.severity === "CRITICAL").length
    },
    filingInstructions: {
      gatewayTarget: payment.gateway || "Payment Gateway",
      evidenceSubmissionFormat: "Structured Second Presentment Dossier Draft (JSON/PDF)",
      filingDeadline: dispute.deadlineDate,
      actionAdvice: audit.recommendedAction === "APPROVE_FOR_PRESENTMENT"
        ? "Dossier evidence satisfies prototype heuristic checklist modeled on Mastercard Second Presentment guidelines. Operator review complete; ready as a draft for merchant gateway upload. Final dispute resolution remains subject to issuer and network determination."
        : audit.recommendedAction === "REVIEW_AND_ATTACH_EVIDENCE"
        ? "Review identified gaps before approving. Attaching missing policy/remedy documentation addresses common dispute checklist deficiencies."
        : "Severe contradictions or missing delivery proof detected. Submitting is not advised under standard representation practices; accepting loss avoids staff time on unviable claims."
    }
  };
}
