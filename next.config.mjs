/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
      },
      {
        protocol: "https",
        hostname: "instagram.fdel18-1.fna.fbcdn.net",
      },
      {
        protocol: "https",
        hostname: "assets.theinnerhour.com",
      },
    ],
  },
};

export default nextConfig;
