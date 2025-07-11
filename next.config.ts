/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true, 
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
  transpilePackages: ['@types/react', '@types/react-dom'], 
}

module.exports = nextConfig