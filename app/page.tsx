import Link from "next/link";
import { capabilities, experience, leadership, projects, site } from "@/lib/site";
import { getAllPosts } from "@/lib/blog";

export default function Home() {
  const posts = getAllPosts().slice(0, 3);

  return <>
    <header className="nav">
      <div className="shell nav-inner">
        <a href="#home" className="brand">HENDAR<span>.</span></a>
        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#capabilities">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <Link href="/blog/">Blog</Link>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>

    <main>
      <section id="home" className="hero">
        <div className="shell hero-grid">
          <div className="hero-copy">
            <div className="social-rail" aria-label="Social links">
              <a href={site.github} target="_blank" rel="noreferrer" title="GitHub">GH</a>
              <a href={site.linkedin} target="_blank" rel="noreferrer" title="LinkedIn">in</a>
              <a href={`mailto:${site.email}`} title="Email">@</a>
            </div>

            <div className="hero-eyebrow">Hello, I&apos;m</div>
            <h1 className="display">Hendar<br/>Mawan</h1>
            <div className="hero-role">AI Engineering Leader</div>
            <p>{site.summary}</p>

            <div className="hero-actions">
              <a className="btn btn-primary" href="#projects">View Work</a>
              <a className="btn btn-ghost" href="#contact">Contact Me</a>
              <Link className="btn btn-ghost" href="/blog/">Read Blog</Link>
            </div>
          </div>

          <div className="hero-visual" aria-label="Portrait of Hendar Mawan">
            <div className="hero-shape" aria-hidden="true" />
            <img
              src="/hendarmawan.jpg"
              alt="Hendar Mawan — AI engineering leader"
              className="hero-photo"
            />
            <div className="hero-badge">AI Engineer → AI Architect → Director of AI</div>
          </div>
        </div>
      </section>

      <section id="about" className="section section-soft">
        <div className="shell">
          <div className="section-heading">
            <div><div className="section-index">01</div><div className="kicker">About</div></div>
            <h2 className="section-title">I build the systems around AI that make it dependable in the real world.</h2>
          </div>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))",gap:24}}>
            <div>
              <p className="muted" style={{fontSize:"1.02rem",lineHeight:1.9}}>
                My work sits at the intersection of AI engineering, secure systems, cloud and edge infrastructure, automation and technical leadership. I focus on moving AI from prototype into production: architecture, integration, deployment, monitoring, governance, rollback and operational evidence.
              </p>
            </div>
            <div className="glass card">
              <div className="kicker">Operating principle</div>
              <h3>Innovation with production discipline.</h3>
              <p className="muted" style={{lineHeight:1.8,fontSize:14}}>
                AI without governance becomes risk. Governance without innovation becomes stagnation. The strongest platforms make reliability, security and accountability part of the engineering architecture itself.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="capabilities" className="section">
        <div className="shell">
          <div className="section-heading">
            <div><div className="section-index">02</div><div className="kicker">Capabilities</div></div>
            <h2 className="section-title">Engineering depth first. Architecture and leadership built on top.</h2>
          </div>
          <div className="card-grid">
            {capabilities.map(group => <div className="glass card" key={group.title}>
              <div className="kicker" style={{fontSize:10}}>{group.title}</div>
              <div style={{display:"flex",flexWrap:"wrap",gap:7,marginTop:18}}>
                {group.items.map(item => <span className="pill" key={item}>{item}</span>)}
              </div>
            </div>)}
          </div>
        </div>
      </section>

      <section id="projects" className="section section-soft">
        <div className="shell">
          <div className="section-heading">
            <div><div className="section-index">03</div><div className="kicker">Selected Work</div></div>
            <h2 className="section-title">Production AI, secure Edge AI and governed automation.</h2>
          </div>
          <div className="project-grid">
            {projects.map((p:any) => <article className="project" key={p.title}>
              {p.cover ? <img className="project-cover" src={p.cover} alt={`${p.title} project cover`} /> : <div className="project-cover" />}
              <div className="project-body">
                <div className="kicker" style={{fontSize:10}}>{p.eyebrow}</div>
                <h3>{p.title}</h3>
                <p className="muted" style={{lineHeight:1.75,fontSize:14}}>{p.description}</p>
                <div style={{fontSize:12,color:"#546d88",margin:"16px 0",fontWeight:700}}>{p.role}</div>
                <div style={{display:"flex",flexWrap:"wrap",gap:7}}>{p.tags.map((t:string) => <span className="pill" key={t}>{t}</span>)}</div>
                <div style={{display:"flex",gap:15,marginTop:22,fontSize:13,fontWeight:800,color:"#446a99"}}>
                  <a href={p.href} target="_blank" rel="noreferrer">Explore ↗</a>
                  {p.demo && <a href={p.demo} target="_blank" rel="noreferrer">Live demo ↗</a>}
                </div>
              </div>
            </article>)}
          </div>
        </div>
      </section>

      <section id="leadership" className="section">
        <div className="shell">
          <div className="section-heading">
            <div><div className="section-index">04</div><div className="kicker">Leadership</div></div>
            <h2 className="section-title">A Director of AI pathway grounded in engineering ownership.</h2>
          </div>
          <div className="card-grid">
            {leadership.map(([title, copy]) => <div className="glass card" key={title}>
              <div style={{width:34,height:34,borderRadius:8,background:"var(--surface-blue)",display:"grid",placeItems:"center",color:"var(--blue-strong)",fontWeight:800}}>◆</div>
              <h3>{title}</h3>
              <p className="muted" style={{lineHeight:1.75,fontSize:14}}>{copy}</p>
            </div>)}
          </div>
        </div>
      </section>

      <section id="experience" className="section section-soft">
        <div className="shell">
          <div className="section-heading">
            <div><div className="section-index">05</div><div className="kicker">Experience</div></div>
            <h2 className="section-title">From systems engineering to AI platform and R&D leadership.</h2>
          </div>
          <div className="timeline">
            {experience.map(e => <div className="timeline-item" key={`${e.org}-${e.role}`}>
              <div className="kicker" style={{fontSize:10}}>{e.date}</div>
              <h3>{e.role}</h3>
              <div className="muted" style={{fontSize:13,fontWeight:700}}>{e.org}</div>
              <p className="muted" style={{maxWidth:820,lineHeight:1.8,fontSize:14}}>{e.copy}</p>
            </div>)}
          </div>
        </div>
      </section>

      <section id="insights" className="section">
        <div className="shell">
          <div className="section-heading">
            <div><div className="section-index">06</div><div className="kicker">Journal</div></div>
            <h2 className="section-title">Notes on production AI, governance and engineering leadership.</h2>
          </div>
          <div className="blog-grid">
            {posts.map(post => <Link className="blog-card" key={post.slug} href={`/blog/${post.slug}/`}>
              <div className="kicker" style={{fontSize:10}}>{post.category}</div>
              <h3>{post.title}</h3>
              <p className="muted" style={{fontSize:14,lineHeight:1.7}}>{post.description}</p>
              <div className="blog-meta">{post.date} · {post.readingTime}</div>
            </Link>)}
          </div>
          <div style={{marginTop:24}}><Link className="btn btn-ghost" href="/blog/">View All Articles</Link></div>
        </div>
      </section>

      <section id="contact" className="section section-soft">
        <div className="shell">
          <div className="callout">
            <div className="kicker">Let&apos;s connect</div>
            <h2 className="section-title" style={{marginTop:10}}>Build something meaningful with AI.</h2>
            <p className="muted" style={{maxWidth:800,lineHeight:1.85,fontSize:"1rem"}}>
              I am interested in AI engineering leadership, AI architecture, secure production AI, Edge AI and Director of AI opportunities where deep technical execution and strategic ownership belong together.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href={`mailto:${site.email}`}>Contact Me</a>
              <a className="btn btn-ghost" href={site.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
              <a className="btn btn-ghost" href={site.github} target="_blank" rel="noreferrer">GitHub</a>
            </div>
          </div>
        </div>
      </section>
    </main>

    <footer>
      <div className="shell" style={{display:"flex",justifyContent:"space-between",gap:20,flexWrap:"wrap"}}>
        <span>© Hendar Mawan · h00w</span>
        <span>AI engineering · architecture · governance · leadership</span>
      </div>
    </footer>
  </>;
}
