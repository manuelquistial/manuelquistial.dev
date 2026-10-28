export const pageSections = {
  about: "about",
  experience: "experience",
  selectedProjects: "projects",
  engineering: "engineering",
  research: "research",
  learn: "aprendamos",
  agencyWeb: "agency-web",
  researchOverview: "overview",
  contact: "contact",
} as const;

export type PageSectionId = (typeof pageSections)[keyof typeof pageSections];
