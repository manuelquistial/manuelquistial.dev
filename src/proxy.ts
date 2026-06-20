import { NextResponse, type NextRequest } from "next/server";
import { defaultLocale, locales, type Locale } from "./i18n/config";

const PUBLIC_FILE = /\.(.*)$/;
const LOCALE_COOKIE = "NEXT_LOCALE";

function parseAcceptLanguage(header: string | null): Locale | null {
  if (!header) return null;

  const preferences = header
    .split(",")
    .map((part) => {
      const [lang, qValue] = part.trim().split(";q=");
      return {
        lang: lang.toLowerCase().split("-")[0],
        q: qValue ? Number.parseFloat(qValue) : 1,
      };
    })
    .sort((a, b) => b.q - a.q);

  for (const { lang } of preferences) {
    if (locales.includes(lang as Locale)) {
      return lang as Locale;
    }
  }

  return null;
}

function resolveLocale(request: NextRequest): Locale {
  const cookieLocale = request.cookies.get(LOCALE_COOKIE)?.value;
  if (cookieLocale && locales.includes(cookieLocale as Locale)) {
    return cookieLocale as Locale;
  }

  return parseAcceptLanguage(request.headers.get("accept-language")) ?? defaultLocale;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    PUBLIC_FILE.test(pathname)
  ) {
    return;
  }

  const pathnameHasLocale = locales.some(
    (locale) =>
      pathname === `/${locale}` || pathname.startsWith(`/${locale}/`),
  );

  if (pathnameHasLocale) {
    const locale = pathname.split("/")[1] as Locale;
    const response = NextResponse.next();
    response.cookies.set(LOCALE_COOKIE, locale, { path: "/" });
    response.headers.set("x-next-locale", locale);
    return response;
  }

  const locale = resolveLocale(request);
  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;
  const response = NextResponse.redirect(url);
  response.cookies.set(LOCALE_COOKIE, locale, { path: "/" });
  return response;
}

export const config = {
  matcher: ["/((?!_next|api|favicon.ico|.*\\..*).*)"],
};
