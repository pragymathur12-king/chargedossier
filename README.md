# ChargeDossier: Deterministic Decision Support for Payment Dispute Evidence

**An Associate Product Manager (APM) Fintech Case Study & Research Prototype**

[![Automated Tests](https://img.shields.io/badge/tests-24%2F24%20passing-brightgreen.svg)](tests/)
[![Deterministic Engine](https://img.shields.io/badge/engine-deterministic%20math-blue.svg)](src/engine.js)
[![Zero Dependencies](https://img.shields.io/badge/dependencies-0%20external%20npm-purple.svg)](package.json)
[![Benchmark Latency](https://img.shields.io/badge/latency-~0.01ms%20pure%20CPU-orange.svg)](tests/benchmark.js)
[![Live Demo](https://img.shields.io/badge/demo-live%20on%20GitHub%20Pages-success.svg)](https://pragymathur12-king.github.io/chargedossier/)

---

## Quick Navigation & Deliverables

* **Author:** Pragy Mathur &middot; Integrated MBA Candidate (Class of 2027) &middot; **Parul University**
* **Public Email:** `pragymathur12@gmail.com`
* **Target Roles:** General Associate Product Manager (APM) &middot; **Target Companies:** Mastercard, Visa, Razorpay, Fintechs
* **Live Interactive Prototype (GitHub Pages Sandbox):** [https://pragymathur12-king.github.io/chargedossier/](https://pragymathur12-king.github.io/chargedossier/)
* **Dedicated Portfolio Case Study:** [https://pragymathur12-king.github.io/aura-portfolio/chargedossier.html](https://pragymathur12-king.github.io/aura-portfolio/chargedossier.html)
* **12-Slide Recruiter Presentation (16:9 PDF):** [`docs/presentation.pdf`](docs/presentation.pdf) &middot; [Interactive HTML Deck](docs/interview-presentation.html)
* **Academic Research Paper (9-Page PDF):** [`research/paper.pdf`](research/paper.pdf) &middot; [Source Markdown](research/paper.md)
* **Public GitHub Repository:** [https://github.com/pragymathur12-king/chargedossier](https://github.com/pragymathur12-king/chargedossier)

> [!NOTE]
> **Independent Academic & Portfolio Disclaimer:** ChargeDossier is an independent academic product management case study and prototype developed for educational and portfolio demonstration purposes. It is **not** affiliated with, endorsed by, sponsored by, or integrated with Mastercard International Incorporated, Visa Inc., Stripe, Shopify, Razorpay, or any live payment network or acquiring processor. All dispute records evaluated are synthetic benchmark profiles.

---

## 1. Project Overview & Product Objectives

ChargeDossier is an evidence-quality review copilot built to explore how high-ticket direct-to-consumer (D2C) e-commerce merchants can make informed second presentment representment decisions on payment card disputes.

When a payment dispute hits an online merchant, assembling compelling evidence requires extracting order records from e-commerce platforms (Shopify), payment authentication tokens from gateways (Stripe, Razorpay), carrier transit proofs from logistics aggregators (FedEx, UPS), and customer communication logs from support desks (Zendesk).

Rather than operating on an advertised **25% contingency take-rate** on recovered funds (Chargeflow) or requiring $1,000–$5,000/month enterprise retainers (Chargebacks911), ChargeDossier explores an upfront review copilot model:
1. **Deterministic Heuristic Auditing:** Evaluates merchant evidence packages against deterministic rules modeled on common card network reason codes (Mastercard Reason Code 4837 Fraud vs. 4853 Merchandise / Visa 10.4 vs. 13.1) to calculate an explainable Evidence Quality Score (0–100) and Quality Tier (`TIER_A`, `TIER_B`, `TIER_C`).
2. **Contradiction & Fatal Flaw Detection:** Automatically flags irreconcilable claims before submission (such as carrier scans indicating a package is still in transit with weather delays, commercial freight-forwarder address mismatches with failed AVS, or customer stolen-card reports).
3. **Structured Second Presentment Dossier:** Compiles an illustrative draft Second Presentment Dossier (Exhibits A through E) and executive rebuttal narrative modeled on card scheme ingestion boundaries (<10MB aggregate, <18 pages per Mastercom API v6).
4. **Human-in-the-Loop Decision Lock:** Empowers merchant operators with an explicit checkpoint to **Approve** viable submissions or **Reject** unviable claims (early loss acceptance saves an estimated 45 minutes of manual labor and shields merchants from $500 card scheme pre-arbitration penalties).
5. **Dynamic Gap Remediation:** Provides an interactive drawer allowing operators to attach missing return policies or customer remedy logs, dynamically recalculating the evidence score before submission.

---

## 2. The Problem: The High-Ticket Dispute Paradox

```
+----------------------------------------------------------------------------------------------------+
|                               THE HIGH-TICKET DISPUTE PARADOX                                      |
+--------------------------+------------------------------------+------------------------------------+
| OPERATIONAL MODEL        | LOW-TICKET ($25 AOV)               | HIGH-TICKET ($1,150 AOV)           |
+--------------------------+------------------------------------+------------------------------------+
| Manual In-House Review   | Economically unviable (30-60 min). | Viable but slow and error-prone.   |
| 25% Contingency Bot      | Painless fee ($6.25 per win).      | Severe margin drain ($287.50 fee). |
| Full Autopilot Bot       | Low risk of bad submission.        | Severe risk: missing 4853 policy   |
|                          |                                    | or freight-forwarder contradiction.|
+--------------------------+------------------------------------+------------------------------------+
```

### Documented Industry Context:
* **The Cost Multiplier:** LexisNexis Risk Solutions' empirical *True Cost of Fraud™ Study* [[S-05]] documents that every $1.00 of direct fraud costs US retail and e-commerce merchants an average of **$4.61 to $5.13** in total organizational expenses (lost inventory, non-refundable dispute fees, investigation labor, and shipping).
* **Pervasive Abandonment:** Industry surveys by Riskified and Datos Insights [[S-15]] reveal that approximately **60% of surveyed merchants abandon at least 40% of their chargebacks**, writing off roughly 16% of total volume simply because manual compilation takes 30 to 60 minutes per dispute.
* **Manual Representation Inefficacy:** Merchant Risk Council (MRC) and Cybersource [[S-06]] empirical reporting confirms that manual merchant win rates on fraud-coded disputes average **below 20%**.
* **High-Ticket Margin Drain:** For direct-to-consumer merchants selling physical goods between **$150 and $1,500 Average Order Value (AOV)** (specialty coffee gear, ergonomic furniture, luxury audio), an uncapped 25% contingency take-rate extracts **$75 to $375 per dispute**, consuming the merchant's entire net profit margin.

---

## 3. System Architecture & Zero-Dependency Engineering

ChargeDossier was deliberately engineered with **zero external production dependencies** (`node_modules` is completely empty). The entire platform executes on native Node.js and standard modern web APIs.

```
+----------------------------------------------------------------------------------------------------+
|                                    SYSTEM ARCHITECTURE WORKFLOW                                    |
+----------------------------------------------------------------------------------------------------+
|                                                                                                    |
|  [Merchant Data Layer]  -->  [Evidence Normalizer]  -->  [Deterministic Rules Engine]              |
|   - Gateway Auth Logs         - AVS / CVC / 3DS Flags     - Gross Category Weights (0-100)         |
|   - Carrier Tracking APIs     - Carrier Scan Telemetry    - Contradiction Deductions (P_j)         |
|   - Support / CRM Records     - Policy Document Index     - Tier Classification (A / B / C)        |
|                                                                     |                              |
|                                                                     v                              |
|  [Operator UI Interface]  <--  [Dossier Compiler]   <--  [Dynamic Gap Remediation]                 |
|   - 4-Tab Evidence Viewer       - Mastercom PDF Format     - Surfaces Missing Exhibits             |
|   - One-Click Approve/Reject    - Rebuttal Executive Sum   - Real-Time Score Recalculation         |
|   - Audit Trail State Sync      - Exhibits A through E     - Tier B -> Tier A Elevation            |
|                                                                                                    |
+----------------------------------------------------------------------------------------------------+
```

### Dual Execution Architecture:
1. **Mode A — Native Node.js HTTP Server (`server.js`):** Native HTTP server routing REST endpoints (`GET /api/disputes`, `POST /api/disputes/:id/audit`, `POST /api/disputes/:id/dossier`, `POST /api/disputes/:id/approve`, `POST /api/disputes/:id/reject`, `POST /api/disputes/:id/fix`, `POST /api/reset`) and serving static assets.
2. **Mode B — Standalone Client Controller (`app.js`):** Executes in any standard web browser or on GitHub Pages with zero backend dependencies, utilizing an embedded client-side fallback of the deterministic rules engine.

---

## 4. Deterministic Decision Framework & Mathematical Formulation

In financial dispute representation, submitting hallucinated citations or fabricated customer statements risks card scheme fines and merchant account termination. ChargeDossier rejects black-box LLMs in favor of strict, auditable deterministic mathematics.

### Mathematical Formula:
$$\text{Net Score} = \max\left(0, \min\left(100, \sum_{i=1}^{5} w_i \cdot s_i - \sum_{j} P_j\right)\right)$$

### 1. Gross Scoring Categories (Max 100 Points):
* **Category 1: Payment & Identity Verification ($w_1 = 30$ pts):** AVS Street & Zip Match (+12 pts full, +6 pts partial); CVC Match (+8 pts); 3D Secure Authentication (+10 pts authenticated, +5 pts attempted).
* **Category 2: Fulfillment & Carrier Proof ($w_2 = 35$ pts):** Carrier Proof of Delivery Scan (+15 pts); Delivery Address Matching Order Destination (+10 pts); Recipient Signature Confirmation on orders $\ge \$150$ (+10 pts).
* **Category 3: Policies & Disclosures ($w_3 = 15$ pts):** Timestamped Terms Accepted at Checkout (+8 pts); Published Return/Warranty Policy Attached (+7 pts).
* **Category 4: First-Party Trust & Behavioral Proof ($w_4 = 20$ pts):** Prior Order History & Account Tenure $\ge 3$ mo (+10 pts); Customer Communication & Engagement Logs (+10 pts).

### 2. Contradiction Deductions (Fatal Flaw Penalties, $P_j$):
* **Delivery Destination Mismatch ($P_1 = 20$ pts):** Package delivered to a different location than the verified shipping address (Critical).
* **Third-Party Signature ($P_2 = 10$ pts):** Delivery signed by an unverified freight forwarder rather than the cardholder surname (Warning).
* **Explicit Cardholder Fraud Report ($P_3 = 25$ pts):** Support transcript contains an explicit cardholder statement denying authorization or claiming stolen credentials (Critical).
* **Defect Without Documented Remedy ($P_4 = 10$ pts):** Merchandise defect reported under Reason Code 4853 without evidence of a merchant repair or replacement offer (Warning).
* **High-Risk Freight Forwarder Discrepancy ($P_5 = 20$ pts):** Billing state $\ne$ Shipping state with failed AVS street match (Critical).

### 3. Quality Tiers & Operational Triage:
* **`TIER_A` (Score $\ge 80$, 0 contradictions, 0 missing critical items):** High Quality $\rightarrow$ `APPROVE_FOR_PRESENTMENT`.
* **`TIER_B` (Score $60–79$, no critical contradictions):** Marginal / Fixable Gaps $\rightarrow$ `REVIEW_AND_ATTACH_EVIDENCE`.
* **`TIER_C` (Score $< 60$ or critical contradictions detected):** Deficient / High Risk $\rightarrow$ `REJECT_AND_ACCEPT_LOSS`.

---

## 5. Synthetic Case Benchmarks & Verified Code Parity

The prototype evaluates four representative synthetic dispute cases across `src/data/disputes.js`, verified with 100% data consistency across tests and documentation:

```
+--------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| TABLE 1: CHARGEDOSSIER EMPIRICAL BENCHMARK EVALUATION MATRIX                                                                                                        |
+----------+-----------------------+---------+--------+---------+------+-------------------------------------------------------+-------------------------------------+
| DISPUTE  | MERCHANDISE ITEM      | AMOUNT  | REASON | INITIAL | TIER | CONTRADICTIONS / GAPS IDENTIFIED                      | POST-REMEDIATION OUTCOME            |
| ID       |                       | (USD)   | CODE   | SCORE   |      |                                                       |                                     |
+----------+-----------------------+---------+--------+---------+------+-------------------------------------------------------+-------------------------------------+
| DSP-1049 | Wireless ANC Headset  | $349.00 | 4837   | 100/100 | A    | None. AVS/CVC/3DS verified; signature match.          | 100/100 -> Approved for Presentment |
| DSP-2081 | Burr Coffee Grinder   | $295.00 | 4853   | 22/100  | C    | Package In Transit (Weather Delay); -20 penalty.      | 22/100 -> Closed / Accepted Loss    |
| DSP-3312 | Motorized Stand Desk  | $850.00 | 4837   | 2/100   | C    | Freight forwarder; AVS fail; stolen card; -55 penal.  | 2/100 -> Closed / Accepted Loss     |
| DSP-4190 | Modular Bed Frame     | $1,150  | 4853   | 73/100  | B    | Missing return policy on defect claim; -10 penalty.   | 100/100 (Tier A) -> Remediated/Appr |
+----------+-----------------------+---------+--------+---------+------+-------------------------------------------------------+-------------------------------------+
```

---

## 6. How to Run, Test, and Benchmark

### Prerequisites
* Node.js v18.0.0 or higher (v20+ recommended).
* Zero external packages required (`npm install` is not needed).

### Quick Start (Local Web Server)
```bash
# 1. Start native HTTP server on port 3000
npm start
# or: node server.js

# 2. Open in browser:
http://localhost:3000
```

### Run the Automated Test Suite (24 Tests Across 3 Suites)
```bash
npm test
# or: node --test tests/*.test.js
```

#### Actual Test Output:
```
▶ ChargeDossier Rules Engine Tests (7 tests)
  ✔ Case DSP-1049 (High Quality Fraud): Qualifies as TIER_A with score >= 85
  ✔ Case DSP-2081 (Missing POD / In Transit): Qualifies as TIER_C with missing delivery proof
  ✔ Case DSP-3312 (Contradictory Freight Forwarder): Severe contradictions trigger heavy penalty
  ✔ Case DSP-4190 (Defective Merchandise with Missing Policy): Returns TIER_B with actionable fixes
  ✔ Engine throws on null or undefined dispute input
  ✔ Score Boundary Tests: 80 qualifies for TIER_A, 79 for TIER_B, 59 for TIER_C
  ✔ Defensive Resilience: Incomplete payload with missing nested objects does not throw
✔ ChargeDossier Rules Engine Tests

▶ ChargeDossier HTTP Server Integration Tests (13 tests)
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

▶ ChargeDossier End-to-End Workflow Tests (4 tests)
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

### Run the Standalone Latency & Deterministic Stability Benchmark
Execute the dedicated benchmark runner (100 warmup runs, 1,000 iterations per dispute = 4,000 total evaluations):
```bash
node tests/benchmark.js
```

#### Actual Benchmark Results:
* **DSP-1049 ($349 Fraud):** Mean Latency = $0.0073\text{ ms}$ ($7.3\text{ µs}$), Score = $100/100$, Variance = $0.0000$
* **DSP-2081 ($295 Not Received):** Mean Latency = $0.0040\text{ ms}$ ($4.0\text{ µs}$), Score = $22/100$, Variance = $0.0000$
* **DSP-3312 ($850 Forwarder Fraud):** Mean Latency = $0.0041\text{ ms}$ ($4.1\text{ µs}$), Score = $2/100$, Variance = $0.0000$
* **DSP-4190 ($1,150 Defect):** Mean Latency = $0.0044\text{ ms}$ ($4.4\text{ µs}$), Score = $73/100$, Variance = $0.0000$
* **Aggregate Mean Latency:** **$0.00493\text{ ms}$ (~5 microseconds per audit)** in pure CPU time; under $1.0\text{ ms}$ in full test assertions.
* **Score Stability Verdict:** **PASS (100% Deterministic Reproducibility, $\sigma^2 = 0.0000$).**

---

## 7. Known Limitations & Epistemic Boundaries

In accordance with product management discipline and research integrity:
1. **Independent Academic Prototype:** Built by an Integrated MBA candidate (Class of 2027, Parul University). The prototype demonstrates technical feasibility and heuristic design; it does **not** claim commercial product-market fit or measured real-world financial returns.
2. **Customer Willingness to Pay ($49/mo) is Unproven:** While merchants object to 25% contingency take-rates, their behavioral willingness to pay a flat $49/month SaaS fee remains an unvalidated hypothesis until merchant discovery interviews are conducted.
3. **Operator Tolerance for Review Friction:** Whether busy merchant operators are willing to spend 60 to 90 seconds reviewing high-ticket cases vs. demanding 100% hands-off automation remains an unvalidated hypothesis.
4. **Zero Live Customer Interviews Conducted:** The Phase 2B prospecting pipeline (`research/phase-2b-prospect-verification-audit.md`) identifies 10 verified US D2C merchants for future discovery; outreach has been intentionally paused awaiting authorization. No live customer interviews have occurred.
5. **No Commercial or Win-Rate Claims:** No claims of actual recovered money, measured merchant time savings, live win-rate improvement, or official card scheme certification are made.
6. **Synthetic Data Only:** The prototype was deliberately built using synthetic data to guarantee zero PII or merchant privacy violations.
7. **No Direct Processor Integrations:** Direct submission via live payment gateway APIs (Stripe, Shopify Payments, Razorpay) is not implemented in the prototype.

---

## 8. Master Documentation & Research Index

```
chargedossier/
├── index.html                               # Standalone client application & GitHub Pages entry
├── app.js                                   # Reactive client controller & in-browser rules engine
├── style.css                                # Accessible high-contrast fintech design system
├── server.js                                # Native Node.js HTTP REST API & static server
├── package.json                             # Project manifest & npm scripts
├── src/
│   ├── engine.js                            # Deterministic heuristic scoring engine
│   ├── state.js                             # State machine & review lifecycle manager
│   ├── generator.js                         # Mastercom-modeled Second Presentment compiler
│   └── data/disputes.js                     # 4 synthetic high-ticket dispute profiles
├── tests/
│   ├── engine.test.js                       # 7 unit tests for scoring rules & bounds
│   ├── server.test.js                       # 13 REST API integration tests
│   ├── workflow.test.js                     # 4 end-to-end workflow lifecycle tests
│   └── benchmark.js                         # 1,000-iteration latency & determinism benchmark
├── docs/
│   ├── presentation.pdf                     # 12-Slide Recruiter Presentation (16:9 Vector PDF)
│   ├── interview-presentation.html          # Interactive 12-slide HTML presentation deck
│   ├── interview-presentation.md            # Master presentation outline & timed speaker notes
│   ├── interview-qa.md                      # 12 challenging APM interview Q&As
│   ├── demo-checklist.md                    # 5-minute live demo sequence & script
│   ├── presentation-improvement-log.md      # Slide-by-slide coaching & audit log
│   └── case-study.md                        # Comprehensive product case study
└── research/
    ├── paper.pdf                            # 9-Page Academic Publication PDF (Print-Optimized)
    ├── paper.html                           # Academic publication HTML manuscript
    ├── paper.md                             # Source Markdown publication manuscript
    ├── claim-audit.md                       # Comprehensive 17-item claim audit register
    ├── references-verification.md           # 25/25 verified bibliography register
    ├── references.md                        # Formal IEEE citation index
    ├── reproducibility.md                   # Step-by-step replication protocol
    ├── submission-checklist.md              # Zenodo / SSRN open-access deposit guide
    ├── recruiter-readiness-review.md        # 8.8/10 APM recruiter readiness review
    └── publication-readiness-review.md      # 8.5/10 Academic publication readiness review
```

---

## 9. General APM Competency Alignment

ChargeDossier builds and demonstrates competencies required for **Associate Product Manager (APM)** roles at **Mastercard, Visa, Razorpay, and global fintechs**:
* **Problem Discovery & Sizing:** Grounded product scope in empirical industry data ($4.61–$5.13 fraud multiplier [[S-05]], 60% dispute abandonment [[S-15]]) and identified high-ticket AOV margin drag.
* **User Empathy & Segmentation:** Narrowed the ICP to high-ticket D2C merchants ($150–$1,500 AOV) where contingency take-rates destroy operating margins.
* **Ruthless Prioritization:** Scoped a zero-dependency prototype focusing strictly on core heuristic auditing, deliberately excluding live payment gateway plumbing before validating review demand.
* **Technical Trade-Off Judgment:** Chose deterministic heuristic rules over generative LLMs to eliminate hallucination liability in adversarial compliance workflows, achieving sub-millisecond execution with zero external dependencies.
* **Human-Centered Workflow Design:** Balanced automated exhibit compilation with an explicit human-in-the-loop review lock for nuanced merchandise claims (Reason Code 4853).
* **Payment Network Strategy:** Operationalized card scheme rules (Mastercard Mastercom/FPT, Visa CE3.0, gateway dispute fees) balancing issuer, acquirer, and merchant incentives.

---

## 10. Research Publication & Deposition Details

* **Title:** *Deterministic Decision Support for Payment Dispute Evidence: A Synthetic Case Evaluation of Explainable Pre-Submission Auditing*
* **Author:** Pragy Mathur
* **Affiliation:** Integrated MBA Candidate, Class of 2027
* **Institution:** **Parul University**
* **Preferred Deposition Repository:** **Zenodo (CERN / OpenAIRE)**
* **Suggested Description:** *"An independent synthetic-case evaluation of an explainable, deterministic decision-support prototype designed to identify missing or contradictory evidence in payment dispute preparation workflows."*
* **Suggested Keywords:** `Payment Disputes, Evidence Quality, Explainable Decision Support, Deterministic Rules Engine, Synthetic Case Evaluation, Fintech, Product Research, Second Presentment, First-Party Trust`
* **Publication Safeguard Notice:** The research paper has **not** been deposited publicly and holds no active DOI, pending explicit author confirmation of the pre-deposit checklist in [`research/submission-checklist.md`](research/submission-checklist.md).
