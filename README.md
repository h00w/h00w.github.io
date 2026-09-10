# Hendar Mawan — AI Engineering Leader Portfolio

Source for **https://h00w.github.io/**.

This portfolio is positioned around the progression:

**AI Engineer → AI Architect → Director of AI**

The visual system is inspired by the clean composition of ErysCode7/Web-Portfolio, while remaining a distinct design for Hendar Mawan: generous white space, pastel-blue geometric artwork, strong modern typography, a portrait-led hero, project artwork, and a senior AI engineering / technology leadership narrative.

## Visual identity

- Light white / soft-blue background
- Pastel blue and lavender geometric artwork
- **Plus Jakarta Sans** for display typography
- **Manrope** for body typography
- No calligraphy or script fonts
- Responsive portrait-led hero composition
- Professional AI engineering, architecture and leadership positioning

## Main assets

- `public/hendarmawan.png` — hero portrait
- `public/lifeai.jpg` — LIFE-AI project cover

## Content editing

Most profile content lives in `lib/site.ts`. Edit this file for profile summary, skills/capabilities, featured projects, experience, leadership positioning, and links/contact details.

## Adding a blog article

Create a Markdown file in `content/blog/`. Copy `content/blog/_TEMPLATE.md`, rename it to a clean slug such as `building-reliable-ai-agents.md`, update the front matter and Markdown body, and commit to `main`. GitHub Actions will rebuild the site.

## Development

```bash
npm install
npm run typecheck
npm run dev
```

Production build:

```bash
npm run build
```

## Deployment

Repository: `h00w/h00w.github.io`

GitHub Pages target: **https://h00w.github.io/**

The deployment workflow is stored in `.github/workflows/deploy-pages.yml`.
