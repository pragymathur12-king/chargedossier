# ChargeDossier: Presentation Slide-by-Slide Improvement Log & Coaching Guide

**Document:** `docs/presentation-improvement-log.md`  
**Target Deck:** `docs/presentation.pdf` & `docs/interview-presentation.html` (12 Slides &middot; 16:9 Aspect Ratio)  
**Candidate:** Pragy Mathur &middot; Integrated MBA Candidate (Class of 2027) &middot; `pragymathur12@gmail.com`  
**Target Roles:** General Associate Product Manager (APM) &middot; Target Companies: Mastercard, Visa, Razorpay, Fintechs  
**Date:** October 30, 2026  
**Status:** Complete Slide-by-Slide Audit & Interview Delivery Coaching  

---

## 1. 5-Minute Presentation Time Budget

```
+----------------------------------------------------------------------------------------------------+
| TABLE 1: 5-MINUTE INTERVIEW PRESENTATION TIME BUDGET                                               |
+-------+-----------------------------+--------------+-----------------------------------------------+
| SLIDE | TITLE                       | TIME BUDGET  | CORE APM MESSAGE TO CONVEY                    |
+-------+-----------------------------+--------------+-----------------------------------------------+
| 01    | Cover & Project Identity    | 0:00 - 0:25  | Name, candidate background, working prototype |
| 02    | Executive Summary           | 0:25 - 1:00  | 4-pillar overview: Problem, Build, Test, WTP  |
| 03    | Three Evidence Failure Modes| 1:00 - 1:40  | Missing, Contradictory, Irrelevant taxonomy   |
| 04    | Product Hypothesis          | 1:40 - 2:20  | $49 SaaS vs 25% contingency fee; rules vs LLMs|
| 05    | 7-Step Operator Workflow    | 2:20 - 3:00  | 4-tab viewer, gap remediation, approval lock  |
| 06    | System Architecture         | 3:00 - 3:35  | Zero dependencies; prototype vs enterprise API|
| 07    | Decision Framework Math     | 3:35 - 4:10  | Gross (100) - Penalties = Net; 3 triage tiers |
| 08    | Synthetic Benchmark Scenarios| 4:10 - 4:55 | Exact values: DSP-1049, 2081, 3312, 4190      |
| 09    | Testing & Reliability       | 4:55 - 5:25  | 24 tests pass; microsecond benchmark latency  |
| 10    | Research & Market Context   | 5:25 - 5:55  | Mastercom v6, First-Party Trust 5002, CFPB 1033|
| 11    | Limitations & Validation    | 5:55 - 6:25  | Epistemic discipline; Phase 2B discovery plan |
| 12    | Conclusion & Public Links   | 6:25 - 7:00  | 5 APM competencies; live demo & repo links    |
+-------+-----------------------------+--------------+-----------------------------------------------+
```

---

## 2. Slide-by-Slide Audit & Improvement Classification

