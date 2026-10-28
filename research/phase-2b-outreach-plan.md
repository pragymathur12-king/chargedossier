# Phase 2B: Merchant Discovery Sprint & Outreach Plan

**Document:** `research/phase-2b-outreach-plan.md`  
**Author:** Senior Fintech Product Strategist & Product Discovery Lead  
**Audience:** Non-Technical Integrated MBA Founder (Targeting Mastercard PM, Open Finance, and Agentic AI Roles)  
**Date:** October 2026  
**Status:** Discovery Protocol & Outreach Plan (Steps 1, 2, and 3 Deliverable)

---

## Executive Summary
This document operationalizes the **Phase 2B Merchant Discovery Sprint**. Its objective is to test whether US e-commerce merchants selling high-ticket goods ($200 to $2,000 Average Order Value) have an unsolved, painful problem with dispute evidence quality, transparency, control, and contingency pricing.

In strict compliance with project rules:
* We first audit existing evidence regarding Chargeflow to ensure we do not misrepresent incumbent capabilities.
* We provide a neutral, 12-question interview guide focused exclusively on **actual past behavior** (no leading questions).
* We establish a 48-hour outreach plan across three legitimate channels with screening criteria and confidentiality protocols.
* **No outreach has been initiated, and no contacts have been messaged.** The founder will review, approve, and execute outreach.

---

## Step 1: Existing Evidence Audit — Chargeflow Capabilities vs. Merchant Reality

Before designing interview questions, we rigorously audited the claim formulated in Phase 2A that *"Chargeflow users cannot review, customize, or add evidence before submission."*

```
+----------------------------------------------------------------------------------------------------+
|                                    CHARGEFLOW CAPABILITY AUDIT                                      |
+------------------------------------+--------------------------------+------------------------------+
| DOCUMENTED CAPABILITY              | OFFICIAL TECHNICAL REALITY     | OBSERVED USER FRICTION       |
+------------------------------------+--------------------------------+------------------------------+
| Custom Evidence Upload             | **VERIFIED FEATURE (S-23)**    | Merchants on full autopilot  |
| - Up to 5 files (PDF/JPG/PNG)      | Native dashboard button and    | miss the 5-day pre-deadline  |
| - Max 5MB per file                 | public API endpoint exist.     | window before submission.    |
| - Up to 500 characters of notes    |                                |                              |
+------------------------------------+--------------------------------+------------------------------+
| Workflow Pause Rules               | **VERIFIED FEATURE (S-24)**    | If a merchant fails to set up|
| - Pause high-ticket items          | Rules engine supports pausing  | custom rules, AI submits     |
| - State tracking (Reviewed/Submit) | disputes for internal review.  | automatically by default.    |
+------------------------------------+--------------------------------+------------------------------+
```

