# ChargeDossier: Open-Access Publication & Repository Submission Guide

**Project:** Mastercard Opportunity Lab — ChargeDossier  
**Paper Title:** *Deterministic Decision Support for Payment Dispute Evidence: A Synthetic Case Evaluation of Explainable Pre-Submission Auditing*  
**Author:** Pragy Mathur  
**Affiliation:** Integrated MBA Candidate (Class of 2027), Parul University  
**Email:** pragymathur12@gmail.com  
**Proposed License:** Creative Commons Attribution 4.0 International (CC BY 4.0) — Ready for Author Confirmation at Deposit  
**Target Roles:** General Associate Product Manager (APM) &middot; Target Companies: Mastercard, Visa, Razorpay, Fintechs  
**Submission Status:** STAGED LOCALLY &middot; NOT YET SUBMITTED TO ZENODO OR SSRN  
**Date:** October 30, 2026  

---

> [!CAUTION]
> **SUBMISSION GATE ACTIVE:** In accordance with research integrity governance, this manuscript has **NOT** been submitted, uploaded, or deposited to Zenodo, SSRN, arXiv, or ResearchGate. All files are staged and verified locally. Formal external submission requires separate, explicit authorization from the author.

---

## 1. Publication Strategy & Platform Selection

To maximize academic visibility, professional credibility, and indexing across Google Scholar without incurring article processing charges (APCs), this research is prepared for immediate deposit on established open-access preprint repositories:

```
+----------------------------------------------------------------------------------------------------+
|                                OPEN-ACCESS REPOSITORY COMPARISON                                   |
+-------------------+----------------------------+-----------------------+---------------------------+
| PLATFORM          | TARGET DOMAIN              | DOI ASSIGNMENT        | GOOGLE SCHOLAR INDEXING   |
+-------------------+----------------------------+-----------------------+---------------------------+
| Zenodo (CERN)     | Computer Science, Data, AI | Immediate (10.5281/..) | Fast (within 48–72 hours) |
| SSRN (Elsevier)   | Fintech, Finance, Mgmt     | Post-moderation       | Comprehensive             |
| arXiv.org         | CS.SE / CS.AI              | Subject to endorsement| Fast                      |
| ResearchGate      | General Academic Profile   | Manual / Profile sync | Profile-linked            |
+-------------------+----------------------------+-----------------------+---------------------------+
```

### Primary Recommendation: **Zenodo (CERN / OpenAIRE)**
* **Why Zenodo:** 
  1. Free open-access hosting funded by CERN and the European Commission.
  2. Issues an immediate, permanent, citeable Digital Object Identifier (DOI).
  3. Seamless GitHub integration for archiving software code releases alongside papers.
  4. Automatic indexing in OpenAIRE, Google Scholar, and DataCite.
  5. Supports Creative Commons Attribution 4.0 International (CC BY 4.0).

### Secondary Recommendation: **SSRN (Fintech & Payment Systems eJournal)**
* Deposit in the *Financial Technology (Fintech) eJournal* or *Information Systems: Behavioral & Cognitive eJournal* to reach fintech practitioners and business school researchers.

---

## 2. Metadata Manifest for Deposit

Use this exact metadata payload when uploading the paper to Zenodo, SSRN, or institutional repositories:

```yaml
Title: "Deterministic Decision Support for Payment Dispute Evidence: A Synthetic Case Evaluation of Explainable Pre-Submission Auditing"
Authors:
  - Name: "Mathur, Pragy"
    Affiliation: "Parul University (Integrated MBA Candidate, Class of 2027)"
    Email: "pragymathur12@gmail.com"
Publication Date: "2026-10-28"
Resource Type: "Preprint / Working Paper"
Access Right: "Open Access"
License: "Creative Commons Attribution 4.0 International (CC BY 4.0)"
Keywords:
  - "Payment Disputes"
  - "Chargebacks"
  - "Decision Support Systems"
  - "Heuristic Auditing"
  - "Explainable AI"
  - "Synthetic Benchmarks"
  - "Fintech Operations"
  - "Second Presentment"
  - "First-Party Trust"
Language: "eng"
Related Identifiers:
  - Relation: "isSupplementTo"
    Identifier: "https://github.com/pragymathur12-king/chargedossier"
    Scheme: "URL"
  - Relation: "hasPart"
    Identifier: "https://pragymathur12-king.github.io/chargedossier/"
    Scheme: "URL"
```

