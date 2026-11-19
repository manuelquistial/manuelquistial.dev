"use client";

import { useState } from "react";
import { learnControlActiveClass } from "@/components/learn/controlClass";
import {
  GuideCallout,
  GuideCopy,
  GuideSection,
} from "@/components/learn/skill-security/guideChrome";
import { skillSecurityIfSuspicious } from "@/content/learn/es/skill-security";
import { cn } from "@/lib/utils";

type SituationId = (typeof skillSecurityIfSuspicious.items)[number]["id"];

export function SecurityIncidentGuide() {
  const data = skillSecurityIfSuspicious;
  const [selected, setSelected] = useState<SituationId>(data.items[0].id);
  const active = data.items.find((item) => item.id === selected) ?? data.items[0];

  return (
    <GuideSection id={data.id} title={data.title}>
      <GuideCopy>
        {data.intro.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </GuideCopy>

      <div className="skills-lesson__split">
        <div
          role="radiogroup"
          aria-label={data.title}
          className="flex gap-2 overflow-x-auto pb-1 lg:flex-col lg:overflow-visible lg:pb-0"
        >
          {data.items.map((item) => {
            const isActive = selected === item.id;
            return (
              <button
                key={item.id}
                type="button"
                role="radio"
                aria-checked={isActive}
                onClick={() => setSelected(item.id)}
                className={cn(
                  "skill-sec-option min-h-11 shrink-0 rounded-xl border border-transparent px-3 py-2.5 text-left text-sm font-semibold text-brand hover:bg-surface-soft focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-violet lg:w-full",
                  isActive && `${learnControlActiveClass} border-brand/25`,
                )}
              >
                {item.title}
              </button>
            );
          })}
        </div>

        <div className="space-y-4" aria-live="polite">
          <h3 className="font-display text-[1.1875rem] leading-[1.25] text-brand md:text-[1.3125rem]">
            {active.title}
          </h3>
          {active.paragraphs.map((paragraph) => (
            <p
              key={paragraph}
              className="max-w-[68ch] text-[length:var(--body)] leading-[1.65] text-muted"
            >
              {paragraph}
            </p>
          ))}
          {"bullets" in active && active.bullets ? (
            <ul className="list-disc space-y-2 pl-5 text-[length:var(--body)] leading-[1.65] text-muted">
              {active.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          ) : null}
          {"afterBullets" in active && active.afterBullets
            ? active.afterBullets.map((paragraph) => (
                <p
                  key={paragraph}
                  className="max-w-[68ch] text-[length:var(--body)] leading-[1.65] text-muted"
                >
                  {paragraph}
                </p>
              ))
            : null}
        </div>
      </div>

      <GuideCallout>{data.warning}</GuideCallout>
    </GuideSection>
  );
}
