"use client";

import { useEffect, useState } from "react";
import { learnControlActiveClass } from "@/components/learn/controlClass";
import {
  GuideCopy,
  GuideSection,
} from "@/components/learn/skill-security/guideChrome";
import {
  IconAccess,
  IconAnalysis,
  IconContents,
  IconOrigin,
} from "@/components/learn/skill-security/icons";
import {
  skillSecurityBeforeInstall,
  skillSecurityUi,
} from "@/content/learn/es/skill-security";
import { cn } from "@/lib/utils";

const stepIcons = {
  origin: IconOrigin,
  contents: IconContents,
  access: IconAccess,
  analysis: IconAnalysis,
} as const;

type StepId = (typeof skillSecurityBeforeInstall.items)[number]["id"];

function ReviewVisual({
  stepId,
  skillMdOpen,
  onToggleSkillMd,
}: {
  stepId: StepId;
  skillMdOpen: boolean;
  onToggleSkillMd: () => void;
}) {
  if (stepId === "contents") {
    return (
      <div className="rounded-[1.25rem] bg-[color-mix(in_srgb,var(--surface-soft)_85%,white)] p-5">
        <p className="text-sm leading-relaxed text-muted">
          {skillSecurityUi.structureCaption}
        </p>
        <ul className="mt-4 space-y-2">
          <li>
            <button
              type="button"
              aria-pressed={skillMdOpen}
              onClick={onToggleSkillMd}
              className={cn(
                "skill-sec-option flex min-h-11 w-full items-center rounded-[0.9rem] border border-transparent bg-surface px-3 text-left text-sm font-semibold text-brand hover:border-brand/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-violet",
                skillMdOpen && `${learnControlActiveClass} border-brand/30`,
              )}
            >
              {skillSecurityUi.selectSkillMd}
            </button>
          </li>
          <li className="rounded-[0.9rem] bg-surface px-3 py-2.5 text-sm font-semibold text-muted">
            references/
          </li>
          <li className="rounded-[0.9rem] bg-surface px-3 py-2.5 text-sm font-semibold text-muted">
            scripts/
          </li>
        </ul>
      </div>
    );
  }

  return (
    <svg
      viewBox="0 0 360 260"
      aria-hidden="true"
      className="block h-auto w-full"
    >
      <rect
        width="360"
        height="260"
        rx="24"
        fill="color-mix(in srgb, var(--surface-soft) 85%, white)"
      />
      {stepId === "origin" ? (
        <>
          <circle cx="110" cy="120" r="36" fill="var(--surface)" stroke="var(--brand)" strokeWidth="2" />
          <rect x="170" y="78" width="130" height="90" rx="18" fill="var(--surface)" stroke="var(--brand)" strokeWidth="2" />
          <path d="M146 120 H170" stroke="var(--brand)" strokeWidth="2" strokeDasharray="5 5" />
          <rect x="190" y="104" width="90" height="8" rx="4" fill="var(--border-strong)" />
          <rect x="190" y="124" width="70" height="8" rx="4" fill="var(--border-strong)" />
        </>
      ) : null}
      {stepId === "access" ? (
        <>
          <rect x="56" y="70" width="100" height="120" rx="20" fill="var(--surface)" stroke="var(--brand)" strokeWidth="2" />
          <rect x="190" y="62" width="54" height="68" rx="10" fill="var(--surface)" stroke="var(--brand)" strokeWidth="1.75" />
          <rect x="258" y="62" width="54" height="68" rx="10" fill="var(--surface)" stroke="var(--brand)" strokeWidth="1.75" />
          <circle cx="251" cy="180" r="28" fill="var(--surface)" stroke="var(--brand)" strokeWidth="1.75" />
          <path d="M156 120 H190M156 150 H223" stroke="var(--brand)" strokeWidth="2" strokeDasharray="5 5" />
        </>
      ) : null}
      {stepId === "analysis" ? (
        <>
          <rect x="70" y="50" width="220" height="160" rx="20" fill="var(--surface)" stroke="var(--brand)" strokeWidth="2" />
          <rect x="98" y="84" width="120" height="10" rx="5" fill="var(--accent-violet)" opacity="0.45" />
          <rect x="98" y="112" width="164" height="8" rx="4" fill="var(--border-strong)" />
          <rect x="98" y="136" width="148" height="8" rx="4" fill="var(--border-strong)" />
          <rect x="98" y="160" width="96" height="8" rx="4" fill="var(--border-strong)" />
        </>
      ) : null}
    </svg>
  );
}

