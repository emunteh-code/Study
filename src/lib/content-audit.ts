export const auditStatuses = [
  "not-started",
  "inventory-created",
  "classified",
  "structurally-mapped",
  "rights-reviewed",
  "source-checked",
  "topic-selected",
  "ready-for-drafting",
  "blocked",
  "archived",
] as const;

export type AuditStatus = (typeof auditStatuses)[number];

export const auditStatusTransitions: Record<AuditStatus, AuditStatus[]> = {
  "not-started": ["inventory-created", "blocked", "archived"],
  "inventory-created": ["classified", "blocked", "archived"],
  classified: ["structurally-mapped", "blocked", "archived"],
  "structurally-mapped": ["rights-reviewed", "blocked", "archived"],
  "rights-reviewed": ["source-checked", "blocked", "archived"],
  "source-checked": ["topic-selected", "blocked", "archived"],
  "topic-selected": ["ready-for-drafting", "blocked", "archived"],
  "ready-for-drafting": ["blocked", "archived"],
  blocked: ["archived"],
  archived: [],
};

export const rightsStatuses = [
  "unknown",
  "private-reference-only",
  "quotation-permitted",
  "adaptation-permitted",
  "public-redistribution-permitted",
  "prohibited",
  "requires-permission",
] as const;

export type RightsStatus = (typeof rightsStatuses)[number];

export const sourceUsageCategories = [
  "Reference only",
  "Short quotation",
  "Adaptation",
  "Redistribution",
  "Original platform material",
] as const;

export const requiredAuditSections = [
  "Audit Identity",
  "Module Identity",
  "Audit Scope",
  "Audit Status",
  "Private-Source Location Reference",
  "Sanitised File Inventory",
  "Source Classification",
  "Semester Or Version Evidence",
  "Lecturer Or Author Evidence",
  "Proposed Topic Structure",
  "Exercise And Solution Mapping",
  "Formula And Definition Inventory",
  "Graph And Figure Inventory",
  "Source Conflicts",
  "Missing Material",
  "Copyright And Publication Assessment",
  "Candidate First Topic",
  "Content Transformation Plan",
  "Verification Requirements",
  "Open Questions",
  "Publication Blockers",
  "Audit Decision",
  "Review History",
] as const;

export type ValidationFindingKind =
  | "audit-filename"
  | "audit-section"
  | "archive-entry"
  | "email"
  | "extension"
  | "home-documents-path"
  | "local-path"
  | "source-id"
  | "status"
  | "windows-path";

export interface ValidationFinding {
  kind: ValidationFindingKind;
  message: string;
  match?: string;
  index?: number;
}

const sanitisedSourceIdPattern = /^[a-z][a-z0-9]*(?:-[a-z0-9]+)*-[0-9]{2}$/;
const auditFilenamePattern = /^[a-z0-9]+(?:-[a-z0-9]+)*\.md$/;
const archiveExtensions = new Set(["7z", "rar", "tar", "gz", "zip"]);
const supportedExtensions = new Set([
  "csv",
  "docx",
  "jpeg",
  "jpg",
  "md",
  "pdf",
  "png",
  "pptx",
  "txt",
  "webp",
  "xlsx",
]);
const highRiskExtensions = new Set([
  "app",
  "bat",
  "bin",
  "cmd",
  "com",
  "dmg",
  "exe",
  "iso",
  "js",
  "msi",
  "ps1",
  "scr",
  "sh",
  "vba",
  "vbs",
]);
const rawAuditFileExtensions = new Set([
  "7z",
  "docx",
  "gif",
  "gz",
  "jpeg",
  "jpg",
  "pdf",
  "png",
  "pptx",
  "rar",
  "tar",
  "webp",
  "xlsx",
  "zip",
]);

export function isAuditStatus(value: string): value is AuditStatus {
  return auditStatuses.includes(value as AuditStatus);
}

export function canTransitionAuditStatus(
  from: AuditStatus,
  to: AuditStatus,
): boolean {
  return auditStatusTransitions[from].includes(to);
}

export function isRightsStatus(value: string): value is RightsStatus {
  return rightsStatuses.includes(value as RightsStatus);
}

export function canUpdateRightsStatus(
  from: RightsStatus,
  to: RightsStatus,
): boolean {
  if (from === to) {
    return true;
  }

  if (from === "public-redistribution-permitted" && to === "unknown") {
    return false;
  }

  return true;
}

export function isSanitisedSourceId(value: string): boolean {
  return sanitisedSourceIdPattern.test(value);
}

export function isAuditFilename(filename: string): boolean {
  return (
    filename === "README.md" ||
    filename === "_template.md" ||
    auditFilenamePattern.test(filename)
  );
}

export type SourceFileClassification =
  | "archive"
  | "document"
  | "high-risk"
  | "image"
  | "spreadsheet"
  | "text"
  | "unsupported";

export function getFileExtension(filename: string): string {
  const normalized = filename.toLowerCase();

  if (normalized.endsWith(".tar.gz")) {
    return "gz";
  }

  const extension = normalized.split(".").pop();
  return extension && extension !== normalized ? extension : "";
}

