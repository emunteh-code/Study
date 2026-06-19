import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import process from "node:process";

const auditDirectory = path.join(process.cwd(), "docs", "content-audits");
const requiredSections = [
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
];
const auditStatuses = new Set([
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
]);
const rightsStatuses = new Set([
  "unknown",
  "private-reference-only",
  "quotation-permitted",
  "adaptation-permitted",
  "public-redistribution-permitted",
  "prohibited",
  "requires-permission",
]);
const rawAuditExtensions = new Set([
  ".7z",
  ".docx",
  ".gif",
  ".gz",
  ".jpeg",
  ".jpg",
  ".pdf",
  ".png",
  ".pptx",
  ".rar",
  ".tar",
  ".webp",
  ".xlsx",
  ".zip",
]);

function isAuditFilename(filename) {
  return (
    filename === "README.md" ||
    filename === "_template.md" ||
    /^[a-z0-9]+(?:-[a-z0-9]+)*\.md$/.test(filename)
  );
}

function findLeaks(text) {
  const patterns = [
    [/~\/Documents\/[^\s)"'<>`]*/g, "home document path"],
    [/\/Users\/[^\s)"'<>`]*/g, "macOS local path"],
    [/\/home\/[^\s)"'<>`]*/g, "Linux local path"],
    [/\b[A-Za-z]:\\[^\s)"'<>`]*/g, "Windows local path"],
    [/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/gi, "email address"],
  ];

  return patterns.flatMap(([pattern, label]) =>
    Array.from(text.matchAll(pattern), (match) => ({
      label,
      value: match[0],
    })),
  );
}

function headings(markdown) {
  return new Set(
    Array.from(markdown.matchAll(/^#{1,6}\s+(.+?)\s*$/gm), (match) =>
      match[1].trim(),
    ),
  );
}

function validateMarkdown(filename, markdown) {
  const errors = [];

  if (!isAuditFilename(filename)) {
    errors.push(`${filename}: invalid audit filename`);
  }

  for (const leak of findLeaks(markdown)) {
    errors.push(`${filename}: contains ${leak.label}: ${leak.value}`);
  }

  if (filename !== "README.md") {
    const present = headings(markdown);

    for (const section of requiredSections) {
      if (!present.has(section)) {
        errors.push(`${filename}: missing required section "${section}"`);
      }
    }
  }

  for (const match of markdown.matchAll(/Source ID:\s*`?([^`\n]+)`?/g)) {
    const sourceId = match[1].trim();

    if (!/^[a-z][a-z0-9]*(?:-[a-z0-9]+)*-[0-9]{2}$/.test(sourceId)) {
      errors.push(`${filename}: invalid sanitized source ID "${sourceId}"`);
    }
  }

  for (const match of markdown.matchAll(
    /(?:Audit status|Current state):\s*`?([a-z-]+)`?/g,
  )) {
    const status = match[1];

    if (!auditStatuses.has(status)) {
      errors.push(`${filename}: invalid audit status "${status}"`);
    }
  }

  for (const match of markdown.matchAll(/Rights status:\s*`?([a-z-]+)`?/g)) {
    const status = match[1];

    if (!rightsStatuses.has(status)) {
      errors.push(`${filename}: invalid rights status "${status}"`);
    }
  }

  return errors;
}

const entries = await readdir(auditDirectory, { withFileTypes: true });
const errors = [];

for (const entry of entries) {
  if (entry.isDirectory()) {
    errors.push(`${entry.name}: nested audit directories are not supported`);
    continue;
  }

  const extension = path.extname(entry.name).toLowerCase();

  if (rawAuditExtensions.has(extension) || extension !== ".md") {
    errors.push(
      `${entry.name}: raw source or binary files must not be stored in docs/content-audits`,
    );
    continue;
  }

  const markdown = await readFile(
    path.join(auditDirectory, entry.name),
    "utf8",
  );
  errors.push(...validateMarkdown(entry.name, markdown));
}

if (errors.length > 0) {
  process.stderr.write("Content audit validation failed:\n");

  for (const error of errors) {
    process.stderr.write(`- ${error}\n`);
  }

  process.exit(1);
}

process.stdout.write("Content audit validation passed.\n");
