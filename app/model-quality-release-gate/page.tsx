import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI Model Release Control Center | Hendar Mawan, PhD",
  description: "Interactive AI model release engineering: evaluation playground, baseline/candidate comparison, policy simulation, what-if analysis, safety/performance dashboards, dataset exploration and explainable SHIP / INVESTIGATE / HOLD decisions.",
};

const links = [
  ["GitHub Source", "https://github.com/h00w/model-quality-release-gate", "Source of truth for release policy, React control center, tests, CI and publication automation."],
  ["Hugging Face Space", "https://huggingface.co/spaces/h0000w/model-quality-release-gate", "Canonical interactive Phase 2 demo: dashboard, playground, release simulator, safety and performance views."],
  ["Evaluation Dataset", "https://huggingface.co/datasets/h0000w/model-quality-release-gate", "Public evaluation evidence and normalized result schema."],
  ["Hugging Face Model Card", "https://huggingface.co/h0000w/model-quality-release-gate", "Methodology, release policy and artifact index."],
];

const phase2 = [
  ["Evaluation Playground", "Inspect prompt-level baseline/candidate behavior and comparative evaluation deltas."],
  ["Version Trends", "Track quality, safety, reliability and latency across model versions."],
  ["Policy Simulator", "Tune release tolerances and observe the verdict recompute immediately."],
  ["What-If Mode", "Apply hypothetical candidate changes without mutating source evidence."],
  ["Safety Dashboard", "Surface safety score, severity distribution and security-classified failures."],
  ["Performance Dashboard", "Use P50/P90/P95/P99 latency rather than relying only on the mean."],
  ["Dataset Explorer", "Inspect executed coverage and case-level evaluation evidence."],
];

