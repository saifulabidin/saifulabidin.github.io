import type { Metadata } from 'next';
import Link from 'next/link';
import { setRequestLocale } from 'next-intl/server';
import FooterSection from '@/app/components/sections/FooterSection';
import { cookiePolicyPageSchema, cookiePolicyBreadcrumbSchema } from '@/app/constants/structuredData';
import CookiePolicyClient from './CookiePolicyClient';

const locales = ['en', 'id'];

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params: { locale }
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const isId = locale === 'id';
  const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://sabidzpro.is-a.dev';
  const canonicalUrl = `${SITE_URL}/${locale}/cookie-policy`;

  return {
    title: isId 
      ? 'Kebijakan Cookie - Saiful Abidin Portfolio' 
      : 'Cookie Policy - Saiful Abidin Portfolio',
    description: isId
      ? 'Kebijakan Cookie lengkap untuk website portofolio Saiful Abidin. Pelajari tentang penggunaan cookie dan cara mengatur preferensi privasi Anda.'
      : 'Comprehensive Cookie Policy for Saiful Abidin Portfolio website. Learn about essential, analytics, performance, and preference cookies we use.',
    alternates: {
      canonical: canonicalUrl,
      languages: {
        id: `${SITE_URL}/id/cookie-policy`,
        en: `${SITE_URL}/en/cookie-policy`,
        'x-default': `${SITE_URL}/id/cookie-policy`,
      },
    },
    openGraph: {
      title: isId 
        ? 'Kebijakan Cookie - Saiful Abidin Portfolio' 
        : 'Cookie Policy - Saiful Abidin Portfolio',
      description: isId
        ? 'Pelajari tentang penggunaan cookie dan cara mengatur preferensi privasi Anda.'
        : 'Learn about how we use cookies and similar technologies on our website.',
      url: canonicalUrl,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: isId 
        ? 'Kebijakan Cookie - Saiful Abidin Portfolio' 
        : 'Cookie Policy - Saiful Abidin Portfolio',
      description: isId
        ? 'Pelajari tentang penggunaan cookie dan cara mengatur preferensi privasi Anda.'
        : 'Learn about how we use cookies and similar technologies on our website.',
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default function CookiePolicyPage({
  params: { locale }
}: {
  params: { locale: string };
}) {
  setRequestLocale(locale);

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(cookiePolicyPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(cookiePolicyBreadcrumbSchema) }}
      />

      <div className="min-h-screen bg-[#FFFDF5] text-black neo-grid-bg">
        {/* Header */}
        <header className="sticky top-0 z-50 bg-white border-b-2 border-black">
          <div className="container mx-auto px-4 py-4 max-w-5xl">
            <div className="flex items-center justify-between">
              <Link 
                href="/" 
                className="inline-flex items-center gap-2 bg-[#FFDE59] border-2 border-black px-3.5 py-1.5 rounded-xl font-black text-sm text-black shadow-neo hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-neo-sm active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all cursor-pointer"
              >
                ← Back to Portfolio
              </Link>
              <div className="text-xs sm:text-sm font-black uppercase tracking-wider text-neutral-600">
                Updated: October 2026
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="container mx-auto px-4 py-14 max-w-4xl">
          {/* Title */}
          <div className="mb-14 text-center">
            <div className="inline-block bg-[#FFDE59] border-2 border-black px-3.5 py-1 rounded-full font-black text-xs uppercase tracking-wider shadow-neo-sm mb-4">
              Browser Storage Notice
            </div>
            <h1 className="text-4xl md:text-5xl font-black mb-3 font-display tracking-tight text-black">
              Cookie <span className="bg-[#C6F10E] border-2 border-black px-3 py-0.5 rounded-xl shadow-neo-sm">Policy</span>
            </h1>
            <p className="text-base sm:text-lg text-neutral-700 font-medium">
              Technical explanation of cookies and local storage tokens deployed on this website.
            </p>
          </div>

          {/* Content Sections */}
          <div className="space-y-6">
            <section className="bg-white p-6 sm:p-8 rounded-2xl border-2 md:border-[3px] border-black shadow-neo-md">
              <h2 className="text-xl sm:text-2xl font-black mb-3 font-display text-black">1. What Are Cookies?</h2>
              <p className="text-neutral-800 leading-relaxed font-medium mb-3">
                Cookies are small data files deposited on your browser client to retain session state, verify authenticated credentials, and optimize client caching performance.
              </p>
              <p className="text-neutral-800 leading-relaxed font-medium">
                We employ first-party session tokens and minimal analytics telemetry to maintain high performance across distributed Edge routes.
              </p>
            </section>

            <section className="bg-white p-6 sm:p-8 rounded-2xl border-2 md:border-[3px] border-black shadow-neo-md">
              <h2 className="text-xl sm:text-2xl font-black mb-3 font-display text-black">2. Categories of Storage Deployed</h2>
              <div className="space-y-4">
                <div className="p-4 bg-[#FFFDF5] border-2 border-black rounded-xl shadow-neo-sm">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="w-2.5 h-2.5 bg-[#C6F10E] border border-black rounded-full"></span>
                    <h3 className="font-black text-black text-base">Essential Tokens</h3>
                    <span className="text-xs bg-[#C6F10E] text-black border border-black px-2 py-0.5 rounded-md font-black uppercase ml-auto">Required</span>
                  </div>
                  <p className="text-xs sm:text-sm text-neutral-700 font-medium">
                    Session state, NextAuth authentication tokens, and CSRF protection headers.
                  </p>
                </div>

                <div className="p-4 bg-[#FFFDF5] border-2 border-black rounded-xl shadow-neo-sm">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="w-2.5 h-2.5 bg-[#FFDE59] border border-black rounded-full"></span>
                    <h3 className="font-black text-black text-base">Performance & Analytics</h3>
                    <span className="text-xs bg-[#FFDE59] text-black border border-black px-2 py-0.5 rounded-md font-black uppercase ml-auto">Configurable</span>
                  </div>
                  <p className="text-xs sm:text-sm text-neutral-700 font-medium">
                    Aggregated Core Web Vitals telemetry without persistent cross-domain user profiling.
                  </p>
                </div>
              </div>
            </section>

            {/* Summary Table */}
            <section className="bg-white p-6 sm:p-8 rounded-2xl border-2 md:border-[3px] border-black shadow-neo-md">
              <h2 className="text-xl sm:text-2xl font-black mb-4 font-display text-black">3. Cookie Specification Table</h2>
              <div className="overflow-x-auto rounded-xl border-2 border-black shadow-neo-sm">
                <table className="w-full text-sm text-left">
                  <thead className="text-xs uppercase bg-[#FFFDF5] border-b-2 border-black font-black">
                    <tr>
                      <th className="px-4 py-3 text-black">Category</th>
                      <th className="px-4 py-3 text-black">Purpose</th>
                      <th className="px-4 py-3 text-black">Lifespan</th>
                      <th className="px-4 py-3 text-black">Toggleable</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y-2 divide-black/10 font-medium">
                    <tr>
                      <td className="px-4 py-3 font-black text-black">Essential</td>
                      <td className="px-4 py-3 text-neutral-800">Auth & Session verification</td>
                      <td className="px-4 py-3 text-neutral-800">Session duration</td>
                      <td className="px-4 py-3 font-black text-neutral-600">No</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-black text-black">Analytics</td>
                      <td className="px-4 py-3 text-neutral-800">Vercel & Google Core Vitals</td>
                      <td className="px-4 py-3 text-neutral-800">12 Months</td>
                      <td className="px-4 py-3 font-black text-black bg-[#C6F10E]/30">Yes</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-black text-black">Preferences</td>
                      <td className="px-4 py-3 text-neutral-800">Locale & Consent status</td>
                      <td className="px-4 py-3 text-neutral-800">12 Months</td>
                      <td className="px-4 py-3 font-black text-black bg-[#C6F10E]/30">Yes</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
          </div>

          {/* Footer Navigation */}
          <div className="mt-14 pt-8 border-t-2 border-black flex flex-col sm:flex-row justify-between items-center gap-4">
            <Link 
              href="/"
              className="inline-flex items-center gap-2 text-black font-black bg-white hover:bg-[#FFDE59] border-2 border-black px-4 py-2.5 rounded-xl shadow-neo hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-neo-sm active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all cursor-pointer"
            >
              ← Back to Portfolio
            </Link>
            <CookiePolicyClient />
          </div>
        </main>

        {/* Footer */}
        <FooterSection />
      </div>
    </>
  );
}
