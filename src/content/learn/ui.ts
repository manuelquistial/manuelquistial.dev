import type { Locale } from "@/i18n/config";
import { learnUi as learnUiEn } from "@/content/learn/en/ui";
import { learnUi as learnUiEs } from "@/content/learn/es/ui";

export type LearnUi = { [K in keyof typeof learnUiEs]: string };

export function getLearnUi(locale: Locale): LearnUi {
  return locale === "en" ? learnUiEn : learnUiEs;
}
