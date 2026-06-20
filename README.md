# manuelquistial.dev

Professional portfolio of **Manuel Alejandro Quistial Jurado**: Software Engineer specializing in full-stack enterprise development, institutional systems, publishing platforms, and EEG/BCI neuroengineering research.

**Live site:** [manuelquistial.dev](https://manuelquistial.dev)

## About this project

A statically generated bilingual portfolio (English and Spanish) built with Next.js App Router. Routes are locale-prefixed (`/en`, `/es`) with automatic locale detection via `src/proxy.ts`.

## Stack

| Layer | Technology |
|-------|------------|
| Framework | Next.js 16 (App Router, SSG) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Quality | ESLint, Vitest, GitHub Actions CI |
| Tooling | pnpm, Node.js 24.x (nvm) |
| Hosting | Vercel |

## Requirements

- [nvm](https://github.com/nvm-sh/nvm)
- Node.js 24.x (pinned in `package.json` `engines`, `.nvmrc`, and `.node-version`; run `nvm use`)
- pnpm 11+

## Run locally

```bash
nvm use
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

### Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Development server |
| `pnpm build` | Production build |
| `pnpm start` | Production server |
| `pnpm lint` | ESLint |
| `pnpm typecheck` | TypeScript check |
| `pnpm test` | Vitest unit tests |
| `pnpm validate` | typecheck + lint + test + build |

## Project structure

```
src/
├── app/
│   ├── [locale]/              # Localized routes (/en, /es)
│   │   ├── projects/[slug]/   # Dynamic case study pages
│   │   └── ...
│   └── ...
├── components/
│   ├── analytics/             # Env-gated Plausible script
│   ├── layout/
│   ├── sections/              # Home sections + CaseStudyView
│   ├── seo/                   # JSON-LD structured data
│   └── ui/
├── config/
│   ├── site.ts                # Site URL, static routes
│   └── navigation.ts
├── content/
│   ├── en/                    # English UI, pages, data overlays, case studies
│   ├── es/                    # Spanish translations
│   ├── getSiteContent.ts
│   └── getCaseStudy.ts
├── data/                      # Structural data only
│   ├── profile.ts
│   ├── projects.ts            # Projects, caseStudyUrl, status
│   ├── experience.ts
│   └── skills.ts
└── lib/
    ├── metadata.ts
    └── projects.ts
public/
└── cv/                        # CV PDF
```

## Customize content

| File | What to edit |
|------|--------------|
| `src/data/profile.ts` | Name, email, LinkedIn, GitHub, CV path, tagline |
| `src/data/projects.ts` | Project titles, categories, tags, status, URLs |
| `src/data/experience.ts` | Roles, companies, descriptions, `period`, technologies |
| `src/data/skills.ts` | Skill categories and lists |
| `src/content/en/` or `src/content/es/` | Page copy, section labels, hero, meta, localized overlays |
| `src/content/*/case-studies/` | Case study sections per engineering project |

Project categories: `engineering`, `research`, `agency-web`.

Case studies are served at `/[locale]/projects/[slug]` when a project has `caseStudyUrl` and a registry entry in `src/content/[locale]/case-studies/index.ts`.

Spanish CV path is configured as `/cv/manuel-quistial-cv-es.pdf` (add the PDF to `public/cv/` when available).

## Analytics

Optional Plausible analytics via environment variable:

```bash
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=manuelquistial.dev
```

When unset, no analytics script is loaded.

## Pre-deploy checklist

- [ ] Experience `period` values verified against your CV
- [ ] CV PDF in `public/cv/` aligned with site content
- [ ] Copy review: no em dashes, no internal URLs, no credentials, no phone number on site
- [ ] Case studies (UDEA FCF, Babel Scores) reviewed for sensitive details
- [ ] `pnpm validate` passes locally

## Deploy on Vercel

1. Push the repository to GitHub.
2. Import the project at [vercel.com](https://vercel.com).
3. Recommended settings:
   - **Install Command:** `pnpm install`
   - **Build Command:** `pnpm build`
   - **Node.js Version:** 24.x (from `package.json` `engines`; do not use `>=24`)
4. Add custom domain `manuelquistial.dev`.
5. Optionally set `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` in project environment variables.
6. Run `pnpm validate` locally before each release.

## License

Private: all rights reserved.
