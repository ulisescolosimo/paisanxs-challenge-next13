/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['https://randomuser.me', 'randomuser.me', 'res.cloudinary.com']
  }
}

module.exports = nextConfig
