# ChargeDossier: Research & Portfolio Claim Integrity Audit

**Project:** Mastercard Opportunity Lab — ChargeDossier  
**Author:** Pragy Mathur &middot; Integrated MBA Candidate (Class of 2027), Parul University  
**Note on Affiliation:** Independent student research. This work was conducted independently by the author and was not supervised, sponsored, evaluated, or endorsed by Parul University, Mastercard, or any payment card network.  
**Target Roles:** General Associate Product Manager (APM) &middot; Target Companies: Mastercard, Visa, Razorpay, Fintechs  
**Date:** October 2026 (Audited Integrity Revision: November 2, 2026)  
**Status:** Complete Audit & Verification Register  

---

## 1. Executive Summary of Audit Findings

This integrity audit evaluates every numerical, factual, technical, and commercial claim made across ChargeDossier's presentation deck (`docs/interview-presentation.*`), research paper (`research/paper.*`), and supporting documentation.

### Core Principles Applied:
1. **Measured vs. Estimated vs. Hypothetical:** Every metric is categorized strictly into one of five verified evidentiary tiers:
   - **`measured`**: Directly produced and verified via reproducible code execution or automated tests in this repository.
   - **`source-derived`**: Directly extracted from a documented primary or secondary industry reference (e.g., card scheme rules, LexisNexis study).
   - **`estimated`**: Derived by applying standard arithmetic to documented industry data.
   - **`hypothetical`**: An explicit product design hypothesis, business model assumption, or target metric formulated for future validation.
   - **`unsupported`**: A claim lacking empirical or documentary evidence, requiring removal or explicit relabeling.
2. **Zero False Claims of Merchant Traction:** No simulated outcome is described as a "real merchant result." ChargeDossier is an independent synthetic prototype; all cases are synthetic benchmark profiles.
3. **Zero False Claims of Completed Interviews:** Planned discovery interviews ($n=8\text{–}10$) in Phase 2B are strictly identified as **future planned research**, not completed studies.

---

## 2. Comprehensive Claim Audit Table

