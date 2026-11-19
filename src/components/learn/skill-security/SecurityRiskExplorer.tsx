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

      <div className="skill-sec-scene grid items-start gap-8 lg:grid-cols-[minmax(0,0.55fr)_minmax(0,0.45fr)] lg:gap-10">
        <div className="order-1 overflow-hidden rounded-[1.5rem] bg-[color-mix(in_srgb,var(--surface-soft)_80%,white)] p-3 sm:p-4">
          <RiskScene active={selected} />
        </div>

        <div className="order-2 space-y-4">
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
            className="space-y-3 border-t border-border/80 pt-5"
            aria-live="polite"
          >
            <h3 className="font-display text-[length:var(--heading-3)] text-brand">
              {active.title}
            </h3>
            {active.paragraphs.map((paragraph) => (
              <p
                key={paragraph}
                className="max-w-[40rem] text-[length:var(--body)] leading-relaxed text-muted"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>

      <GuideCallout>{data.closing}</GuideCallout>
      <p className="text-sm leading-relaxed text-muted">{data.relatedNote}</p>
    </GuideSection>
  );
}
