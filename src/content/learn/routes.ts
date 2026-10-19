import type { Locale } from "@/i18n/config";

export const learnIndexLocales = ["es"] as const satisfies readonly Locale[];

export const learnRoutes = [
  {
    slug: "como-se-comunican-las-neuronas",
    locales: ["es"],
  },
] as const satisfies readonly { slug: string; locales: readonly Locale[] }[];

export function getLearnSitemapEntries(): { locale: Locale; path: string }[] {
  const pages: { locale: Locale; path: string }[] = learnIndexLocales.map(
    (locale) => ({
      locale,
      path: "/aprendamos",
    }),
  );

  for (const route of learnRoutes) {
    for (const locale of route.locales) {
      pages.push({
        locale,
        path: `/aprendamos/${route.slug}`,
      });
    }
  }

  return pages;
}

export function getLearnLocaleAvailability(
  path: string,
): readonly Locale[] | null {
  const trimmed =
    path.length > 1 && path.endsWith("/") ? path.slice(0, -1) : path;
  const normalized = trimmed.startsWith("/") ? trimmed : `/${trimmed}`;

  if (normalized === "/aprendamos") return learnIndexLocales;
  if (!normalized.startsWith("/aprendamos/")) return null;

  const slug = normalized.slice("/aprendamos/".length).split("/")[0];
  if (!slug) return learnIndexLocales;

  const route = learnRoutes.find((item) => item.slug === slug);
  return route ? route.locales : [];
}
