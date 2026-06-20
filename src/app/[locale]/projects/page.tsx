import type { Metadata } from "next";
import { getDictionary } from "@/i18n/getDictionary";
import { parseLocale } from "@/i18n/parseLocale";
import { projects } from "@/data/projects";
import { buildPageMetadata } from "@/lib/metadata";
import { Section } from "@/components/layout/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { resolveProjects } from "@/lib/content";

interface ProjectsPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: ProjectsPageProps): Promise<Metadata> {
  const locale = parseLocale((await params).locale);
  const { meta } = getDictionary(locale);

  return buildPageMetadata(locale, {
    title: meta.pages.projects.title,
    description: meta.pages.projects.description,
    path: "/projects",
  });
}

export default async function ProjectsPage({ params }: ProjectsPageProps) {
  const locale = parseLocale((await params).locale);
  const dictionary = getDictionary(locale);
  const projectItems = resolveProjects(projects, dictionary.content.projects);

  return (
    <Section>
      <SectionTitle
        title={dictionary.sections.projects}
        subtitle={dictionary.meta.pages.projects.description}
      />

      <div className="grid gap-5 md:grid-cols-2">
        {projectItems.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            labels={dictionary.projectCard}
            statusLabels={dictionary.projectStatus}
          />
        ))}
      </div>
    </Section>
  );
}
