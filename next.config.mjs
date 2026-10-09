/** @type {import('next').NextConfig} */
const nextConfig = {
  // The Next.js development indicator is not part of the website navigation.
  devIndicators: false,
  images: {
    deviceSizes: [640, 750, 828, 1080, 1280, 1920, 2560, 3840],
    formats: ["image/avif", "image/webp"],
    remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com", pathname: "/**" }]
  }
};

export default nextConfig;
