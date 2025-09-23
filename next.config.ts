import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
        ],
      },
    ];
  },
  // Cấu hình cho Vercel deployment
  experimental: {
    allowedRevalidateHeaderKeys: ['x-vercel-revalidate'],
  },
};

export default nextConfig;
