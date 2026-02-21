import aiAutomation1 from "./images/aiautomation1.png";
import aiAutomation2 from "./images/aiautomation2.jpg";
import aiAutomation3 from "./images/aiautomation3.jpg";
import dataEngineer1 from "./images/dataengineer1.png";
import dataEngineer2 from "./images/dataengineer2.jpg";
import dataEngineer3 from "./images/dataenginner3.jpg";
import saas1 from "./images/saas1.png";
import saas2 from "./images/saas2.jpg";
import saas3 from "./images/saas3.jpg";
import customAi1 from "./images/customai1.png";
import customAi2 from "./images/customai2.jpg";
import customAi3 from "./images/customai3.jpg";

/* ─────────────────────────────────────────
   AI AUTOMATION SYSTEMS
───────────────────────────────────────── */
export const aiAutomationSystemsContent = {
  accent: "#00F5FF",
  category: "AI Automation",
  hero: {
    title: "AI & Automation Systems",
    subtitle: "LLM-powered systems that automate, reason, and deliver.",
    description:
      "We engineer advanced RAG pipelines, agentic workflows, AI chatbots, AI SaaS platforms, MCP integrations, and production-grade LLM applications. From architecture to deployment — reliable AI that works at scale and keeps working.",
    image: aiAutomation1,
  },
  stats: {
    items: [
      { value: "50+", label: "LLM Apps Shipped" },
      { value: "95", suffix: "%", label: "Automation Accuracy" },
      { value: "24/7", label: "Live Observability" },
      { value: "2–4", suffix: "wk", label: "Pilot to Production" },
    ],
    image: aiAutomation2,
  },
  workflow: {
    label: "End-to-End Automation Workflow",
    title: "Design. Orchestrate. Observe. Scale.",
    description:
      "We architect robust pipelines with retrieval, tool-using agents, guardrails, and full observability stacks. Every system is observable, tunable, and built to survive the real world — not just a demo.",
    steps: [
      { step: "01", label: "Blueprint" },
      { step: "02", label: "Implement" },
      { step: "03", label: "Evaluate" },
      { step: "04", label: "Ship & Monitor" },
    ],
    image: null,
  },
  happyClients: {
    label: "Trusted by engineering, ops, and support teams globally",
    title: "Happy Clients",
    stat: "120+",
    subtext: "automations running in production across industries",
    tags: [
      "RAG Pipelines",
      "AI Agents",
      "Chatbots",
      "AI SaaS",
      "Workflows",
      "Observability",
      "Guardrails",
      "MCP",
      "LLM Ops",
      "Integrations",
    ],
  },
  intelligentSection: {
    title: "Full-Spectrum AI Systems Expertise.",
    description:
      "We turn large language models into dependable production systems. Carefully designed retrieval, deterministic tools, multi-agent orchestration, evaluation loops, and production observability — every component aligned with your business outcomes and engineered to stay reliable as usage scales.",
    bullets: [
      "RAG Pipelines: Document ingestion, chunking strategies, embedding models, hybrid search, re-ranking, and citation-grounded responses.",
      "Agentic Workflows: Tool-using agents, planners, short-term & long-term memory, multi-agent handoffs, and approval gates.",
      "AI Chatbots: Web widgets, WhatsApp, Slack — with context windows, dynamic forms, and CRM/ticketing integrations.",
      "AI SaaS Platforms: Multi-tenant apps with billing, role management, usage metering, and secure token storage.",
      "MCP Integration: Extensible tool protocol (Model Context Protocol) for connecting LLMs to your existing services.",
      "LLM Ops: Prompt versioning, tool evaluation, guardrail layers, A/B experiments, and latency optimization.",
      "Observability: Tracing, structured logging, latency dashboards, cost monitoring, and automated alerts.",
      "Security & Compliance: PII redaction, output filtering, access control, and audit logging for regulated environments.",
    ],
  },
  challengeSolution: {
    challenge:
      "LLM prototypes often break in production — hallucinations, latency spikes, unreliable tool calls, and opaque failures erode trust and ROI before the system ever reaches real users.",
    solution:
      "We engineer AI systems with deterministic tool cores, retrieval-grounded responses, structured evaluation loops, and robust observability. Every system ships with measurable accuracy targets, safe behavior guarantees, and predictable production performance — not just demo-day results.",
    tags: ["Grounded", "Observable", "Reliable", "Scalable", "Secure", "Auditable"],
  },
  testimonial: {
    quote:
      "Great AI systems feel effortless to use. Under the hood, they are rigorously engineered, observable, and safe — that's the only standard we build to.",
    attribution: "KrishNova Softwares — AI Engineering Team",
    ctaText:
      "Book a free consultation — let's design your next production AI system.",
  },
  principles: {
    title: "Why Our AI Automation Stands Apart",
    subtitle: "Three engineering pillars, one reliable outcome",
    items: [
      {
        title: "Grounded by Data",
        desc: "Retrieval + deterministic tools dramatically reduce hallucinations and ensure factual, verifiable responses.",
        emoji: "◇",
      },
      {
        title: "Observable & Safe",
        desc: "Metrics, logs, guardrails, and automated evaluators keep every system reliable and auditable in production.",
        emoji: "◆",
      },
      {
        title: "Built to Scale",
        desc: "Cloud-native pipelines designed for real traffic, multiple tenants, concurrent users, and continuous growth.",
        emoji: "○",
      },
    ],
  },
  expertise: {
    title: "Our AI Automation Expertise",
    subtitle:
      "From RAG to multi-agent systems, chatbots to full AI SaaS — production-grade across every layer.",
    image: aiAutomation3,
    cards: [
      {
        icon: "◇",
        title: "RAG Pipelines",
        text: "Ingestion, embeddings, chunking, vector search, hybrid ranking, and citation-grounded answers.",
      },
      {
        icon: "◆",
        title: "Agentic AI",
        text: "Tool-using agents, planners, short & long-term memory, parallel sub-agents, and human approval gates.",
      },
      {
        icon: "○",
        title: "AI Chatbots",
        text: "Web, Slack, WhatsApp — context-aware bots with dynamic forms, escalation logic, and CRM sync.",
      },
      {
        icon: "●",
        title: "AI SaaS",
        text: "Multi-tenant platforms with billing, RBAC, usage metering, and secure per-tenant data isolation.",
      },
      {
        icon: "◈",
        title: "MCP & Integrations",
        text: "Model Context Protocol to connect LLMs with your APIs, databases, and internal tooling.",
      },
      {
        icon: "◉",
        title: "LLM Ops",
        text: "Prompt versioning, guardrails, evaluators, cost dashboards, and latency tuning for production LLMs.",
      },
    ],
  },
  techStack: {
    subtitle: "Battle-tested tools we use for AI & Automation",
    items: [
      "OpenAI",
      "Anthropic",
      "Google Gemini",
      "Ollama",
      "LangChain",
      "LangGraph",
      "LlamaIndex",
      "Pinecone",
      "Weaviate",
      "Chroma",
      "Supabase",
      "Postgres",
      "Redis",
      "MCP",
      "FastAPI",
      "Vercel",
      "AWS",
      "Docker",
    ],
    extra: "Tracing · Guardrails · Evaluation · Cost Monitoring",
  },
  processSteps: {
    subtitle: "From prototype to production — a proven path",
    items: [
      {
        num: "01",
        title: "Discovery & Blueprint",
        text: "We define your use cases, identify data sources, map required tools, and produce a full system design doc before writing a single line of code.",
        link: "Know More",
      },
      {
        num: "02",
        title: "Implementation",
        text: "RAG pipelines, agents, tools, and integrations built iteratively with weekly demos, working prototypes, and continuous metric tracking.",
        link: "Know More",
      },
      {
        num: "03",
        title: "Evaluation & Guardrails",
        text: "We run automated evaluators, red-team prompt attacks, add output guardrails, and tune prompts and tools until accuracy and safety targets are met.",
        link: "Know More",
      },
      {
        num: "04",
        title: "Deploy & Observe",
        text: "Production deployment with distributed tracing, structured logging, latency dashboards, cost alerts, and a 30-day stability monitoring window.",
        link: "Know More",
      },
      {
        num: "05",
        title: "Iterate & Improve",
        text: "Real-world usage reveals edge cases. We run continuous improvement cycles — re-evaluating, re-tuning, and shipping improvements as your system scales.",
        link: "Know More",
      },
    ],
  },
};

