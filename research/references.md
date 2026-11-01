# ChargeDossier: Research References & Evidence Register

**Author:** Pragy Mathur  
**Affiliation:** Integrated MBA Candidate (Class of 2027), Parul University  
**Note on Affiliation:** Independent student research. This work was conducted independently by the author and was not supervised, sponsored, evaluated, or endorsed by Parul University, Mastercard, or any payment card network.  
**Email:** pragymathur12@gmail.com  
**Project:** Mastercard Opportunity Lab — ChargeDossier  
**Paper:** *Deterministic Decision Support for Payment Dispute Evidence: A Synthetic Case Evaluation of Explainable Pre-Submission Auditing*  
**Target Roles:** General Associate Product Manager (APM) &middot; Target Companies: Mastercard, Visa, Razorpay, Fintechs  
**Date:** October 30, 2026  

---

## 1. Citation Index & Claim Mapping

This document provides the formal reference index mapping every citation key (`[S-01]` through `[S-25]`) to its authoritative bibliographic citation, reliability tier, verified URL, and specific paper claims.

```
+----------------------------------------------------------------------------------------------------+
|                                    CITATION REGISTER SUMMARY                                       |
+----------+----------------------------------------------+--------+---------------------------------+
| REF KEY  | TITLE / PUBLISHER                            | TIER   | CORE MAPPED CLAIM               |
+----------+----------------------------------------------+--------+---------------------------------+
| [S-01]   | Mastercom API V6 (Mastercard)                | Tier 1 | <10MB, <18 page representment   |
| [S-02]   | First-Party Trust Program (Mastercard)       | Tier 1 | Reason Code 5002 deflection     |
| [S-03]   | Consumer Clarity (Ethoca / Mastercard)       | Tier 1 | SKU-level digital receipt data  |
| [S-04]   | Ethoca Alerts Network (Ethoca / Mastercard)  | Tier 1 | 24-72h alert refund SLA         |
| [S-05]   | True Cost of Fraud Study (LexisNexis)        | Tier 2 | $4.61–$5.13 per $1 fraud loss   |
| [S-06]   | Global Fraud & Payments Report (MRC)         | Tier 2 | <20% manual fraud win rate      |
| [S-07]   | Compelling Evidence 3.0 (Visa)               | Tier 1 | Prior 2 transactions rule       |
| [S-08]   | Rapid Dispute Resolution / RDR (Verifi/Visa) | Tier 1 | Pre-dispute automated refund    |
| [S-09]   | Dispute Docs & Protection (Stripe)           | Tier 1 | $15 fee, 0.4% chargeback cover  |
| [S-10]   | Shopify Protect Terms (Shopify)              | Tier 1 | Shop Pay only, 7-day fulfillment|
| [S-11]   | Pricing & Platform (Chargeflow)              | Tier 3 | 25% contingency take-rate       |
| [S-12]   | Autonomous Chargebacks (Justt.ai)            | Tier 3 | 20–25% contingency take-rate    |
| [S-13]   | Reason Codes Field Guide (Chargebacks911)    | Tier 3 | Code 4837 vs 4853 requirements  |
| [S-14]   | Alert Reseller Pricing (Chargeblast)         | Tier 3 | $19–$40 per alert cost          |
| [S-15]   | Dispute Abandonment (Riskified/Datos)        | Tier 2 | 60% abandon 40%+ chargebacks    |
| [S-16]   | Section 1033 Final Rule (CFPB)               | Tier 1 | SMB accounts excluded in 2024   |
| [S-17]   | Account Aggregator Framework (Sahamati)      | Tier 1 | Tripartite blind data pipe      |
| [S-18]   | Small Business Insights (Intuit QuickBooks)  | Tier 2 | 45–50% cash flow struggle       |
| [S-19]   | Test & Learn & Brighterion (Mastercard)      | Tier 1 | Sub-10ms cognitive risk scoring |
| [S-20]   | Agent Pay (Mastercard) [UNRESOLVED]           | Unresol| Press URL unverified; omitted   |
| [S-21]   | Signal & Open Banking (Plaid)                | Tier 3 | Cash flow underwriting APIs     |
| [S-22]   | Corporate Spend AI (Ramp / Brex)             | Tier 3 | Autonomous expense governance   |
| [S-23]   | Upload Evidence API (Chargeflow)             | Tier 3 | 5 files, 5MB limit per file     |
| [S-24]   | Manual Review State Queues (Chargeflow)      | Tier 3 | Pause high-risk cases feature    |
| [S-25]   | Merchant Review Corpus (Shopify / G2)        | Tier 2 | Merchant friction on 25% take   |
+----------+----------------------------------------------+--------+---------------------------------+
```

