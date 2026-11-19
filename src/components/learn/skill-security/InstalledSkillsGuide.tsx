import {
  GuideCopy,
  GuideSection,
} from "@/components/learn/skill-security/guideChrome";
import { skillSecurityAlreadyInstalled } from "@/content/learn/es/skill-security";

export function InstalledSkillsGuide() {
  const data = skillSecurityAlreadyInstalled;

  return (
    <GuideSection id={data.id} title={data.title}>
      <GuideCopy>
        {data.intro.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </GuideCopy>

      <div className="divide-y divide-border border-y border-border">
        {data.items.map((item) => (
          <details key={item.id} className="group py-1">
            <summary className="flex min-h-12 cursor-pointer list-none items-center justify-between gap-4 py-3 text-[length:var(--body)] font-semibold text-brand marker:content-none [&::-webkit-details-marker]:hidden">
              <span>{item.title}</span>
              <span
                aria-hidden="true"
                className="text-muted transition-transform duration-200 group-open:rotate-45"
              >
                +
              </span>
            </summary>
            <div className="max-w-[44rem] space-y-3 pb-5">
              {item.paragraphs.map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-[length:var(--body)] leading-relaxed text-muted"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </details>
        ))}
      </div>
    </GuideSection>
  );
}
