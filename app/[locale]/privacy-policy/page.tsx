import type { Metadata } from 'next';
import Link from 'next/link';
import { setRequestLocale } from 'next-intl/server';
import FooterSection from '@/app/components/sections/FooterSection';
import PrivacyPolicyClient from './PrivacyPolicyClient';

const locales = ['en', 'id'];

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  title: 'Privacy Policy - Saiful Abidin Portfolio',
  description: 'Comprehensive Privacy Policy for Saiful Abidin Portfolio website. Learn how we collect, use, and protect your personal information, including data collection, cookies, analytics, and your privacy rights.',
  keywords: [
    'Privacy Policy',
    'Data Protection',
    'Personal Information',
    'GDPR Compliance',
    'Data Privacy',
    'Information Security',
    'User Rights',
    'Data Collection',
    'Cookie Policy',
    'Analytics Data',
    'Contact Information',
    'Data Processing',
    'Privacy Rights',
    'Data Security',
    'Third-party Services'
  ],
  openGraph: {
    title: 'Privacy Policy - Saiful Abidin Portfolio',
    description: 'Learn how we collect, use, and protect your personal information. Your privacy is important to us.',
    url: 'https://sabidzpro.is-a.dev/privacy-policy',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privacy Policy - Saiful Abidin Portfolio',
    description: 'Learn how we collect, use, and protect your personal information. Your privacy is important to us.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPolicyPage({
  params: { locale }
}: {
  params: { locale: string };
}) {
  setRequestLocale(locale);

  return (
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
          <div className="inline-block bg-[#A6FAFF] border-2 border-black px-3.5 py-1 rounded-full font-black text-xs uppercase tracking-wider shadow-neo-sm mb-4">
            Legal Transparency
          </div>
          <h1 className="text-4xl md:text-5xl font-black mb-3 font-display tracking-tight text-black">
            Privacy <span className="bg-[#C6F10E] border-2 border-black px-3 py-0.5 rounded-xl shadow-neo-sm">Policy</span>
          </h1>
          <p className="text-base sm:text-lg text-neutral-700 font-medium">
            This policy outlines personal data handling, security architecture, and your rights.
          </p>
        </div>

        {/* Content Sections */}
        <div className="space-y-6">
          <section className="bg-white p-6 sm:p-8 rounded-2xl border-2 md:border-[3px] border-black shadow-neo-md">
            <h2 className="text-xl sm:text-2xl font-black mb-3 font-display text-black">1. Introduction</h2>
            <p className="text-neutral-800 leading-relaxed font-medium mb-3">
              Welcome to sabidzpro.is-a.dev (&quot;Website&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;). This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
            </p>
            <p className="text-neutral-800 leading-relaxed font-medium">
              Please review this policy carefully. If you do not agree with the terms outlined, please discontinue use of this site.
            </p>
          </section>

          <section className="bg-white p-6 sm:p-8 rounded-2xl border-2 md:border-[3px] border-black shadow-neo-md">
            <h2 className="text-xl sm:text-2xl font-black mb-3 font-display text-black">2. Information Collection</h2>
            
            <h3 className="text-lg font-black mb-2 text-black">2.1 Voluntary Transmission</h3>
            <p className="text-neutral-800 leading-relaxed font-medium mb-3">
              We may receive contact information you directly submit via our contact form:
            </p>
            <ul className="list-disc list-inside space-y-1.5 text-neutral-800 font-medium mb-5 ml-2">
              <li>Full Name and Professional Title</li>
              <li>Electronic mail address</li>
              <li>Project scope and message content</li>
            </ul>

            <h3 className="text-lg font-black mb-2 text-black">2.2 Automated Diagnostics</h3>
            <p className="text-neutral-800 leading-relaxed font-medium mb-3">
              When navigating this web application, standard telemetry metrics are collected via Edge analytics:
            </p>
            <ul className="list-disc list-inside space-y-1.5 text-neutral-800 font-medium ml-2">
              <li>IP address and geo-locality</li>
              <li>Browser engine and device viewport dimensions</li>
              <li>Operating system configuration</li>
              <li>Page navigation latency and server response time</li>
            </ul>
          </section>

          <section className="bg-white p-6 sm:p-8 rounded-2xl border-2 md:border-[3px] border-black shadow-neo-md">
            <h2 className="text-xl sm:text-2xl font-black mb-3 font-display text-black">3. Purpose and Data Usage</h2>
            <p className="text-neutral-800 leading-relaxed font-medium mb-3">
              Collected information serves targeted operational purposes:
            </p>
            <ul className="list-disc list-inside space-y-1.5 text-neutral-800 font-medium ml-2">
              <li>Replying to project inquiries and direct technical messages</li>
              <li>Ensuring network security and mitigating automated malicious requests</li>
              <li>Monitoring core web vitals and client rendering metrics</li>
              <li>Executing legal compliance and data protection standards</li>
            </ul>
          </section>

          <section className="bg-white p-6 sm:p-8 rounded-2xl border-2 md:border-[3px] border-black shadow-neo-md">
            <h2 className="text-xl sm:text-2xl font-black mb-3 font-display text-black">4. Third-Party Infrastructure</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              <div className="p-4 bg-[#FFFDF5] border-2 border-black rounded-xl shadow-neo-sm">
                <h4 className="font-black text-black mb-1">Vercel Analytics</h4>
                <p className="text-xs sm:text-sm text-neutral-700 font-medium">Privacy-focused edge telemetry without tracking cross-site persistent cookies.</p>
              </div>
              <div className="p-4 bg-[#FFFDF5] border-2 border-black rounded-xl shadow-neo-sm">
                <h4 className="font-black text-black mb-1">Google Maps API</h4>
                <p className="text-xs sm:text-sm text-neutral-700 font-medium">Reverse-proxied map assets for geographic coordinates display.</p>
              </div>
            </div>
          </section>

          <section className="bg-white p-6 sm:p-8 rounded-2xl border-2 md:border-[3px] border-black shadow-neo-md">
            <h2 className="text-xl sm:text-2xl font-black mb-3 font-display text-black">5. Data Subject Rights & Contact</h2>
            <p className="text-neutral-800 leading-relaxed font-medium mb-4">
              In accordance with international privacy legislation (including GDPR), you retain the right to inspect, correct, or request deletion of any stored contact data.
            </p>
            <div className="p-4 bg-[#C6F10E]/20 border-2 border-black rounded-xl shadow-neo-sm">
              <div className="text-sm font-black text-black">Direct Security & Privacy Contact:</div>
              <div className="text-sm font-bold text-neutral-800 mt-1">contact@sabidzpro.is-a.dev</div>
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
          <PrivacyPolicyClient />
        </div>
      </main>

      {/* Footer */}
      <FooterSection />
    </div>
  );
}
