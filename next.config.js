/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
        port: "",
      },
      {
        protocol: "https",
        hostname: "post-uploads.s3.ap-northeast-1.amazonaws.com",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
