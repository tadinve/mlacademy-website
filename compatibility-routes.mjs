export const legacyUrlCompatibilityMap = [
  {
    source: "/",
    currentStatus: "200",
    externalSource: "Primary site URL, bookmarks, and existing internal links",
    recommendedAction: "Keep the live page available",
    finalDestination: "/",
    verification: { kind: "page", route: "/" },
    protectInCi: true,
  },
  {
    source: "/practice",
    currentStatus: "200",
    externalSource: "Protected site route",
    recommendedAction: "Keep the live page available",
    finalDestination: "/practice",
    verification: { kind: "page", route: "/practice" },
    protectInCi: true,
  },
  {
    source: "/register",
    currentStatus: "404 before this restore",
    externalSource: "Emails, bookmarks, QR codes, event listings, and training materials",
    recommendedAction: "Restore a branded registration wrapper that points to the current live registration flow",
    finalDestination: "/register",
    verification: { kind: "page", route: "/register" },
    protectInCi: true,
  },
  {
    source: "/attendance",
    currentStatus: "200",
    externalSource: "Historical attendance links and shared course materials",
    recommendedAction: "Keep the branded attendance wrapper and direct-form fallback available",
    finalDestination: "/attendance",
    verification: { kind: "page", route: "/attendance" },
    protectInCi: true,
  },
  {
    source: "/past-classes",
    currentStatus: "200",
    externalSource: "Internal navigation and archive destination for legacy class links",
    recommendedAction: "Keep the live archive page available",
    finalDestination: "/past-classes",
    verification: { kind: "page", route: "/past-classes" },
    protectInCi: true,
  },
  {
    source: "/courses",
    currentStatus: "200",
    externalSource: "Course catalog links and legacy section fallback destination",
    recommendedAction: "Keep the live catalog page available",
    finalDestination: "/courses",
    verification: { kind: "page", route: "/courses" },
    protectInCi: true,
  },
  {
    source: "/blogs",
    currentStatus: "200",
    externalSource: "Protected site route",
    recommendedAction: "Keep the live page available",
    finalDestination: "/blogs",
    verification: { kind: "page", route: "/blogs" },
    protectInCi: true,
  },
  {
    source: "/classes/sept-27-2025",
    currentStatus: "404 before this redirect",
    externalSource: "Current internal crawl from /classes/sept-20-2025 and /classes/sept-22-2025",
    recommendedAction: "301 redirect to the closest real archive page because no historical class page exists in this repo",
    finalDestination: "/past-classes",
    verification: { kind: "redirect", source: "/classes/sept-27-2025", destination: "/past-classes" },
    protectInCi: true,
  },
  {
    source: "/books",
    currentStatus: "404 before this redirect",
    externalSource: "Public backlink evidence to a legacy /books section",
    recommendedAction: "301 redirect the legacy section root to the current course catalog until exact deep-link targets are supplied",
    finalDestination: "/courses",
    verification: { kind: "redirect", source: "/books", destination: "/courses" },
    protectInCi: true,
  },
  {
    source: "/books/:path*",
    currentStatus: "404 before this redirect",
    externalSource: "Public backlink evidence to legacy deep URLs under /books/...",
    recommendedAction: "301 redirect legacy deep book URLs to the current course catalog instead of returning generic 404s",
    finalDestination: "/courses",
    verification: { kind: "redirect", source: "/books/:path*", destination: "/courses" },
    protectInCi: true,
  },
];

export const compatibilityRedirects = legacyUrlCompatibilityMap
  .filter((route) => route.verification.kind === "redirect")
  .map((route) => ({
    source: route.verification.source,
    destination: route.verification.destination,
    statusCode: 301,
  }));

export const protectedCompatibilityRoutes = legacyUrlCompatibilityMap.filter(
  (route) => route.protectInCi,
);

export const pendingBacklinkTargets = [
  "Google Search Console target URLs still need to be supplied for exact third-party backlink preservation beyond the confirmed /register, /attendance, /classes/sept-27-2025, and /books/* cases.",
];