import type { Locale } from "@/i18n/config";
import type { SiteContent } from "@/content";
import { profile } from "@/data/profile";
import { localizedPath } from "@/lib/localizedPath";
import { pageSections } from "@/lib/pageSections";
import { Section } from "@/components/layout/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ViewAllLink } from "@/components/ui/ViewAllLink";

interface AboutPreviewProps {
  locale: Locale;
  intro: string | readonly string[];
  education: SiteContent["aboutPage"]["education"];
  sectionLabel: string;
  viewAllLabel: string;
  roleLabel: string;
  researcherLabel: string;
}

export function AboutPreview({
  locale,
  intro,
  education,
  sectionLabel,
  viewAllLabel,
  roleLabel,
  researcherLabel,
}: AboutPreviewProps) {
  const featuredDegrees = education.items.slice(0, 2);

  return (
    <Section id={pageSections.about} variant="bordered" spacing="footer-adjacent">
      <SectionHeader number="05" label={sectionLabel} />

      <div className="mt-[var(--section-heading-gap)] grid gap-10 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-5">
          <ul className="space-y-3">
            <li className="text-[length:var(--heading-3)] font-semibold text-foreground">
              {roleLabel}
            </li>
            <li className="text-[length:var(--heading-3)] font-semibold text-foreground">
              {researcherLabel}
            </li>
            {featuredDegrees.map((item) => (
              <li key={item.degree}>
                <p className="text-[length:var(--body)] font-semibold leading-snug text-foreground">
                  {item.degree}
                </p>
                <p className="mt-1 text-sm text-muted">{item.institution}</p>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-overline text-muted">{profile.location}</p>
        </div>

        <div className="lg:col-span-6 lg:col-start-7">
          <div className="max-w-[42ch] space-y-4 text-[length:var(--body-lg)] leading-[1.45] text-muted">
            {(Array.isArray(intro) ? intro : [intro]).map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
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
