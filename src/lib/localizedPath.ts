import { defaultLocale, locales, type Locale } from "@/i18n/config";

export function localizedPath(locale: Locale, path = ""): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  if (normalized === "/") return `/${locale}`;
  return `/${locale}${normalized}`;
}

export function localizedSectionPath(
  locale: Locale,
  path: string,
  sectionId: string,
): string {
  return `${localizedPath(locale, path)}#${sectionId}`;
}

export function stripLocale(pathname: string): string {
  const segments = pathname.split("/").filter(Boolean);
  if (segments.length > 0 && locales.includes(segments[0] as Locale)) {
    const rest = segments.slice(1).join("/");
    return rest ? `/${rest}` : "";
  }
  return pathname === "/" ? "" : pathname;
}

export function switchLocalePath(pathname: string, targetLocale: Locale): string {
  const pathWithoutLocale = stripLocale(pathname);
  return localizedPath(targetLocale, pathWithoutLocale);
}

export function getLocaleFromPathname(pathname: string): Locale {
  const segment = pathname.split("/").filter(Boolean)[0];
  return locales.includes(segment as Locale)
    ? (segment as Locale)
    : defaultLocale;
}
