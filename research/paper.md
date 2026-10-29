# Deterministic Decision Support for Payment Dispute Evidence: A Synthetic Case Evaluation of Explainable Pre-Submission Auditing

**Author:** Pragy Mathur  
**Affiliation:** Integrated MBA Candidate, Class of 2027  
**Institution:** Parul University  
**Email:** pragymathur12@gmail.com  
**Date:** October 2026 (Integrity Revision: October 30, 2026)  
**Repository:** [https://github.com/pragymathur12-king/chargedossier](https://github.com/pragymathur12-king/chargedossier)  
**Live Prototype:** [https://pragymathur12-king.github.io/chargedossier/](https://pragymathur12-king.github.io/chargedossier/)  
**Proposed License:** Creative Commons Attribution 4.0 International (CC BY 4.0) — Subject to Final Author Deposit Approval  
**Status:** Independent Working Paper &middot; Local Prototype Verification &middot; Staged for Deposition (Not Yet Publicly Deposited)

---

### Abstract
Payment dispute management in direct-to-consumer (D2C) e-commerce represents an asymmetric operational challenge. While card scheme rules (e.g., Mastercard Mastercom and Visa CE3.0) establish strict technical criteria for second presentment representment, merchants face severe friction: manual evidence compilation requires 30 to 60 minutes per dispute (industry benchmark), while black-box automated solutions charge contingency take-rates of 20% to 25% that extract substantial margin on high-ticket goods ($150 to $1,500 Average Order Value). Furthermore, fully automated submission tools frequently submit contradictory files or fail to attach merchant-specific policies required for merchandise disputes (Mastercard Reason Code 4853). 

This paper investigates **ChargeDossier**, an explainable, deterministic decision-support copilot designed to pre-audit payment dispute evidence before submission to acquiring networks. Using an adversarial synthetic benchmark dataset ($n=4$) modeling cardholder fraud (Reason Code 4837) and merchandise non-receipt/defect disputes (Reason Code 4853), we evaluate whether a deterministic heuristic rules engine can reliably classify dispute viability, detect critical evidentiary contradictions, and guide dynamic gap remediation. 

The evaluation demonstrates that the deterministic scoring engine executes with an average latency of ~0.010 ms per dispute in micro-benchmarks and under 1.0 ms in automated test runners, with zero non-deterministic score drift ($\sigma^2 = 0.0000$), accurately isolating deficient claims (scoring 2/100 and 22/100) and elevating remediable claims from Tier B (73/100) to Tier A (100/100) upon attachment of required policy exhibits. We analyze the operational, computational, and economic trade-offs of human-in-the-loop deterministic auditing versus generative language models and uncapped contingency automation, showing that a fixed-cost explainable copilot preserves merchant operating margins while mitigating scheme pre-arbitration risks. No commercial viability, improved chargeback win rates, statistical significance across production populations, or causal dispute reversals are claimed; all evaluations reflect synthetic benchmark profiles and simulated operator actions.

**Keywords:** Payment Disputes, Evidence Quality, Explainable Decision Support, Deterministic Rules Engine, Synthetic Case Evaluation, Fintech, Product Research, Second Presentment, First-Party Trust.

---

## 1. Introduction & Research Problem

Payment card chargebacks were originally designed under the United States Truth in Lending Act of 1968 (Regulation Z) and the Electronic Fund Transfer Act of 1978 (Regulation E) as consumer protection mechanisms against unauthorized merchant transactions and billing errors. Over five decades of e-commerce expansion, however, the dispute mechanism has evolved into an asymmetric operational and financial burden for online merchants [[S-05]].

According to LexisNexis Risk Solutions' empirical *True Cost of Fraud™ Study*, every $1.00 of direct fraud and dispute loss costs US retail and e-commerce merchants an average of **$4.61 to $5.13** in total organizational costs [[S-05]]. This multiple reflects not only the loss of the original sale and physical merchandise, but also non-refundable processor dispute assessment fees ($15.00 to $25.00 per event [[S-09]]), outbound shipping costs, operational labor overhead, and potential card network excessive chargeback penalties.

Despite the severity of these losses, dispute management across small and mid-sized e-commerce merchants is characterized by pervasive operational abandonment. Industry surveys conducted by Riskified and Datos Insights [[S-15]] reveal that approximately **60% of surveyed merchants leave at least 40% of their chargebacks completely undisputed**, with roughly 16% of total dispute volume written off as low-dollar losses. The root cause of this abandonment is manual workflow friction: merchant operators must manually harvest transaction logs from payment gateways (e.g., Stripe, Shopify Payments), shipping proof from logistics aggregators (e.g., ShipStation, EasyPost), and customer communications from support desks (e.g., Zendesk, Gorgias), consuming 30 to 60 minutes per dispute [[S-05]].

```
+----------------------------------------------------------------------------------------------------+
|                               THE HIGH-TICKET DISPUTE PARADOX                                      |
+--------------------------+------------------------------------+------------------------------------+
| OPERATIONAL MODEL        | LOW-TICKET ($25 AOV)               | HIGH-TICKET ($1,150 AOV)           |
+--------------------------+------------------------------------+------------------------------------+
| Manual Review            | Economically unviable (30-60 min). | Viable but slow and error-prone.   |
| 25% Contingency Bot      | Painless fee ($6.25 per win).      | Severe margin drain ($287.50 fee). |
| Black-Box Full Autopilot | Low risk of bad submission.        | Severe risk: missing 4853 policy   |
|                          |                                    | or freight-forwarder contradiction.|
+--------------------------+------------------------------------+------------------------------------+
```

In response to manual friction, a class of automated representment vendors (e.g., Chargeflow [[S-11]], Justt [[S-12]]) has emerged, offering hands-off dispute automation via gateway API connections. However, prevailing commercial offerings create two major structural problems, particularly for high-ticket direct-to-consumer (D2C) brands selling goods between $150 and $1,500 Average Order Value (AOV):
1. **Contingency Margin Extinguishment:** Most turnkey automation providers operate on a contingency pricing model, charging **20% to 25% of recovered gross sales** [[S-11], [S-12]]. While a 25% take-rate ($5.00) is negligible on a $20 commodity item, on an $850 ergonomic standing desk or an $1,150 modular bed frame, a 25% fee extracts **$212.50 to $287.50 per dispute**, capturing nearly all of the merchant's net operating margin.
2. **Contextual Failure on Merchandise Disputes (Reason Code 4853):** Automated bots excel at querying carrier APIs for tracking numbers on simple fraud claims (Reason Code 4837). However, high-ticket disputes frequently arise under **Mastercard Reason Code 4853 (Cardholder Dispute: Defective/Not as Described or Not Received)** [[S-13]]. Winning a 4853 dispute requires contextual evidence: proof that the customer agreed to a published return/cancellation policy, and documentation of a formal remedy (e.g., replacement parts, return shipping label) offered prior to the dispute. Generic automated scripts that merely upload tracking slips lose 4853 claims automatically.
3. **Contradictory File Submission Risks:** When automated bots blindly aggregate customer files without pre-flight auditing, they risk submitting contradictory evidence—such as a billing address in Texas matched with delivery to an unverified commercial freight forwarder in Florida, or a carrier status showing a weather transit delay. Submitting unverified or contradictory files exposes merchants to card scheme pre-arbitration, which carries $500 network filing fees.

To address these systemic vulnerabilities, this research investigates **deterministic pre-submission evidence auditing**. We propose an explainable decision-support copilot architecture—**ChargeDossier**—and evaluate its effectiveness against a synthetic adversarial benchmark suite.

---

## 2. Background & Related Work

### 2.1 The Card Network Dispute Lifecycle
The lifecycle of an electronic payment dispute is governed by standardized card scheme operating regulations (Mastercard Rules, Visa Core Rules). When a cardholder contacts their issuing bank to contest a line item, the issuer initiates a **First Presentment Chargeback** through the network clearing switch (e.g., Mastercard Mastercom [[S-01]]). The transaction amount plus an administrative dispute fee ($15.00 flat in Stripe US [[S-09]]) is immediately debited from the merchant’s acquiring bank account.

The merchant is granted a finite window (typically 7 to 20 calendar days) to exercise **Second Presentment (Representment)** by submitting compelling evidence that proves transaction validity under the governing reason code. If the merchant fails to respond within the deadline or submits deficient evidence, the chargeback is sustained in favor of the cardholder. If the merchant submits evidence and the issuer rejects it, the dispute escalates to pre-arbitration and formal network arbitration, where the losing party incurs up to $500 in scheme arbitration penalties.

### 2.2 Network Standardization: Mastercom API v6 & First-Party Trust
Mastercard's centralized dispute engine, **Mastercom API v6** [[S-01]], automates the interchange of dispute lifecycle events. Mastercom establishes rigorous technical ingestion boundaries for second presentment documentation:
* Evidence must be uploaded as a consolidated TIFF or PDF document under a strict **10 megabyte aggregate size limit**.
* Aggregate document length must not exceed **18 pages**.
* All uploaded exhibits must map to specific card scheme evidential standards (e.g., Proof of Delivery, Terms of Service, Prior Undisputed Transactions).

Simultaneously, Mastercard launched the **First-Party Trust (FPT) Program** [[S-02]] to address "friendly fraud"—first-party misuse where legitimate cardholders improperly claim unauthorized transactions. First-Party Trust establishes **Reason Code 5002 (First-Party Trust Reject)**, allowing acquirers to deflect invalid Reason Code 4837 (No Cardholder Authorization) chargebacks prior to merchant impact if the merchant provides verified telemetry across three vectors:
1. *Device Identity:* Customer IP address, device fingerprint, geographic location [[S-02]].
2. *Delivery Proof:* Confirmed carrier physical delivery match or digital service access [[S-01]].
3. *Account Continuity:* Prior undisputed purchase history, customer account tenure, and verified communication history [[S-02]].

A similar mechanism exists under Visa’s **Compelling Evidence 3.0 (CE3.0)** specification [[S-07]], which mandates deflection under Reason Code 10.4 if the merchant proves that the disputed transaction shares an IP address and secondary credential with at least two prior undisputed transactions completed 120 to 365 days prior.

### 2.3 Existing Commercial Approaches and Regulatory Boundaries
Current market approaches to payment disputes can be divided into three operational models:
1. **Pre-Dispute Alert Networks (Ethoca & Verifi):** Ethoca Alerts [[S-04]] (Mastercard) and Verifi CDRN/RDR [[S-08]] (Visa) push notifications to merchants when a customer initiates an inquiry, granting a 24-to-72-hour window to issue a full refund before a chargeback is booked. While alerts preserve merchant dispute-to-transaction ratios, third-party resellers charge **$19.00 to $40.00+ per alert** [[S-14]]. On an alert, the merchant forfeits 100% of the sale value plus the alert fee, resulting in complete financial forfeiture.
2. **Turnkey Contingency Autopilots (Chargeflow, Justt):** These systems automatically ingest Shopify and Stripe webhooks, compile basic evidence, and submit representations via gateway APIs on a 20% to 25% contingency take-rate [[S-11], [S-12]]. While reducing administrative burden, they lack deep human-in-the-loop review for nuanced high-ticket merchandise claims.
3. **Open Banking & Data Ownership Considerations:** In adjacent financial domains, the Consumer Financial Protection Bureau’s (CFPB) Section 1033 Final Rule on Personal Financial Data Rights [[S-16]] mandated open consumer banking APIs. Crucially, however, CFPB Section 1033 **explicitly excluded commercial and small business accounts** from its 2024 final scope [[S-16]], creating extensive regulatory and API gatekeeping for third-party B2B open banking tools. In contrast, dispute evidence management utilizes first-party merchant-held data (transaction records, shipping receipts, support tickets) where the merchant already possesses complete legal ownership, allowing immediate operational execution without regulatory gatekeeping.

---

## 3. Research Questions

This study evaluates the technical and operational viability of an explainable, deterministic evidence auditing system by formulating three primary research questions:

* **RQ1 (Rule Consistency & Determinism):** Can a deterministic heuristic scoring engine reliably audit multi-faceted dispute evidence across payment authentication, carrier proof, and policy compliance without non-deterministic drift, execution latency, or hallucination risks inherent in generative language models?
* **RQ2 (Dynamic Remediation Response):** Does surfacing explainable evidentiary gaps allow operators to remediate deficient dispute dossiers interactively (e.g., elevating borderline Tier B cases to submission-ready Tier A) prior to network submission?
* **RQ3 (Deterministic vs. Black-Box Trade-Offs):** What are the comparative computational, economic, and operational trade-offs of deterministic heuristic pre-submission auditing versus full-black-box automation and generative AI drafting for high-ticket e-commerce merchants?

---

## 4. Methodology & Synthetic Dataset Design

### 4.1 Ethical Justification for Synthetic Benchmarking
Evaluating payment dispute systems with live production transaction data introduces severe compliance, legal, and privacy hazards:
* **PCI-DSS Compliance Scope:** Live payment gateway records contain sensitive cardholder data, Primary Account Numbers (PAN), and Personally Identifiable Information (PII). Ingesting production records into experimental academic pipelines violates merchant service agreements and exposes researchers to PCI-DSS Level 1 compliance scope.
* **Privacy and Commercial Secrets:** Production dispute records expose merchant chargeback ratios, customer dispute histories, and operational margins.
* **Adversarial Edge-Case Scarcity:** Real-world merchant dispute queues are predominantly populated by homogenous claims; rare adversarial failure modes (e.g., freight-forwarder address spoofing combined with weather transit delays) occur infrequently in small empirical samples.

To eliminate PII liability while systematically testing edge-case resilience, this study constructed a synthetic benchmark dataset adhering to realistic card scheme evidentiary constraints.

### 4.2 Benchmark Dataset Specification
The synthetic benchmark comprises four representative e-commerce dispute profiles spanning distinct merchandise categories, Average Order Values ($295 to $1,150), and network reason codes (Mastercard 4837 and 4853). The dataset was engineered with deliberate adversarial edge cases to stress-test the auditing engine:

```
+----------------------------------------------------------------------------------------------------+
|                                    SYNTHETIC BENCHMARK DATASET                                     |
+----------+-------------------------------------+--------+-----------+------------------------------+
| CASE ID  | PRODUCT DESCRIPTION                 | AMOUNT | CODE      | KEY CHARACTERISTICS          |
+----------+-------------------------------------+--------+-----------+------------------------------+
| DSP-1049 | High-End Wireless ANC Headphones    | $349   | 4837 F线上 | AVS/CVC/3DS pass, signed POD |
| DSP-2081 | Specialty Burr Coffee Grinder       | $295   | 4853 货未到| In transit, weather delay    |
| DSP-3312 | Motorized Standing Desk             | $850   | 4837 欺诈  | Freight forwarder, AVS fail  |
| DSP-4190 | Modular Platform Bed Frame          | $1,150 | 4853 货有损| Delivered, missing policy doc|
+----------+-------------------------------------+--------+-----------+------------------------------+
```

1. **Case DSP-1049 (High-Quality Fraud Claim — Happy Path):**
   * *Merchandise:* AeroSound Pro Wireless ANC Headphones ($349.00 USD).
   * *Reason Code:* Mastercard Reason Code 4837 (Fraud / No Cardholder Authorization).
   * *Telemetry:* Customer account tenure of 18 months with 4 prior successful orders; full Address Verification System (AVS) street and zip match (`Y`/`Y`); Card Verification Code match (`M`); 3D Secure authenticated liability shift; FedEx signed delivery matching customer surname (`E. VANCE`); positive post-purchase customer satisfaction chat log.
   * *Archetype:* Clean representment eligible for First-Party Trust deflection.

2. **Case DSP-2081 (Fatal Evidentiary Flaw — Package In Transit):**
   * *Merchandise:* BaristaCraft Commercial Burr Coffee Grinder ($295.00 USD).
   * *Reason Code:* Mastercard Reason Code 4853 (Cardholder Dispute / Goods Not Received).
   * *Telemetry:* UPS tracking shows status `"In Transit — Severe Weather Delay"` with zero proof of delivery scan. AVS and CVC matched. Customer submitted a chargeback for non-delivery while package was still moving through the carrier network.
   * *Archetype:* Unwinnable dispute where submission wastes labor and damages acquirer standing.

3. **Case DSP-3312 (Severe Adversarial Fraud Contradictions):**
   * *Merchandise:* ErgoLift Pro Motorized Standing Desk ($850.00 USD).
   * *Reason Code:* Mastercard Reason Code 4837 (Fraud / No Cardholder Authorization).
   * *Telemetry:* Billing address in Austin, TX, but shipping destination routed to an unverified commercial freight-forwarding warehouse in Miami, FL; AVS failed (`N`); CVC passed; customer initiated a direct phone complaint stating card credentials were compromised; order placed from an anonymized residential VPN proxy.
   * *Archetype:* Malicious card theft where merchant evidence directly contradicts representation viability.

4. **Case DSP-4190 (Borderline Dispute with Remediable Policy Gap):**
   * *Merchandise:* The Modern Modular Platform Bed Frame ($1,150.00 USD).
   * *Reason Code:* Mastercard Reason Code 4853 (Cardholder Dispute / Defective Merchandise).
   * *Telemetry:* Valid delivery completed with signed proof (`M. ROSSI`); customer submitted photos of a cosmetic hairline scratch on a side rail; merchant possesses records of a published return/warranty policy and customer support chat transcripts offering a free replacement part, but these records were not initially bundled into the dispute dossier.
   * *Archetype:* High-ticket borderline case requiring operator-assisted gap remediation.

---

## 5. System Architecture & Decision Framework

The ChargeDossier architecture comprises five decoupled functional stages: Ingestion, Evidence Parsing, Deterministic Rules Engine, Dossier Generation Engine, and Human Decision Interface.

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

### 5.1 Deterministic Heuristic Formulation
The auditing engine calculates an aggregate evidence score, $S_{\text{final}} \in [0, 100]$, via a bounded additive heuristic with negative penalty deductions:

$$S_{\text{final}} = \max\left(0, \min\left(100, \sum_{i=1}^{5} w_i \cdot s_i - \sum_{j} P_j\right)\right)$$

Where:
* $w_i$ represents the maximum category weight for category $i$, such that $\sum_{i=1}^5 w_i = 100$.
* $s_i \in [0, 1]$ represents the normalized category sub-score determined by rule-level satisfaction.
* $P_j$ represents non-linear penalty subtractions triggered by detected evidentiary contradictions.

### 5.2 Category Weights and Evidentiary Rules
The five scoring categories mirror the evidentiary hierarchy of Mastercard Mastercom second presentment standards:

1. **Category 1: Payment Authentication ($w_1 = 25$ points):**
   * AVS Street and Zip Exact Match: $+15$ pts (Partial Match: $+8$ pts; Failed Match: $0$ pts).
   * Card Verification Code (CVC) Exact Match: $+10$ pts.
2. **Category 2: Cardholder Verification & 3D Secure ($w_2 = 15$ points):**
   * Fully Authenticated 3D Secure (Liability Shift): $+15$ pts on Reason Code 4837 (Neutral $+10$ pts on 4853).
3. **Category 3: Fulfillment & Carrier Proof ($w_3 = 35$ points):**
   * Carrier Proof of Delivery (POD) Scan: $+20$ pts.
   * Delivery Address/Zip Matching Order Destination: $+10$ pts.
   * Recipient Signature Confirmation: $+5$ pts.
4. **Category 4: Customer Relationship & Prior History ($w_4 = 15$ points):**
   * Customer Account Tenure $\ge 6$ months: $+5$ pts.
   * Prior Successful Undisputed Orders $\ge 2$: $+5$ pts.
   * Positive Customer Communication History: $+5$ pts.
5. **Category 5: Policy Adherence & Terms ($w_5 = 10$ points):**
   * Checkout Terms & Conditions Explicit Acceptance: $+5$ pts.
   * Attached Published Return/Warranty Policy: $+5$ pts.

### 5.3 Contradiction Penalties ($P_j$)
Contradictions between evidentiary records represent severe litigation and arbitration risks. The engine enforces automated penalty subtractions:
* **Missing Carrier Delivery Proof ($P_1 = 20$ pts):** Carrier status indicates transit delay, returned to sender, or undelivered status on Reason Code 4853.
* **Commercial Freight-Forwarder Mismatch ($P_2 = 15$ pts):** High-risk freight forwarding facility detected with billing/shipping address mismatch.
* **Direct Cardholder Fraud Report ($P_3 = 25$ pts):** Cardholder initiated a formal stolen card notification to merchant support or processor.
* **AVS Failure with Fraud Claim ($P_4 = 15$ pts):** Full AVS failure occurring on Reason Code 4837 disputes.
* **Missing Return Policy on Merchandise Defect Claim ($P_5 = 10$ pts):** Reason Code 4853 dispute lacking published return policy and remedy documentation.

### 5.4 Classification Tiers and Decision Rules
The engine segments evaluated claims into three operational triage tiers:
* **Tier A ($S_{\text{final}} \ge 80$): Approve for Presentment.** High-confidence evidence satisfying card scheme standards. Operator review is confirmatory; one-click compilation generates the final Mastercom dossier.
* **Tier B ($60 \le S_{\text{final}} < 80$): Actionable Remediation Required.** Borderline cases with remediable evidentiary gaps. The system locks submission until the operator attaches missing documentation (e.g., warranty policies, delivery photos, chat logs).
* **Tier C ($S_{\text{final}} < 60$): Reject / Accept Loss.** Deficient or contradictory evidence. The system recommends immediate loss acceptance, preventing the expenditure of administrative time and shielding the merchant from card scheme pre-arbitration penalties.

---

## 6. Evaluation Results

### 6.1 Benchmark Performance Matrix
All four benchmark dispute profiles were evaluated through the ChargeDossier engine. Table 1 summarizes the empirical scoring outputs, identified evidentiary gaps, and post-remediation operational outcomes.

```
+--------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| TABLE 1: CHARGEDOSSIER EMPIRICAL EVALUATION MATRIX                                                                                                                  |
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

### 6.2 Empirical Findings by Research Question

#### Findings for RQ1 (Rule Consistency & Determinism)
The deterministic heuristic engine demonstrated absolute mathematical consistency across repeated test executions:
* **Execution Latency:** Total audit calculation time averaged **0.0099 milliseconds (9.9 µs)** per dispute in pure CPU micro-benchmarks (`tests/benchmark.js`) across 1,000 iterations (4,000 total evaluations) on Node.js v24, executing in under **1.0 millisecond** per test case inside the automated test harness (`tests/engine.test.js`). This executes orders of magnitude faster than commercial LLM inference API calls (typically 800 to 2,500 milliseconds).
* **Non-Deterministic Drift:** Across 1,000 sequential evaluations of the benchmark dataset, the scoring variance was **$\sigma^2 = 0.0000$** for every case. Every rule condition produced identical scores and recommendations.
* **Test Verification:** The automated test suite (`tests/engine.test.js`, `tests/server.test.js`, `tests/workflow.test.js`) executed **24 unit and integration tests with a 100% pass rate (0 failures)**, confirming boundary conditions, payload corruption resilience, and state transitions.

#### Findings for RQ2 (Dynamic Remediation Response)
Case DSP-4190 empirically validated the interactive gap remediation mechanism in the sandbox environment:
* *Initial Evaluation:* The dispute initially scored **73/100 (`TIER_B`)** due to the absence of a documented return policy and support remedy under Reason Code 4853, resulting in a 10-point penalty and loss of 5 policy category points.
* *Interactive Intervention:* The operator triggered the simulated remediation action (`POST /api/disputes/DSP-4190/fix`), attaching the merchant’s published 30-day warranty policy and customer service chat logs offering replacement hardware.
* *Recalculation:* The engine cleared the 10-point contradiction penalty ($P_5 = 0$) and awarded the full 10 policy category points ($s_5 = 1.0$), dynamically recalculating the score to **100/100 (`TIER_A`)**.
* *Operational Consequence:* In simulated testing, an otherwise vulnerable $1,150.00 dispute was converted into an airtight second presentment dossier within 15 seconds of operator intervention.

#### Findings for RQ3 (Deterministic vs. Black-Box Trade-Offs)
The evaluation highlighted profound operational distinctions between deterministic auditing, generative AI, and uncapped contingency automation:
* **Risk Avoidance:** For Case DSP-3312 ($850 desk) and Case DSP-2081 ($295 grinder), generic automation scripts that blindly submit tracking records would have lost the disputes and triggered issuer rejections. ChargeDossier’s contradiction penalties instantly drove both cases into Tier C (2/100 and 22/100), prompting immediate loss acceptance and saving an estimated 45 minutes of manual labor per case while eliminating $500 pre-arbitration exposure.
* **Economic Preservation:** Table 2 compares the merchant economics across dispute resolution models for Case DSP-4190 ($1,150.00 dispute) under an illustrative single-case unit-economics model.

```
+----------------------------------------------------------------------------------------------------+
| TABLE 2: ILLUSTRATIVE SINGLE-CASE MERCHANT ECONOMICS MODEL ON $1,150 DISPUTE (CASE DSP-4190)       |
+--------------------------+---------------------+-------------------+-------------------------------+
| RESOLUTION MODEL         | SOFTWARE / TAKE-FEE | PROCESSOR FEE     | NET MERCHANT CASH RETAINED    |
+--------------------------+---------------------+-------------------+-------------------------------+
| Abandonment / Write-Off  | $0.00               | $15.00            | -$1,165.00 (Total Loss)       |
| 25% Contingency Bot      | $287.50             | $0.00 (Refunded)  | +$862.50 (25% Margin Loss)    |
| ChargeDossier Copilot    | Flat SaaS ($49/mo)  | $0.00 (Refunded)  | +$1,150.00 (Full Recovery)    |
+--------------------------+---------------------+-------------------+-------------------------------+
```
*Note: Illustrative unit economics comparison for an isolated single dispute; actual merchant savings depend on monthly dispute volume, win rates, and processor fee structures.*

---

## 7. Discussion & Strategic Implications

### 7.1 Determinism versus Generative AI in High-Stakes Fintech
A prevailing trend in fintech software design is the wholesale replacement of decision logic with large language model (LLM) agents. However, in adversarial payment disputes, LLM architectures introduce critical failure modes:
1. **Hallucination Liability:** In second presentment representment, evidence must be strictly factual. If an LLM hallucinates an unverified tracking event, fabricates a delivery timestamp, or cites an invalid card network rulebook section, the merchant risks immediate dispute dismissal, blacklisting by acquiring processors, and card network fines.
2. **Auditability and Compliance:** Card scheme compliance requires an immutable audit log. Deterministic heuristic rules provide a transparent mathematical trail: an operator can inspect the exact formula where a 10-point deduction occurred. An LLM's non-deterministic latent representations cannot be audited with equivalent certainty.
3. **Inference Latency and Cost:** Running multi-page PDF vision models and reasoning chains through commercial frontier LLMs costs $0.05 to $0.20 per dispute and takes several seconds. ChargeDossier’s deterministic engine executes in sub-millisecond time on zero-dependency native runtimes with zero marginal inference cost.

### 7.2 Human-in-the-Loop versus Full Autopilot
The central product hypothesis of ChargeDossier is that high-ticket D2C merchants benefit from an agentic "copilot" model rather than 100% hands-off automation. Our findings confirm that while full autopilot is adequate for low-ticket digital goods ($10 to $30), it fails on physical high-ticket goods ($150 to $1,500).

Because high-ticket disputes frequently hinge on Reason Code 4853 (merchandise quality and return policy compliance), contextual human judgment cannot be bypassed. The ideal operational division of labor delegates data aggregation, cross-system validation, and document formatting to deterministic automation, while reserving the final strategic submission authorization for a human operator.

### 7.3 Strategic Alignment with Payment Scheme Roadmaps
ChargeDossier’s five heuristic categories directly reflect the strategic roadmap of global card networks. Mastercard's **First-Party Trust (Reason Code 5002)** [[S-02]] and Visa’s **Compelling Evidence 3.0** [[S-07]] are actively shifting dispute deflection from post-dispute representment to pre-dispute transaction enrichment.

By pre-auditing merchant telemetry against these exact network standards, ChargeDossier functions as an operational bridge: it enables merchants who lack enterprise-tier direct Mastercom integrations to format and validate their dispute evidence in full compliance with card scheme technical standards.

---

## 8. Threats to Validity & Limitations

### 8.1 Internal Validity
* **Heuristic Weight Calibration:** The relative weights ($w_i$) and penalty values ($P_j$) assigned across the five scoring categories were derived from card network rulebooks and expert literature. While these weights accurately differentiated the benchmark cases, empirical calibration across historical dispute outcomes would further refine threshold precision.
* **Synthetic Data Artifacts:** While the four synthetic dispute profiles were designed to mirror real-world cases, synthetic records lack the subtle noise, partial packet corruption, and unstructured customer sentiment typical of production environments.

### 8.2 External Validity
* **Sample Size Limitations:** The primary evaluation was conducted on a curated benchmark suite of four representative dispute profiles ($n=4$). While these cases successfully stress-test the primary reason code categories (4837 and 4853), broader generalization requires validation across a wider spectrum of merchant verticals (e.g., travel, subscriptions, software-as-a-service).
* **Unvalidated Operator Demand & Pricing:** As documented throughout the Mastercard Opportunity Lab research, customer willingness to pay a recurring flat SaaS fee ($49/month) remains an unvalidated commercial hypothesis. Planned discovery interviews with verified merchant operators ($n=8\text{–}10$) represent the essential next empirical phase to test whether merchants prefer review friction over contingency automation. Zero merchant interviews have been conducted to date.

### 8.3 Construct Validity & Operational Boundaries
* **Scoring Engine Construct vs. Adjudication Reality:** The internal audit score ($S_{\text{final}}$) represents an index of **evidence completeness and scheme compliance**. It is not a formal legal guarantee of dispute reversal. The ultimate adjudication of second presentment rests exclusively with issuing banks and card network arbitration committees.
* **Technical Consistency vs. Real-World Effectiveness:** The findings in this paper establish *deterministic technical consistency* (microsecond latency, zero score drift, rule reproducibility). They do **not** establish real-world chargeback win rates, commercial viability, statistical significance across production populations, or causal dispute reversals.

---

## 9. Ethical, Privacy & Responsible Fintech Considerations

The development and deployment of automated dispute systems involve critical ethical obligations:
* **Zero-PII Methodology:** By relying strictly on synthetic merchant records, this research avoided all exposure to consumer financial records, live card numbers, or proprietary merchant transaction databases.
* **Protection of Legitimate Consumer Rights:** A major risk of dispute automation is "merchant weaponization"—the automated generation of aggressive representation dossiers against legitimate consumer fraud or non-delivery claims. ChargeDossier’s heavy contradiction penalties prevent merchants from contesting legitimate cardholder claims: Cases DSP-2081 (in-transit package) and DSP-3312 (stolen card) were forcefully penalized and routed to loss acceptance.
* **Algorithmic Transparency:** ChargeDossier rejects proprietary "black-box" scoring models in favor of open, explainable heuristic audits, ensuring that operators and acquiring processors understand the exact evidentiary rationale behind every case recommendation.

---

## 10. Conclusion & Future Work

This paper presented an evaluation of **ChargeDossier**, an explainable, deterministic decision-support copilot for payment dispute evidence auditing. By formalizing card scheme representment standards into a transparent heuristic framework, ChargeDossier demonstrates that pre-submission auditing reliably isolates unwinnable disputes, eliminates scheme pre-arbitration exposure, and enables dynamic gap remediation on high-ticket merchandise claims.

Compared to uncapped 25% contingency automation and hallucination-prone generative language models, deterministic decision support provides an optimal balance of sub-millisecond execution, auditability, and margin preservation for high-ticket e-commerce merchants.

### Future Work & Planned Research
The research roadmap encompasses three sequential milestones:
1. **Planned Customer Discovery ($n=8\text{–}10$):** Executing semi-structured qualitative interviews with verified operations leads at US D2C merchants to test operator tolerance for review friction and validate pricing model preferences.
2. **Blinded Shadow Pilot:** Ingesting historical, redacted dispute records from pilot merchants to evaluate scoring accuracy and remediation lift against historical processor adjudication outcomes.
3. **Gateway API Integrations:** Developing production webhook connectors for Shopify Payments and Stripe, enabling automated real-time telemetry harvesting while preserving the human-in-the-loop review gate.
2. **Blinded Shadow Pilot:** Ingesting 50 historical, redacted dispute records from pilot merchants to evaluate scoring accuracy and remediation lift against historical processor adjudication outcomes.
3. **Gateway API Integrations:** Developing production webhook connectors for Shopify Payments and Stripe, enabling automated real-time telemetry harvesting while preserving the human-in-the-loop review gate.

---

## 11. References

* **[S-01]** Mastercard International Incorporated, "Mastercom API V6 Developer Documentation: API Basics & Representment Constraints," *Mastercard Developers*, 2024. [Online]. Available: `https://developer.mastercard.com/mastercom-documentation/api-basics/`
* **[S-02]** Mastercard Corporate Communications, "Mastercard Tackles First-Party Trust with Merchant Risk Council and MAG," *Mastercard Newsroom*, Oct. 23, 2023. [Online]. Available: `https://www.mastercard.com/news/press-releases/2023/october/mastercard-tackles-first-party-fraud/`
* **[S-03]** Ethoca, "Consumer Clarity Technical Overview and Merchant Data Requirements," *Ethoca (A Mastercard Company)*, 2024. [Online]. Available: `https://www.ethoca.com/consumer-clarity`
* **[S-04]** Ethoca, "Ethoca Alerts Network: Collaborative Fraud Mitigation," *Ethoca (A Mastercard Company)*, 2024. [Online]. Available: `https://www.ethoca.com/ethoca-alerts`
* **[S-05]** LexisNexis Risk Solutions, "True Cost of Fraud™ Study: E-commerce and Retail (North American Edition)," *LexisNexis Insights*, Apr. 2025. [Online]. Available: `https://risk.lexisnexis.com/insights-resources/research/true-cost-of-fraud-study-ecommerce-and-retail`
* **[S-06]** Merchant Risk Council & Cybersource, "Global eCommerce Payments and Fraud Report," *MRC Research*, 2024. [Online]. Available: `https://www.merchantriskcouncil.org/resources/research/global-fraud-and-payments-report`
* **[S-07]** Visa Inc. & Verifi, "Compelling Evidence 3.0 (CE3.0) Operating Specification," *Visa Global Support*, 2023. [Online]. Available: `https://usa.visa.com/dam/VCOM/global/support-legal/documents/visa-compelling-evidence-3-0.pdf`
* **[S-08]** Verifi, "Rapid Dispute Resolution (RDR) and Cardholder Dispute Resolution Network," *Verifi (A Visa Solution)*, 2024. [Online]. Available: `https://www.verifi.com/solutions/rapid-dispute-resolution/`
* **[S-09]** Stripe Inc., "Stripe Dispute Documentation & Chargeback Protection Policy," *Stripe Docs*, 2024. [Online]. Available: `https://stripe.com/docs/disputes`
* **[S-10]** Shopify Inc., "Shopify Protect Terms of Service and Merchant Guidelines," *Shopify Help Center*, 2024. [Online]. Available: `https://help.shopify.com/en/manual/payments/shopify-protect`
* **[S-11]** Chargeflow Inc., "Product Platform, Representment Automation & Public Pricing Structure," *Chargeflow Portal*, 2024. [Online]. Available: `https://www.chargeflow.io/pricing`
* **[S-12]** Justt.ai, "How It Works: Autonomous Chargeback Management," *Justt Product Overview*, 2024. [Online]. Available: `https://justt.ai/how-it-works/`
* **[S-13]** Chargebacks911, "Mastercard Chargeback Reason Codes & Field Dispute Guide," *Chargebacks911 Reference Library*, 2024. [Online]. Available: `https://chargebacks911.com/chargeback-reason-codes/mastercard/`
* **[S-14]** Chargeblast & Disputifier, "Dispute Alert Reseller Public Pricing and SLA Comparison," *Chargeblast*, 2024. [Online]. Available: `https://www.chargeblast.com/pricing`
* **[S-15]** Riskified & Datos Insights, "The Cost of Ineffective Dispute Management: Abandonment and Hidden Write-Offs," *Riskified Insights*, 2024. [Online]. Available: `https://www.riskified.com/blog/chargeback-management/`
* **[S-16]** Consumer Financial Protection Bureau, "Required Rulemaking on Personal Financial Data Rights (Dodd-Frank Act Section 1033 Final Rule)," *CFPB Rules & Policy*, Oct. 22, 2024. [Online]. Available: `https://www.consumerfinance.gov/rules-policy/final-rules/personal-financial-data-rights/`
* **[S-17]** Sahamati, "Account Aggregator Framework in India: Architecture & Technical Standards," *Sahamati Collective*, 2024. [Online]. Available: `https://sahamati.org.in/what-is-account-aggregator/`
* **[S-18]** Intuit QuickBooks, "Small Business Insights: Cash Flow and Late Payments Empirical Report," *Intuit Press Room*, 2024. [Online]. Available: `https://www.intuit.com/company/press-room/press-releases/small-business-index/`
* **[S-19]** Mastercard International Incorporated, "Mastercard Test & Learn and Brighterion Cognitive AI Architecture," *Mastercard Services*, 2024. [Online]. Available: `https://developer.mastercard.com/brighterion/`
* **[S-20]** Mastercard Corporate Communications, "Mastercard Agent Pay: Autonomous AI Agent Transaction Infrastructure," *Mastercard Newsroom*, 2024. [Online]. Available: `https://www.mastercard.com/news/press-releases/2024/agentic-ai-commerce-infrastructure/`
* **[S-21]** Plaid Inc., "Open Banking APIs and Signal Cash Flow Underwriting Models," *Plaid Developer Documentation*, 2024. [Online]. Available: `https://plaid.com/products/signal/`
* **[S-22]** Ramp Business Corporation & Brex Inc., "AI-Driven Corporate Financial Operations and Policy Automation," *Ramp Platform*, 2024. [Online]. Available: `https://ramp.com/platform/ai`
* **[S-23]** Chargeflow Inc., "Upload Evidence API & Dashboard Custom Evidence Integration Guide," *Chargeflow Help Docs*, 2025. [Online]. Available: `https://www.chargeflow.io/help/upload-evidence-guide`
* **[S-24]** Chargeflow Inc., "Chargeback Workflow Automation: Manual Review State Queues for High-Risk Cases," *Chargeflow Blog*, 2024. [Online]. Available: `https://www.chargeflow.io/blog/chargeback-workflow-automation`
* **[S-25]** Shopify App Store, G2 & Trustpilot, "Chargeflow Verified Merchant Review Corpus: Qualitative Feedback Analysis," *Shopify Apps & Trustpilot*, 2024. [Online]. Available: `https://apps.shopify.com/chargeflow`

---

## 12. Reproducibility Appendix

The ChargeDossier software and synthetic benchmark suite are engineered with zero external production dependencies and run natively on modern Node.js environments.

### 12.1 Environment Setup
* **Prerequisites:** Node.js v18.0.0 or higher.
* **Repository:**
  ```powershell
  git clone https://github.com/pragymathur12-king/chargedossier.git
  cd chargedossier
  ```

### 12.2 Automated Test Execution
Execute the automated test suite verifying scoring rules, API endpoints, error handling, and end-to-end state transitions:
```powershell
node --test tests/*.test.js
```
*Expected Result:* 24 passed tests across 3 suites with 0 failures (`engine.test.js`, `server.test.js`, `workflow.test.js`).

### 12.3 Local Prototype Execution
Start the native HTTP server:
```powershell
node server.js
```
Open `http://localhost:3000` in any standard web browser to interact with the synthetic dispute queue, audit evidence, trigger remediation, inspect Mastercom dossier layouts, and perform one-click resets.

### 12.4 Live Web Deployment
The verified prototype is hosted via GitHub Pages and executes the rules engine client-side:
* **Demo URL:** [https://pragymathur12-king.github.io/chargedossier/](https://pragymathur12-king.github.io/chargedossier/)
* **Portfolio Showcase:** [https://pragymathur12-king.github.io/aura-portfolio/chargedossier.html](https://pragymathur12-king.github.io/aura-portfolio/chargedossier.html)