---

## 2. Bibliographic Details

### [S-01] Mastercard Developer Documentation: Mastercom API V6
* **Full Citation:** Mastercard International Incorporated, "Mastercom API V6 Developer Documentation: API Basics & Representment Constraints," *Mastercard Developers*, 2024.
* **URL:** [https://developer.mastercard.com/mastercom-documentation/api-basics/](https://developer.mastercard.com/mastercom-documentation/api-basics/)
* **Reliability Tier:** Tier 1 — Official Scheme Technical Standard
* **Context & Application:** Establishes the authoritative file constraints (<10MB aggregate file size, <18 pages) governing Second Presentment documentation, directly informing ChargeDossier's dossier layout.

### [S-02] Mastercard Newsroom: First-Party Trust Program Launch & Rules
* **Full Citation:** Mastercard Corporate Communications, "Mastercard Tackles First-Party Trust with Merchant Risk Council and MAG," *Mastercard Newsroom*, Oct. 23, 2023.
* **URL:** [https://www.mastercard.com/news/press-releases/2023/october/mastercard-tackles-first-party-fraud/](https://www.mastercard.com/news/press-releases/2023/october/mastercard-tackles-first-party-fraud/)
* **Reliability Tier:** Tier 1 — Official Scheme Policy Announcement
* **Context & Application:** Documents Reason Code 5002 (First-Party Trust Reject) and standardizes the three evidentiary telemetry vectors (Device Identity, Delivery Proof, Account Continuity) that form ChargeDossier's scoring categories.

### [S-03] Ethoca (A Mastercard Company): Consumer Clarity Technical Overview
* **Full Citation:** Ethoca, "Consumer Clarity Technical Overview and Merchant Data Requirements," *Ethoca (A Mastercard Company)*, 2024.
* **URL:** [https://www.ethoca.com/consumer-clarity](https://www.ethoca.com/consumer-clarity)
* **Reliability Tier:** Tier 1 / Tier 3 — Vendor Technical Architecture
* **Context & Application:** Validates that pushing rich itemized SKU-level digital receipt data into issuer banking applications deflects cardholder billing confusion.

### [S-04] Ethoca (A Mastercard Company): Ethoca Alerts Network
* **Full Citation:** Ethoca, "Ethoca Alerts Network: Collaborative Fraud Mitigation," *Ethoca (A Mastercard Company)*, 2024.
* **URL:** [https://www.ethoca.com/ethoca-alerts](https://www.ethoca.com/ethoca-alerts)
* **Reliability Tier:** Tier 1 / Tier 3 — Official Network Product Spec
* **Context & Application:** Details the 24-to-72-hour operational alert window and explains why deflecting chargebacks through voluntary refunds avoids Excessive Chargeback Program (ECP) penalties.

### [S-05] LexisNexis Risk Solutions: True Cost of Fraud™ Study
* **Full Citation:** LexisNexis Risk Solutions, "True Cost of Fraud™ Study: E-commerce and Retail (North American Edition)," *LexisNexis Insights*, Apr. 2025.
* **URL:** [https://risk.lexisnexis.com/insights-resources/research/true-cost-of-fraud-study-ecommerce-and-retail](https://risk.lexisnexis.com/insights-resources/research/true-cost-of-fraud-study-ecommerce-and-retail)
* **Reliability Tier:** Tier 2 — Independent Empirical Benchmark
* **Context & Application:** Provides the empirical finding that every $1.00 of direct fraud costs US retail/e-commerce merchants $4.61 to $5.13 in total organizational expenses, and notes that 41% of merchants continue to rely on manual dispute reviews. *Note on Claim Boundaries:* Does not measure an empirical 30–60 minute clock; that figure is an informal trade estimate from vendor/operational literature [S-15, S-25].

### [S-06] Merchant Risk Council (MRC) & Cybersource: Global eCommerce Report
* **Full Citation:** Merchant Risk Council & Cybersource, "Global eCommerce Payments and Fraud Report," *MRC Research*, 2024.
* **URL:** [https://www.merchantriskcouncil.org/resources/research/global-fraud-and-payments-report](https://www.merchantriskcouncil.org/resources/research/global-fraud-and-payments-report)
* **Reliability Tier:** Tier 2 — Trade Association Empirical Survey
* **Context & Application:** Establishes that manual merchant win rates on fraud-coded chargebacks average below 20%, highlighting the severe failure rate of unassisted representment.

### [S-07] Visa Inc. & Verifi: Compelling Evidence 3.0 (CE3.0) Specification
* **Full Citation:** Visa Inc. & Verifi, "Compelling Evidence 3.0 (CE3.0) Operating Specification," *Visa Global Support*, 2023.
* **URL:** [https://usa.visa.com/dam/VCOM/global/support-legal/documents/visa-compelling-evidence-3-0.pdf](https://usa.visa.com/dam/VCOM/global/support-legal/documents/visa-compelling-evidence-3-0.pdf)
* **Reliability Tier:** Tier 1 — Card Scheme Operating Rule
* **Context & Application:** Details the competing network deflection standard requiring two historical undisputed purchases within 120 to 365 days sharing IP/device fingerprint.

### [S-08] Verifi (A Visa Solution): Rapid Dispute Resolution (RDR)
* **Full Citation:** Verifi, "Rapid Dispute Resolution (RDR) and Cardholder Dispute Resolution Network," *Verifi (A Visa Solution)*, 2024.
* **URL:** [https://www.verifi.com/solutions/rapid-dispute-resolution/](https://www.verifi.com/solutions/rapid-dispute-resolution/)
* **Reliability Tier:** Tier 1 — Competitor Network Specification
* **Context & Application:** Details automated pre-dispute resolution at the network switch, providing context on competing pre-dispute deflection mechanisms.

### [S-09] Stripe Inc.: Dispute Documentation & Chargeback Protection Policy
* **Full Citation:** Stripe Inc., "Stripe Dispute Documentation & Chargeback Protection Policy," *Stripe Docs*, 2024.
* **URL:** [https://stripe.com/docs/disputes](https://stripe.com/docs/disputes) and [https://stripe.com/radar/chargeback-protection](https://stripe.com/radar/chargeback-protection)
* **Reliability Tier:** Tier 1 — Payment Processor Technical Specification
* **Context & Application:** Documents the $15.00 non-refundable US dispute fee, 0.4% Chargeback Protection fee, $25,000 annual limit, and exclusion of merchandise non-delivery claims.

### [S-10] Shopify Inc.: Shopify Protect Terms of Service
* **Full Citation:** Shopify Inc., "Shopify Protect Terms of Service and Merchant Guidelines," *Shopify Help Center*, 2024.
* **URL:** [https://help.shopify.com/en/manual/payments/shopify-protect](https://help.shopify.com/en/manual/payments/shopify-protect)
* **Reliability Tier:** Tier 1 — E-Commerce Platform Documentation
* **Context & Application:** Confirms that platform-native protection is strictly restricted to Shop Pay transactions and requires fulfillment within 7 days, excluding all other checkout channels.

### [S-11] Chargeflow Inc.: Product Platform & Public Pricing Structure
* **Full Citation:** Chargeflow Inc., "Product Platform, Representment Automation & Public Pricing Structure," *Chargeflow Portal*, 2024.
* **URL:** [https://www.chargeflow.io/pricing](https://www.chargeflow.io/pricing)
* **Reliability Tier:** Tier 3 — Commercial Vendor Specification
* **Context & Application:** Documents Chargeflow's specific 25% contingency take-rate on recovered funds, illustrating the economic drag on high-ticket goods ($150 to $1,500 AOV). Scoped strictly to this specific vendor's published pricing.

### [S-12] Justt.ai: Autonomous Chargeback Management
* **Full Citation:** Justt.ai, "How It Works: Autonomous Chargeback Management," *Justt Product Overview*, 2024.
* **URL:** [https://justt.ai/how-it-works/](https://justt.ai/how-it-works/)
* **Reliability Tier:** Tier 3 — Commercial Vendor Overview
* **Context & Application:** Documents the 20% to 25% contingency fee model targeting high-volume enterprise merchants.

### [S-13] Chargebacks911: Mastercard Reason Codes Field Guide
* **Full Citation:** Chargebacks911, "Mastercard Chargeback Reason Codes & Field Dispute Guide," *Chargebacks911 Reference Library*, 2024.
* **URL:** [https://chargebacks911.com/chargeback-reason-codes/mastercard/](https://chargebacks911.com/chargeback-reason-codes/mastercard/)
* **Reliability Tier:** Tier 3 — Educational Reference
* **Context & Application:** Details the legal and procedural requirements of Reason Code 4837 (Fraud) versus Reason Code 4853 (Cardholder Dispute: Defective/Not as Described).

### [S-14] Chargeblast & Disputifier: Dispute Alert Reseller Pricing
* **Full Citation:** Chargeblast & Disputifier, "Dispute Alert Reseller Public Pricing and SLA Comparison," *Chargeblast*, 2024.
* **URL:** [https://www.chargeblast.com/pricing](https://www.chargeblast.com/pricing)
* **Reliability Tier:** Tier 3 — Reseller Public Pricing
* **Context & Application:** Shows that third-party alert resellers charge $19.00 to $40.00+ per alert on top of full merchant refund loss.

### [S-15] Riskified & Datos Insights: Dispute Abandonment Survey
* **Full Citation:** Riskified & Datos Insights, "The Cost of Ineffective Dispute Management: Abandonment and Hidden Write-Offs," *Riskified Insights*, 2024.
* **URL:** [https://www.riskified.com/blog/chargeback-management/](https://www.riskified.com/blog/chargeback-management/)
* **Reliability Tier:** Tier 2 — Vendor-Sponsored Empirical Survey
* **Context & Application:** Documents that nearly 60% of surveyed merchants leave 40%+ of chargebacks undisputed, writing off 16% of total dispute volume.

### [S-16] Consumer Financial Protection Bureau: CFPB Section 1033 Final Rule
* **Full Citation:** Consumer Financial Protection Bureau, "Required Rulemaking on Personal Financial Data Rights (Dodd-Frank Act Section 1033 Final Rule)," *CFPB Rules & Policy*, Oct. 22, 2024.
* **URL:** [https://www.consumerfinance.gov/rules-policy/final-rules/personal-financial-data-rights/](https://www.consumerfinance.gov/rules-policy/final-rules/personal-financial-data-rights/)
* **Reliability Tier:** Tier 1 — Federal Regulatory Final Rule
* **Context & Application:** Documents the explicit exclusion of commercial and SMB bank accounts from federal open banking rules, providing the strategic rationale for prioritizing merchant-held dispute data.

### [S-17] Sahamati: Account Aggregator Framework in India
* **Full Citation:** Sahamati, "Account Aggregator Framework in India: Architecture & Technical Standards," *Sahamati Collective*, 2024.
* **URL:** [https://sahamati.org.in/what-is-account-aggregator/](https://sahamati.org.in/what-is-account-aggregator/)
* **Reliability Tier:** Tier 1 / Tier 2 — Self-Regulatory Framework
* **Context & Application:** Examines public digital infrastructure architecture where consent managers operate as blind data transfer conduits.

### [S-18] Intuit QuickBooks: Small Business Insights
* **Full Citation:** Intuit QuickBooks, "Small Business Insights: Cash Flow and Late Payments Empirical Report," *Intuit Press Room*, 2024.
* **URL:** [https://www.intuit.com/company/press-room/press-releases/small-business-index/](https://www.intuit.com/company/press-room/press-releases/small-business-index/)
* **Reliability Tier:** Tier 2 — Empirical Small Business Survey
* **Context & Application:** Documents that 45% to 50% of SMBs struggle with working capital and hold an average of $17,500 in overdue receivables.

### [S-19] Mastercard Services: Test & Learn & Brighterion
* **Full Citation:** Mastercard International Incorporated, "Mastercard Test & Learn and Brighterion Cognitive AI Architecture," *Mastercard Services*, 2024.
* **URL:** [https://developer.mastercard.com/brighterion/](https://developer.mastercard.com/brighterion/)
* **Reliability Tier:** Tier 1 — Corporate Technology Specification
* **Context & Application:** Analyzes sub-10ms cognitive computing and real-time transaction risk scoring at payment network scale.

### [S-20] Mastercard Corporate Communications: Agent Pay [UNRESOLVED]
* **Full Citation:** Mastercard Corporate Communications, "Mastercard Agent Pay: Autonomous AI Agent Transaction Infrastructure," *Mastercard Newsroom*, 2024.
* **URL:** [https://www.mastercard.com/news/press-releases/2024/agentic-ai-commerce-infrastructure/](https://www.mastercard.com/news/press-releases/2024/agentic-ai-commerce-infrastructure/)
* **Reliability Tier:** Tier 1 — Strategic Platform Announcement
* **Status:** **UNRESOLVED** (The specific press release URL slug is unverified in live testing; this reference is omitted from all manuscript claims).

### [S-21] Plaid Inc.: Open Banking APIs and Cash Flow Underwriting
* **Full Citation:** Plaid Inc., "Open Banking APIs and Signal Cash Flow Underwriting Models," *Plaid Developer Documentation*, 2024.
* **URL:** [https://plaid.com/products/signal/](https://plaid.com/products/signal/)
* **Reliability Tier:** Tier 3 — Commercial Aggregator Specification
* **Context & Application:** Explores commercial cash flow attributes and underwriting APIs for consumer and commercial underwriting.

### [S-22] Ramp & Brex: AI-Driven Corporate Financial Operations
* **Full Citation:** Ramp Business Corporation & Brex Inc., "AI-Driven Corporate Financial Operations and Policy Automation," *Ramp Platform*, 2024.
* **URL:** [https://ramp.com/platform/ai](https://ramp.com/platform/ai)
* **Reliability Tier:** Tier 3 — Corporate Spend Platform
* **Context & Application:** Documents machine-learning spend governance and predictive cash flow management in corporate financial operations.

### [S-23] Chargeflow Inc.: Upload Evidence API Documentation
* **Full Citation:** Chargeflow Inc., "Upload Evidence API & Dashboard Custom Evidence Integration Guide," *Chargeflow Help Docs*, 2025.
* **URL:** [https://www.chargeflow.io/help/upload-evidence-guide](https://www.chargeflow.io/help/upload-evidence-guide)
* **Reliability Tier:** Tier 3 — Vendor Technical Documentation
* **Context & Application:** Verifies that Chargeflow provides an upload portal and API for supplemental evidence (max 5 files, 5MB each).

### [S-24] Chargeflow Inc.: Workflow Automation & Review State Queues
* **Full Citation:** Chargeflow Inc., "Chargeback Workflow Automation: Manual Review State Queues for High-Risk Cases," *Chargeflow Blog*, 2024.
* **URL:** [https://www.chargeflow.io/blog/chargeback-workflow-automation](https://www.chargeflow.io/blog/chargeback-workflow-automation)
* **Reliability Tier:** Tier 3 — Vendor Technical Architecture
* **Context & Application:** Confirms that automated dispute vendors support manual review pause states for high-risk disputes, disproving the assumption that review friction is incompatible with automation.

### [S-25] Shopify App Store, G2 & Trustpilot: Merchant Review Corpus
* **Full Citation:** Shopify App Store, G2 & Trustpilot, "Chargeflow Verified Merchant Review Corpus: Qualitative Feedback Analysis," *Shopify Apps & Trustpilot*, 2024.
* **URL:** [https://apps.shopify.com/chargeflow](https://apps.shopify.com/chargeflow)
* **Reliability Tier:** Tier 2 / Tier 3 — Qualitative User Feedback Aggregation
* **Context & Application:** Documents verified merchant complaints regarding premature autopilot submission before custom evidence was attached, and merchant frustration over 25% take-rates on high-ticket sales.
