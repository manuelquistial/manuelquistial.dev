import type { CaseStudyContent } from "@/content/case-study-types";

export const udeaFcfCaseStudy: CaseStudyContent = {
  title: "UDEA FCF Digital Ecosystem",
  subtitle:
    "Institutional software modernization for the Facultad de Comunicaciones y Filología at Universidad de Antioquia.",
  backLabel: "Back to projects",
  overview: {
    title: "Institutional Context",
    paragraphs: [
      "The Facultad de Comunicaciones y Filología at Universidad de Antioquia operates multiple administrative and academic processes that evolved over years of incremental development. Rather than a single application, the faculty relies on an interconnected ecosystem of services supporting administrative and academic workflows, institutional reporting and identity management.",
      "The engineering challenge is not building one greenfield product: it is coordinating legacy modernization, shared authentication, consistent data workflows and new interfaces while keeping critical processes available to staff and students.",
    ],
  },
  legacy: {
    title: "Legacy Systems",
    paragraphs: [
      "Several production systems were built on older Laravel and Symfony codebases with long-lived business rules, custom database schemas and tightly coupled UI flows. These applications remain essential for day-to-day faculty operations and cannot be replaced overnight.",
      "Work on the legacy layer focuses on stabilizing behavior, improving maintainability, documenting critical paths and preparing modules for gradual extraction into APIs or modern frontends, without disrupting institutional users.",
    ],
    items: [
      "Laravel applications with established administrative workflows",
      "Symfony services supporting long-running faculty processes",
      "MySQL-backed schemas with historical data dependencies",
      "Manual deployment and validation practices being standardized",
    ],
  },
  modern: {
    title: "Modern Systems",
    paragraphs: [
      "Newer components introduce clearer separation between frontend and backend, typed interfaces and containerized development environments. React and Next.js applications consume Laravel APIs, while Python services handle specialized reporting workloads.",
      "The modern layer is designed to grow alongside legacy systems, sharing authentication, reusing validated data models where possible and exposing capabilities through documented APIs rather than monolithic screens.",
    ],
    items: [
      "React and Next.js frontends for administrative interfaces",
      "Modern Laravel APIs with structured validation and documentation",
      "FastAPI and Flask services for reporting and data processing",
      "PostgreSQL and MySQL workflows with explicit migration discipline",
      "Docker-based environments for reproducible development and testing",
    ],
  },
  authentication: {
    title: "Centralized Authentication with Keycloak",
    paragraphs: [
      "Identity management is centralized through Keycloak with OIDC, allowing multiple applications to share a single sign-on experience without duplicating user stores or session logic in every codebase.",
      "Integration work spans legacy PHP applications, modern JavaScript frontends and service-to-service flows, with careful attention to token lifecycles, role mapping and federated access patterns appropriate for an institutional environment.",
    ],
    items: [
      "Keycloak realm configuration and OIDC client integration",
      "Role-based access across Laravel, Symfony and React applications",
      "Shared session and token validation patterns",
      "Documentation for onboarding new services into the identity layer",
    ],
  },
  reporting: {
    title: "Reporting Services",
    paragraphs: [
      "Faculty operations generate structured and semi-structured data that must be exported, reviewed and delivered to administrative teams. Python reporting services handle Excel generation, data aggregation and asynchronous processing without blocking interactive applications.",
      "Reporting pipelines emphasize traceable transformations, validation scripts and repeatable outputs, treating reports as production artifacts, not ad hoc scripts.",
    ],
    items: [
      "FastAPI and Flask endpoints for report generation",
      "Pandas and openpyxl workflows for Excel outputs",
      "Async SQLAlchemy for non-blocking database access",
      "Validation scripts to verify report integrity before delivery",
    ],
  },
  modernization: {
    title: "Progressive Modernization",
    paragraphs: [
      "The ecosystem is modernized incrementally: identify bounded modules, expose them through APIs, replace UI surfaces one at a time and validate each step before moving dependencies. This reduces risk compared to a full rewrite while still moving toward maintainable architecture.",
      "Documentation, validation scripts and Docker environments support teams working across PHP, Python and TypeScript, making onboarding and regression checks part of the standard workflow.",
    ],
    items: [
      "Strangler-fig approach to legacy replacement",
      "API-first extraction of shared business logic",
      "Cross-stack documentation and validation tooling",
      "Incremental frontend migration with React and Next.js",
    ],
  },
  responsibilities: {
    title: "Responsibilities",
    items: [
      "Design and implement features across Laravel, Symfony, React and Next.js applications",
      "Build and maintain Python reporting services with FastAPI and Flask",
      "Integrate Keycloak/OIDC authentication across legacy and modern services",
      "Define database workflows and validation scripts for administrative processes",
      "Document architecture decisions, setup procedures and validation workflows",
      "Support Docker-based development environments for multi-service testing",
    ],
  },
  learnings: {
    title: "Technical Learnings",
    items: [
      "Institutional systems require modernization strategies that respect production continuity",
      "Centralized identity with Keycloak reduces auth duplication but demands careful role design",
      "Reporting services benefit from async pipelines and explicit validation before delivery",
      "Cross-language ecosystems need strong documentation and reproducible environments",
      "Progressive extraction beats big-bang rewrites for long-lived administrative software",
    ],
  },
};
