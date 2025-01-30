/** @type {import('next').NextConfig} */
const isProduction = process.env.NODE_ENV === 'production';
const repositoryName = 'fidans-online'; // GitHub repository adınız

const nextConfig = {
  output: 'export', // Static HTML export için zorunlu
  trailingSlash: true, // GitHub Pages için önerilen
  basePath: isProduction ? `/${repositoryName}` : '', // GitHub Pages alt dizin desteği
  assetPrefix: isProduction ? `/${repositoryName}/` : '', // Asset yolları için

  // Gelişmiş görüntü optimizasyonu
  images: {
    unoptimized: true, // Static export için gerekli
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.amazonaws.com', // AWS S3 veya diğer cloud storage'lar için
      },
    ],
  },

  // Modern React optimizasyonları
  reactStrictMode: true,
  swcMinify: true,

  // Derleme zamanı environment değişkenleri
  env: {
    NEXT_PUBLIC_GA_ID: process.env.NEXT_PUBLIC_GA_ID,
    NEXT_PUBLIC_API_BASE_URL: isProduction 
      ? 'https://api.fidans.online' 
      : 'http://localhost:3000',
  },

  // Webpack optimizasyonları
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },

  // Entegrasyonlar ve eklentiler
  experimental: {
    scrollRestoration: true, // Sayfa scroll pozisyonunu hatırlama
    legacyBrowsers: false, // Modern tarayıcı desteği
  },
};

module.exports = nextConfig;