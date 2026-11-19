"use client";

import { useState } from "react";
import { learnControlActiveClass } from "@/components/learn/controlClass";
import { CaseSituationArt } from "@/components/learn/skill-security/CaseSituationArt";
import {
  GuideCopy,
  GuideSection,
} from "@/components/learn/skill-security/guideChrome";
import {
  skillSecurityCases,
  skillSecurityUi,
} from "@/content/learn/es/skill-security";
import { cn } from "@/lib/utils";

export function SecurityDecisionCases() {
  const data = skillSecurityCases;
  const total = data.cases.length;
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const current = data.cases[index];
  const selectedId = answers[current.id] ?? null;
  const selected = current.options.find((option) => option.id === selectedId);
  const recommended = current.options.find((option) => option.recommended);

  return (
    <GuideSection id={data.id} title={data.title}>
      <GuideCopy>
        {data.intro.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </GuideCopy>

      <div
        role="tablist"
        aria-label={data.title}
        className="flex flex-wrap gap-2"
      >
        {data.cases.map((item, itemIndex) => {
          const active = itemIndex === index;
          return (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={active}
              onClick={() => setIndex(itemIndex)}
              className={cn(
                "skill-sec-option min-h-10 rounded-full border border-transparent px-4 text-sm font-semibold text-brand/70 hover:border-brand/20 hover:bg-surface hover:text-brand focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-violet",
                active &&
                  "border-brand bg-brand text-white hover:border-brand hover:bg-brand hover:text-white",
              )}
            >
              {skillSecurityUi.caseProgress
                .replace("{current}", String(itemIndex + 1))
                .replace("{total}", String(total))}
            </button>
          );
        })}
      </div>

      <div
        key={current.id}
        className="skills-lesson__split"
      >
        <div className="space-y-5">
          <h3 className="font-display text-[1.1875rem] leading-[1.25] text-brand md:text-[1.3125rem]">
            {current.title}
          </h3>
          <CaseSituationArt kind={current.id} />
          <div className="space-y-4">
            {current.situation.map((paragraph) => (
              <p
                key={paragraph}
                className="max-w-[68ch] text-[length:var(--body)] leading-[1.65] text-muted"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          <div role="radiogroup" aria-label={current.title} className="space-y-3">
            {current.options.map((option) => {
              const active = selectedId === option.id;
              return (
                <button
                  key={option.id}
                  type="button"
                  role="radio"
                  aria-checked={active}
                  onClick={() =>
                    setAnswers((currentAnswers) => ({
                      ...currentAnswers,
                      [current.id]: option.id,
                    }))
                  }
                  className={cn(
                    "skill-sec-option flex min-h-11 w-full items-start gap-3 rounded-xl border border-border bg-surface px-4 py-3.5 text-left text-[length:var(--body)] leading-snug text-foreground hover:border-brand/25 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-violet",
                    active && `${learnControlActiveClass} border-brand/30`,
                  )}
                >
                  <span
                    aria-hidden="true"
                    className={cn(
                      "mt-0.5 inline-flex size-6 shrink-0 items-center justify-center rounded-full border text-xs font-semibold",
                      active
                        ? "border-accent-violet bg-accent-violet text-white"
                        : "border-border text-brand",
                    )}
                  >
                    {option.id.toUpperCase()}
                  </span>
                  <span>{option.label}</span>
                </button>
              );
            })}
          </div>

          {selected && recommended ? (
            <div
              className="mt-4 space-y-3 border-t border-border pt-4"
              aria-live="polite"
            >
              <p className="text-[length:var(--body)] font-semibold text-brand">
                {selected.recommended
                  ? skillSecurityUi.decisionRecommended
                  : skillSecurityUi.reviewDecision}
              </p>
              <p className="text-[length:var(--body)] font-semibold text-brand">
                {skillSecurityUi.recommendedAnswer}: {recommended.id.toUpperCase()}.
              </p>
              {current.feedback.map((paragraph) => (
                <p
                  key={paragraph}
                  className="max-w-[68ch] text-[length:var(--body)] leading-[1.65] text-muted"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </GuideSection>
  );
}
