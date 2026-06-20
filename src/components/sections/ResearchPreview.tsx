import Link from "next/link";
import type { Locale } from "@/i18n/config";
import { Container } from "@/components/layout/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { localizedPath } from "@/lib/utils";

interface ResearchPreviewProps {
  locale: Locale;
  sectionLabel: string;
  viewAllLabel: string;
  title: string;
  tagline: string;
  overview: string;
  topics: string[];
}

export function ResearchPreview({
  locale,
  sectionLabel,
  viewAllLabel,
  title,
  tagline,
  overview,
  topics,
}: ResearchPreviewProps) {
  return (
    <section className="bg-surface/40">
      <Container className="py-16 sm:py-20">
        <SectionTitle title={sectionLabel} subtitle={tagline} />

        <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <h3 className="text-xl font-semibold text-foreground">{title}</h3>
            <p className="mt-4 leading-relaxed text-muted">{overview}</p>
            <Link
              href={localizedPath(locale, "/research")}
              className="mt-6 inline-flex text-sm font-medium text-accent transition-colors hover:text-accent-hover"
            >
              {viewAllLabel} →
            </Link>
          </div>

          <ul className="grid gap-2 sm:grid-cols-2 lg:grid-cols-1">
            {topics.map((topic) => (
              <li
                key={topic}
                className="rounded-lg border border-border bg-surface px-4 py-3 text-sm text-foreground"
              >
                {topic}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
