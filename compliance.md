---
layout: default
title: Compliance & Security
nav_order: 7
---

# <span style="color: #0366d6;">🔐 Compliance, Privacy & Security</span>

<div class="intro-text">
I architect solutions that meet rigorous standards like FedRAMP, HIPAA, NIST, PCI, and ISO while enabling innovation across defense, healthcare, fintech, and AI systems.
</div>

<div class="compliance-section">
  <h2>🔒 Regulatory Frameworks & Standards</h2>
  <button class="collapsible-button">View Section</button>
  <div class="collapsible-content" style="max-height: 0;">
    <ul>
      <li><strong>FedRAMP & NIST</strong>: Designed cloud platforms meeting FedRAMP High and NIST 800-53/171 for defense clients</li>
      <li><strong>HIPAA/HITRUST</strong>: Built compliant healthcare platforms (WiTT, CareBORN) handling EHR/FHIR data</li>
      <li><strong>PCI-DSS</strong>: Secured fintech applications with Stripe integrations and donor management</li>
      <li><strong>AI Compliance</strong>: Developed TrussController middleware for LLM PII redaction and audit logging</li>
      <li><strong>Global Standards</strong>: Implemented GDPR, ISO 27001/9001, and UK Cyber Essentials</li>
    </ul>
  </div>
</div>

<div class="compliance-section">
  <h2>🛡 Secure-by-Design Engineering</h2>
  <button class="collapsible-button">View Section</button>
  <div class="collapsible-content" style="max-height: 0;">
    <ul>
      <li><strong>Zero-Trust Architectures</strong>: For DoD systems and healthcare AI platforms</li>
      <li><strong>LLM Security</strong>: Built PII redaction and audit trails for insurance claims automation (Trussed.AI)</li>
      <li><strong>Insider Threat</strong>: Predictive monitoring for defense and financial systems</li>
      <li><strong>Access Control</strong>: RBAC with attribute-based policies for multi-tenant SaaS</li>
      <li><strong>Audit Systems</strong>: End-to-end logging meeting HIPAA 6-year retention requirements</li>
    </ul>
  </div>
</div>

<div class="compliance-section">
  <h2>⚙️ DevSecOps & Cloud Compliance</h2>
  <button class="collapsible-button">View Section</button>
  <div class="collapsible-content" style="max-height: 0;">
    <ul>
      <li><strong>AI Pipeline Security</strong>: Containerized LLM deployments with vulnerability scanning</li>
      <li><strong>Cloud Guardrails</strong>: AWS GuardDuty, CloudTrail, and custom compliance rulesets</li>
      <li><strong>Infrastructure as Code</strong>: Terraform modules enforcing NIST/FedRAMP baselines</li>
      <li><strong>Runtime Protection</strong>: Kubernetes policies for AI workloads and microservices</li>
      <li><strong>Compliance Automation</strong>: CI/CD gates for SAST/DAST in GitHub Actions</li>
    </ul>
  </div>
</div>

<div class="compliance-section">
  <h2>🤖 Ethical AI & Responsible Innovation</h2>
  <button class="collapsible-button">View Section</button>
  <div class="collapsible-content" style="max-height: 0;">
    <ul>
      <li><strong>Auditable AI</strong>: Designed Trussed.AI's compliance layer for insurance LLMs</li>
      <li><strong>Bias Mitigation</strong>: Fairness frameworks for healthcare eligibility systems</li>
      <li><strong>RLHF Governance</strong>: Human oversight for sensitive decision-making</li>
      <li><strong>Explainability</strong>: Model interpretability in clinical support tools</li>
      <li><strong>Data Provenance</strong>: Tracking for training data in regulated domains</li>
    </ul>
  </div>
</div>

<div class="compliance-section">
  <h2>🔍 Selected Security Implementations</h2>
  <button class="collapsible-button">View Section</button>
  <div class="collapsible-content" style="max-height: 0;">
    <div class="implementation">
      <h3>Trussed.AI Compliance Layer</h3>
      <ul>
        <li>PII redaction engine for insurance claims</li>
        <li>LLM provider abstraction for compliance routing</li>
        <li>Audit trails meeting PCI/HIPAA requirements</li>
      </ul>
    </div>
    
    <div class="implementation">
      <h3>SIMS Infinity (DoD)</h3>
      <ul>
        <li>Personnel security with insider threat detection</li>
        <li>CMMC 2.0-aligned access controls</li>
      </ul>
    </div>
    
    <!-- Additional implementations here -->
  </div>
</div>

<style>
.compliance-section {
  margin-bottom: 2.5rem;
  border: 1px solid #e1e4e8;
  border-radius: 8px;
  padding: 0 1.5rem;
}

.intro-text {
  font-size: 1.1rem;
  line-height: 1.6;
  margin: 1.5rem 0 2rem 0;
  color: #444;
}

.collapsible-button {
  background-color: #f6f8fa;
  color: #24292e;
  cursor: pointer;
  padding: 10px 16px;
  width: 100%;
  border: 1px solid #d1d5da;
  border-radius: 6px;
  text-align: left;
  font-weight: 600;
  margin: 1rem 0;
  transition: all 0.2s ease;
}

.collapsible-button:hover {
  background-color: #e1e4e8;
}

.collapsible-button:after {
  content: '\002B';
  font-weight: bold;
  float: right;
  margin-left: 5px;
}

.collapsible-button.active:after {
  content: '\2212';
}

.collapsible-content {
  padding: 0 0.5rem;
  max-height: 5000px;
  overflow: hidden;
  transition: max-height 0.3s ease-out;
}

.implementation {
  margin-bottom: 1.8rem;
}

.implementation h3 {
  color: #0366d6;
  margin-bottom: 0.5rem;
}

ul {
  padding-left: 1.5rem;
}

li {
  margin-bottom: 0.5rem;
  line-height: 1.6;
}
</style>

<script>
document.addEventListener("DOMContentLoaded", function() {
  var coll = document.getElementsByClassName("collapsible-button");
  
  for (var i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var content = this.nextElementSibling;
      if (content.style.maxHeight === "0px" || !content.style.maxHeight) {
        content.style.maxHeight = "5000px"; // Open the section
      } else {
        content.style.maxHeight = "0"; // Close the section
      }
    });
    
    // Ensure all sections are closed by default
    coll[i].classList.remove("active");
    coll[i].nextElementSibling.style.maxHeight = "0";
  }
});
</script>

<div class="cta">
  <p>Let's build secure, compliant systems that don't compromise innovation.</p>
  <a href="/contact/" class="cta-button">Contact Me</a>
</div>

<style>
.cta {
  text-align: center;
  margin: 3rem 0 2rem 0;
  padding: 1.5rem;
  background-color: #f8f9fa;
  border-radius: 8px;
}

.cta p {
  font-size: 1.2rem;
  margin-bottom: 1rem;
}

.cta-button {
  display: inline-block;
  padding: 0.8rem 1.8rem;
  background-color: #0366d6;
  color: white;
  text-decoration: none;
  border-radius: 6px;
  font-weight: 600;
  transition: background-color 0.2s;
}

.cta-button:hover {
  background-color: #0356b6;
}
</style>