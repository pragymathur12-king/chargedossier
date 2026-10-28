# ChargeDossier: 5-Minute Product Manager Interview Presentation

**Project:** Mastercard Opportunity Lab — ChargeDossier  
**Candidate:** Integrated MBA Candidate (Class of 2027)  
**Target Roles:** Mastercard Product Management &middot; Open Finance Strategy & Commercialization &middot; Data Analytics & Agentic AI  
**Format:** 6-Slide Executive Presentation Outline with Speaker Notes (~5 Minutes Total)  
**Disclaimer:** *Independent academic product management case study and prototype. Not affiliated with, endorsed by, or integrated with Mastercard or any live payment network.*

---

## Slide 1: The Context & Merchant Problem

### Headline
**The Hidden Margin Drag: Why High-Ticket E-Commerce Disputes Remain Broken**

### Key Message
US merchants lose over five dollars in total organizational friction for every dollar lost to payment disputes, driven by fragmented SaaS data and high dispute abandonment.

### Recommended Slide Content
* **Market Friction [[S-05]]:** Every $1 of direct fraud loss costs US retail and e-commerce merchants **$4.61 to $5.13** when factoring in lost inventory, non-refundable processor fees, and investigation labor.
* **Operational Silos:** To contest a single payment dispute, an operator must extract records across 3 to 5 disconnected platforms (Shopify order data, Stripe payment tokens, ShipStation carrier tracking, Zendesk chat logs).
* **The Abandonment Penalty [[S-15]]:** Manual compilation takes **30 to 60 minutes per dispute**. As a result, **~60% of merchants abandon at least 40% of their chargebacks**, writing off winnable revenue.
* **The Polarized Market:** Merchants are forced to choose between manual screenshot compilation (sub-20% win rates [[S-06]]) and automated bots that take a heavy **25% contingency fee** on recovered revenue [[S-11]].

### Speaker Notes (Timing: ~50 Seconds)
> *"Hello everyone. Today I'm excited to present **ChargeDossier**, an evidence-quality review copilot I designed and prototyped for e-commerce payment disputes.*
> 
> *According to LexisNexis research, every single dollar lost to payment fraud costs US e-commerce merchants between \$4.61 and \$5.13 in total organizational overhead. Yet, despite being in 2026, assembling evidence to contest a chargeback remains painfully manual. An operator has to log into Shopify for customer info, Stripe for payment auth, ShipStation for carrier tracking, and Zendesk for customer chat logs.*
> 
> *Because manual compilation takes 45 minutes and manual win rates on fraud claims average under 20%, nearly 60% of merchants abandon at least 40% of their disputes. They simply write off legitimate revenue because the administrative cost of fighting exceeds the recovery value. This friction is where my investigation began."*

---

## Slide 2: The Target Customer & Market Tension

### Headline
**Targeting High-Ticket D2C Merchants: The 25% Contingency Dilemma**

### Key Message
For merchants selling physical goods between $150 and $1,500, a 25% contingency take-rate creates severe margin friction, while blind automation risks permanent losses on merchandise claims.

### Recommended Slide Content
* **Target ICP:** US-based direct-to-consumer (D2C) e-commerce brands selling physical goods with **$150–$1,500 Average Order Value (AOV)** (audio equipment, specialty appliances, ergonomic furniture).
* **Scale:** $1M to $10M annual GMV, experiencing 15 to 80 disputes per month.
* **The High-Ticket Dilemma:**
  * On a $25 t-shirt, automated submission on autopilot is rational; a 25% fee is only $6.25.
  * On an $850 standing desk or a $1,150 modular bed frame, a 25% contingency take-rate deducts **$212 to $287 per recovered dispute**—a heavy tax on thin retail margins.
* **The Contextual Evidence Gap:** Automated bots submit standard tracking on autopilot, but fail on complex **Reason Code 4853 (Defective Merchandise)** claims where winning requires merchant-specific warranty policies, customer resolution transcripts, or proof of replacement parts offered.

### Speaker Notes (Timing: ~50 Seconds)
> *"To make this actionable, I narrowed the focus to a specific segment: US direct-to-consumer merchants selling high-ticket physical goods with average order values between \$150 and \$1,500. Think specialty kitchen gear, ergonomic furniture, and premium electronics.*
> 
> *Why this segment? Because high-ticket disputes create a sharp commercial tension. Leading automated vendors like Chargeflow operate on an advertised 25% contingency take-rate. If you're selling a \$20 phone case, paying 25% makes sense. But on a \$1,150 bed frame, a 25% cut is nearly \$290 on a single order—devastating for a merchant with 10% net margins.*
> 
> *Furthermore, for expensive merchandise claims under Mastercard Reason Code 4853, blind automation often submits basic delivery tracking without attaching the merchant's published return policy or support remedy chat logs. If that critical document is missing, the issuing bank rejects the rebuttal, causing a permanent financial loss."*

---

## Slide 3: The Solution Hypothesis & Architecture

### Headline
**ChargeDossier: A Deterministic Evidence Review Copilot**

