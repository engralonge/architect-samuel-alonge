import assert from "node:assert/strict";
import { prepareConsultation } from "../lib/consultation.js";
import { contactDetails, projects } from "../data/site.js";

const base = process.env.TEST_SITE_URL || "http://localhost:3012";
const project = projects[0];
const fields = {
  name: "Review Test", contact: "test@example.com", location: "Abuja",
  projectType: project.enquiryType, reference: project.title,
  message: "Brief with & and ? and a newline\nSecond line"
};
const links = prepareConsultation(fields, contactDetails);
const email = new URL(links.email);
const whatsapp = new URL(links.whatsapp);
assert.equal(email.pathname, contactDetails.email);
assert.equal(whatsapp.pathname, `/${contactDetails.whatsapp}`);
for (const draft of [email.searchParams.get("body"), whatsapp.searchParams.get("text")]) {
  assert.ok(draft.includes(`Project reference: ${project.title}`));
  assert.ok(draft.includes(fields.message));
  assert.ok(draft.includes(fields.projectType));
}
for (const [path, status] of [
  [`/projects/${project.slug}`, 200], ["/projects/not-a-real-project", 404],
  ["/favicon.ico", 200], ["/apple-touch-icon.png", 200], ["/contact", 307]
]) {
  const response = await fetch(`${base}${path}`, { redirect: "manual" });
  assert.equal(response.status, status, path);
  if (path === "/contact") assert.equal(response.headers.get("location"), "/#contact");
  if (path === "/apple-touch-icon.png") assert.ok(response.headers.get("content-type").includes("image/png"));
  console.log(`${path}: ${response.status}`);
}
console.log("Phase 3 route, icon and consultation draft checks passed. No messages sent.");
