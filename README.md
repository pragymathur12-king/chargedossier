# Mastercard Opportunity Lab — ChargeDossier

**Project:** Mastercard Opportunity Lab  
**Founder:** Integrated MBA Candidate (Class of 2027)  
**Target Roles:** Mastercard Product Management &middot; Open Finance Strategy & Commercialization &middot; Data Analytics & Agentic AI  
**Working Prototype:** **ChargeDossier** — Evidence-Quality Review Copilot for E-Commerce Payment Disputes  
**Status:** **FUNCTIONAL PROTOTYPE COMPLETE & VERIFIED** (24 Automated Tests Passing / 100% Pass Rate)  
**Live Interactive Prototype:** [https://pragymathur12-king.github.io/chargedossier/](https://pragymathur12-king.github.io/chargedossier/)  
**Portfolio Case Study:** [https://pragymathur12-king.github.io/aura-portfolio/chargedossier.html](https://pragymathur12-king.github.io/aura-portfolio/chargedossier.html)  
**Interactive 6-Slide PM Presentation:** [docs/interview-presentation.html](docs/interview-presentation.html)  
**GitHub Repository:** [https://github.com/pragymathur12-king/chargedossier](https://github.com/pragymathur12-king/chargedossier)  
**Academic & Industry Disclaimer:** *ChargeDossier is an independent academic portfolio project and product management case study. It is not affiliated with, endorsed by, sponsored by, or integrated with Mastercard International Incorporated, Visa Inc., Stripe, Shopify, or any live payment network or acquiring processor.*

---

## 1. Executive Summary & Working Prototype Overview

ChargeDossier is an evidence-quality review copilot built to explore how high-ticket direct-to-consumer (D2C) e-commerce merchants can make informed second presentment decisions on payment disputes.

When an illegitimate chargeback or friendly fraud claim hits an online merchant, assembling compelling evidence requires extracting order records, payment authentication tokens, carrier transit logs, and customer support transcripts across multiple disconnected platforms. 

Rather than operating on success-contingent pricing (such as Chargeflow's advertised 25% fee on recovered chargeback value) or high monthly enterprise retainers (Chargebacks911), ChargeDossier explores an upfront review copilot workflow:
1. **Deterministic Rules Engine:** Scores evidence packages against internal heuristics modeled on common dispute reason codes (Mastercard 4837 Fraud vs. 4853 Merchandise) to calculate an explainable Evidence Quality Score (0–100) and Quality Tier (`TIER_A`, `TIER_B`, `TIER_C`). *Score tiers represent ChargeDossier's internal heuristic evaluation of merchant evidence completeness—not official Mastercard ratings, scheme certifications, or predicted dispute outcomes.*
2. **Contradiction & Gaps Detection:** Automatically identifies fatal flaws before submission (such as packages still in transit, billing vs. shipping state mismatches with failed AVS, or missing return policies).
3. **Structured Second Presentment Dossier:** Compiles an illustrative draft Second Presentment Dossier (Exhibits A through E) and executive rebuttal letter for merchant review and manual gateway upload. *Illustrative draft only; not an officially compliant or guaranteed submission-ready document.*
4. **Human-in-the-Loop Review Lock:** Empowers merchant operators with an explicit review checkpoint to **Approve** viable claims or **Reject** unviable claims (a decision that may avoid spending additional staff time on an unsuitable submission, though it does not reverse the initial intake fee assessed by the acquirer).
5. **Interactive Remediation & Demo Reset:** Allows merchants to attach missing exhibits (e.g. published warranty policy or customer remedy offers) to re-evaluate scores dynamically, with an instant one-click demo reset.

All four scenarios (`DSP-1049`, `DSP-2081`, `DSP-3312`, `DSP-4190`) are synthetic sandbox benchmark records. The application operates in a standalone simulation with no live processor, gateway, or card network connection.

---

## 2. Quick Start: How to Run the Prototype

The prototype is built with **zero external dependencies** using native Node.js. It runs in two distinct modes:

### Mode A: Local Web Server (Recommended)
```bash
# 1. Start the HTTP server on port 3000
npm start
# or: node server.js

# 2. Open in your browser:
http://localhost:3000
```

### Mode B: Direct In-Browser Execution (Zero-Server Standalone / GitHub Pages)
You can directly open `index.html` in any modern web browser or visit the live deployment:
```
https://pragymathur12-king.github.io/chargedossier/
```
*(The frontend executes the deterministic rules engine client-side using bundled synthetic benchmark data with zero backend dependencies).*

### Run the Automated Test Suite
```bash
# Executes 24 automated tests across 3 test suites:
npm test
# or: node --test tests/*.test.js
```

---

## 3. Product Acceptance Verification Matrix

| Acceptance Criterion | Implementation Details | Verified Test Status |
| :--- | :--- | :--- |
| **1. Open realistic sample dispute** | 4 distinct high-ticket synthetic cases (`DSP-1049`, `DSP-2081`, `DSP-3312`, `DSP-4190`). | `tests/engine.test.js` & `tests/server.test.js` |
| **2. Inspect order & evidence** | 4-tab inspection pane: Order & Customer, Payment Auth, Carrier POD, and Policies/Chat. | Verified in UI & REST API (`GET /api/disputes/:id`) |
| **3. Identify missing or contradictory evidence** | Flags missing delivery scans, signature mismatches, and freight forwarder discrepancies. | `tests/engine.test.js` (Tests 2, 3, 4) |
| **4. Explainable quality assessment** | 0–100 score, Quality Tiers (`TIER_A`, `TIER_B`, `TIER_C`), and heuristic compliance checklist. | Verified: DSP-1049 (100), DSP-2081 (22), DSP-3312 (2), DSP-4190 (73) |
| **5. Understand what to fix and why** | Itemized rule breakdown detailing issuing bank requirements and actionable fixes. | `src/engine.js` |
| **6. Generate structured dossier** | Mastercom-modeled Second Presentment Dossier with Exhibits A–E and executive rebuttal letter draft. | `tests/server.test.js` (Test 4) |
| **7. Explicitly approve or reject** | State transitions (`UNREVIEWED` $\rightarrow$ `AUDITED` $\rightarrow$ `APPROVED` or `REJECTED`) with operator notes. | `tests/workflow.test.js` (Tests 1, 2) |
| **8. Remediate & Elevate Score** | Interactive fix on DSP-4190 attaches return policy and support remedy, elevating score from 73 to 100. | `tests/workflow.test.js` (Test 3) |
| **9. Reset and repeat demonstration** | One-click reset clears decision locks, audit histories, and restores baseline synthetic data. | `tests/workflow.test.js` (Test 4) |

---

## 4. Master Documentation & Interview Kit

```
nifty-brahmagupta/
├── package.json                          # Project manifest & test scripts
├── server.js                             # Native HTTP REST API & static file server
├── src/
│   ├── data/
│   │   └── disputes.js                   # 4 realistic synthetic dispute benchmark records
│   ├── engine.js                         # Deterministic rules engine (Mastercard 4837/4853 heuristics)
│   ├── generator.js                      # Structured Second Presentment Dossier compiler
│   └── state.js                          # State machine & lifecycle review manager
├── public/
│   ├── index.html                        # Modern fintech review copilot UI
│   ├── style.css                         # High-contrast accessible design system (responsive)
│   └── app.js                            # Reactive client controller (server + offline mode)
├── tests/
│   ├── engine.test.js                    # Unit tests for scoring rules, boundaries, and resilience
│   ├── server.test.js                    # In-memory HTTP REST API integration tests (includes static assets)
│   ├── workflow.test.js                  # End-to-end state machine & lifecycle tests
│   └── test-report.md                    # Formal test execution & defect resolution report
├── docs/
│   ├── case-study.md                     # Comprehensive PM Portfolio Case Study (Thesis, Metrics, Retro)
│   ├── interview-presentation.md         # 5-Minute 6-Slide Executive Presentation Outline & Speaker Notes
│   ├── interview-qa.md                   # 12 Challenging PM Interview Questions & Evidence-Grounded Answers
│   └── demo-checklist.md                 # 5-Minute Live Demo Sequence, Expected Results & Fallback Plan
└── research/
    ├── decision-log.md                   # Formal decisions (including [DEC-04] override)
    ├── phase-2b-prospect-verification-audit.md # Independent audit of 10 distinct companies
    ├── phase-2b-outreach-tracker.csv     # Master recruitment tracker with supported facts
    ├── phase-2b-prospecting-guide.md     # Manual LinkedIn/Google merchant recruitment manual
    ├── phase-2b-validation-scorecard.md  # Decision rules defining strong vs weak evidence
    └── source-register.md                # Catalog of 25 primary and secondary industry sources
```

---

## 5. Alignment with Target Mastercard Roles

1. **Mastercard Product Management (Dispute & Processing Technology):**
   * Incorporates Mastercom layout practices (<18 pages, structured exhibits) and reason code dispute mechanics (Reason Code 4837 Fraud vs. Reason Code 4853 Merchandise).
   * Models acquirer economic realities, demonstrating how rejecting unwinnable disputes avoids wasting staff time on unviable submissions.
2. **Open Finance Strategy & Commercialization:**
   * Analyzed the statutory exclusion of commercial accounts under the CFPB Section 1033 Final Rule and steered discovery to where merchants hold legal standing: payment dispute data.
   * Leverages First-Party Trust (Reason Code 5002) data vectors, evaluating account tenure, digital receipts, and customer service transcripts.
3. **Data Analytics & Agentic AI:**
   * Replaces hallucination-prone black-box LLMs with an explainable, deterministic rules engine providing 100% mathematical auditability for financial operations.
   * Employs human-in-the-loop copilot architecture, keeping final approval authority with human merchant operators.

---

## 6. Honest Limitations & What Remains Unvalidated

* **Founder Role:** Built by an Integrated MBA candidate (Class of 2027) as an academic product strategy and prototyping project. The prototype proves technical feasibility and heuristic design; it does not claim commercial product-market fit or measured real-world financial returns.
* **Customer Willingness to Pay is Unvalidated:** While merchants may prefer lower fixed fees over 25% contingency rates, their behavioral willingness to pay a flat $49/mo SaaS fee remains an unvalidated hypothesis until merchant discovery interviews are conducted.
* **Review Friction vs. Autopilot Preference:** It remains unproven whether busy merchant operators are willing to spend 60 to 90 seconds reviewing high-ticket cases, or whether they insist on 100% hands-off automation despite potentially lower recovery rates.
* **Zero Customer Validation Interviews Conducted:** Outreach has been paused awaiting explicit authorization. No live customer interviews have occurred.
* **No Measured Commercial Claims:** No claims of actual recovered money, measured merchant time savings, live win-rate improvement, or official Mastercard certification are made.
* **Synthetic Data Only:** The prototype was deliberately built using synthetic data to guarantee zero PII or merchant privacy violations.
* **Gateway Connectivity:** The prototype generates illustrative draft dossiers for merchant review; direct submission to live payment processors (Stripe, Shopify Payments, Authorize.Net) requires merchant-authorized OAuth credentials and is not implemented.
