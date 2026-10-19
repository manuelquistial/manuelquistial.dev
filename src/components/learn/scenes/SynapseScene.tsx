"use client";

import { useEffect, useRef, useState } from "react";
import { learnUi } from "@/content/learn/es/ui";
import { neuronsLesson } from "@/content/learn/es/neurons";
import {
  ChemicalSynapse,
  ElectricalSynapse,
} from "@/components/learn/illustrations/SynapseFigure";
import { LearnFrame } from "@/components/learn/LearnFrame";
import { PlaybackControls } from "@/components/learn/PlaybackControls";
import { StageCaption } from "@/components/learn/StageCaption";
import { applyFrameVars } from "@/components/learn/applyFrameVars";
import { useInView } from "@/components/learn/useInView";
import { useScenePlayback } from "@/components/learn/useScenePlayback";
import {
  learnControlActiveClass,
  learnControlClass,
} from "@/components/learn/controlClass";
import { cn } from "@/lib/utils";
import { progressWithinStage } from "@/lib/learn/playback";
import { synapseFrameVars, synapsePlaybackStages } from "@/lib/learn/physiology";

type SynapseMode = "chemical" | "electrical";

export function SynapseScene() {
  const scene = neuronsLesson.scenes[4];
  const [mode, setMode] = useState<SynapseMode>("chemical");
  const modeRef = useRef<SynapseMode>(mode);
  const [viewRef, inView] = useInView<HTMLDivElement>();
  const visualRef = useRef<HTMLDivElement>(null);
  const playback = useScenePlayback(synapsePlaybackStages("chemical"), inView);

  useEffect(() => {
    modeRef.current = mode;
  }, [mode]);

  useEffect(() => {
    return playback.controller.onFrame((snapshot) => {
      const stages = synapsePlaybackStages(modeRef.current);
      const stage = stages[snapshot.stageIndex];
      applyFrameVars(
        visualRef.current,
        synapseFrameVars(
          modeRef.current,
          snapshot.stageId,
          progressWithinStage(snapshot.time, stage),
        ),
      );
    });
  }, [playback.controller]);

  const choose = (next: SynapseMode) => {
    modeRef.current = next;
    setMode(next);
    playback.reset(synapsePlaybackStages(next));
  };

  return (
    <div ref={viewRef} className="flex flex-col gap-4">
      <div role="tablist" aria-label={learnUi.synapseModes} className="flex flex-wrap gap-2">
        {(
          [
            ["chemical", learnUi.chemical],
            ["electrical", learnUi.electrical],
          ] as const
        ).map(([value, label]) => (
          <button
            key={value}
            type="button"
            role="tab"
            id={`synapse-tab-${value}`}
            className={cn(learnControlClass, mode === value && learnControlActiveClass)}
            aria-selected={mode === value}
            onClick={() => choose(value)}
          >
            {label}
          </button>
        ))}
      </div>
      <div
        ref={visualRef}
        role="tabpanel"
        aria-labelledby={`synapse-tab-${mode}`}
      >
        <LearnFrame>
          {mode === "chemical" ? (
            <ChemicalSynapse label="Esquema de sinapsis química: terminal, hendidura, neurotransmisores y membrana postsináptica." />
          ) : (
            <ElectricalSynapse label="Esquema de sinapsis eléctrica: dos células unidas por uniones comunicantes, con paso directo de iones." />
          )}
        </LearnFrame>
      </div>
      <PlaybackControls
        playing={playback.snapshot.playing}
        speed={playback.snapshot.speed}
        canStep={playback.canStep}
        reducedMotion={playback.reducedMotion}
        onPlay={playback.play}
        onPause={playback.pause}
        onRestart={playback.restart}
        onStep={playback.step}
        onSpeed={playback.setSpeed}
      />
      <StageCaption stages={scene.stages} stageId={playback.snapshot.stageId} />
    </div>
  );
}
