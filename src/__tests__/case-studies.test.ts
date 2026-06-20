import { describe, expect, it } from "vitest";
import { getCaseStudies } from "@/content/getCaseStudy";
import { getCaseStudyProjects, projects } from "@/data/projects";

describe("case study registry parity", () => {
  it("maps every case study URL to registry content in both locales", () => {
    const caseStudyProjects = getCaseStudyProjects();

    caseStudyProjects.forEach((project) => {
      expect(project.caseStudyUrl).toBe(`/projects/${project.id}`);
      expect(getCaseStudies("en")[project.id as keyof ReturnType<typeof getCaseStudies>]).toBeDefined();
      expect(getCaseStudies("es")[project.id as keyof ReturnType<typeof getCaseStudies>]).toBeDefined();
    });
  });

  it("uses project id as case study slug", () => {
    Object.keys(getCaseStudies("en")).forEach((projectId) => {
      const project = projects.find((item) => item.id === projectId);

      expect(project).toBeDefined();
      expect(
        "caseStudyUrl" in project! ? project.caseStudyUrl : undefined,
      ).toBe(`/projects/${projectId}`);
    });
  });
});
