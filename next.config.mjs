/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/mixlr',
        destination: 'http://mixlr.com/zafarulhasan',
        permanent: true,
      },
      {
        source: '/telegram',
        destination: 'https://t.me/s/zafarulhasan?',
        permanent: true,
      }
    ]
  },
};

export default nextConfig;
