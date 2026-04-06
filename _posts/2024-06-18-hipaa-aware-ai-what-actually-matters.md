---
layout: default
title: Building HIPAA-Aware AI - What Actually Matters
date: 2024-06-18
category: Healthcare AI
readTime: 7 min
tags: [HIPAA, Healthcare AI, Compliance, Privacy]
---

# Building HIPAA-Aware AI: What Actually Matters

I've built HIPAA-aware AI systems for a pediatric cancer platform, a healthcare engagement startup, and insurance claims automation. The compliance requirements are well-documented. The engineering decisions are not.

Here's what I've learned.

## What HIPAA Actually Requires (for AI systems)

HIPAA protects Protected Health Information (PHI) — which in AI systems includes anything that flows through your prompts or training data that could identify a patient.

The key requirements that affect AI architecture:

**Business Associate Agreements (BAAs).** Every AI vendor that touches PHI must sign a BAA. OpenAI offers one. Anthropic offers one. Many AI tools do not. If a vendor won't sign a BAA, you can't use them with patient data — full stop.

**Minimum Necessary Standard.** You should only use the minimum PHI necessary for the specific purpose. In AI contexts, this means redacting fields that aren't needed for the specific task before they enter a prompt.

**Audit Controls.** You need audit logs of who accessed what PHI and when. For AI systems, this extends to: what data entered a prompt, which model processed it, what the output was, and who acted on it.

**6-Year Retention.** Audit logs must be retained for 6 years. This is a data architecture decision, not a compliance checkbox.

## The Hard Engineering Decisions

**Where does PHI live in your AI pipeline?**

If a patient's diagnosis is in your vector database, it's in your AI system's scope. Every component that touches that database is a potential PHI disclosure risk. Map your data flows before you write code.

**What counts as PHI in clinical language?**

"The 34-year-old female patient" contains age and sex — potentially PHI in context. Clinical narratives are full of quasi-identifiers that become PHI in combination. Standard regex-based redaction misses most of them. You need clinical NER models tuned for de-identification.

**Balancing redaction with utility**

Over-redaction makes AI useless. A claims system that redacts the diagnosis can't reason about coverage. The right design: redact for storage and external transmission, but maintain a controlled de-identification/re-identification layer for authorized internal processing.

## The Vendor Question

The question I get from healthcare organizations: "Can we use ChatGPT?"

Yes — with a BAA, with proper redaction before any data enters the prompt, and with explicit policy about what data types are permitted. Not as a free-for-all.

The answer for direct EHR data or full clinical records: in most cases, you need a self-hosted or private deployment model. The convenience cost is real, but so is the compliance risk.

---

HIPAA isn't the enemy of AI innovation in healthcare. It's the constraint that, when designed around properly, builds the trust that makes healthcare AI possible.
