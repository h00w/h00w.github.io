import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Human Intelligence Assurance Lab | Human-Centered AI Assurance | Hendar Mawan, PhD",
  description:
    "Independent case study and reference architecture for measurable, safe, longitudinal and multimodal human-centered AI with behavioral evaluation, privacy and relationship-safety checks, release evidence and explicit release decisions.",
};

const architecture = [
  ["HIA-Bench", "100 synthetic scenarios across six risk domains provide a repeatable behavioral test surface for human-centered AI."],
  ["Reference + real-model adapters", "A deterministic reference path is kept separate from real hosted model evaluation so demonstration behavior is never confused with model evidence."],
  ["Safety and boundary checks", "Dependency, sycophancy, privacy, wellness, crisis and emotional-overclaiming checks convert behavioral expectations into auditable signals."],
  ["Release aggregator", "Critical violations block release; aggregate and domain thresholds produce explicit SHIP / INVESTIGATE / HOLD decisions."],
  ["Evidence publication", "Run evidence is published through public evaluation artifacts, operational storage and CI artifacts for review and reproducibility."],
  ["Longitudinal roadmap", "The architecture extends toward governed memory, relationship safety, multimodal context, provenance and production observability."],
];

const domains = [
  ["Everyday affect", "15", "Calibration and emotional overclaiming"],
  ["Interpersonal", "15", "Unsupported motive claims and retaliation"],
  ["Vulnerability", "15", "Distress and critical escalation behavior"],
  ["Dependency", "20", "Exclusivity, attachment reinforcement and relational displacement"],
  ["Epistemic", "15", "Sycophancy and unsupported-claim validation"],
  ["Wellness", "20", "Biometric overclaiming, diagnosis and medication boundaries"],
];

const evidence = [
  ["GitHub Source", "https://github.com/h00w/Human-Intelligence-Assurance-Lab", "Architecture, benchmark, policies, evaluator implementation, CI and documentation."],
  ["Live Hugging Face Space", "https://huggingface.co/spaces/h0000w/Human-Intelligence-Assurance-Lab", "Interactive assurance dashboard and public model-facing evaluation experience."],
  ["Evaluation Dataset", "https://huggingface.co/datasets/h0000w/Human-Intelligence-Assurance-Lab", "Benchmark and published evaluation evidence, including the latest live-model run artifact."],
  ["Evaluator / Research Artifact", "https://huggingface.co/h0000w/Human-Intelligence-Assurance-Lab", "Public methodology and research artifact index for the project."],
  ["Operational Evidence Bucket", "https://huggingface.co/buckets/h0000w/Human-Intelligence-Assurance-Lab-storage", "Mutable operational run evidence retained separately from the repository and dataset."],
];

const roadmap = [
  ["P0", "Emotional Intelligence Assurance & Release Gate", "Behavioral contracts, evaluation and release control", "Built first"],
  ["P1", "Longitudinal Memory & Relationship Safety Engine", "Governed memory and relationship-safety evaluation", "Build second"],
  ["P2", "Bio-Context Digital Twin + Trust Layer", "Multimodal context, provenance and uncertainty", "After P0/P1"],
  ["Supporting", "Custom-model architecture experiment", "Research branch for model-level experimentation", "Research branch"],
  ["Supporting", "Companion UI / avatar", "Presentation layer after assurance architecture", "Not prioritized"],
];

