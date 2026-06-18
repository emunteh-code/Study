const LOWERCASE_ASCII_SLUG_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

export function isLowercaseAsciiSlug(value: string): boolean {
  return LOWERCASE_ASCII_SLUG_PATTERN.test(value);
}

export function assertLowercaseAsciiSlug(value: string): string {
  if (!isLowercaseAsciiSlug(value)) {
    throw new Error(`Invalid lowercase ASCII slug: ${value}`);
  }

  return value;
}
