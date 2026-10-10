import { deploymentRobots, siteUrl } from "@/lib/metadata";

// Explicit routes avoid Next 15's metadata-loader bug with apostrophes in paths.
export const dynamic = "force-static";
export function GET() {
  const rules = deploymentRobots().index ? "Allow: /\nDisallow: /api/" : "Disallow: /";
  return new Response(`User-agent: *\n${rules}\nSitemap: ${siteUrl}/sitemap.xml\n`, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
