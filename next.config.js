/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'lh3.googleusercontent.com',
      'cdn.pixabay.com',
      'p16-amd-va.tiktokcdn.com',
      'image.shutterstock.com',
      'i.pinimg.com',
      'kenh14cdn.com',
      "",
      'static2-images.vnncdn.net',
      'www.thetimes.co.uk',
      'www.vpopwire.com',
      'images.wsj.net',
      'www.planetsport.com'
    ],
  },
}

module.exports = nextConfig
