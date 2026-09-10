import { getAllPosts } from "@/lib/blog";
import Link from "next/link";

export const metadata = { title: "Insights | Hendar Mawan" };

export default function BlogPage() {
  const posts = getAllPosts();
  return <>
    <header className="nav"><div className="shell nav-inner"><Link href="/" className="brand">HENDAR<span>.</span></Link><nav className="nav-links"><Link href="/">Home</Link><Link href="/blog/">Blog</Link></nav></div></header>
    <main className="shell section" style={{paddingTop:130,minHeight:"90vh"}}>
      <div className="section-heading">
        <div><div className="section-index">JOURNAL</div><div className="kicker">Insights & Articles</div></div>
        <h1 className="section-title">Production AI, architecture and engineering leadership.</h1>
      </div>
      <p className="muted" style={{maxWidth:760,lineHeight:1.85,fontSize:"1rem"}}>Notes from building secure AI systems, governing model lifecycles, operating distributed platforms and translating research into production engineering.</p>
      <div className="blog-grid" style={{marginTop:36}}>
        {posts.map(post => <Link key={post.slug} href={`/blog/${post.slug}/`} className="blog-card">
          <div className="kicker" style={{fontSize:10}}>{post.category}</div>
          <h3>{post.title}</h3>
          <p className="muted" style={{fontSize:14,lineHeight:1.7}}>{post.description}</p>
          <div className="blog-meta">{post.date} · {post.readingTime}</div>
          <div style={{marginTop:16,display:"flex",flexWrap:"wrap",gap:6}}>{post.tags.map(t=><span className="pill" key={t}>{t}</span>)}</div>
        </Link>)}
      </div>
    </main>
    <footer><div className="shell">© Hendar Mawan · h00w</div></footer>
  </>;
}
