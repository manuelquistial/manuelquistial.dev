import { defaultLocale, locales, type Locale } from "./config";

export function parseLocale(value: string): Locale {
  return locales.includes(value as Locale) ? (value as Locale) : defaultLocale;
}
