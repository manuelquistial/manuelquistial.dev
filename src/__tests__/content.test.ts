import { describe, expect, it } from "vitest";
import { getCaseStudies } from "@/content/getCaseStudy";
import { getSiteContent } from "@/content/getSiteContent";
import { about, aboutPage } from "@/content/en/pages";
import { hero, meta } from "@/content/en/ui";
import { udeaFcfCaseStudy } from "@/content/en/case-studies/udea-fcf";
import { babelScoresCaseStudy } from "@/content/en/case-studies/babel-scores";
import { udeaFcfCaseStudy as udeaFcfCaseStudyEs } from "@/content/es/case-studies/udea-fcf";
import {
  getFeaturedProjects,
  getProjectsByCategory,
  getCaseStudyProjects,
  projects,
} from "@/data/projects";
import { experience } from "@/data/experience";
import { skillCategories } from "@/data/skills";
import { getProjectStatusLabel, hasProjectLiveLink } from "@/lib/projects";
import { localizeProject } from "@/lib/localize";

const REMOVED_PROJECT_IDS = [
  "enterprise-access-platform",
  "microfrontend-learning-dashboard",
  "ai-knowledge-assistant",
] as const;

const FORBIDDEN_PUBLIC_STRINGS = [
  "Shibboleth",
  "IP-based",
  "financial reconciliation",
  "classroom reservation",
  "classroom reservations",
  "\u2014",
] as const;

const PUBLIC_CONTENT_SOURCES = [
  JSON.stringify(projects),
  JSON.stringify({ about, aboutPage }),
  JSON.stringify({ meta, hero }),
  JSON.stringify(udeaFcfCaseStudy),
  JSON.stringify(babelScoresCaseStudy),
  JSON.stringify(udeaFcfCaseStudyEs),
  JSON.stringify(experience),
];

describe("project data helpers", () => {
  it("returns projects grouped by category", () => {
    const engineering = getProjectsByCategory("engineering");
    const agency = getProjectsByCategory("agency-web");
    const research = getProjectsByCategory("research");

    expect(engineering.every((project) => project.category === "engineering")).toBe(
      true,
    );
    expect(agency.every((project) => project.category === "agency-web")).toBe(
      true,
    );
    expect(projects.length).toBe(
      engineering.length + agency.length + research.length,
    );
  });

  it("does not include removed planned project IDs", () => {
    for (const id of REMOVED_PROJECT_IDS) {
      expect(projects.some((project) => project.id === (id as string))).toBe(
        false,
      );
    }
  });

  it("returns featured engineering projects with UDEA FCF first", () => {
    const featured = getFeaturedProjects("engineering", 4);

    expect(featured[0]?.id).toBe("udea-fcf-digital-ecosystem");
    expect(featured[1]?.id).toBe("babel-scores");
    expect(featured.length).toBe(2);
  });

  it("returns featured agency projects for the home preview", () => {
    const featured = getFeaturedProjects("agency-web", 3);

    expect(featured.length).toBeLessThanOrEqual(3);
    expect(featured.every((project) => project.category === "agency-web")).toBe(
      true,
    );
  });

  it("configures Babel Scores as a live engineering project", () => {
    const babel = projects.find((project) => project.id === "babel-scores");

    expect(babel?.status).toBe("live");
    expect(babel?.liveUrl).toBe("https://babelscores.com/");
    expect(babel?.clientType).toBe("Direct Client Project");
  });

  it("maps project status labels", () => {
    const enContent = getSiteContent("en");
    const esContent = getSiteContent("es");

    expect(
      getProjectStatusLabel("coming-soon", enContent.projectStatus),
    ).toBe("Coming soon");
    expect(getProjectStatusLabel("live", esContent.projectStatus)).toBe(
      "Publicado",
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

  it("includes CV-aligned experience periods", () => {
    const anthology = experience.find((item) => item.id === "anthology-blackboard");
    const udea = experience.find((item) => item.id === "udea-fcf");
    const research = experience.find(
      (item) => item.id === "universidad-antioquia-research",
    );
    const digitalAmericas = experience.find(
      (item) => item.id === "digital-americas-pipeline",
    );

    expect(anthology?.period).toBe("Nov 2021 – May 2026");
    expect(anthology).not.toHaveProperty("current");
    expect(udea?.period).toBe("May 2022 – Present");
    expect(research?.period).toBe("Feb 2025 – Present");
    expect(digitalAmericas?.company).toContain("Digital Americas");
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

  it("keeps case study registry aligned with case study URLs", () => {
    getCaseStudyProjects().forEach((project) => {
      expect(getCaseStudies("en")[project.id as keyof ReturnType<typeof getCaseStudies>]).toBeDefined();
      expect(getCaseStudies("es")[project.id as keyof ReturnType<typeof getCaseStudies>]).toBeDefined();
    });
  });

  it("localizes Spanish project titles", () => {
    const udea = projects.find((project) => project.id === "udea-fcf-digital-ecosystem");
    expect(udea).toBeDefined();
    expect(localizeProject(udea!, "es").title).toBe(
      "Ecosistema Digital: Facultad de Comunicaciones y Filología, Universidad de Antioquia",
    );
  });

  it("keeps public content free of forbidden sensitive strings", () => {
    const publicContent = PUBLIC_CONTENT_SOURCES.join("\n");

    FORBIDDEN_PUBLIC_STRINGS.forEach((term) => {
      expect(publicContent.includes(term)).toBe(false);
    });
  });
});
