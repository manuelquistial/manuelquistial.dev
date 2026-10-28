import type { Locale } from "@/i18n/config";
import type { SiteContent } from "@/content";
import { localizedPath } from "@/lib/localizedPath";
import { Section } from "@/components/layout/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ViewAllLink } from "@/components/ui/ViewAllLink";

interface AboutPreviewProps {
  locale: Locale;
  intro: string;
  education: SiteContent["aboutPage"]["education"];
  sectionLabel: string;
  viewAllLabel: string;
}

export function AboutPreview({
  locale,
  intro,
  education,
  sectionLabel,
  viewAllLabel,
}: AboutPreviewProps) {
  return (
    <Section variant="bordered">
      <SectionHeader number="05" label={sectionLabel} />

      <div className="mt-12 grid gap-10 lg:mt-16 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-5">
          <ul className="space-y-4">
            {education.items.map((item) => (
              <li key={item.degree}>
                <p className="text-[length:var(--heading-3)] font-semibold leading-snug text-foreground">
                  {item.degree}
                </p>
                <p className="mt-1 text-sm text-muted">
                  {item.institution}
                  {item.period ? ` · ${item.period}` : null}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-6 lg:col-start-7">
          <p className="max-w-[42ch] text-[length:var(--body-lg)] leading-[1.45] text-muted">
            {intro}
          </p>
          <div className="mt-8">
            <ViewAllLink href={localizedPath(locale, "/about")}>
              {viewAllLabel}
            </ViewAllLink>
          </div>
        </div>
      </div>
    </Section>
  );
}
