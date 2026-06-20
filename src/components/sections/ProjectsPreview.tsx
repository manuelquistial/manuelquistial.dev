import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";
import { projects } from "@/data/projects";
import { Section } from "@/components/layout/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { ViewAllLink } from "@/components/ui/ViewAllLink";
import { resolveProjects } from "@/lib/content";
import { localizedPath } from "@/lib/utils";

interface ProjectsPreviewProps {
  locale: Locale;
  sectionLabel: string;
  viewAllLabel: string;
  projectCopy: Dictionary["content"]["projects"];
  projectCard: Dictionary["projectCard"];
  projectStatus: Dictionary["projectStatus"];
}

export function ProjectsPreview({
  locale,
  sectionLabel,
  viewAllLabel,
  projectCopy,
  projectCard,
  projectStatus,
}: ProjectsPreviewProps) {
  const items = resolveProjects(projects, projectCopy).slice(0, 3);

  return (
    <Section variant="muted">
      <SectionTitle title={sectionLabel} />

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {items.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            labels={projectCard}
            statusLabels={projectStatus}
          />
        ))}
      </div>

      <div className="mt-10">
        <ViewAllLink href={localizedPath(locale, "/projects")}>
          {viewAllLabel}
        </ViewAllLink>
      </div>
    </Section>
  );
}
