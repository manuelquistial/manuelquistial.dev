export const projects = [
  {
    id: "sita",
    title: "SITA",
    category: "engineering",
    clientType: "Universidad de Antioquia",
    description:
      "Administrative procedures information system for the Faculty of Communications and Philology.",
    image: "/images/projects/sita.jpg",
    imageAlt: "SITA main page for preparing an administrative request.",
    imageWidth: 1348,
    imageHeight: 1232,
    tags: ["Web application"],
    status: "completed",
    featured: true,
    caseStudyUrl: "/projects/sita",
  },
  {
    id: "siar",
    title: "SIAR",
    category: "engineering",
    clientType: "Universidad de Antioquia",
    description:
      "Resource administration for space and equipment reservations and incident reports at the Faculty of Communications and Philology.",
    image: "/images/projects/siar.jpg",
    imageAlt:
      "SIAR main page for space reservations, equipment reservations, and incident reports.",
    imageWidth: 1348,
    imageHeight: 1232,
    tags: ["Web application"],
    status: "completed",
    featured: true,
    caseStudyUrl: "/projects/siar",
  },
  {
    id: "finanzas",
    title: "Finanzas",
    category: "engineering",
    clientType: "Universidad de Antioquia",
    description:
      "Budget consultation and financial information for the Faculty of Communications and Philology.",
    image: "/images/projects/finanzas.jpg",
    imageAlt: "Finanzas main page showing budget categories.",
    imageWidth: 1348,
    imageHeight: 1232,
    tags: ["Web application"],
    status: "completed",
    featured: true,
    caseStudyUrl: "/projects/finanzas",
  },
  {
    id: "conciliacion",
    title: "Conciliación",
    category: "engineering",
    clientType: "Universidad de Antioquia",
    description:
      "Comparison of accounting movements for the Faculty of Communications and Philology.",
    image: "/images/projects/conciliacion.jpg",
    imageAlt: "Conciliación main page for comparing accounting movements.",
    imageWidth: 1348,
    imageHeight: 1232,
    tags: ["Web application"],
    status: "completed",
    featured: true,
    caseStudyUrl: "/projects/conciliacion",
  },
  {
    id: "babel-scores",
    title: "Babel Scores",
    category: "engineering",
    description:
      "React sheet music reader, e-commerce functionality, and institutional access integrations.",
    image: "/images/projects/babel-scores.jpg",
    imageAlt:
      "Babel Scores homepage showing its navigation and a green-tinted image of hands on a keyboard.",
    imageWidth: 1024,
    imageHeight: 640,
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
      "Master’s research on motor imagery decoding with eight-channel EEG, EMG-based muscular contamination control, and closed-loop visual feedback.",
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
    image: "/images/projects/sal-picciotto.jpg",
    imageAlt: "Sal & Picciotto homepage with a grid of branding projects.",
    liveUrl: "https://salypicciotto.com/",
    featured: true,
  },
  {
    id: "trapatsa-eye-center",
    title: "Trapatsas Eye Center",
    category: "agency-web",
    agency: "Sal & Picciotto",
    description: "Eye care practice website.",
    image: "/images/projects/trapatsas-eye-center.jpg",
    imageAlt:
      "Trapatsas Eye Center homepage showing its navigation and an eye surgery image.",
    imageWidth: 1024,
    imageHeight: 640,
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
    image: "/images/projects/giving-tuesday-panama.jpg",
    imageAlt:
      "Giving Tuesday Panamá homepage showing its navigation and the Panama City skyline.",
    imageWidth: 1024,
    imageHeight: 640,
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
    image: "/images/projects/barrio-alto-panama.jpg",
    imageAlt:
      "Barrio Alto page showing the property entrance and a contact form.",
    liveUrl: "https://barrioaltopanama.com/es/inicio/",
  },
  {
    id: "fci-pty-box",
    title: "FCI PTY Box",
    category: "agency-web",
    agency: "Sal & Picciotto",
    description:
      "Website for the FCI Box international package forwarding service.",
    image: "/images/projects/fci-box.jpg",
    imageAlt: "FCI Box page showing its navigation and main service image.",
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
  image?: string;
  imageAlt?: string;
  imageWidth?: number;
  imageHeight?: number;
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
