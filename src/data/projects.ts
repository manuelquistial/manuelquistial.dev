export const projects = [
  {
    id: "sita",
    title: "SITA",
    category: "engineering",
    clientType: "Universidad de Antioquia",
    description:
      "An application for managing administrative procedures at a university faculty. I built it so administrative teams could prepare and track requests in one place.",
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
      "A system for booking rooms and equipment and reporting issues with those resources. I built it to support resource management at a university faculty.",
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
      "An application for consulting budget and financial information. I built it to support administrative work at a university faculty.",
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
      "A tool for comparing accounting entries and supporting their review. I built it to help the administrative team verify that information.",
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
      "A platform for publishing, browsing, and selling digital sheet music. I developed the web sheet music reader and worked on administration features, e-commerce functionality, and storage and authentication integrations.",
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
      "Research on how brain signals related to imagined movement can be interpreted, using eight-channel EEG, EMG-based muscular contamination control, and closed-loop visual feedback.",
    tags: ["Python", "EEG", "BCI"],
    status: "in-progress",
    featured: false,
  },
  {
    id: "sal-picciotto-website",
    title: "Sal & Picciotto",
    category: "agency-web",
    agency: "Sal & Picciotto",
    description:
      "Corporate website for a design agency. I implemented the site that presents its services and portfolio, based on the agency’s visual design.",
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
    description:
      "Website development to present the services of an eye care center.",
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
    description:
      "Development of the website for the Giving Tuesday campaign in Panama.",
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
    description:
      "Development of a multilingual real estate website presenting the residential project and accepting inquiries from prospective buyers.",
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
      "Development of the FCI Box page presenting its international package forwarding service and shipping options to Panama.",
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
