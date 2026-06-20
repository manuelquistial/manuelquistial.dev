export const skillCategories = [
  {
    id: "frontend",
    name: "Frontend",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "Material-UI",
      "Tailwind CSS",
      "shadcn/ui",
      "TanStack Query",
      "Angular",
      "Vite",
      "Microfrontends",
    ],
  },
  {
    id: "backend",
    name: "Backend",
    skills: [
      "Java",
      "Spring Boot",
      "Laravel",
      "Symfony",
      "FastAPI",
      "Flask",
      "Python",
      "REST APIs",
      "JWT",
      "Laravel Sanctum",
    ],
  },
  {
    id: "databases",
    name: "Databases",
    skills: ["PostgreSQL", "MySQL", "SQLite"],
  },
  {
    id: "authentication-iam",
    name: "Authentication & IAM",
    skills: [
      "Keycloak",
      "OIDC",
      "PKCE",
      "JWT",
      "Laravel Sanctum",
      "Federated Authentication",
    ],
  },
  {
    id: "data-reporting",
    name: "Data & Reporting",
    skills: [
      "Pandas",
      "openpyxl",
      "Excel Reports",
      "ETL Workflows",
      "Async SQLAlchemy",
    ],
  },
  {
    id: "cms-web-platforms",
    name: "CMS & Web Platforms",
    skills: [
      "WordPress",
      "WooCommerce",
      "Elementor Pro",
      "Polylang",
      "WPML",
      "ACF",
      "WordPress Code Snippets",
      "Custom CSS",
      "JavaScript",
      "Content Management",
      "Responsive Websites",
    ],
  },
  {
    id: "cloud-devops",
    name: "Cloud & DevOps",
    skills: [
      "AWS",
      "Azure",
      "Docker",
      "Docker Compose",
      "GitHub Actions",
      "CI/CD",
      "Validation Scripts",
    ],
  },
  {
    id: "ai-ml",
    name: "AI / ML",
    skills: [
      "OpenAI",
      "Azure OpenAI",
      "scikit-learn",
      "pandas",
      "NumPy",
      "Machine Learning",
      "RAG",
      "Signal Processing",
    ],
  },
  {
    id: "research",
    name: "Research",
    skills: [
      "EEG",
      "BCI",
      "Motor Imagery",
      "FBCSP",
      "CSP",
      "LDA",
      "SVM",
      "Clustering",
      "Model Evaluation",
    ],
  },
  {
    id: "testing",
    name: "Testing",
    skills: [
      "Jest",
      "React Testing Library",
      "JUnit",
      "Integration Testing",
      "WebdriverIO",
    ],
  },
] as const;

export type SkillCategoryId = (typeof skillCategories)[number]["id"];

export type SkillCategory = {
  id: SkillCategoryId;
  name: string;
  skills: readonly string[];
};