```
+----------------------------------------------------------------------------------------------------+
| TABLE 2: SLIDE-BY-SLIDE AUDIT REGISTER                                                             |
+----+-----------------------+-----------+-----------------------------------+-----------------------+
| SL | SLIDE TITLE           | SEVERITY  | IMPROVEMENT OPPORTUNITY           | DELIVERY COACHING     |
+----+-----------------------+-----------+-----------------------------------+-----------------------+
| 01 | Cover & Identity      | OPTIONAL  | Keep intro under 25s; don't dwell | Hook interviewer on   |
|    |                       |           | on tech stack on slide 1          | high-ticket margin drag|
+----+-----------------------+-----------+-----------------------------------+-----------------------+
| 02 | Executive Summary     | IMPORTANT | Explicitly name the user persona  | "The user is an ops   |
|    |                       |           | (Ops Lead) vs buyer (CFO)         | lead; the buyer is CFO|
+----+-----------------------+-----------+-----------------------------------+-----------------------+
| 03 | Three Failure Modes   | OPTIONAL  | Emphasize that bots cause self-   | Contrast manual review|
|    |                       |           | inflicted losses on in-transit POD| fatigue with bot blind|
+----+-----------------------+-----------+-----------------------------------+-----------------------+
| 04 | Product Hypothesis    | IMPORTANT | Clarify that $49 SaaS fee is a    | "We modeled a $49 SaaS|
|    |                       |           | hypothesis for Phase 2B testing   | price point to test"  |
+----+-----------------------+-----------+-----------------------------------+-----------------------+
| 05 | Product Workflow      | OPTIONAL  | Highlight that human approval     | Emphasize human-in-the|
|    |                       |           | locks the state immutably         | loop control point    |
+----+-----------------------+-----------+-----------------------------------+-----------------------+
| 06 | System Architecture   | IMPORTANT | Reiterate why zero npm packages   | Frame zero-dependency |
|    |                       |           | matters for security & compliance | as enterprise hygiene |
+----+-----------------------+-----------+-----------------------------------+-----------------------+
| 07 | Decision Framework    | OPTIONAL  | Walk through the mathematical     | Show how contradiction|
|    |                       |           | deduction formula visually        | penalties drive Tier C|
+----+-----------------------+-----------+-----------------------------------+-----------------------+
| 08 | Synthetic Cases       | IMPORTANT | Focus on DSP-4190 dynamic lift    | DSP-4190 is your star |
|    |                       |           | (73 to 100) as the "Aha!" moment  | demo: 73 -> 100 in 15s|
+----+-----------------------+-----------+-----------------------------------+-----------------------+
| 09 | Testing & Reliability | IMPORTANT | Cite pure latency (~0.01ms) from  | Mention tests/        |
|    |                       |           | dedicated benchmark script        | benchmark.js script   |
+----+-----------------------+-----------+-----------------------------------+-----------------------+
| 10 | Research Context      | IMPORTANT | Explain how CFPB Section 1033     | Strategic PM call: why|
|    |                       |           | insight prevented a pivot failure | dispute data > open bk|
+----+-----------------------+-----------+-----------------------------------+-----------------------+
| 11 | Limitations & Roadmap | IMPORTANT | Reiterate that 0 merchant inter-  | "A prototype proves   |
|    |                       |           | views have occurred yet (paused)  | code, not customer PMF|
+----+-----------------------+-----------+-----------------------------------+-----------------------+
| 12 | Conclusion & Links    | IMPORTANT | Anchor APM competencies across    | Map competencies to   |
|    |                       |           | Mastercard, Visa, and Razorpay    | target job description|
+----+-----------------------+-----------+-----------------------------------+-----------------------+
```

---

## 3. Detailed Slide-by-Slide Analysis

### Slide 1: Cover & Project Identity
* **What Works Well:** Obsidian dark theme (`#060709`), restrained red/orange accents, clear candidate metadata, test pass badge (24/24), and prominent independent disclaimer.
* **Refinement (OPTIONAL):** Keep verbal introduction brisk (~20–25 seconds). Do not recite technical file structures; immediately pivot to the commercial problem.
* **Speaker Delivery Tip:** *"I'm Pragy Mathur, an Integrated MBA candidate, and today I'm presenting ChargeDossier: an evidence-quality review copilot built to solve the high-ticket payment dispute dilemma for e-commerce merchants."*

### Slide 2: Executive Summary (4-Pillar Grid)
* **What Works Well:** 4-quadrant layout (The Problem, What Was Built, What Was Verified, Unvalidated Claims) provides complete strategic clarity in 45 seconds.
* **Refinement (IMPORTANT):** Verbally specify the user persona. State clearly that the day-to-day user is the **Merchant Operations Lead / Risk Analyst** (who currently spends 45 minutes digging through Zendesk and FedEx), while the economic buyer is the **Founder / CFO / Head of E-Commerce** (who sees the 25% contingency take-rate on the P&L).
* **Speaker Delivery Tip:** *"To give you the executive summary up front: ChargeDossier bridges the gap between merchant operational fatigue and card scheme compliance. We verified 24 automated tests in milliseconds, but as a disciplined PM, I separate verified software behavior from unvalidated customer demand."*

