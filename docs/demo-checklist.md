# ChargeDossier: 5-Minute Live Demo Sequence & Checklist

**Project:** Mastercard Opportunity Lab — ChargeDossier  
**Target Roles:** Mastercard Product Management &middot; Open Finance Strategy &middot; Agentic AI  
**Repository:** [https://github.com/pragymathur12-king/chargedossier](https://github.com/pragymathur12-king/chargedossier)  
**Live Demo:** [https://pragymathur12-king.github.io/chargedossier/](https://pragymathur12-king.github.io/chargedossier/)  
**Disclaimer:** *Independent academic prototype operating in a synthetic sandbox. Not an official Mastercard product or certified tool.*

---

## 1. Pre-Demo Setup (1 Minute Before Call)

### Primary Setup (Local Web Server)
1. Open PowerShell / Terminal in project directory:
   ```powershell
   cd C:\Users\DELL\Documents\antigravity\nifty-brahmagupta
   ```
2. Start the native HTTP server:
   ```powershell
   npm.cmd start
   # or: node server.js
   ```
   *Expected console output: `[ChargeDossier Server] Running at http://localhost:3000`*
3. Open in browser: `http://localhost:3000`

### Fallback Procedure (If Local Server / Port 3000 Fails)
If port 3000 is blocked or Node server fails, **do not panic**:
* Open the live GitHub Pages deployment or open `index.html` directly in any modern browser:
  ```
  https://pragymathur12-king.github.io/chargedossier/
  ```
* *The application executes the deterministic rules engine client-side with 100% identical UI and interactive functionality.*

---

## 2. 5-Minute Live Demonstration Sequence

```
+----------------------------------------------------------------------------------------------------+
|                                    5-MINUTE DEMO TIME BUDGET                                       |
+-------------------+-----------------+--------------------------------------------------------------+
| TIME              | CASE / STEP     | CORE DEMONSTRATION FOCUS                                     |
+-------------------+-----------------+--------------------------------------------------------------+
| 0:00 - 0:30       | Introduction    | Problem brief, high-ticket AOV, 25% contingency margin drag. |
| 0:30 - 1:30       | Case DSP-1049   | Happy Path: AVS/CVC/3DS/Signature -> Score 100/100 (Tier A).|
| 1:30 - 2:30       | Case DSP-2081   | Fatal Flaw: In-Transit Package -> Score 22/100 -> Reject.    |
| 2:30 - 3:15       | Case DSP-3312   | Severe Contradictions: Freight forwarder bay -> Score 2/100. |
| 3:15 - 4:15       | Case DSP-4190   | Remediation: Missing policy (73/100) -> Attach -> 100/100.   |
| 4:15 - 4:45       | One-Click Reset | Restore baseline state in one click.                         |
| 4:45 - 5:00       | Wrap-up & Q&A   | 24 automated tests, zero dependencies, epistemic boundaries. |
+-------------------+-----------------+--------------------------------------------------------------+
```

---

### Step 1: Case DSP-1049 (Happy Path — Strong Evidence)
* **Scenario:** High-End Audio Headphones ($349.00 USD | Mastercard Reason Code 4837 Fraud).
* **Action:**
  1. Click on **DSP-1049** in the queue.
  2. Walk through the 4 evidence tabs:
     * *Order Details:* 18-month customer account tenure, 4 prior successful orders.
     * *Payment Auth:* AVS Street (`Y`), AVS Zip (`Y`), CVC (`M`), 3D Secure authenticated.
     * *Carrier POD:* Delivered with matching signature `"E. VANCE"`.
     * *Policy & Chat:* Terms accepted at checkout; customer confirmed satisfaction in Zendesk chat.
  3. Click **"Run Quality Audit"**:
     * Score circle animates to **100 / 100 (`TIER_A`)**.
     * Checklist items show green `PASS`.
     * Recommendation: `APPROVE FOR PRESENTMENT`.
  4. Click **"Preview Dossier"**: Show the formatted Executive Rebuttal Letter and Exhibits A through E modeled on Mastercom layout standards.
  5. Click **"Approve Dossier (Simulated)"** $\rightarrow$ Enter note $\rightarrow$ Click **"Confirm Approval"**:
     * State changes to `APPROVED` with a green status banner (`✓ Case Approved — Draft dossier locked for operator records`).

---

### Step 2: Case DSP-2081 (Fatal Flaw — Package in Transit)
* **Scenario:** Specialty Coffee Grinder ($295.00 USD | Reason Code 4853 Item Not Received).
* **Action:**
  1. Click on **DSP-2081** in the queue.
  2. Point out fulfillment tab: Carrier status is `"In Transit — Severe Weather Delay"`. No delivery scan exists.
  3. Click **"Run Quality Audit"**:
     * Score drops to **22 / 100 (`TIER_C`)**.
     * Red contradiction banner: `[CRITICAL_CONTRADICTION] Carrier tracking indicates package is in transit with severe weather delay. Delivery is incomplete under scheme rules.`
     * Recommendation: `REJECT AND ACCEPT LOSS`.
  4. Click **"Reject Dossier (Accept Loss)"** $\rightarrow$ Select reason $\rightarrow$ Click **"Confirm Rejection"**:
     * State updates to `REJECTED` with a red status banner (`✕ Case Closed — Loss accepted to avoid spending additional staff time on an unsuitable submission`).
     * *Key PM Point: "Accepting loss early prevents wasting 45 minutes of staff time on an unwinnable dispute."*

---

### Step 3: Case DSP-3312 (Severe Fraud Contradictions)
* **Scenario:** Ergonomic Standing Desk ($850.00 USD | Reason Code 4837 Fraud).
* **Action:**
  1. Click on **DSP-3312** in the queue.
  2. Note the discrepancies: Billing in Austin, TX vs. shipping to an unverified commercial freight-forwarding warehouse in Miami, FL; AVS failed (`N`); customer initiated phone complaint stating card was stolen.
  3. Click **"Run Quality Audit"**:
     * Score evaluates to **2 / 100 (`TIER_C`)**.
     * Highlights heavy mathematical contradiction penalties (-40 points).
     * *Key PM Point: "The deterministic rules engine prevents the merchant from submitting contradictory evidence that damages their reputation with acquiring processors."*

---

### Step 4: Case DSP-4190 (Interactive Remediation — Missing Policy Gap)
* **Scenario:** Modular Bed Frame ($1,150.00 USD | Reason Code 4853 Defective Merchandise).
* **Action:**
  1. Click on **DSP-4190** in the queue.
  2. Point out that the item was delivered with a signature, but the customer reported a cracked wooden slat.
  3. Click **"Run Quality Audit"**:
     * Initial score evaluates to **73 / 100 (`TIER_B`)**.
     * Amber alert box: `Missing published return policy on 4853 defect claim.`
     * Amber remediation drawer surfaces below the rules table.
  4. Click **"Attach Published Return Policy & Support Remedy"**:
     * Toast notification fires: `Remediation Applied: Attached published warranty policy & support remedy. Evidence score elevated to TIER_A!`
     * The score recalculates dynamically to **100 / 100 (`TIER_A`)**.
     * Decision controls activate, allowing the operator to approve the newly strengthened dossier draft.
     * *Key PM Point: "This demonstrates the core value of human-in-the-loop review: catching fixable evidentiary gaps on high-ticket merchandise claims that automated bots miss."*

---

### Step 5: One-Click Demo Reset
* **Action:**
  1. Click **"Reset Demo"** in the top navigation bar.
  2. Toast notification fires: `Demo Reset: All 4 synthetic dispute records restored to initial UNREVIEWED state.`
  3. Show that all 4 disputes return to neutral gray badges, audit cards clear to `--`, and the queue is restored to its clean baseline.

---

## 3. Post-Demo Wrap-up Checklist
* [ ] Mention that the system runs with **zero external dependencies** and is verified by **24 automated tests**.
* [ ] Emphasize epistemic boundaries: the prototype proves technical and heuristic feasibility; customer willingness to pay ($49/month) remains an unvalidated hypothesis to be tested in Phase 2B.
* [ ] Point the interviewer to [`docs/case-study.md`](case-study.md) and [`docs/interview-presentation.md`](interview-presentation.md).