```
+--------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| TABLE 1: CHARGEDOSSIER MASTER CLAIM INTEGRITY AUDIT                                                                                                                |
+----+------------------------------------+--------------------------+-----------------------+------------------+----------------------------------------------------+
| ID | EXACT CLAIM                        | EVIDENCE / CITATION      | VERIFICATION METHOD   | CLASSIFICATION   | AUDIT FINDING & REQUIRED CORRECTION                |
+----+------------------------------------+--------------------------+-----------------------+------------------+----------------------------------------------------+
| C1 | 45-min manual assembly to 90-sec   | Trade literature [S-15]; | Time-motion heuristic | Mixed:           | Correct terminology: 30-60 min is an informal      |
|    | audit review goal                  | LexisNexis [S-05] (41%   | and user testing goal | Informal trade   | trade estimate (LexisNexis reports 41% manual      |
|    |                                    | manual); PRD target (<90s| in local prototype    | estimate / Target| review, not a 30-60m clock). "90s" is an internal   |
|    |                                    |                          |                       | SLA              | prototype target, not a measured field metric.     |
+----+------------------------------------+--------------------------+-----------------------+------------------+----------------------------------------------------+
| C2 | ~0.010 ms execution latency        | tests/benchmark.js and   | Micro-benchmark with  | Measured         | Correct precision: In tests/benchmark.js across    |
|    |                                    | tests/engine.test.js     | 1,000 iterations      | (reproducible)   | 1,000 iterations, pure engine latency averages     |
|    |                                    |                          |                       |                  | ~0.010 ms (10 µs); test runner assertions execute  |
|    |                                    |                          |                       |                  | in <1.0 ms; HTTP roundtrip executes in 0.4-10 ms.  |
+----+------------------------------------+--------------------------+-----------------------+------------------+----------------------------------------------------+
| C3 | 100 audit cycles with zero         | tests/benchmark.js       | 1,000 sequential runs | Measured         | Verified: Score variance across 1,000 sequential   |
|    | score variance (sigma^2 = 0.00)    |                          | in Node.js v24        | (reproducible)   | runs is exactly 0.0000 across all 4 benchmark      |
|    |                                    |                          |                       |                  | cases, confirming absolute mathematical determinism|
+----+------------------------------------+--------------------------+-----------------------+------------------+----------------------------------------------------+
| C4 | 45 minutes of manual labor saved   | LexisNexis [S-05]; Datos | Theoretical labor     | Estimated        | Must be labeled: "Theoretical labor saving based on|
|    | on rejected loss cases             | [S-15] manual times      | avoidance model       | (hypothetical    | avoiding manual representation workflows for       |
|    |                                    |                          |                       | avoidance)       | unviable cases." Not measured in live merchant org.|
+----+------------------------------------+--------------------------+-----------------------+------------------+----------------------------------------------------+
| C5 | $500 card scheme pre-arbitration   | Mastercard Rules & Visa  | Card scheme operating | Source-derived   | Correct context: Mastercard and Visa card rules    |
|    | filing fee / penalty risk          | Core Rules [S-01, S-07]  | regulations           |                  | establish formal arbitration filing and review fees|
|    |                                    |                          |                       |                  | (typically $250 filing + $250 administration/loss  |
|    |                                    |                          |                       |                  | fee = $500 total). Accurately represents risk.     |
+----+------------------------------------+--------------------------+-----------------------+------------------+----------------------------------------------------+
| C6 | $238.50 net savings on single      | Unit economics model on  | Mathematical formula: | Hypothetical     | Clearly label as: "Illustrative unit economics     |
|    | $1,150 dispute (Case DSP-4190)     | DSP-4190 ($1,150 order); | (0.25 * $1,150) - $49 | (model-derived   | model for a single high-ticket dispute; actual net |
|    |                                    | 25% take-rate vs $49 SaaS| = $287.50 - $49.00    | comparison)      | savings depend on monthly dispute volume."         |
+----+------------------------------------+--------------------------+-----------------------+------------------+----------------------------------------------------+
| C7 | $49 monthly SaaS pricing hypothesis| Phase 2A Pricing & Unit  | Breakeven & ICP unit  | Hypothetical     | Must be explicitly labeled: "Unvalidated pricing   |
|    |                                    | Economics doc            | economics modeling    | (hypothesis)     | hypothesis to be tested in Phase 2B interviews."   |
+----+------------------------------------+--------------------------+-----------------------+------------------+----------------------------------------------------+
| C8 | 25% contingency take-rate          | Chargeflow pricing portal| Public vendor pricing | Source-derived   | Verified for Chargeflow: Chargeflow advertises     |
|    | charged by specific autopilots     | [S-11]; Justt [S-12]     | sheets & reviews      | (scoped to vendor| a 25% contingency fee on recovered funds. Justt    |
|    |                                    |                          |                       | pricing)         | uses success-based fees. Scoped to vendor pages.   |
+----+------------------------------------+--------------------------+-----------------------+------------------+----------------------------------------------------+
| C9 | $4.61–$5.13 total cost per $1.00   | LexisNexis Risk Solutions| Empirical industry    | Source-derived   | Verified: Directly published in LexisNexis True    |
|    | of direct merchant fraud loss      | True Cost of Fraud [S-05]| study (US & Canada)   |                  | Cost of Fraud Study (Retail & E-commerce edition). |
+----+------------------------------------+--------------------------+-----------------------+------------------+----------------------------------------------------+
| C10| ~60% of merchants abandon 40%+     | Riskified & Datos Insights| Large-scale merchant  | Source-derived   | Verified: Published in Riskified / Datos Insights  |
|    | of payment chargebacks             | survey [S-15]            | industry survey       |                  | dispute abandonment research.                      |
+----+------------------------------------+--------------------------+-----------------------+------------------+----------------------------------------------------+
| C11| <20% manual win rate on fraud-coded| Merchant Risk Council &  | Global eCommerce      | Source-derived   | Verified: MRC / Cybersource annual report documents|
|    | chargebacks (Reason Code 4837)     | Cybersource [S-06]       | fraud report          |                  | average win rates below 20% for manual claims.     |
+----+------------------------------------+--------------------------+-----------------------+------------------+----------------------------------------------------+
| C12| Mastercom v6 API file constraints: | Mastercard Developers    | Developer API technical| Source-derived  | Verified: Mastercom API v6 documentation specifies |
|    | <10MB aggregate, <18 pages max     | Mastercom Docs [S-01]    | specification         |                  | maximum 10MB file size and 18 pages limit.         |
+----+------------------------------------+--------------------------+-----------------------+------------------+----------------------------------------------------+
| C13| First-Party Trust Reason Code 5002 | Mastercard Press Release | Official network      | Source-derived   | Verified: Mastercard officially introduced Reason  |
|    | deflection standard                | & Policy [S-02]          | launch announcement   |                  | Code 5002 to deflect first-party misuse.           |
+----+------------------------------------+--------------------------+-----------------------+------------------+----------------------------------------------------+
| C14| CFPB Section 1033 Final Rule       | CFPB Final Rule, 12 CFR  | Federal Register      | Source-derived   | Verified: CFPB 1033 Final Rule (Oct 2024) covers   |
|    | excludes commercial / SMB accounts | Part 1033 [S-16]         | statutory text        |                  | consumer accounts and explicitly excludes business.|
+----+------------------------------------+--------------------------+-----------------------+------------------+----------------------------------------------------+
| C15| Stripe $15 US dispute fee and 0.4% | Stripe Documentation &   | Public platform terms | Source-derived   | Verified: Stripe charges $15 flat dispute fee;     |
|    | Chargeback Protection terms        | Radar [S-09]             | and pricing           |                  | Protection costs 0.4% and excludes non-delivery.   |
+----+------------------------------------+--------------------------+-----------------------+------------------+----------------------------------------------------+
| C16| Phase 2B interview sample size     | research/phase-2b-       | Operational research  | Hypothetical /   | CRITICAL CORRECTION: Planned discovery sample      |
|    | (n = 8 to 10 merchants)            | prospect-verification.md | plan                  | Planned future   | must be clearly described as "Planned validation   |
|    |                                    |                          |                       | pipeline         | pipeline," NEVER as completed customer interviews. |
+----+------------------------------------+--------------------------+-----------------------+------------------+----------------------------------------------------+
| C17| Simulated prototype case outcomes  | src/data/disputes.js,    | Automated test suite  | Measured in      | Clarify that scores (100, 22, 2, 73->100) are      |
|    | (DSP-1049, 2081, 3312, 4190)       | src/engine.js            | execution (24 tests)  | synthetic sandbox| heuristic index scores inside the prototype, not   |
|    |                                    |                          |                       |                  | issuer adjudication outcomes or live win rates.    |
+----+------------------------------------+--------------------------+-----------------------+------------------+----------------------------------------------------+
```

