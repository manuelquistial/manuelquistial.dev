import type { SkillCategoryWithCopy } from "@/lib/content";
import { Container } from "@/components/layout/Container";
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
    <section>
      <Container className="py-16 sm:py-20">
        <SectionTitle title={sectionLabel} />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <div
              key={category.id}
              className="rounded-xl border border-border bg-surface p-5"
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
      </Container>
    </section>
  );
}
