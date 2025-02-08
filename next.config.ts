import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true, // Ativa o modo estrito do React
  eslint: {
    ignoreDuringBuilds: true, // Ignora erros do ESLint durante o build
  },
};

export default nextConfig;
