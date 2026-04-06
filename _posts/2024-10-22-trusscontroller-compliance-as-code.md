---
layout: default
title: TrussController - What I Learned Building Compliance Middleware for LLMs
date: 2024-10-22
category: AI Engineering
readTime: 7 min
tags: [Compliance, LLM, Architecture, Insurance, Healthcare]
---

# TrussController: What I Learned Building Compliance Middleware for LLMs

Before I joined Trussed.AI, I assumed that compliance in AI systems was mostly about documentation — policies, data use agreements, consent forms. After building TrussController, I know it's an engineering problem.

Here's the architecture and the hard lessons.

## The Problem We Were Solving

Insurance claims processing involves sensitive data at every step: patient diagnoses, financial details, legal determinations. When you put an LLM in that pipeline, you need to answer questions that most AI tutorials never address:

- What happens when PII enters a prompt?
- Which LLM provider is this data allowed to go to?
- Can we prove — to an auditor — exactly what the model saw and decided?
- What happens when the model is down?

TrussController is the answer to all four.

## Architecture Overview

The middleware sits between your application and any LLM provider. Every request flows through four layers:

**1. PII Redaction Engine**  
Detects and redacts sensitive data before it reaches the model. We use a combination of regex patterns and NER models — regex handles known formats (SSNs, policy numbers), NER handles clinical language that regex misses.

**2. Role-Based Routing**  
Not all users should be able to send the same data to the same models. A claims adjuster can use GPT-4. A customer-facing chatbot uses a smaller model with tighter constraints. Routing rules are declarative and version-controlled.

**3. Provider Abstraction**  
We normalized the interface across OpenAI, Anthropic, and open-source models. This gave us real production flexibility — when one provider had an outage, we switched the routing rule, not the code.

**4. Audit Trail**  
Every request logs: input hash, redaction decisions, provider used, response, latency, and cost. HIPAA requires 6-year retention. We designed the schema for that from day one.

## What Surprised Me

**Regex isn't enough.** Clinical narratives contain PII in forms no regex catches: "the patient we discussed last Thursday" or "Dr. Chen's patient from the Phoenix clinic." You need NER, and you need to tune it for your domain.

**Compliance is a product feature.** The compliance layer became a selling point with enterprise clients — not just a technical requirement. "Can we audit every AI decision?" is now a sales question, not just a security question.

**Provider abstraction pays off fast.** We switched from GPT-4 to Claude for certain workflows within three months of launch. The abstraction layer made it a configuration change, not a migration project.

---

The takeaway: if you're building AI for regulated industries, start with the compliance architecture first. Everything else is easier when the foundation is right.
