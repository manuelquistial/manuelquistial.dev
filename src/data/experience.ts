export const experience = [
  {
    id: "anthology-blackboard",
    company: "Anthology / Blackboard",
    current: true,
  },
  {
    id: "universidad-antioquia-research",
    company: "Universidad de Antioquia / Research",
    current: true,
  },
  {
    id: "freelance",
    company: "Freelance Software Projects",
  },
] as const;

export type ExperienceId = (typeof experience)[number]["id"];

export type Experience = {
  id: ExperienceId;
  company: string;
  current?: boolean;
};
