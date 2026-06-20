import type { Locale } from "@/i18n/config";
import type { ProjectCategory } from "@/data/projects";
import type { LocaleData } from "./locale-data-types";
import type {
  AboutPreviewContent,
  AboutPageContent,
  ContactPageContent,
  ResearchPageContent,
} from "./pages-types";
import { data as enData } from "./en/data";
import * as enPages from "./en/pages";
import * as enUi from "./en/ui";
import { data as esData } from "./es/data";
import * as esPages from "./es/pages";
import * as esUi from "./es/ui";

export type SiteContent = {
  locale: Locale;
  meta: typeof enUi.meta;
  nav: typeof enUi.nav;
  a11y: typeof enUi.a11y;
  hero: typeof enUi.hero;
  sections: typeof enUi.sections;
  agencyWebProjectsIntro: string;
  footer: typeof enUi.footer;
  experiencePreview: typeof enUi.experiencePreview;
  projectStatus: typeof enUi.projectStatus;
  projectCard: typeof enUi.projectCard;
  contactCta: typeof enUi.contactCta;
  notFound: typeof enUi.notFound;
  projectCategories: Record<ProjectCategory, string>;
  homeSkillCategoryIds: typeof enUi.homeSkillCategoryIds;
  languageSwitcher: typeof enUi.languageSwitcher;
  about: AboutPreviewContent;
  aboutPage: AboutPageContent;
  researchPage: ResearchPageContent;
  contactPage: ContactPageContent;
  data: LocaleData;
};

export function getSiteContent(locale: Locale): SiteContent {
  if (locale === "es") {
    return {
      locale,
      meta: esUi.meta,
      nav: esUi.nav,
      a11y: esUi.a11y,
      hero: esUi.hero,
      sections: esUi.sections,
      agencyWebProjectsIntro: esUi.agencyWebProjectsIntro,
      footer: esUi.footer,
      experiencePreview: esUi.experiencePreview,
      projectStatus: esUi.projectStatus,
      projectCard: esUi.projectCard,
      contactCta: esUi.contactCta,
      notFound: esUi.notFound,
      projectCategories: esUi.projectCategories,
      homeSkillCategoryIds: esUi.homeSkillCategoryIds,
      languageSwitcher: esUi.languageSwitcher,
      about: esPages.about,
      aboutPage: esPages.aboutPage,
      researchPage: esPages.researchPage,
      contactPage: esPages.contactPage,
      data: esData,
    };
  }

  return {
    locale,
    meta: enUi.meta,
    nav: enUi.nav,
    a11y: enUi.a11y,
    hero: enUi.hero,
    sections: enUi.sections,
    agencyWebProjectsIntro: enUi.agencyWebProjectsIntro,
    footer: enUi.footer,
    experiencePreview: enUi.experiencePreview,
    projectStatus: enUi.projectStatus,
    projectCard: enUi.projectCard,
    contactCta: enUi.contactCta,
    notFound: enUi.notFound,
    projectCategories: enUi.projectCategories,
    homeSkillCategoryIds: enUi.homeSkillCategoryIds,
    languageSwitcher: enUi.languageSwitcher,
    about: enPages.about,
    aboutPage: enPages.aboutPage,
    researchPage: enPages.researchPage,
    contactPage: enPages.contactPage,
    data: enData,
  };
}
