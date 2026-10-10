import { siteUrl } from "@/lib/metadata";

// Explicit routes avoid Next 15's metadata-loader bug with apostrophes in paths.
export const dynamic = "force-static";
export function GET() {
  const rules = process.env.VERCEL_ENV === "preview" ? "Disallow: /" : "Allow: /\nDisallow: /api/";
  return new Response(`User-agent: *\n${rules}\nSitemap: ${siteUrl}/sitemap.xml\n`, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
