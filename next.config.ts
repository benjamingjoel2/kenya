import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com" }],
    formats: ["image/avif", "image/webp"],
    // Fewer, well-spaced widths: shorter srcset markup on every page and no 3840px downloads.
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2560],
    imageSizes: [96, 256, 384],
    // Optimised images are keyed by URL, so they can be cached for a long time.
    minimumCacheTTL: 2678400,
  },
  async redirects() {
    return [{ source: "/testimonials", destination: "/about", permanent: true }];
  },
};

export default nextConfig;
