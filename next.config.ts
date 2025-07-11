/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true, // Temporal hasta que Next.js 15.3.6 solucione los bugs
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'flagcdn.com',
      },
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
      },
    ],
    minimumCacheTTL: 3600,
  },
  experimental: {
    optimizePackageImports: ['react-icons'],
  },
  transpilePackages: ['@types/react', '@types/react-dom'], // Crucial para Vercel
}

module.exports = nextConfig