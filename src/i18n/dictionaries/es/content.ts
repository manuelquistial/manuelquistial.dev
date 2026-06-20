import type { ExperienceId } from "@/data/experience";
import type { ProjectId } from "@/data/projects";
import type { SkillCategoryId } from "@/data/skills";

export const content = {
  projects: {
    "enterprise-access-platform": {
      name: "Plataforma de Acceso Empresarial",
      description:
        "Aplicación empresarial full-stack con React, TypeScript, Spring Boot, PostgreSQL y Keycloak.",
    },
    "microfrontend-learning-dashboard": {
      name: "Dashboard de Aprendizaje con Microfrontends",
      description:
        "Arquitectura frontend modular con React, TypeScript, Vite, Module Federation y paquetes UI compartidos.",
    },
    "ai-knowledge-assistant": {
      name: "Asistente de Conocimiento con IA",
      description:
        "Asistente de IA basado en documentos con FastAPI, RAG, PostgreSQL, pgvector y LLMs.",
    },
    "eeg-motor-imagery-pipeline": {
      name: "Pipeline de Imaginación Motora EEG",
      description:
        "Pipeline de machine learning para clasificación de imaginación motora basada en EEG usando FBCSP, LDA, SVM y evaluación subject-disjoint.",
    },
  } satisfies Record<ProjectId, { name: string; description: string }>,
  experience: {
    "anthology-blackboard": {
      role: "Ingeniero de Software / Full-Stack Engineer",
      description:
        "Desarrollo de software empresarial con React, TypeScript, Java, Spring Boot, PostgreSQL, Angular, CI/CD y pruebas automatizadas.",
    },
    "universidad-antioquia-research": {
      role: "Investigador en Neuroingeniería / Estudiante de Maestría",
      description:
        "Clasificación de imaginación motora basada en EEG, investigación BCI, pipelines de machine learning y procesamiento de señales.",
    },
    freelance: {
      role: "Desarrollador Full-Stack",
      description:
        "Aplicaciones web, WordPress, integraciones personalizadas, servicios backend y desarrollo frontend.",
    },
  } satisfies Record<ExperienceId, { role: string; description: string }>,
  skills: {
    frontend: { name: "Frontend" },
    backend: { name: "Backend" },
    databases: { name: "Bases de datos" },
    "cloud-devops": { name: "Cloud y DevOps" },
    "ai-ml": { name: "IA / ML" },
    research: { name: "Investigación" },
    testing: { name: "Testing" },
  } satisfies Record<SkillCategoryId, { name: string }>,
};
