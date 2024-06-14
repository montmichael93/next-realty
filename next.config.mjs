/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    //domains: ["photos.zillowstatic.com", "placehold.co", "maps.googleapis.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**photos.zillowstatic.com.",
        port: "",
      },
      {
        protocol: "https",
        hostname: "**placehold.co",
        port: "",
      },
      {
        protocol: "https",
        hostname: "**maps.googleapis.com",
        port: "",
      },
    ],
  },
};

export default nextConfig;
