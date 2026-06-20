# manuelquistial.dev

Professional portfolio of **Manuel Alejandro Quistial Jurado** — Software Engineer with experience in full-stack development, applied machine learning, and neuroengineering research.

## Description

A modern, responsive portfolio built with Next.js App Router. It showcases professional experience, technical skills, projects, and research work in EEG/BCI. Structural data lives in TypeScript files; all translatable copy is centralized in i18n dictionaries (English and Spanish).

## Stack

- **Next.js 16** (App Router)
- **TypeScript**
- **Tailwind CSS v4**
- **ESLint** + **Vitest**
- **pnpm** (package manager)
- **Node.js 24** (via nvm)

## Requirements

- [nvm](https://github.com/nvm-sh/nvm)
- Node.js 24 (`.nvmrc` is included — run `nvm use`)
- pnpm 11+

## Run locally

```bash
nvm use
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000). Middleware redirects to `/en` or `/es` based on `Accept-Language` and stores preference in a `NEXT_LOCALE` cookie.

## Scripts

| Command            | Description                              |
|--------------------|------------------------------------------|
| `pnpm dev`         | Start development server                 |
| `pnpm build`       | Production build                         |
| `pnpm start`       | Start production server                  |
| `pnpm lint`        | Run ESLint                               |
| `pnpm typecheck`   | Run TypeScript without emit              |
| `pnpm test`        | Run Vitest tests                         |
| `pnpm validate`    | typecheck + lint + test + build          |

## Project structure

```
src/
├── app/
│   ├── [locale]/          # Localized routes (en, es)
│   ├── sitemap.ts
│   ├── robots.ts
│   └── opengraph-image.tsx
├── components/
│   ├── layout/            # Header, Footer, NavLinks, LocaleSwitcher
│   ├── sections/
│   └── ui/
├── config/site.ts         # site URL, static routes
├── data/                  # Structural data (IDs derived from arrays)
│   ├── profile.ts
│   ├── projects.ts
│   ├── experience.ts
│   └── skills.ts
├── i18n/
│   ├── dictionaries/
│   │   ├── en/            # Modular English copy
│   │   └── es/            # Modular Spanish copy
│   ├── parseLocale.ts
│   └── getDictionary.ts
├── lib/
│   ├── content.ts         # Merges data + i18n copy
│   └── metadata.ts        # SEO metadata helper
└── middleware.ts
```

## Customize content

| File | Purpose |
|------|---------|
| `src/data/profile.ts` | Name, email, LinkedIn, GitHub, CV URL, site URL |
| `src/data/projects.ts` | Project IDs, tags, status, URLs |
| `src/data/experience.ts` | Experience IDs, company names |
| `src/data/skills.ts` | Skill category IDs and skill lists |
| `src/i18n/dictionaries/en/` | English UI copy |
| `src/i18n/dictionaries/es/` | Spanish UI copy |
| `public/cv.pdf` | Replace with your real CV before deploy |

**Separation of concerns:** `src/data/` holds structural data only. All translatable text lives in `src/i18n/dictionaries/`. Pages merge both via helpers in `src/lib/content.ts`. Project, experience, and skill IDs are defined in their respective data files and must match keys in dictionary `content` sections.

## Pre-deploy checklist

- [ ] Replace `public/cv.pdf` with your real CV
- [ ] Update email, LinkedIn, and GitHub in `profile.ts`
- [ ] Add GitHub and live demo URLs to projects
- [ ] Verify `site.url` in `src/config/site.ts`
- [ ] Run `pnpm validate`
- [ ] Configure custom domain on Vercel

## Deploy on Vercel

1. Push the repository to GitHub.
2. Import the project on [vercel.com](https://vercel.com).
3. Settings:
   - **Install Command:** `pnpm install`
   - **Build Command:** `pnpm build`
   - **Node.js Version:** 24.x
4. Add domain `manuelquistial.dev` in Project Settings → Domains.

## License

Private — all rights reserved.
