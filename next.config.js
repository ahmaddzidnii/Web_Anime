/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["cdn.myanimelist.net"],
    unoptimized: true,
  },
};

module.exports = nextConfig;
