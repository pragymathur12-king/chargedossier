# ChargeDossier: Bibliographic Source & Reference Verification Audit

**Project:** Mastercard Opportunity Lab — ChargeDossier  
**Author:** Pragy Mathur &middot; Integrated MBA Candidate (Class of 2027)  
**Target Roles:** General Associate Product Manager (APM) &middot; Target Companies: Mastercard, Visa, Razorpay, Fintechs  
**Date:** October 30, 2026  
**Status:** 25/25 Sources Individually Verified & Audited  

---

## 1. Audit Framework & Source Reliability Tiers

Every source cited across ChargeDossier research documents was individually audited against four criteria:
1. **Bibliographic Authenticity:** Verifiable publication date, author/publisher, formal title, and active canonical URL.
2. **Substantive Claim Alignment:** Confirmation that the cited source directly substantiates the specific factual claim made in the manuscript.
3. **Contextual Transparency:** Disclosing vendor self-interest or marketing context (e.g., commercial SaaS pricing sheets vs. independent regulatory texts).
4. **Reliability Classification:**
   * **Tier 1 (Authoritative Primary Sources):** Card network operating regulations, statutory final rules, central bank specifications, and official developer technical APIs.
   * **Tier 2 (Independent Industry Benchmarks):** Empirical research reports, trade association surveys, and peer-reviewed industry analyses.
   * **Tier 3 (Commercial Vendors & Market Data):** Commercial software product pages, pricing sheets, and vendor whitepapers (flagged for promotional context).

---

## 2. Individual Verification Register (Sources S-01 to S-25)

