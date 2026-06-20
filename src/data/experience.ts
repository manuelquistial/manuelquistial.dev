export const experience = [
  {
    id: "anthology-blackboard",
    company: "Anthology / Blackboard",
    role: "Software Engineer / Full-Stack Engineer",
    type: "Enterprise Software",
    description:
      "Worked on enterprise education software using React, TypeScript, Redux, Angular-to-React migration, Java, Spring Boot, PostgreSQL, AWS Lambda feature flags, CI/CD pipelines, automated testing and end-to-end UI testing.",
    technologies: [
      "React",
      "TypeScript",
      "Redux",
      "Angular",
      "Java",
      "Spring Boot",
      "PostgreSQL",
      "AWS Lambda",
      "CI/CD",
      "Jest",
      "JUnit",
    ],
    period: "Nov 2021 – May 2026",
    location: "Bogotá, Colombia",
    current: true,
  },
  {
    id: "udea-fcf",
    company:
      "Universidad de Antioquia — Facultad de Comunicaciones y Filología",
    role: "Software Engineer",
    type: "Institutional Software Ecosystem",
    description:
      "Worked on institutional software systems involving legacy modernization, Laravel and Symfony applications, React and Next.js frontends, Python reporting services, database workflows, Docker environments, documentation, validation scripts and centralized authentication with Keycloak/OIDC.",
    technologies: [
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
    ],
    period: "May 2022 – Present",
    location: "Medellín, Colombia",
    current: true,
  },
  {
    id: "universidad-antioquia-research",
    company: "Universidad de Antioquia — Research",
    role: "Neuroengineering Researcher / Master's Student",
    type: "Research",
    description:
      "Worked on research-driven software and neuroengineering projects, including cognitive rehabilitation applications and a current master's research focus on EEG-based motor imagery classification, BCI systems, signal processing and machine learning evaluation.",
    technologies: [
      "Python",
      "EEG",
      "BCI",
      "Signal Processing",
      "Machine Learning",
      "scikit-learn",
      "pandas",
      "NumPy",
      "FBCSP",
      "LDA",
      "SVM",
    ],
    period: "Jun 2022 – Present",
    location: "Medellín, Colombia",
    current: true,
  },
  {
    id: "sal-picciotto",
    company: "Sal & Picciotto",
    role: "WordPress / Frontend Developer",
    type: "Agency Projects",
    description:
      "Delivered WordPress and Elementor Pro-based websites through Sal & Picciotto for corporate, healthcare, real estate, nonprofit and campaign-oriented clients. Worked on responsive layouts, content structure, ACF fields, WordPress Code Snippets, custom CSS, JavaScript, Polylang multilingual sections and production updates.",
    technologies: [
      "WordPress",
      "Elementor Pro",
      "Polylang",
      "ACF",
      "WordPress Code Snippets",
      "Custom CSS",
      "JavaScript",
    ],
    period: "May 2022 – Present",
    location: "Remote",
    current: true,
  },
  {
    id: "digital-americas-pipeline",
    company: "Digital Americas Pipeline Initiative",
    role: "Backend Developer",
    type: "Backend / Cloud",
    description:
      "Worked on backend and cloud-based systems using Node.js, Express, AWS Lambda, SNS/SQS, EC2, API Gateway and Electron-based tooling.",
    technologies: [
      "Node.js",
      "Express",
      "AWS Lambda",
      "Amazon SNS",
      "Amazon SQS",
      "EC2",
      "API Gateway",
      "Electron",
    ],
    period: "Feb 2020 – Nov 2021",
    location: "Medellín, Colombia",
  },
] as const;

export type ExperienceId = (typeof experience)[number]["id"];

export type Experience = {
  id: ExperienceId;
  company: string;
  role: string;
  description: string;
  type?: string;
  technologies?: readonly string[];
  period: string;
  location?: string;
  current?: boolean;
};
