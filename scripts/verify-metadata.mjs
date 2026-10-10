import assert from "node:assert/strict";
import { deploymentRobots, pageMetadata, siteUrl } from "../lib/metadata.js";

assert.deepEqual(deploymentRobots("preview"), { index: false, follow: false });
assert.deepEqual(deploymentRobots("production"), { index: true, follow: true });
assert.deepEqual(deploymentRobots("development"), { index: true, follow: true });
for (const path of ["/", "/projects", "/about-us", "/people", "/projects/dunamis-glory-dome"]) {
  const metadata = pageMetadata("Test title", "Test description", path);
  assert.equal(metadata.alternates.canonical, new URL(path, siteUrl).href);
  assert.equal(metadata.openGraph.url, metadata.alternates.canonical);
  assert.equal(metadata.openGraph.images[0].url, `${siteUrl}/images/share-image.png`);
  assert.equal(metadata.openGraph.images[0].width, 1200);
  assert.equal(metadata.openGraph.images[0].height, 630);
  assert.equal(metadata.twitter.images[0], metadata.openGraph.images[0].url);
}
console.log("Preview/production indexing policy, canonical, Open Graph and Twitter metadata checks passed.");
