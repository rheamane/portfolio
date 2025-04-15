import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    output: "export",
    reactStrictMode: true,
    trailingSlash: true, 
    basePath: "/portfolio-website",
};

export default nextConfig;
