import {
  learnBasePathByLocale,
  translateLearnPath,
} from "@/content/learn/routes";
import { locales, type Locale } from "@/i18n/config";

export function resolveUnlocalizedRedirect(
  pathname: string,
  resolvedLocale: Locale,
): string | null {
  const pathnameHasLocale = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`),
  );

  if (pathnameHasLocale) return null;

  const learnBases = Object.values(learnBasePathByLocale);
  const matchedBase = learnBases.find(
    (base) => pathname === base || pathname.startsWith(`${base}/`),
  );

  if (matchedBase) {
    // Brand paths without a locale stay on their language: /aprendamos → es, /learn → en.
    const forcedLocale =
      matchedBase === learnBasePathByLocale.es
        ? "es"
        : matchedBase === learnBasePathByLocale.en
          ? "en"
          : resolvedLocale;
    const canonical =
      translateLearnPath(pathname, forcedLocale) ?? pathname;
    return `/${forcedLocale}${canonical}`;
  }

  return `/${resolvedLocale}${pathname === "/" ? "" : pathname}`;
}
