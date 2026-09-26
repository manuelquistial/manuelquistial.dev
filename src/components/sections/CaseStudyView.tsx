import Link from "next/link";
import type { Locale } from "@/i18n/config";
import type { CaseStudyContent } from "@/content";
import { getCaseStudySections } from "@/content";
import type { Project } from "@/data/projects";
import { localizedPath } from "@/lib/localizedPath";
import { Section } from "@/components/layout/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { getUrlHost } from "@/lib/utils";

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
    <section>
      <h2 className="text-[clamp(1.5rem,2.5vw,1.75rem)] font-semibold leading-[1.25] text-foreground">
        {title}
      </h2>
      {paragraphs?.length ? (
        <div className="mt-5 space-y-4">
          {paragraphs.map((paragraph, index) => (
            <p
              key={`${title}-p-${index}`}
              className="max-w-[65ch] leading-relaxed text-muted"
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
              className="rounded-[6px] bg-surface-soft px-4 py-3 text-sm text-foreground"
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
}

export function CaseStudyView({
  locale,
  project,
  caseStudy,
}: CaseStudyViewProps) {
  const sections = getCaseStudySections(caseStudy);
  const liveHost = project.liveUrl ? getUrlHost(project.liveUrl) : null;

  return (
    <Section>
      <Link
        href={localizedPath(locale, "/projects")}
        className="text-base font-semibold text-accent transition-colors duration-150 hover:text-accent-hover"
      >
        {caseStudy.backLabel}
      </Link>

      <SectionTitle
        as="h1"
        title={caseStudy.title}
        subtitle={caseStudy.subtitle}
        className="mt-6"
      />

      {project.clientType ? (
        <p className="mb-10 text-sm text-muted">{project.clientType}</p>
      ) : null}

      {liveHost && project.liveUrl ? (
        <p className="mb-10">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-base font-semibold text-accent transition-colors duration-150 hover:text-accent-hover"
          >
            {liveHost}
          </a>
        </p>
      ) : null}

      <div className="space-y-12">
        {sections.map(({ key, section }) => (
          <CaseStudyBlock
            key={key}
            title={section.title}
            paragraphs={section.paragraphs}
            items={section.items}
          />
        ))}
      </div>
    </Section>
  );
}
