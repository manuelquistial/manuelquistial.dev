"use client";

import { useEffect } from "react";
import { writeLearnProgress } from "@/lib/learn/progress";

export function SceneProgressTracker({
  slug,
  sceneIds,
}: {
  slug: string;
  sceneIds: readonly string[];
}) {
  useEffect(() => {
    const elements = sceneIds
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => Boolean(element));
    if (elements.length === 0 || typeof IntersectionObserver === "undefined") {
      return;
    }

    const ratios = new Map<string, number>();
    let current = "";
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          ratios.set(entry.target.id, entry.isIntersecting ? entry.intersectionRatio : 0);
        }
        let bestId = "";
        let bestRatio = 0;
        for (const [id, ratio] of ratios) {
          if (ratio > bestRatio) {
            bestRatio = ratio;
            bestId = id;
          }
        }
        if (!bestId || bestId === current) return;
        current = bestId;
        try {
          writeLearnProgress(window.localStorage, { slug, sceneId: bestId });
        } catch {
          // Storage can be unavailable in private mode.
        }
      },
      { threshold: [0.2, 0.45, 0.7] },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [sceneIds, slug]);

  return null;
}
