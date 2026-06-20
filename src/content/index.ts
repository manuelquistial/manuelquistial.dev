import { udeaFcfCaseStudy } from "./case-studies/udea-fcf";
import {
  a11y,
  agencyWebProjectsIntro,
  contactCta,
  experiencePreview,
  footer,
  hero,
  meta,
  nav,
  notFound,
  projectCard,
  projectCategories,
  projectStatus,
  sections,
} from "./ui";
import { about, aboutPage, contactPage, researchPage } from "./pages";

export const siteContent = {
  meta,
  nav,
  a11y,
  hero,
  sections,
  agencyWebProjectsIntro,
  about,
  aboutPage,
  researchPage,
  contactPage,
  contactCta,
  notFound,
  experiencePreview,
  projectStatus,
  projectCard,
  projectCategories,
  footer,
  udeaFcfCaseStudy,
};

export type SiteContent = typeof siteContent;
