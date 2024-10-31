/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['next-js-bucket.s3.ap-southeast-1.amazonaws.com'],
  },
  async headers() {
    return [
      {
        source: '/(.*)', // Adjust this path as needed
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "frame-ancestors 'self' https://www.google.com", // Add allowed domains here
          },
        ],
      },
    ];
  },
};

export default nextConfig;