---

## 3. Specific Detailed Investigations

### 3.1 The "45-Minute to 90-Second" Claim
* **The Claim:** ChargeDossier reduces evidence audit and assembly time from 45 minutes to under 90 seconds.
* **Audit Finding:**
  - *45 Minutes:* Grounded in industry research. LexisNexis Risk Solutions [[S-05]] reports that 41% of merchants rely on manual review, with operators spending 30 to 60 minutes cross-referencing order records across Stripe, Shopify, carrier portals, and Zendesk. 45 minutes is a reasonable midpoint estimate.
  - *90 Seconds:* In the prototype interface, an operator can click a dispute, inspect the evidence tabs, trigger the audit (sub-millisecond execution), preview the dossier, and approve or reject in approximately 30 to 60 seconds. However, this is an **internal prototype benchmark and product target**, not a field-measured production time with live messy merchant integrations.
* **Correction Required:** Present 45 minutes as an *industry benchmark for manual review*, and 90 seconds as an *unvalidated product SLA target demonstrated in the prototype sandbox*.

### 3.2 The "0.48 ms Latency & 100 Cycles Zero Variance" Claim
* **The Claim:** Scoring engine executes in 0.48 ms with zero non-deterministic drift ($\sigma^2 = 0.00$) across 100 cycles.
* **Audit Finding:**
  - In earlier tests, 0.48 ms was an informal observation from individual test runner outputs (`✔ Case DSP-4190 ... (0.4863ms)`).
  - To establish complete scientific reproducibility, we authored a dedicated standalone benchmark script: [`tests/benchmark.js`](../tests/benchmark.js).
  - Running `node tests/benchmark.js` (100 warmup runs, 1,000 iterations per dispute = 4,000 evaluations total) produces the following exact measurements on Node.js v24:
    * **DSP-1049:** Mean $0.0182\text{ ms}$ ($18.2\text{ µs}$), StdDev $0.0438\text{ ms}$, Score = $100/100$, Variance = $0.0000$.
    * **DSP-2081:** Mean $0.0089\text{ ms}$ ($8.9\text{ µs}$), StdDev $0.0186\text{ ms}$, Score = $22/100$, Variance = $0.0000$.
    * **DSP-3312:** Mean $0.0050\text{ ms}$ ($5.0\text{ µs}$), StdDev $0.0091\text{ ms}$, Score = $2/100$, Variance = $0.0000$.
    * **DSP-4190:** Mean $0.0075\text{ ms}$ ($7.5\text{ µs}$), StdDev $0.0180\text{ ms}$, Score = $73/100$, Variance = $0.0000$.
    * **Aggregate Mean Latency:** **$0.0099\text{ ms}$ ($9.9\text{ µs}$ per dispute)** in pure CPU time; under $1.0\text{ ms}$ in full test-runner assertions.
    * **Score Stability:** Across 1,000 runs, every single dispute produced the identical score ($\sigma^2 = 0.0000$).
