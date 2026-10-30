export function ScenePrompt({
  title,
  text,
}: {
  title?: string;
  text: string;
}) {
  return (
    <div className="border-b border-border bg-surface px-[var(--learn-panel-pad)] py-3">
      {title ? (
        <p className="text-sm font-semibold text-foreground">{title}</p>
      ) : null}
      <p
        className={`text-sm leading-relaxed text-muted ${title ? "mt-1" : ""}`}
      >
        {text}
      </p>
    </div>
  );
}
