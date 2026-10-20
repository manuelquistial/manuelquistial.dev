export type StageBound = {
  id: string;
  start: number;
  end: number;
};

export type PlaybackSnapshot = {
  time: number;
  duration: number;
  playing: boolean;
  speed: number;
  stageIndex: number;
  stageId: string;
  stageCount: number;
  stageStart: number;
  stageEnd: number;
};

export const PLAYBACK_SPEEDS = [0.5, 1, 1.5] as const;

export function clampUnit(value: number, max = 1): number {
  if (!Number.isFinite(value)) return 0;
  return Math.min(max, Math.max(0, value));
}

export function stageIndexAt(
  time: number,
  stages: readonly StageBound[],
): number {
  if (stages.length === 0) return 0;
  const duration = stages[stages.length - 1]?.end ?? 0;
  const safe = clampUnit(time, duration);

  for (let index = 0; index < stages.length; index += 1) {
    const stage = stages[index];
    const last = index === stages.length - 1;
    if (safe >= stage.start && (safe < stage.end || last)) return index;
  }

  return 0;
}

export function createSnapshot(
  stages: readonly StageBound[],
  speed = 1,
): PlaybackSnapshot {
  const duration = stages.length > 0 ? stages[stages.length - 1].end : 0;
  return {
    time: 0,
    duration,
    playing: false,
    speed,
    stageIndex: 0,
    stageId: stages[0]?.id ?? "",
    stageCount: stages.length,
    stageStart: stages[0]?.start ?? 0,
    stageEnd: stages[0]?.end ?? 0,
  };
}

function withTime(
  snapshot: PlaybackSnapshot,
  time: number,
  stages: readonly StageBound[],
  playing: boolean,
): PlaybackSnapshot {
  const nextTime = clampUnit(time, snapshot.duration);
  const stageIndex = stageIndexAt(nextTime, stages);
  const stage = stages[stageIndex];
  return {
    ...snapshot,
    time: nextTime,
    playing,
    stageIndex,
    stageId: stage?.id ?? snapshot.stageId,
    stageStart: stage?.start ?? 0,
    stageEnd: stage?.end ?? snapshot.duration,
  };
}

export function advancePlayback(
  snapshot: PlaybackSnapshot,
  deltaMs: number,
  stages: readonly StageBound[],
): PlaybackSnapshot {
  if (!snapshot.playing) return snapshot;
  const deltaSeconds = (Math.max(0, deltaMs) / 1000) * snapshot.speed;
  const nextTime = snapshot.time + deltaSeconds;
  if (nextTime >= snapshot.duration) {
    return withTime(snapshot, snapshot.duration, stages, false);
  }
  return withTime(snapshot, nextTime, stages, true);
}

export function stepPlayback(
  snapshot: PlaybackSnapshot,
  stages: readonly StageBound[],
): PlaybackSnapshot {
  const nextIndex = snapshot.stageIndex + 1;
  if (nextIndex >= stages.length) {
    return { ...snapshot, playing: false };
  }
  return withTime(snapshot, stages[nextIndex].start, stages, false);
}

export function stepBackPlayback(
  snapshot: PlaybackSnapshot,
  stages: readonly StageBound[],
): PlaybackSnapshot {
  const previous = snapshot.stageIndex - 1;
  if (previous < 0) return { ...snapshot, playing: false };
  return withTime(snapshot, stages[previous].start, stages, false);
}

export function seekPlayback(
  snapshot: PlaybackSnapshot,
  stages: readonly StageBound[],
  index: number,
): PlaybackSnapshot {
  if (stages.length === 0) return { ...snapshot, playing: false };
  const safe = Math.min(stages.length - 1, Math.max(0, Math.floor(index)));
  return withTime(snapshot, stages[safe].start, stages, false);
}

export function progressWithinStage(
  time: number,
  stage: StageBound | undefined,
): number {
  if (!stage) return 0;
  const span = stage.end - stage.start;
  if (span <= 0) return 0;
  return clampUnit((time - stage.start) / span);
}

