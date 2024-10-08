/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "img.daisyui.com" }
    ],
  },
  experimental: {
    serverActions: true,
  },
}

module.exports = nextConfig
