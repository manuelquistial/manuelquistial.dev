import type { Locale } from "./config";
import type { Dictionary } from "./types";
import { dictionary as en } from "./dictionaries/en";
import { dictionary as es } from "./dictionaries/es";

const dictionaries: Record<Locale, Dictionary> = {
  en,
  es,
};

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
