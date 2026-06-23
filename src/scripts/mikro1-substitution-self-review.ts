type SelfReviewModule = typeof import("../lib/mikro1-substitution-self-review");

function fieldsFor(form: HTMLFormElement): Map<string, string> {
  return new Map(
    Array.from(
      form.querySelectorAll<HTMLTextAreaElement>("[data-response-field-id]"),
      (field) => [field.dataset.responseFieldId ?? "", field.value],
    ),
  );
}

export function enhanceMikro1SubstitutionSelfReview(
  root: ParentNode = document,
): void {
  root
    .querySelectorAll<HTMLFormElement>("[data-substitution-self-review-form]")
    .forEach((form) => {
      const open = form.querySelector<HTMLButtonElement>(
        "[data-substitution-self-review-open]",
      );
      const close = form.querySelector<HTMLButtonElement>(
        "[data-substitution-self-review-close]",
      );
      const panel = form.querySelector<HTMLElement>(
        "[data-substitution-self-review-panel]",
      );
      const status = form.querySelector<HTMLElement>(
        "[data-substitution-self-review-status]",
      );
      const requiredIds = Array.from(
        form.querySelectorAll<HTMLTextAreaElement>("[data-response-field-id]"),
        (field) => field.dataset.responseFieldId ?? "",
      );
      const update = () => {
        if (open)
          open.disabled = !requiredIds.every((id) =>
            fieldsFor(form).get(id)?.trim(),
          );
      };
      open?.removeAttribute("hidden");
      close?.removeAttribute("hidden");
      update();
      form.addEventListener("input", update);
      form.addEventListener("submit", async (event) => {
        event.preventDefault();
        if (!open || open.disabled || !panel) return;
        const module: SelfReviewModule =
          await import("../lib/mikro1-substitution-self-review");
        const record = module.getMikro1SubstitutionSelfReviewRecord(
          form.dataset.exerciseId ?? "",
        );
        if (!record) return;
        form
          .querySelectorAll("[data-self-review-guidance-for]")
          .forEach((item) => item.remove());
        panel.replaceChildren();
        for (const item of record.fields) {
          const section = document.createElement("section");
          section.className = "static-practice-comparison";
          section.dataset.selfReviewGuidanceFor = item.fieldId;
          section.id = `${form.dataset.exerciseId}-${item.fieldId}-guidance`;
          const heading = document.createElement("h4");
          heading.textContent = "Modellbegründung";
          const note = document.createElement("p");
          note.textContent = item.guidance;
          section.append(heading, note);
          const field = form.querySelector<HTMLTextAreaElement>(
            `[data-response-field-id="${item.fieldId}"]`,
          );
          field?.closest(".static-practice-field")?.append(section);
          field?.setAttribute("aria-describedby", section.id);
        }
        const alternative = document.createElement("p");
        alternative.textContent =
          "Eine präzise, inhaltlich gleichwertige Begründung kann anders formuliert sein.";
        panel.append(alternative);
        if (close) panel.append(close);
        panel.hidden = false;
        open.setAttribute("aria-expanded", "true");
        if (status)
          status.textContent =
            "Vergleich geöffnet. Modellbegründungen stehen bei den jeweiligen Antwortfeldern.";
      });
      close?.addEventListener("click", () => {
        form
          .querySelectorAll("[data-self-review-guidance-for]")
          .forEach((item) => item.remove());
        if (panel) panel.hidden = true;
        open?.setAttribute("aria-expanded", "false");
        if (status) status.textContent = "Vergleich geschlossen.";
        open?.focus();
      });
    });
}
