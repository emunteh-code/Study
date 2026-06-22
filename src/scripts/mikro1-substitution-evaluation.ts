type EvaluationModule = typeof import("../lib/mikro1-substitution-evaluation");

const feedback = {
  incomplete: [
    "Antwort unvollständig",
    "Ergänze die erforderlichen Antwortangaben, bevor du prüfst.",
  ],
  malformed: [
    "Antwortformat ungültig",
    "Prüfe die Struktur oder das Format deiner Eingabe und versuche es erneut.",
  ],
  incorrect: [
    "Noch nicht richtig",
    "Die Antwort ist vollständig, erfüllt die Aufgabe aber noch nicht. Prüfe die Begriffe und Angaben erneut.",
  ],
  correct: ["Antwort geprüft", "Die eingereichte Antwort erfüllt die Aufgabe."],
} as const;

function renderFeedback(
  form: HTMLFormElement,
  state: keyof typeof feedback,
): void {
  const region = form.querySelector<HTMLElement>(
    "[data-substitution-evaluation-feedback]",
  );
  const heading = form.querySelector<HTMLElement>(
    "[data-substitution-feedback-heading]",
  );
  const text = form.querySelector<HTMLElement>(
    "[data-substitution-feedback-text]",
  );
  if (!region || !heading || !text) return;
  const [title, message] = feedback[state];
  region.hidden = false;
  heading.textContent = title;
  text.textContent = message;
}

function responseFor(
  form: HTMLFormElement,
): string | readonly string[] | undefined {
  const text = form.querySelector<HTMLInputElement>("input[type='text']");
  if (text) return text.value;
  const checked = Array.from(
    form.querySelectorAll<HTMLInputElement>("input:checked"),
    (input) => input.value,
  );
  return checked;
}

function isComplete(form: HTMLFormElement): boolean {
  return (
    form.checkValidity() &&
    (!form.querySelector("input[type='checkbox']") ||
      form.querySelectorAll("input[type='checkbox']:checked").length > 0)
  );
}

export function enhanceMikro1SubstitutionEvaluation(
  root: ParentNode = document,
): void {
  root
    .querySelectorAll<HTMLFormElement>("[data-substitution-evaluation-form]")
    .forEach((form) => {
      const submit = form.querySelector<HTMLButtonElement>(
        "[data-substitution-evaluation-submit]",
      );
      const update = () => {
        if (submit) submit.disabled = !isComplete(form);
      };
      update();
      form.addEventListener("input", update);
      form.addEventListener("change", update);
      form.addEventListener("submit", async (event) => {
        event.preventDefault();
        const id = form.dataset.exerciseId;
        if (
          !id ||
          !submit ||
          submit.disabled ||
          form.dataset.evaluating === "true"
        ) {
          if (!isComplete(form)) renderFeedback(form, "incomplete");
          return;
        }
        submit.disabled = true;
        form.dataset.evaluating = "true";
        try {
          const module: EvaluationModule =
            await import("../lib/mikro1-substitution-evaluation");
          renderFeedback(
            form,
            module.evaluateMikro1SubstitutionResponse(id, responseFor(form))
              .status,
          );
        } catch {
          renderFeedback(form, "malformed");
        } finally {
          delete form.dataset.evaluating;
          update();
        }
      });
    });
}
