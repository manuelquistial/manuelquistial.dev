# manuelquistial.dev

Professional portfolio of **Manuel Alejandro Quistial Jurado** — Software Engineer specializing in full-stack enterprise development, applied machine learning, and EEG/BCI neuroengineering research.

**Live site:** [manuelquistial.dev](https://manuelquistial.dev)

## About this project

A statically generated, bilingual (EN/ES) portfolio built with Next.js App Router. It presents professional experience at Anthology/Blackboard, research at Universidad de Antioquia, technical skills, and selected projects — without a backend, CMS, or database.

Structural data (IDs, tags, URLs, companies) lives in `src/data/`. All translatable copy lives in `src/i18n/dictionaries/`. Pages merge both via helpers in `src/lib/content.ts`.

## Stack

| Layer | Technology |
|-------|------------|
| Framework | Next.js 16 (App Router, SSG) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| i18n | Custom dictionaries (EN / ES) |
| Quality | ESLint, Vitest, GitHub Actions CI |
| Tooling | pnpm, Node.js 24 (nvm) |
| Hosting | Vercel |

## Requirements

- [nvm](https://github.com/nvm-sh/nvm)
- Node.js 24 (`.nvmrc` included — run `nvm use`)
- pnpm 11+

## Run locally

```bash
nvm use
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000). Middleware redirects to `/en` or `/es` based on `Accept-Language` and stores preference in a `NEXT_LOCALE` cookie.

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

`npm run build` also works if you prefer npm, but pnpm is the project default.

## Project structure

```
src/
├── app/
│   ├── [locale]/              # Localized pages (en, es)
│   ├── sitemap.ts
│   ├── robots.ts
│   └── opengraph-image.tsx
├── components/
│   ├── layout/                # Header, Footer, Section, Container
│   ├── sections/              # Home page sections
│   └── ui/                    # Button, cards, badges
├── config/
│   ├── site.ts                # Site URL, static routes
│   └── navigation.ts
├── data/                      # Structural data only
│   ├── profile.ts             # Contact, CV paths, tagline
│   ├── projects.ts            # Project IDs, tags, status, URLs
│   ├── experience.ts          # Experience IDs, companies
│   └── skills.ts              # Skill categories and lists
├── i18n/
│   ├── dictionaries/en|es/    # UI copy, page content, labels
│   ├── getDictionary.ts
│   └── parseLocale.ts
├── lib/
│   ├── content.ts             # Merges data + i18n
│   └── metadata.ts            # SEO helpers
└── middleware.ts
public/
└── cv/                        # Locale-specific CV PDFs
```

## Customize content

| File | What to edit |
|------|--------------|
| `src/data/profile.ts` | Name, email, LinkedIn, GitHub, CV paths, tagline |
| `src/data/projects.ts` | Project IDs, tags, status, `githubUrl`, `liveUrl` |
| `src/data/experience.ts` | Experience IDs, company names, `current` flag |
| `src/data/skills.ts` | Skill categories and skill lists |
| `src/i18n/dictionaries/en/` | English copy |
| `src/i18n/dictionaries/es/` | Spanish copy |
| `public/cv/*.pdf` | CV files (EN and ES) |

**Rule:** IDs in `src/data/` must match keys in `dictionary.content` for projects, experience, and skills.

## Deploy on Vercel

1. Push the repository to GitHub.
2. Import the project at [vercel.com](https://vercel.com).
3. Framework preset: **Next.js** (auto-detected).
4. Recommended settings:
   - **Install Command:** `pnpm install`
   - **Build Command:** `pnpm build`
   - **Node.js Version:** 24.x
5. Add custom domain `manuelquistial.dev` under Project Settings → Domains.
6. Run `pnpm validate` locally before each release.

## Pre-deploy checklist

- [ ] Update CV PDFs in `public/cv/`
- [ ] Verify email, LinkedIn, and GitHub in `profile.ts`
- [ ] Add `githubUrl` / `liveUrl` to projects when available
- [ ] Confirm `site.url` in `src/config/site.ts`
- [ ] Run `pnpm validate`

## Next steps

- Add GitHub and live demo URLs to projects as they become public
- Publish a blog or case studies section for deep dives on enterprise and research work
- Add project screenshots or diagrams to `public/projects/`
- Set up Vercel Analytics or Plausible for privacy-friendly traffic insights
- Connect a custom email alias (e.g. `hello@manuelquistial.dev`)
- Expand Vitest coverage for component snapshots if the UI grows

## License

Private — all rights reserved.
