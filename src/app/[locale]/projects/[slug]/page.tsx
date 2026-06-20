import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getCaseStudyByProjectId } from "@/content/getCaseStudy";
import { getSiteContent } from "@/content/getSiteContent";
import {
  getProjectBySlug,
  getCaseStudyProjects,
  type ProjectId,
} from "@/data/projects";
import { parseLocale } from "@/i18n/parseLocale";
import { locales } from "@/i18n/config";
import { localizeProject } from "@/lib/localize";
import { buildPageMetadata } from "@/lib/metadata";
import { CaseStudyView } from "@/components/sections/CaseStudyView";

interface CaseStudyPageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export function generateStaticParams() {
  return getCaseStudyProjects().flatMap((project) =>
    locales.map((locale) => ({
      locale,
      slug: project.id,
    })),
  );
}

export async function generateMetadata({
  params,
}: CaseStudyPageProps): Promise<Metadata> {
  const { locale: localeParam, slug } = await params;
  const locale = parseLocale(localeParam);
  const content = getSiteContent(locale);
  const project = getProjectBySlug(slug);
  const caseStudy = project
    ? getCaseStudyByProjectId(locale, project.id as ProjectId)
    : undefined;

  if (!project || !caseStudy) {
    return buildPageMetadata({
      title: locale === "es" ? "Case study" : "Case Study",
      description: content.meta.pages.projects.description,
      path: `/projects/${slug}`,
      locale,
    });
  }

  const localizedProject = localizeProject(project, locale);

  return buildPageMetadata({
    title: `${localizedProject.title} | Case Study`,
    description: localizedProject.description,
    path: `/projects/${slug}`,
    locale,
  });
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { locale: localeParam, slug } = await params;
  const locale = parseLocale(localeParam);
  const content = getSiteContent(locale);
  const project = getProjectBySlug(slug);

  if (!project?.caseStudyUrl) {
    notFound();
  }

  const caseStudy = getCaseStudyByProjectId(locale, project.id as ProjectId);

  if (!caseStudy) {
    notFound();
  }

  return (
    <CaseStudyView
      locale={locale}
      project={localizeProject(project, locale)}
      caseStudy={caseStudy}
      projectStatus={content.projectStatus}
    />
  );
}