export function scaleStages(
  stages: readonly { id: string; start: number; end: number }[],
  duration: number,
): StageBound[] {
  return stages.map((stage) => ({
    id: stage.id,
    start: stage.start * duration,
    end: stage.end * duration,
  }));
}

export type FrameListener = (snapshot: PlaybackSnapshot) => void;

export type PlaybackController = {
  getSnapshot: () => PlaybackSnapshot;
  subscribe: (listener: () => void) => () => void;
  onFrame: (listener: FrameListener) => () => void;
  play: (options?: { reducedMotion?: boolean }) => void;
  pause: () => void;
  restart: () => void;
  step: () => void;
  stepBack: () => void;
  seek: (index: number) => void;
  setSpeed: (speed: number) => void;
  reset: (stages: readonly StageBound[]) => void;
  frame: (deltaMs: number) => boolean;
};

export function createPlaybackController(
  stages: readonly StageBound[],
): PlaybackController {
  let stageList = stages;
  let snapshot = createSnapshot(stageList);
  let loopGeneration = 0;
  const listeners = new Set<() => void>();
  const frameListeners = new Set<FrameListener>();

  const emit = () => {
    listeners.forEach((listener) => listener());
  };

  const publishFrame = () => {
    frameListeners.forEach((listener) => listener(snapshot));
  };

  const replace = (next: PlaybackSnapshot) => {
    snapshot = next;
    publishFrame();
    emit();
  };

  return {
    getSnapshot: () => snapshot,
    subscribe: (listener) => {
      listeners.add(listener);
      return () => listeners.delete(listener);
    },
    onFrame: (listener) => {
      frameListeners.add(listener);
      listener(snapshot);
      return () => frameListeners.delete(listener);
    },
    play: (options) => {
      if (options?.reducedMotion) {
        loopGeneration += 1;
        replace(stepPlayback({ ...snapshot, playing: false }, stageList));
        return;
      }
      if (snapshot.playing) return;
      loopGeneration += 1;
      const atEnd =
        snapshot.duration > 0 && snapshot.time >= snapshot.duration;
      const base = atEnd
        ? withTime(snapshot, 0, stageList, false)
        : snapshot;
      replace({ ...base, playing: true });
    },
    pause: () => {
      if (!snapshot.playing) return;
      loopGeneration += 1;
      snapshot = { ...snapshot, playing: false };
      emit();
    },
    restart: () => {
      loopGeneration += 1;
      replace(createSnapshot(stageList, snapshot.speed));
    },
    step: () => {
      loopGeneration += 1;
      replace(stepPlayback({ ...snapshot, playing: false }, stageList));
    },
    stepBack: () => {
      loopGeneration += 1;
      replace(stepBackPlayback({ ...snapshot, playing: false }, stageList));
    },
    seek: (index) => {
      loopGeneration += 1;
      replace(seekPlayback({ ...snapshot, playing: false }, stageList, index));
    },
    setSpeed: (speed) => {
      if (!Number.isFinite(speed) || speed <= 0 || snapshot.speed === speed) {
        return;
      }
      snapshot = { ...snapshot, speed };
      emit();
    },
    reset: (nextStages) => {
      loopGeneration += 1;
      stageList = nextStages;
      replace(createSnapshot(stageList, snapshot.speed));
    },
    frame: (deltaMs) => {
      if (!snapshot.playing) return false;
      const generation = loopGeneration;
      const previousId = snapshot.stageId;
      const next = advancePlayback(snapshot, deltaMs, stageList);
      if (generation !== loopGeneration) return snapshot.playing;
      snapshot = next;
      publishFrame();
      if (generation !== loopGeneration) return snapshot.playing;
      if (snapshot.stageId !== previousId || !snapshot.playing) emit();
      return snapshot.playing;
    },
  };
}
