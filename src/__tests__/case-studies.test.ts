import { describe, expect, it } from "vitest";
import { caseStudies } from "@/content/case-studies";
import {
  getPublishedCaseStudyProjects,
  getPublishedProjects,
} from "@/data/projects";

describe("case study registry parity", () => {
  it("maps every published case study URL to registry content", () => {
    const caseStudyProjects = getPublishedCaseStudyProjects();

    caseStudyProjects.forEach((project) => {
      expect(project.caseStudyUrl).toBe(`/projects/${project.id}`);
      expect(caseStudies[project.id as keyof typeof caseStudies]).toBeDefined();
    });
  });

  it("uses project id as case study slug", () => {
    Object.keys(caseStudies).forEach((projectId) => {
      const project = getPublishedProjects().find(
        (item) => item.id === projectId,
      );

      expect(project).toBeDefined();
      expect(project?.caseStudyUrl).toBe(`/projects/${projectId}`);
    });
  });
});