### Key Message
ChargeDossier replaces 25% contingency bots and opaque LLMs with an explainable, deterministic evidence auditor and human approval checkpoint for $49/month.

### Recommended Slide Content
```
+----------------------------------------------------------------------------------------------------+
|                                    CHARGEDOSSIER PRODUCT ARCHITECTURE                              |
+------------------------------------+--------------------------------+------------------------------+
| 1. HARVEST & INSPECT               | 2. DETERMINISTIC HEURISTIC AUDIT| 3. STRUCTURED DRAFT & LOCK   |
| 4-Tab Evidence Pane: Order,        | 0–100 Evidence Quality Score   | Mastercom-modeled Exhibits   |
| Payment Auth, Carrier POD, Policy  | Categorized into Tier A, B, C; | Rebuttal Narrative Draft;    |
| & Transcripts (AVS/CVC/3DS/POD).   | catches fatal contradictions.  | Explicit Approve/Reject Lock.|
+------------------------------------+--------------------------------+------------------------------+
```
* **Deterministic Rules Engine:** 100% mathematical auditability modeled on Mastercard Reason Codes 4837 (Fraud) and 4853 (Merchandise). Zero generative AI hallucination risk.
* **Explainable Quality Tiers:** `TIER_A` (Approved for Presentment), `TIER_B` (Fixable Gaps), and `TIER_C` (Deficient / Contradictory Risk). *Internal heuristics only; not official scheme certifications.*
* **Interactive Remediation:** Surfaces missing exhibits (e.g., return policies) and allows real-time score re-evaluation.
* **Human-in-the-Loop Review Lock:** Explicit checkpoint where operators approve viable dossiers or accept loss on unviable cases.

### Speaker Notes (Timing: ~55 Seconds)
> *"This led to my product hypothesis: **ChargeDossier**, an evidence-quality review copilot designed around a predictable, flat \$49/month utility subscription.*
> 
> *Rather than a black-box bot or a generative AI wrapper that hallucinates legal claims, ChargeDossier is built on a 100% deterministic rules engine. It inspects merchant evidence across four categories: payment authentication tokens, carrier proof of delivery, customer account continuity, and policy terms.*
> 
> *The engine evaluates the package against internal heuristics modeled on Mastercard reason codes, outputting an explainable score from 0 to 100 and categorizing it into Tier A, B, or C.*
> 
> *If an item is missing—like a return policy on a defect claim—the copilot surfaces an interactive remediation drawer. Once verified, it compiles a structured Second Presentment Dossier formatted to Mastercom layout standards and gives the operator an explicit checkpoint to approve the draft or reject an unwinnable claim."*

---

## 4. Slide 4: Prototype Verification & Synthetic Benchmarks

### Headline
**Verifying the Engine: Four Synthetic Benchmark Scenarios**

### Key Message
Built with zero external dependencies, ChargeDossier is verified by 24 passing automated tests and manual browser execution across four high-ticket dispute edge cases.

### Recommended Slide Content
* **Scenario Verification Matrix:**
  * **DSP-1049 ($349 Headphones | Fraud 4837):** AVS (`Y`), CVC (`M`), 3DS auth, and cardholder signature receipt $\rightarrow$ **100/100 (`TIER_A`)**.
  * **DSP-2081 ($295 Grinder | Not Received 4853):** Carrier tracking is `"In Transit"` $\rightarrow$ Fatal non-delivery flaw caught $\rightarrow$ **22/100 (`TIER_C`)** $\rightarrow$ Rejection accepts loss early.
  * **DSP-3312 ($850 Desk | Fraud 4837):** TX billing vs FL freight forwarder, failed AVS, cardholder fraud claim $\rightarrow$ **2/100 (`TIER_C`)** $\rightarrow$ Contradictions flagged.
  * **DSP-4190 ($1,150 Bed | Defect 4853):** Delivered with signature, but missing return policy $\rightarrow$ **73/100 (`TIER_B`)** $\rightarrow$ Interactive policy attachment dynamically recalculates score to **100/100 (`TIER_A`)**.
* **Zero-Dependency Architecture:** Native Node.js HTTP server and client controller. Runs via local server (`localhost:3000`), standalone browser mode, or live on GitHub Pages.
* **Test Harness:** 24 automated unit, integration, and workflow tests passing with 100% coverage in ~196 ms.

### Speaker Notes (Timing: ~55 Seconds)
> *"To validate the user journey, I engineered a functioning prototype and tested it against four synthetic benchmark scenarios representing high-ticket payment disputes:*
> 
> *In Case 1, our \$349 headphone order has full AVS, CVC, 3DS authentication, and a signed FedEx receipt. The engine awards it 100 out of 100—Tier A—recommending approval.*
> 
> *In Case 2, an item claimed as not received is still in transit due to weather. The engine flags this fatal flaw, scores it at 22 out of 100—Tier C—and recommends rejecting the dispute to save staff labor on an unviable submission.*
> 
> *Case 3 tests severe contradictions: an \$850 desk shipped to a freight forwarder with failed AVS and a reported stolen card. It scores 2 out of 100.*
> 
> *Finally, Case 4 is an \$1,150 bed frame with a claimed defective slat. It initially scores 73—Tier B—because the return policy wasn't attached. When the operator attaches the policy, the engine recalculates the score in real time to 100, elevating it to Tier A.*
> 
> *The entire codebase runs with zero external packages and is verified by 24 passing automated tests."*

