import { projects } from "@/data/site";
import { siteUrl } from "@/lib/metadata";

export const dynamic = "force-static";
export function GET() {
  const paths = ["/", "/projects", "/about-us", "/people", ...projects.map((project) => `/projects/${encodeURIComponent(project.slug)}`)];
  const urls = paths.map((path) => `<url><loc>${siteUrl}${path}</loc></url>`).join("");
  return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`, { headers: { "Content-Type": "application/xml; charset=utf-8" } });
}
