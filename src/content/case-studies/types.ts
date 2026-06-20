export type CaseStudySection = {
  title: string;
  paragraphs?: readonly string[];
  items?: readonly string[];
};

export type CaseStudyContent = {
  title: string;
  subtitle: string;
  backLabel: string;
  architectureDiagram?: {
    src: string;
    alt: string;
  };
  overview: CaseStudySection;
  legacy?: CaseStudySection;
  modern?: CaseStudySection;
  authentication?: CaseStudySection;
  reporting?: CaseStudySection;
  modernization?: CaseStudySection;
  platform?: CaseStudySection;
  commerce?: CaseStudySection;
  frontend?: CaseStudySection;
  access?: CaseStudySection;
  responsibilities: CaseStudySection;
  learnings: CaseStudySection;
};

export type CaseStudySections = Array<{
  key: string;
  section: CaseStudySection;
}>;

export function getCaseStudySections(
  caseStudy: CaseStudyContent,
): CaseStudySections {
  const optionalSections: Array<[string, CaseStudySection | undefined]> = [
    ["overview", caseStudy.overview],
    ["legacy", caseStudy.legacy],
    ["modern", caseStudy.modern],
    ["authentication", caseStudy.authentication],
    ["reporting", caseStudy.reporting],
    ["modernization", caseStudy.modernization],
    ["platform", caseStudy.platform],
    ["commerce", caseStudy.commerce],
    ["frontend", caseStudy.frontend],
    ["access", caseStudy.access],
    ["responsibilities", caseStudy.responsibilities],
    ["learnings", caseStudy.learnings],
  ];

  return optionalSections
    .filter((entry): entry is [string, CaseStudySection] => Boolean(entry[1]))
    .map(([key, section]) => ({ key, section }));
}
