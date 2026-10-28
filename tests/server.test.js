/**
 * ChargeDossier HTTP Server In-Memory Integration Tests
 * 
 * Tests the HTTP server request router, REST API endpoints, JSON responses,
 * error handling, and static file serving using in-memory streams.
 * Complies with sandbox network isolation.
 * Run with: node --test tests/server.test.js
 */

import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { EventEmitter } from "node:events";
import { Writable } from "node:stream";
import { server } from "../server.js";

/**
 * Simulate an HTTP request against the server without binding a TCP port.
 */
function simulateRequest(urlPath, method = "GET", body = null) {
  return new Promise((resolve, reject) => {
    // Mock IncomingMessage (Readable stream)
    const req = new EventEmitter();
    req.method = method;
    req.url = urlPath;
    req.headers = {
      host: "localhost:3000",
      "content-type": "application/json"
    };

    // Mock ServerResponse (Writable stream)
    let statusCode = 200;
    const headers = {};
    let responseData = "";

    const res = new Writable({
      write(chunk, encoding, callback) {
        responseData += chunk.toString();
        callback();
      }
    });

    res.writeHead = (code, hdrs) => {
      statusCode = code;
      if (hdrs) {
        for (const [k, v] of Object.entries(hdrs)) {
          headers[k.toLowerCase()] = v;
        }
      }
      return res;
    };

    res.setHeader = (k, v) => {
      headers[k.toLowerCase()] = v;
    };

    res.on("finish", () => {
      try {
        const json = JSON.parse(responseData);
        resolve({ status: statusCode, headers, body: json });
      } catch {
        resolve({ status: statusCode, headers, raw: responseData });
      }
    });

    // Emit request into HTTP server
    server.emit("request", req, res);

    // Send payload chunks
    if (body) {
      req.emit("data", Buffer.from(JSON.stringify(body)));
    }
    req.emit("end");
  });
}

describe("ChargeDossier HTTP Server Integration Tests", () => {
  test("GET /api/disputes returns list of 4 synthetic disputes", async () => {
    const res = await simulateRequest("/api/disputes");
    assert.strictEqual(res.status, 200);
    assert.strictEqual(res.body.success, true);
    assert.strictEqual(res.body.count, 4);
    assert.ok(Array.isArray(res.body.disputes));
  });

  test("GET /api/disputes/DSP-1049 returns complete dispute details", async () => {
    const res = await simulateRequest("/api/disputes/DSP-1049");
    assert.strictEqual(res.status, 200);
    assert.strictEqual(res.body.success, true);
    assert.strictEqual(res.body.dispute.id, "DSP-1049");
    assert.strictEqual(res.body.dispute.amountUSD, 349.00);
  });

  test("POST /api/disputes/DSP-1049/audit evaluates evidence to TIER_A", async () => {
    const res = await simulateRequest("/api/disputes/DSP-1049/audit", "POST");
    assert.strictEqual(res.status, 200);
    assert.strictEqual(res.body.success, true);
    assert.strictEqual(res.body.auditResult.qualityTier, "TIER_A");
    assert.strictEqual(res.body.auditResult.recommendedAction, "APPROVE_FOR_PRESENTMENT");
  });

  test("POST /api/disputes/DSP-1049/dossier generates structured Second Presentment", async () => {
    const res = await simulateRequest("/api/disputes/DSP-1049/dossier", "POST");
    assert.strictEqual(res.status, 200);
    assert.strictEqual(res.body.success, true);
    assert.ok(res.body.dossier.dossierId.startsWith("DOS-DSP-1049"));
    assert.ok(res.body.dossier.rebuttalNarrative.includes("Second Presentment"));
    assert.strictEqual(res.body.dossier.exhibits.length, 5);
  });

  test("POST /api/disputes/DSP-1049/approve transitions state to APPROVED", async () => {
    const res = await simulateRequest("/api/disputes/DSP-1049/approve", "POST", {
      notes: "Audit verified. All rules passed."
    });
    assert.strictEqual(res.status, 200);
    assert.strictEqual(res.body.success, true);
    assert.strictEqual(res.body.decision.decision, "APPROVED");

    // Check detail
    const detail = await simulateRequest("/api/disputes/DSP-1049");
    assert.strictEqual(detail.body.dispute.state, "APPROVED");
  });

  test("POST /api/disputes/DSP-2081/reject transitions state to REJECTED", async () => {
    const res = await simulateRequest("/api/disputes/DSP-2081/reject", "POST", {
      reason: "Item still in transit."
    });
    assert.strictEqual(res.status, 200);
    assert.strictEqual(res.body.success, true);
    assert.strictEqual(res.body.decision.decision, "REJECTED");

    // Check detail
    const detail = await simulateRequest("/api/disputes/DSP-2081");
    assert.strictEqual(detail.body.dispute.state, "REJECTED");
  });

  test("POST /api/disputes/DSP-4190/fix remediates missing policy and updates score", async () => {
    const res = await simulateRequest("/api/disputes/DSP-4190/fix", "POST", {
      refundPolicyAttached: true,
      customerSupportRemedyAttached: true
    });
    assert.strictEqual(res.status, 200);
    assert.strictEqual(res.body.success, true);
    assert.strictEqual(res.body.auditResult.qualityTier, "TIER_A");
  });

  test("POST /api/reset restores all disputes to UNREVIEWED state", async () => {
    const res = await simulateRequest("/api/reset", "POST");
    assert.strictEqual(res.status, 200);
    assert.strictEqual(res.body.success, true);

    const list = await simulateRequest("/api/disputes");
    list.body.disputes.forEach(d => {
      assert.strictEqual(d.state, "UNREVIEWED");
    });
  });

  test("OPTIONS /api/disputes handles CORS preflight with 204", async () => {
    const res = await simulateRequest("/api/disputes", "OPTIONS");
    assert.strictEqual(res.status, 204);
  });

  test("GET /api/disputes/NONEXISTENT returns 400 error", async () => {
    const res = await simulateRequest("/api/disputes/NONEXISTENT");
    assert.strictEqual(res.status, 400);
    assert.strictEqual(res.body.success, false);
    assert.ok(res.body.error.includes("Dispute not found"));
  });

  test("GET / and /index.html serve 200 OK text/html", async () => {
    const res = await simulateRequest("/");
    assert.strictEqual(res.status, 200);
    assert.ok(res.headers["content-type"].includes("text/html"));
    assert.ok(res.raw.includes("ChargeDossier"));
  });

  test("GET /src/data/disputes.js serves 200 OK text/javascript", async () => {
    const res = await simulateRequest("/src/data/disputes.js");
    assert.strictEqual(res.status, 200);
    assert.ok(res.headers["content-type"].includes("text/javascript"));
    assert.ok(res.raw.includes("INITIAL_DISPUTES"));
  });

  test("GET /nonexistent-file.css returns 404", async () => {
    const res = await simulateRequest("/nonexistent-file.css");
    assert.strictEqual(res.status, 404);
  });
});
