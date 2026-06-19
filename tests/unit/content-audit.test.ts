import { describe, expect, it } from "vitest";

import {
  canTransitionAuditStatus,
  canUpdateRightsStatus,
  classifySourceFile,
  detectUnsafeArchiveEntryPaths,
  findPrivatePathLeaks,
  isAuditFilename,
  isRawBinaryAuditPath,
  isRightsStatus,
  isSanitisedSourceId,
  validateRepositoryAuditMarkdown,
  validateRequiredAuditSections,
} from "../../src/lib/content-audit";

const validAuditMarkdown = `# Makro2 Source Inventory

## Audit Identity

- Audit status: \`inventory-created\`

## Module Identity

Pilot module only.

## Audit Scope

Safe metadata only.

## Audit Status

- Current state: \`inventory-created\`

## Private-Source Location Reference

Private key only.

## Sanitised File Inventory

- Source ID: \`makro2-slides-01\`
- Rights status: \`unknown\`

## Source Classification

Not assessed yet.

## Semester Or Version Evidence

Not assessed yet.

## Lecturer Or Author Evidence

Not assessed yet.

## Proposed Topic Structure

Not assessed yet.

## Exercise And Solution Mapping

Not assessed yet.

## Formula And Definition Inventory

Not assessed yet.

## Graph And Figure Inventory

Not assessed yet.

## Source Conflicts

None recorded.

## Missing Material

Not assessed yet.

## Copyright And Publication Assessment

Manual review required.

## Candidate First Topic

None selected.

## Content Transformation Plan

Do not transform yet.

## Verification Requirements

Not assessed yet.

## Open Questions

None recorded.

## Publication Blockers

Rights unknown.

## Audit Decision

Continue inventory.

## Review History

No review yet.
`;

describe("content audit identifiers", () => {
  it("accepts sanitized source IDs and rejects unsafe variants", () => {
    expect(isSanitisedSourceId("makro2-slides-01")).toBe(true);
    expect(isSanitisedSourceId("makro2-solutions-12")).toBe(true);
    expect(isSanitisedSourceId("Makro2 Slides 01")).toBe(false);
    expect(isSanitisedSourceId("makro2-slides")).toBe(false);
    expect(isSanitisedSourceId("makro2/private-01")).toBe(false);
  });

  it("accepts only repository audit filenames", () => {
    expect(isAuditFilename("makro2-source-inventory.md")).toBe(true);
    expect(isAuditFilename("_template.md")).toBe(true);
    expect(isAuditFilename("README.md")).toBe(true);
    expect(isAuditFilename("Makro Source.md")).toBe(false);
  });
});

describe("content audit states", () => {
  it("allows only valid audit-state transitions", () => {
    expect(canTransitionAuditStatus("not-started", "inventory-created")).toBe(
      true,
    );
    expect(canTransitionAuditStatus("inventory-created", "classified")).toBe(
      true,
    );
    expect(
      canTransitionAuditStatus("inventory-created", "ready-for-drafting"),
    ).toBe(false);
  });

  it("handles rights states separately from verification", () => {
    expect(isRightsStatus("private-reference-only")).toBe(true);
    expect(isRightsStatus("source-checked")).toBe(false);
    expect(canUpdateRightsStatus("unknown", "requires-permission")).toBe(true);
    expect(
      canUpdateRightsStatus("public-redistribution-permitted", "unknown"),
    ).toBe(false);
  });
});

describe("archive and source-file safeguards", () => {
  it("detects unsafe archive entry paths", () => {
    const findings = detectUnsafeArchiveEntryPaths([
      "slides/week-01.pdf",
      "../escape.pdf",
      "/absolute/path.pdf",
      "nested/../../escape.pdf",
      "C:\\course\\file.pdf",
    ]);

    expect(findings.map((finding) => finding.match)).toEqual([
      "../escape.pdf",
      "/absolute/path.pdf",
      "nested/../../escape.pdf",
      "C:\\course\\file.pdf",
    ]);
  });

  it("classifies allowed, archive, unsupported, and high-risk source files", () => {
    expect(classifySourceFile("slides.pdf")).toBe("document");
    expect(classifySourceFile("exercise.zip")).toBe("archive");
    expect(classifySourceFile("macro.vbs")).toBe("high-risk");
    expect(classifySourceFile("unknown.xyz")).toBe("unsupported");
  });

  it("rejects raw binary files in the public audit directory", () => {
    expect(isRawBinaryAuditPath("docs/content-audits/private.zip")).toBe(true);
    expect(isRawBinaryAuditPath("docs/content-audits/slides.pdf")).toBe(true);
    expect(isRawBinaryAuditPath("docs/content-audits/audit.md")).toBe(false);
  });
});

describe("repository audit markdown validation", () => {
  it("detects local paths and email addresses in controlled strings", () => {
    const findings = findPrivatePathLeaks(
      "See /Users/name/private.zip, C:\\course\\file.pdf, ~/Documents/source.zip, and student@example.invalid.",
    );

    expect(findings.map((finding) => finding.kind)).toEqual([
      "home-documents-path",
      "local-path",
      "windows-path",
      "email",
    ]);
  });

  it("requires the public audit template sections", () => {
    expect(validateRequiredAuditSections(validAuditMarkdown)).toEqual([]);
    expect(validateRequiredAuditSections("## Audit Identity")).toContainEqual(
      expect.objectContaining({ kind: "audit-section" }),
    );
  });

  it("accepts a valid sanitized repository audit record", () => {
    expect(
      validateRepositoryAuditMarkdown(
        "makro2-source-inventory.md",
        validAuditMarkdown,
      ),
    ).toEqual([]);
  });

  it("rejects unsafe source IDs and private path leaks", () => {
    const findings = validateRepositoryAuditMarkdown(
      "makro2-source-inventory.md",
      `${validAuditMarkdown}\n- Source ID: \`bad/source\`\n/Users/name/file.zip`,
    );

    expect(findings.map((finding) => finding.kind)).toEqual(
      expect.arrayContaining(["source-id", "local-path"]),
    );
  });
});
