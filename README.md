# manuelquistial.dev

Professional portfolio of **Manuel Alejandro Quistial Jurado** — Software Engineer specializing in full-stack enterprise development, applied machine learning, and EEG/BCI neuroengineering research.

**Live site:** [manuelquistial.dev](https://manuelquistial.dev)

## About this project

A statically generated English portfolio built with Next.js App Router. It presents professional experience at Anthology/Blackboard, research at Universidad de Antioquia, production WordPress work through Sal & Picciotto, and selected engineering projects — without a backend, CMS, or database.

Structural data lives in `src/data/`. Site copy lives in `src/content/`.

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
- Node.js 24 (`.nvmrc` included — run `nvm use`)
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
├── app/                       # App Router pages
├── components/
│   ├── layout/                # Header, Footer, Section, Container
│   ├── sections/              # Home page sections
│   └── ui/                    # Button, cards, badges
├── config/
│   ├── site.ts                # Site URL, static routes
│   └── navigation.ts
├── content/                   # English site copy
├── data/                      # Structural data only
│   ├── profile.ts
│   ├── projects.ts            # Projects by category
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
| `src/data/experience.ts` | Roles, companies, descriptions, technologies |
| `src/data/skills.ts` | Skill categories and lists |
| `src/content/` | Page copy, section labels, intros |

Project categories: `engineering`, `research`, `agency-web`.

## Deploy on Vercel

1. Push the repository to GitHub.
2. Import the project at [vercel.com](https://vercel.com).
3. Recommended settings:
   - **Install Command:** `pnpm install`
   - **Build Command:** `pnpm build`
   - **Node.js Version:** 24.x
4. Add custom domain `manuelquistial.dev`.
5. Run `pnpm validate` locally before each release.

## Next steps

- Add GitHub and case study URLs to engineering projects when public
- Publish PDC Colombia when the site goes live
- Add project screenshots to `public/projects/`
- Set up Vercel Analytics or Plausible for traffic insights
- Expand Vitest coverage if the UI grows

## License

Private — all rights reserved.