### Abstract for Deposit
> Payment dispute management in direct-to-consumer (D2C) e-commerce represents an asymmetric operational challenge. While card scheme rules (e.g., Mastercard Mastercom and Visa CE3.0) establish strict technical criteria for second presentment representment, merchants face severe friction: manual evidence compilation requires 30 to 60 minutes per dispute, while black-box automated solutions charge contingency take-rates of 20% to 25% that extract substantial margin on high-ticket goods ($150 to $1,500 Average Order Value). Furthermore, fully automated submission tools frequently submit contradictory files or fail to attach merchant-specific policies required for merchandise disputes (Mastercard Reason Code 4853). This paper investigates ChargeDossier, an explainable, deterministic decision-support copilot designed to pre-audit payment dispute evidence before submission to acquiring networks. Using an adversarial synthetic benchmark dataset (n=4) modeling cardholder fraud (Reason Code 4837) and merchandise non-receipt/defect disputes (Reason Code 4853), we evaluate whether a deterministic heuristic rules engine can reliably classify dispute viability, detect critical evidentiary contradictions, and guide dynamic gap remediation. The evaluation demonstrates that the deterministic scoring engine executes in under 5 milliseconds with zero non-deterministic drift, accurately isolating deficient claims (scoring 2/100 and 22/100) and elevating remediable claims from Tier B (73/100) to Tier A (100/100) upon attachment of required policy exhibits. We analyze the operational, computational, and economic trade-offs of human-in-the-loop deterministic auditing versus generative language models and uncapped contingency automation, showing that a fixed-cost explainable copilot preserves merchant operating margins while mitigating scheme pre-arbitration risks.

---

## 3. Step-by-Step Deposit Guide (Zenodo)

Follow this 5-minute procedure to deposit the research paper:

1. **Sign Up / Log In:** Navigate to [https://zenodo.org](https://zenodo.org) and log in (using your GitHub account or email).
2. **Click "New Upload":** From the dashboard or top navigation, click the orange **New Upload** button.
3. **Upload Files:**
   * Primary Document: `research/paper.pdf` (Rendered academic publication).
   * Supplementary Documentation: `research/paper.md` and `research/reproducibility.md`.
4. **Basic Information:**
   * **Resource Type:** Select `Preprint` (or `Working paper`).
   * **Title:** Paste: `Deterministic Decision Support for Payment Dispute Evidence: A Synthetic Case Evaluation of Explainable Pre-Submission Auditing`.
   * **Authors:** Add `Mathur, Pragy` | Affiliation: `Parul University (Integrated MBA Candidate, Class of 2027)`.
   * **Description:** Paste the formal Abstract above.
5. **License & Open Access:**
   * **Access right:** Select `Open Access`.
   * **License:** Select `Creative Commons Attribution 4.0 International (CC BY 4.0)`.
6. **Keywords:**
   * Enter the 9 indexed terms: `Payment Disputes`, `Chargebacks`, `Decision Support Systems`, `Heuristic Auditing`, `Explainable AI`, `Synthetic Benchmarks`, `Fintech Operations`, `Second Presentment`, `First-Party Trust`.
7. **Related Identifiers:**
   * Select `isSupplementTo` -> `https://github.com/pragymathur12-king/chargedossier`.
8. **Publish:**
   * Review metadata.
   * Click **Save** $\rightarrow$ Click **Publish**.
   * *Zenodo immediately generates a persistent DOI (e.g., `10.5281/zenodo.XXXXXXX`).*

---

## 4. Step-by-Step Deposit Guide (SSRN)

1. Navigate to [https://www.ssrn.com](https://www.ssrn.com) and log into your SSRN User Account.
2. Click **Submit a Paper** in the top navigation.
3. Upload `research/paper.pdf`.
4. Fill in:
   * **Title:** `Deterministic Decision Support for Payment Dispute Evidence: A Synthetic Case Evaluation of Explainable Pre-Submission Auditing`
   * **Authors:** Pragy Mathur (`pragymathur12@gmail.com`)
   * **Abstract:** Paste Abstract.
   * **Keywords:** Enter keywords.
   * **Primary Classification:** *Financial Economics Network (FEN)* $\rightarrow$ *Financial Technology (FinTech)* or *Information Systems & Economics*.
5. Submit for moderation. (SSRN typically approves within 3 to 7 business days).

---

## 5. Post-Publication Portfolio Integration Checklist

Once your DOI is generated:
* [ ] Update `README.md` in `pragymathur12-king/chargedossier` with the permanent DOI badge:
  ```markdown
  [![DOI](https://zenodo.org/badge/DOI/10.5281/zenodo.XXXXXXX.svg)](https://doi.org/10.5281/zenodo.XXXXXXX)
  ```
* [ ] Add citation link to `C:\Users\DELL\Documents\antigravity\aura-portfolio\chargedossier.html`.
* [ ] Link the paper PDF on LinkedIn profile under Featured Projects.
* [ ] Reference the paper in Product Management application cover letters for Mastercard.
