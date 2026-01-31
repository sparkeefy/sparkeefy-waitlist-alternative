import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Uncomment the following line to enable static HTML export
  // output: "export",
  images: {
    // unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
