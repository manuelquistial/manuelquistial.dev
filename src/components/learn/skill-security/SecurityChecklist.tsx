import {
  GuideCopy,
  GuideSection,
} from "@/components/learn/skill-security/guideChrome";
import { skillSecurityClosing } from "@/content/learn/es/skill-security";

export function SecurityChecklist() {
  const data = skillSecurityClosing;

  return (
    <GuideSection id={data.id} title={data.title}>
      <GuideCopy>
        <p>{data.intro}</p>
      </GuideCopy>

      <ul className="divide-y divide-border border-y border-border">
        {data.checks.map((item) => (
          <li
            key={item.label}
            className="grid gap-1 py-4 sm:grid-cols-[9rem_minmax(0,1fr)] sm:gap-4"
          >
            <p className="text-[length:var(--body)] font-semibold text-brand">
              {item.label}
            </p>
            <p className="max-w-[68ch] text-[length:var(--body)] leading-[1.65] text-muted">
              {item.text}
            </p>
          </li>
        ))}
      </ul>

      <GuideCopy>
        {data.closing.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </GuideCopy>
    </GuideSection>
  );
}
