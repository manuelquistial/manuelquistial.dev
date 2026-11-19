"use client";

import { LearnSidebarNav } from "@/components/learn/LearnSidebarNav";
import {
  skillSecurityNav,
  skillSecurityUi,
} from "@/content/learn/es/skill-security";

export function SkillSecurityNav() {
  return (
    <LearnSidebarNav
      label={skillSecurityUi.sectionsLabel}
      items={skillSecurityNav}
    />
  );
}
