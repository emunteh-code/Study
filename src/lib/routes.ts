import { siteConfig } from "../config/site";

const ABSOLUTE_URL_PATTERN = /^[a-z][a-z0-9+.-]*:\/\//i;

export function stripQueryAndFragment(path: string): string {
  return path.split(/[?#]/, 1)[0] ?? "";
}

export function normalizeInternalRoute(route: string): string {
  if (!route) {
    throw new Error("Internal route must not be empty.");
  }

  if (ABSOLUTE_URL_PATTERN.test(route)) {
    return route;
  }

  if (route.startsWith("#") || route.startsWith("?")) {
    return route;
  }

  if (!route.startsWith("/")) {
    throw new Error(`Unsupported internal route: ${route}`);
  }

  const [pathWithMaybeQuery = "", suffix = ""] =
    route.match(/^([^?#]*)(.*)$/)?.slice(1) ?? [];
  const normalizedPath = pathWithMaybeQuery.replace(/\/{2,}/g, "/");

  if (normalizedPath === "/") {
    return `/${suffix}`;
  }

  if (normalizedPath.endsWith("/")) {
    return `${normalizedPath}${suffix}`;
  }

  return `${normalizedPath}/${suffix}`;
}

export function stripBasePath(path: string): string {
  const cleanPath = stripQueryAndFragment(path).replace(/\/{2,}/g, "/");
  const base = siteConfig.basePath;

  if (cleanPath === base) {
    return "/";
  }

  if (cleanPath.startsWith(`${base}/`)) {
    return cleanPath.slice(base.length) || "/";
  }

  return cleanPath || "/";
}

export function toBasePath(route: string): string {
  if (ABSOLUTE_URL_PATTERN.test(route)) {
    return route;
  }

  if (route.startsWith("#") || route.startsWith("?")) {
    return route;
  }

  const normalized = normalizeInternalRoute(route);
  const base = siteConfig.basePath;

  if (normalized === "/") {
    return `${base}/`;
  }

  if (normalized === base || normalized.startsWith(`${base}/`)) {
    return normalized;
  }

  return `${base}${normalized}`.replace(/\/{2,}/g, "/");
}

export function canonicalUrl(route: string): string {
  const path = toBasePath(route);

  if (ABSOLUTE_URL_PATTERN.test(path)) {
    return path;
  }

  return new URL(path, siteConfig.siteUrl).toString();
}

export function isRouteCurrent(
  itemRoute: string,
  currentPath: string,
): boolean {
  const item = normalizeInternalRoute(stripBasePath(itemRoute));
  const current = normalizeInternalRoute(stripBasePath(currentPath));

  if (item === "/") {
    return current === "/";
  }

  return current === item || current.startsWith(item);
}
