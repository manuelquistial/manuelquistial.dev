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

  useEffect(() => controller.subscribe(() => setSnapshot(controller.getSnapshot())), [controller]);

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
    const playing = snapshot.playing;
    const ended =
      wasPlayingRef.current &&
      !playing &&
      snapshot.duration > 0 &&
      snapshot.time >= snapshot.duration - 0.001;
    wasPlayingRef.current = playing;
    if (ended) apply("ended");
  }, [apply, snapshot.playing, snapshot.duration, snapshot.time]);

  useEffect(() => {
    if (!snapshot.playing || reducedMotion) return;
    let raf = 0;
    let last = performance.now();
    const loop = (now: number) => {
      if (document.hidden || reducedMotion) {
        apply("away");
        return;
      }
      const delta = Math.min(48, now - last);
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
    play: () => apply("play"),
    pause: () => apply("pause"),
    restart: () => apply("restart"),
    step: () => controller.step(),
    setSpeed: (speed: number) => controller.setSpeed(speed),
    reset: (nextStages: readonly StageBound[]) => {
      controller.reset(nextStages);
      sessionRef.current = initialPlaybackSession;
      if (primary && !reducedMotion) controller.play();
    },
    suspend: () => apply("suspend"),
    release: () => apply("release"),
  };
}
