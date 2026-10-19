export type PlaybackHold = "follow" | "userPaused" | "done";

export type PlaybackSession = {
  hold: PlaybackHold;
  suspended: boolean;
  resumeAfterSuspend: boolean;
};

export type PlaybackEvent =
  | "primary"
  | "away"
  | "pause"
  | "play"
  | "restart"
  | "ended"
  | "suspend"
  | "release";

export type PlaybackCommand = "play" | "pause" | "restart" | "replay" | "none";

export const initialPlaybackSession: PlaybackSession = {
  hold: "follow",
  suspended: false,
  resumeAfterSuspend: false,
};

export function reducePlaybackSession(
  session: PlaybackSession,
  event: PlaybackEvent,
  context: { primary: boolean; reducedMotion: boolean; wasPlaying: boolean },
): { session: PlaybackSession; command: PlaybackCommand } {
  switch (event) {
    case "away":
      return { session, command: "pause" };
    case "primary":
      if (context.reducedMotion) {
        return { session, command: "pause" };
      }
      if (session.hold !== "follow" || session.suspended) {
        return { session, command: "none" };
      }
      return { session, command: "play" };
    case "pause":
      return {
        session: { ...session, hold: "userPaused", resumeAfterSuspend: false },
        command: "pause",
      };
    case "play":
      return {
        session: {
          ...session,
          hold: context.reducedMotion ? "userPaused" : "follow",
        },
        command: "play",
      };
    case "restart":
      return {
        session: {
          hold: "follow",
          suspended: false,
          resumeAfterSuspend: false,
        },
        command:
          context.primary && !context.reducedMotion ? "replay" : "restart",
      };
    case "ended":
      return {
        session: { ...session, hold: "done", resumeAfterSuspend: false },
        command: "none",
      };
    case "suspend":
      return {
        session: {
          ...session,
          suspended: true,
          resumeAfterSuspend: context.wasPlaying && session.hold === "follow",
        },
        command: "pause",
      };
    case "release": {
      const resume =
        session.resumeAfterSuspend &&
        session.hold === "follow" &&
        context.primary &&
        !context.reducedMotion;
      return {
        session: { ...session, suspended: false, resumeAfterSuspend: false },
        command: resume ? "play" : "none",
      };
    }
  }
}
