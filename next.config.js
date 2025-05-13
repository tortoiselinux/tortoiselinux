/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true, // Só se você quiser manter otimização off
  },
  devIndicators: false,
};

export default nextConfig;
