import type { Metadata } from "next";
import "./globals.css";
import "./fixes.css";
import { site } from "@/lib/site";

const canonicalOrigin = "https://hendarmawan.se";

export const metadata: Metadata = {
  metadataBase: new URL(canonicalOrigin),
  title: "Hendar Mawan | AI Engineering Leader & AI Architect",
  description: site.tagline,
  keywords: ["AI Engineer","AI Engineering Leader","Director of AI","AI Architect","Production AI","AI Governance","Edge AI","MLOps","DevSecOps","Enterprise AI"],
  authors: [{ name: site.name, url: site.github }],
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "Hendar Mawan | AI Engineering Leader",
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
  jobTitle: "AI Engineering Leader and AI Architect",
  address: { "@type": "PostalAddress", addressCountry: "SE" },
  knowsAbout: ["AI Engineering","Production AI","AI Governance","Edge AI","MLOps","DevSecOps","Platform Engineering","Cybersecurity"]
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
  </body></html>;
}
