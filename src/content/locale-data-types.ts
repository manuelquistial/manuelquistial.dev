import type {
  ExperienceEngagementId,
  ExperienceId,
} from "@/data/experience";
import type { ProjectId } from "@/data/projects";
import type { SkillCategoryId } from "@/data/skills";

export type LocaleData = {
  projects: Partial<
    Record<
      ProjectId,
      {
        title?: string;
        description?: string;
        homeDescription?: string;
        imageAlt?: string;
        longDescription?: string;
        clientType?: string;
      }
    >
  >;
  experience: Partial<
    Record<
      ExperienceId,
      {
        company?: string;
        role?: string;
        description?: string;
        type?: string;
        highlights?: readonly string[];
        technologiesLabel?: string;
        period?: string;
        location?: string;
        engagements?: Partial<
          Record<
            ExperienceEngagementId,
            {
              company?: string;
              period?: string;
              highlights?: readonly string[];
              technologiesLabel?: string;
            }
          >
        >;
      }
    >
  >;
  skills: Partial<Record<SkillCategoryId, { name?: string }>>;
};
