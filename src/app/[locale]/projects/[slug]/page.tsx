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
import { locales, type Locale } from "@/i18n/config";
import { localizeProject } from "@/lib/localize";
import { buildPageMetadata } from "@/lib/metadata";
import { CaseStudyView } from "@/components/sections/CaseStudyView";

interface CaseStudyPageProps {
  params: Promise<{ locale: string; slug: string }>;
}

const projectMeta: Record<
  string,
  Record<Locale, { title: string; description: string }>
> = {
  "babel-scores": {
    en: {
      title: "Babel Scores · Manuel Quistial",
      description:
        "Sheet music reader development, e-commerce integrations, and institutional access integrations for Babel Scores.",
    },
    es: {
      title: "Babel Scores · Manuel Quistial",
      description:
        "Desarrollo del lector de partituras e integraciones de comercio electrónico y acceso institucional en Babel Scores.",
    },
  },
  "udea-fcf-digital-ecosystem": {
    en: {
      title: "Faculty applications · Manuel Quistial",
      description:
        "Development and updates for applications at Universidad de Antioquia's Faculty of Communications and Philology.",
    },
    es: {
      title: "Aplicaciones de la facultad · Manuel Quistial",
      description:
        "Desarrollo y actualización de aplicaciones de la Facultad de Comunicaciones y Filología de la Universidad de Antioquia.",
    },
  },
};

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
  const customMeta = projectMeta[slug]?.[locale];

  if (!project || !caseStudy) {
    return buildPageMetadata({
      title: content.meta.pages.projects.title,
      description: content.meta.pages.projects.description,
      path: `/projects/${slug}`,
      fullTitle: true,
      locale,
    });
  }

  return buildPageMetadata({
    title: customMeta?.title ?? `${localizeProject(project, locale).title} · Manuel Quistial`,
    description:
      customMeta?.description ?? localizeProject(project, locale).description,
    path: `/projects/${slug}`,
    fullTitle: true,
    locale,
  });
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { locale: localeParam, slug } = await params;
  const locale = parseLocale(localeParam);
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
    />
  );
}
