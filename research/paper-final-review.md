# ChargeDossier: Research Paper Final Integrity Review & Author Sign-Off

**Document:** `research/paper-final-review.md`  
**Paper Title:** *Deterministic Decision Support for Payment Dispute Evidence: A Synthetic Case Evaluation of Explainable Pre-Submission Auditing*  
**Author:** Pragy Mathur  
**Affiliation:** Integrated MBA Candidate (Class of 2027)  
**Email:** `pragymathur12@gmail.com`  
**Career Target:** General Associate Product Manager (APM) &middot; Target Companies: Mastercard, Visa, Razorpay, Fintechs  
**Date:** October 30, 2026  
**Status:** Pre-Publication Final Review & Integrity Audit Complete  

---

## 1. Executive Summary & Purpose

This document provides the formal academic review and integrity sign-off for the research paper *Deterministic Decision Support for Payment Dispute Evidence: A Synthetic Case Evaluation of Explainable Pre-Submission Auditing*.

The purpose of this review is to ensure that the manuscript satisfies rigorous academic standards of epistemic honesty, methodological transparency, and precise claims attribution prior to any future open-access deposit. Accuracy and academic credibility strictly take priority over promotional or inflated claims.

---

## 2. Research Questions & Methodological Precision

The manuscript articulates three distinct research questions that were evaluated against a synthetic benchmark suite:

```
+----------------------------------------------------------------------------------------------------+
| TABLE 1: RESEARCH QUESTIONS & EMPIRICAL EVIDENCE MAPPING                                            |
+-----+--------------------------------------+---------------------------------+---------------------+
| RQ  | CORE RESEARCH QUESTION               | EMPIRICAL EVIDENCE BASE         | NATURE OF FINDING   |
+-----+--------------------------------------+---------------------------------+---------------------+
| RQ1 | Can a deterministic heuristic engine | tests/benchmark.js:             | Measured:           |
|     | reliably score multi-faceted dispute | 1,000 iterations per dispute    | Pure engine latency |
|     | evidence without non-deterministic   | across 4 cases (4,000 audits);  | = 0.0099 ms (10 µs);|
|     | drift or hallucination risks?        | score variance = 0.0000;        | test-suite harness  |
|     |                                      | 24/24 passing unit/E2E tests.   | < 1.0 ms per test.  |
+-----+--------------------------------------+---------------------------------+---------------------+
| RQ2 | Does surfacing explainable evidence  | Case DSP-4190 ($1,150 defect):  | Measured in sandbox:|
|     | gaps allow operators to remediate    | Initial score = 73/100 (Tier B);| Interactive patch   |
|     | deficient dossiers dynamically       | attaching policy & remedy fixes | elevates case to    |
|     | before card network submission?      | clears penalty -> 100/100 (A).  | 100/100 dynamically.|
+-----+--------------------------------------+---------------------------------+---------------------+
| RQ3 | What are the computational, economic,| Case DSP-2081/3312 penalties;   | Modeled comparison  |
|     | and operational trade-offs of        | Unit economics model on DSP-4190| based on public fee |
|     | deterministic auditing vs. 25% take- | ($287.50 fee vs $49/mo SaaS);   | structures and      |
|     | rate autopilots and generative LLMs? | zero marginal token inference.  | operational rules.  |
+-----+--------------------------------------+---------------------------------+---------------------+
```

### Key Methodological Boundary:
* **Technical Consistency vs. Real-World Effectiveness:** The paper strictly distinguishes between *technical audit consistency* (which is empirically measured and proven via `tests/benchmark.js`) and *real-world chargeback win rates* (which cannot be measured without live acquiring network adjudication).
* The paper makes **no claim** of improved merchant win rates, commercial market adoption, statistical significance across production populations, or causal dispute reversals.

---

## 3. Epistemic Integrity & Claims Classification

Every figure in the revised manuscript is categorized and grounded:

1. **Measured Figures (Code-Verified):**
   - **Pure Engine Latency:** Mean execution latency of **0.00988 ms (~10 microseconds)** per dispute, verified via `tests/benchmark.js` across 1,000 iterations.
   - **Test Runner Duration:** Individual test case assertions run in **< 1.0 millisecond** in `tests/engine.test.js`.
   - **Deterministic Score Stability:** Score variance is **$\sigma^2 = 0.0000$** across 1,000 sequential evaluations for all four disputes.
   - **Test Suite Pass Rate:** **24/24 tests passed (100% pass rate)** in `tests/*.test.js` with zero external dependencies.
   - **Synthetic Case Scores:** DSP-1049 (100/100, Tier A), DSP-2081 (22/100, Tier C), DSP-3312 (2/100, Tier C), DSP-4190 (Initial: 73/100, Tier B; Remediated: 100/100, Tier A).

