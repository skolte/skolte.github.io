---
layout: default
title: Projects
nav_order: 3
---

# 🚀 Projects

## TrussController
**🛡️ Compliance Middleware for Production LLM Systems**

**Problem:** Enterprise AI deployments break down when LLMs hit real data — unredacted PII flowing into prompts, no audit trail, no way to swap providers, and no guardrails for regulated industries like insurance and healthcare.

**Approach:** Built a modular middleware layer that sits between your application and any LLM provider. TrussController handles PII redaction, role-based routing, audit logging, and provider abstraction — so the same codebase can run against OpenAI, Anthropic, or open-source models with compliance baked in.

**Tech Stack:** Python, FastAPI, LangChain, LangGraph, Pydantic, OpenAI, Anthropic, PostgreSQL

**Key Learnings:**
- Compliance is an architectural concern, not a feature you bolt on later
- PII redaction needs to be context-aware — regex alone fails on clinical narratives
- LLM provider abstraction enables real cost/performance tradeoffs at runtime
- Audit trails must capture input, output, and decision rationale — not just timestamps

**GitHub:** https://github.com/skolte/TrussController

---

## Multi-Agent Claims System
**🤖 LangGraph-Orchestrated Insurance Claims Automation**

**Problem:** Insurance claims processing is slow, inconsistent, and error-prone when done manually. Existing automation is brittle — it breaks on edge cases and can't reason about ambiguous policy language.

**Approach:** Designed a multi-agent system using LangGraph where specialized agents handle triage, policy lookup, coverage analysis, and escalation. Agents share state via a ClaimState model (Pydantic) that persists context across the full claims lifecycle. A supervisor agent routes work and handles exceptions.

**Tech Stack:** Python, LangGraph, LangChain, FastAPI, Pydantic, Streamlit, OpenAI GPT-4, PostgreSQL, Redis

**Key Learnings:**
- Stateful agent memory is the difference between toy demos and production systems
- Supervisor patterns reduce hallucinations by limiting what each agent can decide
- Chain-of-thought prompting measurably improves accuracy on ambiguous coverage questions
- Real-time cost tracking per agent is essential for enterprise deployment approval

**GitHub:** https://github.com/skolte/multi-agent-claims

---

## CareBORN
**❤️ AI-Powered Pediatric Cancer Support Platform**

**Problem:** Families navigating pediatric cancer face a fragmented system — disconnected clinical teams, opaque financial aid processes, and no central place to manage care coordination. Low-income families are disproportionately impacted.

**Approach:** Founded CareBORN to build a HIPAA-compliant platform connecting pediatric cancer families with clinical resources, financial aid navigation, and peer support. Built AI layers for personalized resource matching, grant proposal automation, and compliance-aware patient engagement.

**Tech Stack:** Python, FastAPI, React, AWS, FHIR APIs, HIPAA-compliant infrastructure, Stripe, LangChain

**Key Learnings:**
- FHIR interoperability is critical for clinical data portability in pediatric oncology
- AI can return hours to nonprofit staff — hours they can spend with families, not paperwork
- Privacy-first design builds trust with patients and clinical partners faster than features do
- Equitable access requires proactive outreach design, not just building a portal

**GitHub:** https://github.com/skolte/careborn  
**Demo:** https://careborn.org

---

## SIMS Infinity
**🔐 Cloud-Native National Security Compliance Platform**

**Problem:** Defense contractors and U.S. government agencies needed a modern, auditable system to manage security clearances, facility compliance, and personnel security — at scale, with 99.99% uptime requirements.

**Approach:** Architected a cloud-native SaaS platform serving the Pentagon, White House, and major defense contractors. Multi-tenant architecture with FedRAMP High compliance, end-to-end encryption, and modular compliance modules covering DoD, DoE, and SCI requirements.

**Tech Stack:** Angular, C#, .NET Core, TypeScript, Python, AWS, SQL Server, Redis, Kubernetes

**Key Learnings:**
- Compliance at scale requires automated enforcement — manual review doesn't survive growth
- Multi-tenant SaaS in regulated industries demands tenant isolation as a first-class concern
- Observability in national security contexts means auditability, not just monitoring
- 99.99% uptime for mission-critical systems requires BC/DR as a product feature, not an afterthought

**GitHub:** https://github.com/skolte/sims-infinity

---

## Clinical Trial Navigator
**🔬 RAG-Powered Clinical Trial Matching for Patients**

**Problem:** Patients and families searching for clinical trials face hundreds of complex eligibility criteria written in medical language. Most never find trials they qualify for because the search experience is overwhelming.

**Approach:** Built a RAG system that ingests ClinicalTrials.gov data, parses eligibility criteria using structured extraction, and matches patients using a conversational interface. Vector embeddings enable semantic search across trial descriptions and patient profiles.

**Tech Stack:** Python, LangChain, OpenAI, Pinecone, FastAPI, React, FHIR, PostgreSQL

**Key Learnings:**
- Medical language requires domain-specific chunking strategies for effective RAG
- Structured extraction of eligibility criteria outperforms semantic search alone
- Patient-facing AI needs explainability — "why you matched" is as important as the match

**GitHub:** https://github.com/skolte/clinical-trial-navigator

---

## FieldOps AI Assistant
**⚙️ Agentic Field Operations Intelligence System**

**Problem:** Field operations teams spend hours per day on reporting, compliance documentation, and decision support — work that requires domain knowledge but not human judgment.

**Approach:** Built an agentic assistant that integrates with field data sources, generates compliance reports, answers policy questions in natural language, and surfaces anomalies. Uses tool-calling agents with guardrails to prevent hallucination on high-stakes operational data.

**Tech Stack:** Python, LangGraph, FastAPI, PostgreSQL, AWS Lambda, Kafka, Streamlit

**Key Learnings:**
- Tool-calling agents need strict input validation to prevent prompt injection in enterprise contexts
- Domain-specific fine-tuning reduces errors more than larger models in specialized workflows
- Human-in-the-loop escalation paths are required for high-stakes field decisions

**GitHub:** https://github.com/skolte/fieldops-ai

