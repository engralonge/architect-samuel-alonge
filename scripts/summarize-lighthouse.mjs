import { readFile } from "node:fs/promises";

if (!process.argv.slice(2).length) throw new Error("Pass one or more Lighthouse JSON report paths.");
for (const path of process.argv.slice(2)) {
  const report = JSON.parse(await readFile(path, "utf8"));
  if (report.runtimeError) throw new Error(`${path}: ${report.runtimeError.message}`);
  const scores = Object.fromEntries(["performance", "accessibility", "seo"].map((key) => [key, Math.round(report.categories[key].score * 100)]));
  console.log(JSON.stringify({ url: report.finalDisplayedUrl, lighthouse: report.lighthouseVersion, date: report.fetchTime, formFactor: report.configSettings.formFactor, scores, lcp: report.audits["largest-contentful-paint"].displayValue, cls: report.audits["cumulative-layout-shift"].displayValue, warnings: report.runWarnings }));
  if (Object.values(scores).some((score) => score < 90)) process.exitCode = 1;
}
