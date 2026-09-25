export const skillCategories = [
  {
    id: "core-engineering",
    name: "Core Engineering",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "Java",
      "Spring Boot",
      "Node.js",
      "Laravel",
      "PostgreSQL",
      "MySQL",
      "REST APIs",
      "Redux",
      "Tailwind CSS",
    ],
  },
  {
    id: "ai-neuroengineering",
    name: "AI & Neuroengineering",
    skills: [
      "EEG",
      "BCI",
      "Motor Imagery",
      "FBCSP",
      "LDA",
      "SVM",
      "scikit-learn",
      "pandas",
      "NumPy",
      "Signal Processing",
      "OpenAI",
      "Machine Learning",
    ],
  },
  {
    id: "cloud-auth",
    name: "Cloud & Auth",
    skills: [
      "AWS",
      "AWS Lambda",
      "Docker",
      "Keycloak",
      "OIDC",
      "JWT",
      "CI/CD",
      "GitHub Actions",
      "API Gateway",
      "Amazon SNS",
      "Amazon SQS",
      "PKCE",
    ],
  },
] as const;

export type SkillCategoryId = (typeof skillCategories)[number]["id"];

export type SkillCategory = {
  id: SkillCategoryId;
  name: string;
  skills: readonly string[];
};

export function getSkillCategoriesByIds(
  ids: readonly SkillCategoryId[],
): SkillCategory[] {
  return ids.flatMap((id) => {
    const category = skillCategories.find((item) => item.id === id);
    return category ? [category] : [];
  });
}
