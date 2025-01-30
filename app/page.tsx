import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import Hero from '@/components/Hero';
import ClientLogos from '@/components/ClientLogos';
import CtaSection from '@/components/CtaSection';
import LoadingSkeleton from '@/components/LoadingSkeleton';
import TestimonialsCarousel from '@/components/TestimonialsCarousel';
import type { Metadata } from 'next';

// Lazy load heavy components
const NewsletterForm = dynamic(
  () => import('@/components/NewsletterForm'),
  { 
    loading: () => <div className="h-32 bg-neutral-100 animate-pulse rounded-lg" />,
    ssr: false 
  }
);

export const metadata: Metadata = {
  title: 'Future-Ready Digital Solutions | Fidans Online',
  description: 'Transform your business with cutting-edge blockchain, AI, and e-commerce solutions.',
};

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-[calc(100vh-64px)]">
      <Suspense fallback={<LoadingSkeleton />}>
        <Hero 
          title="Transform Your Digital Presence"
          subtitle="AI-Driven Solutions for Modern Businesses"
          ctaText="Explore Our Solutions"
          ctaLink="/services"
          videoSrc="/hero-video.mp4"
        />
      </Suspense>

      <ClientLogos className="py-16 bg-neutral-50 dark:bg-neutral-800" />

      <section className="container py-16 space-y-12">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-step-2 font-bold text-primary-600 mb-4">
            Why Choose Fidans?
          </h2>
          <p className="text-step-0 text-neutral-600 dark:text-neutral-300">
            Leverage our expertise in emerging technologies to stay ahead of the competition.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {FEATURES.map((feature) => (
            <div 
              key={feature.title}
              className="p-6 bg-white dark:bg-neutral-700 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <feature.icon className="w-12 h-12 text-primary-500 mb-4" />
              <h3 className="text-step-1 font-semibold mb-2">{feature.title}</h3>
              <p className="text-neutral-600 dark:text-neutral-200">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      <TestimonialsCarousel />

      <section className="bg-gradient-to-r from-primary-500 to-primary-700 py-20 mt-16">
        <div className="container text-center text-white">
          <h2 className="text-step-2 font-bold mb-6">
            Ready for Digital Transformation?
          </h2>
          <CtaSection 
            variant="inverted"
            className="max-w-2xl mx-auto"
          />
        </div>
      </section>

      <section className="container py-16 space-y-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-step-1 font-bold mb-4">
            Stay Ahead with Our Insights
          </h2>
          <p className="text-neutral-600 dark:text-neutral-300">
            Get exclusive access to industry trends and updates
          </p>
        </div>
        
        <NewsletterForm 
          className="max-w-xl mx-auto"
          variant="card"
        />
      </section>
    </div>
  );
}

const FEATURES = [
  {
    title: 'AI-Powered Solutions',
    description: 'Automate workflows with intelligent machine learning models',
    icon: (props) => (
      <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  {
    title: 'Blockchain Integration',
    description: 'Secure transactions with decentralized ledgers',
    icon: (props) => (
      <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    title: 'Cloud Scalability',
    description: 'Elastic infrastructure for growing businesses',
    icon: (props) => (
      <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    )
  }
];