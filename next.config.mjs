import withSerwist from '@serwist/next';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  experimental: {
    // Tree-shake large icon/component libraries so only used exports ship
    optimizePackageImports: ['lucide-react', 'motion/react', '@radix-ui/react-icons'],
  },

  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/dblgunawk/**',
      },
    ],
  },

  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          // Clickjacking
          { key: 'X-Frame-Options', value: 'DENY' },
          // MIME sniffing
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          // Referrer leakage
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          // HSTS (1 year, include subdomains)
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains; preload',
          },
          // Disable dangerous browser features; allow geolocation (used in weather tab)
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(self), payment=()',
          },
          // DNS prefetch
          { key: 'X-DNS-Prefetch-Control', value: 'on' },
          // Content-Security-Policy
          // - script-src: Next.js runtime needs 'unsafe-inline' for hydration chunks
          // - connect-src: Clerk auth & OpenAI (server-side only, but Clerk JS calls browser endpoints)
          // - img-src: broad 'https:' because DALL-E & Clerk avatar hosts vary
          // - frame-src: Crisp renders its chat widget in an iframe from client.crisp.chat
          // - frame-ancestors: blocks embedding this site in any external frame
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://clerk.voguelens.com https://*.clerk.accounts.dev https://client.crisp.chat https://va.vercel-scripts.com",
              "style-src 'self' 'unsafe-inline' https://client.crisp.chat",
              "img-src 'self' data: blob: https:",
              "font-src 'self' data: https://client.crisp.chat",
              "worker-src blob: 'self'",
              "connect-src 'self' https://api.openai.com https://*.clerk.com https://*.clerk.accounts.dev https://accounts.google.com wss://*.clerk.com https://*.crisp.chat wss://relay.crisp.chat https://va.vercel-scripts.com https://vitals.vercel-insights.com",
              "frame-src https://client.crisp.chat https://game.crisp.chat",
              "frame-ancestors 'none'",
              "object-src 'none'",
              "base-uri 'self'",
              "form-action 'self'",
              "upgrade-insecure-requests",
            ].join('; '),
          },
        ],
      },
    ];
  },
};

export default withNextIntl(
  withSerwist({
    swSrc: 'app/sw.ts',
    swDest: 'public/sw.js',
    disable: process.env.NODE_ENV === 'development',
  })(nextConfig)
);
