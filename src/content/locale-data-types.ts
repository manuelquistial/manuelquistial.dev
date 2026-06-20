import type { ExperienceId } from "@/data/experience";
import type { ProjectId } from "@/data/projects";
import type { SkillCategoryId } from "@/data/skills";

export type LocaleData = {
  projects: Partial<
    Record<
      ProjectId,
      {
        title?: string;
        description?: string;
        longDescription?: string;
        clientType?: string;
      }
    >
  >;
  experience: Partial<
    Record<
      ExperienceId,
      {
        role?: string;
        description?: string;
        type?: string;
      }
    >
  >;
  skills: Partial<Record<SkillCategoryId, { name?: string }>>;
};
