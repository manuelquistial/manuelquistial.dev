import type { Project } from "@/data/projects";
import type { CSSProperties } from "react";

/** Frame the image with its intrinsic ratio so screenshots are not cropped. */
export function projectImageFrame(project: Project): {
  className: string;
  style?: CSSProperties;
} {
  if (project.imageWidth && project.imageHeight) {
    return {
      className: "relative w-full overflow-hidden bg-surface",
      style: {
        aspectRatio: `${project.imageWidth} / ${project.imageHeight}`,
      },
    };
  }

  return {
    className: "relative aspect-[4/3] w-full overflow-hidden bg-surface",
  };
}