/* ─────────────────────────────────────────
   DATA ENGINEERING & ANALYTICS
───────────────────────────────────────── */
export const dataEngineeringAnalyticsContent = {
  accent: "#00F5FF",
  category: "AI Automation",
  hero: {
    title: "Data Engineering & Analytics",
    subtitle: "Modern data pipelines, real-time analytics, trusted insights.",
    description:
      "We architect scalable data platforms end-to-end: multi-source ingestion, ETL/ELT transformations, lakehouse design, real-time streaming, semantic layers, BI dashboards, and cloud infrastructure — turning raw data into reliable decisions.",
    image: dataEngineer1,
  },
  stats: {
    items: [
      { value: "1TB+", label: "Daily Ingest Handled" },
      { value: "99.9", suffix: "%", label: "Pipeline Uptime SLA" },
      { value: "<100", suffix: "ms", label: "Streaming Latency" },
      { value: "4", suffix: "wk", label: "Pilot Platform Live" },
    ],
    image: dataEngineer2,
  },
  workflow: {
    label: "End-to-End Data Platform Workflow",
    title: "Ingest. Transform. Model. Visualize. Operate.",
    description:
      "We design resilient pipelines, governed storage layers, versioned transformations, and analytics artifacts that your team can trust and maintain — with full observability baked in from day one.",
    steps: [
      { step: "01", label: "Ingest" },
      { step: "02", label: "Transform" },
      { step: "03", label: "Model" },
      { step: "04", label: "Analyze" },
      { step: "05", label: "Operate" },
    ],
    image: null,
  },
  happyClients: {
    label: "Trusted by product, data, and analytics teams",
    title: "Happy Clients",
    stat: "90+",
    subtext: "data platforms running in production across startups and enterprises",
    tags: [
      "ETL / ELT",
      "Real-Time Streams",
      "Lakehouse",
      "Data Warehouse",
      "dbt Models",
      "BI Dashboards",
      "Data Governance",
      "Data Quality",
      "Lineage",
      "ML Features",
    ],
  },
  intelligentSection: {
    title: "Complete Data Platform Engineering Expertise.",
    description:
      "From batch ETL to real-time stream processing, from lakehouses to semantic metric layers. We design, build, and operate data platforms that your entire organization can rely on — with clear ownership, full lineage, and governance aligned to your compliance needs.",
    bullets: [
      "Ingestion: REST APIs, file drops, CDC (Change Data Capture), event streams (Kafka/Kinesis), and database replication.",
      "Transformations: ELT/ETL pipelines with versioned DAGs, schema validation, idempotency, and automatic retries.",
      "Storage Architecture: Lakehouse design (Delta Lake, Iceberg), data warehouse modeling, partition strategies, and compaction.",
      "Streaming: Real-time pipelines with Apache Kafka, Flink, Spark Streaming — sub-second latency where it matters.",
      "Analytics Layer: BI dashboards (Metabase, Looker, Superset), metrics layers (dbt Semantic Layer, Cube), and KPI alerting.",
      "Data Quality: Schema contracts, row-level assertions, anomaly detection, and automated freshness checks.",
      "Governance & Lineage: Column-level lineage, PII tagging, access control policies, and catalog integration.",
      "MLOps Data Support: Feature stores, training dataset versioning, and model monitoring data feeds.",
      "Ops & CI/CD: Automated DAG testing, deployment pipelines, runbooks, on-call dashboards, and SLA monitoring.",
    ],
  },
  challengeSolution: {
    challenge:
      "Fragmented data sources, brittle hand-crafted scripts, and untested pipelines silently corrupt data — leading to missed SLAs, wrong dashboards, and decisions made on stale or incorrect numbers.",
    solution:
      "We build robust, observable, and governed data platforms with clear ownership, automated quality gates, column-level lineage, and performance dashboards. Your team gets data they can trust — and pipelines they can actually maintain as the business grows.",
    tags: ["Reliable", "Observable", "Governed", "Scalable", "Tested", "Documented"],
  },
  testimonial: {
    quote:
      "Great analytics always come from great pipelines. Reliability, governance, and ownership — that's how raw data becomes decisions you can act on with confidence.",
    attribution: "KrishNova Softwares — Data Engineering Team",
    ctaText: "Book a discovery call — let's design your data platform.",
  },
  principles: {
    title: "Why Modern Data Engineering Matters",
    subtitle: "Three pillars behind every platform we build",
    items: [
      {
        title: "Reliable Pipelines",
        desc: "Versioned, tested, idempotent pipelines your whole org trusts for daily decision-making.",
        emoji: "◇",
      },
      {
        title: "Scalable Architecture",
        desc: "Lakehouse and warehouse design ready for data growth, traffic spikes, and new source integrations.",
        emoji: "◆",
      },
      {
        title: "Actionable Insights",
        desc: "Metrics, KPIs, and dashboards that are aligned to real business outcomes — not vanity numbers.",
        emoji: "○",
      },
    ],
  },
  expertise: {
    title: "Our Data Engineering Expertise",
    subtitle:
      "End-to-end pipelines, governed storage, real-time streams, and analytics — delivered as a complete platform.",
    image: dataEngineer3,
    cards: [
      {
        icon: "◇",
        title: "Data Pipelines",
        text: "Orchestrated DAGs with retries, back-fill strategies, SLA alerting, and automatic schema evolution.",
      },
      {
        icon: "◆",
        title: "Lakehouse & Warehouse",
        text: "Delta Lake, Iceberg, Snowflake, and BigQuery architectures with partitioning and compaction.",
      },
      {
        icon: "○",
        title: "Real-Time Streaming",
        text: "Kafka, Flink, and Spark Streaming pipelines delivering sub-second insights at scale.",
      },
      {
        icon: "●",
        title: "BI & Analytics",
        text: "Self-service dashboards, metrics layers, and automated anomaly alerts for every team.",
      },
      {
        icon: "◈",
        title: "Data Quality & Governance",
        text: "Schema contracts, row-level assertions, column-level lineage, PII tagging, and catalog integration.",
      },
      {
        icon: "◉",
        title: "Platform Ops & CI/CD",
        text: "Automated DAG testing, deployment pipelines, on-call runbooks, and SLA monitoring dashboards.",
      },
    ],
  },
  techStack: {
    subtitle: "Our complete data engineering toolbelt",
    items: [
      "Apache Airflow",
      "Dagster",
      "dbt",
      "Apache Spark",
      "Apache Kafka",
      "Apache Flink",
      "Delta Lake",
      "Apache Iceberg",
      "Snowflake",
      "BigQuery",
      "Redshift",
      "Supabase",
      "Postgres",
      "Metabase",
      "Looker",
      "AWS",
      "GCP",
      "Docker",
      "Kubernetes",
    ],
    extra: "Lineage · Data Quality · Observability · CI/CD Pipelines",
  },
  processSteps: {
    subtitle: "From raw data to trusted insights — a structured journey",
    items: [
      {
        num: "01",
        title: "Discovery & Source Audit",
        text: "We map all your data sources, define SLAs and freshness requirements, identify KPIs, and document the target data model before we build anything.",
        link: "Know More",
      },
      {
        num: "02",
        title: "Architecture Design",
        text: "Lakehouse or warehouse design, streaming vs. batch strategy, pipeline orchestrator choice, and storage partitioning — all documented in an architecture decision record.",
        link: "Know More",
      },
      {
        num: "03",
        title: "Pipeline Build & Testing",
        text: "Iterative pipeline development with unit tests on transformations, integration tests on DAG runs, and schema contract enforcement at every stage.",
        link: "Know More",
      },
      {
        num: "04",
        title: "Analytics & Dashboards",
        text: "Define the metrics layer, build BI dashboards, configure anomaly alerts, and validate all numbers against source systems before go-live.",
        link: "Know More",
      },
      {
        num: "05",
        title: "Operate, Monitor & Improve",
        text: "SLA dashboards, on-call runbooks, automated freshness checks, cost optimization, and regular pipeline health reviews for continuous improvement.",
        link: "Know More",
      },
    ],
  },
};