export function SkillReviewSteps() {
  const data = skillSecurityBeforeInstall;
  const [active, setActive] = useState<StepId>(data.items[0].id);
  const [skillMdOpen, setSkillMdOpen] = useState(false);

  useEffect(() => {
    const nodes = data.items
      .map((item) => document.getElementById(`check-${item.id}`))
      .filter((node): node is HTMLElement => Boolean(node));
    if (!nodes.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              Math.abs(a.boundingClientRect.top) -
              Math.abs(b.boundingClientRect.top),
          );
        const id = visible[0]?.target.id.replace(/^check-/, "") as StepId | undefined;
        if (id) setActive(id);
      },
      { rootMargin: "-30% 0px -45% 0px", threshold: [0.2, 0.5] },
    );

    for (const node of nodes) observer.observe(node);
    return () => observer.disconnect();
  }, [data.items]);

  return (
    <GuideSection id={data.id} title={data.title}>
      <GuideCopy>
        {data.intro.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </GuideCopy>

      <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(15rem,0.95fr)] lg:gap-10">
        <div className="space-y-10">
          {data.items.map((item) => {
            const Icon = stepIcons[item.id];
            const isActive = active === item.id;
            return (
              <article
                key={item.id}
                id={`check-${item.id}`}
                className={cn(
                  "scroll-mt-28 border-l-2 pl-5 transition-colors duration-200",
                  isActive ? "border-accent-violet" : "border-border",
                )}
              >
                <button
                  type="button"
                  onClick={() => {
                    setActive(item.id);
                    setSkillMdOpen(false);
                    document
                      .getElementById(`check-${item.id}`)
                      ?.scrollIntoView({ behavior: "smooth", block: "start" });
                  }}
                  className="flex min-h-11 items-center gap-3 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-violet"
                >
                  <span
                    className={cn(
                      "inline-flex size-9 items-center justify-center rounded-full",
                      isActive
                        ? "bg-accent-violet/15 text-accent-violet"
                        : "bg-surface-soft text-brand",
                    )}
                  >
                    <Icon />
                  </span>
                  <h3 className="font-display text-[length:var(--heading-3)] text-brand">
                    {item.title}
                  </h3>
                </button>
                <div className="mt-4 space-y-3 lg:hidden">
                  <ReviewVisual
                    stepId={item.id}
                    skillMdOpen={skillMdOpen && item.id === "contents"}
                    onToggleSkillMd={() => setSkillMdOpen((value) => !value)}
                  />
                </div>
                <div className="mt-4 space-y-3">
                  {item.paragraphs.map((paragraph) => (
                    <p
                      key={paragraph}
                      className={cn(
                        "max-w-[40rem] text-[length:var(--body)] leading-relaxed text-muted",
                        item.id === "contents" &&
                          skillMdOpen &&
                          active === "contents" &&
                          paragraph.includes("SKILL.md") &&
                          "rounded-[0.9rem] bg-[color-mix(in_srgb,var(--accent-yellow)_18%,var(--surface))] px-3 py-2 text-foreground",
                      )}
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
                {"warning" in item && item.warning ? (
                  <p className="mt-4 max-w-[40rem] text-[length:var(--body)] font-semibold leading-relaxed text-brand">
                    {item.warning}
                  </p>
                ) : null}
              </article>
            );
          })}
        </div>

        <div className="sticky top-28 hidden lg:block">
          <ReviewVisual
            stepId={active}
            skillMdOpen={skillMdOpen && active === "contents"}
            onToggleSkillMd={() => setSkillMdOpen((value) => !value)}
          />
        </div>
      </div>
    </GuideSection>
  );
}
