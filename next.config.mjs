/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['next-js-bucket.s3.ap-southeast-1.amazonaws.com'],
  },
};

export default nextConfig;
