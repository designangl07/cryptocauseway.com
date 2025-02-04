/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    eslint: {
      ignoreDuringBuilds: true,
    },
    images: {
      domains: ['140.238.229.20'], // Ensure domain is correct
    },
    webpack(config) {
        return config;
      },
  };
  
  export default nextConfig;
  