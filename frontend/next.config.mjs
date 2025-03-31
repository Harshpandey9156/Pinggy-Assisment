/** @type {import('next').NextConfig} */
const nextConfig = {
    // Enable React strict mode
    reactStrictMode: true,
    
    // Configure webpack to handle the @/ alias
    webpack: (config) => {
      config.resolve.alias = {
        ...config.resolve.alias,
        '@': require('path').resolve(__dirname, 'src'),
      };
      return config;
    },
    
    // Optional: Enable SWC minification (faster than Terser)
    swcMinify: true,
    
    // Optional: Configure images if you're using next/image
    images: {
      domains: [], // Add external image domains here if needed
    },
    
    // Optional: Enable experimental features if needed
    experimental: {
      // appDir: true,  // Uncomment if using Next.js 13+ app directory
      // serverActions: true,  // For Next.js 13.4+ server actions
    }
  };
  
  export default nextConfig;