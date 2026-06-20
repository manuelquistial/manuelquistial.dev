export const experience = [
  {
    id: "anthology-blackboard",
    company: "Anthology / Blackboard",
    role: "Software Engineer / Full-Stack Engineer",
    type: "Enterprise Software",
    description:
      "Enterprise education software at scale: React and TypeScript frontends, Java and Spring Boot services, PostgreSQL, Angular-to-React migration, AWS Lambda feature flags, CI/CD pipelines and automated testing.",
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
  },
  {
    id: "digital-americas-pipeline",
    company: "Digital Americas Pipeline Initiative",
    role: "Backend Developer",
    type: "Backend / Cloud",
    description:
      "Backend development on cloud systems with Node.js, Express, AWS Lambda, SNS/SQS, EC2, API Gateway and Electron-based tooling.",
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
  {
    id: "babel-scores",
    company: "Babel Scores",
    role: "Software Engineer / Full-Stack Engineer",
    type: "Direct Client / Publishing Platform",
    description:
      "Direct-client publishing and e-commerce platform on WordPress and WooCommerce: custom plugins, React flipbook tooling with Fabric.js and PDF.js, AWS S3, WPML, async jobs, multivendor flows and federated institutional access.",
    technologies: [
      "WordPress",
      "WooCommerce",
      "React",
      "Fabric.js",
      "PDF.js",
      "AWS S3",
      "WPML",
      "PHP",
      "JavaScript",
    ],
    period: "May 2022 – Present",
    location: "Remote",
    current: true,
  },
  {
    id: "sal-picciotto",
    company: "Sal & Picciotto",
    role: "WordPress / Frontend Developer",
    type: "Freelance / Agency",
    description:
      "Freelance WordPress and Elementor Pro projects through Sal & Picciotto for corporate, healthcare, real estate, nonprofit and campaign clients. Responsive layouts, ACF, Polylang, custom CSS, JavaScript and production updates.",
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
    id: "udea-fcf",
    company:
      "Universidad de Antioquia, Facultad de Comunicaciones y Filología",
    role: "Software Engineer",
    type: "Institutional Software Ecosystem",
    description:
      "Institutional software for the digital ecosystem at Facultad de Comunicaciones y Filología, Universidad de Antioquia: legacy modernization, Laravel and Symfony applications, React and Next.js frontends, Python reporting services, Docker environments, validation scripts and centralized authentication with Keycloak/OIDC.",
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
    company: "Universidad de Antioquia, Research",
    role: "Neuroengineering Researcher / Master's Student",
    type: "Research",
    description:
      "Master's research on EEG-based motor imagery classification, BCI systems, signal processing and machine learning evaluation, building on prior neuroengineering work in cognitive rehabilitation applications.",
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
    period: "Feb 2025 – Present",
    location: "Medellín, Colombia",
    current: true,
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

export const featuredExperienceIds = [
  "anthology-blackboard",
  "digital-americas-pipeline",
  "babel-scores",
  "sal-picciotto",
  "udea-fcf",
] as const satisfies readonly ExperienceId[];

export function getFeaturedExperience(
  limit: number = featuredExperienceIds.length,
): Experience[] {
  return featuredExperienceIds.slice(0, limit).flatMap((id) => {
    const item = experience.find((entry) => entry.id === id);
    return item ? [item as Experience] : [];
  });
}
