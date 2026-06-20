type EvaluationModule = typeof import("../lib/mikro1-preferences-evaluation");
type PracticeDataModule = typeof import("../data/mikro1-preferences-practice");

const formSelector = "[data-mikro1-evaluation-form]";

function isStructurallyComplete(form: HTMLFormElement): boolean {
  return form.checkValidity();
}

function setFeedback(
  form: HTMLFormElement,
  heading: string,
  explanation: string,
): void {
  const feedback = form.querySelector<HTMLElement>(
    "[data-evaluation-feedback]",
  );
  const feedbackHeading = form.querySelector<HTMLElement>(
    "[data-evaluation-feedback-heading]",
  );
  const feedbackText = form.querySelector<HTMLElement>(
    "[data-evaluation-feedback-text]",
  );

  if (!feedback || !feedbackHeading || !feedbackText) {
    return;
  }

  feedback.hidden = false;
  feedbackHeading.textContent = heading;
  feedbackText.textContent = explanation;
}

function clearFeedback(form: HTMLFormElement): void {
  const feedback = form.querySelector<HTMLElement>(
    "[data-evaluation-feedback]",
  );

  if (feedback) {
    feedback.hidden = true;
  }
}

function updateSubmitState(form: HTMLFormElement): void {
  const submit = form.querySelector<HTMLButtonElement>(
    "[data-evaluation-submit]",
  );

  if (submit && form.dataset.submitting !== "true") {
    const isComplete = isStructurallyComplete(form);
    submit.disabled = !isComplete;

    if (form.dataset.submitted === "true" && isComplete) {
      submit.setAttribute("aria-disabled", "true");
    } else {
      submit.removeAttribute("aria-disabled");
    }
  }
}

function selectedOptionId(form: HTMLFormElement): string | undefined {
  return form.querySelector<HTMLInputElement>('input[type="radio"]:checked')
    ?.value;
}

function classificationResponse(form: HTMLFormElement) {
  return Array.from(
    form.querySelectorAll<HTMLSelectElement>("select[data-response-field-id]"),
    (field) => ({
      itemId: field.dataset.responseFieldId ?? "",
      classificationId: field.value,
    }),
  );
}

async function evaluateSubmission(form: HTMLFormElement): Promise<void> {
  const exerciseId = form.dataset.exerciseId;

  if (!exerciseId) {
    return;
  }

  const [evaluationModule, dataModule]: [EvaluationModule, PracticeDataModule] =
    await Promise.all([
      import("../lib/mikro1-preferences-evaluation"),
      import("../data/mikro1-preferences-practice"),
    ]);
  const exercise = dataModule.mikro1PreferencesPracticeExercises.find(
    (candidate) => candidate.id === exerciseId,
  );

  if (!exercise) {
    throw new Error(`Unknown practice exercise: ${exerciseId}.`);
  }

  const classifications = classificationResponse(form);
  const selectedOption = selectedOptionId(form);
  const result = evaluationModule.mikro1PreferenceEvaluator.evaluate(
    exercise,
    classifications.length > 0
      ? {
          kind: "classification",
          classifications,
          requiredFieldsComplete: isStructurallyComplete(form),
        }
      : {
          kind: "selection",
          ...(selectedOption ? { selectedOptionId: selectedOption } : {}),
          requiredFieldsComplete: isStructurallyComplete(form),
        },
  );

  setFeedback(form, result.feedback.heading, result.feedback.explanation);
}

export function enhanceMikro1PreferencesEvaluation(
  root: ParentNode = document,
): void {
  root.querySelectorAll<HTMLFormElement>(formSelector).forEach((form) => {
    updateSubmitState(form);

    form.addEventListener("input", () => {
      delete form.dataset.submitted;
      clearFeedback(form);
      updateSubmitState(form);
    });
    form.addEventListener("change", () => {
      delete form.dataset.submitted;
      clearFeedback(form);
      updateSubmitState(form);
    });
    form.addEventListener("keydown", () => {
      queueMicrotask(() => updateSubmitState(form));
    });
    form.addEventListener("keyup", () => {
      updateSubmitState(form);
    });
    form.addEventListener("submit", async (event) => {
      event.preventDefault();

      if (
        form.dataset.submitting === "true" ||
        form.dataset.submitted === "true"
      ) {
        return;
      }

      if (!isStructurallyComplete(form)) {
        setFeedback(
          form,
          "Incomplete response",
          "Complete each required response before checking your answer.",
        );
        updateSubmitState(form);
        return;
      }

      const submit = form.querySelector<HTMLButtonElement>(
        "[data-evaluation-submit]",
      );
      form.dataset.submitting = "true";
      if (submit) {
        submit.setAttribute("aria-busy", "true");
      }

      try {
        await evaluateSubmission(form);
        form.dataset.submitted = "true";
      } catch {
        setFeedback(
          form,
          "Answer checking unavailable",
          "Your response is still available to revise. Please try checking it again.",
        );
      } finally {
        delete form.dataset.submitting;
        submit?.removeAttribute("aria-busy");
        updateSubmitState(form);
      }
    });
  });
}
