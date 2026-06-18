import { siteConfig } from "../config/site";
import { canonicalUrl } from "./routes";

export function buildPageTitle(title?: string): string {
  if (!title || title === siteConfig.name) {
    return siteConfig.name;
  }

  return `${title} | ${siteConfig.name}`;
}

export function buildCanonicalUrl(path: string): string {
  return canonicalUrl(path);
}
