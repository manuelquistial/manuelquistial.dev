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

      <div className="grid items-start gap-8 lg:grid-cols-[minmax(13rem,0.8fr)_minmax(0,1.2fr)] lg:gap-10">
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
                  "skill-sec-option min-h-11 shrink-0 rounded-[1rem] border border-transparent px-3 py-2.5 text-left text-sm font-semibold text-brand hover:bg-surface-soft focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-violet lg:w-full",
                  isActive && `${learnControlActiveClass} border-brand/25`,
                )}
              >
                {item.title}
              </button>
            );
          })}
        </div>

        <div className="space-y-3" aria-live="polite">
          <h3 className="font-display text-[length:var(--heading-3)] text-brand">
            {active.title}
          </h3>
          {active.paragraphs.map((paragraph) => (
            <p
              key={paragraph}
              className="max-w-[42rem] text-[length:var(--body)] leading-relaxed text-muted"
            >
              {paragraph}
            </p>
          ))}
          {"bullets" in active && active.bullets ? (
            <ul className="list-disc space-y-2 pl-5 text-[length:var(--body)] leading-relaxed text-muted">
              {active.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          ) : null}
          {"afterBullets" in active && active.afterBullets
            ? active.afterBullets.map((paragraph) => (
                <p
                  key={paragraph}
                  className="max-w-[42rem] text-[length:var(--body)] leading-relaxed text-muted"
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
