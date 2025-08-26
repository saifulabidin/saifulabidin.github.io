/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['avatars.githubusercontent.com'],
  },
  // Enable standalone output for minimal production image
  output: 'standalone',
}

module.exports = nextConfig
