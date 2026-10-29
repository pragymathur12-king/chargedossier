# ChargeDossier: Recruiter-Ready 16:9 Executive Presentation Guide

**Project:** Mastercard Opportunity Lab — ChargeDossier  
**Author / PM:** Pragy Mathur (Integrated MBA Candidate, Class of 2027)  
**Target Roles:** General Associate Product Manager (APM) &middot; Target Companies: Mastercard, Visa, Razorpay, Fintechs  
**Format:** 12-Slide Executive Presentation Deck (16:9 Aspect Ratio) with Timed Speaker Notes (~5–7 Minutes Total)  
**Deliverable Files:**
- Interactive Presentation Deck: [`docs/interview-presentation.html`](interview-presentation.html)
- High-Resolution 16:9 PDF Deck: [`docs/presentation.pdf`](presentation.pdf)
- Live Interactive Demo: [https://pragymathur12-king.github.io/chargedossier/](https://pragymathur12-king.github.io/chargedossier/)
- Dedicated Case Study: [https://pragymathur12-king.github.io/aura-portfolio/chargedossier.html](https://pragymathur12-king.github.io/aura-portfolio/chargedossier.html)
- GitHub Repository: [https://github.com/pragymathur12-king/chargedossier](https://github.com/pragymathur12-king/chargedossier)

**Disclaimer:** *Independent academic product management case study and prototype. Not affiliated with, endorsed by, sponsored by, or integrated with Mastercard International Incorporated, Visa Inc., Stripe, or Shopify.*

---

## Slide 1: Cover & Project Identity

### Headline
**ChargeDossier: Deterministic Decision Support for Payment Dispute Evidence**

### Subtitle
*An Associate Product Manager Case Study in Explainable Fintech Operations*

### Visual & Metadata
- **Fintech Card Geometry:** Deep charcoal `#060709` background with subtle payment-card mesh and Mastercard-inspired red, orange, and amber accents.
- **Author:** Pragy Mathur &middot; Integrated MBA Candidate (Class of 2027)
- **Verified Suite:** 24/24 Automated Tests Passed (100% Pass Rate &middot; 312ms runtime)
- **Artifacts:** Public GitHub Repository, Live GitHub Pages Sandbox, Dedicated Case Study
- **Discreet Disclosure:** *"Independent portfolio project. Not affiliated with, sponsored by, or endorsed by Mastercard."*

### Speaker Notes (Timing: ~30 Seconds)
> *"Hello everyone. Today I am presenting **ChargeDossier**, an evidence-quality review copilot I designed and engineered for high-ticket e-commerce payment disputes.
> 
> Operating as part of the Mastercard Opportunity Lab, ChargeDossier investigates how merchants can replace 25% contingency fee drag and uninspected dispute submissions with an explainable, deterministic evidence auditing workflow.
> 
> The prototype is fully implemented, verified by 24 passing automated tests, and live on GitHub Pages with zero server dependencies."*

---

## Slide 2: Executive Summary

### Headline
**Engineering Discipline Meets Epistemic Honesty**

### Key Message
ChargeDossier bridges the gap between merchant operational friction and card network dispute standards, while maintaining strict boundaries between verified software behavior and unvalidated customer demand.

### Slide Content (4-Pillar Grid)
1. **The Problem:** High-ticket online merchants ($150–$2,000+ AOV) face a polarized choice: 30–60 min manual assembly across 4 disconnected SaaS tools (resulting in ~60% dispute abandonment and <20% manual win rates), or automated bots charging a heavy **25% contingency take-rate** ($75–$375 per claim) that submit fatal contradictions blindly.
2. **What Was Built:** ChargeDossier — a zero-dependency deterministic review copilot evaluating dispute readiness (0–100) across 5 rule categories modeled on Mastercard 4837/4853 heuristics, surfacing fatal contradictions, and generating Mastercom-modeled Second Presentment dossiers with a human approval lock.
3. **What Was Verified:** 24 automated unit, integration, and workflow tests passing in 312ms; 4 distinct synthetic high-ticket dispute edge cases; dual execution verified (local Node.js server + standalone in-browser on GitHub Pages).
4. **Epistemic Boundaries:** Merchant willingness to pay a flat $49/mo SaaS fee vs. 25% contingency remains an unvalidated hypothesis; operator review friction tolerance (60–90 sec) vs. autopilot preference is unproven; zero customer validation interviews have been conducted (outreach paused awaiting review).

### Speaker Notes (Timing: ~45 Seconds)
> *"To summarize the core findings up front: High-ticket merchants face severe economic friction in payment disputes. Contesting a $1,000 chargeback manually takes 45 minutes across Shopify, Stripe, FedEx, and Zendesk, while automated bots take a 25% contingency bite—charging $250 on a single dispute while often submitting fatal contradictions.
> 
> I built ChargeDossier to test an upfront copilot model: scoring evidence in milliseconds, flagging fatal flaws like items delayed in transit, compiling Mastercom-compliant dossiers, and locking decisions with a human operator.
> 
> The technical behavior is 100% verified by 24 automated tests. However, from a disciplined PM standpoint, customer willingness to pay and operator review tolerance remain explicit hypotheses to be validated through customer discovery."*

---

## Slide 3: The Problem — The Three Evidence Failure Modes

### Headline
**Anatomy of Dispute Evidence Failure in High-Ticket E-Commerce**

### Key Message
Dispute losses are rarely caused by a lack of data; they are caused by evidentiary mismatch, fatal internal contradictions, and organizational exhaustion.

### Slide Content (3-Column Taxonomy)
1. **Failure Mode A: Missing Evidence (Absent Nexus Proofs)**
   - In Reason Code 4853 (Merchandise) claims, submitting tracking without attaching the store's **published return policy** or documented customer remedy results in automatic issuer rejection.
   - Missing timestamped checkout terms acceptance; absent carrier signature on orders $\ge \$150$.
2. **Failure Mode B: Contradictory Evidence (Self-Defeating Rebuttals)**
   - Autopilot bots blindly submit carrier tracking showing a package is still **"In Transit"** (severe weather delay) or orders delivered to a freight forwarder with failed AVS, guaranteeing loss while wasting administrative fees.
   - Support transcript contains an explicit cardholder statement of card theft.
3. **Failure Mode C: Irrelevant Evidence (Scheme Reason Code Mismatch)**
   - Submitting checkout terms of service to defend an unauthorized fraud claim (Reason Code 4837).
   - Under card network rules, terms of sale cannot counter card theft; only 3DS tokens, AVS/CVC matches, and device IP establish liability shift.

### Documented Industry Baselines
- **LexisNexis [[S-05]]:** Every $1 of direct fraud costs US e-commerce merchants **$4.61 to $5.13** in total friction.
- **Riskified & Datos Insights [[S-15]]:** ~60% of merchants abandon 40%+ of chargebacks due to manual compilation labor.
- **Merchant Risk Council [[S-06]]:** Manual merchant win rate on fraud disputes averages **under 20%**.

### Speaker Notes (Timing: ~50 Seconds)
> *"When we inspect why merchants lose payment disputes, the data reveals three distinct failure modes:
> 
> First, missing evidence: for merchandise claims under Reason Code 4853, failing to attach a published warranty policy or proof of a replacement offer guarantees an issuer rejection.
> 
> Second, contradictory evidence: automated bots often pull the latest UPS scan and blindly file it, even when the tracking clearly states 'In Transit — Weather Delay'. Submitting that document is an immediate self-inflicted loss.
> 
> Third, irrelevant evidence: submitting return policies against a Reason Code 4837 fraud chargeback is useless because the cardholder claims they never authorized the purchase.
> 
> Because identifying these nuances manually takes 45 minutes across four separate tools, 60% of merchants abandon over 40% of their disputes. This operational breakdown is the exact friction ChargeDossier addresses."*

---

## Slide 4: Product Hypothesis — Pre-Flight Triage & Human Control

### Headline
**The Product Hypothesis: Pre-Flight Triage Outperforms 25% Autopilot Bots**

### Key Message
High-ticket e-commerce merchants require upfront evidence auditing, deterministic mathematical scoring, and human-in-the-loop review controls.

### Slide Content
- **The Core Product Hypothesis:**  
  > *"Direct-to-consumer merchants selling high-ticket physical goods ($150–$2,000+ AOV) will adopt an upfront, explainable review tool with human decision control at $49/mo in preference to a 25% contingency take-rate, provided evidence triage takes under 90 seconds."*
- **Economic Mechanics on a Single \$1,000 Dispute:**
  - *Autopilot Contingency Bot (Chargeflow):* Merchant pays a $250 fee upon recovery ($750 net). Blind submission risks filing fatal flaws on merchandise claims.
  - *ChargeDossier Copilot:* Flat utility SaaS ($49/month). Pre-flight audit surfaces missing return policy, elevates evidence score from 73 to 100, and recovers $1,000 ($951 net on 1 dispute $\rightarrow$ **+$201 net advantage**).
- **Why Deterministic Rules Beat Generative AI:**
  - Submitting fabricated or hallucinated statements to issuing banks risks card scheme fines and merchant account termination.
  - 100% mathematical auditability ensures every point deducted or awarded references published network rules.
  - Early rejection of unwinnable claims saves operator labor and protects acquiring portfolio health.

### Speaker Notes (Timing: ~45 Seconds)
> *"This led to my core product hypothesis: For merchants selling $150 to $2,000 goods, upfront review triage is vastly superior to a 25% contingency bot.
> 
> On a single $1,000 dispute, a 25% contingency cut takes $250. With ChargeDossier at a flat $49 a month, the merchant keeps $951 net—a $201 advantage on just one case.
> 
> More importantly, ChargeDossier rejects generative AI wrappers. In payments representment, hallucinating legal citations or customer claims can get a merchant banned from acquiring networks. We use a 100% deterministic rules engine: mathematically transparent, explainable, and verifiable."*

---

## Slide 5: Product Workflow — The 7-Step Copilot Journey

### Headline
**The 7-Step Evidence Auditing & Dossier Lifecycle**

### Key Message
A structured, explainable review pipeline reducing evidence assembly and auditing time from 45 minutes to under 90 seconds.

### Slide Content (7-Step Pipeline)
1. **Ingest & Inspect:** 4-tab inspection pane displaying Order & Customer data, Gateway Payment Auth (AVS/CVC/3DS), Carrier Tracking (POD), and Policies & Transcripts.
2. **Deterministic Audit:** One-click evaluation against 5 heuristic rule categories modeled on Mastercard 4837/4853 standards.
3. **Flag Contradictions:** Automated checks detect fatal contradictions: package still in transit, destination address mismatch, or freight forwarder fraud patterns.
4. **Interactive Fix:** Actionable checklist allows the operator to attach missing warranty policies or support transcripts, elevating the score dynamically.
5. **Compile Dossier:** Compiles a Mastercom-compliant executive rebuttal letter and structured Exhibits A through E (<18 pages, <10MB layout constraints).
6. **Human Review Lock:** Explicit checkpoint where the operator **Approves** viable claims or **Rejects** unviable claims (early loss acceptance saves staff labor).
7. **Instant Demo Reset:** Restores baseline synthetic state for reproducible evaluations and recruiter testing.

### Speaker Notes (Timing: ~45 Seconds)
> *"Here is the 7-step workflow an operator experiences in ChargeDossier:
> 
> The operator selects a dispute and inspects customer data, gateway tokens, carrier tracking, and support chats across four clean tabs.
> 
> Clicking 'Run Quality Audit' evaluates the evidence against our five rule categories. The engine flags fatal contradictions—such as an address mismatch or in-transit status—and surfaces missing exhibits.
> 
> For fixable cases, the operator clicks 'Apply Remediation', attaching the missing return policy and dynamically elevating the score.
> 
> The copilot then compiles a Mastercom-modeled Second Presentment Dossier with structured Exhibits A through E. Finally, the operator exercises human judgment: approving the viable dossier or rejecting an unwinnable claim to accept the loss early and save labor."*

---

## Slide 6: System Architecture — Dual Execution & Zero Dependencies

### Headline
**Zero-Dependency Engineering & Dual Execution Architecture**

### Key Message
Engineered with native Node.js and standard browser web APIs, operating both as a local REST API and 100% in-browser on GitHub Pages.

### Slide Content (2-Column Architecture Grid)
1. **Implemented Components (Working Prototype):**
   - **Deterministic Rules Engine (`src/engine.js`):** Pure functional rule evaluation, mathematical deduction scoring, and tier classification. Zero external dependencies.
   - **State Machine (`src/state.js`):** Governs review lifecycle: `UNREVIEWED -> AUDITED -> (APPROVED | REJECTED)` with complete demo reset capabilities.
   - **Dossier Generator (`src/generator.js`):** Formats Mastercom-modeled Second Presentment rebuttal narratives and structured Exhibits A–E.
   - **Native HTTP Server (`server.js`):** Native Node.js HTTP server routing REST endpoints (`GET/POST /api/...`) and serving static assets.
   - **Standalone Client Controller (`app.js`):** Executes in-browser on GitHub Pages via ES modules, providing identical offline and cloud usability.
2. **Future Enterprise Integrations (Clearly Delineated):**
   - **Mastercard Mastercom API v6 Connector:** Acquirer integration complying with Mastercom Claim ID tracking, 10MB file caps, and 18-page limits [[S-01]].
   - **Payment Gateway APIs:** Programmatic evidence upload via Stripe REST API (`POST /v1/disputes/:id`) [[S-09]] and Shopify Payments webhooks [[S-10]].
   - **Carrier POD Webhooks:** Automated delivery status, GPS coordinates, and signature ingestion from FedEx and UPS APIs.
   - **Zendesk / Gorgias Support Ingestion:** OAuth ticket transcript extraction and dispute deflection logging.

### Speaker Notes (Timing: ~45 Seconds)
> *"On the engineering side, ChargeDossier is built with zero external npm dependencies. The entire stack uses native Node.js and standard modern web APIs.
> 
> We achieved dual execution: developers can run `npm start` to spin up a native Node.js REST API on port 3000, while recruiters and evaluators can open our live GitHub Pages URL where the entire deterministic state machine runs client-side inside the browser.
> 
> In this slide, I also clearly delineate what is implemented today versus our future production integrations: while the prototype generates structured draft dossiers, live production deployment would integrate directly with Stripe's dispute API and Mastercard's Mastercom API v6."*

---

## Slide 7: Decision Framework — Heuristic Rules & Scoring Math

### Headline
**The Deterministic Decision Framework: Exact Weights & Penalties**

### Key Message
Strict mathematical formulation derived from `src/engine.js`: Gross Score minus Contradiction Penalties equals Net Quality Score.

### Slide Content (3-Column Decision Formula)
1. **Gross Scoring Categories (Max 100 Points):**
   - **Payment & Identity (30 pts):** AVS full match (12 pts, partial = 6 pts), CVC match (8 pts), 3D Secure authentication (10 pts, attempted = 5 pts).
   - **Carrier POD & Tracking (35 pts):** Verified delivered status (15 pts), destination match (10 pts), cardholder signature on orders $\ge \$150$ (10 pts).
   - **Policies & Disclosures (15 pts):** Terms accepted at checkout (8 pts), published return policy attached (7 pts).
   - **First-Party Trust & Behavior (20 pts):** Prior orders & account tenure (10 pts), customer communication records/remedy logs (10 pts).
2. **Contradiction Deductions (Fatal Flaw Penalties):**
   - **Delivery Destination Mismatch:** Package delivered to different address $\rightarrow$ **-20 pts** (Critical)
   - **Third-Party Signature:** Signed by freight forwarder, not cardholder $\rightarrow$ **-10 pts** (Warning)
   - **Explicit Fraud Affirmation:** Cardholder stated card was stolen $\rightarrow$ **-25 pts** (Critical)
   - **Defect Without Remedy:** Defect reported without repair offer $\rightarrow$ **-10 pts** (Warning)
   - **High-Risk State Mismatch:** Billing state $\ne$ Shipping with failed AVS ('N') $\rightarrow$ **-20 pts** (Critical)
3. **Decision Tiers & Mathematical Bounds:**
   $$\text{Net Score} = \max\left(0, \min\left(100, \text{Gross Score} - \sum \text{Penalties}\right)\right)$$
   - **`TIER_A` ($\ge 80$, 0 contradictions, 0 missing critical):** High Quality $\rightarrow$ `APPROVE_FOR_PRESENTMENT`
   - **`TIER_B` ($60–79$, no critical contradictions):** Marginal / Fixable Gaps $\rightarrow$ `REVIEW_AND_ATTACH_EVIDENCE`
   - **`TIER_C` ($< 60$ or critical contradictions):** Deficient / High Risk $\rightarrow$ `REJECT_AND_ACCEPT_LOSS`

### Speaker Notes (Timing: ~50 Seconds)
> *"Slide 7 reveals the exact mathematics of our rules engine from `src/engine.js`.
> 
> The engine assigns up to 100 gross points across four pillars: Payment Auth (30), Carrier Tracking (35), Store Policies (15), and First-Party Trust vectors (20).
> 
> However, a strong gross score can be completely undone by fatal contradictions. If tracking shows a package was delivered to an address different from the order, we deduct 20 points. If an order shows a Texas billing address, a Florida shipping address, and failed AVS, that freight-forwarder fraud pattern triggers a 20-point penalty.
> 
> Net score equals gross score minus penalties, bounded between 0 and 100. Cases scoring 80 and above with zero contradictions qualify for Tier A. Cases below 60 or containing critical contradictions fall into Tier C, prompting the operator to reject and accept the loss early."*

---

## Slide 8: Synthetic Case Evaluation — The 4 Benchmark Scenarios

### Headline
**Synthetic Benchmark Scenarios & Exact Score Outputs**

### Key Message
Rigorous verification across 4 realistic high-ticket dispute edge cases modeling Mastercard Reason Codes 4837 (Fraud) and 4853 (Merchandise).

### Slide Content (Exact Evaluation Table)
| Case ID | Product & Amount | Reason Code | Evidentiary Condition | Initial Score | Remediation | Final Decision |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **DSP-1049** | **AeroSound Pro ANC Headphones**<br>\$349.00 USD | Mastercard 4837<br>(Fraud) | Full AVS (`Y`), CVC (`M`), 3DS Auth, FedEx signature slip (`E. VANCE`), Zendesk usage confirmed. | **100 / 100**<br>`TIER_A` | None Needed | **Approved**<br>(Locked for submission) |
| **DSP-2081** | **BaristaCraft Burr Grinder**<br>\$295.00 USD | Mastercard 4853<br>(Not Received) | Carrier tracking confirms *"In Transit — Weather Delay in Spokane"*. Unsigned package. | **22 / 100**<br>`TIER_C` | Unviable | **Rejected (Loss Accepted)**<br>(Saves operator labor) |
| **DSP-3312** | **ErgoLift Pro Standing Desk**<br>\$850.00 USD | Mastercard 4837<br>(Fraud) | TX billing vs. FL shipping. Failed AVS (`N`), 3DS failed, signed by forwarder, customer fraud call. | **2 / 100**<br>`TIER_C` | Unviable | **Rejected (Loss Accepted)**<br>(3 critical contradictions) |
| **DSP-4190** | **Modular Platform Bed Frame**<br>\$1,150.00 USD | Mastercard 4853<br>(Defective) | Delivered with signature. Published return policy missing and defect reported without remedy log. | **73 / 100**<br>`TIER_B` | **Attached Policy & Remedy**<br>(+27 Pts Recalculated) | **Elevated to 100 (Tier A)**<br>(Approved after fix) |

### Speaker Notes (Timing: ~55 Seconds)
> *"Here are the exact outputs from our four synthetic benchmark scenarios:
> 
> Case DSP-1049 is our happy path: a $349 headphone order with full AVS, CVC, 3DS authentication, signed FedEx delivery slip, and a confirmed Zendesk pairing inquiry. The engine awards it 100 out of 100—Tier A—recommending immediate approval.
> 
> Case DSP-2081 is a $295 coffee grinder claimed as not received. Carrier tracking reveals it is still in transit due to a blizzard in Spokane. The engine flags this fatal flaw, scores it at 22 out of 100—Tier C—and prompts the operator to reject the dispute and accept the loss, avoiding staff time on an unviable submission.
> 
> Case DSP-3312 is an $850 standing desk shipped to a Florida freight forwarder with failed AVS and an explicit cardholder fraud report. It scores 2 out of 100 and is rejected.
> 
> Finally, Case DSP-4190 is an $1,150 bed frame claimed as defective. It initially scores 73—Tier B—because the published warranty policy was missing. When the operator attaches the policy and support remedy, the engine recalculates the score in real time to 100, elevating it to Tier A for approval."*

---

## Slide 9: Testing and Reliability — 24 Passing Automated Tests

### Headline
**24 Passing Automated Tests & In-Memory Test Harness**

### Key Message
Reproducible automated test suite validating rules engine logic, HTTP REST routing, and end-to-end lifecycle workflows in ~312ms.

### Slide Content (3-Suite Breakdown)
1. **Suite 1: Rules Engine Unit Tests (`tests/engine.test.js` &middot; 7 Tests):**
   - Validates Tier A qualification on high-quality fraud claims (DSP-1049 &ge; 85).
   - Validates Tier C qualification on missing delivery proof (DSP-2081).
   - Validates severe contradiction penalty deductions on freight forwarder fraud (DSP-3312 &le; 40).
   - Validates Tier B qualification and actionable fixes on defective merchandise (DSP-4190).
   - Defensive null/undefined input handling.
   - Score boundary validation: 80 qualifies for Tier A, 79 for Tier B, 59 for Tier C.
   - Defensive resilience: partial payloads with missing nested objects do not throw errors.
2. **Suite 2: HTTP Server Integration Tests (`tests/server.test.js` &middot; 13 Tests):**
   - Simulated in-memory HTTP stream requests (zero network port binding leaks).
   - Validates `GET /api/disputes`, `GET /api/disputes/:id`, `POST /audit`, `POST /dossier`, `POST /approve`, `POST /reject`, `POST /fix`, and `POST /reset`.
   - Validates OPTIONS CORS preflight (204 No Content), static HTML/JS serving, and 404 handling.
3. **Suite 3: End-to-End Workflow Tests (`tests/workflow.test.js` &middot; 4 Tests):**
   - Complete Happy Path (Inspect &rarr; Audit &rarr; Generate Dossier &rarr; Approve).
   - Deficient Dispute Rejection (DSP-2081 rejection state transition).
   - Interactive Gap Remediation (DSP-4190 policy fix elevates score from 73 to 100 &rarr; approve).
   - Demo Reset functionality (all disputes restored to UNREVIEWED state).

### Speaker Notes (Timing: ~45 Seconds)
> *"Reliability is verified through 24 automated tests executed across three suites using Node.js's native test runner.
> 
> Suite 1 tests the rules engine, validating our score boundaries, penalty deductions, and defensive null handling.
> 
> Suite 2 tests our REST API server using simulated in-memory HTTP streams, verifying every endpoint without leaking open network ports.
> 
> Suite 3 tests the end-to-end user journeys: happy path approval, explicit rejection, interactive gap remediation, and demo reset.
> 
> All 24 tests execute and pass in approximately 312 milliseconds. Furthermore, we distinguish automated test results from live browser testing, which was verified across Edge, Chrome, and GitHub Pages."*

---

## Slide 10: Research and Market Context — Traceable Literature

### Headline
**Primary Network Specs & Empirical Industry Literature**

### Key Message
Grounding product architecture in verified payment scheme specifications, statutory regulations, and empirical fraud benchmarks.

### Slide Content (4-Category Source Matrix)
1. **Card Scheme Operating Rules:**
   - **Mastercard Mastercom API v6 Developer Documentation [[S-01]]:** Defines strict dispute constraints: <10MB file limit, <18 pages aggregate, Claim ID tracking.
   - **Mastercard First-Party Trust Program [[S-02]]:** Establishes Reason Code 5002 (First-Party Trust Reject) to deflect invalid 4837 claims using delivery GPS, IP, and account tenure.
2. **Regulatory & Statutory Analysis:**
   - **CFPB Section 1033 Final Rule [[S-16]]:** Confirms the statutory exclusion of commercial/business bank accounts from open banking mandates.
   - *Strategic Call:* Directed project focus to payment dispute data where merchants hold direct legal standing.
3. **Empirical Industry Benchmarks:**
   - **Merchant Risk Council & Cybersource [[S-06]]:** Manual fraud chargeback win rates average below 20%.
   - **Riskified & Datos Insights [[S-15]]:** ~60% of merchants abandon 40%+ disputes due to manual labor.
   - **LexisNexis True Cost of Fraud [[S-05]]:** Every $1 of fraud costs merchants $4.61–$5.13 in total overhead.
4. **Commercial Pricing Tensions:**
   - **Chargeflow Advertised Pricing [[S-11]]:** 25% contingency take-rate on recovered funds creates severe fee drag on high-ticket goods ($250 on $1,000).
   - **Chargebacks911 [[S-13]]:** $1,500+/mo enterprise retainers exclude small and mid-market D2C merchants.

### Speaker Notes (Timing: ~45 Seconds)
> *"Slide 10 highlights the research backing this project, cataloged in our 25-source register.
> 
> First, card scheme rules: we modeled our dossier layout on Mastercard's Mastercom API v6 constraints—specifically the 18-page and 10MB limits—and integrated Mastercard's First-Party Trust Reason Code 5002 data vectors.
> 
> Second, regulatory analysis: examining the statutory text of CFPB Section 1033 revealed that commercial accounts are excluded from consumer open banking mandates. That insight steered us away from unviable open banking underwriting and directly into payment disputes.
> 
> And third, empirical trade data: research from the Merchant Risk Council, Riskified, and LexisNexis confirmed that dispute abandonment is an industry-wide crisis driven by manual compilation exhaustion."*

---

## Slide 11: Limitations & The Phase 2B Validation Roadmap

### Headline
**Epistemic Discipline: What is Proven vs. What Remains a Hypothesis**

### Key Message
A functioning prototype proves technical feasibility, not customer demand. Disciplined product management requires structured empirical discovery gates.

### Slide Content
- **Honest Prototype Limitations (Explicit Epistemic Boundaries):**
  - **Customer Willingness to Pay ($49/mo) is Unproven:** While merchants object to 25% contingency take-rates, their behavioral preference might still favor 'no-win, no-fee' models over recurring software fees.
  - **Operator Tolerance for Review Friction:** Whether busy operators will spend 60–90 seconds reviewing claims vs. demanding 100% hands-off automation remains an unvalidated hypothesis.
  - **Zero Customer Validation Interviews Conducted:** Outreach was deliberately paused awaiting explicit authorization; no live merchant interviews have occurred.
  - **Synthetic Sandbox Only:** Operates on synthetic benchmark data; no live payment gateway or card scheme API connections exist.
- **Structured 3-Phase Validation Roadmap (60-Day Execution):**
  - **Phase 1 — Discovery Interviews ($n=8$):** Execute semi-structured interviews with verified operations/risk leads at US high-ticket D2C merchants ($150–$1,500 AOV) using our documented prospecting kit.
  - **Phase 2 — Blinded Shadow Evaluation:** Ingest 10 redacted historical disputes from 3 pilot merchants. Compare ChargeDossier shadow drafts against previous manual/bot submissions.
  - **Phase 3 — Open Benchmark Dataset:** Release an open, anonymized dispute evidence dataset to advance academic and industrial research on explainable dispute representment.

### Speaker Notes (Timing: ~50 Seconds)
> *"As a product manager, I place the highest value on epistemic honesty: clearly separating verified software behavior from unvalidated customer demand.
> 
> ChargeDossier proves that deterministic rules and Mastercom-modeled exhibits can be compiled in milliseconds. It does NOT prove commercial product-market fit.
> 
> Whether merchants are truly willing to pay $49 a month instead of a contingency cut, and whether operators will actually spend 90 seconds reviewing cases, are working hypotheses. Zero live customer interviews have occurred yet, because outreach was paused awaiting authorization.
> 
> My immediate next step is a structured Phase 2B discovery sprint with eight verified merchants. If operators confirm manual review friction and prefer a flat SaaS copilot, we proceed to pilot scoping. If they demand 100% hands-off automation regardless of fees, we pivot or kill the project."*

---

## Slide 12: Conclusion & Public Deliverables

### Headline
**ChargeDossier: Verified Artifacts & APM Role Alignment**

### Key Message
Demonstrating general Associate Product Manager excellence: problem discovery, user needs, prioritization, workflow design, metrics, technical trade-offs, and product strategy across payment networks.

### Slide Content
- **General APM Competency Alignment (Mastercard &middot; Visa &middot; Razorpay &middot; Fintechs):**
  - **Problem Discovery & Sizing:** Quantified merchant friction via empirical industry data ($4.61–$5.13 fraud cost multiplier [S-05], 60% abandonment [S-15]) and identified high-ticket AOV contingency margin drag.
  - **User Needs & Hypothesis Formulation:** Defined narrow ICP ($150–$1,500 AOV D2C brands), formulated the flat $49 SaaS vs. 25% contingency trade-off, and established clear falsification criteria.
  - **Prioritization & Technical Trade-offs:** Chose deterministic heuristic rules over generative LLMs to eliminate hallucination liability in adversarial compliance; built zero-dependency architecture executing in <1ms.
  - **Workflow Design & Metrics:** Designed human-in-the-loop triage balancing automated exhibit assembly with strategic operator approval; established Net Merchant Recovery as primary north star.
  - **Product Strategy Across Payment Networks:** Operationalized scheme rules (Mastercard Mastercom/FPT, Visa CE3.0, gateway dispute fees) balancing issuer, acquirer, and merchant incentives.
- **Verified Public Deliverables:**
  - **Live Interactive Demo:** [https://pragymathur12-king.github.io/chargedossier/](https://pragymathur12-king.github.io/chargedossier/)
  - **Dedicated Portfolio Case Study:** [https://pragymathur12-king.github.io/aura-portfolio/chargedossier.html](https://pragymathur12-king.github.io/aura-portfolio/chargedossier.html)
  - **Portfolio Projects Showcase:** [https://pragymathur12-king.github.io/aura-portfolio/portfolio.html](https://pragymathur12-king.github.io/aura-portfolio/portfolio.html)
  - **GitHub Source Code:** [https://github.com/pragymathur12-king/chargedossier](https://github.com/pragymathur12-king/chargedossier)
- **Mandatory Disclosure:** *"Independent academic & portfolio project. Not affiliated with, sponsored by, or endorsed by Mastercard International Incorporated, Visa Inc., Stripe, or Shopify."*

### Speaker Notes (Timing: ~45 Seconds)
> *"To conclude, ChargeDossier reflects how I operate as a general Associate Product Manager in fintech:
> 
> First, in **problem discovery and user empathy**, I grounded the project in real industry friction—quantifying the $4.61 cost multiplier and focusing on high-ticket merchants where 25% contingency take-rates destroy operating margins.
> 
> Second, in **prioritization and technical trade-offs**, I made the conscious call to reject black-box generative AI in favor of deterministic heuristics to eliminate hallucination risk in adversarial compliance workflows.
> 
> Third, in **product strategy and network dynamics**, I demonstrated domain fluency navigating the complex incentives between merchants, acquirers, payment gateways like Razorpay and Stripe, and card schemes like Mastercard and Visa.
> 
> All deliverables—the live demo, portfolio case study, GitHub repository, and presentation deck—are verified, live, and publicly accessible. Thank you, and I look forward to your questions."*
