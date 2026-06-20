import type { Locale } from "@/i18n/config";
import type { Experience } from "@/data/experience";
import type { Project } from "@/data/projects";
import type { SkillCategory } from "@/data/skills";
import { localizedPath } from "@/lib/localizedPath";
import { getSiteContent } from "@/content/getSiteContent";

export function localizeProject(project: Project, locale: Locale): Project {
  const overlay = getSiteContent(locale).data.projects[project.id];

  return {
    ...project,
    ...overlay,
    caseStudyUrl: project.caseStudyUrl
      ? localizedPath(locale, project.caseStudyUrl)
      : undefined,
  };
}

export function localizeProjects(
  items: readonly Project[],
  locale: Locale,
): Project[] {
  return items.map((project) => localizeProject(project, locale));
}

export function localizeExperience(
  item: Experience,
  locale: Locale,
): Experience {
  const overlay = getSiteContent(locale).data.experience[item.id];

  return {
    ...item,
    ...overlay,
  };
}

export function localizeExperienceList(
  items: readonly Experience[],
  locale: Locale,
): Experience[] {
  return items.map((item) => localizeExperience(item, locale));
}

export function localizeSkillCategory(
  category: SkillCategory,
  locale: Locale,
): SkillCategory {
  const overlay = getSiteContent(locale).data.skills[category.id];

  return {
    ...category,
    name: overlay?.name ?? category.name,
  };
}

export function localizeSkillCategories(
  items: readonly SkillCategory[],
  locale: Locale,
): SkillCategory[] {
  return items.map((category) => localizeSkillCategory(category, locale));
}
