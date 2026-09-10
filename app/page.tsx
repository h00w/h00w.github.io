import Link from "next/link";
import { capabilities, experience, leadership, projects, site } from "@/lib/site";
import { getAllPosts } from "@/lib/blog";

const nav = [
  ["Work", "#projects"],
  ["About", "#about"],
  ["Experience", "#experience"],
  ["Leadership", "#leadership"],
  ["Journal", "/blog/"],
  ["Contact", "#contact"],
];

export default function Home() {
  const posts = getAllPosts().slice(0, 3);

  return <>
    <header className="nav">
      <div className="shell nav-inner">
        <a href="#top" className="script" style={{ fontSize: 30, color: "#315f86" }}>h00w</a>
        <nav className="nav-links">
          {nav.map(([label, href]) => href.startsWith("/")
            ? <Link key={label} href={href}>{label}</Link>
            : <a key={label} href={href}>{label}</a>)}
        </nav>
      </div>
    </header>

    <main id="top">
      <section className="hero grid-bg">
        <div className="shell hero-grid">
          <div>
            <div className="pill" style={{ color: "#527792", borderColor: "rgba(94,159,206,.2)" }}>
              <span style={{ width: 7, height: 7, borderRadius: 99, background: "#79c7ae", boxShadow: "0 0 0 4px rgba(121,199,174,.12)" }} />
              Stockholm · Open to AI Engineering Leadership
            </div>

            <div className="script" style={{ fontSize: "clamp(2.2rem,4vw,3.7rem)", color: "#6b9fc4", marginTop: 26 }}>Hendar Mawan</div>
            <h1 className="display">Building Production AI Systems. <span className="gradient">Leading AI Transformation.</span></h1>
            <p>{site.summary}</p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginTop: 30 }}>
              <a className="btn btn-primary" href="#projects">See selected work →</a>
              <Link className="btn btn-ghost" href="/blog/">Read the journal</Link>
              <a className="btn btn-ghost" href="#contact">Get in touch</a>
            </div>

            <div className="stat-grid">
              <div className="stat"><strong>15+ years</strong><span>Engineering experience</span></div>
              <div className="stat"><strong>AI + Edge</strong><span>Production systems</span></div>
              <div className="stat"><strong>R&D Director</strong><span>Strategy + execution</span></div>
              <div className="stat"><strong>PhD Eng.</strong><span>Research depth</span></div>
            </div>
          </div>

          <div className="glass hero-art" aria-label="Portrait of Hendar Mawan">
            <div className="hero-signature script">Hendar</div>
            <div className="hero-role">AI Engineering · Architecture · Leadership</div>
          </div>
        </div>
      </section>

      <section id="about" className="section">
        <div className="shell">
          <div className="kicker">About</div>
          <h2 className="display section-title">Engineering depth, architectural judgment, and leadership that moves AI into production.</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 26, marginTop: 42 }}>
            <div>
              <p className="muted" style={{ fontSize: "1.06rem", lineHeight: 1.95 }}>
                I work where AI models become operational systems: architecture, integration, deployment, observability, governance, security, automation and recovery. My engineering foundation spans embedded and distributed computing, trusted systems and production software.
              </p>
              <p className="muted" style={{ fontSize: "1.06rem", lineHeight: 1.95 }}>
                My current path connects hands-on AI engineering with platform ownership, programme leadership and executive-level technical responsibility.
              </p>
            </div>
            <div className="glass card">
              <div className="kicker">Working philosophy</div>
              <p className="display" style={{ fontSize: "1.9rem", lineHeight: 1.35, color: "#2c465e", marginBottom: 10 }}>
                “AI without governance becomes risk. Governance without innovation becomes stagnation.”
              </p>
              <p className="muted" style={{ lineHeight: 1.8 }}>
                The goal is not to slow AI down. It is to create the conditions for teams to move quickly without losing reliability, security or accountability.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="capabilities" className="section" style={{ borderTop: "1px solid rgba(95,142,184,.09)", borderBottom: "1px solid rgba(95,142,184,.09)", background: "linear-gradient(180deg,#f7fbff,#fbfdff)" }}>
        <div className="shell">
          <div className="kicker">Capabilities</div>
          <h2 className="display section-title">AI engineering first. Leadership built on technical depth.</h2>
          <div className="card-grid">
            {capabilities.map(group => <div className="glass card" key={group.title}>
              <div className="kicker" style={{ fontSize: 10 }}>{group.title}</div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 7, marginTop: 18 }}>
                {group.items.map(i => <span className="pill" key={i}>{i}</span>)}
              </div>
            </div>)}
          </div>
        </div>
      </section>

      <section id="projects" className="section">
        <div className="shell">
          <div className="kicker">Selected work</div>
          <h2 className="display section-title">AI systems designed for the real world.</h2>
          <p className="muted" style={{ maxWidth: 780, lineHeight: 1.9, fontSize: "1.03rem" }}>
            A curated selection spanning industrial Edge AI, executable governance and production automation—showing the path from engineering detail to platform ownership.
          </p>

          <div className="project-grid">
            {projects.map((p: any) => <article className="glass project" key={p.title}>
              {p.cover
                ? <img className="project-cover" src={p.cover} alt={`${p.title} project cover`} />
                : <div className="project-cover" style={{ display: "grid", placeItems: "center", background: "linear-gradient(135deg,#edf7fd,#f8f6ff)" }}><div className="script" style={{ fontSize: 62, color: "#649ac0" }}>LIFE-AI</div></div>}
              <div className="project-body">
                <div className="kicker" style={{ fontSize: 10 }}>{p.eyebrow}</div>
                <h3>{p.title}</h3>
                <p className="muted" style={{ lineHeight: 1.82 }}>{p.description}</p>
                <div style={{ fontSize: 12, color: "#567089", margin: "16px 0" }}>{p.role}</div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 7 }}>{p.tags.map((t: string) => <span className="pill" key={t}>{t}</span>)}</div>
                <div style={{ display: "flex", gap: 14, marginTop: 22, fontSize: 13, fontWeight: 700, color: "#315f86" }}>
                  <a href={p.href} target="_blank" rel="noreferrer">Explore ↗</a>
                  {p.demo && <a href={p.demo} target="_blank" rel="noreferrer">Live demo ↗</a>}
                </div>
              </div>
            </article>)}
          </div>
        </div>
      </section>

      <section id="leadership" className="section" style={{ borderTop: "1px solid rgba(95,142,184,.09)", borderBottom: "1px solid rgba(95,142,184,.09)", background: "linear-gradient(135deg,#f4faff,#faf8ff)" }}>
        <div className="shell">
          <div className="kicker">Director of AI pathway</div>
          <h2 className="display section-title">Technical authority with executive-level operating scope.</h2>
          <p className="muted" style={{ maxWidth: 820, lineHeight: 1.9, fontSize: "1.05rem" }}>
            My leadership scope covers the full AI lifecycle: strategy, architecture, teams, delivery, governance, industrial partners and measurable production outcomes.
          </p>
          <div className="card-grid">
            {leadership.map(([title, copy]) => <div className="glass card" key={title}>
              <div className="script" style={{ fontSize: 31, color: "#7eaed0" }}>✦</div>
              <h3>{title}</h3>
              <p className="muted" style={{ lineHeight: 1.82, fontSize: 14 }}>{copy}</p>
            </div>)}
          </div>
        </div>
      </section>

      <section id="experience" className="section">
        <div className="shell">
          <div className="kicker">Experience</div>
          <h2 className="display section-title">A progression from systems engineering to AI leadership.</h2>
          <div className="timeline">
            {experience.map(e => <div className="timeline-item" key={`${e.org}-${e.role}`}>
              <div className="kicker" style={{ fontSize: 10 }}>{e.date}</div>
              <h3 className="display" style={{ fontSize: 28, margin: "7px 0 2px", fontWeight: 600, color: "#2d465e" }}>{e.role}</h3>
              <div className="muted" style={{ fontSize: 13 }}>{e.org}</div>
              <p className="muted" style={{ maxWidth: 830, lineHeight: 1.87, fontSize: 14 }}>{e.copy}</p>
            </div>)}
          </div>
        </div>
      </section>

      <section id="insights" className="section" style={{ borderTop: "1px solid rgba(95,142,184,.09)", background: "#fbfdff" }}>
        <div className="shell">
          <div className="kicker">Journal</div>
          <h2 className="display section-title">Production AI, governance and engineering leadership.</h2>
          <div className="blog-grid">
            {posts.map(post => <Link className="glass blog-card" key={post.slug} href={`/blog/${post.slug}/`}>
              <div className="kicker" style={{ fontSize: 10 }}>{post.category}</div>
              <h3>{post.title}</h3>
              <p className="muted" style={{ fontSize: 14, lineHeight: 1.75 }}>{post.description}</p>
              <div className="blog-meta">{post.date} · {post.readingTime}</div>
            </Link>)}
          </div>
          <div style={{ marginTop: 26 }}><Link className="btn btn-ghost" href="/blog/">View all writing →</Link></div>
        </div>
      </section>

      <section id="contact" className="section">
        <div className="shell">
          <div className="glass callout">
            <div className="script" style={{ color: "#6c9fc3", fontSize: "2.4rem" }}>Let&apos;s build something meaningful.</div>
            <h2 className="display section-title" style={{ marginTop: 8 }}>AI Engineering Leadership · AI Architecture · Director of AI</h2>
            <p className="muted" style={{ maxWidth: 850, lineHeight: 1.9, fontSize: "1.05rem" }}>
              I am interested in roles and collaborations where hands-on AI engineering meets platform ownership, technical strategy and team leadership—especially production AI, Edge AI, AI infrastructure and governed enterprise AI.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginTop: 28 }}>
              <a className="btn btn-primary" href={`mailto:${site.email}`}>Discuss an opportunity</a>
              <a className="btn btn-ghost" href={site.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
              <a className="btn btn-ghost" href={site.github} target="_blank" rel="noreferrer">GitHub</a>
            </div>
          </div>
        </div>
      </section>
    </main>

    <footer>
      <div className="shell" style={{ display: "flex", justifyContent: "space-between", gap: 20, flexWrap: "wrap" }}>
        <span className="script" style={{ fontSize: 24, color: "#557d9b" }}>Hendar Mawan · h00w</span>
        <span>Production AI should be intelligent, secure, governed and trusted.</span>
      </div>
    </footer>
  </>;
}
