# ChargeDossier: Reproducibility Guide & Verification Suite

**Project:** Mastercard Opportunity Lab — ChargeDossier  
**Paper:** *Deterministic Decision Support for Payment Dispute Evidence: A Synthetic Case Evaluation of Explainable Pre-Submission Auditing*  
**Author:** Pragy Mathur (pragymathur12@gmail.com)  
**Date:** October 2026  
**Repository:** [https://github.com/pragymathur12-king/chargedossier](https://github.com/pragymathur12-king/chargedossier)  
**Live Prototype:** [https://pragymathur12-king.github.io/chargedossier/](https://pragymathur12-king.github.io/chargedossier/)  

---

## 1. System Requirements & Environment

ChargeDossier was deliberately engineered with **zero external dependencies** (`node_modules` is empty). All scoring logic, API routes, and testing harnesses execute entirely on native Node.js and web platform standards.

* **Operating System:** Windows 10/11, macOS 12+, or modern Linux distribution.
* **Runtime:** Node.js v18.0.0 or higher (v20+ recommended for native `--test` runner).
* **Memory & Storage:** <50 MB RAM, <20 MB disk space.
* **Browser:** Any modern standards-compliant browser (Microsoft Edge, Google Chrome, Mozilla Firefox, Safari).

---

## 2. Quickstart Execution (Under 60 Seconds)

### Step 1: Clone the Repository
```powershell
git clone https://github.com/pragymathur12-king/chargedossier.git
cd chargedossier
```

### Step 2: Run the Automated Test Suite
Execute the native Node.js test runner across all unit, server integration, and end-to-end workflow test suites:
```powershell
node --test tests/*.test.js
```

#### Expected Test Output:
```
▶ ChargeDossier Rules Engine Tests
  ✔ Case DSP-1049 (High Quality Fraud): Qualifies as TIER_A with score >= 85
  ✔ Case DSP-2081 (Missing POD / In Transit): Qualifies as TIER_C with missing delivery proof
  ✔ Case DSP-3312 (Contradictory Freight Forwarder): Severe contradictions trigger heavy penalty
  ✔ Case DSP-4190 (Defective Merchandise with Missing Policy): Returns TIER_B with actionable fixes
  ✔ Engine throws on null or undefined dispute input
  ✔ Score Boundary Tests: 80 qualifies for TIER_A, 79 for TIER_B, 59 for TIER_C
  ✔ Defensive Resilience: Incomplete payload with missing nested objects does not throw
✔ ChargeDossier Rules Engine Tests

▶ ChargeDossier HTTP Server Integration Tests
  ✔ GET /api/disputes returns list of 4 synthetic disputes
  ✔ GET /api/disputes/DSP-1049 returns complete dispute details
  ✔ POST /api/disputes/DSP-1049/audit evaluates evidence to TIER_A
  ✔ POST /api/disputes/DSP-1049/dossier generates structured Second Presentment
  ✔ POST /api/disputes/DSP-1049/approve transitions state to APPROVED
  ✔ POST /api/disputes/DSP-2081/reject transitions state to REJECTED
  ✔ POST /api/disputes/DSP-4190/fix remediates missing policy and updates score
  ✔ POST /api/reset restores all disputes to UNREVIEWED state
  ✔ OPTIONS /api/disputes handles CORS preflight with 204
  ✔ GET /api/disputes/NONEXISTENT returns 400 error
  ✔ GET / and /index.html serve 200 OK text/html
  ✔ GET /src/data/disputes.js serves 200 OK text/javascript
  ✔ GET /nonexistent-file.css returns 404
✔ ChargeDossier HTTP Server Integration Tests

▶ ChargeDossier End-to-End Workflow Tests
  ✔ Workflow 1: Complete Happy Path (Inspect, Audit, Generate Dossier, Approve)
  ✔ Workflow 2: Deficient Dispute Explicit Rejection (DSP-2081)
  ✔ Workflow 3: Interactive Gap Remediation (DSP-4190 Fixes Gap -> Improves Score -> Approves)
  ✔ Workflow 4: Reset Demonstration Functionality
✔ ChargeDossier End-to-End Workflow Tests

ℹ tests 24
ℹ suites 3
ℹ pass 24
ℹ fail 0
```

### Step 3: Run the Latency & Deterministic Stability Benchmark
Execute the standalone performance micro-benchmark (100 warmup runs, 1,000 iterations per dispute = 4,000 evaluations total):
```powershell
node tests/benchmark.js
```

#### Expected Benchmark Output:
```
Aggregate Mean Execution Latency: ~0.0099 ms (9.9 µs per audit)
Deterministic Score Stability:
DSP-1049: Score = 100/100 -> Score Variance = 0.0000 [PERFECT DETERMINISM]
DSP-2081: Score = 22/100  -> Score Variance = 0.0000 [PERFECT DETERMINISM]
DSP-3312: Score = 2/100   -> Score Variance = 0.0000 [PERFECT DETERMINISM]
DSP-4190: Score = 73/100  -> Score Variance = 0.0000 [PERFECT DETERMINISM]
STABILITY VERDICT: PASS (100% Deterministic Reproducibility)
```

---

## 3. Running the Interactive Prototype

### Option A: Local Native HTTP Server
1. Start the server:
   ```powershell
   node server.js
   ```
   *Expected output: `[ChargeDossier Server] Running at http://localhost:3000`*
2. Open `http://localhost:3000` in your browser.

### Option B: Standalone Static / GitHub Pages Execution
If running without Node.js, the entire application can be opened directly as a static file or accessed at the public URL:
* **Live Deployment:** [https://pragymathur12-king.github.io/chargedossier/](https://pragymathur12-king.github.io/chargedossier/)
* **Static File:** Double-click `index.html` to open in any web browser. The application includes a self-contained client-side fallback of the deterministic rules engine that functions identically without a server backend.

---

## 4. Benchmark Case Verification Protocol

Follow this exact protocol to replicate the empirical findings reported in Table 1 of the paper:

```
+----------------------------------------------------------------------------------------------------+
|                               BENCHMARK EMPIRICAL VERIFICATION STEPS                               |
+----------+---------+--------------------------+---------------+------------------------------------+
| CASE ID  | AMOUNT  | REASON CODE              | INITIAL SCORE | EXPECTED REACTION                  |
+----------+---------+--------------------------+---------------+------------------------------------+
| DSP-1049 | $349    | 4837 (Fraud)             | 100/100 (A)   | Passes all tests; approve dossier. |
| DSP-2081 | $295    | 4853 (Not Received)      | 22/100 (C)    | Weather delay flag; reject loss.   |
| DSP-3312 | $850    | 4837 (Fraud)             | 2/100 (C)     | Freight forwarder; reject loss.    |
| DSP-4190 | $1,150  | 4853 (Defective)         | 73/100 (B)    | Missing policy; fix -> 100/100.    |
+----------+---------+--------------------------+---------------+------------------------------------+
```

### Verification Step 1: Case DSP-1049 ($349.00 USD, Reason 4837)
1. In the left dispute queue, click **DSP-1049**.
2. Click **Run Quality Audit**.
3. *Verified Metric:* Audit score displays **100 / 100**, tier displays **TIER_A**, recommendation displays `APPROVE FOR PRESENTMENT`.
4. Click **Preview Dossier**. Verify Exhibits A through E are compiled.
5. Click **Approve Dossier (Simulated)** and submit. Verify badge switches to `APPROVED`.

### Verification Step 2: Case DSP-2081 ($295.00 USD, Reason 4853)
1. Click **DSP-2081**.
2. Click **Run Quality Audit**.
3. *Verified Metric:* Audit score drops to **22 / 100**, tier displays **TIER_C**, recommendation displays `REJECT AND ACCEPT LOSS`.
4. Contradiction banner highlights: `[CRITICAL_CONTRADICTION] Carrier tracking indicates package is in transit with severe weather delay. Delivery is incomplete under scheme rules.`
5. Click **Reject Dossier (Accept Loss)**. Verify badge switches to `REJECTED`.

### Verification Step 3: Case DSP-3312 ($850.00 USD, Reason 4837)
1. Click **DSP-3312**.
2. Click **Run Quality Audit**.
3. *Verified Metric:* Audit score evaluates to **2 / 100**, tier displays **TIER_C**, recommendation displays `REJECT AND ACCEPT LOSS`.
4. Contradiction banner flags billing/shipping mismatch to commercial freight forwarder, AVS rejection, and stolen card report.
5. Click **Reject Dossier (Accept Loss)**.

### Verification Step 4: Case DSP-4190 ($1,150.00 USD, Reason 4853)
1. Click **DSP-4190**.
2. Click **Run Quality Audit**.
3. *Verified Metric:* Audit score evaluates to **73 / 100**, tier displays **TIER_B**, recommendation displays `REVIEW REMEDIATION GAPS`.
4. An amber warning identifies missing published return policy and customer remedy documentation.
5. In the amber remediation panel, click **Attach Published Return Policy & Support Remedy**.
6. *Verified Metric:* Toast confirms remediation; the score dynamically recalculates to **100 / 100 (`TIER_A`)**.
7. Decision controls unlock; click **Approve Dossier (Simulated)** to complete representment.

### Verification Step 5: State Reset
1. Click **Reset Demo** in the top navigation bar.
2. *Verified Metric:* All 4 dispute records revert to `UNREVIEWED`, scores reset to `--`, and initial state is fully restored.

---

## 5. Architectural File Mapping

For peer reviewers inspecting the implementation, table 3 maps the core paper concepts to their exact source code files:

```
+----------------------------------------------------------------------------------------------------+
| TABLE 3: ARCHITECTURAL CODE MAPPING                                                                |
+------------------------------------+---------------------------------------------------------------+
| COMPONENT / CONCEPT                | SOURCE CODE LOCATION                                          |
+------------------------------------+---------------------------------------------------------------+
| Deterministic Heuristic Engine     | src/engine.js (evaluateDispute, compileDossier)               |
| Synthetic Benchmark Dataset        | src/data/disputes.js (4 representative disputes)              |
| Native HTTP REST API Server        | server.js (GET/POST endpoints, zero npm packages)             |
| Interactive Web Dashboard          | public/index.html, public/app.js, public/styles.css           |
| Engine Unit Tests                  | tests/engine.test.js (7 unit tests, boundary checks)          |
| API Integration Tests              | tests/server.test.js (13 integration tests, status codes)     |
| E2E Workflow Lifecycle Tests       | tests/workflow.test.js (4 end-to-end integration workflows)   |
| 16:9 Recruiter Presentation Deck   | docs/interview-presentation.html                              |
| Master Presentation Outline        | docs/interview-presentation.md                                |
| Recruiter Interview Q&A Guide      | docs/interview-qa.md                                          |
| Live Demo Sequence & Checklist     | docs/demo-checklist.md                                        |
+------------------------------------+---------------------------------------------------------------+
```
