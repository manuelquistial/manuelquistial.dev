import { describe, expect, it } from "vitest";
import { getCaseStudies } from "@/content/getCaseStudy";
import { getSiteContent } from "@/content/getSiteContent";
import { about, aboutPage } from "@/content/en/pages";
import { hero, meta } from "@/content/en/ui";
import {
  conciliacionCaseStudy,
  finanzasCaseStudy,
  siarCaseStudy,
  sitaCaseStudy,
} from "@/content/en/case-studies/udea-fcf";
import { babelScoresCaseStudy } from "@/content/en/case-studies/babel-scores";
import {
  conciliacionCaseStudy as conciliacionCaseStudyEs,
  finanzasCaseStudy as finanzasCaseStudyEs,
  siarCaseStudy as siarCaseStudyEs,
  sitaCaseStudy as sitaCaseStudyEs,
} from "@/content/es/case-studies/udea-fcf";
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
  "connected systems",
  "sistemas conectados",
  "Selected projects",
  "manageable content",
  "Full background",
  "from user interfaces to the services behind them",
  "desde la interfaz hasta los servicios que las hacen funcionar",
  "\u2014",
] as const;

const PUBLIC_CONTENT_SOURCES = [
  JSON.stringify(projects),
  JSON.stringify({ about, aboutPage }),
  JSON.stringify({ meta, hero }),
  JSON.stringify(sitaCaseStudy),
  JSON.stringify(siarCaseStudy),
  JSON.stringify(finanzasCaseStudy),
  JSON.stringify(conciliacionCaseStudy),
  JSON.stringify(babelScoresCaseStudy),
  JSON.stringify(sitaCaseStudyEs),
  JSON.stringify(siarCaseStudyEs),
  JSON.stringify(finanzasCaseStudyEs),
  JSON.stringify(conciliacionCaseStudyEs),
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

  it("returns featured engineering projects with the faculty applications first", () => {
    const featured = getFeaturedProjects("engineering", 5);

    expect(featured.map((project) => project.id)).toEqual([
      "sita",
      "siar",
      "finanzas",
      "conciliacion",
      "babel-scores",
    ]);
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
    expect("clientType" in (babel ?? {})).toBe(false);
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
      if (project.id !== "fci-pty-box") {
        expect(project.description).toBeTruthy();
      }
      expect(project.tags.length).toBeGreaterThan(0);
    });
  });

  it("includes CV-aligned experience periods", () => {
    const anthology = experience.find((item) => item.id === "anthology-blackboard");
    const udea = experience.find((item) => item.id === "udea-fcf");
    const teaching = experience.find((item) => item.id === "udea-teaching");
    const digitalAmericas = experience.find(
      (item) => item.id === "digital-americas-pipeline",
    );

    expect(anthology?.period).toBe("Nov 2021 – May 2026");
    expect(anthology).not.toHaveProperty("current");
    expect(udea?.period).toBe("Project-based work · 2024–2026");
    expect(teaching?.period).toBe("Teaching appointments · 2022–2025");
    expect(digitalAmericas?.company).toContain("Digital Americas");
    expect(experience.map((item) => item.id)).not.toContain(
      "universidad-antioquia-research" as never,
    );
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

  it("keeps real agency captures on the matching projects", () => {
    expect(
      projects.find((project) => project.id === "babel-scores")?.image,
    ).toBe("/images/projects/babel-scores.jpg");
    expect(
      projects.find((project) => project.id === "sal-picciotto-website")?.image,
    ).toBe("/images/projects/sal-picciotto.jpg");
    expect(
      projects.find((project) => project.id === "barrio-alto-panama")?.image,
    ).toBe("/images/projects/barrio-alto-panama.jpg");
    expect(projects.find((project) => project.id === "fci-pty-box")?.image).toBe(
      "/images/projects/fci-box.jpg",
    );
    expect(
      projects.find((project) => project.id === "trapatsa-eye-center")?.image,
    ).toBe("/images/projects/trapatsas-eye-center.jpg");
    expect(
      projects.find((project) => project.id === "giving-tuesday-panama")?.image,
    ).toBe("/images/projects/giving-tuesday-panama.jpg");
  });
  it("localizes Spanish project titles", () => {
    const sita = projects.find((project) => project.id === "sita");
    expect(sita).toBeDefined();
    expect(localizeProject(sita!, "es").title).toBe("SITA");
    expect(localizeProject(sita!, "es").description).toContain("trámites administrativos");
  });

  it("keeps faculty application captures on separate projects", () => {
    expect(projects.find((project) => project.id === "sita")?.image).toBe(
      "/images/projects/sita.jpg",
    );
    expect(projects.find((project) => project.id === "siar")?.image).toBe(
      "/images/projects/siar.jpg",
    );
    expect(projects.find((project) => project.id === "finanzas")?.image).toBe(
      "/images/projects/finanzas.jpg",
    );
    expect(projects.find((project) => project.id === "conciliacion")?.image).toBe(
      "/images/projects/conciliacion.jpg",
    );
  });

  it("keeps public content free of forbidden sensitive strings", () => {
    const publicContent = PUBLIC_CONTENT_SOURCES.join("\n");

    FORBIDDEN_PUBLIC_STRINGS.forEach((term) => {
      expect(publicContent.includes(term)).toBe(false);
    });
  });
});
