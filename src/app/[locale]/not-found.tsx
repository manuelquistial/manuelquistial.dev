"use client";

import { usePathname } from "next/navigation";
import { locales, defaultLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/getDictionary";
import { NotFoundView } from "@/components/layout/NotFoundView";

function getLocaleFromPath(pathname: string): Locale {
  const segment = pathname.split("/")[1];
  return locales.includes(segment as Locale)
    ? (segment as Locale)
    : defaultLocale;
}

export default function LocaleNotFound() {
  const locale = getLocaleFromPath(usePathname());
  const { notFound } = getDictionary(locale);

  return <NotFoundView locale={locale} notFound={notFound} />;
}
