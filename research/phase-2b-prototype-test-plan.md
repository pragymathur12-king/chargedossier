# Phase 2B: Prototype Test Plan & Concept Specification

**Document:** `research/phase-2b-prototype-test-plan.md`  
**Author:** Senior Fintech Product Strategist & Product Discovery Lead  
**Audience:** Non-Technical Integrated MBA Founder (Targeting Mastercard PM, Open Finance, and Agentic AI Roles)  
**Date:** October 2026  
**Status:** Prototype Specification & Workflow Concept (Step 5 Deliverable)

---

## Executive Summary
This document specifies the conceptual wireframe and data architecture for a **ChargeDossier Review Card** designed to test the human-in-the-loop dispute audit concept with merchants.

### Important Disclaimers & Methodological Boundaries:
* **All data displayed in this document is FICTIONAL DEMO DATA** prepared solely to illustrate the proposed review card interface.
* **The purpose of this card is solely to test workflow comprehension and perceived utility during merchant discovery.** It does **not** claim that a checklist guarantees card scheme compliance, eliminates chargebacks, or artificially raises win rates.
* In strict adherence to project instructions, **no application code, interactive website, or software prototype will be built** until merchant discovery interviews confirm that high-ticket operators demand this workflow.

---

## 1. Prototype Workflow Concept: The Pre-Flight Review Card

The proposed concept acts as a **"Pre-Flight Dispute Checklist"** for expensive e-commerce chargebacks ($200 to $2,000). Instead of submitting automatically in the dark, the system analyzes available store data, flags critical missing documents, and presents a 1-click review decision to the store operator.

```
+----------------------------------------------------------------------------------------------------+
|                                    CHARGEDOSSIER PRE-FLIGHT REVIEW CARD                            |
|                                    [FICTIONAL DEMONSTRATION DATA]                                  |
+----------------------------------------------------------------------------------------------------+
| DISPUTE CASE: #DSP-8492-US | ORDER #10842 | DISPUTED AMOUNT: $840.00 USD                           |
| STORE: AudioPeak Electronics (Shopify Plus) | GATEWAY: Stripe Payments                             |
| REASON CODE: Mastercard 4853 (Cardholder Dispute - Goods Not as Described / Defective) [S-01, S-13]  |
| SCHEME DEADLINE: 12 Days Remaining (Acquirer Cutoff: Nov 8, 2026)                                  |
+----------------------------------------------------------------------------------------------------+
| READINESS SCORE: 65 / 100 [NEEDS ATTENTION BEFORE SUBMISSION]                                      |
| Status: 2 Required Evidence Elements Missing Under Mastercard Reason Code 4853 Rules              |
+----------------------------------------------------------------------------------------------------+
```

---

## 2. Granular Data Breakdown & Provenance Mapping

### 2.1 Available Evidence (Verified Automatically via APIs)
The following evidence elements were located, extracted, and structured without human data entry:

| Evidence Element | Extracted Value | Source API & Provenance | Verification Status |
| :--- | :--- | :--- | :---: |
| **Transaction Record** | $840.00 USD, Visa/Mastercard Auth Code `MC-994821`, AVS Match (Full Street & Zip), CVV Passed | **Stripe API** (`/v1/charges/ch_3M84`) | Verified Match |
| **Customer Profile** | Customer: `David Miller`, Account Created: `May 14, 2023` (Tenure: 3.4 years; 4 prior undisputed orders) | **Shopify Admin API** (`/customers/7192`) | High Tenure (FPT Signal [S-02]) |
| **Checkout IP & Device** | IP: `198.51.100.44` (ISP: Comcast, Geolocation: Austin, TX matching delivery state) | **Shopify Order Session Telemetry** | Validated Location |
| **Carrier Tracking** | FedEx Express Tracking `#781299481102`. Scanned "Delivered at Front Porch", Austin, TX on Oct 12, 2026 | **EasyPost / FedEx API** | Delivered Status Confirmed |
| **Terms of Service** | Cardholder checked mandatory checkbox: *"I agree to the 14-day defect inspection & RMA return policy"* | **Shopify Storefront Checkout Log** | Timed & Logged at Checkout |

---

