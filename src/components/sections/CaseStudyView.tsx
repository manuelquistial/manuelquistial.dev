import Link from "next/link";
import type { Locale } from "@/i18n/config";
import type { CaseStudyContent } from "@/content";
import { getCaseStudySections } from "@/content";
import type { Project } from "@/data/projects";
import type { SiteContent } from "@/content";
import { localizedPath, localizedSectionPath } from "@/lib/localizedPath";
import { pageSections } from "@/lib/pageSections";
import { getProjectStatusLabel } from "@/lib/projects";
import { Section } from "@/components/layout/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { SkillBadge } from "@/components/ui/SkillBadge";
import { ViewAllLink } from "@/components/ui/ViewAllLink";

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

interface CaseStudyViewProps {
  locale: Locale;
  project: Project;
  caseStudy: CaseStudyContent;
  projectStatus: SiteContent["projectStatus"];
}

export function CaseStudyView({
  locale,
  project,
  caseStudy,
  projectStatus,
}: CaseStudyViewProps) {
  const statusLabel = getProjectStatusLabel(project.status, projectStatus);
  const sections = getCaseStudySections(caseStudy);

  return (
    <Section>
      <Link
        href={localizedPath(locale, "/projects")}
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
        {sections.map(({ key, section }) => (
          <CaseStudyBlock
            key={key}
            title={section.title}
            paragraphs={section.paragraphs}
            items={section.items}
          />
        ))}
      </div>

      <div className="mt-12">
        <ViewAllLink
          href={localizedSectionPath(
            locale,
            "/projects",
            pageSections.engineering,
          )}
        >
          {caseStudy.backLabel}
        </ViewAllLink>
      </div>
    </Section>
  );
}