/* ─────────────────────────────────────────
   SAAS PRODUCT DEVELOPMENT
───────────────────────────────────────── */
export const saasProductDevelopmentContent = {
  accent: "#00F5FF",
  category: "AI Automation",
  hero: {
    title: "SaaS Product Development",
    subtitle: "Multi-tenant platforms engineered for scale, security, and real users.",
    description:
      "We design and build production-grade SaaS applications from scratch: authentication, multi-tenancy, subscription billing, RBAC, admin dashboards, usage metering, and secure cloud infrastructure — engineered to grow with your business.",
    image: saas1,
  },
  stats: {
    items: [
      { value: "30+", label: "SaaS Apps Built" },
      { value: "99.95", suffix: "%", label: "Uptime Delivered" },
      { value: "100k+", label: "Monthly Active Users" },
      { value: "3", suffix: "wk", label: "MVP Ready" },
    ],
    image: saas2,
  },
  workflow: {
    label: "End-to-End SaaS Development Workflow",
    title: "Define. Design. Build. Harden. Launch.",
    description:
      "From product strategy and UX wireframes to a hardened, observable, production-ready SaaS — we cover every layer so you can focus on growing your user base instead of fighting your infrastructure.",
    steps: [
      { step: "01", label: "Define" },
      { step: "02", label: "Design" },
      { step: "03", label: "Develop" },
      { step: "04", label: "Harden" },
      { step: "05", label: "Launch" },
    ],
    image: null,
  },
  happyClients: {
    label: "Trusted by startups, scale-ups, and enterprises",
    title: "Happy Clients",
    stat: "80+",
    subtext: "SaaS products live and generating revenue",
    tags: [
      "Multi-Tenancy",
      "Auth & SSO",
      "Stripe Billing",
      "RBAC",
      "Admin Dashboard",
      "Usage Metering",
      "REST & GraphQL APIs",
      "Webhooks",
      "Audit Logs",
      "CI/CD",
    ],
  },
  intelligentSection: {
    title: "Full-Stack SaaS Engineering — Every Layer Covered.",
    description:
      "We build robust SaaS foundations that survive growth and pass compliance audits. Clean, well-typed code, scalable infrastructure, and meticulous attention to security — so your product earns user trust on day one and keeps it as you scale.",
    bullets: [
      "Authentication & SSO: Email/password, OAuth providers (Google, GitHub), magic links, MFA, and enterprise SSO (SAML, OIDC).",
      "Multi-Tenancy: Per-tenant data isolation strategies — schema-per-tenant, row-level security, and shared infrastructure with strict boundaries.",
      "RBAC & Permissions: Role-based access control, fine-grained permission policies, team management, and seat-based plans.",
      "Subscription Billing: Stripe integration — products, prices, trials, metered billing, usage limits, invoices, and tax handling.",
      "Admin Dashboard: Platform-level analytics, user management, plan overrides, tenant health monitoring, and support tooling.",
      "REST & GraphQL APIs: Versioned, documented APIs with rate limiting, authentication middleware, and webhook delivery.",
      "Security Hardening: Secure token storage, network policies, secrets management, dependency scanning, and penetration test readiness.",
      "Observability & Ops: Error monitoring (Sentry), structured logging, uptime alerts, CI/CD pipelines, and blue-green deployments.",
      "Onboarding & Product Flows: Guided onboarding, feature flags, in-app notifications, and user analytics (PostHog, Mixpanel).",
    ],
  },
  challengeSolution: {
    challenge:
      "Many SaaS apps are built fast but crumble under growth — poor multi-tenancy leaks data between customers, missing audit logs fail compliance reviews, and untested billing logic causes revenue loss.",
    solution:
      "We engineer secure, scalable SaaS foundations from the start: strict tenant isolation, complete audit trails, battle-tested billing integrations, and an observable infrastructure. You ship confidently and scale without re-architecting at 10x.",
    tags: ["Secure", "Scalable", "Observable", "Compliant", "Maintainable", "Tested"],
  },
  testimonial: {
    quote:
      "A great SaaS is a system, not just a UI. Strong foundations — auth, billing, tenancy, observability — are what let you grow fast without breaking trust.",
    attribution: "KrishNova Softwares — SaaS Engineering Team",
    ctaText: "Book a product workshop — let's architect your SaaS together.",
  },
  principles: {
    title: "Why Solid SaaS Foundations Win",
    subtitle: "Three pillars behind every product we ship",
    items: [
      {
        title: "Security First",
        desc: "Protect your users, their data, and their trust — from day one through every scale milestone.",
        emoji: "◇",
      },
      {
        title: "Scale Cleanly",
        desc: "Architecture, tenancy model, and database design that grows with you — no big re-writes at 10x.",
        emoji: "◆",
      },
      {
        title: "Operate Easily",
        desc: "Observe, debug, deploy, and iterate — without firefighting your own infrastructure on weekends.",
        emoji: "○",
      },
    ],
  },
  expertise: {
    title: "Our SaaS Product Expertise",
    subtitle:
      "From auth and billing to admin dashboards and DevOps — we cover the entire SaaS stack.",
    image: saas3,
    cards: [
      {
        icon: "◇",
        title: "Auth & SSO",
        text: "OAuth, SAML, OIDC, MFA, magic links, and enterprise SSO — secure and seamless.",
      },
      {
        icon: "◆",
        title: "Multi-Tenancy",
        text: "Strict per-tenant data isolation with row-level security or schema-per-tenant patterns.",
      },
      {
        icon: "○",
        title: "Subscription Billing",
        text: "Stripe-powered plans, metered usage, trials, invoices, dunning, and tax compliance.",
      },
      {
        icon: "●",
        title: "Admin Dashboard",
        text: "Platform analytics, user management, plan overrides, and real-time tenant health views.",
      },
      {
        icon: "◈",
        title: "APIs & Webhooks",
        text: "Versioned REST and GraphQL APIs with rate limiting, auth middleware, and reliable webhooks.",
      },
      {
        icon: "◉",
        title: "DevOps & Observability",
        text: "CI/CD pipelines, error monitoring, structured logging, uptime alerts, and blue-green deploys.",
      },
    ],
  },
  techStack: {
    subtitle: "Our complete SaaS engineering toolbelt",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "tRPC",
      "GraphQL",
      "Postgres",
      "Supabase",
      "Prisma",
      "Stripe",
      "Auth.js",
      "Clerk",
      "Vercel",
      "AWS",
      "Docker",
      "GitHub Actions",
      "Sentry",
      "PostHog",
    ],
    extra: "Audit Logs · Feature Flags · Observability · CI/CD",
  },
  processSteps: {
    subtitle: "From MVP concept to scalable production — step by step",
    items: [
      {
        num: "01",
        title: "Product Strategy & Scope",
        text: "We define the MVP feature set, user personas, monetization model, and technical roadmap — aligned to your business KPIs before writing a single line of code.",
        link: "Know More",
      },
      {
        num: "02",
        title: "Architecture & UX Design",
        text: "Multi-tenancy strategy, database schema, API design, and UX wireframes — reviewed and signed off before development begins.",
        link: "Know More",
      },
      {
        num: "03",
        title: "Core Feature Development",
        text: "Authentication, billing, RBAC, tenant management, and core product features built iteratively with weekly demos and continuous delivery.",
        link: "Know More",
      },
      {
        num: "04",
        title: "Security & Compliance Hardening",
        text: "Penetration test readiness, secrets audit, dependency scanning, audit log review, and GDPR/SOC2 checkbox documentation.",
        link: "Know More",
      },
      {
        num: "05",
        title: "Launch, Operate & Scale",
        text: "Production deployment with CI/CD, uptime monitoring, error tracking, and a 60-day hypercare period to stabilize before you scale your go-to-market.",
        link: "Know More",
      },
    ],
  },
};

