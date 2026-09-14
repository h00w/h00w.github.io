import Link from "next/link";
import { site } from "@/lib/site";

const offers = [
  {
    title: "AI Production Readiness Audit",
    duration: "2–3 weeks",
    buyer: "CTO · Head of AI · CIO",
    outcome: "A decision-ready view of what prevents an AI system from becoming reliable, measurable and governable in production.",
    deliverables: ["Architecture & lifecycle review", "Evaluation and release-gate gap analysis", "Observability, security and governance assessment", "Prioritized 30/60/90-day remediation roadmap"]
  },
  {
    title: "Agentic AI Architecture Sprint",
    duration: "2–4 weeks",
    buyer: "VP Engineering · Head of Product · AI Platform Lead",
    outcome: "A production-oriented agent architecture with bounded tools, evidence, evaluation and human control designed in from the start.",
    deliverables: ["Use-case and autonomy boundary definition", "RAG/tool/MCP architecture", "Permissions, security and human-approval model", "Evaluation plan and deployment blueprint"]
  },
  {
    title: "Secure Edge AI Lifecycle Review",
    duration: "2–4 weeks",
    buyer: "Industrial · IoT · Mobility · Embedded AI teams",
    outcome: "A secure lifecycle design for model and software delivery to edge fleets, including qualification, attestation, staged rollout and rollback.",
    deliverables: ["Device/model lifecycle architecture", "Attestation and artifact-trust review", "OTA/staged deployment and rollback controls", "Qualification evidence and governance roadmap"]
  }
];

export const metadata = {
  title: "AI Advisory & Consulting | Hendar Mawan",
  description: "Production AI, Agentic AI and Secure Edge AI advisory for teams moving prototypes into reliable, governed production systems."
};

export default function AdvisoryPage() {
  return <>
    <header className="nav">
      <div className="shell nav-inner">
        <Link href="/" className="brand">HENDAR<span>.</span></Link>
        <nav className="nav-links">
          <Link href="/">Home</Link>
          <Link href="/#projects">Proof</Link>
          <Link href="/blog/">Insights</Link>
          <a href={`mailto:${site.email}`}>Contact</a>
        </nav>
      </div>
    </header>

    <main>
      <section className="hero" style={{paddingTop:132,paddingBottom:42}}>
        <div className="shell" style={{maxWidth:980}}>
          <div className="hero-eyebrow">AI Advisory · Stockholm / Remote</div>
          <h1 className="display" style={{maxWidth:900}}>Move AI from prototype to governed production.</h1>
          <p style={{maxWidth:850,fontSize:"1.12rem",lineHeight:1.9}}>
            I help engineering and product leaders make Production AI and Agentic AI measurable, secure and operable. Engagements focus on architecture, evaluation, release controls, observability, human oversight, lifecycle evidence and resilient deployment.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href={`mailto:${site.email}?subject=AI%20Advisory%20Inquiry`}>Discuss an engagement</a>
            <Link className="btn btn-ghost" href="/#projects">Review technical proof</Link>
            <a className="btn btn-ghost" href={site.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="shell">
          <div className="section-heading">
            <div><div className="section-index">01</div><div className="kicker">Fixed-scope offers</div></div>
            <h2 className="section-title">Three ways to engage without buying an undefined consulting project.</h2>
          </div>
          <div className="card-grid">
            {offers.map((o) => <article className="glass card" key={o.title}>
              <div className="kicker" style={{fontSize:10}}>{o.duration} · {o.buyer}</div>
              <h3>{o.title}</h3>
              <p className="muted" style={{lineHeight:1.75}}>{o.outcome}</p>
              <ul style={{paddingLeft:20,lineHeight:1.8,color:"#546d88",fontSize:14}}>
                {o.deliverables.map(d => <li key={d}>{d}</li>)}
              </ul>
            </article>)}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="section-heading">
            <div><div className="section-index">02</div><div className="kicker">Best fit</div></div>
            <h2 className="section-title">For teams with real AI ambition and real production constraints.</h2>
          </div>
          <div className="card-grid">
            <div className="glass card"><h3>Prototype → Production</h3><p className="muted">You have a working AI or agent demo, but need evaluation, reliability, release discipline, observability or governance before scaling.</p></div>
            <div className="glass card"><h3>Agentic AI → Controlled Autonomy</h3><p className="muted">You need tools, RAG, MCP or agent workflows without granting uncontrolled authority or losing auditability.</p></div>
            <div className="glass card"><h3>Cloud → Edge Fleet</h3><p className="muted">You need secure model/software delivery, device trust, staged rollout, qualification evidence and rollback across industrial fleets.</p></div>
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="shell">
          <div className="callout">
            <div className="kicker">Technical proof before the sales call</div>
            <h2 className="section-title" style={{marginTop:10}}>Architecture, code, live demos and evaluation evidence are public.</h2>
            <p className="muted" style={{maxWidth:850,lineHeight:1.85}}>
              Review Agentic AI Academy, AI Model Release Control Center, Human Intelligence Assurance Lab and Secure Edge AI Governance before deciding whether I am the right fit. I prefer evidence-led engagements with explicit scope and decision criteria.
            </p>
            <div className="hero-actions">
              <Link className="btn btn-primary" href="/#projects">View flagship work</Link>
              <a className="btn btn-ghost" href={site.github} target="_blank" rel="noreferrer">GitHub</a>
              <a className="btn btn-ghost" href={`mailto:${site.email}?subject=AI%20Advisory%20Inquiry`}>Contact</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  </>;
}
