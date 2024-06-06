/** @type {import('next').NextConfig} */
const nextConfig = {
    compiler: {
        // Enable support for TypeScript files
        typescript: {
          // Use the TypeScript compiler
          enable: true,
        },
      },
};

export default nextConfig;