### Slide 3: The Three Evidence Failure Modes
* **What Works Well:** The 3-way taxonomy (Missing, Contradictory, Irrelevant) is brilliant product framing. It demonstrates that dispute losses are structural and behavioral, not merely "bad luck."
* **Refinement (OPTIONAL):** Emphasize Failure Mode B (Contradictory evidence). Point out that generic automated bots frequently trigger self-inflicted losses by submitting in-transit tracking scans without human pre-flight review.
* **Speaker Delivery Tip:** *"Disputes fail for three reasons: missing return policies on merchandise defect claims, contradictory files like carrier weather delays, and irrelevant files like submitting terms of service against card theft claims. Automated bots blindly submit these contradictions; ChargeDossier catches them before submission."*

### Slide 4: The Product Hypothesis
* **What Works Well:** Quantifies the unit economics comparison on a $1,000 order ($250 contingency fee vs. $49 flat SaaS = $201 net advantage). Articulates why deterministic rules beat generative LLMs (zero hallucination in adversarial compliance).
* **Refinement (IMPORTANT):** Clarify verbally that the $49/month price is an unvalidated pricing hypothesis to be tested in Phase 2B interviews.
* **Speaker Delivery Tip:** *"Why build a copilot instead of a 25% autopilot bot? On an $1,150 bed frame, a 25% take-rate extracts $287.50—destroying operating margin. Our hypothesis is that merchants will gladly pay a flat $49 SaaS fee if our tool takes under 90 seconds to assemble and audit evidence."*

### Slide 5: The 7-Step Operator Workflow
* **What Works Well:** Clear linear journey from 4-tab evidence ingestion through gap remediation to Mastercom dossier compilation and human review lock.
* **Refinement (OPTIONAL):** Emphasize Step 6 (Human Review Lock). Contrast this with autopilot tools that submit files without operator awareness.
* **Speaker Delivery Tip:** *"Here is the operator journey: four clean tabs aggregate order metadata, payment tokens, carrier scans, and support logs. One click runs the audit; if a policy is missing, the operator attaches it interactively. Once verified, the operator explicitly approves the submission, locking the dossier for acquiring records."*

### Slide 6: System Architecture & Dual Execution
* **What Works Well:** Contrasts implemented components (rules engine, state machine, generator, server, client controller) with future enterprise integrations (Mastercom v6 API, Stripe dispute API, carrier webhooks).
* **Refinement (IMPORTANT):** Highlight why zero external npm dependencies was an intentional architectural choice for fintech: eliminating third-party supply chain vulnerabilities and ensuring zero runtime bloat.
* **Speaker Delivery Tip:** *"Architecturally, the system runs with zero external npm dependencies in native Node.js. It achieves dual execution: a local REST API for developers and a standalone in-browser engine on GitHub Pages for instant recruiter evaluation."*

### Slide 7: Deterministic Decision Framework Math
* **What Works Well:** Displays the exact formula from `src/engine.js`: Gross Score (Payment 30, Fulfillment 35, Policies 15, Trust 20) minus Contradiction Penalties equals Net Score.
* **Refinement (OPTIONAL):** Walk through how contradiction penalties (-20 for address mismatch, -25 for fraud affirmation) forcefully drive deficient cases into Tier C (<60).
* **Speaker Delivery Tip:** *"The decision engine uses a bounded additive heuristic. Up to 100 gross points are awarded across four pillars. However, detected contradictions—such as delivery to an unverified freight forwarder or a package in transit—trigger heavy penalties that immediately drop deficient claims into Tier C for loss acceptance."*

### Slide 8: Synthetic Case Benchmark Evaluation
* **What Works Well:** The exact table with all 4 cases: DSP-1049 ($349, 100/100, Tier A), DSP-2081 ($295, 22/100, Tier C), DSP-3312 ($850, 2/100, Tier C), and DSP-4190 ($1,150, 73 -> 100/100, Tier A).
* **Refinement (IMPORTANT):** Make DSP-4190 your centerpiece demonstration moment. Walk through how catching a missing warranty policy elevates the score by 27 points and turns an automatic loss into an approval.
* **Speaker Delivery Tip:** *"Here is how the engine behaves across our four synthetic benchmarks. Case DSP-1049 is our clean happy path. Cases DSP-2081 and DSP-3312 demonstrate early loss acceptance: rejecting unwinnable cases saves 45 minutes of labor. And Case DSP-4190 is our star scenario: an initial score of 73 is elevated to 100 when the operator attaches the missing return policy."*