### 2.2 Missing or Weak Evidence Elements (Critical Gaps Flagged)
Under **Mastercard Reason Code 4853 (Goods Defective / Not as Described)** and standard scheme operating guidelines [[S-01](file:///c:/Users/DELL/Documents/antigravity/nifty-brahmagupta/research/source-register.md#s-01-mastercard-developer-documentation-mastercom-api-v6), [S-13](file:///c:/Users/DELL/Documents/antigravity/nifty-brahmagupta/research/source-register.md#s-13-chargebacks911-dispute-rules--field-guide)], simple proof of delivery **does not win a merchandise dispute** because the customer admits receiving the package, but claims the contents were broken or non-functional.

The system flags two critical evidentiary gaps:

> ⚠️ **CRITICAL WARNING 1: ORDER VALUE EXCEEDS $750 — MISSING DIRECT SIGNATURE**  
> * **Scheme Rule:** For orders over $750, card networks and merchant acquirers strongly penalize delivery confirmation that lacks an adult or direct signature.  
> * **Observed Evidence:** FedEx tracking indicates package was left at "Front Porch" with **no signature obtained**.  
> * **Risk:** High probability of issuer rejection if contested on delivery grounds alone.

> ⚠️ **CRITICAL WARNING 2: CUSTOMER COMMUNICATION GAP (NO RMA REQUEST ON FILE)**  
> * **Scheme Rule:** To refute Reason Code 4853, the merchant must prove that the cardholder did not attempt to return the goods or refused to comply with the merchant's agreed return/repair policy [[S-13](file:///c:/Users/DELL/Documents/antigravity/nifty-brahmagupta/research/source-register.md#s-13-chargebacks911-dispute-rules--field-guide)].  
> * **Observed Evidence:** Automated scan of **Zendesk Support API** found **zero incoming support tickets or email inquiries** from `david.miller@example.com`.  
> * **Action Required:** Store operator must confirm whether the buyer ever initiated contact via alternate channels (e.g., direct phone call or Instagram DM).

---

## 3. Strict Card Scheme & Anti-Fraud Compliance Warnings

To ensure ethical and legal compliance, the review card displays permanent, prominent guardrails:

> [!CAUTION]
> **INTEGRITY GUARDRAIL: DO NOT FABRICATE OR ALTER EVIDENCE**  
> * Card network scheme rules (Mastercard Mastercom and Visa VROL) strictly prohibit altering tracking records, forging delivery signatures, or inventing customer correspondence.  
> * Submitting fabricated evidence in formal scheme presentment violates merchant processing agreements and can result in immediate merchant account termination, placement on the MATCH list, and mandatory scheme arbitration fines of **$500 to $1,000+ per violation** [[S-01](file:///c:/Users/DELL/Documents/antigravity/nifty-brahmagupta/research/source-register.md#s-01-mastercard-developer-documentation-mastercom-api-v6), [S-13](file:///c:/Users/DELL/Documents/antigravity/nifty-brahmagupta/research/source-register.md#s-13-chargebacks911-dispute-rules--field-guide)].  
> * If authentic proof cannot be located, the operator must select **Option 3: Accept Dispute & Abandon**.

---

## 4. The Human Approval Decision Interface

The operator is presented with three actionable choices:

```
+----------------------------------------------------------------------------------------------------+
|                                    OPERATOR APPROVAL ACTIONS                                       |
+----------------------------------------------------------------------------------------------------+
| [ ] OPTION 1: APPROVE & SUBMIT AS-IS (NOT RECOMMENDED)                                             |
|     Submits the 5-page dossier using currently available evidence.                                 |
|     System Warning: Readiness Score is 65/100. High probability of issuer rejection.               |
|                                                                                                    |
| [ ] OPTION 2: ATTACH SUPPLEMENTAL PROOF & RE-AUDIT (RECOMMENDED)                                    |
|     Upload internal inspection slip, warehouse packing photo, or customer call recording.         |
|     [ Browse Files... (PDF, JPEG max 5MB) ]                                                        |
|     Add merchant explanatory note (max 500 characters): [ __________________________________ ]     |
|                                                                                                    |
| [ ] OPTION 3: ACCEPT DISPUTE & ABANDON (CUT LOSSES)                                                |
|     Concedes the chargeback immediately. Saves internal staff labor and avoids potential           |
|     processor escalation penalties on weak cases.                                                  |
+----------------------------------------------------------------------------------------------------+
| [ CANCEL ]                                          [ CONFIRM SELECTION & PROCEED ]                |
+----------------------------------------------------------------------------------------------------+
```

---

## 5. Prototype Testing Protocol for Merchant Interviews

When this concept is presented to merchants during discovery interviews:
1. **Show, Don’t Pitch:** The founder will show a static screenshot of this card and say: *"Imagine a $800 dispute hit your store yesterday, and your system generated this review card. Walk me through what you are looking at and what you would click."*
2. **Key Usability Signals to Observe:**
   * Does the operator understand the Readiness Score without explanation?
   * Does the operator find the missing signature warning helpful, or do they find it annoying?
   * Would the operator realistically spend 2 minutes reviewing this card, or would they feel burdened?
3. **Important Reminder:** No interactive code or clickable web prototypes will be engineered until the interview guide and validation criteria are approved.
