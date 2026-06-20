import type { CaseStudyContent } from "@/content/case-study-types";

export const udeaFcfCaseStudy: CaseStudyContent = {
  title: "Ecosistema Digital UdeA FCF",
  subtitle:
    "Modernización de software institucional para la Facultad de Comunicaciones y Filología de la Universidad de Antioquia.",
  backLabel: "Volver a proyectos",
  overview: {
    title: "Contexto institucional",
    paragraphs: [
      "La Facultad de Comunicaciones y Filología de la Universidad de Antioquia opera múltiples procesos administrativos y académicos que evolucionaron durante años de desarrollo incremental. En lugar de una sola aplicación, la facultad depende de un ecosistema interconectado de servicios que soportan flujos administrativos y académicos, reportes institucionales y gestión de identidad.",
      "El desafío de ingeniería no es construir un producto greenfield: es coordinar la modernización legacy, autenticación compartida, flujos de datos consistentes e interfaces nuevas mientras los procesos críticos siguen disponibles para personal y estudiantes.",
    ],
  },
  legacy: {
    title: "Sistemas legacy",
    paragraphs: [
      "Varios sistemas en producción se construyeron sobre codebases antiguos de Laravel y Symfony con reglas de negocio de larga data, esquemas de base de datos personalizados y flujos de UI fuertemente acoplados. Estas aplicaciones siguen siendo esenciales para las operaciones diarias de la facultad y no pueden reemplazarse de la noche a la mañana.",
      "El trabajo en la capa legacy se enfoca en estabilizar el comportamiento, mejorar la mantenibilidad, documentar rutas críticas y preparar módulos para una extracción gradual hacia APIs o frontends modernos, sin interrumpir a los usuarios institucionales.",
    ],
    items: [
      "Aplicaciones Laravel con flujos administrativos establecidos",
      "Servicios Symfony que soportan procesos de larga duración de la facultad",
      "Esquemas respaldados por MySQL con dependencias de datos históricos",
      "Prácticas manuales de despliegue y validación en proceso de estandarización",
    ],
  },
  modern: {
    title: "Sistemas modernos",
    paragraphs: [
      "Los componentes más recientes introducen una separación más clara entre frontend y backend, interfaces tipadas y entornos de desarrollo containerizados. Las aplicaciones React y Next.js consumen APIs Laravel, mientras servicios Python manejan cargas de trabajo especializadas de reportes.",
      "La capa moderna está diseñada para crecer junto a los sistemas legacy, compartiendo autenticación, reutilizando modelos de datos validados cuando es posible y exponiendo capacidades a través de APIs documentadas en lugar de pantallas monolíticas.",
    ],
    items: [
      "Frontends React y Next.js para interfaces administrativas",
      "APIs Laravel modernas con validación estructurada y documentación",
      "Servicios FastAPI y Flask para reportes y procesamiento de datos",
      "Flujos PostgreSQL y MySQL con disciplina explícita de migraciones",
      "Entornos basados en Docker para desarrollo y pruebas reproducibles",
    ],
  },
  authentication: {
    title: "Autenticación centralizada con Keycloak",
    paragraphs: [
      "La gestión de identidad se centraliza a través de Keycloak con OIDC, permitiendo que múltiples aplicaciones compartan una experiencia de inicio de sesión único sin duplicar almacenes de usuarios ni lógica de sesión en cada codebase.",
      "El trabajo de integración abarca aplicaciones PHP legacy, frontends JavaScript modernos y flujos servicio a servicio, con atención cuidadosa a ciclos de vida de tokens, mapeo de roles y patrones de acceso federado apropiados para un entorno institucional.",
    ],
    items: [
      "Configuración de realm Keycloak e integración de clientes OIDC",
      "Acceso basado en roles en aplicaciones Laravel, Symfony y React",
      "Patrones compartidos de sesión y validación de tokens",
      "Documentación para incorporar nuevos servicios a la capa de identidad",
    ],
  },
  reporting: {
    title: "Servicios de reportes",
    paragraphs: [
      "Las operaciones de la facultad generan datos estructurados y semi-estructurados que deben exportarse, revisarse y entregarse a equipos administrativos. Los servicios de reportes en Python manejan generación de Excel, agregación de datos y procesamiento asíncrono sin bloquear aplicaciones interactivas.",
      "Los pipelines de reportes enfatizan transformaciones trazables, scripts de validación y salidas repetibles, tratando los reportes como artefactos de producción, no como scripts ad hoc.",
    ],
    items: [
      "Endpoints FastAPI y Flask para generación de reportes",
      "Flujos con Pandas y openpyxl para salidas Excel",
      "Async SQLAlchemy para acceso a base de datos no bloqueante",
      "Scripts de validación para verificar integridad de reportes antes de la entrega",
    ],
  },
  modernization: {
    title: "Modernización progresiva",
    paragraphs: [
      "El ecosistema se moderniza de forma incremental: identificar módulos acotados, exponerlos a través de APIs, reemplazar superficies de UI una a la vez y validar cada paso antes de mover dependencias. Esto reduce el riesgo frente a un reescritura completa y aun así avanza hacia una arquitectura mantenible.",
      "La documentación, scripts de validación y entornos Docker apoyan equipos que trabajan en PHP, Python y TypeScript, haciendo del onboarding y las verificaciones de regresión parte del flujo de trabajo estándar.",
    ],
    items: [
      "Enfoque strangler-fig para reemplazo de legacy",
      "Extracción API-first de lógica de negocio compartida",
      "Documentación y herramientas de validación cross-stack",
      "Migración frontend incremental con React y Next.js",
    ],
  },
  responsibilities: {
    title: "Responsabilidades",
    items: [
      "Diseñar e implementar funcionalidades en aplicaciones Laravel, Symfony, React y Next.js",
      "Construir y mantener servicios de reportes en Python con FastAPI y Flask",
      "Integrar autenticación Keycloak/OIDC en servicios legacy y modernos",
      "Definir flujos de base de datos y scripts de validación para procesos administrativos",
      "Documentar decisiones de arquitectura, procedimientos de setup y flujos de validación",
      "Apoyar entornos de desarrollo basados en Docker para pruebas multi-servicio",
    ],
  },
  learnings: {
    title: "Aprendizajes técnicos",
    items: [
      "Los sistemas institucionales requieren estrategias de modernización que respeten la continuidad en producción",
      "La identidad centralizada con Keycloak reduce duplicación de auth pero exige un diseño cuidadoso de roles",
      "Los servicios de reportes se benefician de pipelines async y validación explícita antes de la entrega",
      "Los ecosistemas multi-lenguaje necesitan documentación sólida y entornos reproducibles",
      "La extracción progresiva supera a las reescrituras big-bang en software administrativo de larga vida",
    ],
  },
};
