import { describe, expect, it } from "vitest";
import { projects } from "@/data/projects";
import { experience } from "@/data/experience";
import { skillCategories } from "@/data/skills";
import {
  getFeaturedProjects,
  getProjectsByCategory,
} from "@/data/projects";
import { getProjectStatusLabel, hasProjectLiveLink } from "@/lib/projects";
import { siteContent } from "@/content";

describe("project data helpers", () => {
  it("returns projects grouped by category", () => {
    const engineering = getProjectsByCategory("engineering");
    const agency = getProjectsByCategory("agency-web");

    expect(engineering.every((project) => project.category === "engineering")).toBe(
      true,
    );
    expect(agency.every((project) => project.category === "agency-web")).toBe(
      true,
    );
    expect(projects.length).toBe(
      engineering.length + agency.length + getProjectsByCategory("research").length,
    );
  });

  it("returns featured engineering projects with UDEA FCF first", () => {
    const featured = getFeaturedProjects("engineering", 4);

    expect(featured[0]?.id).toBe("udea-fcf-digital-ecosystem");
    expect(featured[1]?.id).toBe("babel-scores");
    expect(featured.every((project) => project.category === "engineering")).toBe(
      true,
    );
  });

  it("returns featured agency projects for the home preview", () => {
    const featured = getFeaturedProjects("agency-web", 3);

    expect(featured.length).toBeLessThanOrEqual(3);
    expect(featured.every((project) => project.category === "agency-web")).toBe(
      true,
    );
  });

  it("maps project status labels", () => {
    expect(
      getProjectStatusLabel("coming-soon", siteContent.projectStatus),
    ).toBe("Coming soon");
    expect(getProjectStatusLabel("live", siteContent.projectStatus)).toBe(
      "Live",
    );
  });

  it("hides live links for coming soon projects", () => {
    expect(hasProjectLiveLink("https://example.com", "coming-soon")).toBe(false);
    expect(hasProjectLiveLink("", "live")).toBe(false);
    expect(hasProjectLiveLink("https://example.com", "live")).toBe(true);
  });
});

describe("portfolio data completeness", () => {
  it("includes required project fields", () => {
    projects.forEach((project) => {
      expect(project.title).toBeTruthy();
      expect(project.description).toBeTruthy();
      expect(project.tags.length).toBeGreaterThan(0);
    });
  });

  it("includes required experience fields", () => {
    experience.forEach((item) => {
      expect(item.role).toBeTruthy();
      expect(item.description).toBeTruthy();
    });
  });

  it("includes skill category names", () => {
    skillCategories.forEach((category) => {
      expect(category.name).toBeTruthy();
      expect(category.skills.length).toBeGreaterThan(0);
    });
  });
});
