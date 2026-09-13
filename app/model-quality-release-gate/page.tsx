import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI Model Release Control Center | Hendar Mawan, PhD",
  description: "Enforceable AI model release engineering with machine-readable decisions, CI gating, tamper-evident evidence, versioned benchmarks, safety/performance analysis and explainable SHIP / INVESTIGATE / HOLD policy.",
};

const links = [
  ["GitHub Source", "https://github.com/h00w/model-quality-release-gate", "Source of truth for release policy, evidence generator, CI enforcement, tests and publication automation."],
  ["Hugging Face Space", "https://huggingface.co/spaces/h0000w/model-quality-release-gate", "Interactive evaluation workbench: dashboard, playground, simulator, safety and performance views."],
  ["Versioned Dataset", "https://huggingface.co/datasets/h0000w/model-quality-release-gate", "Published CodeBench-Safety benchmark versions and evaluation evidence."],
  ["Methodology Card", "https://huggingface.co/h0000w/model-quality-release-gate", "Release policy, methodology and artifact index."],
];

const phase3 = [
  ["Machine-readable decision", "Every release evaluation emits decision.json with policy, benchmark, deltas and SHIP / INVESTIGATE / HOLD outcome."],
  ["Evidence manifest", "The run manifest binds benchmark version, policy version, source commit and workflow run to the decision."],
  ["Tamper-evident bundle", "SHA-256 checksums make later modification of release input or decision artifacts detectable."],
  ["CI release enforcement", "A HOLD result exits non-zero and becomes a failing GitHub status check while preserving the evidence artifact."],
  ["Versioned benchmark", "CodeBench-Safety v1.0.0 is stored independently from model outputs to prevent silent benchmark drift."],
  ["Published dataset versions", "The same benchmark version is synchronized to Hugging Face for public reproducibility."],
  ["Release badges", "Separate badges expose workflow health and the reference release decision without conflating the two."],
];

