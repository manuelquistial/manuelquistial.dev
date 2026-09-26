import type { SkillCategory } from "@/data/skills";
import { Section } from "@/components/layout/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";

interface SkillsSectionProps {
  categories: readonly SkillCategory[];
  sectionLabel: string;
}

export function SkillsSection({
  categories,
  sectionLabel,
}: SkillsSectionProps) {
  return (
    <Section>
      <SectionTitle title={sectionLabel} />
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((category) => (
          <div key={category.id}>
            <h3 className="text-base font-semibold text-foreground">
              {category.name}
            </h3>
            <ul className="mt-3 space-y-1.5">
              {category.skills.map((skill) => (
                <li key={skill} className="text-sm text-muted">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
