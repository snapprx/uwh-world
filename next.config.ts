// next.config.ts

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      // Images produits des vendeurs
      { protocol: "https", hostname: "moresport.com" },
      { protocol: "https", hostname: "hydrouwh.com" },
      // Images sociales (avatars Google, Discord)
      { protocol: "https", hostname: "lh3.googleusercontent.com" },
      { protocol: "https", hostname: "cdn.discordapp.com" },
      // Stockage images (Vercel Blob, Cloudinary, etc.)
      { protocol: "https", hostname: "*.vercel-storage.com" },
      { protocol: "https", hostname: "res.cloudinary.com" },
      // Placeholder
      { protocol: "https", hostname: "placehold.co" },
    ],
  },

  // Headers de sécurité
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(self)",
          },
        ],
      },
    ];
  },

  // Redirections utiles
  async redirects() {
    return [
      {
        source: "/shop",
        destination: "/boutique",
        permanent: true,
      },
      {
        source: "/map",
        destination: "/carte",
        permanent: true,
      },
    ];
  },

  // Compression
  compress: true,

  // Experimental features
  experimental: {
    optimizePackageImports: ["lucide-react", "@radix-ui/react-icons"],
  },
};

export default nextConfig;
