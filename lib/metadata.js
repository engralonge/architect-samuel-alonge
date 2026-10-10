import { shareImage } from "../data/site.js";

export const siteUrl = "https://architect-samuel-alonge.vercel.app";
export function deploymentRobots(environment = process.env.VERCEL_ENV) {
  const indexable = environment !== "preview";
  return { index: indexable, follow: indexable };
}

export function pageMetadata(title, description, path) {
  const url = new URL(path, siteUrl).href;
  const images = [{ url: new URL(shareImage.src, siteUrl).href, width: shareImage.width, height: shareImage.height, alt: shareImage.alt }];
  return {
    title, description,
    alternates: { canonical: url },
    openGraph: { title, description, url, type: "website", siteName: "Crystal Stairs Ltd", images },
    twitter: { card: "summary_large_image", title, description, images: images.map((image) => image.url) }
  };
}
