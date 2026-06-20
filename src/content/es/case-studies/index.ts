import { babelScoresCaseStudy } from "./babel-scores";
import { udeaFcfCaseStudy } from "./udea-fcf";

export const caseStudies = {
  "udea-fcf-digital-ecosystem": udeaFcfCaseStudy,
  "babel-scores": babelScoresCaseStudy,
} as const;
