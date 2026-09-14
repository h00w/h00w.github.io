import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import "./fixes.css";
import { site } from "@/lib/site";

const canonicalOrigin = "https://hendarmawan.se";

export const metadata: Metadata = {
  metadataBase: new URL(canonicalOrigin),
  title: "Hendar Mawan | Production AI & Secure Agentic AI Engineering Leader",
  description: site.tagline,
  keywords: ["Production AI","Agentic AI","Secure AI","AI Engineering Leader","AI Architect","AI Evaluation","AI Governance","Edge AI","MLOps","DevSecOps","Cybersecurity"],
  authors: [{ name: site.name, url: site.github }],
  openGraph: {
    title: "Hendar Mawan | Production AI & Secure Agentic AI Engineering Leader",
    description: site.tagline,
    url: canonicalOrigin,
    type: "website"
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  alternateName: site.nickname,
  url: canonicalOrigin,
  sameAs: [site.github, site.linkedin],
  jobTitle: "Production AI and Secure Agentic AI Engineering Leader",
  address: { "@type": "PostalAddress", addressCountry: "SE" },
  knowsAbout: ["Production AI","Agentic AI","AI Evaluation","AI Governance","Secure AI","Edge AI","MLOps","DevSecOps","Cybersecurity"]
};

const canonicalHostScript = `
(function () {
  var canonicalHost = "hendarmawan.se";
  var host = window.location.hostname;
  var isLocal = host === "localhost" || host === "127.0.0.1";
  if (isLocal) return;

  if (host !== canonicalHost || window.location.protocol !== "https:") {
    window.location.replace(
      "https://" + canonicalHost + window.location.pathname + window.location.search + window.location.hash
    );
  }
})();
`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>
    <script dangerouslySetInnerHTML={{__html: canonicalHostScript}} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(jsonLd)}} />
    {children}
    <Link
      href="/advisory/"
      aria-label="AI advisory and consulting"
      style={{position:"fixed",right:20,bottom:20,zIndex:50,padding:"11px 16px",borderRadius:999,background:"#173b63",color:"#fff",fontWeight:800,fontSize:13,boxShadow:"0 12px 32px rgba(23,59,99,.24)",border:"1px solid rgba(255,255,255,.18)"}}
    >
      AI Advisory →
    </Link>
  </body></html>;
}
