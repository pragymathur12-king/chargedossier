/**
 * ChargeDossier Application State & Lifecycle Manager
 * 
 * Manages the dispute review state machine:
 * UNREVIEWED -> AUDITED -> (APPROVED | REJECTED)
 * Provides deterministic state mutations and demo reset functionality.
 */

import { INITIAL_DISPUTES, deepCloneDisputes } from "./data/disputes.js";
import { auditDispute } from "./engine.js";
import { generateDossier } from "./generator.js";

export class DisputeStateManager {
  constructor(initialData = INITIAL_DISPUTES) {
    this.initialData = initialData;
    this.disputes = deepCloneDisputes(initialData);
    this.auditHistory = [];
  }

  /**
   * Reset all dispute records to synthetic starting state.
   */
  reset() {
    this.disputes = deepCloneDisputes(this.initialData);
    this.auditHistory = [];
    return {
      status: "RESET_SUCCESS",
      disputeCount: this.disputes.length,
      timestamp: new Date().toISOString()
    };
  }

  /**
   * Get all active dispute summaries.
   */
  listDisputes() {
    return this.disputes.map(d => ({
      id: d.id,
      category: d.category,
      productName: d.productName,
      amountUSD: d.amountUSD,
      currency: d.currency,
      network: d.network,
      reasonCode: d.reasonCode,
      reasonDescription: d.reasonDescription,
      deadlineDate: d.deadlineDate,
      state: d.state,
      qualityScore: d.auditResult ? d.auditResult.qualityScore : null,
      qualityTier: d.auditResult ? d.auditResult.qualityTier : null,
      reviewDecision: d.reviewDecision ? d.reviewDecision.decision : null
    }));
  }

  /**
   * Get full details for a specific dispute.
   * @param {string} id
   */
  getDispute(id) {
    const dispute = this.disputes.find(d => d.id === id);
    if (!dispute) {
      throw new Error(`Dispute not found: ${id}`);
    }
    return dispute;
  }

  /**
   * Run the deterministic quality audit on a dispute.
   * Transitions state from UNREVIEWED to AUDITED (if not already decided).
   * @param {string} id
   */
  auditDispute(id) {
    const dispute = this.getDispute(id);
    const auditResult = auditDispute(dispute);
    dispute.auditResult = auditResult;

    if (dispute.state === "UNREVIEWED") {
      dispute.state = "AUDITED";
    }

    this.auditHistory.push({
      disputeId: id,
      auditedAt: auditResult.evaluatedAt,
      qualityScore: auditResult.qualityScore,
      qualityTier: auditResult.qualityTier
    });

    return {
      dispute,
      auditResult
    };
  }

  /**
   * Generate a structured Second Presentment Dossier for a dispute.
   * @param {string} id
   */
  generateDossier(id) {
    const dispute = this.getDispute(id);
    if (!dispute.auditResult) {
      this.auditDispute(id);
    }
    const dossier = generateDossier(dispute, dispute.auditResult);
    dispute.generatedDossier = dossier;
    return dossier;
  }

  /**
   * Attach evidence to fix a gap (for interactive simulation).
   * @param {string} id
   * @param {Object} patch - Fields to update (e.g. policy.refundPolicyAttached = true)
   */
  attachFix(id, patch) {
    const dispute = this.getDispute(id);

    if (patch.refundPolicyAttached !== undefined) {
      dispute.policy.refundPolicyAttached = Boolean(patch.refundPolicyAttached);
      dispute.attachedEvidence.push({
        id: `EV-${Date.now().toString().slice(-4)}`,
        type: "POLICY_ATTACHMENT",
        title: "Attached 30-Day Published Warranty & Return Policy",
        verified: true
      });
    }

    if (patch.customerSupportRemedyAttached !== undefined) {
      dispute.communications.records.push({
        timestamp: new Date().toISOString(),
        channel: "Zendesk Support Remedy",
        author: "Merchant Support Agent",
        summary: "Sent free replacement parts shipment and apologized for delay. Offered 20% future discount."
      });
    }

    // Automatically re-run audit to reflect fix
    return this.auditDispute(id);
  }

  /**
   * Explicitly approve a dispute dossier for submission.
   * @param {string} id
   * @param {string} [notes]
   */
  approveDossier(id, notes = "Approved by merchant operator for Second Presentment submission.") {
    const dispute = this.getDispute(id);

    if (!dispute.auditResult) {
      this.auditDispute(id);
    }

    const dossier = this.generateDossier(id);

    dispute.state = "APPROVED";
    dispute.reviewDecision = {
      decision: "APPROVED",
      decidedAt: new Date().toISOString(),
      operatorNotes: notes,
      lockedScore: dispute.auditResult.qualityScore,
      lockedTier: dispute.auditResult.qualityTier,
      dossierId: dossier.dossierId
    };

    return {
      status: "APPROVED_SUCCESS",
      disputeId: id,
      decision: dispute.reviewDecision,
      dossier
    };
  }

  /**
   * Explicitly reject a dispute dossier (accept loss / do not submit).
   * @param {string} id
   * @param {string} [reason]
   */
  rejectDossier(id, reason = "Rejected due to deficient evidence / risk of automatic issuer penalty.") {
    const dispute = this.getDispute(id);

    if (!dispute.auditResult) {
      this.auditDispute(id);
    }

    dispute.state = "REJECTED";
    dispute.reviewDecision = {
      decision: "REJECTED",
      decidedAt: new Date().toISOString(),
      operatorNotes: reason,
      lockedScore: dispute.auditResult.qualityScore,
      lockedTier: dispute.auditResult.qualityTier,
      disposition: "DISPUTE_ACCEPTED_LOSS"
    };

    return {
      status: "REJECTED_SUCCESS",
      disputeId: id,
      decision: dispute.reviewDecision
    };
  }
}
