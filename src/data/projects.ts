export const projects = [
  {
    id: "udea-fcf-digital-ecosystem",
    title: "Applications for the Faculty of Communications and Philology",
    category: "engineering",
    clientType: "Universidad de Antioquia",
    description:
      "Information system development, application updates, and data management consulting.",
    tags: ["Web applications"],
    status: "in-progress",
    featured: true,
    caseStudyUrl: "/projects/udea-fcf-digital-ecosystem",
  },
  {
    id: "babel-scores",
    title: "Babel Scores",
    category: "engineering",
    description:
      "React sheet music reader, e-commerce functionality, and institutional access integrations.",
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
      "My master's research at Universidad de Antioquia focuses on brain-computer interfaces based on EEG signals and motor imagery.",
    tags: ["Python", "EEG", "BCI"],
    status: "in-progress",
    featured: false,
  },
  {
    id: "sal-picciotto-website",
    title: "Sal & Picciotto",
    category: "agency-web",
    agency: "Sal & Picciotto",
    description: "Agency website.",
    homeDescription:
      "WordPress development for the agency’s website.",
    tags: ["WordPress", "Elementor Pro"],
    status: "live",
    liveUrl: "https://salypicciotto.com/",
    featured: true,
  },
  {
    id: "trapatsa-eye-center",
    title: "Trapatsas Eye Center",
    category: "agency-web",
    agency: "Sal & Picciotto",
    description: "Eye care practice website.",
    tags: ["WordPress", "Elementor Pro"],
    status: "live",
    liveUrl: "https://trapatsaseyecenter.com/",
    featured: true,
  },
  {
    id: "giving-tuesday-panama",
    title: "Giving Tuesday Panamá",
    category: "agency-web",
    agency: "Sal & Picciotto",
    description: "Campaign website.",
    tags: ["WordPress", "Elementor Pro"],
    status: "live",
    liveUrl: "https://givingtuesdaypanama.org/",
    featured: true,
  },
  {
    id: "barrio-alto-panama",
    title: "Barrio Alto Panamá",
    category: "agency-web",
    agency: "Sal & Picciotto",
    description: "Multilingual real estate website.",
    tags: ["WordPress", "Elementor Pro", "Polylang"],
    status: "live",
    liveUrl: "https://barrioaltopanama.com/es/inicio/",
  },
  {
    id: "fci-pty-box",
    title: "FCI PTY Box",
    category: "agency-web",
    agency: "Sal & Picciotto",
    tags: ["WordPress", "Elementor Pro"],
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
    tags: ["WordPress", "Elementor Pro"],
    status: "coming-soon",
  },
] as const;

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

export type ProjectId = (typeof projects)[number]["id"];

export type Project = {
  id: ProjectId;
  title: string;
  category: ProjectCategory;
  agency?: string;
  clientType?: string;
  description?: string;
  homeDescription?: string;
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
