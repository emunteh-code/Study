type PracticeDataModule = typeof import("../data/mikro1-preferences-practice");
import type { Mikro1PreferenceExercise } from "../lib/mikro1-preferences-practice";

const formSelector = "[data-mikro1-self-review-form]";

function requiredResponsesComplete(form: HTMLFormElement): boolean {
  return (
    Array.from(
      form.querySelectorAll<HTMLTextAreaElement>("textarea[required]"),
    ).every((field) => field.value.trim().length > 0) && form.checkValidity()
  );
}

function setFeedback(
  form: HTMLFormElement,
  heading: string,
  text: string,
): void {
  const feedback = form.querySelector<HTMLElement>(
    "[data-self-review-feedback]",
  );
  const feedbackHeading = form.querySelector<HTMLElement>(
    "[data-self-review-feedback-heading]",
  );
  const feedbackText = form.querySelector<HTMLElement>(
    "[data-self-review-feedback-text]",
  );
  if (!feedback || !feedbackHeading || !feedbackText) return;
  feedback.hidden = false;
  feedbackHeading.textContent = heading;
  feedbackText.textContent = text;
}

function clearFeedback(form: HTMLFormElement): void {
  const feedback = form.querySelector<HTMLElement>(
    "[data-self-review-feedback]",
  );
  if (feedback) feedback.hidden = true;
}

function renderComparison(
  form: HTMLFormElement,
  exercise: Mikro1PreferenceExercise,
): void {
  const panel = form.querySelector<HTMLElement>("[data-self-review-panel]");
  const content = form.querySelector<HTMLElement>("[data-self-review-content]");
  const review = exercise.selfReviewMetadata;
  if (!panel || !content || !review) return;
  content.replaceChildren();
  const summary = document.createElement("p");
  summary.textContent = `Model basis: ${review.modelSummary}`;
  content.append(summary);
  const list = document.createElement("dl");
  for (const comparison of review.comparisons) {
    const field =
      form.querySelector<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >(`[data-response-field-id="${comparison.responseFieldId}"]:checked`) ??
      form.querySelector<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >(`[data-response-field-id="${comparison.responseFieldId}"]`);
    const term = document.createElement("dt");
    term.textContent = comparison.responseFieldId;
    const learner = document.createElement("dd");
    learner.textContent = `Your response: ${field?.value ?? ""}`;
    const model = document.createElement("dd");
    model.textContent = `Model guidance: ${comparison.modelContent}`;
    list.append(term, learner, model);
  }
  content.append(list);
  panel.hidden = false;
  panel.focus();
}

export function enhanceMikro1PreferencesSelfReview(
  root: ParentNode = document,
): void {
  root.querySelectorAll<HTMLFormElement>(formSelector).forEach((form) => {
    const open = form.querySelector<HTMLButtonElement>(
      "[data-self-review-open]",
    );
    const close = form.querySelector<HTMLButtonElement>(
      "[data-self-review-close]",
    );
    const panel = form.querySelector<HTMLElement>("[data-self-review-panel]");
    const update = () => {
      if (open) open.disabled = !requiredResponsesComplete(form);
    };
    update();
    form.addEventListener("input", () => {
      clearFeedback(form);
      update();
    });
    form.addEventListener("change", () => {
      clearFeedback(form);
      update();
    });
    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      if (!requiredResponsesComplete(form)) {
        setFeedback(
          form,
          "Incomplete response",
          "Complete every required response before comparing with the model solution.",
        );
        update();
        return;
      }
      const exerciseId = form.dataset.exerciseId;
      const dataModule: PracticeDataModule =
        await import("../data/mikro1-preferences-practice");
      const exercise = dataModule.mikro1PreferencesPracticeExercises.find(
        (item) => item.id === exerciseId,
      );
      if (!exercise?.selfReviewMetadata) return;
      renderComparison(form, exercise);
      window.dispatchEvent(
        new CustomEvent("mikro1-practice-completed", {
          detail: { exerciseId },
        }),
      );
      setFeedback(
        form,
        "Comparison opened",
        "Compare your reasoning with the approved model guidance, then revise your response if needed.",
      );
    });
    close?.addEventListener("click", () => {
      if (panel) panel.hidden = true;
      open?.focus();
    });
  });
}
