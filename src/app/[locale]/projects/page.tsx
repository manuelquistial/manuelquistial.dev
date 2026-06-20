import type { Metadata } from "next";
import { getDictionary } from "@/i18n/getDictionary";
import { parseLocale } from "@/i18n/parseLocale";
import { projects } from "@/data/projects";
import { buildPageMetadata } from "@/lib/metadata";
import { Container } from "@/components/layout/Container";
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
    <Container as="section" className="py-16 sm:py-20">
      <SectionTitle
        title={dictionary.sections.projects}
        subtitle={dictionary.hero.subtitle}
      />

      <div className="grid gap-4 md:grid-cols-2">
        {projectItems.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            labels={dictionary.projectCard}
            statusLabels={dictionary.projectStatus}
          />
        ))}
      </div>
    </Container>
  );
}
