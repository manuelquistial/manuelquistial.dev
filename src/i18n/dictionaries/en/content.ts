import type { ExperienceId } from "@/data/experience";
import type { ProjectId } from "@/data/projects";
import type { SkillCategoryId } from "@/data/skills";

export const content = {
  projects: {
    "enterprise-access-platform": {
      name: "Enterprise Access Platform",
      description:
        "Role-based access management for institutional users — React/TypeScript SPA, Spring Boot REST APIs, PostgreSQL, and Keycloak SSO. Designed for multi-tenant edtech deployments.",
    },
    "microfrontend-learning-dashboard": {
      name: "Microfrontend Learning Dashboard",
      description:
        "Modular learning analytics UI with Vite, Module Federation, and shared design-system packages. Enables independent team deployments without breaking the host shell.",
    },
    "ai-knowledge-assistant": {
      name: "AI Knowledge Assistant",
      description:
        "Document-grounded Q&A with FastAPI, RAG over institutional PDFs, PostgreSQL + pgvector embeddings, and Azure OpenAI. Built for internal knowledge retrieval at scale.",
    },
    "eeg-motor-imagery-pipeline": {
      name: "EEG Motor Imagery Pipeline",
      description:
        "End-to-end BCI research pipeline: MNE preprocessing, FBCSP features, LDA/SVM classifiers, and leave-one-subject-out evaluation on motor imagery datasets.",
    },
  } satisfies Record<ProjectId, { name: string; description: string }>,
  experience: {
    "anthology-blackboard": {
      role: "Software Engineer",
      description:
        "Enterprise edtech at scale — React/TypeScript frontends, Java/Spring Boot services, PostgreSQL, Angular legacy modules, Jenkins/GitHub Actions CI, and Jest/JUnit test suites.",
    },
    "universidad-antioquia-research": {
      role: "Neuroengineering Researcher · Master's Student",
      description:
        "EEG motor imagery classification with FBCSP, LDA, and SVM. Subject-disjoint cross-validation, signal preprocessing with MNE, and reproducible Python research pipelines.",
    },
    freelance: {
      role: "Full-Stack Developer",
      description:
        "Custom web apps, WordPress sites, Laravel/PHP backends, and React frontends for small businesses and startups across Colombia.",
    },
  } satisfies Record<ExperienceId, { role: string; description: string }>,
  skills: {
    frontend: { name: "Frontend" },
    backend: { name: "Backend" },
    databases: { name: "Databases" },
    "cloud-devops": { name: "Cloud & DevOps" },
    "ai-ml": { name: "AI / ML" },
    research: { name: "Research" },
    testing: { name: "Testing" },
  } satisfies Record<SkillCategoryId, { name: string }>,
};