```
+--------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| TABLE 1: COMPLETE 25-SOURCE BIBLIOGRAPHIC VERIFICATION REGISTER                                                                                                    |
+-----+----------------------------------------+--------+--------------------------------------------------------------+--------------------+------------------------+
| REF | PUBLISHER & FORMAL TITLE               | TIER   | ACTIVE CANONICAL URL                                         | VERIFIED CLAIMS    | VERIFICATION STATUS    |
+-----+----------------------------------------+--------+--------------------------------------------------------------+--------------------+------------------------+
| S-01| Mastercard International Incorporated, | Tier 1 | https://developer.mastercard.com/mastercom-documentation/    | Mastercom v6 file  | VERIFIED (Tier 1)      |
|     | "Mastercom API V6 Developer Docs"      |        | api-basics/                                                  | <10MB, <18 pages   | Matches network specs  |
+-----+----------------------------------------+--------+--------------------------------------------------------------+--------------------+------------------------+
| S-02| Mastercard Corporate Communications,   | Tier 1 | https://www.mastercard.com/news/press-releases/2023/october/ | First-Party Trust, | VERIFIED (Tier 1)      |
|     | "Mastercard Tackles First-Party Fraud" |        | mastercard-tackles-first-party-fraud/                        | Reason Code 5002   | Matches press release  |
+-----+----------------------------------------+--------+--------------------------------------------------------------+--------------------+------------------------+
| S-03| Ethoca (A Mastercard Company),         | Tier 1 | https://www.ethoca.com/consumer-clarity                      | SKU digital receipt| VERIFIED (Tier 1/3)    |
|     | "Consumer Clarity Technical Overview"  |        |                                                              | in banking apps    | Vendor documentation   |
+-----+----------------------------------------+--------+--------------------------------------------------------------+--------------------+------------------------+
| S-04| Ethoca (A Mastercard Company),         | Tier 1 | https://www.ethoca.com/ethoca-alerts                         | 24–72h alert SLA,  | VERIFIED (Tier 1/3)    |
|     | "Ethoca Alerts Network Overview"       |        |                                                              | ECP exemption      | Vendor documentation   |
+-----+----------------------------------------+--------+--------------------------------------------------------------+--------------------+------------------------+
| S-05| LexisNexis Risk Solutions,             | Tier 2 | https://risk.lexisnexis.com/insights-resources/research/     | $4.61–$5.13 cost   | VERIFIED (Tier 2)      |
|     | "True Cost of Fraud™ Study"            |        | true-cost-of-fraud-study-ecommerce-and-retail                | per $1 fraud; 41%  | Authoritative benchmark|
+-----+----------------------------------------+--------+--------------------------------------------------------------+--------------------+------------------------+
| S-06| Merchant Risk Council & Cybersource,   | Tier 2 | https://www.merchantriskcouncil.org/resources/research/      | <20% manual fraud  | VERIFIED (Tier 2)      |
|     | "Global eCommerce Payments & Fraud"    |        | global-fraud-and-payments-report                             | dispute win rate   | Trade survey benchmark |
+-----+----------------------------------------+--------+--------------------------------------------------------------+--------------------+------------------------+
| S-07| Visa Inc. & Verifi,                    | Tier 1 | https://usa.visa.com/dam/VCOM/global/support-legal/          | CE3.0 rule: 2 prior| VERIFIED (Tier 1)      |
|     | "Compelling Evidence 3.0 Specification"|        | documents/visa-compelling-evidence-3-0.pdf                   | orders share IP    | Competitor network rule|
+-----+----------------------------------------+--------+--------------------------------------------------------------+--------------------+------------------------+
| S-08| Verifi (A Visa Solution),              | Tier 1 | https://www.verifi.com/solutions/rapid-dispute-resolution/   | Automated pre-     | VERIFIED (Tier 1/3)    |
|     | "Rapid Dispute Resolution (RDR)"       |        |                                                              | dispute refund     | Vendor documentation   |
+-----+----------------------------------------+--------+--------------------------------------------------------------+--------------------+------------------------+
| S-09| Stripe Inc., "Stripe Dispute Docs &    | Tier 1 | https://stripe.com/docs/disputes                             | $15 US fee, 0.4%   | VERIFIED (Tier 1)      |
|     | Chargeback Protection Policy"          |        | https://stripe.com/radar/chargeback-protection               | cover, fraud only  | Processor public terms |
+-----+----------------------------------------+--------+--------------------------------------------------------------+--------------------+------------------------+
| S-10| Shopify Inc., "Shopify Protect Terms   | Tier 1 | https://help.shopify.com/en/manual/payments/                 | Shop Pay only, 7-d | VERIFIED (Tier 1)      |
|     | of Service & Guidelines"               |        | shopify-protect                                              | fulfillment limit  | Platform documentation |
+-----+----------------------------------------+--------+--------------------------------------------------------------+--------------------+------------------------+
| S-11| Chargeflow Inc., "Product Platform &   | Tier 3 | https://www.chargeflow.io/pricing                            | 25% contingency    | VERIFIED (Tier 3)      |
|     | Public Pricing Structure"              |        |                                                              | take-rate model    | Vendor pricing portal  |
+-----+----------------------------------------+--------+--------------------------------------------------------------+--------------------+------------------------+
| S-12| Justt.ai, "Autonomous Chargeback       | Tier 3 | https://justt.ai/how-it-works/                               | 20%–25% contingency| VERIFIED (Tier 3)      |
|     | Management Overview"                   |        |                                                              | fee for enterprise | Vendor commercial site |
+-----+----------------------------------------+--------+--------------------------------------------------------------+--------------------+------------------------+
| S-13| Chargebacks911, "Mastercard Reason     | Tier 3 | https://chargebacks911.com/chargeback-reason-codes/          | Code 4837 vs 4853; | VERIFIED (Tier 3)      |
|     | Codes & Dispute Field Guide"           |        | mastercard/                                                  | $1k–$5k retainers  | Educational vendor site|
+-----+----------------------------------------+--------+--------------------------------------------------------------+--------------------+------------------------+
| S-14| Chargeblast & Disputifier,             | Tier 3 | https://www.chargeblast.com/pricing                          | $19–$40 alert fee  | VERIFIED (Tier 3)      |
|     | "Dispute Alert Reseller Public Pricing"|        |                                                              | on top of refund   | Reseller public sheets |
+-----+----------------------------------------+--------+--------------------------------------------------------------+--------------------+------------------------+
| S-15| Riskified & Datos Insights,            | Tier 2 | https://www.riskified.com/blog/chargeback-management/        | ~60% abandon 40%+; | VERIFIED (Tier 2)      |
|     | "Dispute Abandonment Survey"           |        |                                                              | 16% volume written | Vendor-sponsored study |
+-----+----------------------------------------+--------+--------------------------------------------------------------+--------------------+------------------------+
| S-16| Consumer Financial Protection Bureau,  | Tier 1 | https://www.consumerfinance.gov/rules-policy/final-rules/     | CFPB 1033 covers   | VERIFIED (Tier 1)      |
|     | "12 CFR Part 1033 Final Rule"          |        | personal-financial-data-rights/                              | consumer; excludes | Federal statutory text |
|     |                                        |        |                                                              | commercial/SMB     |                        |
+-----+----------------------------------------+--------+--------------------------------------------------------------+--------------------+------------------------+
| S-17| Sahamati, "Account Aggregator (AA)     | Tier 1 | https://sahamati.org.in/what-is-account-aggregator/          | Blind data pipe;   | VERIFIED (Tier 1/2)    |
|     | Framework in India: Architecture"      |        |                                                              | RBI regulated AA   | SRO technical standards|
+-----+----------------------------------------+--------+--------------------------------------------------------------+--------------------+------------------------+
| S-18| Intuit QuickBooks, "Small Business     | Tier 2 | https://www.intuit.com/company/press-room/press-releases/    | 45%–50% cash flow  | VERIFIED (Tier 2)      |
|     | Insights: Cash Flow & Late Payments"   |        | small-business-index/                                        | struggle, $17.5k OD| Large-scale SMB survey |
+-----+----------------------------------------+--------+--------------------------------------------------------------+--------------------+------------------------+
| S-19| Mastercard International Incorporated, | Tier 1 | https://developer.mastercard.com/brighterion/                | Brighterion AI &   | VERIFIED (Tier 1)      |
|     | "Test & Learn & Brighterion AI Docs"   |        |                                                              | Test & Learn suite | Official service specs |
+-----+----------------------------------------+--------+--------------------------------------------------------------+--------------------+------------------------+
| S-20| Mastercard Corporate Communications,   | Tier 1 | https://www.mastercard.com/news/press-releases/2024/         | Agent Pay card     | VERIFIED (Tier 1)      |
|     | "Mastercard Agent Pay Infrastructure"  |        | agentic-ai-commerce-infrastructure/                          | limits for AI agent| Corporate press release|
+-----+----------------------------------------+--------+--------------------------------------------------------------+--------------------+------------------------+
| S-21| Plaid Inc., "Open Banking APIs and     | Tier 3 | https://plaid.com/products/signal/                           | Real-time balance  | VERIFIED (Tier 3)      |
|     | Signal Underwriting Models"            |        |                                                              | & transaction APIs | Commercial aggregator  |
+-----+----------------------------------------+--------+--------------------------------------------------------------+--------------------+------------------------+
| S-22| Ramp Business Corporation & Brex Inc., | Tier 3 | https://ramp.com/platform/ai                                 | ML expense policy  | VERIFIED (Tier 3)      |
|     | "Corporate Financial Operations AI"    |        |                                                              | & spend governance | Corporate spend portal |
+-----+----------------------------------------+--------+--------------------------------------------------------------+--------------------+------------------------+
| S-23| Chargeflow Inc., "Upload Evidence API  | Tier 3 | https://www.chargeflow.io/help/upload-evidence-guide         | 5 files, 5MB max,  | VERIFIED (Tier 3)      |
|     | Documentation & Guide"                 |        |                                                              | custom API endpoint| Technical documentation|
+-----+----------------------------------------+--------+--------------------------------------------------------------+--------------------+------------------------+
| S-24| Chargeflow Inc., "Chargeback Workflow  | Tier 3 | https://www.chargeflow.io/blog/                              | Manual review pause| VERIFIED (Tier 3)      |
|     | Automation: Manual Review State Queues"|        | chargeback-workflow-automation                               | queues for high-ris| Vendor technical blog  |
+-----+----------------------------------------+--------+--------------------------------------------------------------+--------------------+------------------------+
| S-25| Shopify App Store, G2 & Trustpilot,    | Tier 2 | https://apps.shopify.com/chargeflow                          | 25% fee drag on    | VERIFIED (Tier 2/3)    |
|     | "Chargeflow Merchant Review Corpus"    |        |                                                              | $500+ AOV; autopilot| Aggregated user reviews|
|     |                                        |        |                                                              | premature submit   |                        |
+-----+----------------------------------------+--------+--------------------------------------------------------------+--------------------+------------------------+
```

---

## 3. Methodological Observations & Citation Integrity

1. **Card Scheme Operating Regulations:** References `[S-01]` (Mastercard Mastercom) and `[S-07]` (Visa CE3.0) define technical and structural constraints that cannot be modified by merchant software. Citing these specifications establishes realistic boundaries for ChargeDossier's dossier layout (<10MB, <18 pages) and First-Party Trust deflection vectors.
2. **Commercial Pricing Transparency:** References `[S-11]` (Chargeflow), `[S-12]` (Justt), and `[S-14]` (Alert resellers) cite publicly advertised pricing sheets. While vendors periodically adjust pricing, the documented 20%–25% contingency model and $19–$40 alert fees accurately represent prevailing market conditions.
3. **Regulatory Feasibility:** Reference `[S-16]` (CFPB Section 1033 Final Rule) was published on October 22, 2024. Confirming that commercial SMB accounts were excluded from the rule’s immediate scope verified that open banking tools face statutory hurdles, substantiating ChargeDossier’s focus on merchant-owned dispute records.
4. **Zero Missing or Fabricated References:** All 25 references exist, are publicly verifiable, and directly substantiate the specific technical, legal, and economic claims made in the manuscript.
