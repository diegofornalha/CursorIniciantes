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
  // Reduz logs de desenvolvimento
  onDemandEntries: {
    maxInactiveAge: 25 * 1000,
    pagesBufferLength: 2,
  },
  // Configuração para reduzir logs
  logging: {
    level: "error",
    fullUrl: false,
  },
  experimental: {
    serverActions: {
      bodySizeLimit: "2mb",
    },
  },
  typescript: {
    // !! WARN !!
    // Permite que builds completem mesmo com erros de TypeScript
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
