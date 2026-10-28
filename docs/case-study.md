# Product Case Study: ChargeDossier

**Product Name:** ChargeDossier  
**Subheading:** An Evidence-Quality Review Copilot for High-Ticket E-Commerce Payment Disputes  
**Project Classification:** Independent Academic & Portfolio Prototype (Integrated MBA Candidate, Class of 2027)  
**Target Roles:** Mastercard Product Management &middot; Open Finance Strategy & Commercialization &middot; Data Analytics & Agentic AI  
**Project Repository:** [https://github.com/pragymathur12-king/chargedossier](https://github.com/pragymathur12-king/chargedossier)  
**Live Interactive Prototype:** [https://pragymathur12-king.github.io/chargedossier/](https://pragymathur12-king.github.io/chargedossier/)  
**Portfolio Case Study:** [https://pragymathur12-king.github.io/aura-portfolio/chargedossier.html](https://pragymathur12-king.github.io/aura-portfolio/chargedossier.html)  
**Current Status:** Functional Standalone Prototype &middot; 24 Automated Tests Passing (100% Pass Rate) &middot; Pre-Customer Validation  
**Academic & Industry Disclaimer:** *This is an independent academic product management case study and prototype developed for educational and portfolio demonstration purposes. It is not an official Mastercard product, service, partnership, or endorsement, nor is it integrated with live payment networks, acquirers, or payment gateways.*

---

## 1. Executive Summary & Product Thesis

### 1.1 Executive Summary
ChargeDossier is an independent product strategy and software prototyping project exploring evidence quality, transparency, and decision control in merchant payment dispute management.

In direct-to-consumer (D2C) e-commerce, payment disputes (chargebacks) generate severe operational and financial friction. For small and mid-sized merchants selling relatively high-ticket physical goods ($150 to $1,500 Average Order Value), contested claims are disproportionately expensive. However, merchants currently face a polarized choice:
1. **Manual In-House Representment:** Logging into 3 to 5 disconnected SaaS platforms (Shopify, Stripe, ShipStation, Zendesk) to assemble screenshots and PDFs by hand—a process taking 30 to 60 minutes per dispute that results in high dispute abandonment (~60% of merchants abandon at least 40% of their disputes) and manual win rates below 20% on fraud-coded claims.
2. **Autopilot Contingency Bots:** Delegating dispute management to automated bots (such as Chargeflow) that operate on an advertised 25% contingency take-rate on gross recovered funds. While effective for low-ticket commodities, a 25% take-rate deducts $75 to $375 per recovered dispute on high-ticket orders, while automated submission without human pre-flight review risks locking out vital contextual evidence (such as published warranty terms or customer resolution logs).

ChargeDossier tests a third path: a **deterministic evidence-quality review copilot** offered at a flat utility SaaS subscription ($49/month). It evaluates merchant evidence packages against internal heuristics modeled on card network reason codes (Mastercard Reason Codes 4837 Fraud and 4853 Merchandise/Services), identifies fatal evidentiary contradictions prior to submission, compiles an illustrative Second Presentment Dossier draft, and empowers human operators with an explicit approval/rejection checkpoint.

### 1.2 Core Product Thesis
> **Product Thesis:** Direct-to-consumer merchants selling high-ticket physical goods ($150–$1,500 AOV) will adopt an upfront, explainable evidence-quality review tool with human-in-the-loop decision controls in preference to a 25% contingency take-rate, provided the tool reduces evidence assembly and audit time from 45 minutes to under 90 seconds while surfacing remediable evidentiary gaps before submission.

---

## 2. Target User, Buyer, and Problem Hypothesis

### 2.1 Target Customer Profile
* **Target Segment:** US-based direct-to-consumer (D2C) e-commerce merchants selling physical goods with Average Order Values (AOV) between $150 and $1,500 (e.g., luxury audio gear, specialty kitchen equipment, ergonomic furniture, consumer electronics, premium home goods).
* **Company Scale:** $1,000,000 to $10,000,000 in annual Gross Merchandise Volume (GMV), typically managing 15 to 80 payment disputes per month.
* **Target User (Day-to-Day Operator):** Merchant Operations Lead, Risk & Fraud Analyst, or Customer Support Manager tasked with assembling dispute evidence.
* **Target Economic Buyer:** Founder/CEO, Head of E-Commerce, or Chief Financial Officer (CFO) who feels the direct margin drag of dispute losses and third-party contingency take-rates.

### 2.2 The Problem Hypothesis
Small and mid-sized e-commerce operators lack an affordable, transparent mechanism to audit dispute evidence completeness before committing time or capital to second presentment representment:
1. **SaaS Data Fragmentation:** Evidence required to satisfy cardholder dispute standards is scattered across siloed tools: order records in Shopify, payment tokens in Stripe, fulfillment scans and signatures in ShipStation, and customer communications in Zendesk.
2. **Asymmetric Network Standards:** Payment networks (Mastercard, Visa) enforce rigid evidence requirements (e.g., Mastercom file ceilings <10MB and <18 pages [[S-01]]; Reason Code 4837 vs 4853 distinctions [[S-13]]; carrier delivery proofs [[S-02]]). Unstructured merchant rebuttals suffer automated rejection from card issuers.
3. **Punitive Commercial Terms:** Merchants either accept a 25% contingency cut on recovered revenue [[S-11]] or pay $1,000–$5,000/month enterprise retainers [[S-13]] that are economically non-viable for sub-$10M GMV brands.

---

## 3. Evidence-Backed Problem Context

Every foundational claim in ChargeDossier is grounded in documented industry research and public network specifications:

| Industry Fact | Documented Metric & Finding | Authoritative Source & Register Citation |
| :--- | :--- | :--- |
| **High Organizational Multiplier** | Every $1 of direct fraud loss represents **$4.61 to $5.13 in total organizational costs** for US retail and e-commerce merchants when accounting for merchandise replacement, investigation labor, shipping, and non-refundable fees. | LexisNexis Risk Solutions *True Cost of Fraud Study* [[S-05]] |
| **Pervasive Dispute Abandonment** | Approximately **60% of surveyed merchants leave at least 40% of their chargebacks completely uncontested**, with 16% written off immediately due to labor costs exceeding disputed values. | Riskified & Datos Insights Survey [[S-15]]; Strawhecker Group Benchmark |
| **Low Manual Win Rates** | Average merchant win rate on fraud-coded chargebacks handled manually without structured compelling evidence is **below 20%**. | Merchant Risk Council (MRC) & Cybersource Global Fraud Report [[S-06]] |
| **Non-Refundable Processor Fees** | Payment processors deduct a **$15.00 non-refundable dispute administration fee** immediately upon chargeback filing, regardless of whether the merchant wins or loses representment. | Stripe Inc. Dispute Documentation [[S-09]] |
| **Rigid Card Scheme File Ceilings** | Card scheme dispute platforms enforce strict second presentment technical constraints: maximum aggregate file size of 10MB and document length of 18 pages. | Mastercard Developer Documentation: Mastercom API v6 [[S-01]] |
| **First-Party Trust Standardization** | Card schemes have established structured evidentiary vectors (device IP, carrier tracking, account tenure, prior orders) to deflect first-party friendly fraud under Reason Code 5002. | Mastercard Newsroom: First-Party Trust Program [[S-02]] |
| **Open Banking Scope Exclusions** | The CFPB Dodd-Frank Section 1033 Final Rule applies exclusively to consumer financial accounts, explicitly **excluding commercial and small business accounts** from mandated open banking data sharing. | CFPB 12 CFR Part 1033 Final Rule [[S-16]] |

---

## 4. Alternatives Considered & Prioritization Rationale

During Phase 1 of the Mastercard Opportunity Lab, three distinct opportunity domains were investigated and scored against market viability, technical feasibility, regulatory tailwinds, and alignment with Mastercard priorities:

```
+----------------------------------------------------------------------------------------------------+
|                                    PHASE 1 OPPORTUNITY EVALUATION MATRIX                           |
+------------------------------------+-----------------+-------------+-------------------------------+
| OPPORTUNITY DOMAIN                 | SCORE (out of 5)| STATUS      | PRIMARY SELECTION / KILL REASON|
+------------------------------------+-----------------+-------------+-------------------------------+
| Area A: Dispute Management Copilot | 4.43 / 5.00     | SELECTED    | High merchant pain, clear ROI,|
|                                    |                 |             | zero compliance gating.       |
| Area B: Open Finance SMB Bridge    | 3.10 / 5.00     | DISQUALIFIED| CFPB 1033 excludes SMBs; SOC2 |
|                                    |                 |             | & bank aggregator gatekeeping.|
| Area C: Agentic SMB FinOps Copilot | 4.25 / 5.00     | RUNNER-UP   | High incumbent bundling risk  |
|                                    |                 |             | (Intuit QuickBooks Assist).   |
+------------------------------------+-----------------+-------------+-------------------------------+
```

### Why Area B (Open Finance) Was Disqualified
* **Regulatory Statute Limitation:** The CFPB Section 1033 Final Rule (October 22, 2024) officially excluded commercial and business bank accounts [[S-16]]. Financial institutions are under no legal mandate to provide free, standardized developer APIs for small business banking data.
* **Institutional Gatekeeping:** Production access to open banking data aggregators (Mastercard Finicity, Plaid) requires corporate KYB verification, audited SOC 2 Type II compliance, and commercial data insurance [[S-21]]. A student portfolio prototype cannot test live commercial banking feeds without enterprise entity sponsorship.

### Why Area C (Agentic FinOps) Was Deprioritized
* **Aggressive Incumbent Bundling:** Intuit QuickBooks actively bundles AI financial assistants (*Intuit Assist*) directly into its small business accounting platform [[S-18]].
* **Hallucination Risk:** Generative cash flow simulations carry high operational liability if an AI agent generates incorrect tax or payroll projections.

### Why Area A (Dispute Review Copilot) Won
Dispute operations represent a concrete financial leakage point where merchants already possess legal ownership of their order, shipping, and customer records. Solutions can be tested deterministically with zero regulatory gatekeeping and clear net margin benefits.

---

## 5. Core Workflow & Why Human Review is Retained

### 5.1 The Operator Workflow
```
+----------------------------------------------------------------------------------------------------+
|                                      KEY OPERATOR WORKFLOW                                         |
+------------------------------------+--------------------------------+------------------------------+
| 1. SELECT & INSPECT                | 2. AUDIT & REMEDIATE           | 3. DECIDE & EXPORT           |
| Operator selects high-ticket case; | Pre-flight audit evaluates     | Operator reviews structured  |
| inspects order, payment auth,      | rules; surfaces missing return | draft dossier; explicitly    |
| carrier POD, and chat records.     | policy (DSP-4190); operator    | approves for gateway export  |
|                                    | attaches policy (73 -> 100).   | or rejects to accept loss.   |
+------------------------------------+--------------------------------+------------------------------+
```

1. **Queue Inspection:** The operator reviews incoming disputes with network metadata (Mastercard Reason Code, filing deadline, disputed amount, order details).
2. **Multi-Tab Evidence Review:** The operator reviews structured evidence tabs:
   * *Order Details:* Customer tenure, prior order history, billing vs. shipping address.
   * *Payment Auth:* Gateway transaction ID, card brand, AVS street match, AVS zip match, CVC check, 3DS authentication status, and customer IP location.
   * *Fulfillment / Carrier POD:* Carrier tracking status, delivery timestamp, address verification, and cardholder signature receipt.
   * *Policy & Transcripts:* Terms acceptance timestamp, refund policy attachment, and customer support ticket transcripts.
3. **Pre-Flight Heuristic Audit:** Clicking `Run Quality Audit` evaluates the package against deterministic rules. The UI animates the score circle (0–100), updates the quality tier pill, highlights fatal contradictions, and itemizes rule-by-rule points.
4. **Interactive Gap Remediation:** If fixable gaps exist (such as missing return policy on a merchandise claim), an actionable remediation drawer surfaces. Simulating attachment instantly recalculates the score in real time.
5. **Dossier Preview:** The operator toggles the structured Second Presentment Dossier containing an Executive Rebuttal Letter and Exhibits A through E.
6. **Explicit Operator Checkpoint (Approve or Reject):**
   * **Approve:** Operator enters verification notes; the state transitions to `APPROVED` and the draft dossier is locked for operator records.
   * **Reject (Accept Loss):** If evidence is fatally compromised (e.g., package still in transit), the operator accepts the loss, preventing wasted staff labor on an unviable case.
7. **One-Click Demo Reset:** Restores all synthetic cases to baseline for repeatable demonstration.

### 5.2 Why Human-in-the-Loop Review is Retained (vs. 100% Autopilot)
1. **High-Ticket Asymmetry:** On a $20 t-shirt, automated submission on autopilot is rational because merchant labor exceeds the transaction value. On an $850 standing desk or a $1,150 modular bed frame, a flawed submission causes an irreversible financial loss. A human operator needs 60 to 90 seconds of transparent guidance, not a black-box bot.
2. **Contextual Evidence Attachment:** Automated bots excel at pulling standard tracking numbers, but fail on complex Reason Code 4853 (Defective Merchandise / Not as Described) claims where winning requires merchant-specific warranty terms, customer service transcripts, or proof of replacement parts offered.
3. **Avoiding Disrepute Penalties:** Submitting fabricated, contradictory, or deficient evidence damages acquiring bank relationships and risks pre-arbitration penalties ($500 network filing fees).

---

## 6. Product Scope, Non-Goals & Key Trade-Offs

### 6.1 Product Scope (What Was Built)
* Zero-dependency Node.js HTTP server and REST API (`/api/disputes`, `audit`, `dossier`, `fix`, `approve`, `reject`, `reset`).
* Dual-execution frontend supporting both standard local server mode (`http://localhost:3000`) and offline zero-server browser execution (`file:///`).
* Deterministic heuristic scoring engine modeling Mastercard Reason Codes 4837 and 4853.
* Dynamic remediation simulation elevating marginal evidence to high-tier status.
* Complete Mastercom-modeled Second Presentment Dossier compiler with Exhibits A–E.
* Automated test harness with 24 unit, integration, and workflow tests (100% pass rate).

### 6.2 Explicit Non-Goals (What Was Deliberately Excluded)
* **Direct Live Payment Gateway Submission:** The prototype does not connect via OAuth to live Stripe, Shopify Payments, or Authorize.Net merchant accounts. Dossiers are formatted as illustrative drafts for manual export.
* **Live Network Scheme Connection:** The prototype has no connection to the Mastercard Mastercom API or Visa Resolve Online (VROL), which are legally restricted to licensed financial institutions [[S-01]].
* **Live PII Ingestion:** The prototype uses synthetic benchmark data exclusively; no real consumer credit card numbers (PANs) or personal customer identities are stored or processed.
* **Generative AI Rebuttal Generation:** Generative LLMs were intentionally excluded from scoring and narrative assembly to eliminate the risk of legal and factual hallucinations.

### 6.3 Key Product Trade-Offs Made
* **Deterministic Rules vs. Machine Learning:** Prioritized 100% explainable, mathematically auditable heuristics over probabilistic ML models so merchants know precisely why points were deducted.
* **Flat Utility SaaS vs. Contingency Pricing:** Modeled a flat $49/month subscription over a 25% take-rate to provide transparent unit economics for high-ticket merchants, acknowledging that willingness to pay remains an unvalidated hypothesis.
* **Local Zero-Dependency Architecture vs. Cloud Hosting:** Built with native Node.js built-ins (`http`, `fs`, `node:test`) rather than heavy frameworks (Next.js, Express, Jest) to guarantee instant, reproducible execution in any sandbox or offline environment.

---

## 7. The Four Synthetic Benchmark Scenarios

ChargeDossier was engineered and verified around four distinct synthetic dispute scenarios representing common high-ticket payment dispute edge cases:

```
+----------------------------------------------------------------------------------------------------+
|                                    SYNTHETIC BENCHMARK SCENARIO MATRIX                             |
+----------+-----------------------+---------+-------------+-------+--------+------------------------+
| CASE ID  | PRODUCT & ORDER VALUE | NETWORK | REASON CODE | SCORE | TIER   | CORE ARCHITECTURAL TEST|
+----------+-----------------------+---------+-------------+-------+--------+------------------------+
| DSP-1049 | Audio Headphones      | Master- | 4837 (Fraud/| 100   | TIER_A | Happy Path / Strong    |
|          | $349.00 USD           | card    | Unauth)     | /100  | (Pass) | Compelling Evidence    |
| DSP-2081 | Coffee Grinder        | Master- | 4853 (Goods | 22    | TIER_C | Fatal Flaw / Carrier   |
|          | $295.00 USD           | card    | Not Recvd)  | /100  | (Fail) | Still in Transit       |
| DSP-3312 | Standing Desk         | Master- | 4837 (Fraud/| 2     | TIER_C | Severe Contradictions /|
|          | $850.00 USD           | card    | Unauth)     | /100  | (Fail) | Freight Forwarder Bay  |
| DSP-4190 | Modular Bed Frame     | Master- | 4853 (Goods | 73->  | TIER_B | Marginal / Interactive |
|          | $1,150.00 USD         | card    | Defective)  | 100   | -> A   | Gap Remediation        |
+----------+-----------------------+---------+-------------+-------+--------+------------------------+
```

### Detailed Breakdown of Each Case:
1. **`DSP-1049` (High-End Audio Gear — $349.00 | Reason Code 4837 Fraud):**
   * *Evidence:* Full AVS street and zip match (`Y`), CVC match (`M`), 3D Secure authenticated, FedEx delivery confirmation with matching cardholder signature (`E. VANCE`), customer account tenure of 18 months with 4 prior successful orders, and positive customer service transcript confirming delivery.
   * *Test Objective:* Verifies that strong first-party compelling evidence achieves maximum heuristic quality score (**100/100, Tier A**), generating a recommended approval decision.
2. **`DSP-2081` (Specialty Coffee Grinder — $295.00 | Reason Code 4853 Item Not Received):**
   * *Evidence:* UPS tracking indicates package is `"In Transit — Severe Weather Delay"` with no delivery scan, no signature, and no destination confirmation.
   * *Test Objective:* Verifies that the rules engine detects fatal non-delivery flaws on merchandise claims. Missing proof of delivery triggers a critical requirement failure, capping the score at **22/100 (Tier C)** and recommending rejection to avoid wasted operator time.
3. **`DSP-3312` (Ergonomic Standing Desk — $850.00 | Reason Code 4837 Fraud):**
   * *Evidence:* Billing address in Texas vs. shipping address in Florida; AVS street match failed (`N`); delivery completed to an unverified commercial freight-forwarding warehouse bay; cardholder initiated phone complaint stating card was stolen.
   * *Test Objective:* Verifies that severe contradictory indicators (AVS mismatch, freight forwarder delivery, active fraud report) trigger heavy mathematical contradiction penalties (-40 points), reducing the score to **2/100 (Tier C)**.
4. **`DSP-4190` (Modular Bed Frame — $1,150.00 | Reason Code 4853 Defective Merchandise):**
   * *Evidence:* Item successfully delivered with signature; customer reported a cracked wooden support slat; merchant initial record omitted a published return policy and formal remedy offer.
   * *Test Objective:* Verifies that missing required documentation on a defect claim prevents Tier A classification, resulting in **73/100 (Tier B)**. Clicking the interactive remediation button attaches the merchant's 30-day warranty policy and customer support replacement offer, recalculating the score dynamically to **100/100 (Tier A)**.

---

## 8. How the Heuristic Scoring Engine Works

### 8.1 Scoring Methodology & Heuristic Weights
The rules engine ([`src/engine.js`](../src/engine.js)) calculates a deterministic Evidence Quality Score (0–100) by evaluating five core heuristic categories:

```
Final Score = Base Score (Sum of Awarded Category Points) - Contradiction Deductions
```

1. **Payment Authentication & Verification (Max 35 Points):**
   * AVS Street & Postal Code Match (`Y`): +15 points
   * CVC Security Code Match (`M`): +10 points
   * 3D Secure Authentication (`Y`): +10 points (models card network liability shift heuristics)
2. **Fulfillment & Carrier Proof of Delivery (Max 35 Points):**
   * Carrier Delivered Status: +15 points
   * Destination Address Verification Match: +10 points
   * Captured Cardholder Delivery Signature: +10 points
3. **First-Party Trust & Behavioral Continuity (Max 15 Points):**
   * Account Tenure $\ge 6$ months: +5 points
   * Prior Successful Undisputed Orders $\ge 2$: +5 points
   * Customer IP Geolocation Match to Billing/Shipping State: +5 points
4. **Policy Acceptance & Customer Transcripts (Max 15 Points):**
   * Checkout Terms & Conditions Acceptance with Timestamp: +5 points
   * Published Return/Cancellation Policy Attached: +5 points
   * Customer Communication Logs Documented: +5 points
5. **Contradiction & Fatal Flaw Penalties (Subtractive):**
   * Item Not Received claim where tracking confirms package is still in transit: -25 points
   * Address Mismatch with failed AVS on Fraud claim: -20 points
   * Unverified Freight Forwarder delivery on Fraud claim: -20 points
   * Unremedied merchandise defect on 4853 claim: -10 points

### 8.2 Quality Tiers & Score Boundaries
* **`TIER_A` (High Quality / Strong Evidence — Score $\ge 80$ AND Zero Missing Critical Items):** Compelling evidence satisfies the heuristic checklist. Recommended Action: `APPROVE_FOR_PRESENTMENT`.
* **`TIER_B` (Marginal / Fixable Gaps — $60 \le \text{Score} < 80$ OR Missing Fixable Items):** Partial documentation attached; surfaces actionable remediation. Recommended Action: `REVIEW_AND_ATTACH_EVIDENCE`.
* **`TIER_C` (Deficient / High Risk — $\text{Score} < 60$ OR Severe Contradictions):** High probability of loss under scheme representation rules. Recommended Action: `REJECT_AND_ACCEPT_LOSS`.

### 8.3 Inherent Limitations of the Heuristic Score
* **Not an Official Scheme Rating:** Card schemes (Mastercard, Visa) do not score merchant evidence packages with a numerical consumer rating; issuing bank dispute analysts evaluate submissions under network rulebooks.
* **No Guaranteed Win Prediction:** Issuing banks retain sole discretion on dispute determination. A 100/100 score indicates heuristic evidence completeness under typical representation practices, not a guaranteed financial win.
* **Issuer Discretion on Subjective Claims:** On Reason Code 4853 merchandise claims, cardholders may submit secondary expert opinions that merchant documentation cannot anticipate.

---

## 9. Prototype Verification: Automated Tests vs. Manual Browser Testing

ChargeDossier maintains a strict, transparent distinction between automated test execution and reported browser usability:

```
+----------------------------------------------------------------------------------------------------+
|                                    PROTOTYPE VERIFICATION BREAKDOWN                                |
+------------------------------------+--------------------------------+------------------------------+
| VERIFICATION LEVEL                 | TEST HARNESS & METHODOLOGY     | EXACT OUTCOMES VERIFIED      |
+------------------------------------+--------------------------------+------------------------------+
| 1. Automated Test Suite            | Native `node:test` runner      | 24 / 24 Tests Passing (100%) |
|    (Continuous Integration)        | - `tests/engine.test.js` (7)   | Duration: 196.2 ms           |
|                                    | - `tests/server.test.js` (13)  | Exit Code: 0                 |
|                                    | - `tests/workflow.test.js` (4) | Zero test mocks or skips     |
+------------------------------------+--------------------------------+------------------------------+
| 2. Manual Browser Usability Tests  | Founder manual browser session | DSP-1049: 100/100 (Tier A)   |
|    (Chrome / Edge / Firefox)       | verified at `localhost:3000`   | DSP-2081: 22/100 (Tier C)    |
|                                    | and standalone `file:///` mode | DSP-3312: 2/100 (Tier C)     |
|                                    |                                | DSP-4190: 73 -> 100 (Tier A) |
|                                    |                                | Reset: Restores initial state|
+------------------------------------+--------------------------------+------------------------------+
```

### Detailed Distinctions:
* **Automated Unit & Integration Tests (24 Tests):** Executed via `node --test tests/*.test.js`. Verifies engine scoring mathematical boundaries (80 vs 79, 60 vs 59), defensive handling of incomplete payloads, all REST API endpoints, CORS preflight handling, static asset serving (`/index.html`, `/app.js`, `/src/data/disputes.js`), state machine lifecycle transitions, and demo reset.
* **Reported Manual Browser Usability:** The founder manually verified the browser interface on `http://localhost:3000` and direct `file:///` mode. Verified that:
  * DSP-1049 displays 100/100 and approves cleanly.
  * DSP-2081 displays 22/100 and rejects cleanly.
  * DSP-3312 displays 2/100 with severe contradiction alerts.
  * DSP-4190 displays 73/100 initially and dynamically elevates to 100/100 upon clicking the remediation button.
  * Demo reset restores all cards and queue items to unreviewed states.
* **Why Automated Headless Browsers Were Not Used:** Headless browser automation libraries (Puppeteer/Playwright) are not installed in the workspace to maintain a zero-dependency architecture. Standard system browser binaries hang inside the secure terminal sandbox during hardware checks. Therefore, manual browser testing is clearly reported as manual verification rather than automated headless test passes.

---

## 10. Success Metrics & Proposed Validation Experiment Plan

### 10.1 Future Commercial Success Metrics (If Scaled)
If ChargeDossier were commercialized, the product would be evaluated against five core metrics:
1. **Pre-Submission Quality Pass Rate:** % of generated dossiers scoring $\ge 80$ (Tier A) prior to merchant representation.
2. **Operational Time Savings:** Reduction in merchant evidence assembly and audit time from an industry baseline of 45 minutes to $<90$ seconds per case.
3. **Avoided Wasted Effort Rate:** % of unwinnable or deficient chargebacks (Tier C) correctly identified and accepted as loss prior to wasting operator representment labor.
4. **Net Merchant Recovery:** Total dollar value of dispute funds recovered net of software subscription fees compared to a 25% contingency fee baseline.
5. **Acquirer Second Presentment Win Rate:** Uplift in second presentment win rate on high-ticket physical goods compared to the merchant's historical manual baseline.

### 10.2 Proposed Phase 2B Validation Experiment (Customer Discovery Sprint)
Before writing production integrations or establishing gateway partnerships, a rigorous customer discovery experiment must be executed:

```
+----------------------------------------------------------------------------------------------------+
|                                    PHASE 2B DISCOVERY SPRINT SPECIFICATION                         |
+------------------------------------+--------------------------------+------------------------------+
| PARAMETER                          | EXPERIMENTAL DESIGN            | QUANTITATIVE DECISION GATE   |
+------------------------------------+--------------------------------+------------------------------+
| Target Sample                      | 5 to 8 Verified US D2C Merchant| Complete interviews using    |
|                                    | Operators ($1M–$10M GMV;       | `research/phase-2b-prospect- |
|                                    | AOV > $150; 15+ disputes/mo)   | verification-audit.md`       |
+------------------------------------+--------------------------------+------------------------------+
| Core Interview Topics              | - Minutes spent per dispute    | Measure willingness to pay   |
|                                    | - Sentiment toward 25% fees    | ($49/mo flat vs contingency);|
|                                    | - Custom evidence friction     | test demand for review locks.|
+------------------------------------+--------------------------------+------------------------------+
| Kill / Pivot Decision Gate         | Minimum 3 of 5 operators must: | IF < 3 operators confirm:    |
|                                    | 1. Confirm >20 min assemble time| PIVOT away from review copilot|
|                                    | 2. Confirm preference for flat  | to alternate fintech problem |
|                                    |    SaaS over 25% take-rate     | or archive opportunity.      |
|                                    | 3. Demand pre-submission review|                              |
+------------------------------------+--------------------------------+------------------------------+
```

---

## 11. Risks, Counterevidence & Unresolved Assumptions

### 11.1 Unresolved Hypotheses & Market Risks
1. **Willingness to Pay (Flat Fee vs. Contingency):** While merchants verbally complain about 25% contingency take-rates, their behavioral preference may favor "no-win, no-fee" risk transfers. An upfront $49/month SaaS fee requires merchants to absorb software expense even in low-dispute months.
2. **Review Friction vs. Autopilot Demand:** Solopreneurs and lean e-commerce teams may demand 100% hands-off automation, refusing to spend 60 to 90 seconds reviewing dossiers regardless of fee savings or potential win-rate uplifts.
3. **Incumbent Custom Evidence Sufficiency:** Leading automated vendors (Chargeflow, Justt) may already provide sufficient custom file upload mechanisms, rendering a standalone review copilot redundant.

### 11.2 What Evidence Would Disprove the Product Hypothesis?
The ChargeDossier product concept would be definitively disproven and killed if:
* Discovery interviews reveal that merchants handling $150+ goods universally insist on zero-touch automation and express zero concern over 25% take-rates.
* Payment gateways (Stripe, Shopify Payments) integrate native pre-submission evidence quality checks directly into merchant portals for free.
* Card schemes universally mandate automatic deflection at the switch level (Mastercard First-Party Trust Reason Code 5002 and Visa CE3.0 [[S-02, S-07]]), eliminating merchant dispute queues entirely.

---

## 12. What to Do Next with Real Customers

If authorized to engage live merchants, the immediate 60-day roadmap would focus on:
1. **Conduct the 8 Discovery Interviews:** Execute the semi-structured interview protocol documented in [`research/phase-2b-prospecting-guide.md`](../research/phase-2b-prospecting-guide.md) with qualified merchant operators from the verification audit.
2. **Shadow Live Merchant Workflows:** Observe a merchant operator assemble evidence for 3 live payment disputes to record exact cross-tool navigation, friction points, and time expenditures.
3. **Pilot Shadow Dossier Test (No Live Submissions):** With explicit merchant permission, ingest 10 redacted historical disputes from a pilot store. Run ChargeDossier to generate shadow dossiers and ask the merchant's risk lead: *"Would you have submitted this dossier over your original rebuttal?"*
4. **Determine Willingness to Pay:** Present a landing page pricing experiment offering flat pricing ($49/month) vs. capped contingency (10% up to $50 max) to measure actual commitment before engineering live gateway API connectors.

---

## 13. Personal PM Retrospective & Lessons Learned

### 13.1 Honest Founder Reflection
As an Integrated MBA candidate (Class of 2027) targeting Product Management and Open Finance Strategy roles at Mastercard, building ChargeDossier delivered profound product lessons:
1. **The Discipline of Epistemic Boundaries:** The easiest trap in fintech is assuming that an impressive market statistic ($5.13 fraud multiplier [[S-05]]) proves customer demand for your specific solution. Enforcing a strict distinction between verified facts, working hypotheses, and unknown assumptions prevented premature scaling and maintained research integrity.
2. **The Danger of Regulatory Assumptions:** Initial project enthusiasm centered on Open Banking for small businesses. Reading the statutory text of the CFPB Section 1033 Final Rule [[S-16]] revealed that commercial accounts were explicitly excluded. A great PM reads the primary regulatory text rather than relying on secondary fintech commentary.
3. **Deterministic Logic Over GenAI Hype:** In 2026, the common inclination is to wrap an LLM prompt around every problem. In payment disputes, where submissions must adhere strictly to network reason codes and evidence limits, deterministic mathematical rules are vastly superior to non-deterministic generative models.
4. **Building for Empathy, Not Vanity:** Building a functioning prototype with zero external dependencies forced focus on the real user experience—ensuring error messages are actionable, evidence inspection is intuitive, and review checkpoints empower human operators.

---

## 14. Master Epistemic Audit Matrix

| Category | Specific Item | Verified Evidentiary Status | Supporting Source / Proof |
| :--- | :--- | :--- | :--- |
| **Verified Prototype Behavior** | Prototype runs with zero external dependencies; executes in local server mode (`localhost:3000`) and offline (`file:///`). | **Fully Verified** | Executed in native Node.js v24.19.0; zero `node_modules` |
| **Verified Prototype Behavior** | 24 automated tests pass covering engine rules, REST endpoints, static files, and state machine workflows. | **Fully Verified** | Native `node:test` suite passing (196.2 ms, exit code 0) |
| **Verified Prototype Behavior** | Heuristic scores evaluate to exact values: DSP-1049 (100), DSP-2081 (22), DSP-3312 (2), DSP-4190 (73 -> 100). | **Fully Verified** | Verified in automated engine tests and manual browser execution |
| **External Market Evidence** | Fraud multiplier costs merchants $4.61–$5.13 per dollar of direct fraud loss. | **Verified Fact** | LexisNexis Risk Solutions True Cost of Fraud Study [[S-05]] |
| **External Market Evidence** | Chargeflow advertises a 25% contingency fee on recovered chargeback value. | **Verified Fact** | Chargeflow Official Pricing Documentation [[S-11]] |
| **External Market Evidence** | CFPB Section 1033 Final Rule explicitly excludes commercial and small business accounts. | **Verified Fact** | CFPB 12 CFR Part 1033 Final Rule (Oct 2024) [[S-16]] |
| **External Market Evidence** | Mastercom API v6 limits second presentment submissions to 10MB and 18 pages. | **Verified Fact** | Mastercard Developer Documentation [[S-01]] |
| **Product Hypothesis** | Merchants prefer a flat $49/month SaaS subscription over a 25% contingency take-rate. | **Unvalidated Hypothesis** | Requires discovery interview validation |
| **Product Hypothesis** | Merchant operators are willing to spend 60–90 seconds reviewing high-ticket cases. | **Unvalidated Hypothesis** | Behavioral tolerance for review friction unproven |
| **Product Hypothesis** | Pre-flight heuristic checks improve second presentment recovery rates by $>15\%$. | **Unvalidated Hypothesis** | Requires live production gateway testing |
| **Proposed Future Experiment** | Phase 2B merchant discovery sprint with 5–8 verified US D2C merchants ($1M–$10M GMV). | **Proposed Experiment** | Protocol detailed in `research/phase-2b-prospecting-guide.md` |
| **Acknowledged Factual Gap** | Zero merchant discovery interviews or customer surveys have been completed to date. | **Formally Acknowledged** | Outreach paused awaiting manual authorization |
| **Acknowledged Factual Gap** | No live payment processor or card scheme integration exists. | **Formally Acknowledged** | Standalone sandbox simulation only |
