import type { ProjectId } from "@/data/projects";
import type { CaseStudyContent } from "./types";
import { babelScoresCaseStudy } from "./babel-scores";
import { udeaFcfCaseStudy } from "./udea-fcf";

export type { CaseStudyContent, CaseStudySection } from "./types";
export { getCaseStudySections } from "./types";
export { udeaFcfCaseStudy, babelScoresCaseStudy };

export const caseStudies = {
  "udea-fcf-digital-ecosystem": udeaFcfCaseStudy,
  "babel-scores": babelScoresCaseStudy,
} as const;

export type CaseStudyId = keyof typeof caseStudies;

export function getCaseStudyByProjectId(
  projectId: ProjectId,
): CaseStudyContent | undefined {
  return caseStudies[projectId as CaseStudyId];
}

export function getCaseStudyProjectIds(): CaseStudyId[] {
  return Object.keys(caseStudies) as CaseStudyId[];
}
