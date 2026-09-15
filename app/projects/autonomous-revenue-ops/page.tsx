import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Autonomous Revenue Ops | Production AI Automation Case Study | Hendar Mawan, PhD",
  description: "Production-grade Agentic AI and revenue-operations automation with deterministic authorization, durable workflow state, SaaS integrations, release gates, retained validation evidence and operational telemetry.",
};

const proofLinks = [
  ["GitHub Source", "https://github.com/h00w/autonomous-revenue-ops", "Architecture, typed API, tests, CI, release controls, n8n, Postman, Grafana and deployment assets."],
  ["Hugging Face Space", "https://huggingface.co/spaces/h0000w/autonomous-revenue-ops", "Interactive policy and system demonstration."],
  ["Evaluation Dataset", "https://huggingface.co/datasets/h0000w/autonomous-revenue-ops", "Public regression/evaluation cases used to keep behavior inspectable."],
  ["System Card", "https://huggingface.co/h0000w/autonomous-revenue-ops", "Intended use, limitations and evidence boundaries."],
  ["Public Proof", "https://github.com/h00w/autonomous-revenue-ops/blob/main/docs/public-proof.md", "Fast reviewer path through architecture, controls and verified evidence."],
];

const controls = [
  ["AI judgment", "Research, qualification and outreach agents produce structured proposals and evidence."],
  ["Authorization", "Deterministic policy decides AUTO_ROUTE, HUMAN_REVIEW, RESEARCH_MORE, NURTURE or BLOCK."],
  ["Workflow state", "Durable orchestration, revisions, idempotency, leases, checkpoints and execution receipts live outside the LLM."],
  ["Side effects", "HubSpot, Salesforce, Slack, SMTP and webhook adapters execute only after policy and workflow authorization."],
  ["Reliability", "Retries, circuit breaker, DLQ, replay and recovery paths make failure explicit rather than exceptional."],
  ["Security", "API-key boundary, signed webhooks, replay protection, secret-safe evidence and hardened container/runtime controls."],
  ["Evaluation", "Frozen deterministic cases, prompt manifests, release gates and retained external-validation contracts."],
  ["Operations", "Measured runtime aggregates, Prometheus-compatible metrics and reviewer-facing dashboard surfaces."],
];

const evidence = [
  ["Regression suite", "119/119", "PASS"],
  ["Policy benchmark", "6/6", "100%"],
  ["Deterministic agent decisions", "7 cases", "100%"],
  ["Public surface contracts", "3/3", "PASS"],
  ["Policy violations", "0", "PASS"],
  ["Release version contract", "v0.10.0", "PASS"],
  ["Release-integrity verification", "SBOM + manifest + provenance", "PASS"],
  ["Hardened container liveness", "HTTP 200", "PASS"],
  ["Hardened container readiness", "HTTP 200", "PASS"],
];

const surfaces = [
  ["Hugging Face", "Interactive behavior, dataset and system card", "Live"],
  ["Streamlit Operations Center", "Measured-runtime reviewer dashboard", "Source ready"],
  ["n8n", "Visual orchestration and execution trace", "Workflow ready"],
  ["Render staging API", "FastAPI/OpenAPI sandbox", "Deployment next"],
  ["Grafana Cloud", "Aggregate operational telemetry", "Dashboard ready"],
  ["Postman", "Forkable API examples", "Collection ready"],
  ["GitHub Releases / GHCR", "Versioned runtime artifact", "Workflow ready"],
];

