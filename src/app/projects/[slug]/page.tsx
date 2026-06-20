import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getCaseStudyByProjectId } from "@/content/case-studies";
import { siteContent } from "@/content";
import {
  getProjectBySlug,
  getPublishedCaseStudyProjects,
  type ProjectId,
} from "@/data/projects";
import { buildPageMetadata } from "@/lib/metadata";
import { CaseStudyView } from "@/components/sections/CaseStudyView";

interface CaseStudyPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getPublishedCaseStudyProjects().map((project) => ({
    slug: project.id,
  }));
}

export async function generateMetadata({
  params,
}: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  const caseStudy = project
    ? getCaseStudyByProjectId(project.id as ProjectId)
    : undefined;

  if (!project || !caseStudy) {
    return buildPageMetadata({
      title: "Case Study",
      description: siteContent.meta.pages.projects.description,
      path: `/projects/${slug}`,
    });
  }

  return buildPageMetadata({
    title: `${project.title} | Case Study`,
    description: project.description,
    path: `/projects/${slug}`,
  });
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project?.caseStudyUrl) {
    notFound();
  }

  const caseStudy = getCaseStudyByProjectId(project.id as ProjectId);

  if (!caseStudy) {
    notFound();
  }

  return (
    <CaseStudyView
      project={project}
      caseStudy={caseStudy}
      projectStatus={siteContent.projectStatus}
    />
  );
}
