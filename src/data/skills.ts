export const skillCategories = [
  {
    id: "core-engineering",
    name: "Software development",
    skills: [
      "React",
      "TypeScript",
      "Java",
      "Spring Boot",
      "Node.js",
      "WordPress",
      "PostgreSQL",
      "MySQL",
    ],
  },
  {
    id: "cloud-auth",
    name: "Infrastructure and integration",
    skills: ["AWS", "AWS Lambda", "Docker", "CI/CD", "API Gateway"],
  },
  {
    id: "ai-neuroengineering",
    name: "Data and research",
    skills: [
      "Python",
      "Data analysis",
      "Signal processing",
      "EEG",
      "BCI",
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
