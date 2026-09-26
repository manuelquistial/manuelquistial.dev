export const pageSections = {
  about: "about",
  experience: "experience",
  selectedProjects: "projects",
  engineering: "engineering",
  research: "research",
  agencyWeb: "agency-web",
  researchOverview: "overview",
} as const;

export type PageSectionId = (typeof pageSections)[keyof typeof pageSections];
