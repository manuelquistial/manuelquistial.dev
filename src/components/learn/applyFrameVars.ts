export function applyFrameVars(
  element: HTMLElement | null,
  vars: Record<string, string>,
  data: Record<string, string> = {},
) {
  if (!element) return;
  for (const [key, value] of Object.entries(vars)) {
    element.style.setProperty(key, value);
  }
  for (const [key, value] of Object.entries(data)) {
    element.dataset[key] = value;
  }
}
