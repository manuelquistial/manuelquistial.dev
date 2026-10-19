export type LearnProgress = {
  slug: string;
  sceneId: string;
};

const STORAGE_KEY = "manuelquistial:aprendamos:last-scene";

type ProgressStorage = Pick<Storage, "getItem" | "setItem">;

export function readLearnProgress(
  storage: Pick<Storage, "getItem"> | null,
  slug: string,
  validIds: readonly string[],
): string | null {
  if (!storage) return null;

  try {
    const raw = storage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Partial<LearnProgress>;
    if (parsed.slug !== slug || typeof parsed.sceneId !== "string") return null;
    return validIds.includes(parsed.sceneId) ? parsed.sceneId : null;
  } catch {
    return null;
  }
}

export function writeLearnProgress(
  storage: ProgressStorage | null,
  progress: LearnProgress,
): boolean {
  if (!storage) return false;

  try {
    storage.setItem(STORAGE_KEY, JSON.stringify(progress));
    return true;
  } catch {
    return false;
  }
}
