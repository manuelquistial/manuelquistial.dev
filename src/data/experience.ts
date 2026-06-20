export const experience = [
  {
    id: "anthology-blackboard",
    company: "Anthology / Blackboard",
    role: "Software Engineer",
    description:
      "Enterprise edtech at scale: React/TypeScript frontends, Java/Spring Boot services, PostgreSQL, Angular legacy modules, Jenkins/GitHub Actions CI, and Jest/JUnit test suites.",
    period: "2019 - Present",
    location: "Remote",
    current: true,
  },
  {
    id: "udea-fcf",
    company: "Universidad de Antioquia, Facultad de Comunicaciones y Filología",
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
    period: "2023 - Present",
    location: "Medellín, Colombia",
    current: true,
  },
  {
    id: "universidad-antioquia-research",
    company: "Universidad de Antioquia",
    role: "Neuroengineering Researcher · Master's Student",
    description:
      "EEG motor imagery classification with FBCSP, LDA, and SVM. Subject-disjoint cross-validation, signal preprocessing with MNE, and reproducible Python research pipelines.",
    period: "2022 - Present",
    location: "Medellín, Colombia",
    current: true,
  },
  {
    id: "sal-picciotto",
    company: "Sal & Picciotto",
    role: "WordPress / Frontend Developer",
    type: "Agency Projects",
    description:
      "Delivered WordPress and Elementor Pro-based websites for agency clients across corporate, healthcare, real estate, nonprofit and campaign-oriented projects. Worked on responsive layouts, content structure, ACF fields, WordPress Code Snippets, custom CSS, JavaScript, Polylang multilingual sections and production updates.",
    technologies: [
      "WordPress",
      "Elementor Pro",
      "Polylang",
      "ACF",
      "WordPress Code Snippets",
      "Custom CSS",
      "JavaScript",
    ],
    period: "2021 - Present",
    location: "Remote",
  },
  {
    id: "freelance",
    company: "Freelance Software Projects",
    role: "Full-Stack Developer",
    description:
      "Custom web apps, WordPress sites, Laravel/PHP backends, and React frontends for small businesses and startups across Colombia.",
    period: "2016 - 2020",
    location: "Colombia",
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
