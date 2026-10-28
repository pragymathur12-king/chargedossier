/**
 * ChargeDossier Interactive Web Application
 * 
 * Drives the dispute queue, evidence inspection, deterministic rules engine,
 * interactive remediation, structured dossier preview, and decision lifecycle.
 * Runs 100% in-browser with zero external dependencies.
 */

import { DisputeStateManager } from "./src/state.js";

class ChargeDossierApp {
  constructor() {
    this.stateManager = new DisputeStateManager();
    this.currentDisputeId = null;
    this.currentDispute = null;
    this.currentAudit = null;
    this.currentDossier = null;

    this.initElements();
    this.bindEvents();
  }

  async start() {
    this.loadQueue();
    // Default select first dispute
    if (this.disputesList && this.disputesList.length > 0) {
      this.selectDispute(this.disputesList[0].id);
    }
  }

  initElements() {
    this.queueContainer = document.getElementById("dispute-list");
    this.queueCount = document.getElementById("queue-count");
    this.btnReset = document.getElementById("btn-reset-demo");
    this.toastContainer = document.getElementById("toast-container");

    // Hero elements
    this.heroDisputeId = document.getElementById("hero-dispute-id");
    this.heroStateBadge = document.getElementById("hero-state-badge");
    this.heroTierBadge = document.getElementById("hero-tier-badge");
    this.heroProductName = document.getElementById("hero-product-name");
    this.heroNetwork = document.getElementById("hero-network");
    this.heroReasonCode = document.getElementById("hero-reason-code");
    this.heroDeadline = document.getElementById("hero-deadline");
    this.heroAmount = document.getElementById("hero-amount");
    this.heroOrderId = document.getElementById("hero-order-id");

    // Inspection fields
    this.inspCustName = document.getElementById("insp-cust-name");
    this.inspCustEmail = document.getElementById("insp-cust-email");
    this.inspTenure = document.getElementById("insp-tenure");
    this.inspPriorOrders = document.getElementById("insp-prior-orders");
    this.inspBilling = document.getElementById("insp-billing-address");
    this.inspShipping = document.getElementById("insp-shipping-address");

    this.inspGateway = document.getElementById("insp-gateway");
    this.inspCard = document.getElementById("insp-card");
    this.inspAvsStreet = document.getElementById("insp-avs-street");
    this.inspAvsZip = document.getElementById("insp-avs-zip");
    this.inspCvc = document.getElementById("insp-cvc");
    this.insp3ds = document.getElementById("insp-3ds");
    this.inspIpGeo = document.getElementById("insp-ip-geo");

    this.inspCarrierTracking = document.getElementById("insp-carrier-tracking");
    this.inspCarrierStatus = document.getElementById("insp-carrier-status");
    this.inspDeliveryDate = document.getElementById("insp-delivery-date");
    this.inspDestMatch = document.getElementById("insp-dest-match");
    this.inspSignature = document.getElementById("insp-signature");

    this.inspTermsAccepted = document.getElementById("insp-terms-accepted");
    this.inspRefundPolicy = document.getElementById("insp-refund-policy");
    this.inspCommRecords = document.getElementById("insp-comm-records");
    this.attachedExhibitsList = document.getElementById("attached-exhibits-list");
    this.exhibitCountBadge = document.getElementById("exhibit-count-badge");

    // Audit card
    this.btnRunAudit = document.getElementById("btn-run-audit");
    this.scoreCircle = document.getElementById("score-circle");
    this.scoreVal = document.getElementById("score-val");
    this.tierPill = document.getElementById("tier-pill");
    this.tierDesc = document.getElementById("tier-desc");
    this.recActionText = document.getElementById("rec-action-text");
    this.contradictionsBox = document.getElementById("contradictions-box");
    this.contradictionsList = document.getElementById("contradictions-list");
    this.fixesBox = document.getElementById("fixes-box");
    this.fixesList = document.getElementById("fixes-list");
    this.fixActionContainer = document.getElementById("fix-action-container");
    this.btnApplyFix = document.getElementById("btn-apply-fix");
    this.rulesTableBody = document.getElementById("rules-table-body");

    // Dossier card & actions
    this.btnToggleDossier = document.getElementById("btn-toggle-dossier");
    this.dossierPreviewBody = document.getElementById("dossier-preview-body");
    this.dossId = document.getElementById("doss-id");
    this.dossRebuttalNarrative = document.getElementById("doss-rebuttal-narrative");
    this.dossExhibitsManifest = document.getElementById("doss-exhibits-manifest");

    this.btnApprove = document.getElementById("btn-approve-dossier");
    this.btnReject = document.getElementById("btn-reject-dossier");
    this.decisionStatusBanner = document.getElementById("decision-status-banner");
    this.decisionButtonsGroup = document.getElementById("decision-buttons-group");
    this.decisionPromptText = document.getElementById("decision-prompt-text");

    // Modals
    this.modalApprove = document.getElementById("modal-approve");
    this.modalReject = document.getElementById("modal-reject");
    this.approveNotesInput = document.getElementById("approve-notes");
    this.rejectReasonSelect = document.getElementById("reject-reason");
    this.btnConfirmApprove = document.getElementById("btn-confirm-approve");
    this.btnConfirmReject = document.getElementById("btn-confirm-reject");
  }

