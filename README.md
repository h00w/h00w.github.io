# h00w.github.io — Hendar Mawan Portfolio

This repository powers the public portfolio at:

**https://h00w.github.io/**

The positioning is intentionally built around the progression:

**AI Engineer → AI Architect → Director of AI**

Primary themes:

- Production AI engineering
- AI platform architecture
- AI governance and security
- Edge AI and industrial AI
- MLOps and lifecycle engineering
- R&D and engineering leadership
- Research-to-product execution

## Local development

Requirements:

- Node.js 22+
- npm

Run:

```bash
npm install
npm run typecheck
npm run dev
```

Then open:

```text
http://localhost:3000
```

Production/static build:

```bash
npm run build
```

The exported site is written to `out/`.

## GitHub Pages

This repository is the special user Pages repository `h00w/h00w.github.io`, so it publishes at the root URL:

```text
https://h00w.github.io/
```

In GitHub open **Settings → Pages** and choose **GitHub Actions** as the source. The included workflow builds the static Next.js export with no repository base path.

---

# Editing portfolio content

Most profile content is centralized in:

```text
lib/site.ts
```

Edit that file to change:

- name and headline
- biography/summary
- skills and capabilities
- featured projects
- job experience
- AI leadership positioning
- GitHub / LinkedIn / LIFE-AI / email links

To add a featured project, copy an existing object in the `projects` array and edit:

```ts
{
  title: "New AI Project",
  eyebrow: "Production AI",
  description: "What the project solves and why it matters.",
  role: "Architecture · Engineering · Leadership",
  tags: ["AI", "MLOps", "Platform"],
  href: "https://github.com/...",
  demo: "https://...",
  cover: "https://.../cover.png"
}
```

If there is no live demo, remove the `demo` line.

---

# Adding a blog post

Blog posts are plain Markdown files stored in:

```text
content/blog/
```

A reusable template is available at:

```text
content/blog/_TEMPLATE.md
```

## Fastest method from GitHub.com

1. Browse to `content/blog/`.
2. Open `_TEMPLATE.md`.
3. Copy its contents.
4. Click **Add file → Create new file**.
5. Name the new file using lowercase words separated by hyphens, for example:

```text
building-reliable-ai-agents.md
```

6. Paste the template.
7. Update the front matter and article body.
8. Click **Commit changes**.

The next GitHub Actions run automatically rebuilds the portfolio. The article appears on:

```text
https://h00w.github.io/blog/
```

and receives its own page, for example:

```text
https://h00w.github.io/blog/building-reliable-ai-agents/
```

## Blog front matter

Every article begins with:

```yaml
---
title: "Building Reliable AI Agents"
date: "2026-09-10"
description: "A short description used on the article card and for SEO."
category: "Agentic AI"
tags: ["AI Agents", "Production AI", "Evaluation"]
readingTime: "7 min"
---
```

Then write normal Markdown below the second `---`.

---

# Editing the design

The visual system is centralized in:

```text
app/globals.css
```

Important variables at the top control the site identity:

```css
--bg: #050b14;
--cyan: #4de7ff;
--blue: #4a8cff;
--violet: #9f82ff;
```

The homepage layout is in `app/page.tsx`.
The blog index is in `app/blog/page.tsx`.
Individual article rendering is in `app/blog/[slug]/page.tsx`.
SEO and structured Person metadata are in `app/layout.tsx`.

## Recommended content strategy

For the AI Director pathway, publish articles that demonstrate both technical depth and operating judgment:

1. From Prototype to Production AI
2. Why AI Governance Must Become Executable
3. Designing Reliable Agentic Workflows
4. How to Operate AI Across Edge Fleets
5. AI Platform Architecture: What Belongs in the Control Plane
6. Human-in-the-Loop Is a Production Control, Not an AI Limitation
7. What AI Engineering Leaders Should Measure After Deployment
8. Secure Model Delivery and Rollback for Industrial AI
