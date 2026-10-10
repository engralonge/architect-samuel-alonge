import { gloryDomeImages } from "@/data/site";

export const siteUrl = "https://architect-samuel-alonge.vercel.app";
const imageOrigin = process.env.VERCEL_ENV === "preview" && process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}` : siteUrl;

export function pageMetadata(title, description, path, photos = gloryDomeImages.slice(0, 1)) {
  const images = photos.map(({ src, width, height, alt }) => ({ url: new URL(src, imageOrigin).href, width, height, alt }));
  return {
    title, description,
    alternates: { canonical: path },
    openGraph: { title, description, url: path, type: "website", siteName: "Crystal Stairs Ltd", images },
    twitter: { card: "summary_large_image", title, description, images: images.map((image) => image.url) }
  };
}
