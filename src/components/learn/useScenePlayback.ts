"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
  createPlaybackController,
  type PlaybackController,
  type PlaybackSnapshot,
  type StageBound,
} from "@/lib/learn/playback";
import {
  initialPlaybackSession,
  reducePlaybackSession,
  type PlaybackEvent,
  type PlaybackSession,
} from "@/lib/learn/presence";
import { usePrefersReducedMotion } from "@/components/learn/usePrefersReducedMotion";
import { usePrimaryFrame } from "@/components/learn/usePrimaryFrame";

function sameUi(a: PlaybackSnapshot, b: PlaybackSnapshot): boolean {
  return (
    a.playing === b.playing &&
    a.speed === b.speed &&
    a.stageIndex === b.stageIndex &&
    a.stageId === b.stageId &&
    a.stageCount === b.stageCount &&
    a.duration === b.duration &&
    a.stageStart === b.stageStart &&
    a.stageEnd === b.stageEnd
  );
}

export function useScenePlayback(
  stages: readonly StageBound[],
  temporal = true,
) {
  const reducedMotion = usePrefersReducedMotion();
  const [frameRef, primary] = usePrimaryFrame<HTMLDivElement>();
  const [controller] = useState<PlaybackController>(() =>
    createPlaybackController(stages),
  );
  const [snapshot, setSnapshot] = useState<PlaybackSnapshot>(() =>
    controller.getSnapshot(),
  );
  const sessionRef = useRef<PlaybackSession>(initialPlaybackSession);
  const wasPlayingRef = useRef(false);

  const apply = useCallback(
    (event: PlaybackEvent) => {
      const snapshotNow = controller.getSnapshot();
      const result = reducePlaybackSession(sessionRef.current, event, {
        primary,
        reducedMotion,
        wasPlaying: snapshotNow.playing,
      });
      sessionRef.current = result.session;

      if (result.command === "pause") controller.pause();
      if (result.command === "play") controller.play({ reducedMotion });
      if (result.command === "restart") controller.restart();
      if (result.command === "replay") {
        controller.restart();
        controller.play({ reducedMotion });
      }
    },
    [controller, primary, reducedMotion],
  );

  useEffect(() => {
    return controller.subscribe(() => {
      const next = controller.getSnapshot();
      setSnapshot((prev) => (sameUi(prev, next) ? prev : next));
    });
  }, [controller]);

  useEffect(() => {
    return controller.onFrame((next) => {
      const ended =
        wasPlayingRef.current &&
        !next.playing &&
        next.duration > 0 &&
        next.time >= next.duration - 0.001;
      wasPlayingRef.current = next.playing;
      if (ended) apply("ended");
    });
  }, [apply, controller]);

  useEffect(() => {
    if (!temporal) return;
    apply(primary && !document.hidden ? "primary" : "away");
  }, [apply, primary, reducedMotion, temporal]);

  useEffect(() => {
    if (!temporal) return;
    const onHide = () => apply(document.hidden || !primary ? "away" : "primary");
    document.addEventListener("visibilitychange", onHide);
    return () => document.removeEventListener("visibilitychange", onHide);
  }, [apply, primary, temporal]);

  useEffect(() => {
    if (!snapshot.playing || reducedMotion) return;
    let raf = 0;
    let last = performance.now();
    const loop = (now: number) => {
      if (document.hidden || reducedMotion) {
        apply("away");
        return;
      }
      const delta = Math.min(500, Math.max(0, now - last));
      last = now;
      if (!controller.frame(delta)) return;
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [apply, controller, reducedMotion, snapshot.playing]);

  useEffect(() => () => controller.pause(), [controller]);

  return {
    frameRef,
    primary,
    snapshot,
    reducedMotion,
    controller,
    canStep: snapshot.stageIndex < snapshot.stageCount - 1,
    canStepBack: snapshot.stageIndex > 0,
    play: () => apply("play"),
    pause: () => apply("pause"),
    restart: () => apply("restart"),
    step: () => {
      controller.step();
      apply("pause");
    },
    stepBack: () => {
      controller.stepBack();
      apply("pause");
    },
    seek: (index: number) => {
      controller.seek(index);
      apply("pause");
    },
    setSpeed: (speed: number) => controller.setSpeed(speed),
    reset: (nextStages: readonly StageBound[]) => {
      controller.reset(nextStages);
      sessionRef.current = {
        hold: "userPaused",
        suspended: false,
        resumeAfterSuspend: false,
      };
      setSnapshot(controller.getSnapshot());
    },
    suspend: () => apply("suspend"),
    release: () => apply("release"),
  };
}
