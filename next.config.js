/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Enable static HTML export for cPanel hosting
  images: {
    domains: [],
    unoptimized: true, // Required for static export
  },
  reactStrictMode: true,
  trailingSlash: true, // Adds trailing slashes for better cPanel compatibility
}

module.exports = nextConfig
