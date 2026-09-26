export const experience = [
  {
    id: "anthology-blackboard",
    company: "Anthology / Blackboard",
    role: "Software Engineer",
    description:
      "Software engineering on learning platforms.",
    highlights: [
      "Developed interfaces for managing settings and activating features in learning platforms.",
      "Contributed to migrating modules from Angular to React and automating tests for critical workflows.",
      "Implemented form validation, error handling, and loading states in administrative interfaces.",
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
      "Built monitoring tools with Electron and Elastic Stack to inspect service status and activity.",
      "Developed services for processing data and distributing notifications across cloud application components.",
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
      "Browser sheet music reader and platform integrations.",
    highlights: [
      "Developed the browser-based sheet music reader.",
      "Implemented e-commerce features and institutional access integrations.",
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
      "Website implementation from agency designs.",
    highlights: [
      "Implemented websites based on the agency's designs and adapted them for different screen sizes.",
      "Configured fields and components for updating website content in WordPress.",
      "Implemented multilingual versions for projects that required them.",
    ],
    technologies: ["WordPress", "Elementor Pro", "ACF", "Polylang"],
    period: "2022 – Present",
    location: "Remote",
  },
  {
    id: "udea-fcf",
    company:
      "Universidad de Antioquia, Facultad de Comunicaciones y Filología",
    role: "Software Development and Consulting",
    description:
      "Project-based advisory and development work for faculty applications.",
    highlights: [
      "Contributed to the design and launch of an information system for the faculty.",
      "Updated existing applications and provided support and training for their use.",
      "Provided advice on managing and analyzing data associated with those applications.",
    ],
    period: "Project-based work · 2024–2026",
    location: "Medellín, Colombia",
  },
  {
    id: "udea-teaching",
    company: "Universidad de Antioquia",
    role: "Adjunct Instructor",
    description:
      "Taught programming, web development, data analysis, and artificial intelligence, as well as academic practice courses.",
    period: "Periodic teaching contracts · 2022–2025",
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
