# manuelquistial.dev

Professional portfolio site for **Manuel Alejandro Quistial Jurado**, Software Engineer focused on full-stack enterprise work, institutional platforms, publishing systems, and EEG/BCI neuroengineering research.

**Live:** [manuelquistial.dev](https://manuelquistial.dev)

## Features

- English and Spanish routes (`/en`, `/es`) with locale detection and a header switcher
- Static generation for core pages, projects, and case studies
- Structured content split between shared data (`src/data/`) and localized copy (`src/content/`)
- Engineering case studies at `/[locale]/projects/[slug]`
- SEO metadata, sitemap, robots, and Open Graph image
- CI validation via GitHub Actions (`pnpm validate`)

## Stack

| Layer | Technology |
|-------|------------|
| Framework | Next.js 16 (App Router) |
| UI | React 19, Tailwind CSS v4 |
| Language | TypeScript |
| Testing | Vitest |
| Tooling | pnpm, Node.js 24.x |
| Hosting | Vercel |

## Getting started

**Requirements:** Node.js 24.x (see `.nvmrc`), pnpm 11+

```bash
nvm use
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000). The root path redirects to the active locale.

### Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Development server |
| `pnpm build` | Production build |
| `pnpm start` | Serve production build |
| `pnpm lint` | ESLint |
| `pnpm typecheck` | TypeScript check |
| `pnpm test` | Run unit tests |
| `pnpm test:watch` | Run tests in watch mode |
| `pnpm validate` | Full check: typecheck, lint, test, build |

## Routes

| Path | Page |
|------|------|
| `/[locale]` | Home |
| `/[locale]/about` | About and experience |
| `/[locale]/projects` | Projects by category |
| `/[locale]/projects/[slug]` | Case study (when published) |
| `/[locale]/research` | Research overview |
| `/[locale]/contact` | Contact |

Project categories: `engineering`, `research`, `agency-web`.

## Project layout

```
src/
├── app/[locale]/          # Localized App Router pages
├── components/            # Layout, sections, UI, SEO
├── config/                # Site URL and navigation
├── content/
│   ├── en/                # English UI, pages, overlays, case studies
│   ├── es/                # Spanish translations
│   ├── getSiteContent.ts
│   └── getCaseStudy.ts
├── data/                  # Shared structural data
│   ├── profile.ts
│   ├── projects.ts
│   ├── experience.ts
│   └── skills.ts
├── i18n/                  # Locale config
├── lib/                   # Metadata, localization, helpers
└── proxy.ts               # Locale redirect and cookie handling
public/
└── cv/                    # CV PDFs
```

## License

Private. All rights reserved.
