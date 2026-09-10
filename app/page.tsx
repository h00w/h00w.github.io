import Link from "next/link";
import { capabilities, experience, leadership, projects, site } from "@/lib/site";
import { getAllPosts } from "@/lib/blog";

export default function Home() {
  const posts = getAllPosts().slice(0,3);
  return <>
    <header className="nav"><div className="shell nav-inner">
      <a href="#top" className="display" style={{fontWeight:700}}>h00w<span style={{color:"var(--cyan)"}}>.</span></a>
      <nav className="nav-links"><a href="#about">About</a><a href="#capabilities">Capabilities</a><a href="#projects">Projects</a><a href="#leadership">Leadership</a><a href="#experience">Experience</a><Link href="/blog/">Blog</Link><a href="#contact">Contact</a></nav>
    </div></header>

    <main id="top">
      <section className="hero grid-bg"><div className="shell hero-grid">
        <div>
          <span className="pill" style={{borderColor:"rgba(77,231,255,.25)",color:"var(--cyan)"}}>AI Engineer → AI Architect → Director of AI</span>
          <h1 className="display">Building Production AI Systems. <span className="gradient">Leading AI Transformation.</span></h1>
          <p>{site.summary}</p>
          <div style={{display:"flex",flexWrap:"wrap",gap:10,marginTop:28}}>
            <a className="btn btn-primary" href="#projects">View AI Systems →</a>
            <a className="btn btn-ghost" href="#leadership">Leadership Scope</a>
            <Link className="btn btn-ghost" href="/blog/">Read Insights</Link>
          </div>
          <div className="stat-grid">
            <div className="stat"><strong>15+ yrs</strong><span>Engineering experience</span></div>
            <div className="stat"><strong>AI + Edge</strong><span>Production systems focus</span></div>
            <div className="stat"><strong>R&D Director</strong><span>Strategy + execution</span></div>
            <div className="stat"><strong>PhD Eng.</strong><span>Systems research depth</span></div>
          </div>
        </div>
        <div className="glass hero-art" aria-label="Abstract AI platform architecture illustration">
          <div className="orb" style={{left:"31%",top:"22%"}}/>
          <div className="node" style={{left:"18%",top:"28%"}}/><div className="node" style={{right:"15%",top:"24%"}}/><div className="node" style={{left:"14%",bottom:"20%"}}/><div className="node" style={{right:"19%",bottom:"18%"}}/>
          <div style={{position:"absolute",inset:"18% 11%",border:"1px solid rgba(77,231,255,.16)",borderRadius:26}}/>
          <div style={{position:"absolute",left:"14%",right:"14%",bottom:"12%",display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:10}}>
            {["AI ENGINEERING","PLATFORM ARCHITECTURE","GOVERNANCE"].map(x=><div key={x} className="glass" style={{padding:"13px 8px",borderRadius:12,textAlign:"center",fontSize:10,letterSpacing:1.4,color:"#b9cbe0"}}>{x}</div>)}
          </div>
        </div>
      </div></section>

      <section id="about" className="section"><div className="shell">
        <div className="kicker">Positioning</div><h2 className="display section-title">Hands-on AI engineer. Systems architect. R&D leader.</h2>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))",gap:24,marginTop:34}}>
          <div><p className="muted" style={{fontSize:"1.05rem",lineHeight:1.9}}>I work at the point where AI models become operational systems: architecture, integration, deployment, observability, governance, security, automation and recovery. My engineering foundation spans embedded and distributed computing, trusted systems and production software.</p></div>
          <div className="glass card"><div className="kicker">Core philosophy</div><p style={{fontFamily:"Space Grotesk",fontSize:"1.45rem",lineHeight:1.5}}>“AI without governance becomes risk. Governance without innovation becomes stagnation.”</p><p className="muted" style={{lineHeight:1.7}}>The goal is not to slow AI down. It is to build platforms where teams can move quickly without losing control of reliability, security or accountability.</p></div>
        </div>
      </div></section>

      <section id="capabilities" className="section" style={{borderTop:"1px solid rgba(255,255,255,.05)",borderBottom:"1px solid rgba(255,255,255,.05)",background:"rgba(255,255,255,.012)"}}><div className="shell">
        <div className="kicker">Capabilities</div><h2 className="display section-title">AI engineering first. Leadership built on technical depth.</h2>
        <div className="card-grid">{capabilities.map(group=><div className="glass card" key={group.title}><div className="kicker" style={{fontSize:10}}>{group.title}</div><div style={{display:"flex",flexWrap:"wrap",gap:7,marginTop:18}}>{group.items.map(i=><span className="pill" key={i}>{i}</span>)}</div></div>)}</div>
      </div></section>

      <section id="projects" className="section"><div className="shell">
        <div className="kicker">Featured AI systems</div><h2 className="display section-title">Proof of engineering depth, architecture and production ownership.</h2>
        <div className="project-grid">{projects.map((p:any)=><article className="glass project" key={p.title}>
          {p.cover ? <img className="project-cover" src={p.cover} alt={`${p.title} project cover`} /> : <div className="project-cover" style={{display:"grid",placeItems:"center"}}><div className="display" style={{fontSize:42,color:"var(--cyan)"}}>LIFE-AI</div></div>}
          <div className="project-body"><div className="kicker" style={{fontSize:10}}>{p.eyebrow}</div><h3>{p.title}</h3><p className="muted" style={{lineHeight:1.75}}>{p.description}</p><div style={{fontSize:12,color:"#d6e2ee",margin:"16px 0"}}>{p.role}</div><div style={{display:"flex",flexWrap:"wrap",gap:7}}>{p.tags.map((t:string)=><span className="pill" key={t}>{t}</span>)}</div><div style={{display:"flex",gap:14,marginTop:21,fontSize:13,fontWeight:700}}><a href={p.href} target="_blank" rel="noreferrer">Explore ↗</a>{p.demo&&<a style={{color:"var(--cyan)"}} href={p.demo} target="_blank" rel="noreferrer">Live demo ↗</a>}</div></div>
        </article>)}</div>
      </div></section>

      <section id="leadership" className="section" style={{borderTop:"1px solid rgba(255,255,255,.05)",borderBottom:"1px solid rgba(255,255,255,.05)",background:"rgba(255,255,255,.012)"}}><div className="shell">
        <div className="kicker">Director of AI pathway</div><h2 className="display section-title">Engineering credibility with executive-level operating scope.</h2>
        <p className="muted" style={{maxWidth:800,lineHeight:1.8,fontSize:"1.05rem"}}>My leadership positioning is built around owning the full AI lifecycle: strategy, architecture, teams, delivery, governance, partners and measurable production outcomes.</p>
        <div className="card-grid">{leadership.map(([title,copy])=><div className="glass card" key={title}><div style={{width:34,height:34,borderRadius:10,border:"1px solid rgba(77,231,255,.28)",display:"grid",placeItems:"center",color:"var(--cyan)"}}>◆</div><h3>{title}</h3><p className="muted" style={{lineHeight:1.75,fontSize:14}}>{copy}</p></div>)}</div>
      </div></section>

      <section id="experience" className="section"><div className="shell">
        <div className="kicker">Experience</div><h2 className="display section-title">A progression from systems engineering to AI leadership.</h2>
        <div className="timeline">{experience.map(e=><div className="timeline-item" key={`${e.org}-${e.role}`}><div className="kicker" style={{fontSize:10}}>{e.date}</div><h3 style={{fontFamily:"Space Grotesk",fontSize:21,margin:"7px 0 2px"}}>{e.role}</h3><div className="muted" style={{fontSize:13}}>{e.org}</div><p className="muted" style={{maxWidth:820,lineHeight:1.8,fontSize:14}}>{e.copy}</p></div>)}</div>
      </div></section>

      <section id="insights" className="section" style={{borderTop:"1px solid rgba(255,255,255,.05)"}}><div className="shell">
        <div className="kicker">Insights</div><h2 className="display section-title">Production AI, governance and engineering leadership.</h2>
        <div className="blog-grid">{posts.map(post=><Link className="glass blog-card" key={post.slug} href={`/blog/${post.slug}/`}><div className="kicker" style={{fontSize:10}}>{post.category}</div><h3>{post.title}</h3><p className="muted" style={{fontSize:14,lineHeight:1.7}}>{post.description}</p><div className="blog-meta">{post.date} · {post.readingTime}</div></Link>)}</div>
        <div style={{marginTop:24}}><Link className="btn btn-ghost" href="/blog/">View all articles →</Link></div>
      </div></section>

      <section id="contact" className="section"><div className="shell"><div className="glass callout">
        <div className="kicker">Next role / collaboration</div><h2 className="display section-title">AI Engineering Leadership · AI Architecture · Director of AI</h2>
        <p className="muted" style={{maxWidth:850,lineHeight:1.85,fontSize:"1.05rem"}}>I am interested in roles and collaborations where hands-on AI engineering meets platform ownership, technical strategy and team leadership—especially production AI, Edge AI, AI infrastructure and governed enterprise AI.</p>
        <div style={{display:"flex",flexWrap:"wrap",gap:10,marginTop:26}}><a className="btn btn-primary" href={`mailto:${site.email}`}>Discuss an Opportunity</a><a className="btn btn-ghost" href={site.linkedin} target="_blank" rel="noreferrer">LinkedIn</a><a className="btn btn-ghost" href={site.github} target="_blank" rel="noreferrer">GitHub</a></div>
      </div></div></section>
    </main>
    <footer><div className="shell" style={{display:"flex",justifyContent:"space-between",gap:20,flexWrap:"wrap"}}><span>© Hendar Mawan · h00w</span><span>Production AI should be intelligent, secure, governed and trusted.</span></div></footer>
  </>;
}
