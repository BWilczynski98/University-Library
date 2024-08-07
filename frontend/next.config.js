/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "m.media-amazon.com",
      },
      {
        protocol: "https",
        hostname: "www.canterburypilgrimages.com",
      },
      {
        protocol: "https",
        hostname: "ecsmedia.pl"
      }
    ],
  },
};

module.exports = nextConfig;