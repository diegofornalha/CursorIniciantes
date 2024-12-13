/** @type {import('next').NextConfig} */
// @ts-check
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["res.cloudinary.com"],
    formats: ["image/avif", "image/webp"],
  },
  devIndicators: {
    buildActivity: false,
  },
  typescript: {
    // !! WARN !!
    // Permite que builds completem mesmo com erros de TypeScript
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
