"use client";

import { useEffect, useRef, useState } from "react";
import { learnUi } from "@/content/learn/es/ui";
import { neuronsLesson } from "@/content/learn/es/neurons";
import { ChemicalSynapseArt, ElectricalSynapseArt, synapseAnchors } from "@/components/learn/illustrations/SynapseArt";
import { SceneStage, cardFor } from "@/components/learn/SceneStage";
import { useScenePlayback } from "@/components/learn/useScenePlayback";
import { progressWithinStage } from "@/lib/learn/playback";
import { synapseFrameVars, synapsePlaybackStages } from "@/lib/learn/physiology";

export function SynapseScene() {
  const scene = neuronsLesson.scenes[4];
  const [mode, setMode] = useState<"chemical" | "electrical">("chemical");
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const playback = useScenePlayback(synapsePlaybackStages(mode));
  const artRef = useRef<SVGSVGElement>(null);
  const stages = scene.stages?.filter((item) =>
    synapsePlaybackStages(mode).some((bound) => bound.id === item.id),
  );
  const labels = Object.fromEntries((scene.parts ?? []).map((part) => [part.id, part.label]));

  useEffect(() => {
    return playback.controller.onFrame((snapshot) => {
      const art = artRef.current;
      if (!art) return;
      const stages = synapsePlaybackStages(mode);
      const stage = stages.find((item) => item.id === snapshot.stageId);
      const vars = synapseFrameVars(mode, snapshot.stageId, progressWithinStage(snapshot.time, stage));

      if (mode === "chemical") {
        const release = Number(vars["--release"] ?? 0);
        const travel = Math.max(Number(vars["--diffuse"] ?? 0), Number(vars["--bind"] ?? 0));
        const calcium = Number(vars["--calcium"] ?? 0);
        art.querySelector(".learn-fusion-vesicle")?.setAttribute("transform", `translate(0 ${release * 16})`);
        art.querySelectorAll<SVGGElement>(".learn-calcium-channel").forEach((channel) => {
          const origin = channel.dataset.origin ?? "";
          const scale = 1 + calcium * 0.55;
          channel.setAttribute("transform", `${origin} scale(${scale} ${1 + calcium * 0.15})`);
        });
        art.querySelectorAll<SVGCircleElement>(".learn-nt-particle").forEach((dot) => {
          const homeX = Number(dot.dataset.homeX);
          const homeY = Number(dot.dataset.homeY);
          const targetX = Number(dot.dataset.targetX);
          const targetY = Number(dot.dataset.targetY);
          dot.setAttribute("cx", String(homeX + (targetX - homeX) * travel));
          dot.setAttribute("cy", String(homeY + (targetY - homeY) * travel));
          dot.style.opacity = String(Math.max(release * 0.35, travel));
        });
        return;
      }

      const current = Number(vars["--current"] ?? 0);
      art.querySelectorAll<SVGCircleElement>(".learn-junction-ion").forEach((dot, index) => {
        const home = Number(dot.dataset.homeY);
        const span = Number(dot.dataset.span ?? 72);
        dot.setAttribute("cy", String(home + current * (span + index * 6)));
        dot.style.opacity = String(current);
      });
    });
  }, [mode, playback.controller]);

  const switchMode = (next: "chemical" | "electrical") => {
    if (next === mode) return;
    setMode(next);
    setSelectedId(null);
    playback.reset(synapsePlaybackStages(next));
  };

  return (
    <SceneStage
      label={scene.textAlternative}
      playback={playback}
      stages={stages}
      card={cardFor(scene.parts, synapseAnchors, selectedId)}
      onClose={() => setSelectedId(null)}
      leading={
        <div className="px-3 pt-3">
          <div role="tablist" aria-label={learnUi.synapseModes} className="inline-flex rounded-full bg-surface-soft p-1">
            {(["chemical", "electrical"] as const).map((item) => {
              const selected = mode === item;
              return (
                <button
                  key={item}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  className={`min-h-11 rounded-full px-4 text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-foreground ${selected ? "bg-surface text-foreground shadow-sm" : "text-muted"}`}
                  onClick={() => switchMode(item)}
                >
                  {item === "chemical" ? learnUi.chemical : learnUi.electrical}
                </button>
              );
            })}
          </div>
        </div>
      }
    >
      {mode === "chemical" ? (
        <ChemicalSynapseArt
          ref={artRef}
          labels={labels}
          selectedId={selectedId}
          hintId="vesicles"
          onSelect={(id) => setSelectedId((current) => (current === id ? null : id))}
        />
      ) : (
        <ElectricalSynapseArt
          ref={artRef}
          labels={labels}
          selectedId={selectedId}
          hintId="junctions"
          onSelect={(id) => setSelectedId((current) => (current === id ? null : id))}
        />
      )}
    </SceneStage>
  );
}
