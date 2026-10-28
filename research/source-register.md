# Research Source Register: Mastercard Opportunity Lab

## Overview
This master register documents all primary and secondary sources referenced across the Mastercard Opportunity Lab research documents. Every source is cataloged with its publication date, author/publisher, formal category, commercial or regulatory context, supported claims/excerpts, and an objective reliability classification.

---

## Reliability Tiers
* **Tier 1 (Authoritative Primary Sources):** Official card network rules, central bank/regulatory publications, statutory rules, and official technical developer APIs.
* **Tier 2 (Independent Industry Benchmarks):** Empirical research reports, non-profit trade association surveys, and peer-reviewed industry analyses.
* **Tier 3 (Commercial Vendors & Market Data):** Commercial software product pages, pricing sheets, and vendor whitepapers (flagged for promotional context).

---

## Master Source Catalog

### [S-01] Mastercard Developer Documentation: Mastercom API V6
* **URL:** [https://developer.mastercard.com/mastercom-documentation/api-basics/](https://developer.mastercard.com/mastercom-documentation/api-basics/)
* **Publication Date:** 2024–2026 Active Specification
* **Publisher / Author:** Mastercard International Incorporated
* **Source Type:** Tier 1 — Official Network Technical Documentation
* **Supported Claims & Excerpts:**
  * Mastercom is the centralized card scheme platform automating dispute lifecycle events, retrievals, chargebacks, and arbitration.
  * Direct API integration is restricted strictly to licensed Mastercard Principal Members (acquiring and issuing banks, licensed processors).
  * Standardizes dispute tracking under a single Claim ID.
  * Enforces strict second presentment evidence limits: maximum aggregate file size of 10MB and maximum document length of 18 pages (TIFF/PDF).

---

### [S-02] Mastercard Newsroom: First-Party Trust Program Launch & Rules
* **URL:** [https://www.mastercard.com/news/press-releases/2023/october/mastercard-tackles-first-party-fraud/](https://www.mastercard.com/news/press-releases/2023/october/mastercard-tackles-first-party-fraud/)
* **Publication Date:** October 23, 2023 (Expanded through 2024–2026)
* **Publisher / Author:** Mastercard Corporate Communications (with Merchant Risk Council & MAG)
* **Source Type:** Tier 1 — Official Scheme Press Announcement & Policy
* **Supported Claims & Excerpts:**
  * Launched First-Party Trust (FPT) to combat friendly fraud by sharing structured data between merchants and card issuers.
  * Standardizes three evidentiary vectors: Device Identity (IP, device fingerprint), Delivery Proofs (carrier tracking, geolocation), and Account Continuity (customer account age, email age, transaction history).
  * Establishes **Reason Code 5002 (First-Party Trust Reject)**, allowing acquirers to reject invalid Reason Code 4837 (No Cardholder Authorization) chargebacks before they impact merchant metrics.

---

### [S-03] Ethoca (A Mastercard Company): Consumer Clarity Technical Overview
* **URL:** [https://www.ethoca.com/consumer-clarity](https://www.ethoca.com/consumer-clarity)
* **Publication Date:** 2024 Product Documentation
* **Publisher / Author:** Ethoca / Mastercard
* **Source Type:** Tier 1 / Tier 3 — Official Product Documentation (Vendor Context)
* **Supported Claims & Excerpts:**
  * Consumer Clarity pushes rich transaction metadata, merchant logos, clean descriptors, itemized SKU-level digital receipts, and contact channels directly into card issuer mobile banking applications.
  * Stops transaction confusion at the root before a formal dispute is initiated.
  * Integration requires the Ethoca Merchant API or an acquirer passing structured receipt line items. Pricing is enterprise-gated.

---

### [S-04] Ethoca (A Mastercard Company): Ethoca Alerts Network
* **URL:** [https://www.ethoca.com/ethoca-alerts](https://www.ethoca.com/ethoca-alerts)
* **Publication Date:** 2024
* **Publisher / Author:** Ethoca / Mastercard
* **Source Type:** Tier 1 / Tier 3 — Official Product Overview
* **Supported Claims & Excerpts:**
  * Provides early-warning alerts to merchants when a cardholder reports unauthorized activity to an issuer.
  * Offers a 24-to-72-hour operational window to issue an immediate voluntary refund, preventing a formal chargeback.
  * Successfully deflected alerts do not count against Mastercard Excessive Chargeback Program (ECP) thresholds.

---

### [S-05] LexisNexis Risk Solutions: True Cost of Fraud™ Study (Ecommerce & Retail)
* **URL:** [https://risk.lexisnexis.com/insights-resources/research/true-cost-of-fraud-study-ecommerce-and-retail](https://risk.lexisnexis.com/insights-resources/research/true-cost-of-fraud-study-ecommerce-and-retail)
* **Publication Date:** April 2025 (US & Canada Edition, with 2023–2026 tracking)
* **Publisher / Author:** LexisNexis Risk Solutions
* **Source Type:** Tier 2 — Independent Industry Empirical Benchmark
* **Supported Claims & Excerpts:**
  * Every $1 of direct fraud/dispute loss costs US retail and e-commerce merchants an average of **$4.61 to $5.13** in total organizational costs.
  * Expenses encompass lost inventory, non-refundable processor dispute fees, internal investigation labor, shipping losses, and customer churn.
  * 41% of North American merchants report continuing reliance on manual review workflows for fraud and dispute management.

---

### [S-06] Merchant Risk Council (MRC) & Cybersource: Global eCommerce Payments and Fraud Report
* **URL:** [https://www.merchantriskcouncil.org/resources/research/global-fraud-and-payments-report](https://www.merchantriskcouncil.org/resources/research/global-fraud-and-payments-report)
* **Publication Date:** 2024 / 2025 Editions
* **Publisher / Author:** Merchant Risk Council (MRC) in partnership with Cybersource (Visa)
* **Source Type:** Tier 2 — Trade Association Empirical Survey
* **Supported Claims & Excerpts:**
  * Average merchant win rate on fraud-coded chargebacks (e.g., Mastercard 4837, Visa 10.4) is **below 20%** when handled manually.
  * First-party misuse ("friendly fraud") is cited by over 45% of surveyed merchants as an escalating dispute driver.

---

### [S-07] Visa Inc. & Verifi: Compelling Evidence 3.0 (CE3.0) and Order Insight Specifications
* **URL:** [https://usa.visa.com/dam/VCOM/global/support-legal/documents/visa-compelling-evidence-3-0.pdf](https://usa.visa.com/dam/VCOM/global/support-legal/documents/visa-compelling-evidence-3-0.pdf)
* **Publication Date:** 2023–2025 Operating Rules
* **Publisher / Author:** Visa Inc. / Verifi
* **Source Type:** Tier 1 — Competitor Scheme Operating Specification
* **Supported Claims & Excerpts:**
  * Under Visa Reason Code 10.4 (Card-Absent Fraud), a dispute is systematically deflected if the merchant proves that the disputed transaction shares IP or device fingerprint plus 1 secondary identifier with **at least two prior undisputed transactions** made between 120 and 365 days prior.

---

### [S-08] Verifi (A Visa Solution): Rapid Dispute Resolution (RDR) & CDRN Documentation
* **URL:** [https://www.verifi.com/solutions/rapid-dispute-resolution/](https://www.verifi.com/solutions/rapid-dispute-resolution/)
* **Publication Date:** 2024
* **Publisher / Author:** Verifi
* **Source Type:** Tier 1 — Competitor Network Product Specification
* **Supported Claims & Excerpts:**
  * Verifi RDR provides automated pre-dispute resolution directly at the issuer switch based on merchant-configured rules.
  * CDRN provides manual pre-dispute alert notifications with a 72-hour refund SLA.

---

### [S-09] Stripe Inc.: Stripe Dispute Documentation & Chargeback Protection Policy
* **URL:** [https://stripe.com/docs/disputes](https://stripe.com/docs/disputes) and [https://stripe.com/radar/chargeback-protection](https://stripe.com/radar/chargeback-protection)
* **Publication Date:** 2024–2026 Documentation
* **Publisher / Author:** Stripe, Inc.
* **Source Type:** Tier 1 — Platform Technical Documentation
* **Supported Claims & Excerpts:**
  * Standard dispute fee in the US is **$15.00 flat** per dispute, deducted immediately from merchant balance upon creation.
  * Stripe Chargeback Protection costs **0.4% per transaction** on eligible checkout volume.
  * Chargeback Protection **strictly covers unauthorized fraud disputes**; it completely excludes "product not received," "unrecognized," "not as described," and subscription disputes.
  * Annual reimbursement limit is capped at **$25,000 per calendar year** per account.

---

### [S-10] Shopify Inc.: Shopify Protect Terms of Service and Dispute Guidelines
* **URL:** [https://help.shopify.com/en/manual/payments/shopify-protect](https://help.shopify.com/en/manual/payments/shopify-protect)
* **Publication Date:** 2024–2025
* **Publisher / Author:** Shopify Inc.
* **Source Type:** Tier 1 — Platform Help Documentation & Terms
* **Supported Claims & Excerpts:**
  * Shopify Protect is free for US merchants using Shopify Payments, but **applies exclusively to orders completed via Shop Pay**.
  * Credit card transactions completed through standard checkout, PayPal, or third-party gateways are excluded.
  * Requires physical goods fulfillment within 7 days and initial carrier transit scan within 10 days. Excludes digital goods, in-store pickup, and subscription renewals.

---

### [S-11] Chargeflow Inc.: Product Platform & Public Pricing Structure
* **URL:** [https://www.chargeflow.io/pricing](https://www.chargeflow.io/pricing)
* **Publication Date:** 2024–2025
* **Publisher / Author:** Chargeflow Inc.
* **Source Type:** Tier 3 — Vendor Commercial Portal
* **Supported Claims & Excerpts:**
  * Operates on a performance-based contingency model, charging **25% of recovered disputed funds**.
  * Native integrations with Shopify, Stripe, PayPal, and major shipping carriers to compile dispute evidence automatically.

---

### [S-12] Justt.ai: Product Specifications and Business Model
* **URL:** [https://justt.ai/how-it-works/](https://justt.ai/how-it-works/)
* **Publication Date:** 2024–2025
* **Publisher / Author:** Justt
* **Source Type:** Tier 3 — Vendor Commercial Overview
* **Supported Claims & Excerpts:**
  * Operates on a contingency pricing model (20% to 25% of won disputes).
  * Targets mid-market and enterprise merchants with multi-PSP architecture ($10M+ GMV).

---

### [S-13] Chargebacks911: Dispute Rules & Field Guide
* **URL:** [https://chargebacks911.com/chargeback-reason-codes/mastercard/](https://chargebacks911.com/chargeback-reason-codes/mastercard/)
* **Publication Date:** 2024
* **Publisher / Author:** Chargebacks911
* **Source Type:** Tier 3 — Commercial Educational Reference
* **Supported Claims & Excerpts:**
  * Catalog of Mastercard Reason Codes (4837, 4853, 4834, 4808).
  * Details legacy software retainers ($1,000–$5,000/month) and multi-month setup contracts.

---

### [S-14] Chargeblast & Disputifier: Alert Aggregator Pricing and Reseller Tiers
* **URL:** [https://www.chargeblast.com/pricing](https://www.chargeblast.com/pricing) and [https://www.disputifier.com/pricing](https://www.disputifier.com/pricing)
* **Publication Date:** 2024–2025
* **Publisher / Author:** Chargeblast / Disputifier
* **Source Type:** Tier 3 — Self-Serve Alert Reseller Public Pricing
* **Supported Claims & Excerpts:**
  * Public pricing for Ethoca Alerts sold to SMBs: **$29.00 to $40.00+ per alert**.
  * Public pricing for Verifi CDRN/RDR alerts: **$19.00 to $20.00 per alert**.
  * Triggering an alert requires a 100% refund in addition to the alert fee ($59+ lost on a $30 order).

---

### [S-15] Riskified & Datos Insights: Dispute Abandonment Survey
* **URL:** [https://www.riskified.com/blog/chargeback-management/](https://www.riskified.com/blog/chargeback-management/)
* **Publication Date:** 2023–2024
* **Publisher / Author:** Riskified & Datos Insights
* **Source Type:** Tier 3 — Vendor Sponsored Survey
* **Supported Claims & Excerpts:**
  * Nearly **60% of surveyed merchants leave at least 40% of their chargebacks completely undisputed**.
  * Approximately **16% of total chargeback volume** consists of low-dollar write-offs where transaction value is lower than the administrative cost of rebuttal.

---

### [S-16] Consumer Financial Protection Bureau (CFPB): Section 1033 Final Rule
* **URL:** [https://www.consumerfinance.gov/rules-policy/final-rules/personal-financial-data-rights/](https://www.consumerfinance.gov/rules-policy/final-rules/personal-financial-data-rights/)
* **Publication Date:** October 22, 2024 (Published in Federal Register late 2024 / active 2025)
* **Publisher / Author:** Consumer Financial Protection Bureau (CFPB)
* **Source Type:** Tier 1 — Federal Regulatory Final Rule (Dodd-Frank Act Section 1033)
* **Supported Claims & Excerpts:**
  * Mandates covered financial institutions to make consumer financial data available in standardized electronic formats via secure APIs for free.
  * Explicitly phases out screen scraping in favor of secure developer interfaces.
  * **Critical Scope Limitation:** The rule applies to **consumer financial products and services** (checking, savings, credit cards, digital wallets). **Commercial / small business bank accounts are NOT covered** under the 2024 final rule.
  * Rule faced immediate federal litigation by banking trade groups in 2024–2025, leading to regulatory pauses and reconsideration of third-party fee provisions.

---

### [S-17] Sahamati: Account Aggregator Framework in India (Architecture & Technical Standards)
* **URL:** [https://sahamati.org.in/what-is-account-aggregator/](https://sahamati.org.in/what-is-account-aggregator/)
* **Publication Date:** 2023–2025 Documentation
* **Publisher / Author:** Sahamati (Collective for the Account Aggregator Ecosystem) / ReBIT
* **Source Type:** Tier 1 / Tier 2 — SRO Industry Architecture Documentation
* **Supported Claims & Excerpts:**
  * India’s Account Aggregator (AA) ecosystem uses a tripartite digital public infrastructure (FIP $\rightarrow$ Blind Consent Manager/AA $\rightarrow$ FIU).
  * Regulated under Reserve Bank of India (NBFC-AA directions) alongside SEBI, IRDAI, and PFRDA.
  * The AA is a "blind pipe": it transfers encrypted data based on electronic consent but cannot view, store, or monetize underlying financial data.
  * Cross-sectoral by design: covers bank deposits, mutual funds, insurance, pensions, and GST business tax filings.

---

### [S-18] Intuit Inc.: Small Business Insights & Late Payments Reports
* **URL:** [https://www.intuit.com/company/press-room/press-releases/small-business-index/](https://www.intuit.com/company/press-room/press-releases/small-business-index/)
* **Publication Date:** 2024–2025 Periodic Index Surveys
* **Publisher / Author:** Intuit QuickBooks
* **Source Type:** Tier 2 — Large-Scale Empirical SMB Survey
* **Supported Claims & Excerpts:**
  * **45% to 50% of small businesses** consistently report struggling with cash flow challenges.
  * **Over 50% to 56%** of small businesses report being owed money for unpaid invoices, with an average of **$17,500 to $17,700** in overdue receivables per business.
  * 47% to 59% of unpaid invoices are overdue by more than 30 days.
  * Credit cards are the #1 fallback mechanism small businesses use to bridge cash flow shortfalls.

---

### [S-19] Mastercard Services: Test & Learn and Brighterion Platform Overview
* **URL:** [https://www.mastercardservices.com/en/solutions/test-and-learn](https://www.mastercardservices.com/en/solutions/test-and-learn) and [https://developer.mastercard.com/brighterion/](https://developer.mastercard.com/brighterion/)
* **Publication Date:** 2024–2025 Documentation
* **Publisher / Author:** Mastercard International Incorporated
* **Source Type:** Tier 1 — Official Service Suite Specifications
* **Supported Claims & Excerpts:**
  * **Mastercard Test & Learn (formerly APT):** Cloud-based predictive analytics and business experimentation software used by global retailers and banks to design and measure in-market pilots (pricing, product lines, marketing).
  * **Mastercard Brighterion:** AI and cognitive computing platform processing real-time risk scoring, anomaly detection, and automated case decisioning with sub-10ms response times.

---

### [S-20] Mastercard Press & Retail Dive: Agentic Commerce, Agent Pay & Shopping Muse
* **URL:** [https://www.mastercard.com/news/press-releases/2024/agentic-ai-commerce-infrastructure/](https://www.mastercard.com/news/press-releases/2024/agentic-ai-commerce-infrastructure/)
* **Publication Date:** 2024–2025
* **Publisher / Author:** Mastercard Newsroom / Industry Press
* **Source Type:** Tier 1 / Tier 2 — Press Release & Strategic Technology Announcements
* **Supported Claims & Excerpts:**
  * Mastercard launched **Mastercard Agent Pay** and virtual card infrastructure to allow autonomous AI agents to transact on behalf of consumers and businesses within pre-set authorization limits.
  * **Shopping Muse** (developed by Dynamic Yield by Mastercard) utilizes conversational generative AI to translate natural language and visual intent into e-commerce product recommendations.

---

### [S-21] Plaid Inc.: Open Banking, Cash Flow Underwriting & Plaid Consumer/SMB APIs
* **URL:** [https://plaid.com/products/income/](https://plaid.com/products/income/) and [https://plaid.com/products/signal/](https://plaid.com/products/signal/)
* **Publication Date:** 2024–2025 Documentation
* **Publisher / Author:** Plaid Inc.
* **Source Type:** Tier 3 — Commercial Open Banking Aggregator Documentation
* **Supported Claims & Excerpts:**
  * Provides bank account aggregation, real-time balance checks, transaction categorization, and cash flow attributes for consumer and SMB lending underwriting.
  * Live production access requires formal commercial developer contracts, SOC 2 compliance, and bank-level OAuth integration.

---

### [S-22] Ramp & Brex: AI-Driven Financial Operations and Autonomous Intelligence
* **URL:** [https://ramp.com/platform/ai](https://ramp.com/platform/ai) and [https://www.brex.com/product/ai](https://www.brex.com/product/ai)
* **Publication Date:** 2024–2025
* **Publisher / Author:** Ramp Business Corporation / Brex Inc.
* **Source Type:** Tier 3 — Corporate Spend Platform Specifications
* **Supported Claims & Excerpts:**
  * Uses generative AI and machine learning for automated expense categorization, duplicate subscription detection, spend policy enforcement, and predictive cash management for mid-market businesses.

---

### [S-23] Chargeflow Documentation: Upload Evidence API & Dashboard Custom Evidence Guide
* **URL:** [https://www.chargeflow.io/help/upload-evidence-guide](https://www.chargeflow.io/help/upload-evidence-guide) and API reference [https://api.chargeflow.io/public/2025-04-01/disputes/{disputeId}/evidence](https://api.chargeflow.io/public/2025-04-01/disputes/{disputeId}/evidence)
* **Publication Date:** 2025–2026 Active Product Documentation
* **Publisher / Author:** Chargeflow Inc.
* **Source Type:** Tier 3 — Official Vendor Technical Documentation
* **Supported Claims & Excerpts:**
  * Chargeflow provides a native **Upload Evidence** feature directly in its merchant dashboard under the "Take Action" tab.
  * Merchants can upload up to 5 files (PDF, JPEG, PNG, max 5MB per file) and submit up to 500 characters of explanatory text per dispute.
  * Provides a public API endpoint (`POST /public/2025-04-01/disputes/{disputeId}/evidence`) allowing programmatic submission of additional files categorized by evidence type.
  * Recommends uploading supplemental evidence at least 5 days prior to the card network deadline for AI ingestion.

---

### [S-24] Chargeflow Documentation: Workflow Automation & Review State Management
* **URL:** [https://www.chargeflow.io/blog/chargeback-workflow-automation](https://www.chargeflow.io/blog/chargeback-workflow-automation)
* **Publication Date:** 2024–2025
* **Publisher / Author:** Chargeflow Inc.
* **Source Type:** Tier 3 — Vendor Technical Architecture & Blog
* **Supported Claims & Excerpts:**
  * Chargeflow documents workflow capabilities allowing merchants to pause disputes meeting specific criteria (e.g., high-ticket amounts, VIP customers) for internal manual review before submission.
  * Outlines state tracking (Generated, Reviewed, Submitted) to prevent premature submission before internal sign-off.
  * Contradicts the assumption that Chargeflow fundamentally lacks manual review architecture.

---

### [S-25] Shopify App Store, G2 & Trustpilot: Chargeflow Merchant Review Corpus
* **URL:** [https://apps.shopify.com/chargeflow](https://apps.shopify.com/chargeflow), [https://www.g2.com/products/chargeflow/reviews](https://www.g2.com/products/chargeflow/reviews), and [https://www.trustpilot.com/review/chargeflow.io](https://www.trustpilot.com/review/chargeflow.io)
* **Publication Date:** 2024–2026 Customer Reviews
* **Publisher / Author:** Verified E-Commerce Merchants on Shopify, G2, Trustpilot
* **Source Type:** Tier 2 / Tier 3 — Independent Customer Feedback Aggregations
* **Supported Claims & Excerpts:**
  * Overall positive rating (4.5 to 4.8 stars out of 5 across hundreds of reviews); merchants praise time savings and hands-off recovery.
  * Negative reviews reflect specific operational friction: merchants who left the system on full autopilot reporting disputes were submitted before they uploaded warehouse tracking slips, and merchants selling high-ticket goods ($500–$2,500) expressing frustration over paying 25% of recovered gross sales.