/* ─────────────────────────────────────────
   CUSTOM AI AGENTS
───────────────────────────────────────── */
export const customAiAgentsContent = {
  accent: "#00F5FF",
  category: "AI Automation",
  hero: {
    title: "Custom AI Agents",
    subtitle: "Purpose-built agents that do real work and deliver measurable outcomes.",
    description:
      "We design and deploy sales agents, support agents, ops agents, and research agents — each equipped with the right tools, context, memory, and guardrails to autonomously complete tasks and integrate seamlessly into your existing workflows.",
    image: customAi1,
  },
  stats: {
    items: [
      { value: "60+", label: "Agents Deployed" },
      { value: "70", suffix: "%", label: "Time Saved on Tasks" },
      { value: "24/7", label: "Autonomous Availability" },
      { value: "2", suffix: "wk", label: "Pilot Agent Live" },
    ],
    image: customAi2,
  },
  workflow: {
    label: "Custom AI Agent Development Workflow",
    title: "Scope. Design. Equip. Evaluate. Deploy.",
    description:
      "We design task-oriented agents with exactly the right tools, context, memory structure, and guardrails for your use case — then integrate them into your stack and monitor performance in production.",
    steps: [
      { step: "01", label: "Scope" },
      { step: "02", label: "Design" },
      { step: "03", label: "Equip Tools" },
      { step: "04", label: "Evaluate" },
      { step: "05", label: "Deploy" },
    ],
    image: null,
  },
  happyClients: {
    label: "Trusted by sales, support, ops, and research teams",
    title: "Happy Clients",
    stat: "200+",
    subtext: "agents running autonomously in production across industries",
    tags: [
      "Sales Agents",
      "Support Agents",
      "Ops Agents",
      "Research Agents",
      "Multi-Agent Systems",
      "Tool Use",
      "Memory",
      "Forms & Handoffs",
      "CRM Integration",
      "Guardrails",
    ],
  },
  intelligentSection: {
    title: "Agent Design Expertise — Every Type of Agent We Build.",
    description:
      "We build agents that actually act — not just chat. Every agent we deploy has deterministic tools, structured context windows, short and long-term memory, and human-in-the-loop escalation paths. Observable, safe, and continuously improving based on real usage data.",
    bullets: [
      "Sales Agents: Outbound outreach, lead qualification, objection handling, meeting scheduling, and CRM field updates.",
      "Support Agents: FAQ answering, knowledge base lookup, ticket creation, status updates, and live human handoff.",
      "Ops Agents: Task automation, internal scheduling, form filling, workflow triggering, and dashboard updates.",
      "Research Agents: Web search, document synthesis, competitive intelligence, and structured report generation.",
      "Multi-Agent Systems: Orchestrator + specialist agent patterns for complex, multi-step business processes.",
      "Memory & Context: Short-term conversation memory, long-term user preference storage, and retrieval-augmented context injection.",
      "Tool Integration: CRM (Salesforce, HubSpot), ticketing (Jira, Zendesk), calendars (Google, Outlook), and custom internal APIs.",
      "Guardrails & Safety: Output filters, topic constraints, confidence thresholds, human approval gates, and full audit trails.",
      "Evaluation & Improvement: Task success rate tracking, agent trace logs, A/B prompt experiments, and monthly performance reviews.",
    ],
  },
  challengeSolution: {
    challenge:
      "Generic chatbots can answer FAQs but cannot handle multi-step workflows, update records in your CRM, or escalate intelligently — leaving your team doing the same repetitive work every day.",
    solution:
      "We design purpose-built agents with the right tools, memory, and workflows for each specific use case. Every agent has measurable success criteria, a clear escalation path, and full observability — so you know exactly what it's doing, when, and whether it's achieving the outcome you need.",
    tags: ["Purpose-Built", "Tool-Using", "Observable", "Accountable", "Safe", "Integrated"],
  },
  testimonial: {
    quote:
      "Agents should do work, not just talk. We engineer them with real tools, real context, and real accountability — so they deliver outcomes you can measure.",
    attribution: "KrishNova Softwares — Agent Design Team",
    ctaText: "Book a free consultation — let's scope and build your first agent.",
  },
  principles: {
    title: "Why Our Custom Agents Outperform Generic Chatbots",
    subtitle: "Three engineering pillars behind every agent we ship",
    items: [
      {
        title: "Real Tool Use",
        desc: "Agents that actually perform actions — updating CRMs, booking meetings, filing tickets — not just generating text.",
        emoji: "◇",
      },
      {
        title: "Context & Memory",
        desc: "Grounded with your data, user history, and business context — so responses are always relevant and accurate.",
        emoji: "◆",
      },
      {
        title: "Safety & Accountability",
        desc: "Guardrails, confidence thresholds, human approval gates, and audit trails — so you always stay in control.",
        emoji: "○",
      },
    ],
  },
  expertise: {
    title: "Our Custom AI Agent Expertise",
    subtitle:
      "From single-purpose task agents to complex multi-agent orchestration systems — we build them all.",
    image: customAi3,
    cards: [
      {
        icon: "◇",
        title: "Sales Agents",
        text: "Outbound outreach, lead qualification, objection handling, meeting booking, and CRM sync.",
      },
      {
        icon: "◆",
        title: "Support Agents",
        text: "Knowledge base lookup, ticket creation, status updates, and intelligent live human handoff.",
      },
      {
        icon: "○",
        title: "Ops Automation",
        text: "Internal workflows, scheduling, form filling, dashboard updates, and multi-system orchestration.",
      },
      {
        icon: "●",
        title: "Research Agents",
        text: "Web search, document synthesis, competitor intelligence, and structured report generation.",
      },
      {
        icon: "◈",
        title: "Multi-Agent Systems",
        text: "Orchestrator + specialist patterns for complex, parallel, and multi-step business processes.",
      },
      {
        icon: "◉",
        title: "Guardrails & Evaluation",
        text: "Output filters, confidence scores, human approval gates, audit logs, and continuous A/B improvement.",
      },
    ],
  },
  techStack: {
    subtitle: "Our complete AI agent engineering toolbelt",
    items: [
      "OpenAI",
      "Anthropic",
      "Google Gemini",
      "LangChain",
      "LangGraph",
      "LlamaIndex",
      "CrewAI",
      "AutoGen",
      "Supabase",
      "Postgres",
      "Redis",
      "Slack",
      "WhatsApp (WABA)",
      "Salesforce",
      "HubSpot",
      "Zapier",
      "AWS",
      "Vercel",
    ],
    extra: "Guardrails · Tracing · Observability · Human-in-the-Loop",
  },
  processSteps: {
    subtitle: "From use case definition to autonomous production agent",
    items: [
      {
        num: "01",
        title: "Use Case & Goals",
        text: "We define the exact tasks, decision boundaries, success metrics, and escalation triggers — a complete agent spec before we build anything.",
        link: "Know More",
      },
      {
        num: "02",
        title: "Agent Architecture Design",
        text: "Single agent vs. multi-agent, memory strategy, tool selection, context window management, and integration points — all planned and documented.",
        link: "Know More",
      },
      {
        num: "03",
        title: "Tool Development & Integration",
        text: "Build and test every tool your agent needs — CRM writes, calendar bookings, API calls, form submissions — with error handling and fallback logic.",
        link: "Know More",
      },
      {
        num: "04",
        title: "Evaluation & Guardrails",
        text: "Run task success evaluations, red-team edge cases, add output filters and confidence thresholds, and validate human handoff paths are working correctly.",
        link: "Know More",
      },
      {
        num: "05",
        title: "Deploy, Monitor & Improve",
        text: "Production deployment with full trace logging, success rate dashboards, and monthly improvement cycles based on real agent performance data.",
        link: "Know More",
      },
    ],
  },
};
