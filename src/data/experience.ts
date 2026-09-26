export const experience = [
  {
    id: "anthology-blackboard",
    company: "Anthology / Blackboard",
    role: "Software Engineer",
    description:
      "Software engineering on learning platforms.",
    highlights: [
      "Developed administrative modules in React and TypeScript for learning platform configuration and feature activation, integrated with backend services.",
      "Contributed to Angular-to-React module migrations and automated testing of administrative workflows.",
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
      "Developed backend services with Node.js and Express, with data processing and asynchronous messaging on AWS using Lambda, SNS, and SQS.",
      "Implemented monitoring tools with Electron and Elastic Stack to inspect service activity and status.",
    ],
    technologies: [
      "Node.js",
      "Express",
      "AWS Lambda",
      "Amazon SNS",
      "Amazon SQS",
      "Electron",
      "Elastic Stack",
    ],
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
      "Developed the React-based web sheet music reader.",
      "Implemented e-commerce functionality with WooCommerce and institutional access integrations.",
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
      "Developed WordPress websites from the agency’s designs, with responsive layouts in Elementor Pro and content fields built with ACF.",
      "Implemented multilingual versions with Polylang.",
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
      "Updated existing applications and provided technical support and user training.",
      "Advised on data management and analysis for the applications.",
    ],
    period: "Project-based work · 2024–2026",
    location: "Medellín, Colombia",
  },
  {
    id: "udea-teaching",
    company: "Universidad de Antioquia",
    role: "Adjunct Instructor",
    description:
      "Taught programming, web development, data analysis, and artificial intelligence as an adjunct instructor. My teaching responsibilities also included academic practice courses.",
    period: "Teaching appointments · 2022–2025",
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