### 1.1 The Official Product Reality (What Chargeflow Actually Does)
* **Custom Evidence Feature Exists:** Chargeflow's official documentation confirms that merchants can manually attach supplemental proof. In the merchant dashboard, users can open any dispute in "Processing" or "Optimize Dispute" status, navigate to the **Take Action** tab, select **Upload Evidence**, drag-and-drop up to 5 files (PDF, JPEG, PNG, max 5MB each), and provide up to 500 characters of custom notes [[S-23](file:///c:/Users/DELL/Documents/antigravity/nifty-brahmagupta/research/source-register.md#s-23-chargeflow-documentation-upload-evidence-api--dashboard-custom-evidence-guide)].
* **Programmatic Upload API Exists:** Chargeflow maintains an active public API endpoint (`POST /public/2025-04-01/disputes/{disputeId}/evidence`) allowing programmatic submission of additional files categorized by evidence type (`additional_evidence`, `customer_communication`, `invoice`) [[S-23](file:///c:/Users/DELL/Documents/antigravity/nifty-brahmagupta/research/source-register.md#s-23-chargeflow-documentation-upload-evidence-api--dashboard-custom-evidence-guide)].
* **Pause Rules Exist:** Chargeflow documents workflow rules enabling stores to hold high-ticket or VIP customer disputes in a "Review" state prior to processor submission [[S-24](file:///c:/Users/DELL/Documents/antigravity/nifty-brahmagupta/research/source-register.md#s-24-chargeflow-documentation-workflow-automation--review-state-management)].

### 1.2 The Observed User Friction (Why Some Merchants Complain)
* **Default Autopilot Rushing:** By default, Chargeflow is marketed and configured as an "autopilot" hands-off tool [[S-11](file:///c:/Users/DELL/Documents/antigravity/nifty-brahmagupta/research/source-register.md#s-11-chargeflow-inc-product-platform--public-pricing-structure)]. Many merchants never configure custom pause rules. Consequently, when a dispute hits, the AI scrapes available store data and submits the dossier within 24 to 48 hours to beat network deadlines. If warehouse staff locate a signed delivery slip on day 4, the case is already locked [[S-25](file:///c:/Users/DELL/Documents/antigravity/nifty-brahmagupta/research/source-register.md#s-25-shopify-app-store-g2--trustpilot-chargeflow-merchant-review-corpus)].
* **Distinction: User Error vs. Product Limitation:** The friction is **not** that Chargeflow lacks the technical capability to accept custom evidence. The friction is **workflow mismatch**: store owners wanting an active human-in-the-loop review copilot find autopilot tools too eager to submit without explicit human verification.
* **Contradicting Evidence Recorded:** Chargeflow holds a **4.5 to 4.8-star average rating** on the Shopify App Store across hundreds of reviews [[S-25](file:///c:/Users/DELL/Documents/antigravity/nifty-brahmagupta/research/source-register.md#s-25-shopify-app-store-g2--trustpilot-chargeflow-merchant-review-corpus)]. The vast majority of merchants are satisfied with hands-off automation. Our interview study must therefore treat human-in-the-loop demand as an **unproven hypothesis** restricted to specific high-ticket categories.

---

## Step 2: Neutral 12-Question Merchant Interview Guide

**Target Interviewee:** US-based E-Commerce Founders, Directors of Operations, or Customer Support Leads at D2C brands selling products with **Average Order Values over $150** (e.g., consumer electronics, designer jewelry, custom furniture, specialist sporting gear).

### Methodological Principles:
* Ask exclusively about **actual past behavior** in the last 6 months.
* **Zero leading questions:** Never ask *"Would you like an AI tool that audits your evidence?"* or *"Do you think 25% is too expensive?"*
* Treat verbal enthusiasm (*"That sounds great!"*) as polite noise, not validation of willingness to pay.

```
+----------------------------------------------------------------------------------------------------+
|                                    12-QUESTION INTERVIEW PROTOCOL                                  |
+------------------------------------+--------------------------------+------------------------------+
| WARM-UP & VOLUME                   | THE LAST EXPENSIVE DISPUTE     | TOOLS, COSTS & SWITCHING     |
| Q1: Dispute volume & typical AOV   | Q3: Systems & evidence pulled  | Q7: Tools used & actual fees |
| Q2: Walkthrough of last big case   | Q4: Biggest operational time-sink Q8: Experience with auto-bots|
|                                    | Q5: Outcome: won, lost, dropped? Q9: Paid for manual review?  |
|                                    | Q6: Missing or contested proof | Q10: Fight vs. drop threshold|
|                                    |                                | Q11: Switching triggers      |
|                                    |                                | Q12: Measurable ROI metric   |
+------------------------------------+--------------------------------+------------------------------+
```

### The 12 Interview Questions:

1. **Context & Scale:** *"Roughly how many payment disputes or chargebacks does your store receive in a typical month, and what is the typical price point of the items being disputed?"*
2. **Recent Expensive Incident:** *"Thinking back to your most recent high-dollar chargeback (say, over $300), walk me through what happened from the moment you noticed the dispute until it was closed."*
3. **Systems & Data Hunting:** *"Which specific software tools or files did you have to open to find proof for that dispute (e.g., Shopify, carrier portals, customer support emails, warehouse logs)?"*
4. **Time & Labor Allocation:** *"What specific step in preparing that response took the most actual clock time for you or your team?"*
5. **Outcome & Result:** *"Did you end up submitting evidence for that case, writing it off, or issuing a refund? What was the ultimate financial outcome?"*
6. **Missing Evidence Friction:** *"Was there any piece of proof you wished you had attached—like a signed delivery slip, a clear return policy acknowledgment, or a customer chat log—that was difficult or impossible to locate in time?"*
7. **Current Tooling & Pricing:** *"What software or external services, if any, do you currently use to handle or prevent chargebacks, and how are you billed for them (e.g., flat monthly fee, percentage of won cases, per-alert fee)?"*
8. **Experience with Automation Control:** *"If you use an automated tool (like Chargeflow, Justt, or processor tools), how much visibility and control do you have over the exact evidence packet that gets sent to the bank before it is submitted?"*
9. **Experience with Premature Submissions:** *"Have you ever had an automated tool or team member submit a dispute response that you felt was incomplete, generic, or sent before you were ready? What was the result?"*
10. **Triage & Abandonment Rules:** *"Do you have a strict dollar cutoff or rule of thumb for deciding whether a dispute is worth fighting versus immediately accepting and writing off?"*
11. **Switching Triggers:** *"What specific frustration or failure in your current dispute process would cause you to actively search for and switch to a different product?"*
12. **Measurable ROI Requirement:** *"If you were evaluating a dedicated software tool to assist with high-dollar disputes, what exact measurable outcome (e.g., hours saved, win-rate lift, lower fees) would you need to see in the first 30 days to justify paying for it?"*

---

## Step 3: 48-Hour Outreach Test Plan

```
+----------------------------------------------------------------------------------------------------+
|                                    48-HOUR OUTREACH CHANNEL ARCHITECTURE                           |
+------------------------------------+--------------------------------+------------------------------+
| CHANNEL 1: LINKEDIN DIRECT         | CHANNEL 2: E-COM COMMUNITIES   | CHANNEL 3: PUBLIC D2C EMAIL  |
| Target: E-com Ops Leads & Founders | Target: High-AOV store owners  | Target: Publicly listed info/|
| Volume: 40 personalized invites    | on Shopify Community & Reddit  | support contacts of stores   |
| Message: Under 300 characters      | Volume: 15 targeted DM requests| Volume: 25 structured emails |
+------------------------------------+--------------------------------+------------------------------+
| TOTAL TARGET SAMPLE: 80 outreach contacts | EXPECTED QUALIFIED INTERVIEWS: 5 to 8 completed        |
+----------------------------------------------------------------------------------------------------+
```

### 3.1 Three Outreach Channels
1. **Channel 1 (LinkedIn Direct Outreach):** Search for US-based professionals with titles: *"Head of E-Commerce," "E-Commerce Operations Manager," "Director of Customer Experience,"* or *"Founder"* at companies operating Shopify Plus stores in electronics, jewelry, furniture, and luxury retail.
2. **Channel 2 (Specialized Merchant Communities):** Engage active contributors in vetted e-commerce communities (Shopify Community Forums, r/ecommerce, r/shopify, and e-commerce Slack channels) who have posted about chargebacks or fraud in the past 90 days.
3. **Channel 3 (Publicly Listed Merchant Contact Emails):** Reach out to publicly available business contact or partnership email addresses of independent US D2C brands selling products over $200.

---

### 3.2 Outreach Copy & Templates

#### A. LinkedIn Connection Message (<300 Characters)
> *"Hi [First Name], I’m an MBA student researching how high-ticket e-commerce brands handle expensive payment disputes and chargebacks. Not selling anything—just conducting 15-minute academic research on merchant workflows. Would love to connect and learn from your experience."*

#### B. LinkedIn Follow-Up Request (After Connection Accepted)
> *"Hi [First Name], thanks for connecting! I'm conducting an independent academic study on how growing US e-commerce brands manage the evidence-collection process for high-dollar payment disputes.  
>  
> If you've personally overseen or handled chargebacks in the past 6 months, could I steal 15 minutes of your time for a quick, confidential chat? Happy to share our synthesized payments benchmarking findings with you afterward as a thank-you.  
>  
> Does anytime Thursday or Friday afternoon work for a brief call?"*

#### C. Cold Email Template for Public Business Contacts
> **Subject:** Academic research on chargeback workflows for [Store Name]  
>  
> *"Dear [First Name / Operations Team at Store Name],*  
>  
> *I hope this note finds you well. My name is [Founder Name], and I am an Integrated MBA student conducting research on payment dispute workflows and evidence management in high-ticket US e-commerce.*  
>  
> *I am reaching out because [Store Name] sells high-quality, specialized products where dispute dynamics differ significantly from low-ticket apparel. I am not selling software or offering consulting services—this is strictly academic research for my graduate case study.*  
>  
> *If a member of your team who handles merchant disputes would be open to a brief 15-minute confidential interview about your past workflow experiences, I would be immensely grateful. As a token of appreciation, I am happy to share our completed payments industry benchmarking report once finalized.*  
>  
> *Thank you very much for your time and consideration.*  
>  
> *Sincerely,*  
> *[Founder Name]*  
> *Integrated MBA Candidate (Class of 2027)*  
> *[University / Contact Information]"*

---

### 3.3 Strict Screening Criteria
To ensure interview data is statistically meaningful and untainted by unqualified participants, an interviewee must pass all three screening filters:
1. **Geography & Channel:** US-based direct-to-consumer (D2C) e-commerce merchant operating an active online store (Shopify, WooCommerce, BigCommerce, or custom).
2. **Product Price Point:** Sells physical products with an Average Order Value (AOV) of **$150 or higher**.
3. **Direct Operational Experience:** Must have **personally handled, reviewed, or decided to fight/abandon at least 3 payment disputes** in the preceding 6 months. (Consultants, marketing agencies, and software salespeople are excluded).

---

### 3.4 Outreach & Interview Tracking Table

| Outreach ID | Merchant / Store Name | Primary Category | Estimated AOV | Outreach Channel | Date Sent | Response Status | Screened & Qualified? | Interview Date | Key Behavioral Takeaways |
| :---: | :--- | :--- | :---: | :---: | :---: | :---: | :---: | :---: | :--- |
| **OUT-01** | *[Pending Outreach]* | Consumer Electronics | $350 | LinkedIn | — | Pending | — | — | — |
| **OUT-02** | *[Pending Outreach]* | Designer Furniture | $850 | Email | — | Pending | — | — | — |
| **OUT-03** | *[Pending Outreach]* | Fine Jewelry | $600 | Community | — | Pending | — | — | — |
| **OUT-04** | *[Pending Outreach]* | Specialty Sporting Goods | $280 | LinkedIn | — | Pending | — | — | — |
| **OUT-05** | *[Pending Outreach]* | Luxury Apparel / Watches | $1,200 | Email | — | Pending | — | — | — |

---

### 3.5 Data Confidentiality & Sensitive Information Plan
* **No PII or PAN Collection:** Under no circumstances will interview notes record customer names, Primary Account Numbers (PANs), credit card CVVs, or customer shipping addresses.
* **Redaction & Anonymization:** In written interview notes, store names will be anonymized (e.g., *"Merchant A — High-End Audio Retailer"*).
* **Aggregated Findings Only:** All research conclusions will be documented as aggregated behavioral patterns rather than company-specific disclosures.

> [!IMPORTANT]
> **OPERATIONAL GUARDRAIL:** No outreach messages will be dispatched until the founder explicitly approves this guide and schedule.
