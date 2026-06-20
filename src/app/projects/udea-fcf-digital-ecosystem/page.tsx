import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { siteContent } from "@/content";
import { getProjectById } from "@/data/projects";
import { buildPageMetadata } from "@/lib/metadata";
import { getProjectStatusLabel } from "@/lib/projects";
import { Section } from "@/components/layout/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { SkillBadge } from "@/components/ui/SkillBadge";
import { ViewAllLink } from "@/components/ui/ViewAllLink";

const PROJECT_ID = "udea-fcf-digital-ecosystem" as const;

export function generateMetadata(): Metadata {
  const project = getProjectById(PROJECT_ID);
  const { udeaFcfCaseStudy } = siteContent;

  if (!project) {
    return buildPageMetadata({
      title: udeaFcfCaseStudy.title,
      description: udeaFcfCaseStudy.subtitle,
      path: "/projects/udea-fcf-digital-ecosystem",
    });
  }

  return buildPageMetadata({
    title: `${project.title} — Case Study`,
    description: project.description,
    path: "/projects/udea-fcf-digital-ecosystem",
  });
}

function CaseStudyBlock({
  title,
  paragraphs,
  items,
}: {
  title: string;
  paragraphs?: readonly string[];
  items?: readonly string[];
}) {
  return (
    <section className="card-surface p-6 sm:p-8">
      <h2 className="text-xl font-semibold text-foreground">{title}</h2>
      {paragraphs?.length ? (
        <div className="mt-5 space-y-4">
          {paragraphs.map((paragraph, index) => (
            <p
              key={`${title}-p-${index}`}
              className="leading-relaxed text-muted"
            >
              {paragraph}
            </p>
          ))}
        </div>
      ) : null}
      {items?.length ? (
        <ul className="mt-5 grid gap-3 sm:grid-cols-2">
          {items.map((item) => (
            <li
              key={item}
              className="rounded-lg border border-border bg-surface-elevated px-4 py-3 text-sm text-foreground"
            >
              {item}
            </li>
          ))}
        </ul>
      ) : null}
    </section>
  );
}

export default function UdeaFcfCaseStudyPage() {
  const project = getProjectById(PROJECT_ID);
  const caseStudy = siteContent.udeaFcfCaseStudy;

  if (!project) {
    notFound();
  }

  const statusLabel = getProjectStatusLabel(
    project.status,
    siteContent.projectStatus,
  );

  return (
    <Section containerClassName="py-16 sm:py-20 lg:py-24">
      <Link
        href="/projects"
        className="text-sm font-medium text-accent transition-colors hover:text-accent-hover"
      >
        ← {caseStudy.backLabel}
      </Link>

      <SectionTitle
        title={caseStudy.title}
        subtitle={caseStudy.subtitle}
        className="mt-6"
      />

      <div className="mb-10 flex flex-wrap items-center gap-3">
        {project.clientType ? (
          <span className="text-sm font-medium text-muted">
            {project.clientType}
          </span>
        ) : null}
        <span className="rounded-full border border-accent/30 bg-accent/10 px-2.5 py-0.5 text-xs font-medium text-accent">
          {statusLabel}
        </span>
      </div>

      <div className="mb-10 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <SkillBadge key={tag} label={tag} />
        ))}
      </div>

      <div className="space-y-8">
        <CaseStudyBlock
          title={caseStudy.overview.title}
          paragraphs={caseStudy.overview.paragraphs}
        />
        <CaseStudyBlock
          title={caseStudy.legacy.title}
          paragraphs={caseStudy.legacy.paragraphs}
          items={caseStudy.legacy.items}
        />
        <CaseStudyBlock
          title={caseStudy.modern.title}
          paragraphs={caseStudy.modern.paragraphs}
          items={caseStudy.modern.items}
        />
        <CaseStudyBlock
          title={caseStudy.authentication.title}
          paragraphs={caseStudy.authentication.paragraphs}
          items={caseStudy.authentication.items}
        />
        <CaseStudyBlock
          title={caseStudy.reporting.title}
          paragraphs={caseStudy.reporting.paragraphs}
          items={caseStudy.reporting.items}
        />
        <CaseStudyBlock
          title={caseStudy.modernization.title}
          paragraphs={caseStudy.modernization.paragraphs}
          items={caseStudy.modernization.items}
        />
        <CaseStudyBlock
          title={caseStudy.responsibilities.title}
          items={caseStudy.responsibilities.items}
        />
        <CaseStudyBlock
          title={caseStudy.learnings.title}
          items={caseStudy.learnings.items}
        />
      </div>

      <div className="mt-12">
        <ViewAllLink href="/projects">{caseStudy.backLabel}</ViewAllLink>
      </div>
    </Section>
  );
}
