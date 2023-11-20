const withPWA = require("next-pwa")({
    pwa: {
      dest: "public",
      register: true,
      sw: "/service-worker.js",
      swSrc: "/service-worker.js",
    },
  });
  /** @type {import('next').NextConfig} */
  const nextConfig = {
    // output:"export"
  };
  
  module.exports = nextConfig;
  