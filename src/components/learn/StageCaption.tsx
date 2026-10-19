import type { LearnStageCopy } from "@/content/learn/types";

export function StageCaption({
  stages,
  stageId,
}: {
  stages: readonly LearnStageCopy[] | undefined;
  stageId: string;
}) {
  const stage = stages?.find((item) => item.id === stageId) ?? stages?.[0];
  if (!stage) return null;

  return (
    <p aria-live="polite" className="max-w-[65ch] text-sm font-medium leading-relaxed text-foreground">
      <span className="font-semibold">{stage.label}.</span> {stage.text}
    </p>
  );
}