  bindEvents() {
    // Tab switching
    document.querySelectorAll(".tab-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        document.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
        document.querySelectorAll(".tab-pane").forEach(p => p.classList.remove("active"));
        btn.classList.add("active");
        const target = document.getElementById(btn.dataset.tab);
        if (target) target.classList.add("active");
      });
    });

    // Reset button
    this.btnReset.addEventListener("click", () => {
      this.resetDemo();
    });

    // Run audit button
    this.btnRunAudit.addEventListener("click", () => {
      this.runAudit();
    });

    // Toggle dossier preview
    this.btnToggleDossier.addEventListener("click", () => {
      const isVisible = this.dossierPreviewBody.style.display !== "none";
      if (!isVisible && !this.currentDossier) {
        this.generateDossier();
      }
      this.dossierPreviewBody.style.display = isVisible ? "none" : "block";
      this.btnToggleDossier.textContent = isVisible ? "Preview Dossier" : "Hide Dossier Preview";
    });

    // Interactive fix button
    this.btnApplyFix.addEventListener("click", () => {
      this.applyFix();
    });

    // Approve / Reject modal triggers
    this.btnApprove.addEventListener("click", () => {
      if (!this.currentAudit) {
        this.showToast("Please run the Quality Audit before approving.", "warning");
        return;
      }
      this.modalApprove.style.display = "flex";
    });

    this.btnReject.addEventListener("click", () => {
      if (!this.currentAudit) {
        this.showToast("Please run the Quality Audit before rejecting.", "warning");
        return;
      }
      this.modalReject.style.display = "flex";
    });

    // Modal close buttons
    document.querySelectorAll("[data-close]").forEach(el => {
      el.addEventListener("click", () => {
        const modalId = el.dataset.close;
        const modal = document.getElementById(modalId);
        if (modal) modal.style.display = "none";
      });
    });

    // Confirm actions
    this.btnConfirmApprove.addEventListener("click", () => {
      const notes = this.approveNotesInput.value.trim() || "Approved by merchant operator.";
      this.confirmApprove(notes);
      this.modalApprove.style.display = "none";
    });

    this.btnConfirmReject.addEventListener("click", () => {
      const reason = this.rejectReasonSelect.value;
      this.confirmReject(reason);
      this.modalReject.style.display = "none";
    });
  }

  showToast(message, type = "info") {
    if (!this.toastContainer) return;
    const toast = document.createElement("div");
    toast.className = `toast toast-${type}`;
    toast.textContent = message;
    this.toastContainer.appendChild(toast);
    setTimeout(() => {
      toast.style.transition = "opacity 0.3s ease";
      toast.style.opacity = "0";
      setTimeout(() => toast.remove(), 300);
    }, 3500);
  }

  // ==========================================
  // DATA OPERATIONS (DETERMINISTIC STATE ENGINE)
  // ==========================================

  loadQueue() {
    this.disputesList = this.stateManager.listDisputes();
    this.renderQueue();
  }

  renderQueue() {
    this.queueContainer.innerHTML = "";
    this.queueCount.textContent = `${this.disputesList.length} Cases`;

    this.disputesList.forEach(item => {
      const el = document.createElement("div");
      el.className = `queue-item ${item.id === this.currentDisputeId ? "active" : ""}`;
      el.dataset.id = item.id;

      let badgeClass = "badge-neutral";
      if (item.state === "APPROVED") badgeClass = "badge-success";
      else if (item.state === "REJECTED") badgeClass = "badge-danger";
      else if (item.state === "AUDITED") badgeClass = "badge-warning";

      el.innerHTML = `
        <div class="item-top">
          <span class="item-id">${item.id}</span>
          <span class="item-amount">$${item.amountUSD.toFixed(2)}</span>
        </div>
        <div class="item-name">${item.productName}</div>
        <div class="item-meta">
          <span class="badge ${badgeClass}">${item.state}</span>
          <span class="item-reason">MC ${item.reasonCode}</span>
        </div>
      `;

      el.addEventListener("click", () => this.selectDispute(item.id));
      this.queueContainer.appendChild(el);
    });
  }

  selectDispute(id) {
    this.currentDisputeId = id;
    this.currentDossier = null;
    this.dossierPreviewBody.style.display = "none";
    this.btnToggleDossier.textContent = "Preview Dossier";

    // Update active highlight in queue
    document.querySelectorAll(".queue-item").forEach(el => {
      el.classList.toggle("active", el.dataset.id === id);
    });

    this.currentDispute = this.stateManager.getDispute(id);
    this.renderDisputeDetails();

    if (this.currentDispute && this.currentDispute.auditResult) {
      this.currentAudit = this.currentDispute.auditResult;
      this.renderAuditResults();
    } else {
      this.clearAuditResults();
    }

    this.updateDecisionControls(this.currentDispute.state);
  }

  clearAuditResults() {
    this.currentAudit = null;
    this.scoreVal.textContent = "--";
    this.scoreCircle.className = "score-circle";
    this.heroTierBadge.textContent = "Awaiting Audit";
    this.heroTierBadge.className = "badge badge-neutral";
    this.tierPill.textContent = "UNAUDITED";
    this.tierPill.className = "tier-pill badge-neutral";
    this.tierDesc.textContent = "Click 'Run Quality Audit' to assess evidence completeness against cardholder dispute heuristics.";
    this.recActionText.textContent = "Awaiting Quality Audit";
    this.contradictionsBox.style.display = "none";
    this.fixesBox.style.display = "none";
    this.rulesTableBody.innerHTML = `<tr><td colspan="3" class="text-muted" style="text-align: center; padding: 1.5rem;">Audit not yet executed. Click <strong>"Run Quality Audit"</strong> above to assess evidence rules.</td></tr>`;
  }

  updateDecisionControls(state) {
    if (!this.decisionStatusBanner || !this.decisionButtonsGroup) return;

    if (state === "APPROVED") {
      this.decisionStatusBanner.style.display = "flex";
      this.decisionStatusBanner.className = "decision-status-banner approved";
      this.decisionStatusBanner.innerHTML = `✓ Case Approved — Draft dossier locked for operator records (Simulated Action).`;
      this.decisionButtonsGroup.style.display = "none";
      if (this.decisionPromptText) {
        this.decisionPromptText.innerHTML = `<strong>Status:</strong> Case has been approved by merchant operator. To test other actions on this case, click <strong>Reset Demo</strong> above.`;
      }
    } else if (state === "REJECTED") {
      this.decisionStatusBanner.style.display = "flex";
      this.decisionStatusBanner.className = "decision-status-banner rejected";
      this.decisionStatusBanner.innerHTML = `✕ Case Closed — Loss accepted to avoid spending additional staff time on an unsuitable submission.`;
      this.decisionButtonsGroup.style.display = "none";
      if (this.decisionPromptText) {
        this.decisionPromptText.innerHTML = `<strong>Status:</strong> Case has been rejected (loss accepted). To test other actions on this case, click <strong>Reset Demo</strong> above.`;
      }
    } else {
      this.decisionStatusBanner.style.display = "none";
      this.decisionButtonsGroup.style.display = "flex";
      this.btnApprove.disabled = false;
      this.btnReject.disabled = false;
      if (this.decisionPromptText) {
        this.decisionPromptText.innerHTML = `<strong>Operator Review Checkpoint:</strong> Inspect evidence and choose whether to approve as an illustrative draft or reject to avoid spending additional staff time on an unsuitable submission.`;
      }
    }
  }

  renderDisputeDetails() {
    const d = this.currentDispute;
    if (!d) return;

    this.heroDisputeId.textContent = d.id;
    this.heroProductName.textContent = d.productName;
    this.heroNetwork.textContent = d.network;
    this.heroReasonCode.textContent = `${d.reasonCode} (${d.reasonDescription})`;
    this.heroDeadline.textContent = d.deadlineDate;
    this.heroAmount.textContent = `$${d.amountUSD.toFixed(2)} ${d.currency}`;
    this.heroOrderId.textContent = `Order #${d.order.orderId}`;

    this.updateStateBadge(d.state);

    // Order info
    this.inspCustName.textContent = d.order.customerName;
    this.inspCustEmail.textContent = d.order.customerEmail;
    this.inspTenure.textContent = `${d.order.customerAccountTenureMonths} Months`;
    this.inspPriorOrders.textContent = `${d.order.priorSuccessfulOrders} Orders`;
    this.inspBilling.textContent = `${d.order.billingAddress.line1}, ${d.order.billingAddress.city}, ${d.order.billingAddress.state} ${d.order.billingAddress.postalCode}`;
    this.inspShipping.textContent = `${d.order.shippingAddress.line1}, ${d.order.shippingAddress.city}, ${d.order.shippingAddress.state} ${d.order.shippingAddress.postalCode}`;

    // Payment info
    this.inspGateway.textContent = `${d.payment.gateway} (${d.payment.paymentIntentId})`;
    this.inspCard.textContent = `${d.payment.cardBrand} *${d.payment.cardLast4}`;
    this.inspAvsStreet.textContent = d.payment.avsAddressMatch === "Y" ? "Y (Exact Street Match)" : `${d.payment.avsAddressMatch} (Mismatch)`;
    this.inspAvsZip.textContent = d.payment.avsZipMatch === "Y" ? "Y (Zip Code Match)" : `${d.payment.avsZipMatch} (Mismatch)`;
    this.inspCvc.textContent = d.payment.cvcCheck === "M" ? "M (Security Code Match)" : `${d.payment.cvcCheck} (Failed)`;
    this.insp3ds.textContent = (d.payment.threeDSecure || "NONE").toUpperCase();
    this.inspIpGeo.textContent = `${d.payment.customerIp} (${d.payment.customerIpLocation})`;

    // Fulfillment info
    this.inspCarrierTracking.textContent = `${d.fulfillment.carrier} — ${d.fulfillment.trackingNumber}`;
    this.inspCarrierStatus.textContent = d.fulfillment.carrierStatus;
    this.inspDeliveryDate.textContent = d.fulfillment.deliveryDate || "Not Delivered";
    this.inspDestMatch.textContent = d.fulfillment.deliveryAddressMatch ? "MATCH (Destination verified)" : "MISMATCH (Wrong destination)";
    this.inspSignature.textContent = d.fulfillment.signatureCaptured
      ? `Captured: Signed by "${d.fulfillment.signedBy}"`
      : "No Signature Captured";

    // Policy info
    this.inspTermsAccepted.textContent = d.policy.termsAcceptedAtCheckout
      ? `Yes (Timestamp: ${d.policy.termsAcceptedTimestamp})`
      : "No terms acceptance recorded";
    this.inspRefundPolicy.textContent = d.policy.refundPolicyAttached
      ? "Attached (30-day published return & replacement policy)"
      : "MISSING (No published return policy attached)";

    // Communication records
    if (d.communications.records && d.communications.records.length > 0) {
      this.inspCommRecords.innerHTML = d.communications.records.map(r => `
        <div style="margin-bottom: 0.5rem; border-left: 2px solid #38bdf8; padding-left: 0.5rem;">
          <strong style="color: #38bdf8;">${r.channel}</strong> &middot; <span style="color: #94a3b8; font-size: 0.75rem;">${r.timestamp.split("T")[0]}</span><br>
          <span style="color: #f1f5f9;">${r.author}:</span> ${r.summary}
        </div>
      `).join("");
    } else {
      this.inspCommRecords.textContent = "No customer support transcripts recorded.";
    }

    // Attached exhibits
    this.attachedExhibitsList.innerHTML = d.attachedEvidence.map(ev => `
      <li class="exhibit-item">
        <span>${ev.title}</span>
        <span class="exhibit-tag">${ev.type}</span>
      </li>
    `).join("");
    this.exhibitCountBadge.textContent = `${d.attachedEvidence.length} Exhibits`;

    // Fix button visibility for DSP-4190
    if (d.id === "DSP-4190" && !d.policy.refundPolicyAttached) {
      this.fixActionContainer.style.display = "block";
    } else {
      this.fixActionContainer.style.display = "none";
    }
  }

  updateStateBadge(state) {
    this.heroStateBadge.textContent = state;
    this.heroStateBadge.className = "badge";
    if (state === "APPROVED") this.heroStateBadge.classList.add("badge-success");
    else if (state === "REJECTED") this.heroStateBadge.classList.add("badge-danger");
    else if (state === "AUDITED") this.heroStateBadge.classList.add("badge-warning");
    else this.heroStateBadge.classList.add("badge-neutral");
  }

  runAudit() {
    const id = this.currentDisputeId;
    if (!id) return;

    const result = this.stateManager.auditDispute(id);
    this.currentDispute = result.dispute;
    this.currentAudit = result.auditResult;

    this.renderAuditResults();
    this.updateStateBadge(this.currentDispute.state);
    this.updateDecisionControls(this.currentDispute.state);
    this.loadQueue();
    this.showToast(`Audit Completed: Case ${id} evaluated to ${this.currentAudit.qualityTier} (${this.currentAudit.qualityScore}/100)`, "info");
  }

  renderAuditResults() {
    const a = this.currentAudit;
    if (!a) return;

    // Score circle
    this.scoreVal.textContent = a.qualityScore;
    this.scoreCircle.className = "score-circle";
    if (a.qualityTier === "TIER_A") this.scoreCircle.classList.add("tier-a");
    else if (a.qualityTier === "TIER_B") this.scoreCircle.classList.add("tier-b");
    else this.scoreCircle.classList.add("tier-c");

    // Tier badge & narrative
    this.heroTierBadge.textContent = a.qualityLabel;
    this.heroTierBadge.className = `badge ${a.badgeClass}`;

    this.tierPill.textContent = a.qualityLabel;
    this.tierPill.className = `tier-pill ${a.badgeClass}`;
    this.tierDesc.textContent = a.summaryExplanation;

    // Recommendation
    let recLabel = a.recommendedAction.replace(/_/g, " ");
    this.recActionText.textContent = recLabel;

    // Contradictions
    if (a.contradictions && a.contradictions.length > 0) {
      this.contradictionsBox.style.display = "block";
      this.contradictionsList.innerHTML = a.contradictions.map(c => `
        <li><strong>[${c.severity}]</strong> ${c.message}</li>
      `).join("");
    } else {
      this.contradictionsBox.style.display = "none";
    }

    // Fixes
    if (a.actionableFixes && a.actionableFixes.length > 0) {
      this.fixesBox.style.display = "block";
      this.fixesList.innerHTML = a.actionableFixes.map(f => `<li>${f}</li>`).join("");
    } else {
      this.fixesBox.style.display = "none";
    }

    // Rules checklist
    this.rulesTableBody.innerHTML = a.evaluatedRules.map(r => {
      let bClass = "badge-neutral";
      if (r.status === "PASS") bClass = "badge-success";
      else if (r.status === "WARN") bClass = "badge-warning";
      else if (r.status === "FAIL") bClass = "badge-danger";

      return `
        <tr>
          <td><span class="badge ${bClass}">${r.status}</span></td>
          <td>
            <strong>${r.name}</strong><br>
            <span style="font-size: 0.76rem; color: #94a3b8;">${r.detail}</span><br>
            <span style="font-size: 0.72rem; color: #64748b; font-style: italic;">Why: ${r.whyIssuerCares}</span>
            ${r.actionToFix ? `<div style="font-size: 0.73rem; color: #f59e0b; margin-top: 0.2rem;">Fix: ${r.actionToFix}</div>` : ""}
          </td>
          <td style="font-family: monospace; font-weight: bold; color: ${r.status === 'PASS' ? '#34d399' : '#f87171'};">
            ${r.awardedPoints}/${r.maxPoints}
          </td>
        </tr>
      `;
    }).join("");
  }

  applyFix() {
    const id = this.currentDisputeId;
    if (id !== "DSP-4190") return;

    const result = this.stateManager.attachFix(id, {
      refundPolicyAttached: true,
      customerSupportRemedyAttached: true
    });
    this.currentDispute = result.dispute;
    this.currentAudit = result.auditResult;

    this.fixActionContainer.style.display = "none";
    this.renderDisputeDetails();
    this.renderAuditResults();
    this.loadQueue();
    this.showToast("Remediation Applied: Attached published warranty policy & support remedy. Evidence score elevated to TIER_A!", "success");
  }

  generateDossier() {
    const id = this.currentDisputeId;
    if (!id) return;

    this.currentDossier = this.stateManager.generateDossier(id);
    this.renderDossier();
  }

  renderDossier() {
    const d = this.currentDossier;
    if (!d) return;

    this.dossId.textContent = d.dossierId;
    this.dossRebuttalNarrative.textContent = d.rebuttalNarrative;

    this.dossExhibitsManifest.innerHTML = d.exhibits.map(ex => `
      <div class="doss-exhibit-card">
        <strong style="color: #38bdf8;">${ex.exhibitId}: ${ex.title}</strong><br>
        <span style="color: #cbd5e1; font-size: 0.78rem;">${ex.description}</span>
      </div>
    `).join("");
  }

  confirmApprove(notes) {
    const id = this.currentDisputeId;
    this.stateManager.approveDossier(id, notes);
    this.loadQueue();
    this.selectDispute(id);
    this.showToast(`Dossier Approved! Case ${id} marked as APPROVED. Draft dossier locked for operator records (Simulated Action).`, "success");
  }

  confirmReject(reason) {
    const id = this.currentDisputeId;
    this.stateManager.rejectDossier(id, reason);
    this.loadQueue();
    this.selectDispute(id);
    this.showToast(`Dossier Rejected. Case ${id} marked as REJECTED. Loss accepted to avoid staff time on unviable submission (Simulated Action).`, "danger");
  }

  resetDemo() {
    this.stateManager.reset();
    this.loadQueue();
    if (this.disputesList.length > 0) {
      this.selectDispute(this.disputesList[0].id);
    }
    this.showToast("Demo Reset: All 4 synthetic dispute records restored to initial UNREVIEWED state.", "success");
  }
}

// Initialize on DOM ready
document.addEventListener("DOMContentLoaded", () => {
  const app = new ChargeDossierApp();
  app.start();
});
