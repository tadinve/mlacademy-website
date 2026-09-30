import { compatibilityRedirects } from "./compatibility-routes.mjs";

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return compatibilityRedirects;
  },
};

export default nextConfig;
