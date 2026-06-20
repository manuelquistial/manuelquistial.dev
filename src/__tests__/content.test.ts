import { describe, expect, it } from "vitest";
import { projects } from "@/data/projects";
import { experience } from "@/data/experience";
import { skillCategories } from "@/data/skills";
import { dictionary as en } from "@/i18n/dictionaries/en";
import { dictionary as es } from "@/i18n/dictionaries/es";
import {
  resolveExperience,
  resolveProjects,
  resolveSkillCategories,
} from "@/lib/content";

describe("resolve content helpers", () => {
  it("resolves projects with name and description", () => {
    const resolved = resolveProjects(projects, en.content.projects);

    expect(resolved).toHaveLength(projects.length);
    resolved.forEach((project) => {
      expect(project.name).toBeTruthy();
      expect(project.description).toBeTruthy();
    });
  });

  it("resolves experience with role and description", () => {
    const resolved = resolveExperience(experience, en.content.experience);

    expect(resolved).toHaveLength(experience.length);
    resolved.forEach((item) => {
      expect(item.role).toBeTruthy();
      expect(item.description).toBeTruthy();
    });
  });

  it("resolves skill categories with names", () => {
    const resolved = resolveSkillCategories(
      skillCategories,
      en.content.skills,
    );

    expect(resolved).toHaveLength(skillCategories.length);
    resolved.forEach((category) => {
      expect(category.name).toBeTruthy();
    });
  });

  it("throws when content entry is missing", () => {
    const brokenContent = { ...en.content.projects };
    delete (brokenContent as Record<string, unknown>)["enterprise-access-platform"];

    expect(() => resolveProjects(projects, brokenContent)).toThrow(
      /Missing project content/,
    );
  });
});

describe("i18n dictionary parity", () => {
  function collectKeys(value: unknown, prefix = ""): string[] {
    if (value === null || typeof value !== "object") {
      return prefix ? [prefix] : [];
    }

    if (Array.isArray(value)) {
      return value.flatMap((item, index) =>
        collectKeys(item, `${prefix}[${index}]`),
      );
    }

    return Object.keys(value).flatMap((key) => {
      const nextPrefix = prefix ? `${prefix}.${key}` : key;
      return collectKeys(
        (value as Record<string, unknown>)[key],
        nextPrefix,
      );
    });
  }

  it("en and es share the same dictionary structure", () => {
    const enKeys = collectKeys(en).sort();
    const esKeys = collectKeys(es).sort();

    expect(esKeys).toEqual(enKeys);
  });
});
