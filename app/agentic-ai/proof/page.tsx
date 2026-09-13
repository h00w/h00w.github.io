import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Agentic AI Recruiter Proof | Hendar Mawan, PhD",
  description:
    "A 60–90 second recruiter walkthrough of the Agentic AI Academy: architecture, live agent playground, evaluation benchmark, engineering lab, security controls and production evidence.",
  openGraph: {
    title: "Agentic AI Recruiter Proof — Hendar Mawan, PhD",
    description:
      "See the full Agentic AI proof chain in under 90 seconds: curriculum, implementation, benchmark, live agent playground and engineering operations lab.",
    url: "https://hendarmawan.se/agentic-ai/proof/",
    type: "website",
    images: [
      {
        url: "https://raw.githubusercontent.com/h00w/agentic-ai/refs/heads/main/agenticai-banner.png",
        width: 1600,
        height: 800,
        alt: "Agentic AI Academy — From Learning to Implementation to Scale",
      },
    ],
  },
};

const proof = [
  {
    step: "01",
    title: "Learn the system",
    copy: "A 14-module Academy covering agents, tools, RAG, MCP, multi-agent systems, evaluation, security, observability, governance and enterprise architecture.",
    label: "Academy",
    href: "https://hendarmawan.se/agentic-ai/",
  },
  {
    step: "02",
    title: "Inspect the implementation",
    copy: "A framework-neutral reference implementation with bounded control flow, explicit policy decisions, tests, security boundaries, CI and production engineering patterns.",
    label: "GitHub",
    href: "https://github.com/h00w/agentic-ai",
  },
  {
    step: "03",
    title: "Experience the agent",
    copy: "A live Hugging Face playground for bounded agent execution, RAG evidence, policy gates, prompt-injection controls and transparent traces.",
    label: "Hugging Face Playground",
    href: "https://huggingface.co/spaces/h0000w/hendar-agentic-ai",
  },
  {
    step: "04",
    title: "Benchmark the agent",
    copy: "A public 48-case evaluation and security benchmark across task success, tool routing, RAG groundedness, prompt injection, unsafe actions, policy decisions, multi-agent coordination and regressions.",
    label: "Benchmark Dataset",
    href: "https://huggingface.co/datasets/h0000w/hendar-agentic-ai-dataset",
  },
  {
    step: "05",
    title: "Operate the agent",
    copy: "A Streamlit engineering lab for per-domain pass rates, trace inspection, policy decisions, RAG evidence, security failures, regression comparison, latency/cost metrics, release gates and downloadable reports.",
    label: "Engineering Lab",
    href: "https://agentic-ai-engineering-lab.streamlit.app/",
  },
];

const signals = [
  ["Architecture", "Controller → planner → policy engine → tool gateway → RAG/tools → evaluation → human approval → audit."],
  ["Evaluation", "Task success, groundedness, routing accuracy, safety, latency, tokens, estimated cost and regression behavior."],
  ["Security", "Least privilege, prompt-injection resistance, unsafe-action blocking, approval gates, bounded execution and audit evidence."],
  ["Production", "CI, deterministic reference behavior, release thresholds, regression checks, observability and operational evidence."],
];

