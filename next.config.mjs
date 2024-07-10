/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      formats:['image/avif', 'image/webp'],
      dangerouslyAllowSVG: true,
        remotePatterns: [
          {
            protocol:'https',
            hostname:'cdn.sanity.io'
          }
        ],
      },

};

export default nextConfig;
