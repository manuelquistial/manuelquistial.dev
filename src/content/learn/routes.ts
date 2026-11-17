import type { Locale } from "@/i18n/config";

export const learnIndexLocales = ["es", "en"] as const satisfies readonly Locale[];

export const learnBasePathByLocale = {
  es: "/aprendamos",
  en: "/learn",
} as const satisfies Record<Locale, `/${string}`>;

export const learnRoutes = [
  {
    id: "neurons",
    slugs: {
      es: "como-se-comunican-las-neuronas",
      en: "how-do-neurons-communicate",
    },
    locales: ["es", "en"],
  },
] as const satisfies readonly {
  id: string;
  slugs: Record<Locale, string>;
  locales: readonly Locale[];
}[];

export type LearnRoute = (typeof learnRoutes)[number];

function normalizePath(path: string): string {
  const trimmed =
    path.length > 1 && path.endsWith("/") ? path.slice(0, -1) : path;
  return trimmed.startsWith("/") ? trimmed : `/${trimmed}`;
}

export function getLearnBasePath(locale: Locale): string {
  return learnBasePathByLocale[locale];
}

export function getLearnLessonPath(locale: Locale, slug: string): string {
  return `${getLearnBasePath(locale)}/${slug}`;
}

export function isLearnBaseSegment(segment: string): boolean {
  return Object.values(learnBasePathByLocale).some(
    (base) => base === `/${segment}`,
  );
}

export function findLearnRouteBySlug(slug: string): LearnRoute | undefined {
  return learnRoutes.find((route) =>
    Object.values(route.slugs).some((value) => value === slug),
  );
}

export function getLearnSlugForLocale(
  route: LearnRoute,
  locale: Locale,
): string | undefined {
  if (!route.locales.some((item) => item === locale)) return undefined;
  return route.slugs[locale];
}

export function parseLearnPath(
  path: string,
):
  | { kind: "index"; locales: readonly Locale[] }
  | { kind: "lesson"; slug: string; route: LearnRoute; locales: readonly Locale[] }
  | null {
  const normalized = normalizePath(path);

  for (const base of Object.values(learnBasePathByLocale)) {
    if (normalized === base) {
      return { kind: "index", locales: learnIndexLocales };
    }
    if (normalized.startsWith(`${base}/`)) {
      const slug = normalized.slice(base.length + 1).split("/")[0];
      if (!slug) return { kind: "index", locales: learnIndexLocales };
      const route = findLearnRouteBySlug(slug);
      if (!route) return null;
      return { kind: "lesson", slug, route, locales: route.locales };
    }
  }

  return null;
}

export function translateLearnPath(
  path: string,
  targetLocale: Locale,
): string | null {
  const parsed = parseLearnPath(path);
  if (!parsed) return null;
  if (!parsed.locales.some((item) => item === targetLocale)) return null;

  if (parsed.kind === "index") {
    return getLearnBasePath(targetLocale);
  }

  const slug = getLearnSlugForLocale(parsed.route, targetLocale);
  if (!slug) return null;
  return getLearnLessonPath(targetLocale, slug);
}

/** Redirect wrong locale/base/slug combinations to the canonical learn URL. */
export function resolveLearnCanonicalRedirect(
  pathname: string,
): string | null {
  const segments = pathname.split("/").filter(Boolean);
  const locale = segments[0] as Locale | undefined;
  if (!locale || !learnIndexLocales.some((item) => item === locale)) {
    return null;
  }

  const root = segments[1];
  if (!root || !isLearnBaseSegment(root)) return null;

  const slug = segments[2];
  const currentPath = slug ? `/${root}/${slug}` : `/${root}`;
  const canonical = translateLearnPath(currentPath, locale);
  if (!canonical) return null;

  const canonicalFull = `/${locale}${canonical}`;
  return canonicalFull === pathname ? null : canonicalFull;
}

export function getLearnSitemapEntries(): { locale: Locale; path: string }[] {
  const pages: { locale: Locale; path: string }[] = learnIndexLocales.map(
    (locale) => ({
      locale,
      path: getLearnBasePath(locale),
    }),
  );

  for (const route of learnRoutes) {
    for (const locale of route.locales) {
      const slug = getLearnSlugForLocale(route, locale);
      if (!slug) continue;
      pages.push({
        locale,
        path: getLearnLessonPath(locale, slug),
      });
    }
  }

  return pages;
}

export function getLearnLocaleAvailability(
  path: string,
): readonly Locale[] | null {
  return parseLearnPath(path)?.locales ?? null;
}
