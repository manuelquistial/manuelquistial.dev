import { locales, type Locale } from "@/i18n/config";

export function resolveUnlocalizedRedirect(
  pathname: string,
  resolvedLocale: Locale,
): string | null {
  if (pathname === "/aprendamos" || pathname.startsWith("/aprendamos/")) {
    return `/es${pathname}`;
  }

  const pathnameHasLocale = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`),
  );

  if (pathnameHasLocale) return null;

  return `/${resolvedLocale}${pathname === "/" ? "" : pathname}`;
}