---

## Slide 5: Epistemic Rigor & The Next Validation Experiment

### Headline
**Disciplined Product Management: What is Proven vs. What Remains a Hypothesis**

### Key Message
A working prototype proves technical feasibility, not customer demand. True product management requires rigorous epistemic boundaries and empirical discovery gates.

### Recommended Slide Content
```
+----------------------------------------------------------------------------------------------------+
|                                    EPISTEMIC BOUNDARY AUDIT                                        |
+------------------------------------+--------------------------------+------------------------------+
| VERIFIED PROTOTYPE BEHAVIOR        | EXTERNAL INDUSTRY FACTS        | UNVALIDATED PRODUCT HYPOTHESES|
| - 24 Automated Tests Passing (100%)| - LexisNexis $5.13 Multiplier  | - Willingness to Pay $49/mo  |
| - Zero external dependencies       | - CFPB 1033 Excludes SMBs      | - 90s Review Friction Demand |
| - Heuristic scores: 100, 22, 2, 73 | - Chargeflow 25% Contingency   | - Win-rate recovery uplift   |
| - Standalone dual-execution modes  | - Mastercom 10MB / 18p limit   | - 0 Customer Interviews Done |
+------------------------------------+--------------------------------+------------------------------+
```
* **Phase 2B Discovery Sprint:** 8 targeted discovery interviews with verified US high-ticket D2C merchants ($1M–$10M GMV; recruited via documented audit).
* **Quantitative Decision Gate:** If at least 3 of 5 operators confirm >20 min dispute assembly time and state preference for a review checkpoint over a 25% take-rate, proceed to pilot scoping. If not, pivot.

### Speaker Notes (Timing: ~50 Seconds)
> *"One of my core principles as a product manager is epistemic honesty: separating verified technical behavior from unvalidated customer demand.*
> 
> *A prototype running with 24 passing tests proves that deterministic rules and Mastercom-modeled exhibits can be generated in milliseconds. It does NOT prove product-market fit.*
> 
> *Whether merchants are truly willing to pay \$49 a month instead of a 'no-win, no-fee' contingency, and whether operators will actually spend 90 seconds reviewing cases, are working hypotheses. Zero live customer interviews have occurred yet, because outreach is paused awaiting review.*
> 
> *My immediate next step is a structured Phase 2B discovery sprint with 5 to 8 verified US merchants. If at least 3 of 5 merchants confirm manual review friction and prefer a flat SaaS copilot over a 25% take-rate, we proceed. If they demand 100% hands-off automation regardless of fees, we pivot or kill the project."*

---

## Slide 6: Product Retrospective & Mastercard Role Alignment

### Headline
**Transferable Fintech Acumen: Connecting Merchant Operations to Network Standards**

### Key Message
ChargeDossier demonstrates deep operational fluency across card scheme rules, regulatory boundaries, and explainable AI design.

### Recommended Slide Content
* **1. Mastercard Product Management (Dispute & Processing Technology):**
  * Mastercom v6 operational fluency (<10MB aggregate, <18 pages, structured exhibits).
  * Models acquirer economic trade-offs: early rejection of unwinnable disputes avoids operator labor and protects acquiring portfolio health.
* **2. Open Finance Strategy & Commercialization:**
  * Analyzed the statutory text of CFPB Section 1033, recognized the explicit exclusion of commercial accounts, and redirected discovery to merchant dispute records where merchants have legal standing.
  * Integrated First-Party Trust (Reason Code 5002) data vectors (device IP, carrier scans, account tenure).
* **3. Data Analytics & Agentic AI:**
  * Replaced opaque, hallucination-prone LLM wrappers with an explainable, deterministic rules engine providing 100% mathematical auditability.
  * Designed an agentic human-in-the-loop copilot architecture: automation gathers data; humans retain strategic judgment.

### Speaker Notes (Timing: ~50 Seconds)
> *"To conclude, this project directly reflects how I approach product management in payments and fintech:*
> 
> *First, in dispute technology, understanding card network mechanics—like Mastercom's 18-page limits and Reason Code 4837 vs 4853 requirements—is essential to designing merchant workflows that issuers actually respect.*
> 
> *Second, in Open Finance, examining primary regulatory text—like the CFPB Section 1033 exclusion of commercial bank accounts—prevented us from wasting months chasing unviable open banking APIs.*
> 
> *And third, in Data Analytics and AI, choosing deterministic mathematics over generative LLMs ensured 100% explainability, auditability, and zero hallucination risk.*
> 
> *I look forward to bringing this disciplined, evidence-backed approach to product strategy and innovation at Mastercard. Thank you, and I welcome your questions."*
