import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Agentic AI Academy | Hendar Mawan, PhD",
  description:
    "Engineering trustworthy AI agents from learning to production: a 14-module curriculum, engineering portfolio, security and evaluation reference, and enterprise capstone by Hendar Mawan, PhD.",
  keywords: [
    "Agentic AI",
    "AI Engineering",
    "AI Agents",
    "AI Architecture",
    "Secure AI",
    "Trustworthy AI",
    "Production AI",
    "AI Governance",
    "RAG",
    "Multi-Agent Systems",
  ],
  openGraph: {
    title: "Agentic AI Academy — Engineering trustworthy AI agents from learning to production",
    description:
      "Explore, implement and scale trustworthy AI agents through a professional curriculum, engineering labs, case studies and enterprise architecture.",
    url: "https://hendarmawan.se/agentic-ai/",
    type: "website",
    images: [
      {
        url: "https://raw.githubusercontent.com/h00w/agentic-ai/refs/heads/main/assets/agenticai-banner.png",
        width: 1600,
        height: 800,
        alt: "Agentic AI Academy — From Learning to Implementation to Scale",
      },
    ],
  },
};

const modules = [
  ["01", "Exploring Agentic AI", "Opportunity, autonomy, constraints and organizational value."],
  ["02", "Python for Agentic AI", "The Python skills used directly in agent engineering."],
  ["03", "LLM & Agent Foundations", "Structured outputs, planning, verification and model selection."],
  ["04", "Single-Agent Engineering", "Bounded loops, state, tools, retries and stopping conditions."],
  ["05", "Tools, APIs & MCP", "Function calling, permissions, APIs and tool boundaries."],
  ["06", "RAG, Knowledge & Memory", "Retrieval, embeddings, citations and durable state."],
  ["07", "Multi-Agent Systems", "Delegation, routing, supervision and shared state."],
  ["08", "Agent Evaluation", "Task success, correctness, groundedness, safety, latency and cost."],
  ["09", "Security & Safety", "Least privilege, policy gates, sandboxing, approval and audit."],
  ["10", "Production Engineering", "Deployment, reliability, model routing, CI/CD and operations."],
  ["11", "Observability & Operations", "Tracing, metrics, trajectories, cost and failure analysis."],
  ["12", "Governance, Risk & Scaling", "Risk registers, deployment gates, incidents and adoption."],
  ["13", "Enterprise Architecture", "Identity, model/tool gateways, policy, knowledge and audit."],
  ["14", "Leadership & Strategy", "Portfolio prioritization, ROI/TCO and transformation roadmaps."],
];

const outcomes = [
  "Agentic AI Engineer",
  "Production AI Engineer",
  "AI Architect",
  "Trustworthy AI Engineer",
  "AI Security Engineer",
  "AI Engineering Leader",
];

const pillars = [
  ["EXPLORE", "Understand agent capabilities, value, constraints, autonomy and adoption decisions."],
  ["IMPLEMENT", "Engineer agents with tools, memory, RAG, orchestration, evaluation and safeguards."],
  ["SCALE", "Operate agents with security, observability, governance and enterprise architecture."],
];

