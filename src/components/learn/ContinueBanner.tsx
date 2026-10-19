"use client";

import { useSyncExternalStore } from "react";
import { learnUi } from "@/content/learn/es/ui";
import { readLearnProgress } from "@/lib/learn/progress";

function subscribe(): () => void {
  return () => {};
}

function readClientProgress(slug: string, sceneKey: string): string | null {
  try {
    return readLearnProgress(window.localStorage, slug, sceneKey.split("\n"));
  } catch {
    return null;
  }
}

export function ContinueBanner({
  slug,
  sceneIds,
}: {
  slug: string;
  sceneIds: readonly string[];
}) {
  const sceneKey = sceneIds.join("\n");
  const stored = useSyncExternalStore(
    subscribe,
    () => readClientProgress(slug, sceneKey),
    () => null,
  );
  const sceneId = stored && stored !== sceneIds[0] ? stored : null;

  if (!sceneId) return null;

  return (
    <p className="mt-6">
      <a href={`#${sceneId}`} className="prose-link font-semibold">
        {learnUi.continueLabel}
      </a>
    </p>
  );
}
