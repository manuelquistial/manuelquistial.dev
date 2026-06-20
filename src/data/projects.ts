export const projectCategories = [
  "engineering",
  "research",
  "agency-web",
] as const;

export type ProjectCategory = (typeof projectCategories)[number];

export const projectStatuses = [
  "planned",
  "in-progress",
  "completed",
  "live",
  "coming-soon",
] as const;

export type ProjectStatus = (typeof projectStatuses)[number];

export const projects = [
  {
    id: "udea-fcf-digital-ecosystem",
    title: "UDEA FCF Digital Ecosystem",
    category: "engineering",
    clientType: "Institutional Project",
    description:
      "Institutional software ecosystem for the Facultad de Comunicaciones y Filología at Universidad de Antioquia, including legacy modernization, administrative systems, classroom reservations, financial workflows, reporting services and centralized identity management with Keycloak.",
    longDescription:
      "A multi-application institutional ecosystem combining legacy systems, modernized applications and shared infrastructure. The work includes Laravel and Symfony legacy applications, modern Laravel APIs, React and Next.js frontends, Python reporting services with FastAPI and Flask, database workflows with MySQL and PostgreSQL, Docker-based local environments, documentation, validation scripts and centralized authentication with Keycloak/OIDC. The ecosystem supports administrative processes such as classroom reservations, institutional requests, financial reconciliation, reporting and identity management.",
    tags: [
      "Laravel",
      "Symfony",
      "React",
      "Next.js",
      "TypeScript",
      "FastAPI",
      "Flask",
      "Python",
      "PostgreSQL",
      "MySQL",
      "Keycloak",
      "OIDC",
      "Docker",
      "Legacy Modernization",
      "Institutional Systems",
      "Reporting Services",
    ],
    status: "in-progress",
    featured: true,
    caseStudyUrl: "/projects/udea-fcf-digital-ecosystem",
  },
  {
    id: "babel-scores",
    title: "Babel Scores",
    category: "engineering",
    clientType: "Publishing Platform",
    description:
      "Custom digital publishing and e-commerce platform combining WooCommerce, React tooling, Fabric.js score editing, PDF.js rendering, S3 asset storage, WPML multilingual support, custom plugins, async job processing, multivendor workflows, Shibboleth federation and IP-based institutional access.",
    longDescription:
      "A complex WordPress and WooCommerce engineering project for contemporary music publishing — extending the platform with custom plugins, React-based tooling, canvas editing with Fabric.js, in-browser score preview with PDF.js, cloud storage on S3, multilingual content with WPML, asynchronous background jobs, multivendor commerce flows and federated login through Shibboleth alongside IP-based institutional access.",
    tags: [
      "WordPress",
      "WooCommerce",
      "React",
      "Fabric.js",
      "PDF.js",
      "AWS S3",
      "WPML",
      "Custom Plugins",
      "Async Jobs",
      "Multivendor",
      "Shibboleth",
      "PHP",
    ],
    status: "in-progress",
    featured: true,
  },
  {
    id: "enterprise-access-platform",
    title: "Enterprise Access Platform",
    category: "engineering",
    description:
      "Role-based access management for institutional users — React/TypeScript SPA, Spring Boot REST APIs, PostgreSQL, and Keycloak SSO. Designed for multi-tenant edtech deployments.",
    tags: [
      "React",
      "TypeScript",
      "Spring Boot",
      "PostgreSQL",
      "Keycloak",
      "Docker",
    ],
    status: "planned",
  },
  {
    id: "microfrontend-learning-dashboard",
    title: "Microfrontend Learning Dashboard",
    category: "engineering",
    description:
      "Modular learning analytics UI with Vite, Module Federation, and shared design-system packages. Enables independent team deployments without breaking the host shell.",
    tags: [
      "React",
      "TypeScript",
      "Vite",
      "Module Federation",
      "Microfrontends",
    ],
    status: "planned",
  },
  {
    id: "ai-knowledge-assistant",
    title: "AI Knowledge Assistant",
    category: "engineering",
    description:
      "Document-grounded Q&A with FastAPI, RAG over institutional PDFs, PostgreSQL + pgvector embeddings, and Azure OpenAI. Built for internal knowledge retrieval at scale.",
    tags: ["Python", "FastAPI", "RAG", "PostgreSQL", "pgvector", "LLMs"],
    status: "planned",
  },
  {
    id: "eeg-motor-imagery-pipeline",
    title: "EEG Motor Imagery Pipeline",
    category: "research",
    description:
      "End-to-end BCI research pipeline: MNE preprocessing, FBCSP features, LDA/SVM classifiers, and leave-one-subject-out evaluation on motor imagery datasets.",
    tags: [
      "Python",
      "EEG",
      "BCI",
      "FBCSP",
      "LDA",
      "SVM",
      "Machine Learning",
    ],
    status: "in-progress",
    featured: true,
  },
  {
    id: "sal-picciotto-website",
    title: "Sal & Picciotto Website",
    category: "agency-web",
    agency: "Sal & Picciotto",
    description:
      "Agency website implemented with WordPress and Elementor Pro, focused on responsive layouts, content structure, visual consistency and maintainable page sections.",
    tags: [
      "WordPress",
      "Elementor Pro",
      "ACF",
      "WordPress Code Snippets",
      "Custom CSS",
      "Responsive Design",
    ],
    status: "live",
    liveUrl: "https://salypicciotto.com/",
    featured: true,
  },
  {
    id: "trapatsa-eye-center",
    title: "TrapatSa Eye Center",
    category: "agency-web",
    agency: "Sal & Picciotto",
    description:
      "Healthcare website developed with WordPress and Elementor Pro, including responsive pages, service-oriented content sections and production updates.",
    tags: [
      "WordPress",
      "Elementor Pro",
      "ACF",
      "Custom CSS",
      "Healthcare Website",
      "Responsive Design",
    ],
    status: "live",
    liveUrl: "https://trapatsaseyecenter.com/",
    featured: true,
  },
  {
    id: "giving-tuesday-panama",
    title: "Giving Tuesday Panamá",
    category: "agency-web",
    agency: "Sal & Picciotto",
    description:
      "Campaign and nonprofit website implemented with WordPress and Elementor Pro, focused on clear content structure, responsive design and call-to-action sections.",
    tags: [
      "WordPress",
      "Elementor Pro",
      "WordPress Code Snippets",
      "Custom CSS",
      "Campaign Website",
      "Nonprofit",
    ],
    status: "live",
    liveUrl: "https://givingtuesdaypanama.org/",
    featured: true,
  },
  {
    id: "barrio-alto-panama",
    title: "Barrio Alto Panamá",
    category: "agency-web",
    agency: "Sal & Picciotto",
    description:
      "Real estate website built with WordPress, Elementor Pro and Polylang, including multilingual sections, property-focused layouts and responsive page implementation.",
    tags: [
      "WordPress",
      "Elementor Pro",
      "Polylang",
      "ACF",
      "Real Estate",
      "Responsive Design",
    ],
    status: "live",
    liveUrl: "https://barrioaltopanama.com/es/inicio/",
  },
  {
    id: "fci-pty-box",
    title: "FCI PTY Box",
    category: "agency-web",
    agency: "Sal & Picciotto",
    description:
      "Business landing page implemented with WordPress and Elementor Pro, focused on structured content blocks, responsive design and campaign-oriented presentation.",
    tags: [
      "WordPress",
      "Elementor Pro",
      "WordPress Code Snippets",
      "Custom CSS",
      "Landing Page",
      "Responsive Design",
    ],
    status: "live",
    liveUrl: "https://fcipty.com/box/",
  },
  {
    id: "pdc-colombia",
    title: "PDC Colombia",
    category: "agency-web",
    agency: "Sal & Picciotto",
    description:
      "Corporate website developed with WordPress and Elementor Pro, including responsive layouts, content management, custom fields and production-ready website implementation.",
    tags: [
      "WordPress",
      "Elementor Pro",
      "ACF",
      "Custom CSS",
      "Corporate Website",
      "Responsive Design",
    ],
    status: "coming-soon",
  },
] as const;

export type ProjectId = (typeof projects)[number]["id"];

export type Project = {
  id: ProjectId;
  title: string;
  category: ProjectCategory;
  agency?: string;
  clientType?: string;
  description: string;
  longDescription?: string;
  tags: readonly string[];
  status: ProjectStatus;
  liveUrl?: string;
  githubUrl?: string;
  caseStudyUrl?: string;
  featured?: boolean;
};

function sortProjects(items: readonly Project[]): readonly Project[] {
  const featured = items.filter((project) => project.featured);
  const regular = items.filter((project) => !project.featured);
  return [...featured, ...regular];
}

export function getProjectById(id: ProjectId): Project | undefined {
  return projects.find((project) => project.id === id);
}

export function getProjectsByCategory(
  category: ProjectCategory,
): readonly Project[] {
  return sortProjects(
    projects.filter((project) => project.category === category),
  );
}

export function getFeaturedProjects(
  category: ProjectCategory,
  limit = 3,
): readonly Project[] {
  return getProjectsByCategory(category).slice(0, limit);
}