export default function AgenticAIAcademyPage() {
  return (
    <>
      <header className="nav">
        <div className="shell nav-inner">
          <Link href="/" className="brand">HENDAR<span>.</span></Link>
          <nav className="nav-links">
            <Link href="/">Portfolio</Link>
            <a href="#curriculum">Curriculum</a>
            <a href="#architecture">Architecture</a>
            <a href="#capstone">Capstone</a>
            <a href="https://github.com/h00w/agentic-ai" target="_blank" rel="noreferrer">GitHub ↗</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero" style={{paddingTop: 130, paddingBottom: 72}}>
          <div className="shell">
            <div style={{maxWidth: 980}}>
              <div className="hero-eyebrow">EXPLORE • IMPLEMENT • SCALE</div>
              <h1 className="display" style={{fontSize: "clamp(3rem,8vw,7rem)", lineHeight: .9}}>Agentic AI Academy</h1>
              <div className="hero-role" style={{marginTop: 22}}>Engineering trustworthy AI agents from learning to production.</div>
              <p className="muted" style={{maxWidth: 850, fontSize: "1.08rem", lineHeight: 1.85, marginTop: 22}}>
                A professional, open-source learning and engineering platform for building AI agents that are not only capable, but also measurable, secure, observable, governable and production-ready.
              </p>
              <p style={{marginTop: 22, fontWeight: 800}}>By Hendar Mawan, PhD</p>
              <p className="muted" style={{marginTop: 4}}><strong>Hendar Mawan : AI Engineering Leader</strong><br />AI Engineering · AI Architecture · Agentic AI · Secure AI · Edge AI · AI Governance</p>
              <div className="hero-actions" style={{marginTop: 30}}>
                <a className="btn btn-primary" href="https://github.com/h00w/agentic-ai" target="_blank" rel="noreferrer">Start Learning ↗</a>
                <a className="btn btn-ghost" href="#curriculum">View Curriculum</a>
                <span className="btn btn-ghost" aria-disabled="true" title="Hugging Face demo planned for the next phase">Interactive Demo — Coming Soon</span>
              </div>
            </div>

            <div style={{marginTop: 52, borderRadius: 28, overflow: "hidden", boxShadow: "0 28px 80px rgba(20,45,75,.16)", border: "1px solid rgba(110,145,180,.18)"}}>
              <img
                src="https://raw.githubusercontent.com/h00w/agentic-ai/refs/heads/main/assets/agenticai-banner.png"
                alt="Agentic AI — From Learning to Implementation to Scale"
                style={{width: "100%", display: "block"}}
              />
            </div>
          </div>
        </section>

        <section className="section section-soft">
          <div className="shell">
            <div className="section-heading">
              <div><div className="section-index">01</div><div className="kicker">Why Agentic AI</div></div>
              <h2 className="section-title">Agentic AI is a systems-engineering discipline, not a prompting trick.</h2>
            </div>
            <div className="card-grid">
              {pillars.map(([title, copy]) => (
                <article className="glass card" key={title}>
                  <div className="kicker">{title}</div>
                  <h3>{title === "EXPLORE" ? "Find the right problems" : title === "IMPLEMENT" ? "Build bounded capability" : "Earn production trust"}</h3>
                  <p className="muted" style={{lineHeight: 1.8, fontSize: 14}}>{copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="curriculum" className="section">
          <div className="shell">
            <div className="section-heading">
              <div><div className="section-index">02</div><div className="kicker">14-Module Curriculum</div></div>
              <h2 className="section-title">From first principles to enterprise deployment and AI leadership.</h2>
            </div>
            <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(285px,1fr))", gap: 16}}>
              {modules.map(([index, title, copy]) => (
                <article className="glass card" key={index} style={{padding: 24}}>
                  <div style={{display: "flex", gap: 14, alignItems: "baseline"}}>
                    <span className="section-index" style={{fontSize: 13}}>{index}</span>
                    <h3 style={{margin: 0}}>{title}</h3>
                  </div>
                  <p className="muted" style={{lineHeight: 1.72, fontSize: 13, marginTop: 14}}>{copy}</p>
                </article>
              ))}
            </div>
            <div style={{marginTop: 28}}>
              <a className="btn btn-primary" href="https://github.com/h00w/agentic-ai/tree/main/curriculum" target="_blank" rel="noreferrer">Open Full Curriculum ↗</a>
            </div>
          </div>
        </section>

        <section id="architecture" className="section section-soft">
          <div className="shell">
            <div className="section-heading">
              <div><div className="section-index">03</div><div className="kicker">Learning Architecture</div></div>
              <h2 className="section-title">A complete pathway from beginner to professional Agentic AI engineer and architect.</h2>
            </div>
            <div className="glass card" style={{padding: "34px 28px"}}>
              <div style={{display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "center", gap: 10, fontWeight: 800, fontSize: 13}}>
                {["BEGINNER", "PYTHON", "AI FOUNDATIONS", "AGENTS", "TOOLS", "MEMORY", "RAG", "MULTI-AGENT", "EVALUATION", "SECURITY", "PRODUCTION", "OBSERVABILITY", "GOVERNANCE", "ARCHITECTURE", "AI LEADERSHIP"].map((item, i, all) => (
                  <span key={item} style={{display: "contents"}}>
                    <span className="pill">{item}</span>
                    {i < all.length - 1 && <span className="muted">→</span>}
                  </span>
                ))}
              </div>
            </div>
            <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: 18, marginTop: 22}}>
              {["Complete Beginner · 12–16 weeks", "Python Developer · 8–10 weeks", "AI/ML Engineer · 8 weeks", "AI Product Manager · 6 weeks", "AI Architect / Technical Leader · 8 weeks", "Researcher · architecture + evaluation focus"].map(path => (
                <div className="glass card" key={path} style={{padding: 22}}><strong>{path}</strong></div>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="shell">
            <div className="section-heading">
              <div><div className="section-index">04</div><div className="kicker">Engineering Proof</div></div>
              <h2 className="section-title">The Academy is designed as code, curriculum and production reference—not just tutorials.</h2>
            </div>
            <div className="card-grid">
              {[
                ["10 Enterprise Case Studies", "Customer support, software engineering, cybersecurity, finance, HR, sales, healthcare, manufacturing and public sector."],
                ["10 Progressive Projects", "From a Python Agent Tool Chest through secure agents, multi-agent teams and an enterprise capstone."],
                ["11 Runnable Examples", "Framework-neutral examples for loops, tools, memory, RAG, guardrails, evaluation, multi-agent and observability."],
                ["Evaluation Framework", "Task success, correctness, groundedness, tool accuracy, safety, latency, token usage and estimated cost."],
                ["Security by Design", "Least privilege, policy enforcement, approvals, sandbox boundaries, budgets, validation and audit logging."],
                ["Production Engineering", "Docker, CI/CD, tests, health checks, configuration, logging, retries, timeouts and operational controls."],
              ].map(([title, copy]) => (
                <article className="glass card" key={title}>
                  <h3>{title}</h3>
                  <p className="muted" style={{lineHeight: 1.78, fontSize: 14}}>{copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="capstone" className="section section-soft">
          <div className="shell">
            <div className="section-heading">
              <div><div className="section-index">05</div><div className="kicker">Flagship Capstone</div></div>
              <h2 className="section-title">Responsible Enterprise Research Agent</h2>
            </div>
            <div className="glass card" style={{padding: 30}}>
              <p className="muted" style={{maxWidth: 900, lineHeight: 1.85}}>
                The capstone integrates planning, policy enforcement, bounded tool use, knowledge retrieval, memory, evaluation, human approval, cost controls, failure recovery and auditability into a single enterprise-oriented reference system.
              </p>
              <div style={{display: "flex", flexWrap: "wrap", alignItems: "center", gap: 10, marginTop: 26, fontWeight: 800, fontSize: 12}}>
                {["USER", "CONTROLLER", "PLANNER", "POLICY ENGINE", "TOOL GATEWAY", "RESEARCH TOOLS", "RAG", "EVALUATION", "HUMAN APPROVAL", "REPORT", "AUDIT"].map((item, i, all) => (
                  <span key={item} style={{display: "contents"}}>
                    <span className="pill">{item}</span>
                    {i < all.length - 1 && <span className="muted">→</span>}
                  </span>
                ))}
              </div>
              <div className="hero-actions" style={{marginTop: 28}}>
                <a className="btn btn-primary" href="https://github.com/h00w/agentic-ai/tree/main/projects/10-enterprise-agentic-ai-capstone" target="_blank" rel="noreferrer">View Capstone ↗</a>
                <a className="btn btn-ghost" href="https://github.com/h00w/agentic-ai/tree/main/docs" target="_blank" rel="noreferrer">Architecture & Docs ↗</a>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="shell">
            <div className="section-heading">
              <div><div className="section-index">06</div><div className="kicker">Professional Outcomes</div></div>
              <h2 className="section-title">Build portfolio evidence for engineering, architecture, security and AI leadership roles.</h2>
            </div>
            <div style={{display: "flex", gap: 10, flexWrap: "wrap"}}>
              {outcomes.map(outcome => <span className="pill" key={outcome} style={{padding: "12px 16px"}}>{outcome}</span>)}
            </div>
          </div>
        </section>

        <section className="section section-soft">
          <div className="shell">
            <div className="callout">
              <div className="kicker">Open Source · Engineering First</div>
              <h2 className="section-title" style={{marginTop: 10}}>Learn it. Build it. Evaluate it. Secure it. Scale it.</h2>
              <p className="muted" style={{maxWidth: 820, lineHeight: 1.85}}>
                GitHub remains the canonical source for the curriculum, runnable code, labs, tests, security patterns and enterprise architecture. Interactive Hugging Face and Streamlit experiences will be added in the next deployment phase.
              </p>
              <div className="hero-actions">
                <a className="btn btn-primary" href="https://github.com/h00w/agentic-ai" target="_blank" rel="noreferrer">Explore Agentic AI Academy ↗</a>
                <Link className="btn btn-ghost" href="/">Back to Portfolio</Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="shell" style={{display: "flex", justifyContent: "space-between", gap: 20, flexWrap: "wrap", alignItems: "center"}}>
          <span>© 2026 Hendar Mawan, PhD</span>
          <span style={{display: "flex", gap: 14, flexWrap: "wrap"}}>
            <a href="https://github.com/h00w/agentic-ai" target="_blank" rel="noreferrer">Agentic AI GitHub</a>
            <a href="https://www.linkedin.com/in/hender/" target="_blank" rel="noreferrer">LinkedIn</a>
            <Link href="/">hendarmawan.se</Link>
          </span>
        </div>
      </footer>
    </>
  );
}
