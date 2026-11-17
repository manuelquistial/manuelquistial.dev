export function ScenePrompt({
  title,
  text,
}: {
  title?: string;
  text: string;
}) {
  return (
    <div className="border-b border-border bg-surface px-[var(--learn-panel-pad)] py-4">
      {title ? (
        <p className="text-overline text-muted">{title}</p>
      ) : null}
      <p
        className={`text-[length:var(--body)] leading-relaxed text-brand ${title ? "mt-1.5 font-semibold" : "font-semibold"}`}
      >
        {text}
      </p>
    </div>
  );
}
