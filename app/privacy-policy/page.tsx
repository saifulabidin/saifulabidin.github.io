import type { Metadata } from 'next';
import Link from 'next/link';
import FooterSection from '@/app/components/sections/FooterSection';
import PrivacyPolicyClient from './PrivacyPolicyClient';

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

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-[#20293A] text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#19222D]/95 backdrop-blur-sm border-b border-[#C6F10E]/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-xl font-bold text-[#C6F10E] hover:text-white transition-colors">
              ← Back to Portfolio
            </Link>
            <div className="text-sm text-gray-400">
              Last Updated: October 3, 2025
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Title */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Privacy <span className="text-[#C6F10E]">Policy</span>
          </h1>
          <p className="text-lg text-gray-300">
            Your privacy is important to us. This policy explains how we handle your information.
          </p>
        </div>

        {/* Content Sections */}
        <div className="space-y-8">
          {/* Introduction */}
          <section className="bg-[#19222D] p-8 rounded-2xl border border-[#C6F10E]/10">
            <h2 className="text-2xl font-bold mb-4 text-[#C6F10E]">1. Introduction</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Welcome to sabidzpro.is-a.dev (&quot;Website&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;). This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
            </p>
          </section>

          {/* Information We Collect */}
          <section className="bg-[#19222D] p-8 rounded-2xl border border-[#C6F10E]/10">
            <h2 className="text-2xl font-bold mb-4 text-[#C6F10E]">2. Information We Collect</h2>
            
            <h3 className="text-xl font-semibold mb-3 text-white">2.1 Personal Information</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              We may collect personal information that you voluntarily provide to us when you:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-300 mb-6 ml-4">
              <li>Fill out contact forms</li>
              <li>Send us emails</li>
              <li>Subscribe to our newsletter (if applicable)</li>
              <li>Interact with our website features</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 text-white">2.2 Automatically Collected Information</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              When you visit our website, we automatically collect certain information about your device, including:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
              <li>IP address</li>
              <li>Browser type and version</li>
              <li>Operating system</li>
              <li>Pages visited and time spent</li>
              <li>Referring website</li>
              <li>Device information</li>
            </ul>
          </section>

          {/* How We Use Your Information */}
          <section className="bg-[#19222D] p-8 rounded-2xl border border-[#C6F10E]/10">
            <h2 className="text-2xl font-bold mb-4 text-[#C6F10E]">3. How We Use Your Information</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              We use the information we collect in the following ways:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
              <li>To respond to your inquiries and provide customer support</li>
              <li>To improve our website and user experience</li>
              <li>To analyze website traffic and usage patterns</li>
              <li>To send periodic emails (if you opted in)</li>
              <li>To prevent fraudulent activity and improve security</li>
              <li>To comply with legal obligations</li>
            </ul>
          </section>

          {/* Cookies and Tracking */}
          <section className="bg-[#19222D] p-8 rounded-2xl border border-[#C6F10E]/10">
            <h2 className="text-2xl font-bold mb-4 text-[#C6F10E]">4. Cookies and Tracking Technologies</h2>
            
            <h3 className="text-xl font-semibold mb-3 text-white">4.1 What Are Cookies?</h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              Cookies are small text files stored on your device that help us provide a better experience. We use both session cookies (expire when you close your browser) and persistent cookies (remain until deleted or expired).
            </p>

            <h3 className="text-xl font-semibold mb-3 text-white">4.2 Types of Cookies We Use</h3>
            
            <div className="space-y-4 mb-6">
              <div className="bg-[#20293A] p-4 rounded-lg">
                <h4 className="font-semibold text-[#C6F10E] mb-2">Essential Cookies</h4>
                <p className="text-gray-300 text-sm">
                  Required for the website to function properly. Cannot be disabled.
                </p>
              </div>

              <div className="bg-[#20293A] p-4 rounded-lg">
                <h4 className="font-semibold text-[#C6F10E] mb-2">Analytics Cookies</h4>
                <p className="text-gray-300 text-sm">
                  Help us understand how visitors interact with our website (Google Analytics, Vercel Analytics).
                </p>
              </div>

              <div className="bg-[#20293A] p-4 rounded-lg">
                <h4 className="font-semibold text-[#C6F10E] mb-2">Performance Cookies</h4>
                <p className="text-gray-300 text-sm">
                  Monitor website performance and improve user experience.
                </p>
              </div>
            </div>

            <h3 className="text-xl font-semibold mb-3 text-white">4.3 Managing Cookies</h3>
            <p className="text-gray-300 leading-relaxed">
              You can control cookies through our Cookie Settings banner or your browser settings. Note that disabling certain cookies may limit website functionality.
            </p>
          </section>

          {/* Third-Party Services */}
          <section className="bg-[#19222D] p-8 rounded-2xl border border-[#C6F10E]/10">
            <h2 className="text-2xl font-bold mb-4 text-[#C6F10E]">5. Third-Party Services</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              We use the following third-party services:
            </p>
            
            <div className="space-y-4">
              <div className="bg-[#20293A] p-4 rounded-lg">
                <h4 className="font-semibold text-white mb-2">Google Analytics</h4>
                <p className="text-gray-300 text-sm mb-2">
                  Tracks website usage and visitor behavior.
                </p>
                <a 
                  href="https://policies.google.com/privacy" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#C6F10E] hover:underline text-sm"
                >
                  Google Privacy Policy →
                </a>
              </div>

              <div className="bg-[#20293A] p-4 rounded-lg">
                <h4 className="font-semibold text-white mb-2">Vercel Analytics</h4>
                <p className="text-gray-300 text-sm mb-2">
                  Monitors website performance and analytics.
                </p>
                <a 
                  href="https://vercel.com/legal/privacy-policy" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#C6F10E] hover:underline text-sm"
                >
                  Vercel Privacy Policy →
                </a>
              </div>

              <div className="bg-[#20293A] p-4 rounded-lg">
                <h4 className="font-semibold text-white mb-2">EmailJS</h4>
                <p className="text-gray-300 text-sm mb-2">
                  Handles contact form submissions.
                </p>
                <a 
                  href="https://www.emailjs.com/legal/privacy-policy/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#C6F10E] hover:underline text-sm"
                >
                  EmailJS Privacy Policy →
                </a>
              </div>
            </div>
          </section>

          {/* Data Security */}
          <section className="bg-[#19222D] p-8 rounded-2xl border border-[#C6F10E]/10">
            <h2 className="text-2xl font-bold mb-4 text-[#C6F10E]">6. Data Security</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
            </p>
            <p className="text-gray-300 leading-relaxed">
              However, please note that no method of transmission over the internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.
            </p>
          </section>

          {/* Your Rights */}
          <section className="bg-[#19222D] p-8 rounded-2xl border border-[#C6F10E]/10">
            <h2 className="text-2xl font-bold mb-4 text-[#C6F10E]">7. Your Privacy Rights</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Under GDPR and other privacy laws, you have the following rights:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
              <li><strong className="text-white">Right to Access:</strong> Request copies of your personal data</li>
              <li><strong className="text-white">Right to Rectification:</strong> Request correction of inaccurate data</li>
              <li><strong className="text-white">Right to Erasure:</strong> Request deletion of your data</li>
              <li><strong className="text-white">Right to Restrict Processing:</strong> Request limitation of data processing</li>
              <li><strong className="text-white">Right to Data Portability:</strong> Request transfer of your data</li>
              <li><strong className="text-white">Right to Object:</strong> Object to processing of your data</li>
              <li><strong className="text-white">Right to Withdraw Consent:</strong> Withdraw consent at any time</li>
            </ul>
          </section>

          {/* Children's Privacy */}
          <section className="bg-[#19222D] p-8 rounded-2xl border border-[#C6F10E]/10">
            <h2 className="text-2xl font-bold mb-4 text-[#C6F10E]">8. Children&apos;s Privacy</h2>
            <p className="text-gray-300 leading-relaxed">
              Our website is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe we have collected information from your child, please contact us immediately.
            </p>
          </section>

          {/* Data Retention */}
          <section className="bg-[#19222D] p-8 rounded-2xl border border-[#C6F10E]/10">
            <h2 className="text-2xl font-bold mb-4 text-[#C6F10E]">9. Data Retention</h2>
            <p className="text-gray-300 leading-relaxed">
              We retain your personal information only for as long as necessary to fulfill the purposes outlined in this privacy policy, unless a longer retention period is required by law. Analytics data is typically retained for 26 months, while contact form data is retained until you request deletion.
            </p>
          </section>

          {/* International Transfers */}
          <section className="bg-[#19222D] p-8 rounded-2xl border border-[#C6F10E]/10">
            <h2 className="text-2xl font-bold mb-4 text-[#C6F10E]">10. International Data Transfers</h2>
            <p className="text-gray-300 leading-relaxed">
              Your information may be transferred to and processed in countries other than your country of residence. These countries may have different data protection laws. By using our website, you consent to the transfer of your information to these countries.
            </p>
          </section>

          {/* Changes to Policy */}
          <section className="bg-[#19222D] p-8 rounded-2xl border border-[#C6F10E]/10">
            <h2 className="text-2xl font-bold mb-4 text-[#C6F10E]">11. Changes to This Privacy Policy</h2>
            <p className="text-gray-300 leading-relaxed">
              We may update this privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page and updating the &quot;Last Updated&quot; date. You are advised to review this privacy policy periodically for any changes.
            </p>
          </section>

          {/* Contact Information */}
          <section className="bg-[#19222D] p-8 rounded-2xl border border-[#C6F10E]/10">
            <h2 className="text-2xl font-bold mb-4 text-[#C6F10E]">12. Contact Us</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              If you have any questions about this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="space-y-2 text-gray-300">
              <p><strong className="text-white">Email:</strong> <a href="mailto:contact@sabidzpro.is-a.dev" className="text-[#C6F10E] hover:underline">contact@sabidzpro.is-a.dev</a></p>
              <p><strong className="text-white">Website:</strong> <a href="https://sabidzpro.is-a.dev" className="text-[#C6F10E] hover:underline">sabidzpro.is-a.dev</a></p>
              <p><strong className="text-white">Location:</strong> Wonogiri, Indonesia</p>
            </div>
          </section>

          {/* GDPR Compliance */}
          <section className="bg-[#19222D] p-8 rounded-2xl border border-[#C6F10E]/10">
            <h2 className="text-2xl font-bold mb-4 text-[#C6F10E]">13. GDPR Compliance</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              We are committed to complying with the General Data Protection Regulation (GDPR) and other applicable data protection laws. This includes:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
              <li>Obtaining explicit consent before processing personal data</li>
              <li>Providing clear information about data processing</li>
              <li>Implementing appropriate security measures</li>
              <li>Respecting your rights regarding your personal data</li>
              <li>Reporting data breaches within 72 hours</li>
              <li>Appointing a Data Protection Officer (if required)</li>
            </ul>
          </section>
        </div>

        {/* Footer Navigation */}
        <div className="mt-12 pt-8 border-t border-[#C6F10E]/20">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <Link 
              href="/"
              className="text-[#C6F10E] hover:text-white transition-colors font-medium"
            >
              ← Back to Home
            </Link>
            <div className="flex gap-4">
              <Link 
                href="/#contact"
                className="text-gray-400 hover:text-[#C6F10E] transition-colors"
              >
                Contact
              </Link>
              <span className="text-gray-600">•</span>
              <PrivacyPolicyClient />
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <FooterSection />
    </div>
  );
}
