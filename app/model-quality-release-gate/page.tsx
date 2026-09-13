import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI Model Release Control Center | Post-Training & Production AI | Hendar Mawan, PhD",
  description: "Research-engineering case study connecting post-training experiments to baseline/candidate evaluation, causal investigation, release policy, CI enforcement, production telemetry and evidence-linked model promotion.",
};

const experimentMetrics = [
  ["Code execution pass rate", "71.4%", "76.9%", "+5.5 pts", "IMPROVED"],
  ["Unit-test pass rate", "68.2%", "74.6%", "+6.4 pts", "IMPROVED"],
  ["SWE-bench-style success", "31.7%", "36.4%", "+4.7 pts", "IMPROVED"],
  ["Instruction following", "88.0%", "91.2%", "+3.2 pts", "IMPROVED"],
  ["Hallucination rate", "7.8%", "6.1%", "-1.7 pts", "IMPROVED"],
  ["Safety", "96.1%", "94.8%", "-1.3 pts", "REGRESSION"],
  ["Latency P95", "2.8 s", "3.1 s", "+10.7%", "REGRESSION"],
  ["Cost / request", "$0.031", "$0.035", "+12.9%", "REGRESSION"],
  ["Output tokens / solved task", "812", "861", "+6.0%", "REGRESSION"],
];

const hypotheses = [
  ["01", "Training-data distribution shift", "The new SFT corpus may overweight task completion relative to secure and defensive coding behavior."],
  ["02", "Instruction-data contamination / conflicting supervision", "Conflicting examples can improve average coding quality while weakening safety on specific slices."],
  ["03", "Training-objective overspecialization", "Completion-oriented optimization may trade conservative behavior for higher task success."],
  ["04", "Longer generated trajectories", "Longer outputs can explain latency, token-efficiency and cost regressions."],
  ["05", "Serving / inference configuration", "Batching, decoding, quantization or max-token settings can create apparent model regressions."],
  ["06", "Reward-model / judge bias — only if a preference stage exists", "Not a primary SFT hypothesis; relevant only when the candidate also passed through preference or reward-guided training."],
];

const followups = [
  "Re-run the candidate on the frozen regression set with identical inference configuration.",
  "Stratify safety failures by task category, language, vulnerability class and prompt length.",
  "Compare baseline and candidate outputs for every newly introduced failure.",
  "Inspect training examples nearest to regressed safety tasks for conflicting supervision or contamination.",
  "Measure judge/reward-model correlation against deterministic safety and correctness labels when applicable.",
  "Run an ablation without the newly added instruction subset to isolate its causal contribution.",
  "Repeat evaluation under matched decoding, batching, quantization and max-token configuration.",
  "Slice latency and cost by generated-token count to separate model behavior from serving overhead.",
];

const productionStack = [
  ["Live provider evaluation", "Server-side Hugging Face inference can compare real baseline and candidate outputs without putting provider tokens in the browser."],
  ["Deterministic safety authority", "Security checks remain independently testable and can block release regardless of subjective judge quality."],
  ["Task-aware correctness", "Objective benchmark-style checks complement subjective helpfulness scoring without executing untrusted code in-process."],
  ["CI release enforcement", "Machine-readable SHIP / INVESTIGATE / HOLD decisions participate directly in software-delivery control."],
  ["Production trace ingestion", "Schema-validated traces turn latency and error behavior into operational evidence for the next investigation cycle."],
  ["Evidence-linked promotion", "candidate → approved → production transitions retain the evidence identity that authorized them."],
];

const links = [
  ["GitHub Source", "https://github.com/h00w/model-quality-release-gate", "Source, post-training experiment logic, tests, release policy, CI, trace schema and registry semantics."],
  ["Hugging Face Space", "https://huggingface.co/spaces/h0000w/model-quality-release-gate", "Interactive Post-Training Experiment Lab plus live evaluation, traces and promotion workflow."],
  ["Versioned Dataset", "https://huggingface.co/datasets/h0000w/model-quality-release-gate", "Published benchmark versions and reproducible evaluation evidence."],
  ["Methodology Card", "https://huggingface.co/h0000w/model-quality-release-gate", "Research-to-production evaluation methodology and public artifact index."],
];

