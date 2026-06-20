import type { SkillCategoryWithCopy } from "@/lib/content";
import { Section } from "@/components/layout/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { SkillBadge } from "@/components/ui/SkillBadge";

interface SkillsSectionProps {
  categories: SkillCategoryWithCopy[];
  sectionLabel: string;
}

export function SkillsSection({
  categories,
  sectionLabel,
}: SkillsSectionProps) {
  return (
    <Section variant="muted">
      <SectionTitle title={sectionLabel} />

      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {categories.map((category) => (
          <div
            key={category.id}
            className="card-surface border-l-2 border-l-accent/40 p-5 sm:p-6"
          >
            <h3 className="text-sm font-semibold uppercase tracking-wide text-foreground">
              {category.name}
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <SkillBadge key={skill} label={skill} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