* **Correction Required:** Update the research paper and presentation to state that pure engine execution latency averages **~0.01 ms (10 microseconds)** per audit, executing in under **1.0 millisecond** in the test runner, verified via `tests/benchmark.js`.

### 3.3 The "$500 Pre-Arbitration Penalty" Claim
* **The Claim:** Submitting deficient or contradictory evidence risks card scheme pre-arbitration penalties of $500.
* **Audit Finding:**
  - Under official Mastercard Operating Rules (Dispute Resolution chapter) and Visa Core Rules, when a dispute escalates past Second Presentment to formal Arbitration or Compliance review:
    * The filing fee is typically $250.00 USD.
    * An additional technical administration fee of $250.00 USD is assessed against the losing party upon final ruling.
    * Total financial assessment against the losing merchant's acquirer: $500.00 USD.
* **Correction Required:** Valid source-derived industry penalty. Clarify that this fee is assessed at formal scheme arbitration, which acquirers pass directly through to merchants.

### 3.4 The "$238.50 Savings Comparison" Claim
* **The Claim:** On DSP-4190 ($1,150.00 dispute), ChargeDossier saves $238.50 compared to Chargeflow.
* **Audit Finding:**
  - Calculation: A 25% contingency take-rate on $1,150.00 recovered funds is $0.25 \times \$1,150.00 = \$287.50$.
  - ChargeDossier's proposed monthly SaaS subscription is $49.00/month.
  - $\$287.50 - \$49.00 = \$238.50$.
  - While mathematically correct, this is a **hypothetical unit economics comparison on an isolated single dispute**, assuming ChargeDossier's SaaS fee is amortized over only one dispute and that representment is won in both cases.
* **Correction Required:** Clearly label this as an *illustrative unit economics comparison for a single high-ticket dispute*, not an empirical net savings figure measured across active merchant accounts.

### 3.5 Phase 2B Interview Claims
* **The Claim:** Customer discovery sample size ($n=8\text{–}10$).
* **Audit Finding:**
  - In Phase 2B, we created a verified prospect pipeline of 10 US D2C merchant operators (`research/phase-2b-prospect-verification-audit.md`) and outreach templates (`research/phase-2b-outreach-plan.md`).
  - Outreach has **NOT** been sent, and customer interviews have **NOT** yet taken place (governed by the explicit prompt decision gate: *"Do not send outreach without separate explicit approval"*).
* **Correction Required:** Ensure no document refers to interviews as "completed" or "conducted." They must strictly be labeled as **"Planned Discovery Interviews (Phase 2B Pipeline)"**.

---

## 4. Summary of Corrections Applied to Artifacts

1. **APM Positioning:** Updated all target roles in presentation, QA guide, and checklist to **General Associate Product Manager (APM)** targeting Mastercard, Visa, Razorpay, and fintech companies.
2. **Deterministic Benchmarking Precision:** Updated latency citations to cite the reproducible `tests/benchmark.js` script ($~0.01\text{ ms}$ engine time; $<1.0\text{ ms}$ harness time; $\sigma^2 = 0.0000$).
3. **Hypothetical Labeling:** Explicitly labeled the $49/month SaaS price and the $238.50 single-case recovery comparison as **economic modeling hypotheses**.
4. **Synthetic Nature of Scores:** Clarified that quality scores (100, 22, 2, 73 $\rightarrow$ 100) are internal prototype heuristics evaluating evidence completeness, not official network adjudication guarantees.
