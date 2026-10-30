import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/i18n/config";
import type { CaseStudyContent } from "@/content/case-study-types";
import { getCaseStudySections } from "@/content/case-study-types";
import type { Project } from "@/data/projects";
import { localizedPath } from "@/lib/localizedPath";
import { projectImageFrame } from "@/lib/projectImage";
import { Section } from "@/components/layout/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { cn, getUrlHost } from "@/lib/utils";

function CaseStudyBlock({
  title,
  paragraphs,
  items,
}: {
  title: string;
  paragraphs?: readonly string[];
  items?: readonly string[];
}) {
  if (!title && !paragraphs?.length && !items?.length) return null;

  return (
    <section>
      {title ? (
        <h2 className="text-[clamp(1.5rem,2.5vw,1.75rem)] font-semibold leading-[1.25] text-foreground">
          {title}
        </h2>
      ) : null}
      {paragraphs?.length ? (
        <div className={title ? "mt-5 space-y-4" : "space-y-4"}>
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
        <ul className="mt-5 list-disc space-y-2 pl-5">
          {items.map((item) => (
            <li key={item} className="max-w-[65ch] text-base text-muted">
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
  const imageFrame = projectImageFrame(project);

  return (
    <Section>
      <Link
        href={localizedPath(locale, "/projects")}
        className="text-base font-semibold text-foreground transition-colors duration-200 hover:text-accent"
      >
        {caseStudy.backLabel}
      </Link>

      <SectionTitle
        as="h1"
        title={caseStudy.title}
        subtitle={caseStudy.subtitle}
        className="mt-6"
      />

      {project.image ? (
        <div
          className={cn(
            "mb-10 max-w-3xl",
            imageFrame.style
              ? imageFrame.className
              : "relative aspect-[8/5] w-full overflow-hidden bg-surface",
          )}
          style={imageFrame.style}
        >
          <Image
            src={project.image}
            alt={project.imageAlt ?? ""}
            fill
            sizes="(min-width: 768px) 768px, 100vw"
            className="editorial-image object-contain object-center"
            priority
          />
        </div>
      ) : null}

      {(caseStudy.context || project.clientType || caseStudy.period) && (
        <div className="mb-10 space-y-1 text-sm text-muted">
          {caseStudy.context || project.clientType ? (
            <p>{caseStudy.context ?? project.clientType}</p>
          ) : null}
          {caseStudy.period ? <p>{caseStudy.period}</p> : null}
        </div>
      )}

      {liveHost && project.liveUrl ? (
        <p className="mb-10">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-base font-semibold text-foreground transition-colors duration-200 hover:text-accent"
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
