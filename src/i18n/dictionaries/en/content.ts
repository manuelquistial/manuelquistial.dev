import type { ExperienceId } from "@/data/experience";
import type { ProjectId } from "@/data/projects";
import type { SkillCategoryId } from "@/data/skills";

export const content = {
  projects: {
    "enterprise-access-platform": {
      name: "Enterprise Access Platform",
      description:
        "Full-stack enterprise application with React, TypeScript, Spring Boot, PostgreSQL and Keycloak.",
    },
    "microfrontend-learning-dashboard": {
      name: "Microfrontend Learning Dashboard",
      description:
        "Modular frontend architecture using React, TypeScript, Vite, Module Federation and shared UI packages.",
    },
    "ai-knowledge-assistant": {
      name: "AI Knowledge Assistant",
      description:
        "Document-based AI assistant using FastAPI, RAG, PostgreSQL, pgvector and LLMs.",
    },
    "eeg-motor-imagery-pipeline": {
      name: "EEG Motor Imagery Pipeline",
      description:
        "Machine learning pipeline for EEG-based motor imagery classification using FBCSP, LDA, SVM and subject-disjoint evaluation.",
    },
  } satisfies Record<ProjectId, { name: string; description: string }>,
  experience: {
    "anthology-blackboard": {
      role: "Software Engineer / Full-Stack Engineer",
      description:
        "Enterprise software development using React, TypeScript, Java, Spring Boot, PostgreSQL, Angular, CI/CD and automated testing.",
    },
    "universidad-antioquia-research": {
      role: "Neuroengineering Researcher / Master's Student",
      description:
        "EEG-based motor imagery classification, BCI research, machine learning pipelines and signal processing.",
    },
    freelance: {
      role: "Full-Stack Developer",
      description:
        "Web applications, WordPress, custom integrations, backend services and frontend development.",
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
