/**
 * ChargeDossier End-to-End Workflow & State Machine Tests
 * 
 * Verifies full end-to-end workflow:
 * List -> Inspect -> Audit -> Fix -> Generate Dossier -> Approve/Reject -> Reset
 * Run with: node --test tests/workflow.test.js
 */

import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { DisputeStateManager } from "../src/state.js";

describe("ChargeDossier End-to-End Workflow Tests", () => {
  test("Workflow 1: Complete Happy Path (Inspect, Audit, Generate Dossier, Approve)", () => {
    const manager = new DisputeStateManager();

    // 1. List disputes
    const list = manager.listDisputes();
    assert.strictEqual(list.length, 4, "Should initialize with 4 synthetic disputes");
    assert.strictEqual(list[0].state, "UNREVIEWED");

    // 2. Select and audit DSP-1049
    const { dispute, auditResult } = manager.auditDispute("DSP-1049");
    assert.strictEqual(dispute.state, "AUDITED");
    assert.strictEqual(auditResult.qualityTier, "TIER_A");
    assert.ok(auditResult.qualityScore >= 85);

    // 3. Generate structured dossier
    const dossier = manager.generateDossier("DSP-1049");
    assert.ok(dossier.dossierId.startsWith("DOS-DSP-1049"));
    assert.strictEqual(dossier.exhibits.length, 5, "Should have 5 exhibits (A through E)");
    assert.ok(dossier.rebuttalNarrative.includes("Second Presentment"));

    // 4. Explicitly Approve
    const approval = manager.approveDossier("DSP-1049", "Operator confirmed signature and customer satisfaction log.");
    assert.strictEqual(approval.status, "APPROVED_SUCCESS");
    assert.strictEqual(manager.getDispute("DSP-1049").state, "APPROVED");
    assert.strictEqual(manager.getDispute("DSP-1049").reviewDecision.decision, "APPROVED");
  });

  test("Workflow 2: Deficient Dispute Explicit Rejection (DSP-2081)", () => {
    const manager = new DisputeStateManager();

    // 1. Audit DSP-2081
    const { auditResult } = manager.auditDispute("DSP-2081");
    assert.strictEqual(auditResult.qualityTier, "TIER_C");
    assert.strictEqual(auditResult.recommendedAction, "REJECT_AND_ACCEPT_LOSS");

    // 2. Explicitly Reject
    const rejection = manager.rejectDossier("DSP-2081", "Item still in transit; contesting will fail under scheme delivery requirements.");
    assert.strictEqual(rejection.status, "REJECTED_SUCCESS");
    assert.strictEqual(manager.getDispute("DSP-2081").state, "REJECTED");
    assert.strictEqual(manager.getDispute("DSP-2081").reviewDecision.decision, "REJECTED");
    assert.strictEqual(manager.getDispute("DSP-2081").reviewDecision.disposition, "DISPUTE_ACCEPTED_LOSS");
  });

  test("Workflow 3: Interactive Gap Remediation (DSP-4190 Fixes Gap -> Improves Score -> Approves)", () => {
    const manager = new DisputeStateManager();

    // 1. Initial Audit on DSP-4190
    const initial = manager.auditDispute("DSP-4190");
    const initialScore = initial.auditResult.qualityScore;
    assert.strictEqual(initial.auditResult.qualityTier, "TIER_B");
    assert.ok(initialScore < 80);

    // 2. Attach missing policy and remedy log via interactive patch
    const updated = manager.attachFix("DSP-4190", {
      refundPolicyAttached: true,
      customerSupportRemedyAttached: true
    });

    const newScore = updated.auditResult.qualityScore;
    assert.ok(newScore > initialScore, `New score (${newScore}) should exceed initial score (${initialScore})`);
    assert.strictEqual(updated.auditResult.qualityTier, "TIER_A", "Remediation should elevate case to TIER_A");

    // 3. Generate Dossier & Approve
    const dossier = manager.generateDossier("DSP-4190");
    assert.ok(dossier);
    const approval = manager.approveDossier("DSP-4190", "Attached published policy and customer support remedy offer.");
    assert.strictEqual(approval.status, "APPROVED_SUCCESS");
    assert.strictEqual(manager.getDispute("DSP-4190").state, "APPROVED");
  });

  test("Workflow 4: Reset Demonstration Functionality", () => {
    const manager = new DisputeStateManager();

    // Alter states
    manager.approveDossier("DSP-1049");
    manager.rejectDossier("DSP-2081");
    assert.strictEqual(manager.getDispute("DSP-1049").state, "APPROVED");
    assert.strictEqual(manager.getDispute("DSP-2081").state, "REJECTED");

    // Reset
    const resetResult = manager.reset();
    assert.strictEqual(resetResult.status, "RESET_SUCCESS");
    assert.strictEqual(resetResult.disputeCount, 4);

    // Verify all disputes returned to UNREVIEWED
    manager.listDisputes().forEach(d => {
      assert.strictEqual(d.state, "UNREVIEWED", `Dispute ${d.id} should be UNREVIEWED after reset`);
      assert.strictEqual(d.qualityScore, null);
      assert.strictEqual(d.reviewDecision, null);
    });
  });
});
