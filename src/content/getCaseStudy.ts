import type { ProjectId } from "@/data/projects";
import type { Locale } from "@/i18n/config";
import type { CaseStudyContent } from "@/content/case-study-types";
import { caseStudies as enCaseStudies } from "./en/case-studies";
import { caseStudies as esCaseStudies } from "./es/case-studies";

const caseStudiesByLocale = {
  en: enCaseStudies,
  es: esCaseStudies,
} as const;

export type CaseStudyId = keyof typeof enCaseStudies;

export function getCaseStudyByProjectId(
  locale: Locale,
  projectId: ProjectId,
): CaseStudyContent | undefined {
  const registry = caseStudiesByLocale[locale];
  return registry[projectId as CaseStudyId];
}

export function getCaseStudies(locale: Locale) {
  return caseStudiesByLocale[locale];
}
