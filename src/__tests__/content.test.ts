import { describe, expect, it } from "vitest";
import { caseStudies } from "@/content/case-studies";
import {
  getFeaturedProjects,
  getProjectsByCategory,
  getPublishedProjects,
  isPublishedProject,
  projects,
} from "@/data/projects";
import { experience } from "@/data/experience";
import { skillCategories } from "@/data/skills";
import { getProjectStatusLabel, hasProjectLiveLink } from "@/lib/projects";
import { siteContent } from "@/content";

describe("project data helpers", () => {
  it("returns published projects grouped by category", () => {
    const engineering = getProjectsByCategory("engineering");
    const agency = getProjectsByCategory("agency-web");
    const research = getProjectsByCategory("research");
    const publishedCount = getPublishedProjects().length;

    expect(engineering.every((project) => project.category === "engineering")).toBe(
      true,
    );
    expect(agency.every((project) => project.category === "agency-web")).toBe(
      true,
    );
    expect(publishedCount).toBe(engineering.length + agency.length + research.length);
  });

  it("hides planned engineering projects from public helpers", () => {
    const engineering = getProjectsByCategory("engineering");
    const plannedIds = [
      "enterprise-access-platform",
      "microfrontend-learning-dashboard",
      "ai-knowledge-assistant",
    ] as const;

    plannedIds.forEach((id) => {
      expect(engineering.some((project) => project.id === id)).toBe(false);
      expect(isPublishedProject(projects.find((project) => project.id === id)!)).toBe(
        false,
      );
    });
  });

  it("returns featured engineering projects with UDEA FCF first", () => {
    const featured = getFeaturedProjects("engineering", 4);

    expect(featured[0]?.id).toBe("udea-fcf-digital-ecosystem");
    expect(featured[1]?.id).toBe("babel-scores");
    expect(featured.every((project) => project.category === "engineering")).toBe(
      true,
    );
    expect(featured.length).toBe(2);
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

  it("includes period on every experience entry", () => {
    experience.forEach((item) => {
      expect(item.period).toBeTruthy();
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

  it("keeps case study registry aligned with published case study URLs", () => {
    getProjectsByCategory("engineering")
      .filter((project) => project.caseStudyUrl)
      .forEach((project) => {
        expect(caseStudies[project.id as keyof typeof caseStudies]).toBeDefined();
      });
  });
});
