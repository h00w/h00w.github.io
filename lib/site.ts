export const site = {
  name: "Hendar Mawan",
  nickname: "h00w",
  location: "Stockholm, Sweden",
  headline: "AI Engineering Leader | AI Architect | Director of AI Pathway",
  tagline: "Building Production AI Systems. Leading Secure AI Transformation.",
  summary: "AI engineering leader combining hands-on architecture, production AI systems, secure Edge AI, platform engineering and R&D leadership to turn prototypes into scalable, governed products.",
  github: "https://github.com/h00w",
  linkedin: "https://www.linkedin.com/in/hender/",
  lifeai: "https://www.life-ai.se/",
  email: "hendar.rise@gmail.com"
};

export const capabilities = [
  { title: "AI Engineering", items: ["Generative AI", "LLM Engineering", "RAG", "Agentic AI", "AI Evaluation", "Prompt Engineering", "AI Security"] },
  { title: "Production AI", items: ["MLOps", "AI Lifecycle", "Observability", "Human-in-the-Loop", "AI Governance", "Model Deployment", "Rollback"] },
  { title: "AI Platforms", items: ["System Architecture", "APIs", "Workflow Automation", "Cloud Native", "Kubernetes", "Docker", "CI/CD"] },
  { title: "Edge & Security", items: ["Edge AI", "Embedded Linux", "Trusted Computing", "TPM/TEE", "RISC-V", "FPGA", "IoT Security"] },
  { title: "Leadership", items: ["AI Strategy", "R&D Leadership", "Technical Roadmaps", "Partner Management", "Research-to-Product", "Customer Engagement"] }
];

export const projects = [
  {
    title: "LIFE-AI",
    eyebrow: "Industrial AI Programme",
    description: "Lifecycle-first Edge AI for industrial fleets: optimization, governed deployment, monitoring, rollback and operational evidence.",
    role: "Project Lead · R&D Leadership · Multi-company AI programme",
    tags: ["Edge AI", "AI Lifecycle", "Industrial AI", "Governance"],
    href: "https://www.life-ai.se/",
    cover: "/lifeai.png"
  },
  {
    title: "PromptPulse",
    eyebrow: "Continuous LLM Evaluation & Release Gating",
    description: "Production-oriented LLM quality pipeline that turns chatbot behavior into repeatable release gates across relevance, groundedness, reference coverage and policy compliance, with live Hugging Face inference and optional DeepEval semantic judging.",
    role: "Architecture · LLM Evaluation · CI/CD · Production AI",
    tags: ["LLMOps", "AI Evaluation", "DeepEval", "GitHub Actions", "Hugging Face"],
    href: "https://github.com/h00w/PromptPulse",
    demo: "https://prompt-pulse.streamlit.app/",
    cover: "/PromptPulse.png"
  },
  {
    title: "Secure Edge AI Governance",
    eyebrow: "Governed AI Release Control",
    description: "Executable fail-closed governance for Edge AI releases with two-person approval, risk and drift gates, attestation evidence and MCP tooling.",
    role: "Architecture · Policy · Implementation",
    tags: ["AI Governance", "MCP", "Security", "Human Approval"],
    href: "https://github.com/h00w/secure-edge-ai-governance",
    demo: "https://secure-edge-ai-governance.streamlit.app/",
    cover: "https://raw.githubusercontent.com/h00w/secure-edge-ai-governance/refs/heads/main/edgeai.png"
  },
  {
    title: "Production AI Automation",
    eyebrow: "AI Workflow Engineering",
    description: "Production-oriented workflow automation with typed contracts, tool boundaries, business-rule verification, human approval and auditable outcomes.",
    role: "Architecture · Implementation · Validation",
    tags: ["Production AI", "Automation", "Python", "CI/CD"],
    href: "https://github.com/h00w/production-ai-automation",
    demo: "https://pro-ai-automation.streamlit.app/",
    cover: "https://raw.githubusercontent.com/h00w/production-ai-automation/refs/heads/main/cover.png"
  }
];

export const experience = [
  { date: "2024 — Present", role: "R&D Director & COO", org: "RIoT Secure AB", copy: "Lead AI/Edge AI strategy, R&D execution, platform architecture, technical productization, customer-facing innovation and industrial research programmes." },
  { date: "2024 — Present", role: "Researcher & Project Manager", org: "RISE Research Institutes of Sweden", copy: "Applied R&D across AI infrastructure, trusted computing, cybersecurity and industrial systems, translating research into deployable technology." },
  { date: "2026 — Present", role: "Research Engineer & Master's Thesis Supervisor", org: "KTH Royal Institute of Technology", copy: "Supervise graduate research in AI, cybersecurity, distributed systems, LLM security and secure digital infrastructure." },
  { date: "2024 — Present", role: "Co-founder & AI Software Lead", org: "AlpLab.ai", copy: "Lead Edge AI SDK architecture, embedded AI workflows, developer tooling and reproducible deployment infrastructure." },
  { date: "2021 — 2023", role: "Assistant Professor / Researcher", org: "Kumamoto University", copy: "Research and teaching in computer architecture, FPGA systems, heterogeneous computing and hardware/software co-design." }
];

export const leadership = [
  ["AI Strategy", "Translate business goals, technical constraints and risk into an executable AI roadmap."],
  ["Engineering Leadership", "Lead multidisciplinary teams from system architecture through implementation, validation and deployment."],
  ["Production Ownership", "Design for lifecycle operations: deployment, monitoring, governance, rollback and operational evidence."],
  ["Research-to-Product", "Turn advanced AI and systems research into capabilities that customers can deploy and operate."],
  ["Partner & Stakeholder Alignment", "Bridge engineering, customers, researchers, executives, funders and industrial partners."],
  ["Secure AI Governance", "Make policy, accountability, evidence and recovery part of the platform architecture itself."]
];
