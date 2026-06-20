import { notFound } from "next/navigation";
import { locales, type Locale } from "./config";

export function parseLocale(value: string): Locale {
  if (!locales.includes(value as Locale)) {
    notFound();
  }

  return value as Locale;
}

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}
