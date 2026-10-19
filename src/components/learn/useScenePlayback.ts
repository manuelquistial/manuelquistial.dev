"use client";

import { useCallback, useEffect, useState } from "react";
import {
  createPlaybackController,
  type PlaybackController,
  type PlaybackSnapshot,
  type StageBound,
} from "@/lib/learn/playback";
import { usePrefersReducedMotion } from "@/components/learn/usePrefersReducedMotion";

export function useScenePlayback(stages: readonly StageBound[], visible = true) {
  const reducedMotion = usePrefersReducedMotion();
  const [controller] = useState<PlaybackController>(() =>
    createPlaybackController(stages),
  );
  const [snapshot, setSnapshot] = useState<PlaybackSnapshot>(() =>
    controller.getSnapshot(),
  );

  const cancelLoop = useCallback((rafId: { current: number | null }) => {
    if (rafId.current != null) {
      cancelAnimationFrame(rafId.current);
      rafId.current = null;
    }
  }, []);

  useEffect(() => {
    return controller.subscribe(() => {
      setSnapshot(controller.getSnapshot());
    });
  }, [controller]);

  useEffect(() => {
    const rafId = { current: null as number | null };

    if (!visible) {
      if (controller.getSnapshot().playing) controller.pause();
      return;
    }

    if (!snapshot.playing || reducedMotion) {
      if (reducedMotion && controller.getSnapshot().playing) controller.pause();
      return;
    }

    let last = performance.now();
    const loop = (now: number) => {
      if (document.hidden || reducedMotion) {
        controller.pause();
        rafId.current = null;
        return;
      }
      const delta = Math.min(48, now - last);
      last = now;
      const keepGoing = controller.frame(delta);
      if (!keepGoing) {
        rafId.current = null;
        return;
      }
      rafId.current = requestAnimationFrame(loop);
    };

    rafId.current = requestAnimationFrame(loop);
    return () => cancelLoop(rafId);
  }, [cancelLoop, controller, reducedMotion, snapshot.playing, visible]);

  useEffect(() => {
    return () => {
      controller.pause();
    };
  }, [controller]);

  return {
    snapshot,
    reducedMotion,
    controller,
    canStep: snapshot.stageIndex < snapshot.stageCount - 1,
    play: () => controller.play({ reducedMotion }),
    pause: () => controller.pause(),
    restart: () => controller.restart(),
    step: () => controller.step(),
    setSpeed: (speed: number) => controller.setSpeed(speed),
    reset: (nextStages: readonly StageBound[]) => controller.reset(nextStages),
  };
}