export default function ModelQualityReleaseGatePage(){
 return <>
  <header className="nav"><div className="shell nav-inner"><Link href="/" className="brand">HENDAR<span>.</span></Link><nav className="nav-links"><Link href="/">Portfolio</Link><Link href="/agentic-ai/">Agentic AI Academy</Link><a href="https://github.com/h00w/model-quality-release-gate" target="_blank" rel="noreferrer">GitHub ↗</a></nav></div></header>
  <main>
   <section className="hero" style={{paddingTop:140,paddingBottom:70}}><div className="shell"><div style={{maxWidth:980}}><div className="hero-eyebrow">PHASE 3 COMPLETE · AI EVALUATION · RELEASE ENGINEERING · CI GOVERNANCE</div><h1 className="display" style={{fontSize:"clamp(3rem,7vw,6.5rem)",lineHeight:.92}}>AI Model Release Control Center</h1><div className="hero-role" style={{marginTop:22}}>Evaluate → Compare → Investigate → Simulate → Gate → Enforce → Ship</div><p className="muted" style={{maxWidth:880,fontSize:"1.08rem",lineHeight:1.85,marginTop:22}}>A production-oriented model-release system that turns evaluation evidence into an enforceable software-delivery control: machine-readable release decisions, versioned benchmarks, tamper-evident evidence bundles, CI status checks, safety/performance investigation and explainable <strong>SHIP / INVESTIGATE / HOLD</strong> policy.</p><div className="hero-actions" style={{marginTop:30}}><a className="btn btn-primary" href="https://github.com/h00w/model-quality-release-gate" target="_blank" rel="noreferrer">Inspect Phase 3 Source ↗</a><a className="btn btn-ghost" href="https://huggingface.co/spaces/h0000w/model-quality-release-gate" target="_blank" rel="noreferrer">Open Interactive Demo ↗</a><a className="btn btn-ghost" href="https://huggingface.co/datasets/h0000w/model-quality-release-gate" target="_blank" rel="noreferrer">Open Dataset ↗</a></div></div></div></section>

   <section className="section section-soft"><div className="shell"><div className="section-heading"><div><div className="section-index">01</div><div className="kicker">Phase 3 outcome</div></div><h2 className="section-title">Evaluation now participates directly in software release control.</h2></div><div className="card-grid">{phase3.map(([t,c])=><article className="glass card" key={t}><h3>{t}</h3><p className="muted" style={{lineHeight:1.78,fontSize:14}}>{c}</p></article>)}</div></div></section>

   <section className="section"><div className="shell"><div className="section-heading"><div><div className="section-index">02</div><div className="kicker">Enforcement semantics</div></div><h2 className="section-title">A HOLD decision is no longer advisory.</h2></div><div className="card-grid">{[["SHIP","All critical constraints pass. CI succeeds and the candidate is eligible for promotion."],["INVESTIGATE","The gate preserves a successful status but explicitly requires engineering review by process."],["HOLD","The release-gate workflow exits non-zero. When configured as a required status check, GitHub blocks merge/promotion."]].map(([t,c])=><article className="glass card" key={t}><div className="kicker">{t}</div><h3>{t}</h3><p className="muted" style={{lineHeight:1.78,fontSize:14}}>{c}</p></article>)}</div></div></section>

   <section className="section section-soft"><div className="shell"><div className="section-heading"><div><div className="section-index">03</div><div className="kicker">Evidence architecture</div></div><h2 className="section-title">The decision is reproducible from versioned inputs.</h2></div><div className="glass card" style={{padding:30}}><pre style={{whiteSpace:"pre-wrap",lineHeight:1.8}}>Versioned benchmark + Candidate evidence{"\n"}                 ↓{"\n"}         Machine-readable gate{"\n"}                 ↓{"\n"} decision.json · manifest.json{"\n"} checksums.sha256 · summary.md{"\n"}                 ↓{"\n"}       Upload evidence artifact{"\n"}                 ↓{"\n"}       Enforce release policy{"\n"}          ↙       ↓       ↘{"\n"}       SHIP   INVESTIGATE   HOLD{"\n"}        pass      review      fail</pre></div></div></section>

   <section className="section"><div className="shell"><div className="section-heading"><div><div className="section-index">04</div><div className="kicker">Version control for evaluation</div></div><h2 className="section-title">Benchmark evolution cannot silently rewrite release history.</h2></div><div className="card-grid">{[["CodeBench-Safety v1.0.0","The benchmark has its own manifest, semantic version and case set."],["Policy v1.0.0","Release evidence records which policy interpretation produced the decision."],["Commit-bound evidence","The workflow records the Git source SHA and Actions run ID."],["Checksummed artifacts","The input and decision hashes provide tamper evidence for later audit."],["Published dataset version","The benchmark version is mirrored to Hugging Face for external inspection."],["Future-safe evolution","Changes create a new benchmark version rather than mutating historical definitions."]].map(([t,c])=><article className="glass card" key={t}><h3>{t}</h3><p className="muted" style={{fontSize:14,lineHeight:1.75}}>{c}</p></article>)}</div></div></section>

   <section className="section section-soft"><div className="shell"><div className="section-heading"><div><div className="section-index">05</div><div className="kicker">Public evidence chain</div></div><h2 className="section-title">The recruiter proof is code → policy → CI → evidence → live evaluation.</h2></div><div className="card-grid">{links.map(([title,href,copy])=><article className="glass card" key={title}><h3>{title}</h3><p className="muted" style={{lineHeight:1.78,fontSize:14}}>{copy}</p><a className="btn btn-ghost" href={href} target="_blank" rel="noreferrer">Open ↗</a></article>)}</div></div></section>

   <section className="section"><div className="shell"><div className="callout"><div className="kicker">Connection to Agentic AI Academy</div><h2 className="section-title" style={{marginTop:10}}>Production AI requires a release boundary, not only evaluation scores.</h2><p className="muted" style={{maxWidth:860,lineHeight:1.85}}>This project extends the Academy’s evaluation, security and production-engineering stack by converting evidence into a CI-enforced release decision with benchmark provenance and auditable artifacts. It demonstrates the transition from model testing to lifecycle governance.</p><div className="hero-actions"><Link className="btn btn-primary" href="/agentic-ai/">Open Agentic AI Academy</Link><a className="btn btn-ghost" href="https://github.com/h00w/model-quality-release-gate/actions/workflows/release-gate.yml" target="_blank" rel="noreferrer">Inspect Release Gate CI ↗</a></div></div></div></section>
  </main>
 </>;
}
