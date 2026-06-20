import Link from "next/link";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";
import { Container } from "@/components/layout/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { localizedPath } from "@/lib/utils";

interface AboutPreviewProps {
  locale: Locale;
  content: Dictionary["about"];
  sectionLabel: string;
  viewAllLabel: string;
}

export function AboutPreview({
  locale,
  content,
  sectionLabel,
  viewAllLabel,
}: AboutPreviewProps) {
  return (
    <section>
      <Container className="py-16 sm:py-20">
        <SectionTitle title={sectionLabel} />

        <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr]">
          <div className="space-y-4">
            {content.paragraphs.map((paragraph, index) => (
              <p
                key={`about-preview-p-${index}`}
                className="leading-relaxed text-muted"
              >
                {paragraph}
              </p>
            ))}
            <Link
              href={localizedPath(locale, "/about")}
              className="inline-flex text-sm font-medium text-accent transition-colors hover:text-accent-hover"
            >
              {viewAllLabel} →
            </Link>
          </div>

          <ul className="space-y-3">
            {content.highlights.map((item) => (
              <li
                key={item}
                className="rounded-lg border border-border bg-surface px-4 py-3 text-sm text-foreground"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
