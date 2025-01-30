import './globals.css';
import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import { Suspense } from 'react';
import ErrorBoundary from '@/components/ErrorBoundary';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  weight: ['400', '500', '600', '700']
});

export const metadata: Metadata = {
  title: {
    template: '%s | Fidans Online',
    default: 'Fidans Online - Future-Ready Digital Solutions',
  },
  description: 'Sustainable digital solutions, e-commerce, blockchain & AI consulting services.',
  keywords: ['digital transformation', 'e-commerce', 'blockchain', 'AI consulting', 'web3'],
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://fidans.online',
    siteName: 'Fidans Online',
    images: [{
      url: '/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'Fidans Online OG Image',
    }]
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@fidansonline',
    images: '/twitter-image.jpg'
  },
  manifest: '/site.webmanifest',
  metadataBase: new URL('https://fidans.online')
};

export const viewport: Viewport = {
  themeColor: '#0f172a',
  colorScheme: 'light dark',
  width: 'device-width',
  initialScale: 1
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable}`} suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
      </head>
      <body className="min-h-screen bg-slate-50 dark:bg-slate-900 antialiased">
        <ErrorBoundary fallback={<div>Something went wrong</div>}>
          <Suspense fallback={<div>Loading...</div>}>
            <Navbar />
            <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
              {children}
            </main>
          </Suspense>
        </ErrorBoundary>
      </body>
    </html>
  );
}