export default function AgenticAIProofPage() {
  return (
    <>
      <header className="nav">
        <div className="shell nav-inner">
          <Link href="/" className="brand">HENDAR<span>.</span></Link>
          <nav className="nav-links">
            <Link href="/agentic-ai/">Academy</Link>
            <a href="#proof-chain">Proof Chain</a>
            <a href="#architecture">Architecture</a>
            <a href="#walkthrough">90-sec Walkthrough</a>
            <a href="https://github.com/h00w/agentic-ai" target="_blank" rel="noreferrer">GitHub ↗</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero" style={{ minHeight: "auto", paddingTop: 126, paddingBottom: 58 }}>
          <div className="shell">
            <div style={{ maxWidth: 1020 }}>
              <div className="hero-eyebrow">RECRUITER / TECHNICAL REVIEWER PROOF</div>
              <h1 className="display" style={{ fontSize: "clamp(3rem,7vw,6.5rem)", lineHeight: .95 }}>
                Agentic AI in 90 seconds
              </h1>
              <div className="hero-role" style={{ marginTop: 22 }}>
                Problem → Architecture → Code → Benchmark → Live Demo → Evaluation → Security → Production Evidence
              </div>
              <p className="muted" style={{ maxWidth: 930, fontSize: "1.08rem", lineHeight: 1.85, marginTop: 24 }}>
                This page is the shortest path through the Agentic AI Academy. It shows how I approach agentic AI as an engineering system: bounded autonomy, explicit policy, measurable evaluation, operational controls and evidence for release decisions.
              </p>
              <p style={{ marginTop: 18, fontWeight: 800 }}>Hendar Mawan, PhD · AI Engineering Leader</p>
              <div className="hero-actions" style={{ marginTop: 28 }}>
                <a className="btn btn-primary" href="https://agentic-ai-engineering-lab.streamlit.app/" target="_blank" rel="noreferrer">Open Engineering Lab ↗</a>
                <a className="btn btn-ghost" href="https://huggingface.co/spaces/h0000w/hendar-agentic-ai" target="_blank" rel="noreferrer">Try Playground ↗</a>
                <a className="btn btn-ghost" href="https://github.com/h00w/agentic-ai" target="_blank" rel="noreferrer">Inspect Source ↗</a>
              </div>
            </div>

            <div style={{ marginTop: 46, borderRadius: 24, overflow: "hidden", border: "1px solid rgba(79,113,157,.14)", boxShadow: "0 24px 70px rgba(61,92,132,.12)" }}>
              <img
                src="https://raw.githubusercontent.com/h00w/agentic-ai/refs/heads/main/agenticai-banner.png"
                alt="Agentic AI Academy"
                style={{ width: "100%", display: "block" }}
              />
            </div>
          </div>
        </section>

        <section id="proof-chain" className="section section-soft">
          <div className="shell">
            <div className="section-heading">
              <div><div className="section-index">01</div><div className="kicker">Proof Chain</div></div>
              <h2 className="section-title">Five public surfaces, each proving a different engineering competency.</h2>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))", gap: 18 }}>
              {proof.map(item => (
                <article className="glass card" key={item.step}>
                  <div className="section-index">{item.step}</div>
                  <h3>{item.title}</h3>
                  <p className="muted" style={{ lineHeight: 1.78, fontSize: 14 }}>{item.copy}</p>
                  <div style={{ marginTop: 18 }}>
                    <a href={item.href} target="_blank" rel="noreferrer" style={{ color: "#446a99", fontWeight: 800, fontSize: 13 }}>{item.label} ↗</a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="architecture" className="section">
          <div className="shell">
            <div className="section-heading">
              <div><div className="section-index">02</div><div className="kicker">Architecture</div></div>
              <h2 className="section-title">The agent is one component inside a governed engineering system.</h2>
            </div>
            <div className="glass card" style={{ padding: 30 }}>
              <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 10, fontWeight: 800, fontSize: 12 }}>
                {["USER", "CONTROLLER", "PLANNER", "POLICY ENGINE", "TOOL GATEWAY", "RAG / TOOLS", "EVALUATION", "HUMAN APPROVAL", "RESPONSE", "AUDIT"].map((item, index, all) => (
                  <span key={item} style={{ display: "contents" }}>
                    <span className="pill">{item}</span>
                    {index < all.length - 1 && <span className="muted">→</span>}
                  </span>
                ))}
              </div>
            </div>
            <div className="card-grid" style={{ marginTop: 22 }}>
              {signals.map(([title, copy]) => (
                <article className="glass card" key={title}>
                  <div className="kicker">{title}</div>
                  <p className="muted" style={{ lineHeight: 1.8, fontSize: 14 }}>{copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="walkthrough" className="section section-soft">
          <div className="shell">
            <div className="section-heading">
              <div><div className="section-index">03</div><div className="kicker">60–90 Second Walkthrough</div></div>
              <h2 className="section-title">The exact story to tell a recruiter or technical reviewer.</h2>
            </div>
            <div className="glass card" style={{ padding: 30 }}>
              <p className="muted" style={{ lineHeight: 1.9, fontSize: "1rem", maxWidth: 1000 }}>
                “I built the Agentic AI Academy to demonstrate how I engineer trustworthy agents from first principles through production operations. The GitHub repository is the canonical source: curriculum, reference architecture, code, tests, security patterns and CI. The Hugging Face Playground lets you experience a bounded agent and inspect RAG, policy and prompt-injection behavior. The public benchmark then tests eight domains including task success, tool routing, groundedness, unsafe actions and regressions. Finally, the Streamlit Engineering Lab turns those benchmark cases into operational evidence: pass rates, traces, security failures, latency and cost, regression comparisons and a configurable release gate. The key point is that I do not treat an agent as just a model call—I design the control plane around it so capability can be evaluated, secured, observed and governed before release.”
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: 18, marginTop: 22 }}>
              <article className="glass card">
                <div className="kicker">0–15 sec</div>
                <h3>Problem & positioning</h3>
                <p className="muted" style={{ lineHeight: 1.75, fontSize: 14 }}>Open the Academy page. Say that the goal is trustworthy agent engineering, not another chatbot demo.</p>
              </article>
              <article className="glass card">
                <div className="kicker">15–35 sec</div>
                <h3>Architecture & source</h3>
                <p className="muted" style={{ lineHeight: 1.75, fontSize: 14 }}>Show the GitHub architecture and explain controller, policy, tools/RAG, evaluation, approval and audit boundaries.</p>
              </article>
              <article className="glass card">
                <div className="kicker">35–55 sec</div>
                <h3>Agent + benchmark</h3>
                <p className="muted" style={{ lineHeight: 1.75, fontSize: 14 }}>Open the Hugging Face Playground, then the dataset. Emphasize transparent behavior and repeatable benchmark cases.</p>
              </article>
              <article className="glass card">
                <div className="kicker">55–80 sec</div>
                <h3>Operations proof</h3>
                <p className="muted" style={{ lineHeight: 1.75, fontSize: 14 }}>Open the Engineering Lab. Switch from Reference baseline to a regression profile and show the release gate change.</p>
              </article>
              <article className="glass card">
                <div className="kicker">80–90 sec</div>
                <h3>Close on value</h3>
                <p className="muted" style={{ lineHeight: 1.75, fontSize: 14 }}>Conclude: capability is useful only when the complete system can be measured, secured, observed and governed.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="shell">
            <div className="callout">
              <div className="kicker">Recruiter Shortcut</div>
              <h2 className="section-title" style={{ marginTop: 10 }}>Start with the Engineering Lab, then inspect the source.</h2>
              <p className="muted" style={{ maxWidth: 900, lineHeight: 1.85 }}>
                For a fast technical review, open the Engineering Lab, trigger a regression profile, inspect the failed cases and release gate, then follow the source link to the canonical GitHub implementation.
              </p>
              <div className="hero-actions">
                <a className="btn btn-primary" href="https://agentic-ai-engineering-lab.streamlit.app/" target="_blank" rel="noreferrer">Engineering Lab ↗</a>
                <a className="btn btn-ghost" href="https://github.com/h00w/agentic-ai" target="_blank" rel="noreferrer">Source ↗</a>
                <Link className="btn btn-ghost" href="/agentic-ai/">Full Academy</Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="shell" style={{ display: "flex", justifyContent: "space-between", gap: 20, flexWrap: "wrap", alignItems: "center" }}>
          <span>© 2026 Hendar Mawan, PhD</span>
          <span style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
            <a href="https://agentic-ai-engineering-lab.streamlit.app/" target="_blank" rel="noreferrer">Engineering Lab</a>
            <a href="https://huggingface.co/spaces/h0000w/hendar-agentic-ai" target="_blank" rel="noreferrer">Playground</a>
            <a href="https://github.com/h00w/agentic-ai" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/hender/" target="_blank" rel="noreferrer">LinkedIn</a>
          </span>
        </div>
      </footer>
    </>
  );
}