export function classifySourceFile(filename: string): SourceFileClassification {
  const extension = getFileExtension(filename);

  if (archiveExtensions.has(extension)) {
    return "archive";
  }

  if (["pdf", "pptx", "docx"].includes(extension)) {
    return "document";
  }

  if (["xlsx", "csv"].includes(extension)) {
    return "spreadsheet";
  }

  if (["txt", "md"].includes(extension)) {
    return "text";
  }

  if (["jpg", "jpeg", "png", "webp"].includes(extension)) {
    return "image";
  }

  if (highRiskExtensions.has(extension)) {
    return "high-risk";
  }

  return supportedExtensions.has(extension) ? "document" : "unsupported";
}

export function isRawBinaryAuditPath(path: string): boolean {
  const extension = getFileExtension(path);
  return rawAuditFileExtensions.has(extension);
}

export function findPrivatePathLeaks(text: string): ValidationFinding[] {
  const patterns: Array<{
    kind: ValidationFindingKind;
    pattern: RegExp;
    message: string;
  }> = [
    {
      kind: "home-documents-path",
      pattern: /~\/Documents\/[^\s)"'<>`]*/g,
      message: "Remove home-directory document paths from committed audits.",
    },
    {
      kind: "local-path",
      pattern: /\/Users\/[^\s)"'<>`]*/g,
      message: "Remove macOS local paths from committed audits.",
    },
    {
      kind: "local-path",
      pattern: /\/home\/[^\s)"'<>`]*/g,
      message: "Remove Linux local paths from committed audits.",
    },
    {
      kind: "windows-path",
      pattern: /\b[A-Za-z]:\\[^\s)"'<>`]*/g,
      message: "Remove Windows local paths from committed audits.",
    },
    {
      kind: "email",
      pattern: /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/gi,
      message: "Remove email addresses from committed audits.",
    },
  ];

  return patterns.flatMap(({ kind, pattern, message }) =>
    Array.from(text.matchAll(pattern), (match) => ({
      kind,
      message,
      match: match[0],
      index: match.index,
    })),
  );
}

export function detectUnsafeArchiveEntryPaths(
  entries: string[],
): ValidationFinding[] {
  return entries.flatMap((entry, index) => {
    const normalized = entry.replaceAll("\\", "/");
    const findings: ValidationFinding[] = [];

    if (!entry.trim()) {
      findings.push({
        kind: "archive-entry",
        message: "Archive entry path must not be empty.",
        match: entry,
        index,
      });
    }

    if (entry.includes("\0")) {
      findings.push({
        kind: "archive-entry",
        message: "Archive entry path must not contain null bytes.",
        match: entry,
        index,
      });
    }

    if (normalized.startsWith("/") || /^[A-Za-z]:\//.test(normalized)) {
      findings.push({
        kind: "archive-entry",
        message: "Archive entry path must not be absolute.",
        match: entry,
        index,
      });
    }

    if (normalized === ".." || normalized.startsWith("../")) {
      findings.push({
        kind: "archive-entry",
        message: "Archive entry path must not escape the extraction directory.",
        match: entry,
        index,
      });
    }

    if (normalized.includes("/../")) {
      findings.push({
        kind: "archive-entry",
        message: "Archive entry path must not traverse parent directories.",
        match: entry,
        index,
      });
    }

    return findings;
  });
}

export function extractMarkdownHeadings(markdown: string): string[] {
  return Array.from(
    markdown.matchAll(/^#{1,6}\s+(.+?)\s*$/gm),
    (match) => match[1]?.trim() ?? "",
  );
}

export function validateRequiredAuditSections(
  markdown: string,
): ValidationFinding[] {
  const headings = new Set(extractMarkdownHeadings(markdown));

  return requiredAuditSections
    .filter((section) => !headings.has(section))
    .map((section) => ({
      kind: "audit-section",
      message: `Missing required audit section: ${section}.`,
      match: section,
    }));
}

export function validateRepositoryAuditMarkdown(
  filename: string,
  markdown: string,
): ValidationFinding[] {
  const findings: ValidationFinding[] = [];

  if (!isAuditFilename(filename)) {
    findings.push({
      kind: "audit-filename",
      message:
        "Audit filename must be README.md, _template.md, or lowercase ASCII with hyphens.",
      match: filename,
    });
  }

  findings.push(...findPrivatePathLeaks(markdown));

  if (filename !== "README.md") {
    findings.push(...validateRequiredAuditSections(markdown));
  }

  for (const match of markdown.matchAll(/Source ID:\s*`?([^`\n]+)`?/g)) {
    const sourceId = match[1]?.trim() ?? "";

    if (!isSanitisedSourceId(sourceId)) {
      findings.push({
        kind: "source-id",
        message:
          "Source ID must be sanitized, stable, lowercase ASCII, and end with a numeric suffix.",
        match: sourceId,
        index: match.index,
      });
    }
  }

  for (const match of markdown.matchAll(
    /(?:Audit status|Current state):\s*`?([a-z-]+)`?/g,
  )) {
    const status = match[1] ?? "";

    if (!isAuditStatus(status)) {
      findings.push({
        kind: "status",
        message: "Audit status is not one of the approved audit states.",
        match: status,
        index: match.index,
      });
    }
  }

  for (const match of markdown.matchAll(/Rights status:\s*`?([a-z-]+)`?/g)) {
    const status = match[1] ?? "";

    if (!isRightsStatus(status)) {
      findings.push({
        kind: "status",
        message: "Rights status is not one of the approved rights states.",
        match: status,
        index: match.index,
      });
    }
  }

  return findings;
}