### Slide 9: Testing & Reliability
* **What Works Well:** Breakdown of 24 automated tests across 3 suites (Rules Engine, HTTP Server, E2E Workflows).
* **Refinement (IMPORTANT):** Mention the dedicated performance benchmark script ([`tests/benchmark.js`](file:///C:/Users/DELL/Documents/antigravity/nifty-brahmagupta/tests/benchmark.js)), highlighting mean pure latency of ~0.01 ms (10 microseconds) and perfect mathematical determinism ($\sigma^2 = 0.0000$).
* **Speaker Delivery Tip:** *"We validated reliability through 24 native automated tests passing in 312 milliseconds. In dedicated micro-benchmarks across 1,000 iterations, pure engine calculation executes in 10 microseconds with zero score variance."*

### Slide 10: Research & Market Context
* **What Works Well:** Citations for Mastercom v6 API [[S-01]], First-Party Trust Reason Code 5002 [[S-02]], CFPB Section 1033 Final Rule [[S-16]], and LexisNexis [[S-05]].
* **Refinement (IMPORTANT):** Share the strategic PM decision regarding CFPB Section 1033: explaining that reading the statutory exclusion of commercial accounts saved the project from regulatory dead-ends and pivoted it into merchant dispute data.
* **Speaker Delivery Tip:** *"Every architectural decision is grounded in our 25-source register. For example, reading the statutory text of CFPB Section 1033 revealed that commercial bank accounts were excluded from open banking rules. That insight steered us away from unviable open banking underwriting and directly into payment disputes where merchants hold full data ownership."*

### Slide 11: Limitations & Future Validation Roadmap
* **What Works Well:** Uncompromising epistemic discipline: explicitly lists what is not validated (customer WTP, operator review tolerance, zero live customer interviews conducted to date).
* **Refinement (IMPORTANT):** Deliver this slide with pride. Senior PM interviewers respect candidates who know the limits of their data more than candidates who claim false product-market fit.
* **Speaker Delivery Tip:** *"A prototype proves software execution, not customer demand. I am transparent about our boundaries: customer willingness to pay $49 a month and operator tolerance for review friction are unproven hypotheses. Our Phase 2B plan outlines discovery interviews with eight verified merchants to validate or kill these assumptions."*

### Slide 12: Conclusion & Public Deliverables
* **What Works Well:** Directly maps competencies to General APM requirements across Mastercard, Visa, Razorpay, and fintechs, supported by live links.
* **Refinement (IMPORTANT):** Tailor your verbal closing to the specific interviewing company (e.g., scheme network integrity at Mastercard/Visa, merchant webhook tooling and export payments at Razorpay).
* **Speaker Delivery Tip:** *"To conclude, ChargeDossier demonstrates how I operate as an Associate Product Manager: identifying real commercial friction, making disciplined architectural choices, executing reliable software, and respecting empirical data. All deliverables are live and verified. Thank you."*

---

## 4. The Three Highest-Impact Presentation Improvements

1. **Clarify User vs. Buyer Persona on Slide 2 & Slide 4:**
   - *Impact:* Demonstrates enterprise B2B PM maturity by showing you understand that the person experiencing review friction (Operations Lead) is not the person signing the SaaS check (Founder / CFO).
2. **Make Case DSP-4190 the Core Narrative Climax on Slide 8:**
   - *Impact:* Demonstrates the tangible value proposition of human-in-the-loop review in 15 seconds: turning a vulnerable $1,150 merchandise claim into a winning representation.
3. **Emphasize the CFPB Section 1033 Strategic Pivot on Slide 10:**
   - *Impact:* Shows hiring managers that you read primary regulatory text, identify insurmountable obstacles early, and make decisive product pivots before writing code.
