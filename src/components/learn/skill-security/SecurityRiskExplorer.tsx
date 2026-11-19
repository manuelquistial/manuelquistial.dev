"use client";

import { useState } from "react";
import { learnControlActiveClass } from "@/components/learn/controlClass";
import {
  GuideCallout,
  GuideCopy,
  GuideSection,
} from "@/components/learn/skill-security/guideChrome";
import {
  IconAccess,
  IconConnections,
  IconInstructions,
  IconPrograms,
} from "@/components/learn/skill-security/icons";
import { RiskScene } from "@/components/learn/skill-security/RiskScene";
import { skillSecurityRisks } from "@/content/learn/es/skill-security";
import { cn } from "@/lib/utils";

const icons = {
  "malicious-instructions": IconInstructions,
  "improper-access": IconAccess,
  "malicious-programs": IconPrograms,
  "untrusted-connections": IconConnections,
} as const;

type RiskId = (typeof skillSecurityRisks.items)[number]["id"];

export function SecurityRiskExplorer() {
  const data = skillSecurityRisks;
  const [selected, setSelected] = useState<RiskId>(data.items[0].id);
  const active = data.items.find((item) => item.id === selected) ?? data.items[0];

  return (
    <GuideSection id={data.id} title={data.title}>
      <GuideCopy>
        {data.intro.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </GuideCopy>

      <div className="skills-lesson__demo skill-sec-scene overflow-hidden rounded-[1.25rem] bg-[color-mix(in_srgb,var(--surface-soft)_80%,white)] p-3 sm:p-4">
        <RiskScene active={selected} />
      </div>

      <div className="skills-lesson__split">
        <div
          role="radiogroup"
          aria-label={data.title}
          className="grid gap-2 sm:grid-cols-2 lg:grid-cols-1"
        >
          {data.items.map((item) => {
            const Icon = icons[item.id];
            const isActive = selected === item.id;
            return (
              <button
                key={item.id}
                type="button"
                role="radio"
                aria-checked={isActive}
                onClick={() => setSelected(item.id)}
                className={cn(
                  "skill-sec-option flex min-h-12 items-center gap-3 rounded-[calc(var(--radius-module)-0.25rem)] border border-transparent px-3 py-2.5 text-left text-[length:var(--body)] font-semibold text-brand hover:bg-surface-soft focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-violet",
                  isActive && `${learnControlActiveClass} border-brand/25`,
                )}
              >
                <Icon />
                <span>{item.title}</span>
              </button>
            );
          })}
        </div>

        <div
          key={active.id}
          className="space-y-3"
          aria-live="polite"
        >
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
        </div>
      </div>

      <GuideCallout>{data.closing}</GuideCallout>
      <p className="max-w-[68ch] text-sm leading-[1.55] text-muted">
        {data.relatedNote}
      </p>
    </GuideSection>
  );
}
