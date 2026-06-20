export const skillCategories = [
  {
    id: "frontend",
    skills: [
      "React",
      "TypeScript",
      "Next.js",
      "Vite",
      "Redux",
      "Angular",
      "Tailwind CSS",
      "MUI",
      "Microfrontends",
    ],
  },
  {
    id: "backend",
    skills: [
      "Java",
      "Spring Boot",
      "Python",
      "FastAPI",
      "Node.js",
      "Laravel",
      "REST APIs",
      "Authentication",
      "Authorization",
    ],
  },
  {
    id: "databases",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "SQLite"],
  },
  {
    id: "cloud-devops",
    skills: [
      "AWS",
      "Azure",
      "Docker",
      "GitHub Actions",
      "Jenkins",
      "CI/CD",
    ],
  },
  {
    id: "ai-ml",
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
  skills: readonly string[];
};
