import type { SkillCategory } from "@/data/skills";
import { Section } from "@/components/layout/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { SkillBadge } from "@/components/ui/SkillBadge";
import { cn } from "@/lib/utils";

interface SkillsSectionProps {
  categories: readonly SkillCategory[];
  sectionLabel: string;
}

const bentoSpans = [
  "md:col-span-2 md:row-span-2",
  "md:col-span-1",
  "md:col-span-1",
] as const;

export function SkillsSection({
  categories,
  sectionLabel,
}: SkillsSectionProps) {
  return (
    <Section variant="muted">
      <SectionTitle title={sectionLabel} />

      <div className="grid gap-4 md:grid-cols-3 md:auto-rows-fr">
        {categories.map((category, index) => (
          <div
            key={category.id}
            className={cn(
              "card-surface flex flex-col p-5 sm:p-6 hover:border-zinc-500",
              bentoSpans[index] ?? "md:col-span-1",
            )}
          >
            <h3 className="text-sm font-semibold uppercase tracking-wide text-zinc-50">
              {category.name}
            </h3>
            <div
              className={cn(
                "mt-4 flex flex-wrap gap-2",
                index === 0 && "md:mt-6 md:gap-2.5",
              )}
            >
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
