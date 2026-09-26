export const experience = [
  {
    id: "anthology-blackboard",
    company: "Anthology / Blackboard",
    role: "Software Engineer",
    description:
      "Work on learning platforms: administrative interfaces, feature configuration, and automated tests for critical workflows.",
    highlights: [
      "Developed administrative interfaces for managing settings and feature activation in learning platforms, integrated with Java, Python, and AWS services.",
      "Implemented form validation, error handling, and loading states to guide users through administrative workflows.",
      "Contributed to migrating modules from Angular to React and automating tests for critical workflows.",
    ],
    technologies: ["React", "TypeScript", "Java", "Spring Boot", "WebdriverIO"],
    period: "Nov 2021 – May 2026",
    location: "Bogotá, Colombia",
  },
  {
    id: "digital-americas-pipeline",
    company: "Digital Americas Pipeline Initiative",
    role: "Backend Developer",
    description:
      "Backend services and monitoring tools for cloud applications.",
    highlights: [
      "Developed services for processing data and distributing notifications across cloud application components.",
      "Built monitoring tools with Electron and Elastic Stack to inspect service status and activity.",
    ],
    technologies: ["Node.js", "Express", "AWS"],
    period: "Feb 2020 – Nov 2021",
    location: "Medellín, Colombia",
  },
  {
    id: "babel-scores",
    company: "Babel Scores",
    role: "Software Engineer",
    description:
      "Web reader and platform features for a digital sheet music publishing product.",
    highlights: [
      "Developed the web score reader so users can consult musical documents in the browser.",
      "Implemented e-commerce functionality and institutional access integrations for the platform.",
    ],
    technologies: ["WordPress", "WooCommerce", "React"],
    period: "2022 – Present",
    location: "Remote",
  },
  {
    id: "sal-picciotto",
    company: "Sal & Picciotto",
    role: "WordPress / Frontend Developer",
    description:
      "Website implementation from agency design proposals.",
    highlights: [
      "Implemented websites from the agency's design proposals, adapting pages for different screen sizes.",
      "Configured manageable content structures and multilingual versions, with fields and components adjusted per project.",
    ],
    technologies: ["WordPress", "Elementor Pro", "ACF", "Polylang"],
    period: "2022 – Present",
    location: "Remote",
  },
  {
    id: "udea-fcf",
    company:
      "Universidad de Antioquia, Facultad de Comunicaciones y Filología",
    role: "Advisory and software development",
    description:
      "Advisory and development work on faculty applications for information management, updates, and training.",
    highlights: [
      "Contributed to the design and launch of an information system for the faculty, working on its structure and functionality.",
      "Updated existing applications and provided support and training for their use.",
      "Advised on data management and analysis related to the faculty's applications.",
    ],
    technologies: ["Web applications", "Data analysis"],
    period: "Jul 2024 – Jul 2026",
    location: "Medellín, Colombia",
  },
  {
    id: "udea-teaching",
    company: "Universidad de Antioquia",
    role: "Adjunct Professor",
    description:
      "Teaching and technical training in programming, data analysis, web development, and artificial intelligence.",
    highlights: [
      "Taught courses and training in artificial intelligence, data analysis, programming, and web application development, as well as university teaching in academic practice courses.",
      "Facilitated programming, data analysis, and AI bootcamps that included explorer and integrator levels depending on the activity.",
    ],
    period: "2022 – 2025",
    location: "Medellín, Colombia",
  },
] as const;

export type ExperienceId = (typeof experience)[number]["id"];

export type Experience = {
  id: ExperienceId;
  company: string;
  role: string;
  description: string;
  highlights?: readonly string[];
  type?: string;
  technologies?: readonly string[];
  period: string;
  location?: string;
  current?: boolean;
};

export const featuredExperienceIds = [
  "anthology-blackboard",
  "digital-americas-pipeline",
  "babel-scores",
  "udea-fcf",
] as const satisfies readonly ExperienceId[];

export const teachingExperienceIds = [
  "udea-teaching",
] as const satisfies readonly ExperienceId[];

export function getFeaturedExperience(
  limit: number = featuredExperienceIds.length,
): Experience[] {
  return featuredExperienceIds.slice(0, limit).flatMap((id) => {
    const item = experience.find((entry) => entry.id === id);
    return item ? [item as Experience] : [];
  });
}

export function getProfessionalExperience(): Experience[] {
  return experience
    .filter((item) => item.id !== "udea-teaching")
    .map((item) => item as Experience);
}

export function getTeachingExperience(): Experience[] {
  return teachingExperienceIds.flatMap((id) => {
    const item = experience.find((entry) => entry.id === id);
    return item ? [item as Experience] : [];
  });
}
