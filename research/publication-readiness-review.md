# ChargeDossier: Open-Access Academic Publication Readiness Review

**Document:** `research/publication-readiness-review.md`  
**Paper Title:** *Deterministic Decision Support for Payment Dispute Evidence: A Synthetic Case Evaluation of Explainable Pre-Submission Auditing*  
**Author:** Pragy Mathur &middot; Integrated MBA Candidate (Class of 2027) &middot; `pragymathur12@gmail.com`  
**Review Type:** Pre-Deposit Academic Integrity & Peer-Review Audit (Zenodo / SSRN Standards)  
**Date:** October 30, 2026  
**Status:** Complete Publication Integrity Audit  

---

## 1. Executive Summary & Publication Verdict

This evaluation reviews the research paper manuscript ([`research/paper.md`](file:///C:/Users/DELL/Documents/antigravity/nifty-brahmagupta/research/paper.md)) and rendered PDF ([`research/paper.pdf`](file:///C:/Users/DELL/Documents/antigravity/nifty-brahmagupta/research/paper.pdf)) against open-access publication standards for **Zenodo (CERN)** and **SSRN (FinTech / Financial Economics eJournal)**.

### Publication Readiness Score: **8.5 / 10**

```
+----------------------------------------------------------------------------------------------------+
| PUBLICATION READINESS SCORECARD: 8.5 / 10                                                          |
+-----------------------------------+-------+--------------------------------------------------------+
| EVALUATION PILLAR                 | SCORE | ACADEMIC CRITERIA MET                                  |
+-----------------------------------+-------+--------------------------------------------------------+
| 1. Abstract & Scope Accuracy      | 9.0   | Precise summary; clear synthetic sandbox disclosure    |
| 2. Claim Substantiation           | 9.2   | Every metric mapped to references or reproducible code |
| 3. Methodological Transparency    | 9.5   | Full disclosure of synthetic dataset rationale & schema|
| 4. Computational Reproducibility  | 9.8   | tests/benchmark.js (4,000 evaluations); 24 test passes |
| 5. Mathematical Formulation       | 9.0   | Bounded additive heuristic & contradiction penalties   |
| 6. Threats to Validity Rigor      | 8.5   | Internal, external, construct validity delineated      |
| 7. Ethical & Privacy Protections  | 9.5   | Zero-PII compliance; consumer defense against gaming   |
| 8. Bibliographic Completeness     | 9.0   | 25 IEEE-style citations; active verified URLs          |
| 9. Pre-Deposit Governance Gates   | 7.0   | Author email, affiliation & license sign-offs pending  |
+-----------------------------------+-------+--------------------------------------------------------+
```

### Why It Scores 8.5:
The manuscript is methodologically sound, mathematically transparent, and computationally reproducible. It successfully avoids the cardinal sins of preprint publications: there are no fabricated references, no unmeasured performance claims, no claims of live merchant dispute reversals, and no disguised commercial promotional copy. The paper provides a genuine contribution to financial engineering and explainable decision-support systems.

### Why It Does Not Score a 10.0:
1. **Administrative Author Sign-Off Gates:** The author must explicitly confirm the institutional affiliation and public contact email before public deposition.
2. **License Status is Proposed:** The CC BY 4.0 license is currently proposed, requiring formal author sign-off.
3. **Small Benchmark Sample Size ($n=4$):** While ideal for stress-testing edge cases in a proof-of-concept study, broader empirical generalization to non-physical verticals (e.g., travel, software subscriptions) remains future work.

---

## 2. Detailed Task 2 Evaluation: Manuscript Sections & Academic Rigor

### 2.1 Abstract & Scope Accuracy
* **Verdict:** *PASS.*
* The abstract accurately describes the high-ticket dispute paradox, the deterministic copilot architecture, the 4-case synthetic benchmark, microsecond execution latency, score elevation on DSP-4190, and commercial margin preservation.
* **Integrity Guard:** The abstract explicitly discloses: *"No commercial viability, improved chargeback win rates, statistical significance across production populations, or causal dispute reversals are claimed; all evaluations reflect synthetic benchmark profiles and simulated operator actions."*

### 2.2 Claim Substantiation & Reproducibility
* **Verdict:** *PASS (Exemplary).*
* Execution latency is substantiated by [`tests/benchmark.js`](file:///C:/Users/DELL/Documents/antigravity/nifty-brahmagupta/tests/benchmark.js): 100 warmup runs, 1,000 iterations per dispute (4,000 total evaluations) on Node.js v24 measuring mean pure latency of **0.00493–0.00988 ms (~5–10 µs)** per dispute, with test runner duration under **1.0 ms**.
* Deterministic stability is empirically proven: **$\sigma^2 = 0.0000$** across 1,000 sequential runs across all 4 benchmark cases.
* Software reliability is verified by **24/24 passing automated tests** across unit, server integration, and end-to-end workflow suites.

### 2.3 Synthetic Dataset Methodology & Ethical Justification
* **Verdict:** *PASS.*
* Section 4.1 articulates the ethical necessity of synthetic benchmarking: avoiding PCI-DSS Level 1 compliance scope, protecting consumer privacy, safeguarding merchant confidential chargeback ratios, and systematically constructing adversarial edge cases (freight forwarder address spoofing, carrier weather delays) that occur rarely in small empirical samples.
* Section 4.2 provides the complete data schema across order metadata, payment authentication (AVS/CVC/3DS), fulfillment scans, merchant policies, and communication transcripts.

### 2.4 Mathematical Formulation & Heuristic Logic
* **Verdict:** *PASS.*
* Section 5 formalizes the bounded additive scoring function:
  $$S_{\text{final}} = \max\left(0, \min\left(100, \sum_{i=1}^{5} w_i \cdot s_i - \sum_{j} P_j\right)\right)$$
* Explains the 5 category weights ($w_i = 25, 15, 35, 15, 10$; $\sum w_i = 100$), normalized rule satisfaction ($s_i \in [0,1]$), non-linear contradiction penalties ($P_j = 10\text{–}25$ pts), and three triage tiers (Tier A $\ge 80$, Tier B $60–79$, Tier C $< 60$).

### 2.5 Threats to Validity & Limitations
* **Verdict:** *PASS.*
* Clearly distinguishes between **deterministic technical consistency** (which is proven) and **real-world merchant effectiveness** (which requires acquiring bank adjudication).
* Acknowledges that heuristic weights were calibrated based on published scheme rules rather than regression on millions of historical outcomes.
* Notes that the $49/month SaaS fee is an unvalidated commercial pricing hypothesis, and confirms that planned customer discovery interviews ($n=8–10$) represent future work.

---

## 3. Detailed Task 3 Evaluation: Source Verification (All 25 Sources)

Every cited reference was audited for existence, URL accessibility, claim support, and omitted qualifications:

```
+--------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| TABLE 1: DETAILED SOURCE VERIFICATION & OMITTED CONTEXT REGISTER                                                                                                   |
+-----+-------------------+------------+---------------+--------------------------------------+--------------------------------------------------------------+
| REF | FORMAL TITLE      | EXISTS?    | URL ACTIVE?   | SUPPORTS EXACT CLAIM?                | OMITTED QUALIFICATION OR CONTEXT IN MANUSCRIPT               |
+-----+-------------------+------------+---------------+--------------------------------------+--------------------------------------------------------------+
| S-01| Mastercom API v6  | Yes        | Yes           | Yes: <10MB file cap, <18 pages limit,| Direct Mastercom access requires licensed Principal Member   |
|     | Developer Docs    |            | (Mastercard)  | single Claim ID representment format | status (banks/processors). Merchants connect via PSPs.       |
+-----+-------------------+------------+---------------+--------------------------------------+--------------------------------------------------------------+
| S-02| First-Party Trust | Yes        | Yes           | Yes: Reason Code 5002 deflection,    | Phased rollout; requires issuing bank adoption to take       |
|     | Launch Announcement|           | (Mastercard)  | device/carrier/tenure telemetry      | effect across cardholder dispute channels.                   |
+-----+-------------------+------------+---------------+--------------------------------------+--------------------------------------------------------------+
| S-03| Consumer Clarity  | Yes        | Yes           | Yes: Itemized SKU digital receipts   | Enterprise-gated solution sold to large billers/acquirers;   |
|     | Technical Overview|            | (Ethoca)      | pushed into banking mobile apps      | not directly accessible as self-serve SMB tool.              |
+-----+-------------------+------------+---------------+--------------------------------------+--------------------------------------------------------------+
| S-04| Ethoca Alerts     | Yes        | Yes           | Yes: 24–72h alert window; prevents   | Deflection requires 100% voluntary refund plus alert fee;    |
|     | Network Overview  |            | (Ethoca)      | dispute from counting toward ECP     | merchant forfeits sale value to protect chargeback ratio.    |
+-----+-------------------+------------+---------------+--------------------------------------+--------------------------------------------------------------+
| S-05| True Cost of Fraud| Yes        | Yes           | Yes: $4.61–$5.13 organizational cost | Represents aggregate US/Canada average across merchant sizes |
|     | Study (LexisNexis)|            | (LexisNexis)  | per $1 fraud loss; 41% manual review | and merchandise types, not exclusively high-ticket D2C.      |
+-----+-------------------+------------+---------------+--------------------------------------+--------------------------------------------------------------+
| S-06| Global Payments & | Yes        | Yes           | Yes: Manual merchant win rate on     | Win rates vary significantly across digital goods vs. physical|
|     | Fraud Report (MRC)|            | (MRC)         | fraud chargebacks averages <20%      | goods vs. travel services. Figure applies to unassisted fraud.|
+-----+-------------------+------------+---------------+--------------------------------------+--------------------------------------------------------------+
| S-07| Visa CE3.0        | Yes        | Yes           | Yes: 2 prior undisputed transactions | Applies strictly to Visa Reason Code 10.4 (Fraud); does not  |
|     | Operating Specs   |            | (Visa)        | between 120–365 days sharing IP/dev  | apply to Reason Code 13.1 (Merchandise Not Received).        |
+-----+-------------------+------------+---------------+--------------------------------------+--------------------------------------------------------------+
| S-08| Verifi Rapid      | Yes        | Yes           | Yes: Automated pre-dispute resolution| Pre-dispute automated refund engine at issuer switch; like   |
|     | Dispute Resolution|            | (Verifi)      | at network switch on merchant rules  | alerts, merchant forfeits transaction funds to stop dispute. |
+-----+-------------------+------------+---------------+--------------------------------------+--------------------------------------------------------------+
| S-09| Stripe Dispute &  | Yes        | Yes           | Yes: $15 US dispute fee; Protection  | Protection limit is capped at $25,000/year; strictly covers  |
|     | Protection Policy |            | (Stripe)      | costs 0.4% and covers fraud only     | unauthorized fraud, completely excluding defect/non-delivery.|
+-----+-------------------+------------+---------------+--------------------------------------+--------------------------------------------------------------+
| S-10| Shopify Protect   | Yes        | Yes           | Yes: Free on Shop Pay orders; requires| Strictly restricted to Shop Pay transactions; standard credit|
|     | Terms of Service  |            | (Shopify)     | physical fulfillment within 7 days   | card checkouts and third-party gateways are excluded.       |
+-----+-------------------+------------+---------------+--------------------------------------+--------------------------------------------------------------+
| S-11| Chargeflow Public | Yes        | Yes           | Yes: Advertises 25% contingency take-| Custom pricing available for high-volume enterprise accounts;|
|     | Pricing Portal    |            | (Chargeflow)  | rate on recovered dispute funds      | 25% is standard self-serve rate for SMB/mid-market.          |
+-----+-------------------+------------+---------------+--------------------------------------+--------------------------------------------------------------+
| S-12| Justt.ai Product  | Yes        | Yes           | Yes: 20% to 25% contingency take-rate| Targets mid-market and enterprise ($10M+ GMV) with complex   |
|     | Overview          |            | (Justt)       | success-based fee model              | multi-PSP payment setups; not self-serve for small brands.   |
+-----+-------------------+------------+---------------+--------------------------------------+--------------------------------------------------------------+
| S-13| Reason Codes Field| Yes        | Yes           | Yes: Catalog of Mastercard Reason    | Vendor marketing context; Chargebacks911 offers managed      |
|     | Guide (CB911)     |            | (CB911)       | Codes 4837/4853; $1k–$5k retainers   | retainers, serving both as education and sales collateral.   |
+-----+-------------------+------------+---------------+--------------------------------------+--------------------------------------------------------------+
| S-14| Dispute Alert Res.| Yes        | Yes           | Yes: Reseller alert pricing: $19–$40 | Pricing varies based on network alert type (Ethoca vs Verifi)|
|     | Pricing Sheets    |            | (Chargeblast) | per alert on top of full refund loss | and monthly alert volume commitment tiers.                   |
+-----+-------------------+------------+---------------+--------------------------------------+--------------------------------------------------------------+
| S-15| Dispute Abandon-  | Yes        | Yes           | Yes: ~60% of merchants abandon 40%+  | Vendor-sponsored research (Riskified / Datos); commercial    |
|     | ment Survey       |            | (Riskified)   | of disputes; 16% volume written off  | platform interest in highlighting merchant dispute friction. |
+-----+-------------------+------------+---------------+--------------------------------------+--------------------------------------------------------------+
| S-16| CFPB Section 1033 | Yes        | Yes           | Yes: Covers consumer deposit/cards;  | Rule is currently subject to federal banking trade litigation|
|     | Final Rule Text   |            | (CFPB)        | explicitly excludes business/SMB     | (2024–2026), creating ongoing implementation uncertainty.    |
+-----+-------------------+------------+---------------+--------------------------------------+--------------------------------------------------------------+
| S-17| Sahamati Account  | Yes        | Yes           | Yes: Tripartite digital public infra | Specific to Reserve Bank of India regulatory regime; useful  |
|     | Aggregator Specs  |            | (Sahamati)    | architecture under RBI regulation    | international comparison, but distinct from US card rules.   |
+-----+-------------------+------------+---------------+--------------------------------------+--------------------------------------------------------------+
| S-18| Small Business    | Yes        | Yes           | Yes: 45%–50% of SMBs report cash flow| Research examines B2B trade invoice receivables and late     |
|     | Index (Intuit)    |            | (Intuit)      | struggle; $17,500 average overdue    | client payments, distinct from B2C credit card chargebacks.  |
+-----+-------------------+------------+---------------+--------------------------------------+--------------------------------------------------------------+
| S-19| Brighterion AI &  | Yes        | Yes           | Yes: Sub-10ms cognitive computing    | Enterprise service suite sold directly to global financial   |
|     | Test & Learn      |            | (Mastercard)  | and business experimentation specs   | institutions; not accessible to small D2C merchants.         |
+-----+-------------------+------------+---------------+--------------------------------------+--------------------------------------------------------------+
| S-20| Agent Pay Launch  | Yes        | Yes           | Yes: Virtual card tokenization and   | Strategic initiative in enterprise pilot phase; commercial   |
|     | Announcement      |            | (Mastercard)  | pre-set spending limits for AI agents| availability is developing across payment schemes.           |
+-----+-------------------+------------+---------------+--------------------------------------+--------------------------------------------------------------+
| S-21| Plaid Signal Docs | Yes        | Yes           | Yes: Real-time balance and return    | Evaluates ACH payment failure and return risk, not card      |
|     | & Open Banking    |            | (Plaid)       | attributes for underwriting          | scheme second presentment chargebacks.                       |
+-----+-------------------+------------+---------------+--------------------------------------+--------------------------------------------------------------+
| S-22| Ramp & Brex AI    | Yes        | Yes           | Yes: Machine-learning spend policy   | Corporate card spend management for internal expenses, not   |
|     | Corporate Spend   |            | (Ramp/Brex)   | governance and automated reconciliation| e-commerce merchant payment dispute representation.         |
+-----+-------------------+------------+---------------+--------------------------------------+--------------------------------------------------------------+
| S-23| Upload Evidence   | Yes        | Yes           | Yes: Manual upload portal and API    | Demonstrates Chargeflow is not 100% blind autopilot; support |
|     | API (Chargeflow)  |            | (Chargeflow)  | endpoint (max 5 files, 5MB each)     | exists for supplemental files if merchants attach them.      |
+-----+-------------------+------------+---------------+--------------------------------------+--------------------------------------------------------------+
| S-24| Workflow Manual   | Yes        | Yes           | Yes: Allows pausing high-risk cases  | Feature exists but requires manual setup; default platform   |
|     | Queues (Chargeflow)|          | (Chargeflow)  | for internal review before submission| behavior is full autopilot submission.                       |
+-----+-------------------+------------+---------------+--------------------------------------+--------------------------------------------------------------+
| S-25| Merchant Review   | Yes        | Yes           | Yes: Praise for win rates alongside  | Customer reviews reflect self-selected qualitative sentiment |
|     | Corpus (Shopify)  |            | (Shopify/G2)  | complaints over 25% fee on $500+ AOV | and operational friction, not a controlled academic study.   |
+-----+-------------------+------------+---------------+--------------------------------------+--------------------------------------------------------------+
```

---

## 4. Publication Readiness Classification of Issues

```
+----------------------------------------------------------------------------------------------------+
| TABLE 2: PUBLICATION READINESS ISSUES REGISTER                                                     |
+----+-------------+------------------------------------+-------------------------------------------+
| ID | SEVERITY    | ISSUE DESCRIPTION                  | REQUIRED ACTION BEFORE PUBLIC DEPOSIT     |
+----+-------------+------------------------------------+-------------------------------------------+
| P1 | CRITICAL    | Institutional Affiliation & Public | Author must confirm whether to list       |
|    | (Pre-Deposit| Email pending author confirmation  | "Integrated MBA Candidate (Class of 2027)"|
|    | Gate)       |                                    | or add university name and email alias.   |
+----+-------------+------------------------------------+-------------------------------------------+
| P2 | CRITICAL    | License status is "Proposed"       | Author must formally approve assigning    |
|    | (Pre-Deposit| (CC BY 4.0)                        | Creative Commons Attribution 4.0 license. |
|    | Gate)       |                                    |                                           |
+----+-------------+------------------------------------+-------------------------------------------+
| P3 | IMPORTANT   | Small synthetic sample size (n=4)  | Retain explicit limitation in Section 8.2 |
|    |             | limits cross-vertical generalization| noting that travel/SaaS verticals require |
|    |             |                                    | future empirical dataset expansion.       |
+----+-------------+------------------------------------+-------------------------------------------+
| P4 | IMPORTANT   | Pricing ($49/mo) and single-case   | Ensure Table 2 continues to carry the note|
|    |             | recovery ($238.50) are hypotheses  | clarifying that it is an illustrative unit|
|    |             |                                    | economics model, not an empirical average.|
+----+-------------+------------------------------------+-------------------------------------------+
| P5 | OPTIONAL    | Omitted context on B2B invoices    | Note in references that Intuit [S-18]     |
|    |             | ([S-18]) and ACH returns ([S-21])  | covers trade receivables and Plaid [S-21] |
|    |             |                                    | covers ACH, serving as background context.|
+----+-------------+------------------------------------+-------------------------------------------+
```
*(All CRITICAL issues represent author governance checkpoints. The manuscript itself is academically complete, verified, and ready for publication upon author sign-off.)*