2. **Source-Derived Figures (Literature & Scheme Rules):**
   - **Fraud Cost Multiplier:** US e-commerce merchants lose **$4.61 to $5.13** per $1.00 of direct fraud loss (LexisNexis Risk Solutions [[S-05]]).
   - **Dispute Abandonment:** ~60% of surveyed merchants leave 40%+ of chargebacks undisputed (Riskified & Datos Insights [[S-15]]).
   - **Manual Win Rate:** Merchant win rates on fraud-coded chargebacks average **below 20%** under manual handling (MRC & Cybersource [[S-06]]).
   - **Mastercom File Limits:** Maximum **10MB aggregate size** and **18 pages** for second presentment files (Mastercard Developer Docs [[S-01]]).
   - **Contingency Take-Rate:** Incumbent dispute automation vendors advertise a **25% fee** on recovered funds (Chargeflow [[S-11]]).
   - **Arbitration Exposure:** Formal card scheme arbitration filing and review fees typically amount to **$500.00** ($250 filing + $250 administration fee) assessed against the losing party under card scheme rules [[S-01], [S-07]].

3. **Hypothetical & Modeled Assumptions (Clearly Labeled):**
   - **Manual Handling Duration:** The assumption of **30 to 60 minutes (45 min average)** of manual labor per dispute is an industry benchmark derived from LexisNexis [[S-05]], not a timer measurement of a specific merchant's staff.
   - **90-Second Audit SLA:** The target of **under 90 seconds** per dispute is an internal product design objective demonstrated in the prototype sandbox, not a field-validated merchant metric.
   - **Pricing Hypothesis:** The **$49/month flat SaaS fee** is an unvalidated commercial pricing hypothesis designed for testing in Phase 2B discovery interviews.
   - **Single-Case Recovery Comparison:** The **$238.50 net savings** figure on Case DSP-4190 ($287.50 contingency fee minus $49 SaaS fee) is an illustrative unit-economics comparison for an isolated $1,150 dispute, not an aggregate empirical savings figure.

---

## 4. Threats to Validity & Limitations (Expanded)

The manuscript’s discussion of threats to validity has been systematically strengthened:
* **Internal Validity:** Heuristic weights ($w_i$) and penalty points ($P_j$) were designed based on card scheme representment standards and expert documentation. However, they represent heuristic indices of evidence completeness rather than statistically calibrated regression coefficients.
* **External Validity:** The synthetic benchmark dataset comprises four curated profiles ($n=4$). While these cases successfully stress-test primary reason codes (4837 and 4853) and adversarial edge cases, they do not encompass the full variance of real-world merchant dispute queues across non-physical verticals (e.g., airline travel, SaaS subscriptions, digital gift cards).
* **Construct Validity:** The internal audit score ($S_{\text{final}}$) measures evidence completeness against card scheme documentation guidelines. It does **not** predict or guarantee issuing bank dispute adjudication outcomes.

---

## 5. Author Information, Affiliation & Licensing Status

* **Author Name:** Pragy Mathur
* **Email Address:** `pragymathur12@gmail.com`
  > [!IMPORTANT]
  > **Author Action Required:** Please confirm whether `pragymathur12@gmail.com` is your preferred public corresponding email for academic indexing, or if you prefer an institutional or professional alias.
* **Institutional Affiliation:** Integrated MBA Candidate (Class of 2027)
  > [!IMPORTANT]
  > **Author Action Required:** Please confirm whether you wish to include your specific university / business school name alongside "Integrated MBA Candidate (Class of 2027)".
* **Open-Access Licensing Status:**
  - The manuscript indicates: `Proposed License: Creative Commons Attribution 4.0 International (CC BY 4.0) — Pending Author Final Approval`.
  - **No license has been permanently assigned or finalized.**
  - **No external deposit has been made.** The manuscript has **NOT** been uploaded to Zenodo, SSRN, arXiv, or ResearchGate. External upload requires explicit, separate author sign-off.

---

## 6. Alignment with General APM Positioning

Both the research paper and presentation deck have been recalibrated away from specialized niche domains toward core **General Associate Product Manager (APM)** competencies:
1. **Problem Discovery & Sizing:** Quantifying merchant friction via empirical industry data ($4.61–$5.13 multiplier [[S-05]], 60% abandonment [[S-15]]).
2. **User Empathy & Segmentation:** Narrowing ICP to high-ticket D2C merchants ($150–$1,500 AOV) where contingency pricing creates acute margin drag.
3. **Product Hypothesis & Falsification:** Formulating explicit falsification criteria for review friction and willingness to pay.
4. **MVP Prioritization:** Scoping a zero-dependency prototype focusing strictly on core heuristic auditing, deliberately excluding live payment gateway plumbing.
5. **Human-Centered Workflow Design:** Balancing deterministic automation (data aggregation, formatting) with human operator checkpoints for nuanced claims.
6. **Technical & Architectural Trade-offs:** Articulating why deterministic heuristic rules are structurally superior to generative LLMs in high-stakes adversarial compliance workflows.
7. **Cross-Company Applicability:** Demonstrating direct relevance to payment dispute and risk workflows at **Mastercard, Visa, Razorpay, and global fintechs**.
