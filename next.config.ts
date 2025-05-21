import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
   output: 'export',
  basePath: '/Rostres', 
  images: {
    domains: ['highcook.com.pe'],
  },
 
};

export default nextConfig;
