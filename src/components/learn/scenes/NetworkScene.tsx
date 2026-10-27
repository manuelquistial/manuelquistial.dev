"use client";

import { useEffect, useRef, useState } from "react";
import { learnUi } from "@/content/learn/es/ui";
import { getNeuronScene } from "@/content/learn/es/neurons";
import { NetworkArt, networkAnchors } from "@/components/learn/illustrations/NetworkArt";
import { SceneStage, cardFor } from "@/components/learn/SceneStage";
import { useScenePlayback } from "@/components/learn/useScenePlayback";
import { progressWithinStage } from "@/lib/learn/playback";
import { networkPlaybackStages, networkState } from "@/lib/learn/physiology";

const linkFor: Record<string, string> = {
  input: "ab",
  relay: "bc",
  split: "bd",
};

const localFor: Record<string, "n2" | "n3" | "n4" | null> = {
  input: "n2",
  relay: "n3",
  split: "n4",
};

export function NetworkScene() {
  const scene = getNeuronScene("red-neuronal");
  const playback = useScenePlayback(networkPlaybackStages());
  const rootRef = useRef<HTMLDivElement>(null);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const state = networkState(playback.snapshot.stageId);
  const labels = Object.fromEntries((scene.parts ?? []).map((part) => [part.id, part.label]));

  useEffect(() => {
    return playback.controller.onFrame((snapshot) => {
      const root = rootRef.current;
      if (!root) return;
      const bounds = networkPlaybackStages();
      const stage = bounds.find((item) => item.id === snapshot.stageId);
      const amount = progressWithinStage(snapshot.time, stage);
      const current = linkFor[snapshot.stageId];
      root.querySelectorAll<SVGPathElement>(".learn-link").forEach((path) => {
        const on = path.dataset.link === current;
        path.setAttribute("opacity", on ? "1" : "0");
        path.setAttribute("stroke-dashoffset", String(on ? 1 - Math.max(amount, 0.16) : 1));
      });
    });
  }, [playback.controller, playback.snapshot.stageId, playback.snapshot.time]);

  return (
    <SceneStage
      label={scene.textAlternative}
      playback={playback}
      stages={scene.stages}
      parts={scene.parts}
      card={cardFor(scene.parts, networkAnchors, selectedId)}
      onClose={() => setSelectedId(null)}
      legend={
        <ul className="flex flex-wrap gap-x-4 gap-y-1">
          <li className="learn-key-excitatory">{learnUi.excitatory}</li>
          <li className="learn-key-inhibitory">{learnUi.inhibitory}</li>
        </ul>
      }
    >
      <div ref={rootRef} className="relative">
        <NetworkArt
          active={state.active}
          inhibited={state.inhibited}
          local={localFor[playback.snapshot.stageId] ?? null}
          litLink={linkFor[playback.snapshot.stageId] ?? null}
          labels={labels}
          selectedId={selectedId}
          onSelect={(id) => setSelectedId((current) => (current === id ? null : id))}
        />
      </div>
    </SceneStage>
  );
}
