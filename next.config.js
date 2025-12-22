/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [],
    unoptimized: true, // Allow local images without optimization
  },
  reactStrictMode: true,
  // Enable static file serving from public directory
  publicRuntimeConfig: {},
}

module.exports = nextConfig

