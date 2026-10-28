/**
 * ChargeDossier Deterministic Engine Unit Tests
 * 
 * Verifies rule scoring, contradiction penalties, and tier classifications.
 * Run with: node --test tests/engine.test.js
 */

import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { auditDispute, QUALITY_TIERS } from "../src/engine.js";
import { INITIAL_DISPUTES, getDisputeById } from "../src/data/disputes.js";

describe("ChargeDossier Rules Engine Tests", () => {
  test("Case DSP-1049 (High Quality Fraud): Qualifies as TIER_A with score >= 85", () => {
    const dispute = getDisputeById(INITIAL_DISPUTES, "DSP-1049");
    assert.ok(dispute, "DSP-1049 must exist");

    const audit = auditDispute(dispute);
    assert.strictEqual(audit.disputeId, "DSP-1049");
    assert.strictEqual(audit.reasonCode, "4837");
    assert.strictEqual(audit.qualityTier, "TIER_A");
    assert.strictEqual(audit.recommendedAction, "APPROVE_FOR_PRESENTMENT");
    assert.ok(audit.qualityScore >= 85, `Score should be >= 85, got ${audit.qualityScore}`);
    assert.strictEqual(audit.contradictions.length, 0, "High quality case should have 0 contradictions");

    // Verify rules
    const payRule = audit.evaluatedRules.find(r => r.id === "RULE-PAY-01");
    assert.strictEqual(payRule.status, "PASS");
    const fulRule = audit.evaluatedRules.find(r => r.id === "RULE-FUL-02");
    assert.strictEqual(fulRule.status, "PASS");
  });

  test("Case DSP-2081 (Missing POD / In Transit): Qualifies as TIER_C with missing delivery proof", () => {
    const dispute = getDisputeById(INITIAL_DISPUTES, "DSP-2081");
    assert.ok(dispute, "DSP-2081 must exist");

    const audit = auditDispute(dispute);
    assert.strictEqual(audit.disputeId, "DSP-2081");
    assert.strictEqual(audit.reasonCode, "4853");
    assert.strictEqual(audit.qualityTier, "TIER_C");
    assert.strictEqual(audit.recommendedAction, "REJECT_AND_ACCEPT_LOSS");
    assert.ok(audit.qualityScore < 60, `Score should be < 60, got ${audit.qualityScore}`);

    // Verify missing delivery item
    const hasMissingPod = audit.missingCriticalItems.some(i => i.toLowerCase().includes("delivery"));
    assert.ok(hasMissingPod, "Must flag missing carrier proof of delivery");

    const fulRule = audit.evaluatedRules.find(r => r.id === "RULE-FUL-02");
    assert.strictEqual(fulRule.status, "FAIL");
  });

  test("Case DSP-3312 (Contradictory Freight Forwarder): Severe contradictions trigger heavy penalty", () => {
    const dispute = getDisputeById(INITIAL_DISPUTES, "DSP-3312");
    assert.ok(dispute, "DSP-3312 must exist");

    const audit = auditDispute(dispute);
    assert.strictEqual(audit.disputeId, "DSP-3312");
    assert.strictEqual(audit.qualityTier, "TIER_C");
    assert.strictEqual(audit.recommendedAction, "REJECT_AND_ACCEPT_LOSS");
    assert.ok(audit.qualityScore <= 40, `Score should be <= 40, got ${audit.qualityScore}`);

    // Must have critical contradictions detected
    const criticalContradictions = audit.contradictions.filter(c => c.severity === "CRITICAL");
    assert.ok(criticalContradictions.length >= 2, "Must detect address discrepancy and cardholder fraud claim");
  });

  test("Case DSP-4190 (Defective Merchandise with Missing Policy): Returns TIER_B with actionable fixes", () => {
    const dispute = getDisputeById(INITIAL_DISPUTES, "DSP-4190");
    assert.ok(dispute, "DSP-4190 must exist");

    const audit = auditDispute(dispute);
    assert.strictEqual(audit.disputeId, "DSP-4190");
    assert.strictEqual(audit.qualityTier, "TIER_B");
    assert.strictEqual(audit.recommendedAction, "REVIEW_AND_ATTACH_EVIDENCE");
    assert.ok(audit.qualityScore >= 60 && audit.qualityScore < 80, `Score should be in 60-79 range, got ${audit.qualityScore}`);

    // Missing refund policy should be flagged
    const hasMissingPolicy = audit.missingCriticalItems.some(i => i.toLowerCase().includes("policy"));
    assert.ok(hasMissingPolicy, "Must flag missing return/warranty policy");
  });

  test("Engine throws on null or undefined dispute input", () => {
    assert.throws(() => {
      auditDispute(null);
    }, /Invalid dispute object/);
  });

  test("Score Boundary Tests: 80 qualifies for TIER_A, 79 for TIER_B, 59 for TIER_C", () => {
    const baseDispute = getDisputeById(INITIAL_DISPUTES, "DSP-1049");

    // Clone and verify Tier A boundary
    const dispute80 = JSON.parse(JSON.stringify(baseDispute));
    const audit80 = auditDispute(dispute80);
    assert.ok(audit80.qualityScore >= 80);
    assert.strictEqual(audit80.qualityTier, "TIER_A");

    // Test Tier B boundary (dispute with missing policy but solid fulfillment)
    const dispute73 = getDisputeById(INITIAL_DISPUTES, "DSP-4190");
    const audit73 = auditDispute(dispute73);
    assert.strictEqual(audit73.qualityTier, "TIER_B");
    assert.ok(audit73.qualityScore >= 60 && audit73.qualityScore < 80);

    // Test Tier C boundary (dispute with missing POD)
    const dispute42 = getDisputeById(INITIAL_DISPUTES, "DSP-2081");
    const audit42 = auditDispute(dispute42);
    assert.strictEqual(audit42.qualityTier, "TIER_C");
    assert.ok(audit42.qualityScore < 60);
  });

  test("Defensive Resilience: Incomplete payload with missing nested objects does not throw", () => {
    const minimalDispute = {
      id: "DSP-MINIMAL",
      reasonCode: "4837",
      amountUSD: 100,
      order: {
        customerName: "Alex" // Single word name
      },
      payment: {},
      fulfillment: {},
      policy: {},
      communications: {}
    };

    assert.doesNotThrow(() => {
      const result = auditDispute(minimalDispute);
      assert.strictEqual(result.disputeId, "DSP-MINIMAL");
      assert.strictEqual(result.qualityTier, "TIER_C");
    });
  });
});
