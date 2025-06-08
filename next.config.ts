import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
   output: 'export',
  basePath: '/your-repo-name', // Replace with your repo name
  trailingSlash: true,    
};

export default nextConfig;
