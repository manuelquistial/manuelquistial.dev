import Link from "next/link";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";
import { projects } from "@/data/projects";
import { Container } from "@/components/layout/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { resolveProjects } from "@/lib/content";
import { localizedPath } from "@/lib/utils";

interface ProjectsPreviewProps {
  locale: Locale;
  dictionary: Dictionary;
}

export function ProjectsPreview({ locale, dictionary }: ProjectsPreviewProps) {
  const items = resolveProjects(projects, dictionary.content.projects).slice(
    0,
    3,
  );

  return (
    <section>
      <Container className="py-16 sm:py-20">
        <SectionTitle title={dictionary.sections.projects} />

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {items.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              labels={dictionary.projectCard}
              statusLabels={dictionary.projectStatus}
            />
          ))}
        </div>

        <div className="mt-8">
          <Link
            href={localizedPath(locale, "/projects")}
            className="text-sm font-medium text-accent transition-colors hover:text-accent-hover"
          >
            {dictionary.sections.viewAll} →
          </Link>
        </div>
      </Container>
    </section>
  );
}
