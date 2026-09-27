import { babelScoresCaseStudy } from "./babel-scores";
import {
  conciliacionCaseStudy,
  finanzasCaseStudy,
  siarCaseStudy,
  sitaCaseStudy,
} from "./udea-fcf";

export const caseStudies = {
  sita: sitaCaseStudy,
  siar: siarCaseStudy,
  finanzas: finanzasCaseStudy,
  conciliacion: conciliacionCaseStudy,
  "babel-scores": babelScoresCaseStudy,
} as const;
