import assert from "node:assert/strict";
import sharp from "sharp";
import { navItems, insightsPublished, projects, profile, legacyAssets } from "../data/site.js";

const base = process.env.TEST_SITE_URL || "http://localhost:3012";
assert.equal(insightsPublished, false);
assert.ok(!navItems.some((item) => item.label === "Insights"));
const portrait = await sharp(`public${profile.portrait}`).metadata();
assert.equal(portrait.width, 1712);
assert.equal(portrait.height, 1692);
for (const project of projects) {
  for (const image of project.images) {
    assert.ok(legacyAssets.some((asset) => asset.src === image.src && asset.approved));
    const source = await sharp(`public${image.src}`).metadata();
    assert.equal(source.width, image.width);
    assert.equal(source.height, image.height);
  }
}
for (const [path, type] of [["/robots.txt", "text/plain"], ["/sitemap.xml", "application/xml"]]) {
  const response = await fetch(`${base}${path}`);
  assert.equal(response.status, 200, path);
  assert.ok(response.headers.get("content-type").includes(type));
  console.log(`${path}: 200 (${type})`);
}
for (const path of ["/", "/projects", "/about-us", "/people", ...projects.map((project) => `/projects/${project.slug}`)]) {
  assert.equal((await fetch(`${base}${path}`)).status, 200, path);
}
console.log("Phase 4 published routes, navigation, approved assets and native source dimensions passed.");
