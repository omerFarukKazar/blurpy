import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // GitHub Pages serves static files only — no Node runtime.
  output: "export",

  // Emits /about/index.html instead of /about.html, which is what
  // a plain static file server expects.
  trailingSlash: true,

  // The default image optimizer needs a server.
  images: { unoptimized: true },
};

export default nextConfig;
