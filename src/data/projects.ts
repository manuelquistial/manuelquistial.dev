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
    title: "Applications for Facultad de Comunicaciones y Filología",
    category: "engineering",
    clientType: "Universidad de Antioquia",
    description:
      "I contributed to developing, updating, and managing faculty applications, and advised on related data analysis.",
    longDescription:
      "Advisory and development work for Facultad de Comunicaciones y Filología applications: design and launch of an information system, updates to existing applications, support, training, and advice on data management and analysis.",
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
    clientType: "Digital sheet music platform",
    description:
      "Web reader and features for a digital sheet music platform.",
    longDescription:
      "Babel Scores is a platform for consulting and publishing digital sheet music. My contribution includes the web reader, e-commerce functionality, and institutional access integrations.",
    tags: ["WordPress", "WooCommerce", "React"],
    status: "live",
    liveUrl: "https://babelscores.com/",
    featured: true,
    caseStudyUrl: "/projects/babel-scores",
  },
  {
    id: "eeg-motor-imagery-pipeline",
    title: "Brain-computer interfaces and motor imagery",
    category: "research",
    description:
      "I research brain-computer interfaces based on EEG signals and motor imagery at Universidad de Antioquia. My work combines signal processing and software development.",
    tags: ["Python", "EEG", "BCI", "Signal processing"],
    status: "in-progress",
    featured: false,
  },
  {
    id: "sal-picciotto-website",
    title: "Sal & Picciotto Website",
    category: "agency-web",
    agency: "Sal & Picciotto",
    description:
      "Implementation of the agency website from its design proposal, with responsive pages and a manageable content structure.",
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
      "Web implementation from the agency design, with responsive pages and content sections for the center.",
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
      "Web implementation for the campaign, with a clear content structure and responsive pages.",
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
      "Web implementation with multilingual sections and property-oriented layouts.",
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
      "Landing page implementation with structured content blocks and a responsive layout.",
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
      "Corporate website implementation with WordPress and Elementor Pro.",
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
