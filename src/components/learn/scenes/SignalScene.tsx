"use client";

import { useEffect, useRef } from "react";
import { learnArt } from "@/content/learn/art";
import { neuronsLesson } from "@/content/learn/es/neurons";
import { SceneStage } from "@/components/learn/SceneStage";
import { applyFrameVars } from "@/components/learn/applyFrameVars";
import { useScenePlayback } from "@/components/learn/useScenePlayback";
import { signalFrameVars, signalPlaybackStages } from "@/lib/learn/physiology";

export function SignalScene() {
  const scene = neuronsLesson.scenes[2];
  const playback = useScenePlayback(signalPlaybackStages());
  const overlayRef = useRef<HTMLDivElement>(null);
  const caption = scene.stages?.find((item) => item.id === playback.snapshot.stageId);

  useEffect(() => {
    return playback.controller.onFrame((snapshot) => {
      applyFrameVars(overlayRef.current, signalFrameVars(snapshot.time, snapshot.duration));
    });
  }, [playback.controller]);

  return (
    <SceneStage
      label={scene.textAlternative}
      src={learnArt.neuron}
      playback={playback}
      caption={caption}
      overlay={
        <div ref={overlayRef} className="learn-signal absolute inset-0">
          <span className="learn-pulse" style={{ top: "28%", left: "10%" }} />
          <span className="learn-pulse learn-pulse-2" style={{ top: "68%", left: "16%" }} />
          <span className="learn-pulse learn-pulse-3" style={{ top: "18%", left: "24%" }} />
          <span className="learn-soma-glow" />
          <span className="learn-threshold-glow" />
          <svg viewBox="0 0 100 56.3" className="absolute inset-0 h-full w-full" aria-hidden="true">
            <path className="learn-spike" d="M38 30 C 52 31, 70 29, 93 28" />
          </svg>
        </div>
      }
    />
  );
}
