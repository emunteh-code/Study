const storageKey = "study.mikro1.preference-practice.completion";
const version = 1;

interface CompletionState {
  version: number;
  completed: string[];
}

export const mikro1PreferenceCompletionStorageKey = storageKey;

export function loadMikro1PreferenceCompletionState(
  raw: string | null,
  validIds: Set<string>,
): CompletionState {
  try {
    if (!raw) return { version, completed: [] };
    const parsed: unknown = JSON.parse(raw);
    if (
      !parsed ||
      typeof parsed !== "object" ||
      (parsed as CompletionState).version !== version ||
      !Array.isArray((parsed as CompletionState).completed)
    ) {
      return { version, completed: [] };
    }
    const completed = (parsed as CompletionState).completed;
    if (
      completed.some((id) => typeof id !== "string" || !validIds.has(id)) ||
      new Set(completed).size !== completed.length
    )
      return { version, completed: [] };
    return { version, completed };
  } catch {
    return { version, completed: [] };
  }
}

function saveState(state: CompletionState): void {
  try {
    window.localStorage.setItem(storageKey, JSON.stringify(state));
  } catch {
    // Local progress is optional; unavailable storage must not break practice.
  }
}

export function enhanceMikro1PreferencesProgress(
  root: ParentNode = document,
): void {
  const summary = root.querySelector<HTMLElement>("[data-practice-progress]");
  if (!summary) return;
  const exercises = Array.from(
    root.querySelectorAll<HTMLElement>(".static-practice-exercise[id]"),
  );
  const ids = exercises.map((exercise) => exercise.id);
  const validIds = new Set(ids);
  let state = loadMikro1PreferenceCompletionState(
    (() => {
      try {
        return window.localStorage.getItem(storageKey);
      } catch {
        return null;
      }
    })(),
    validIds,
  );
  const text = summary.querySelector<HTMLElement>(
    "[data-practice-progress-summary]",
  );
  const remaining = summary.querySelector<HTMLElement>(
    "[data-practice-progress-remaining]",
  );
  const mapLinks = Array.from(
    root.querySelectorAll<HTMLAnchorElement>("[data-practice-map-link]"),
  );
  const render = () => {
    summary.hidden = false;
    if (text)
      text.textContent = `${state.completed.length} of ${ids.length} exercises completed through an attempt or self-review.`;
    if (remaining) {
      remaining.replaceChildren();
      for (const exercise of exercises.filter(
        (item) => !state.completed.includes(item.id),
      )) {
        const item = document.createElement("li");
        item.textContent =
          exercise.querySelector("h2")?.textContent ?? exercise.id;
        remaining.append(item);
      }
    }
    for (const link of mapLinks) {
      const exerciseId = link.dataset.practiceMapLink;
      const exercisePosition = ids.indexOf(exerciseId ?? "") + 1;
      const completed = Boolean(
        exerciseId && state.completed.includes(exerciseId),
      );
      link.dataset.completionState = completed ? "completed" : "not-completed";
      link.setAttribute(
        "aria-label",
        `Exercise ${exercisePosition}, ${completed ? "Completed" : "Not completed"}`,
      );
      let marker = link.querySelector<HTMLElement>(
        "[data-practice-map-marker]",
      );
      if (!marker) {
        marker = document.createElement("span");
        marker.dataset.practiceMapMarker = "";
        marker.setAttribute("aria-hidden", "true");
        link.append(marker);
      }
      marker.textContent = completed ? "Done" : "To do";
    }
  };
  render();
  window.addEventListener("mikro1-practice-completed", (event) => {
    const id = (event as CustomEvent<{ exerciseId?: string }>).detail
      ?.exerciseId;
    if (!id || !validIds.has(id) || state.completed.includes(id)) return;
    state = { version, completed: [...state.completed, id] };
    saveState(state);
    render();
  });
  const reset = summary.querySelector<HTMLButtonElement>(
    "[data-practice-progress-reset]",
  );
  reset?.addEventListener("click", () => {
    if (!window.confirm("Reset local completion for this practice set?")) {
      reset.focus();
      return;
    }
    state = { version, completed: [] };
    try {
      window.localStorage.removeItem(storageKey);
    } catch {
      // Clearing optional local progress must not interrupt practice.
    }
    render();
    reset.focus();
  });
}