export default function ModelQualityReleaseGatePage(){
 return <>
  <header className="nav"><div className="shell nav-inner"><Link href="/" className="brand">HENDAR<span>.</span></Link><nav className="nav-links"><Link href="/">Portfolio</Link><Link href="/agentic-ai/">Agentic AI Academy</Link><a href="https://github.com/h00w/model-quality-release-gate" target="_blank" rel="noreferrer">GitHub ↗</a></nav></div></header>
  <main>
   <section className="hero" style={{paddingTop:140,paddingBottom:70}}><div className="shell"><div style={{maxWidth:980}}><div className="hero-eyebrow">PHASE 2 COMPLETE · AI EVALUATION · RELEASE ENGINEERING</div><h1 className="display" style={{fontSize:"clamp(3rem,7vw,6.5rem)",lineHeight:.92}}>AI Model Release Control Center</h1><div className="hero-role" style={{marginTop:22}}>Evaluate → Compare → Investigate → Simulate → Gate → Ship</div><p className="muted" style={{maxWidth:860,fontSize:"1.08rem",lineHeight:1.85,marginTop:22}}>A production-oriented model-evaluation system that combines deterministic release policy with interactive investigation: prompt-level evaluation, tolerance simulation, what-if analysis, safety and latency views, dataset coverage, failure analysis, and explainable <strong>SHIP / INVESTIGATE / HOLD</strong> decisions.</p><div className="hero-actions" style={{marginTop:30}}><a className="btn btn-primary" href="https://huggingface.co/spaces/h0000w/model-quality-release-gate" target="_blank" rel="noreferrer">Open Phase 2 Demo ↗</a><a className="btn btn-ghost" href="https://github.com/h00w/model-quality-release-gate" target="_blank" rel="noreferrer">View Source ↗</a><a className="btn btn-ghost" href="https://huggingface.co/datasets/h0000w/model-quality-release-gate" target="_blank" rel="noreferrer">Open Dataset ↗</a></div></div></div></section>

   <section className="section section-soft"><div className="shell"><div className="section-heading"><div><div className="section-index">01</div><div className="kicker">Phase 2 outcome</div></div><h2 className="section-title">The release gate is now an interactive engineering workbench.</h2></div><div className="card-grid">{phase2.map(([t,c])=><article className="glass card" key={t}><h3>{t}</h3><p className="muted" style={{lineHeight:1.78,fontSize:14}}>{c}</p></article>)}</div></div></section>

   <section className="section"><div className="shell"><div className="section-heading"><div><div className="section-index">02</div><div className="kicker">Release semantics</div></div><h2 className="section-title">A better model can still be the wrong release.</h2></div><div className="card-grid">{[["SHIP","All critical constraints pass and quality is stable or improved."],["INVESTIGATE","A non-critical regression or adverse trade-off requires engineering review."],["HOLD","A critical safety issue or material reliability/correctness regression blocks promotion."]].map(([t,c])=><article className="glass card" key={t}><div className="kicker">{t}</div><h3>{t}</h3><p className="muted" style={{lineHeight:1.78,fontSize:14}}>{c}</p></article>)}</div></div></section>

   <section className="section section-soft"><div className="shell"><div className="section-heading"><div><div className="section-index">03</div><div className="kicker">Architecture</div></div><h2 className="section-title">Evidence, policy and simulation remain separate concerns.</h2></div><div className="glass card" style={{padding:30}}><pre style={{whiteSpace:"pre-wrap",lineHeight:1.8}}>Baseline evaluation     Candidate evaluation{"\n"}        │                     │{"\n"}        └──────────┬──────────┘{"\n"}                   ↓{"\n"}           Metric Aggregation{"\n"}                   ↓{"\n"}          Regression Detection{"\n"}                   ↓{"\n"}            Failure Analysis{"\n"}                   ↓{"\n"}        Policy + What-If Simulation{"\n"}                   ↓{"\n"}        SHIP / INVESTIGATE / HOLD{"\n"}                   ↓{"\n"} Playground · Safety · Performance{"\n"} Dataset Explorer · Evidence Export</pre></div></div></section>

   <section className="section"><div className="shell"><div className="section-heading"><div><div className="section-index">04</div><div className="kicker">Scenario matrix</div></div><h2 className="section-title">Six reproducible cases make policy behavior easy to demonstrate.</h2></div><div className="card-grid">{[["Candidate improves overall","SHIP"],["Latency regression","INVESTIGATE"],["Safety regression","HOLD"],["Code quality regression","HOLD"],["Mixed trade-offs","INVESTIGATE"],["Catastrophic failure","HOLD"]].map(([scenario,decision])=><article className="glass card" key={scenario}><div className="kicker">{decision}</div><h3>{scenario}</h3><p className="muted" style={{fontSize:14,lineHeight:1.75}}>Switch the scenario, inspect its evidence, change the release policy, then use What-If Mode to see how the decision changes.</p></article>)}</div></div></section>

   <section className="section section-soft"><div className="shell"><div className="section-heading"><div><div className="section-index">05</div><div className="kicker">Public evidence chain</div></div><h2 className="section-title">Code, methodology, evaluation evidence and live execution are independently inspectable.</h2></div><div className="card-grid">{links.map(([title,href,copy])=><article className="glass card" key={title}><h3>{title}</h3><p className="muted" style={{lineHeight:1.78,fontSize:14}}>{copy}</p><a className="btn btn-ghost" href={href} target="_blank" rel="noreferrer">Open ↗</a></article>)}</div></div></section>

   <section className="section"><div className="shell"><div className="callout"><div className="kicker">Connection to Agentic AI Academy</div><h2 className="section-title" style={{marginTop:10}}>Evaluation becomes meaningful when it controls release.</h2><p className="muted" style={{maxWidth:850,lineHeight:1.85}}>The release control center extends the Academy’s evaluation, security and production-engineering work with an explicit production boundary: measurable regressions, configurable tolerances, failure inspection, safety/performance evidence and an accountable promotion decision.</p><div className="hero-actions"><Link className="btn btn-primary" href="/agentic-ai/">Open Agentic AI Academy</Link><a className="btn btn-ghost" href="https://huggingface.co/spaces/h0000w/model-quality-release-gate" target="_blank" rel="noreferrer">Run Release Gate ↗</a></div></div></div></section>
  </main>
 </>;
}
