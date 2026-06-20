import type { ProjectStatus } from "@/data/projects";
import type { SiteContent } from "@/content";

export function getProjectStatusLabel(
  status: ProjectStatus,
  labels: SiteContent["projectStatus"],
): string {
  switch (status) {
    case "in-progress":
      return labels.inProgress;
    case "coming-soon":
      return labels.comingSoon;
    default:
      return labels[status];
  }
}

export function hasProjectLiveLink(
  liveUrl: string | undefined,
  status: ProjectStatus,
): boolean {
  return Boolean(liveUrl) && status !== "coming-soon";
}
