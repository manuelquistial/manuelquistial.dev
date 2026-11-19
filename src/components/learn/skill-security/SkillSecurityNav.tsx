"use client";

import { useEffect, useState } from "react";
import {
  skillSecurityNav,
  skillSecurityUi,
} from "@/content/learn/es/skill-security";
import { cn } from "@/lib/utils";

export function SkillSecurityNav() {
  const [active, setActive] = useState<string>(skillSecurityNav[0]?.id ?? "");

  useEffect(() => {
    const sections = skillSecurityNav
      .map((item) => document.getElementById(item.id))
      .filter((node): node is HTMLElement => Boolean(node));

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              Math.abs(a.boundingClientRect.top) -
              Math.abs(b.boundingClientRect.top),
          );
        if (visible[0]?.target.id) {
          setActive(visible[0].target.id);
        }
      },
      {
        rootMargin: "-20% 0px -55% 0px",
        threshold: [0, 0.2, 0.5],
      },
    );

    for (const section of sections) observer.observe(section);
    return () => observer.disconnect();
  }, []);

  const links = (
    <ol className="space-y-1">
      {skillSecurityNav.map((item) => (
        <li key={item.id}>
          <a
            href={`#${item.id}`}
            className={cn(
              "skill-sec-nav-link block rounded-[calc(var(--radius-module)-0.55rem)] px-2.5 py-2 text-[0.8125rem] leading-snug text-muted transition-colors duration-150 hover:bg-surface-soft hover:text-brand focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-violet",
              active === item.id && "font-semibold",
            )}
            aria-current={active === item.id ? "true" : undefined}
          >
            {item.title}
          </a>
        </li>
      ))}
    </ol>
  );

  return (
    <nav
      className="skills-lesson__sidebar skill-sec-nav"
      aria-label={skillSecurityUi.sectionsLabel}
    >
      <div className="hidden lg:block">
        <p className="text-overline text-muted">{skillSecurityUi.sectionsLabel}</p>
        <div className="mt-3">{links}</div>
      </div>

      <details className="gp-module border border-border bg-surface lg:hidden">
        <summary className="flex min-h-11 cursor-pointer items-center justify-between gap-3 px-4 py-2.5 text-sm font-semibold text-brand">
          <span>{skillSecurityUi.sectionsLabel}</span>
          <span aria-hidden="true" className="text-muted">
            +
          </span>
        </summary>
        <div className="border-t border-border px-2 py-2">{links}</div>
      </details>
    </nav>
  );
}
