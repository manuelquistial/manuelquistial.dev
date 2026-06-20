import type { Experience } from "@/data/experience";
import type { Project } from "@/data/projects";
import type { SkillCategory } from "@/data/skills";
import type { Dictionary } from "@/i18n/types";

export type ProjectWithCopy = Project & {
  name: string;
  description: string;
};

export type ExperienceWithCopy = Experience & {
  role: string;
  description: string;
};

export type SkillCategoryWithCopy = SkillCategory & {
  name: string;
};

function assertContentEntry<T>(
  id: string,
  entry: T | undefined,
  kind: string,
): asserts entry is T {
  if (entry === undefined) {
    throw new Error(
      `Missing ${kind} content for id "${id}". Add an entry in both i18n dictionaries.`,
    );
  }
}

export function resolveProjects(
  items: readonly Project[],
  content: Dictionary["content"]["projects"],
): ProjectWithCopy[] {
  return items.map((item) => {
    const copy = content[item.id];
    assertContentEntry(item.id, copy, "project");
    return { ...item, ...copy };
  });
}

export function resolveExperience(
  items: readonly Experience[],
  content: Dictionary["content"]["experience"],
): ExperienceWithCopy[] {
  return items.map((item) => {
    const copy = content[item.id];
    assertContentEntry(item.id, copy, "experience");
    return { ...item, ...copy };
  });
}

export function resolveSkillCategories(
  items: readonly SkillCategory[],
  content: Dictionary["content"]["skills"],
): SkillCategoryWithCopy[] {
  return items.map((item) => {
    const copy = content[item.id];
    assertContentEntry(item.id, copy, "skill category");
    return { ...item, ...copy };
  });
}