export default function ModelQualityReleaseGatePage(){
 return <>
  <header className="nav"><div className="shell nav-inner"><Link href="/" className="brand">HENDAR<span>.</span></Link><nav className="nav-links"><Link href="/">Portfolio</Link><Link href="/agentic-ai/">Agentic AI Academy</Link><a href="https://github.com/h00w/model-quality-release-gate" target="_blank" rel="noreferrer">GitHub ↗</a></nav></div></header>
  <main>
   <section className="hero" style={{paddingTop:140,paddingBottom:70}}><div className="shell"><div style={{maxWidth:1020}}><div className="hero-eyebrow">POST-TRAINING · RESEARCH ENGINEERING · PRODUCTION AI</div><h1 className="display" style={{fontSize:"clamp(3rem,7vw,6.5rem)",lineHeight:.92}}>AI Model Release Control Center</h1><div className="hero-role" style={{marginTop:22}}>Train → Evaluate → Compare → Investigate → Gate → Ship → Monitor → Learn</div><p className="muted" style={{maxWidth:920,fontSize:"1.08rem",lineHeight:1.85,marginTop:22}}>Did the new model actually get better — and is it safe to ship? This project explores the engineering loop between <strong>post-training and production</strong>: model improvements become baseline/candidate experiments, regressions become research questions, release policy becomes CI enforcement, and production telemetry feeds the next experiment.</p><div className="hero-actions" style={{marginTop:30}}><a className="btn btn-primary" href="https://huggingface.co/spaces/h0000w/model-quality-release-gate" target="_blank" rel="noreferrer">Open Post-Training Experiment Lab ↗</a><a className="btn btn-ghost" href="https://github.com/h00w/model-quality-release-gate" target="_blank" rel="noreferrer">Inspect Engineering Source ↗</a><a className="btn btn-ghost" href="https://huggingface.co/datasets/h0000w/model-quality-release-gate" target="_blank" rel="noreferrer">Open Evaluation Dataset ↗</a></div></div></div></section>

   <section className="section section-soft"><div className="shell"><div className="section-heading"><div><div className="section-index">01</div><div className="kicker">Why I built this</div></div><h2 className="section-title">A model improvement is not automatically a product improvement.</h2></div><div className="glass card" style={{padding:30}}><p className="muted" style={{fontSize:"1.05rem",lineHeight:1.9,maxWidth:940}}>The engineering question I care about is: <strong>How do we know that a post-training change actually improves the experience of real users?</strong> A candidate can improve code-generation quality while simultaneously regressing safety, reliability, latency, cost or previously solved tasks. The goal is therefore not a prettier benchmark dashboard; it is a reproducible and explainable control loop that supports continuous experimentation.</p></div></div></section>

   <section className="section"><div className="shell"><div className="section-heading"><div><div className="section-index">02</div><div className="kicker">Post-Training Experiment Lab</div></div><h2 className="section-title">Treat every training intervention as a multi-objective experiment.</h2></div><div className="card-grid">{[["Baseline","CodeModel-v1"],["Candidate","CodeModel-v2-sft"],["Training intervention","SFT"],["Dataset","10,000 coding tasks"],["Evaluation set","Frozen coding + safety regression suite"]].map(([t,c])=><article className="glass card" key={t}><div className="kicker">{t}</div><h3 style={{marginTop:8}}>{c}</h3></article>)}</div><div className="glass card" style={{padding:20,marginTop:18,overflowX:"auto"}}><div style={{minWidth:760}}><div style={{display:"grid",gridTemplateColumns:"2fr repeat(4,1fr)",gap:12,padding:"10px 12px",fontSize:11,fontWeight:800,letterSpacing:".08em",opacity:.65}}><span>Evaluation</span><span>Baseline</span><span>Candidate</span><span>Δ</span><span>Signal</span></div>{experimentMetrics.map(([metric,b,c,d,s])=><div key={metric} style={{display:"grid",gridTemplateColumns:"2fr repeat(4,1fr)",gap:12,padding:"12px",borderTop:"1px solid rgba(127,127,127,.18)",fontSize:14}}><strong>{metric}</strong><span>{b}</span><span>{c}</span><span>{d}</span><strong>{s}</strong></div>)}</div></div><div className="callout" style={{marginTop:18}}><div className="kicker">Release decision</div><h2 className="section-title" style={{marginTop:10}}>INVESTIGATE</h2><p className="muted" style={{maxWidth:880,lineHeight:1.85}}>Code quality improves materially, but safety, P95 latency, cost and token efficiency regress beyond investigation thresholds. These values are deliberately <strong>illustrative</strong>; they demonstrate the research workflow rather than claiming measured performance for a deployed foundation model.</p></div></div></section>

   <section className="section section-soft"><div className="shell"><div className="section-heading"><div><div className="section-index">03</div><div className="kicker">What would I investigate?</div></div><h2 className="section-title">A regression number is an observation, not an explanation.</h2></div><div className="card-grid">{hypotheses.map(([n,t,c])=><article className="glass card" key={n}><div className="kicker">{n}</div><h3>{t}</h3><p className="muted" style={{lineHeight:1.75,fontSize:14}}>{c}</p></article>)}</div><div className="glass card" style={{padding:30,marginTop:18}}><div className="kicker">Recommended experiments</div><ol style={{marginTop:16,paddingLeft:22,display:"grid",gap:12}}>{followups.map(x=><li key={x} className="muted" style={{lineHeight:1.7}}>{x}</li>)}</ol></div></div></section>

   <section className="section"><div className="shell"><div className="section-heading"><div><div className="section-index">04</div><div className="kicker">Research-to-production architecture</div></div><h2 className="section-title">Evaluation is the interface between model research and product release.</h2></div><div className="glass card" style={{padding:30}}><pre style={{whiteSpace:"pre-wrap",lineHeight:1.8}}>{`POST-TRAINING EXPERIMENT
          ↓
Evaluation Data
          ↓
Baseline vs Candidate
          ↓
Quality · Safety · Reliability · Performance · Cost
          ↓
Regression Analysis
          ↓
Failure Investigation / Causal Hypotheses
          ↓
Release Policy
     ↙       ↓       ↘
   SHIP  INVESTIGATE  HOLD
          ↓
Production
          ↓
Traces / User Feedback
          ↓
Next Experiment`}</pre></div></div></section>

   <section className="section section-soft"><div className="shell"><div className="section-heading"><div><div className="section-index">05</div><div className="kicker">Production layer</div></div><h2 className="section-title">Research reasoning continues through CI and operation.</h2></div><div className="card-grid">{productionStack.map(([t,c])=><article className="glass card" key={t}><h3>{t}</h3><p className="muted" style={{lineHeight:1.78,fontSize:14}}>{c}</p></article>)}</div><p className="muted" style={{marginTop:20,lineHeight:1.8}}>Generated code is not executed inside the public Space process. A production executable-code evaluator should use an isolated sandbox or worker boundary with resource, network and filesystem controls.</p></div></section>

   <section className="section"><div className="shell"><div className="section-heading"><div><div className="section-index">06</div><div className="kicker">What this demonstrates</div></div><h2 className="section-title">A research-engineering story, not a dashboard story.</h2></div><div className="card-grid">{["Evaluation methodology","Baseline/candidate experimentation","Regression detection","Failure analysis","Causal hypothesis formation","Release-policy design","Safety-quality trade-offs","Latency/cost-quality trade-offs","Reproducible evaluation","CI/CD release gates","Production feedback loops","Evidence-linked model lifecycle"].map(x=><article className="glass card" key={x}><h3>{x}</h3></article>)}</div><p className="muted" style={{marginTop:22,maxWidth:900,lineHeight:1.85}}>The system complements — rather than replaces — post-training methods such as SFT, preference optimization, RFT/RLVR and other model-improvement techniques. The purpose is to connect those interventions to reproducible release evidence and operational learning.</p></div></section>

   <section className="section section-soft"><div className="shell"><div className="section-heading"><div><div className="section-index">07</div><div className="kicker">Public proof chain</div></div><h2 className="section-title">Experiment → evidence → policy → CI → production feedback.</h2></div><div className="card-grid">{links.map(([title,href,copy])=><article className="glass card" key={title}><h3>{title}</h3><p className="muted" style={{lineHeight:1.78,fontSize:14}}>{copy}</p><a className="btn btn-ghost" href={href} target="_blank" rel="noreferrer">Open ↗</a></article>)}</div></div></section>

   <section className="section"><div className="shell"><div className="callout"><div className="kicker">Connection to Agentic AI Academy</div><h2 className="section-title" style={{marginTop:10}}>Production AI requires both research judgment and release discipline.</h2><p className="muted" style={{maxWidth:900,lineHeight:1.85}}>This project extends the Academy’s evaluation, safety and production-engineering work by showing how a model-change hypothesis becomes an experiment, how regressions become follow-up research, and how the final evidence participates directly in CI and model promotion.</p><div className="hero-actions"><Link className="btn btn-primary" href="/agentic-ai/">Open Agentic AI Academy</Link><a className="btn btn-ghost" href="https://github.com/h00w/model-quality-release-gate/actions/workflows/release-gate.yml" target="_blank" rel="noreferrer">Inspect Release Gate CI ↗</a></div></div></div></section>
  </main>
 </>;
}
