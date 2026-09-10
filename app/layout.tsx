import type { Metadata } from "next";
import "./globals.css";
import "./fixes.css";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL("https://h00w.github.io"),
  title: "Hendar Mawan | AI Engineering Leader & AI Architect",
  description: site.tagline,
  keywords: ["AI Engineer","AI Engineering Leader","Director of AI","AI Architect","Production AI","AI Governance","Edge AI","MLOps","DevSecOps","Enterprise AI"],
  authors: [{ name: site.name, url: site.github }],
  openGraph: {
    title: "Hendar Mawan | AI Engineering Leader",
    description: site.tagline,
    url: "https://h00w.github.io",
    type: "website"
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  alternateName: site.nickname,
  url: "https://h00w.github.io",
  sameAs: [site.github, site.linkedin],
  jobTitle: "AI Engineering Leader and AI Architect",
  address: { "@type": "PostalAddress", addressCountry: "SE" },
  knowsAbout: ["AI Engineering","Production AI","AI Governance","Edge AI","MLOps","DevSecOps","Platform Engineering","Cybersecurity"]
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(jsonLd)}} />
    {children}
  </body></html>;
}
