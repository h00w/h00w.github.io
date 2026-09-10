import { getAllPosts, getPost } from "@/lib/blog";
import Link from "next/link";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return getAllPosts().map(post => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return {};
  return { title: `${post.title} | Hendar Mawan`, description: post.description };
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) notFound();
  return <>
    <header className="nav"><div className="shell nav-inner"><Link href="/" className="brand">HENDAR<span>.</span></Link><nav className="nav-links"><Link href="/">Home</Link><Link href="/blog/">All Articles</Link></nav></div></header>
    <article className="shell prose">
      <div className="kicker">{post.category}</div>
      <h1>{post.title}</h1>
      <p className="muted" style={{fontSize:"1.08rem"}}>{post.description}</p>
      <div className="blog-meta" style={{margin:"20px 0 38px"}}>{post.date} · {post.readingTime} · Hendar Mawan, PhD Eng.</div>
      <div dangerouslySetInnerHTML={{__html: post.content || ""}} />
      <div className="callout" style={{marginTop:48}}>
        <div className="kicker">About the author</div>
        <p>Hendar Mawan is an AI engineering leader working across production AI, Edge AI, secure AI infrastructure, platform architecture and R&D leadership.</p>
        <Link href="/" style={{color:"var(--blue-strong)",fontWeight:800}}>Back to portfolio →</Link>
      </div>
    </article>
  </>;
}
