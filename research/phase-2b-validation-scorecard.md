# Phase 2B: Validation Scorecard & Decision Rules

**Document:** `research/phase-2b-validation-scorecard.md`  
**Author:** Senior Fintech Product Strategist & Product Discovery Lead  
**Audience:** Non-Technical Integrated MBA Founder (Targeting Mastercard PM, Open Finance, and Agentic AI Roles)  
**Date:** October 2026  
**Status:** Methodological Validation Framework (Step 4 Deliverable)

---

## Executive Summary
This document establishes **objective, evidence-based decision rules** to evaluate the qualitative data collected during merchant discovery interviews. 

To maintain scientific integrity and prevent confirmation bias, this framework:
1. Explicitly defines the boundary between **Strong Behavioral Evidence** and **Weak Anecdotal Opinion**.
2. Pre-defines the criteria that would prove incumbents already solve the problem or that the market segment is unviable.
3. Clarifies the statistical limits of small-sample discovery: **5 to 8 interviews can uncover qualitative workflows and friction patterns, but cannot establish quantitative market-wide demand.**
4. Avoids arbitrary success percentages or pseudo-statistical claims.

---

## 1. Evidence Classification Framework

```
+----------------------------------------------------------------------------------------------------+
|                                    EVIDENCE EVALUATION SPECTRUM                                    |
+------------------------------------+--------------------------------+------------------------------+
| TIER A: STRONG BEHAVIORAL EVIDENCE | TIER B: WEAK OPINION EVIDENCE  | TIER C: DISPROVING EVIDENCE  |
+------------------------------------+--------------------------------+------------------------------+
| - Documented past dollar losses    | - Hypothetical claims ("I'd buy| - Merchant currently uses    |
| - Paid staff hours logged          |   that if it existed")         |   Chargeflow custom uploads  |
| - Canceled software subscriptions  | - Speculation about future     |   with zero complaints       |
| - Concrete operational workarounds | - General agreement without    | - Happy with 25% contingency |
|   (e.g., custom spreadsheets)      |   historical behavioral proof  | - Refuses to review cases    |
+------------------------------------+--------------------------------+------------------------------+
```

---

## 2. Six Explicit Validation Criteria

### Criterion 1: What Counts as Strong Evidence of a Recurring Customer Problem
* **Definition:** The merchant describes specific, repeated, and costly operational friction rooted in verifiable past events.
* **Positive Indicators:**
  * The merchant can cite a specific dispute in the past 90 days where they spent more than 45 minutes manually hunting for delivery slips, chat logs, or inspection records across 3+ platforms.
  * The merchant demonstrates that they currently pay an in-house employee or external contractor specifically to gather and format dispute evidence.
  * The merchant shows documented instances where an illegitimate chargeback was lost specifically because evidence was missing or disorganized.
* **Negative / Disqualifying Indicators:**
  * The merchant considers chargebacks a negligible nuisance (<2 per month) and spends less than 15 minutes a month on them.
  * The merchant accepts chargebacks as an unavoidable cost of goods sold and makes zero attempt to recover them.

### Criterion 2: What Counts as Weak Evidence (Opinions & Hypothetical Interest)
* **Definition:** Stated preferences, polite affirmations, or speculative claims unsupported by past budget or operational behavior.
* **Examples of Weak Evidence:**
  * *"That sounds like a really cool idea; I bet a lot of store owners would use that."* (Third-party speculation).
  * *"I would definitely consider signing up for an app like that if the price was right."* (Non-binding hypothetical interest).
  * *"We care a lot about our dispute win rate."* (Aspirational statement with no accompanying budget or labor investment).
* **Rule:** Stated willingness to buy or generic compliments **must be scored as zero** in validation scoring. Only demonstrated past spend or current painful workarounds qualify as positive validation.

