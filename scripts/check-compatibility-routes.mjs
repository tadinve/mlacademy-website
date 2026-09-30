import fs from "node:fs";
import path from "node:path";
import {
  pendingBacklinkTargets,
  protectedCompatibilityRoutes,
} from "../compatibility-routes.mjs";

const projectRoot = process.cwd();
const appPathRoutesManifestPath = path.join(
  projectRoot,
  ".next",
  "app-path-routes-manifest.json",
);
const routesManifestPath = path.join(projectRoot, ".next", "routes-manifest.json");

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, "utf8"));
}

if (!fs.existsSync(appPathRoutesManifestPath) || !fs.existsSync(routesManifestPath)) {
  console.error("Missing Next.js build manifests. Run `next build` before checking compatibility routes.");
  process.exit(1);
}

const appPathRoutesManifest = readJson(appPathRoutesManifestPath);
const routesManifest = readJson(routesManifestPath);
const builtPages = new Set(Object.values(appPathRoutesManifest));
const redirects = routesManifest.redirects ?? [];

const failures = [];

for (const route of protectedCompatibilityRoutes) {
  if (route.verification.kind === "page") {
    if (!builtPages.has(route.verification.route)) {
      failures.push(`Missing built page for ${route.source}`);
    }
    continue;
  }

  if (route.verification.kind === "redirect") {
    const match = redirects.find(
      (redirect) =>
        redirect.source === route.verification.source &&
        redirect.destination === route.verification.destination,
    );

    if (!match) {
      failures.push(
        `Missing redirect from ${route.verification.source} to ${route.verification.destination}`,
      );
    }
  }
}

if (failures.length > 0) {
  console.error("Protected compatibility route check failed:");
  for (const failure of failures) {
    console.error(`- ${failure}`);
  }
  process.exit(1);
}

console.log("Protected compatibility route check passed.");

if (pendingBacklinkTargets.length > 0) {
  console.warn("Pending backlink targets that still need manual mapping:");
  for (const target of pendingBacklinkTargets) {
    console.warn(`- ${target}`);
  }
}