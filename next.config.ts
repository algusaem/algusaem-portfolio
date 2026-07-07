import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Allow the local Babooni banner (SVG) to be served through next/image.
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
