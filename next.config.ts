import type { NextConfig } from "next";
import withPWA from 'next-pwa';

const config: NextConfig = {
  // outras configs do Next.js aqui
};

const nextConfig = withPWA({
  dest: 'public',
  register: true,
  skipWaiting: true,
  ...config
});

export default nextConfig;
