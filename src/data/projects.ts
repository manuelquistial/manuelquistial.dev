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
    title: "Digital Ecosystem: Facultad de Comunicaciones y Filología, Universidad de Antioquia",
    category: "engineering",
    clientType: "Institutional Project",
    description:
      "Institutional software ecosystem for Facultad de Comunicaciones y Filología, Universidad de Antioquia, including legacy modernization, administrative and academic workflows, institutional reporting services and centralized identity management with Keycloak/OIDC.",
    longDescription:
      "A multi-application institutional ecosystem combining legacy systems, modernized applications and shared infrastructure. The work includes Laravel and Symfony legacy applications, modern Laravel APIs, React and Next.js frontends, Python reporting services with FastAPI and Flask, database workflows with MySQL and PostgreSQL, Docker-based local environments, documentation, validation scripts and centralized authentication with Keycloak/OIDC.",
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
    clientType: "Direct Client Project",
    description:
      "Custom e-commerce platform for digital music scores, built on WordPress and WooCommerce with advanced custom development, including a responsive React-based flipbook, custom plugins, multilingual support, asynchronous jobs, S3 integration, multivendor workflows and federated institutional access.",
    longDescription:
      "Babel Scores is a custom e-commerce platform developed directly for the client, combining WordPress and WooCommerce with advanced custom functionality. The project included a dedicated flipbook experience built with React.js, Fabric.js, PDF.js and React PageFlip for mobile and desktop users, custom WordPress plugins for WooCommerce and internal workflows, AWS S3 integration, WPML multilingual support, database migration, asynchronous jobs, multivendor workflow support and federated institutional access.",
    tags: [
      "WordPress",
      "WooCommerce",
      "React.js",
      "Fabric.js",
      "PDF.js",
      "React PageFlip",
      "AWS S3",
      "Custom WordPress Plugins",
      "WPML",
      "Database Migration",
      "Async Jobs",
      "Multivendor Workflows",
      "Federated Access",
      "Institutional Access",
      "Custom Authentication Flows",
    ],
    status: "live",
    liveUrl: "https://babelscores.com/",
    featured: true,
    caseStudyUrl: "/projects/babel-scores",
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
    title: "Trapatsas Eye Center",
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
  return projects.find((item) => item.id === id);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return getProjectById(slug as ProjectId);
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

export function getCaseStudyProjects(): readonly Project[] {
  return projects.filter(
    (project) => "caseStudyUrl" in project && Boolean(project.caseStudyUrl),
  ) as Project[];
}
