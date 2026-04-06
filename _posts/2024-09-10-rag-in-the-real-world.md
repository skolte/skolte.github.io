---
layout: default
title: RAG in the Real World - What the Tutorials Don't Tell You
date: 2024-09-10
category: AI Architecture
readTime: 8 min
tags: [RAG, Vector Databases, Production AI, Healthcare]
---

# RAG in the Real World: What the Tutorials Don't Tell You

Retrieval-Augmented Generation (RAG) is the pattern that makes LLMs useful in enterprise contexts. Instead of hoping the model memorized your proprietary data, you retrieve it at query time and put it in context.

The basic implementation takes an afternoon. Production RAG takes months — because the failure modes are subtle.

## What the Tutorial Shows

1. Embed your documents
2. Store in a vector database
3. At query time, retrieve top-k chunks
4. Stuff into the prompt
5. Get a great answer

That works for the demo. Here's where it breaks.

## Chunking is Everything

Most tutorials chunk by character count. In clinical documents, a 500-character chunk might split mid-sentence across a diagnosis and a treatment plan — and now your retrieval returns fragments that look relevant but answer a different question.

**What works:** Semantic chunking with domain-aware boundaries. For medical records, we chunk around clinical sections (History of Present Illness, Assessment, Plan). For insurance policies, we chunk by clause.

## Retrieval Precision vs. Recall

Top-k retrieval is a blunt instrument. Asking "what does this policy cover for outpatient rehab?" might retrieve five chunks — and two of them are about inpatient rehab, which is similar enough to match semantically but answers a different question.

**What works:** Hybrid search (semantic + keyword) for domain-specific queries. For clinical trial matching, we combined vector similarity with structured metadata filters (condition, phase, status) to get precision without sacrificing recall.

## Context Window Management

You retrieve 10 chunks. Each is 500 tokens. Plus your system prompt, the conversation history, and the response space — and you've blown your context window before you've started.

**What works:** Summarize retrieved chunks before injection. A re-ranker model can compress five chunks into the two that actually answer the question. LangChain's compression retriever does this well.

## The Hallucination You Don't See

Standard RAG fails quietly when the answer isn't in your corpus. The model doesn't say "I don't know" — it reasons from its training data and presents a confident, plausible, wrong answer.

**What works:** Faithfulness evaluation. After generation, check whether every claim in the response is grounded in the retrieved context. Ragas, LangSmith, and custom evals all give you handles on this.

## Embedding Model Drift

You embed your corpus with one model, then your embedding provider updates their model. Your new queries embed differently than your stored documents. Retrieval quality degrades silently over time.

**What works:** Version your embedding models. When you upgrade, re-embed your entire corpus. Build a retrieval quality test suite you can run on demand.

---

RAG is the right pattern. But "right pattern" and "easy implementation" are different things in production. The teams that succeed treat retrieval quality as an ongoing engineering discipline — not a one-time setup.
