import type { Locale } from "@/i18n/config";
import type { Project } from "@/data/projects";
import type { SiteContent } from "@/content";
import { localizedSectionPath } from "@/lib/localizedPath";
import { pageSections } from "@/lib/pageSections";
import { Section } from "@/components/layout/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { ViewAllLink } from "@/components/ui/ViewAllLink";

interface ResearchPreviewProps {
  locale: Locale;
  sectionLabel: string;
  viewAllLabel: string;
  title: string;
  tagline: string;
  overview: string;
  topics: string[];
  projects: readonly Project[];
  projectCard: SiteContent["projectCard"];
  projectStatus: SiteContent["projectStatus"];
}

export function ResearchPreview({
  locale,
  sectionLabel,
  viewAllLabel,
  title,
  tagline,
  overview,
  topics,
  projects,
  projectCard,
  projectStatus,
}: ResearchPreviewProps) {
  const featured = projects[0];

  return (
    <Section>
      <SectionTitle title={sectionLabel} subtitle={tagline} />

      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
        <div>
          <h3 className="text-xl font-semibold text-zinc-50">{title}</h3>
          <p className="mt-4 leading-relaxed text-zinc-400">{overview}</p>
        </div>

        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
          {topics.map((topic) => (
            <li
              key={topic}
              className="card-surface border-l-2 border-l-accent/40 px-4 py-3.5 text-sm text-zinc-50 hover:border-zinc-500"
            >
              {topic}
            </li>
          ))}
        </ul>
      </div>

      {featured ? (
        <div className="mt-8">
          <ProjectCard
            project={featured}
            labels={projectCard}
            statusLabels={projectStatus}
            featuredLayout
          />
        </div>
      ) : null}

      <div className="mt-8">
        <ViewAllLink
          href={localizedSectionPath(
            locale,
            "/research",
            pageSections.researchOverview,
          )}
        >
          {viewAllLabel}
        </ViewAllLink>
      </div>
    </Section>
  );
}