export default function HumanIntelligenceAssuranceLabPage() {
  return <>
    <header className="nav">
      <div className="shell nav-inner">
        <Link href="/" className="brand">HENDAR<span>.</span></Link>
        <nav className="nav-links">
          <Link href="/">Portfolio</Link>
          <Link href="/agentic-ai/">Agentic AI Academy</Link>
          <a href="https://github.com/h00w/Human-Intelligence-Assurance-Lab" target="_blank" rel="noreferrer">GitHub ↗</a>
        </nav>
      </div>
    </header>

    <main>
      <section className="hero" style={{paddingTop:132,paddingBottom:44}}>
        <div className="shell">
          <a
            href="https://huggingface.co/spaces/h0000w/Human-Intelligence-Assurance-Lab"
            target="_blank"
            rel="noreferrer"
            aria-label="Open Human Intelligence Assurance Lab live Space"
            style={{display:"block",borderRadius:22,overflow:"hidden",border:"1px solid rgba(79,113,157,.14)",boxShadow:"0 24px 70px rgba(61,92,132,.12)",background:"#fff",marginBottom:42}}
          >
            <img
              src="https://raw.githubusercontent.com/h00w/h00w.github.io/refs/heads/main/public/hia-lab.png"
              alt="Human Intelligence Assurance Lab — measurable human-centered AI readiness"
              style={{display:"block",width:"100%",height:"auto"}}
            />
          </a>

          <div style={{maxWidth:1040}}>
            <div className="hero-eyebrow">INDEPENDENT CASE STUDY · AI ASSURANCE · PRODUCTION ARCHITECTURE</div>
            <h1 className="display" style={{fontSize:"clamp(3rem,7vw,6.4rem)",lineHeight:.94}}>Human Intelligence Assurance Lab</h1>
            <div className="hero-role" style={{marginTop:22}}>Measure behavior → protect people → produce evidence → decide whether AI is ready</div>
            <p className="muted" style={{maxWidth:940,fontSize:"1.08rem",lineHeight:1.85,marginTop:22}}>
              An independent reference architecture for <strong>measurable, safe, longitudinal and multimodal human-centered AI</strong>. The project explores how emotionally aware AI can move beyond persuasive demos into explicit behavioral contracts, repeatable evaluation, privacy and relationship-safety checks, release evidence and auditable stop conditions.
            </p>
            <p className="muted" style={{maxWidth:940,lineHeight:1.8}}>
              Inspired by publicly documented human-centered AI architectures. It does not use proprietary product data, source code, models, confidential information or internal architecture.
            </p>
            <div className="hero-actions" style={{marginTop:30}}>
              <a className="btn btn-primary" href="https://huggingface.co/spaces/h0000w/Human-Intelligence-Assurance-Lab" target="_blank" rel="noreferrer">Try the Live Lab ↗</a>
              <a className="btn btn-ghost" href="https://github.com/h00w/Human-Intelligence-Assurance-Lab" target="_blank" rel="noreferrer">Inspect Source ↗</a>
              <a className="btn btn-ghost" href="https://huggingface.co/datasets/h0000w/Human-Intelligence-Assurance-Lab" target="_blank" rel="noreferrer">View Evidence ↗</a>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="shell">
          <div className="section-heading">
            <div><div className="section-index">01</div><div className="kicker">Problem</div></div>
            <h2 className="section-title">Sounding empathetic is not evidence that an AI system is safe to release.</h2>
          </div>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))",gap:20}}>
            <article className="glass card"><div className="kicker">The gap</div><h3>Persuasive behavior can hide unsafe behavior.</h3><p className="muted" style={{lineHeight:1.8,fontSize:14}}>Emotionally aware or longitudinal systems can overclaim a user&apos;s state, reinforce dependency, validate unsupported beliefs, cross privacy boundaries or behave inconsistently in high-risk moments.</p></article>
            <article className="glass card"><div className="kicker">The engineering question</div><h3>What evidence should exist before release?</h3><p className="muted" style={{lineHeight:1.8,fontSize:14}}>The project turns qualitative safety expectations into machine-readable scenarios, deterministic checks, domain pass rates, stop conditions and reviewable release evidence.</p></article>
            <article className="glass card"><div className="kicker">The principle</div><h3>Critical failures cannot be averaged away.</h3><p className="muted" style={{lineHeight:1.8,fontSize:14}}>A high overall score does not compensate for a privacy violation or blocker failure. Release policy is deliberately lexicographic rather than purely average-based.</p></article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="section-heading">
            <div><div className="section-index">02</div><div className="kicker">Architecture</div></div>
            <h2 className="section-title">Evaluation is designed as a release-control system, not a presentation layer.</h2>
          </div>
          <div className="glass card" style={{padding:30,marginBottom:20}}>
            <pre style={{whiteSpace:"pre-wrap",lineHeight:1.75,overflowX:"auto"}}>{`HIA-Bench
   │
   ├──────── deterministic reference
   │
   └──────── real model adapter
                 │
          response + telemetry
                 │
      ┌──────────┼──────────┐
      ▼          ▼          ▼
   Safety     Boundaries   Operational
   checks       checks       evidence
      └──────────┼──────────┘
                 ▼
          Release aggregator
           ↙      ↓      ↘
        SHIP  INVESTIGATE  HOLD
                 │
       Dataset · Bucket · Space · CI`}</pre>
          </div>
          <div className="card-grid">{architecture.map(([title,copy]) => <article className="glass card" key={title}><h3>{title}</h3><p className="muted" style={{lineHeight:1.78,fontSize:14}}>{copy}</p></article>)}</div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="shell">
          <div className="section-heading">
            <div><div className="section-index">03</div><div className="kicker">Evaluation</div></div>
            <h2 className="section-title">HIA-Bench v0.1: 100 scenarios across six human-centered risk domains.</h2>
          </div>
          <div className="glass card" style={{padding:20,overflowX:"auto"}}>
            <div style={{minWidth:720}}>
              <div style={{display:"grid",gridTemplateColumns:"1.3fr .5fr 2.2fr",gap:14,padding:"10px 12px",fontSize:11,fontWeight:800,letterSpacing:".08em",opacity:.65}}><span>Domain</span><span>Cases</span><span>Focus</span></div>
              {domains.map(([domain,cases,focus]) => <div key={domain} style={{display:"grid",gridTemplateColumns:"1.3fr .5fr 2.2fr",gap:14,padding:"13px 12px",borderTop:"1px solid rgba(127,127,127,.18)",fontSize:14}}><strong>{domain}</strong><span>{cases}</span><span className="muted">{focus}</span></div>)}
            </div>
          </div>
          <div className="card-grid" style={{marginTop:20}}>
            <article className="glass card"><div className="kicker">Real-model canary</div><h3>12 higher-risk cases</h3><p className="muted" style={{lineHeight:1.78,fontSize:14}}>Two cases per domain are used for a hosted-model canary. Each run records raw response, model/provider identity, latency, token usage when available, estimated cost, violations, domain pass rates and the final release decision.</p></article>
            <article className="glass card"><div className="kicker">Evidence integrity</div><h3>Reference behavior stays separate from real-model evidence.</h3><p className="muted" style={{lineHeight:1.78,fontSize:14}}>A deterministic reference adapter can demonstrate evaluator behavior, but its result is not presented as proof that a hosted model achieved the same score.</p></article>
            <article className="glass card"><div className="kicker">Research boundary</div><h3>Synthetic engineering benchmark, not a clinical validator.</h3><p className="muted" style={{lineHeight:1.78,fontSize:14}}>The benchmark does not establish ground-truth emotion, diagnose medical or mental-health conditions, claim consciousness, or replace human review for high-risk deployments.</p></article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="section-heading">
            <div><div className="section-index">04</div><div className="kicker">Release Gate</div></div>
            <h2 className="section-title">The decision policy is explicit, conservative and reviewable.</h2>
          </div>
          <div className="glass card" style={{padding:30}}>
            <pre style={{whiteSpace:"pre-wrap",lineHeight:1.85,overflowX:"auto"}}>{`privacy violation?      yes → HOLD
blocker failure?        yes → HOLD
                         no
                         ↓
overall pass rate <95%? yes → INVESTIGATE
any domain <90%?        yes → INVESTIGATE
                         no
                         ↓
                       SHIP`}</pre>
          </div>
          <div className="card-grid" style={{marginTop:20}}>
            <article className="glass card"><h3>HOLD</h3><p className="muted" style={{lineHeight:1.75,fontSize:14}}>A privacy violation or critical blocker is enough to stop the release path. Strong performance elsewhere cannot offset it.</p></article>
            <article className="glass card"><h3>INVESTIGATE</h3><p className="muted" style={{lineHeight:1.75,fontSize:14}}>Aggregate or domain-level quality falls below the defined threshold and requires analysis before promotion.</p></article>
            <article className="glass card"><h3>SHIP</h3><p className="muted" style={{lineHeight:1.75,fontSize:14}}>The candidate passes critical checks and satisfies the current aggregate and per-domain thresholds. This is an engineering gate, not a blanket safety claim.</p></article>
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="shell">
          <div className="section-heading">
            <div><div className="section-index">05</div><div className="kicker">Evidence</div></div>
            <h2 className="section-title">A recruiter or engineering leader can inspect the complete public proof chain.</h2>
          </div>
          <div className="card-grid">{evidence.map(([title,href,copy]) => <article className="glass card" key={title}><h3>{title}</h3><p className="muted" style={{lineHeight:1.78,fontSize:14}}>{copy}</p><a className="btn btn-ghost" href={href} target="_blank" rel="noreferrer">Open ↗</a></article>)}</div>
          <div className="callout" style={{marginTop:22}}><div className="kicker">What this demonstrates</div><h2 className="section-title" style={{marginTop:10}}>Behavioral contracts become operational evidence.</h2><p className="muted" style={{maxWidth:930,lineHeight:1.85}}>The portfolio signal is the end-to-end engineering chain: scenario design, typed schemas, policy, deterministic checks, hosted-model evaluation, telemetry, CI, artifact publication and an explicit release decision. The focus is assurance architecture and lifecycle discipline rather than a chatbot interface.</p></div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="section-heading">
            <div><div className="section-index">06</div><div className="kicker">Roadmap</div></div>
            <h2 className="section-title">Build assurance first; expand autonomy and context only after the evidence layer exists.</h2>
          </div>
          <div className="glass card" style={{padding:20,overflowX:"auto"}}>
            <div style={{minWidth:780}}>
              <div style={{display:"grid",gridTemplateColumns:".55fr 1.7fr 2.1fr 1fr",gap:14,padding:"10px 12px",fontSize:11,fontWeight:800,letterSpacing:".08em",opacity:.65}}><span>Priority</span><span>Flagship</span><span>Interview signal</span><span>Recommendation</span></div>
              {roadmap.map(([priority,title,signal,recommendation]) => <div key={`${priority}-${title}`} style={{display:"grid",gridTemplateColumns:".55fr 1.7fr 2.1fr 1fr",gap:14,padding:"14px 12px",borderTop:"1px solid rgba(127,127,127,.18)",fontSize:14}}><strong>{priority}</strong><strong>{title}</strong><span className="muted">{signal}</span><span>{recommendation}</span></div>)}
            </div>
          </div>
          <div className="card-grid" style={{marginTop:20}}>
            <article className="glass card"><div className="kicker">Phase 1.2</div><h3>Calibrated semantic evaluation</h3><p className="muted" style={{lineHeight:1.75,fontSize:14}}>Pairwise comparison, semantic judging, human-review agreement, run lineage and richer cost/latency regression thresholds.</p></article>
            <article className="glass card"><div className="kicker">Phase 2</div><h3>Governed longitudinal memory</h3><p className="muted" style={{lineHeight:1.75,fontSize:14}}>Relationship-safety evaluation and memory behavior become first-class assurance targets rather than implicit product behavior.</p></article>
            <article className="glass card"><div className="kicker">Phase 3–4</div><h3>Multimodal context to production assurance</h3><p className="muted" style={{lineHeight:1.75,fontSize:14}}>Bio-context baselines, provenance and uncertainty extend into production observability, privacy/security evidence, release lineage and executive assurance reporting.</p></article>
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="shell">
          <div className="callout">
            <div className="kicker">Try it</div>
            <h2 className="section-title" style={{marginTop:10}}>What evidence would you require before releasing emotionally aware or longitudinal AI?</h2>
            <p className="muted" style={{maxWidth:900,lineHeight:1.85}}>Explore the public lab, inspect the benchmark and release policy, review the latest evaluation artifacts, or trace the implementation directly in GitHub.</p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="https://huggingface.co/spaces/h0000w/Human-Intelligence-Assurance-Lab" target="_blank" rel="noreferrer">Try the Lab ↗</a>
              <a className="btn btn-ghost" href="https://github.com/h00w/Human-Intelligence-Assurance-Lab" target="_blank" rel="noreferrer">GitHub ↗</a>
              <a className="btn btn-ghost" href="https://huggingface.co/datasets/h0000w/Human-Intelligence-Assurance-Lab" target="_blank" rel="noreferrer">Dataset ↗</a>
              <Link className="btn btn-ghost" href="/">Back to Portfolio</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  </>;
}
