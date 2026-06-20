# manuelquistial.dev

Professional portfolio of **Manuel Alejandro Quistial Jurado**: Software Engineer specializing in full-stack enterprise development, institutional systems, publishing platforms, and EEG/BCI neuroengineering research.

**Live site:** [manuelquistial.dev](https://manuelquistial.dev)

## About this project

A statically generated English portfolio built with Next.js App Router. It presents professional experience at Anthology/Blackboard, the UdeA FCF institutional ecosystem, Babel Scores publishing engineering, research at Universidad de Antioquia, and production WordPress work through Sal & Picciotto: without a backend, CMS, or database.

Structural data lives in `src/data/`. Site copy lives in `src/content/`. Case study narratives live in `src/content/case-studies/`.

## Stack

| Layer | Technology |
|-------|------------|
| Framework | Next.js 16 (App Router, SSG) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Quality | ESLint, Vitest, GitHub Actions CI |
| Tooling | pnpm, Node.js 24 (nvm) |
| Hosting | Vercel |

## Requirements

- [nvm](https://github.com/nvm-sh/nvm)
- Node.js 24 (`.nvmrc` included: run `nvm use`)
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
│   ├── projects/[slug]/       # Dynamic case study pages
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
│   ├── case-studies/          # Case study registry + content
│   ├── pages.ts
│   └── ui.ts
├── data/                      # Structural data only
│   ├── profile.ts
│   ├── projects.ts            # Projects, published flag, caseStudyUrl
│   ├── experience.ts
│   └── skills.ts
└── lib/
    ├── metadata.ts
    └── projects.ts
public/
├── cv/                        # CV PDF
└── projects/                  # Case study diagrams, optional thumbnails
```

## Customize content

| File | What to edit |
|------|--------------|
| `src/data/profile.ts` | Name, email, LinkedIn, GitHub, CV path, tagline |
| `src/data/projects.ts` | Project titles, categories, tags, status, URLs, `published` |
| `src/data/experience.ts` | Roles, companies, descriptions, `period`, technologies |
| `src/data/skills.ts` | Skill categories and lists |
| `src/content/case-studies/` | Case study sections per engineering project |
| `src/content/` | Page copy, section labels, hero, meta |

Project categories: `engineering`, `research`, `agency-web`.

Projects with `published: false` remain in data but are hidden from the public site. Case studies are served at `/projects/[slug]` when a project has `caseStudyUrl` and a registry entry in `src/content/case-studies/index.ts`.

## Analytics

Optional Plausible analytics via environment variable:

```bash
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=manuelquistial.dev
```

When unset, no analytics script is loaded.

## Pre-deploy checklist

- [ ] Experience `period` values verified against your CV
- [ ] CV PDF in `public/cv/` aligned with site content
- [ ] Copy review: no em dashes, no internal URLs, no credentials
- [ ] Planned projects (`published: false`) not visible in UI
- [ ] Case studies (UDEA FCF, Babel Scores) reviewed for sensitive details
- [ ] `pnpm validate` passes locally

## Deploy on Vercel

1. Push the repository to GitHub.
2. Import the project at [vercel.com](https://vercel.com).
3. Recommended settings:
   - **Install Command:** `pnpm install`
   - **Build Command:** `pnpm build`
   - **Node.js Version:** 24.x
4. Add custom domain `manuelquistial.dev`.
5. Optionally set `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` in project environment variables.
6. Run `pnpm validate` locally before each release.

## License

Private: all rights reserved.
