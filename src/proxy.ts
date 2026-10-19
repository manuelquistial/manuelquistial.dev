import { NextResponse, type NextRequest } from "next/server";
import { defaultLocale, locales, type Locale } from "./i18n/config";
import { resolveUnlocalizedRedirect } from "./lib/unlocalizedRedirect";

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

  const learnAlias =
    pathname === "/aprendamos" || pathname.startsWith("/aprendamos/");
  const locale = learnAlias ? "es" : resolveLocale(request);
  const target = resolveUnlocalizedRedirect(pathname, locale);

  if (!target) {
    const pathLocale = pathname.split("/")[1] as Locale;
    const response = NextResponse.next();
    response.cookies.set(LOCALE_COOKIE, pathLocale, { path: "/" });
    response.headers.set("x-next-locale", pathLocale);
    return response;
  }

  const url = request.nextUrl.clone();
  url.pathname = target;
  const response = NextResponse.redirect(url);
  const destinationLocale = target.split("/")[1] as Locale;
  response.cookies.set(LOCALE_COOKIE, destinationLocale, { path: "/" });
  return response;
}

export const config = {
  matcher: ["/((?!_next|api|favicon.ico|.*\\..*).*)"],
};
