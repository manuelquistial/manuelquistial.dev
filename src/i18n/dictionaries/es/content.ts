import type { ExperienceId } from "@/data/experience";
import type { ProjectId } from "@/data/projects";
import type { SkillCategoryId } from "@/data/skills";

export const content = {
  projects: {
    "enterprise-access-platform": {
      name: "Plataforma de Acceso Empresarial",
      description:
        "Gestión de acceso basada en roles para usuarios institucionales — SPA React/TypeScript, APIs REST Spring Boot, PostgreSQL y SSO con Keycloak. Diseñada para despliegues edtech multi-tenant.",
    },
    "microfrontend-learning-dashboard": {
      name: "Dashboard de Aprendizaje con Microfrontends",
      description:
        "UI modular de analítica de aprendizaje con Vite, Module Federation y paquetes compartidos de design system. Permite despliegues independientes por equipo sin romper el shell host.",
    },
    "ai-knowledge-assistant": {
      name: "Asistente de Conocimiento con IA",
      description:
        "Q&A basado en documentos con FastAPI, RAG sobre PDFs institucionales, embeddings PostgreSQL + pgvector y Azure OpenAI. Construido para recuperación de conocimiento interno a escala.",
    },
    "eeg-motor-imagery-pipeline": {
      name: "Pipeline de Imaginación Motora EEG",
      description:
        "Pipeline de investigación BCI de extremo a extremo: preprocesamiento MNE, características FBCSP, clasificadores LDA/SVM y evaluación leave-one-subject-out en datasets de imaginación motora.",
    },
  } satisfies Record<ProjectId, { name: string; description: string }>,
  experience: {
    "anthology-blackboard": {
      role: "Ingeniero de Software",
      description:
        "Edtech empresarial a escala — frontends React/TypeScript, servicios Java/Spring Boot, PostgreSQL, módulos legacy Angular, CI con Jenkins/GitHub Actions y suites de pruebas Jest/JUnit.",
    },
    "universidad-antioquia-research": {
      role: "Investigador en Neuroingeniería · Estudiante de Maestría",
      description:
        "Clasificación de imaginación motora EEG con FBCSP, LDA y SVM. Validación cruzada subject-disjoint, preprocesamiento de señales con MNE y pipelines de investigación reproducibles en Python.",
    },
    freelance: {
      role: "Desarrollador Full-Stack",
      description:
        "Aplicaciones web personalizadas, sitios WordPress, backends Laravel/PHP y frontends React para pequeñas empresas y startups en Colombia.",
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