### Criterion 3: Evidence That Existing Tools Already Solve the Problem
* **Definition:** The merchant demonstrates that their existing software stack (Chargeflow, Justt, Stripe built-ins) already fulfills their evidence and control needs without painful friction.
* **Disproving Indicators (Evidence Against ChargeDossier):**
  * The merchant uses Chargeflow, actively utilizes the native **Upload Evidence** dashboard tab or API [[S-23](file:///c:/Users/DELL/Documents/antigravity/nifty-brahmagupta/research/source-register.md#s-23-chargeflow-documentation-upload-evidence-api--dashboard-custom-evidence-guide)], and reports that it seamlessly integrates their custom proof.
  * The merchant has configured Chargeflow’s workflow pause rules [[S-24](file:///c:/Users/DELL/Documents/antigravity/nifty-brahmagupta/research/source-register.md#s-24-chargeflow-documentation-workflow-automation--review-state-management)] to review high-ticket items and is completely satisfied with the review interface.
  * The merchant is enrolled in Shopify Protect or Stripe Chargeback Protection [[S-09](file:///c:/Users/DELL/Documents/antigravity/nifty-brahmagupta/research/source-register.md#s-09-stripe-inc-stripe-dispute-documentation--chargeback-protection-policy), [S-10](file:///c:/Users/DELL/Documents/antigravity/nifty-brahmagupta/research/source-register.md#s-10-shopify-inc-shopify-protect-terms-of-service-and-dispute-guidelines)] and reports that their covered fraud chargebacks are refunded with zero paperwork.
* **Strategic Consequence:** If 3 or more of 5 interviewed merchants report this experience, **the ChargeDossier hypothesis is definitively disproven**, requiring an immediate pivot.

### Criterion 4: Evidence That a Fixed-Fee Model Has a Credible Economic Advantage
* **Definition:** The merchant actively tracks and resents the total dollar amount paid under performance-contingency pricing (25% on wins), expressing a clear preference for a predictable monthly software subscription.
* **Positive Indicators:**
  * The merchant can state how much they paid in contingency fees last month (e.g., *"We paid Chargeflow over $1,200 last month on our furniture returns"*) and expresses active frustration at the margin loss.
  * The merchant has previously negotiated or attempted to negotiate lower take-rates or enterprise fee caps with their dispute vendor.
  * The merchant states that predictable monthly operational expenses are preferred by their finance/accounting team over variable 25% deductions.
* **Negative / Disqualifying Indicators:**
  * The merchant strongly prefers contingency pricing because *"I don't have to think about it, and if we lose, I pay zero dollars."*

### Criterion 5: Evidence That Merchants Want a Human-Review Step
* **Definition:** The merchant explicitly refuses or distrusts 100% blind autopilot automation because the stakes of high-dollar chargebacks are too high.
* **Positive Indicators:**
  * The merchant turned off automated submission features in Chargeflow or Stripe because an automated tool submitted an incomplete case prematurely.
  * The merchant insists on inspecting every dispute over $200 before it leaves the building to ensure warehouse tracking, carrier signatures, and customer email threads are attached.
  * The merchant expresses willingness to spend 2 to 3 minutes reviewing a pre-compiled evidence checklist if it raises their recovery odds on expensive items.
* **Negative / Disqualifying Indicators:**
  * The merchant says: *"I don't have 2 minutes to review anything; I want a bot to handle 100% of it in the background, even if we lose a few."*

### Criterion 6: Evidence That the Proposed Segment is Too Difficult to Reach
* **Definition:** Structural barriers in recruiting high-AOV e-commerce operators prevent an independent founder from conducting reliable product discovery.
* **Disqualifying Indicators:**
  * Outreach to 80 qualified US high-AOV merchant operators yields fewer than **2 completed interviews** (response rate < 2.5%).
  * Operators refuse to discuss dispute operations due to strict corporate confidentiality, legal gag orders, or fraud policy sensitivities.
* **Strategic Consequence:** If the segment is unreachable within 5 business days, the project must pivot to **Opportunity C (Agentic FinOps)**, where user access is universal.

---

## 3. Methodological Realities: What 5 to 8 Interviews Can and Cannot Prove

```
+----------------------------------------------------------------------------------------------------+
|                                    QUALITATIVE METHODOLOGY BOUNDARIES                              |
+------------------------------------+--------------------------------+------------------------------+
| WHAT 5–8 INTERVIEWS CAN PROVE      | WHAT 5–8 INTERVIEWS CANNOT PROVE| METHODOLOGICAL GUARDRAILS    |
+------------------------------------+--------------------------------+------------------------------+
| - Operational workflows & tools    | - Market-wide adoption rates   | - Never calculate % of total |
| - Acute, recurring friction points | - Statistical pricing elasticity|   market demand from 5 calls |
| - Specific failure modes of tools  | - TAM or revenue forecasts     | - Focus on depth of past     |
| - Real vocabulary and mental models| - Definitive macro win rates   |   behavior, not headcount   |
+------------------------------------+--------------------------------+------------------------------+
```

### 1. The Value of Small-Sample Discovery (The Power of 5)
Pioneered by Nielsen Norman Group and modern product discovery methodology (Teresa Torres, Steve Blank), **5 to 8 in-depth qualitative interviews typically uncover 80% to 85% of recurring operational workflow usability issues and behavioral patterns**. If five independent high-ticket store owners unprompted describe the exact same frustration—such as losing $800 chargebacks because an automated tool submitted before a signature slip was found—that pattern represents an authentic, recurring operational failure.

### 2. The Limits of Small-Sample Discovery
* **No Statistical Significance:** Five interviews **cannot** prove that 70% of all US merchants want a new tool. It is statistically invalid to claim: *"3 out of 5 merchants liked our idea, so 60% of the market will buy it."*
* **Selection Bias:** Merchants who agree to an interview about chargebacks may be disproportionately frustrated with disputes compared to the broader, silent population.
* **Qualitative Goal:** The objective is to validate **problem existence and workflow fit**, not to project macro market size.

---

## 4. Phase 2B Decision Scorecard

| Validation Test | Minimum Evidence Required to Pass | Disproving Evidence (Immediate Pivot Trigger) |
| :--- | :--- | :--- |
| **Test 1: Problem Existence** | At least 3 of 5 merchants describe acute manual labor (>30 min) or lost revenue on expensive disputes ($200+). | 4 of 5 merchants state that chargebacks are negligible or fully automated with zero friction. |
| **Test 2: Incumbent Gap** | At least 2 merchants report specific dissatisfaction with automated bots (premature submission, lack of custom proof, or 25% take-rate). | Merchants demonstrate that Chargeflow’s native custom evidence upload [[S-23](file:///c:/Users/DELL/Documents/antigravity/nifty-brahmagupta/research/source-register.md#s-23-chargeflow-documentation-upload-evidence-api--dashboard-custom-evidence-guide)] completely solves their needs. |
| **Test 3: Review Demand** | At least 3 merchants state they would actively prefer a 2-minute human review checkpoint on orders >$200 over 100% blind automation. | Merchants state they refuse to review disputes manually and insist on 100% hands-off autopilot. |
| **Test 4: Economic Viability** | At least 2 merchants indicate that paying $99/mo or a capped fee is superior to surrendering 25% of large recoveries. | Merchants state they will only ever accept zero-risk contingency ("no win, no pay"). |
| **Test 5: Segment Reach** | At least 4 qualified interviews booked from 80 outreach attempts (>5% conversion). | Fewer than 2 interviews booked after 80 outreach attempts (<2.5% conversion). |

> [!IMPORTANT]
> **GO / NO-GO RULE:** If the study fails on Test 2 or Test 3 (incumbents already solve the problem or merchants reject human review), **the ChargeDossier concept will be formally abandoned, triggering an immediate pivot to Opportunity C (Agentic FinOps).**