export default function AutonomousRevenueOpsPage(){
  return <>
    <header className="nav"><div className="shell nav-inner"><Link href="/" className="brand">HENDAR<span>.</span></Link><nav className="nav-links"><Link href="/">Portfolio</Link><Link href="/agentic-ai/">Agentic AI Academy</Link><Link href="/blog/">Blog</Link><a href="https://github.com/h00w/autonomous-revenue-ops" target="_blank" rel="noreferrer">GitHub ↗</a></nav></div></header>
    <main>
      <section className="hero" style={{paddingTop:130,paddingBottom:42}}><div className="shell"><div style={{maxWidth:1080}}><div className="hero-eyebrow">PRODUCTION AI · AGENTIC AUTOMATION · REVOPS ENGINEERING</div><h1 className="display" style={{fontSize:"clamp(3rem,7vw,6.5rem)",lineHeight:.92}}>Autonomous Revenue Ops</h1><div className="hero-role" style={{marginTop:22}}>AI may propose. Software validates. Policy authorizes. Evidence proves.</div><p className="muted" style={{maxWidth:940,fontSize:"1.08rem",lineHeight:1.85,marginTop:22}}>A production-oriented reference implementation for revenue automation where AI contributes research, qualification and outreach judgment without owning authorization, durable state or uncontrolled side effects. The system combines multi-model agents, deterministic policy, restart-safe orchestration, SaaS adapters, release engineering and operational evidence.</p><div className="hero-actions" style={{marginTop:30}}><a className="btn btn-primary" href="https://huggingface.co/spaces/h0000w/autonomous-revenue-ops" target="_blank" rel="noreferrer">Open Live Space ↗</a><a className="btn btn-ghost" href="https://github.com/h00w/autonomous-revenue-ops" target="_blank" rel="noreferrer">Inspect Source ↗</a><a className="btn btn-ghost" href="https://github.com/h00w/autonomous-revenue-ops/blob/main/docs/public-proof.md" target="_blank" rel="noreferrer">90-sec Proof ↗</a></div></div></div></section>

      <section style={{paddingBottom:40}}><div className="shell"><a href="https://github.com/h00w/autonomous-revenue-ops" target="_blank" rel="noreferrer" style={{display:"block",borderRadius:22,overflow:"hidden",border:"1px solid rgba(79,113,157,.14)",boxShadow:"0 24px 70px rgba(61,92,132,.12)",background:"#fff"}}><img src="https://raw.githubusercontent.com/h00w/autonomous-revenue-ops/refs/heads/main/autorevops-poster.png" alt="Autonomous Revenue Ops production AI automation architecture" style={{display:"block",width:"100%",height:"auto"}} /></a></div></section>

      <section className="section section-soft"><div className="shell"><div className="section-heading"><div><div className="section-index">01</div><div className="kicker">The engineering problem</div></div><h2 className="section-title">A happy-path lead-scoring demo is not autonomous operations.</h2></div><div className="glass card" style={{padding:30}}><p className="muted" style={{fontSize:"1.04rem",lineHeight:1.9,maxWidth:980}}>An LLM can classify a lead and draft an email in seconds. The difficult engineering starts when the workflow receives duplicates, malformed input, low-confidence output, stale state, provider errors, approval cases, rate limits and actions with real business consequences. I built this project to make those boundaries explicit: the model proposes; deterministic software decides what is allowed; durable workflow state determines what can execute; and retained evidence supports each maturity claim.</p></div></div></section>

      <section className="section"><div className="shell"><div className="section-heading"><div><div className="section-index">02</div><div className="kicker">End-to-end architecture</div></div><h2 className="section-title">Separate reasoning, authorization, state and execution.</h2></div><div className="glass card" style={{padding:30,overflowX:"auto"}}><pre style={{whiteSpace:"pre",lineHeight:1.75,minWidth:780}}>{`Lead / signed webhook / n8n
          ↓
Authentication + typed validation
          ↓
Correlation + DB-backed idempotency
          ↓
Durable workflow run
          ↓
Research Agent → Qualification Agent
          ↓
Structured-output validation
          ↓
Deterministic policy
   ↙          ↓           ↓           ↘
AUTO_ROUTE  HUMAN_REVIEW  RESEARCH_MORE  BLOCK
   ↓          ↓           ↓             ↓
READY       checkpoint   checkpoint    complete
   ↓          ↓           └──→ research
   └──────────┘
          ↓
Outreach Agent
          ↓
Execution claim / lease
          ↓
HubSpot · Salesforce · Slack · SMTP · Webhook
          ↓
Retry · Circuit Breaker · DLQ · Replay
          ↓
Execution receipt
          ↓
Measured runtime analytics + retained evidence`}</pre></div></div></section>

      <section className="section section-soft"><div className="shell"><div className="section-heading"><div><div className="section-index">03</div><div className="kicker">Control plane</div></div><h2 className="section-title">The important work happens around the model.</h2></div><div className="card-grid">{controls.map(([title,copy])=><article className="glass card" key={title}><h3>{title}</h3><p className="muted" style={{lineHeight:1.78,fontSize:14}}>{copy}</p></article>)}</div></div></section>

      <section className="section"><div className="shell"><div className="section-heading"><div><div className="section-index">04</div><div className="kicker">Verified evidence</div></div><h2 className="section-title">The portfolio claim is tied to inspectable gates.</h2></div><div className="glass card" style={{padding:20,overflowX:"auto"}}><div style={{minWidth:720}}><div style={{display:"grid",gridTemplateColumns:"2fr 1.3fr 1fr",gap:12,padding:"10px 12px",fontSize:11,fontWeight:800,letterSpacing:".08em",opacity:.65}}><span>Evidence</span><span>Observed</span><span>Result</span></div>{evidence.map(([name,value,result])=><div key={name} style={{display:"grid",gridTemplateColumns:"2fr 1.3fr 1fr",gap:12,padding:"12px",borderTop:"1px solid rgba(127,127,127,.18)",fontSize:14}}><strong>{name}</strong><span>{value}</span><strong>{result}</strong></div>)}</div></div><p className="muted" style={{marginTop:18,lineHeight:1.8,maxWidth:920}}>The 100% deterministic agent result is controlled contract/governance evidence, not a claim that OpenAI, Anthropic or Gemini have 100% real-world accuracy. Live provider and SaaS execution remains a separate retained-evidence step.</p></div></section>

      <section className="section section-soft"><div className="shell"><div className="section-heading"><div><div className="section-index">05</div><div className="kicker">Public proof stack</div></div><h2 className="section-title">Use the right surface for the proof being shown.</h2></div><div className="glass card" style={{padding:20,overflowX:"auto"}}><div style={{minWidth:760}}><div style={{display:"grid",gridTemplateColumns:"1.4fr 2fr 1fr",gap:12,padding:"10px 12px",fontSize:11,fontWeight:800,letterSpacing:".08em",opacity:.65}}><span>Surface</span><span>Purpose</span><span>Status</span></div>{surfaces.map(([name,purpose,status])=><div key={name} style={{display:"grid",gridTemplateColumns:"1.4fr 2fr 1fr",gap:12,padding:"12px",borderTop:"1px solid rgba(127,127,127,.18)",fontSize:14}}><strong>{name}</strong><span>{purpose}</span><strong>{status}</strong></div>)}</div></div><div className="callout" style={{marginTop:18}}><div className="kicker">Reviewer path</div><pre style={{whiteSpace:"pre-wrap",lineHeight:1.8,marginTop:12}}>{`Portfolio case study → GitHub architecture → Hugging Face demo
→ Streamlit Operations Center → n8n workflow → Postman API
→ Grafana telemetry → CI / release evidence → retained live validation`}</pre></div></div></section>

      <section className="section"><div className="shell"><div className="section-heading"><div><div className="section-index">06</div><div className="kicker">Maturity boundary</div></div><h2 className="section-title">Strong production-candidate evidence without overstating what has not been run.</h2></div><div className="glass card" style={{padding:30}}><p className="muted" style={{fontSize:"1.03rem",lineHeight:1.9,maxWidth:960}}>The current system is release-integrity controlled, contract-tested, restart-safe, security-hardened and single-replica by design. It is <strong>not yet Production Validated</strong>. Real provider/SaaS/staging runs must be executed through the retained-evidence workflow, long-window SLO evidence must be collected, and the SQLite persistence boundary must move to a shared transactional backend before horizontal-replica claims are made.</p></div></div></section>

      <section className="section section-soft"><div className="shell"><div className="section-heading"><div><div className="section-index">07</div><div className="kicker">Public artifacts</div></div><h2 className="section-title">Source → demo → evaluation → system card → operational proof.</h2></div><div className="card-grid">{proofLinks.map(([title,href,copy])=><article className="glass card" key={title}><h3>{title}</h3><p className="muted" style={{lineHeight:1.78,fontSize:14}}>{copy}</p><a className="btn btn-ghost" href={href} target="_blank" rel="noreferrer">Open ↗</a></article>)}</div></div></section>

      <section className="section"><div className="shell"><div className="callout"><div className="kicker">Engineering takeaway</div><h2 className="section-title" style={{marginTop:10}}>Autonomy is useful only when the surrounding system knows when not to act.</h2><p className="muted" style={{maxWidth:920,lineHeight:1.85}}>This project is less about replacing revenue teams with an agent and more about engineering a trustworthy control plane: bounded AI judgment, explicit policy, durable state, recoverable execution, observable outcomes and evidence-linked releases.</p><div className="hero-actions"><a className="btn btn-primary" href="https://huggingface.co/spaces/h0000w/autonomous-revenue-ops" target="_blank" rel="noreferrer">Try the Space ↗</a><Link className="btn btn-ghost" href="/blog/why-revenue-automation-needs-a-control-plane/">Read the engineering article</Link><Link className="btn btn-ghost" href="/agentic-ai/">Agentic AI Academy</Link></div></div></div></section>
    </main>
  </>;
}
