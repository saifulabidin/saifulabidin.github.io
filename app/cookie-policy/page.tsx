'use client';

import type { Metadata } from 'next';
import Link from 'next/link';
import FooterSection from '@/app/components/sections/FooterSection';

export default function CookiePolicyPage() {
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
            Cookie <span className="text-[#C6F10E]">Policy</span>
          </h1>
          <p className="text-lg text-gray-300">
            Learn about how we use cookies and similar technologies on our website.
          </p>
        </div>

        {/* Content Sections */}
        <div className="space-y-8">
          {/* Introduction */}
          <section className="bg-[#19222D] p-8 rounded-2xl border border-[#C6F10E]/10">
            <h2 className="text-2xl font-bold mb-4 text-[#C6F10E]">1. What Are Cookies?</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and provide information to website owners.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Cookies help us understand how you use our website, remember your preferences, and improve your experience. We use cookies and similar tracking technologies to track activity on our website and store certain information.
            </p>
          </section>

          {/* Why We Use Cookies */}
          <section className="bg-[#19222D] p-8 rounded-2xl border border-[#C6F10E]/10">
            <h2 className="text-2xl font-bold mb-4 text-[#C6F10E]">2. Why We Use Cookies</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              We use cookies for several reasons:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
              <li>To enable certain functions of the website</li>
              <li>To provide analytics and understand how visitors use our site</li>
              <li>To enhance and personalize your user experience</li>
              <li>To remember your preferences and settings</li>
              <li>To help with security and fraud prevention</li>
              <li>To improve the performance of our website</li>
            </ul>
          </section>

          {/* Types of Cookies */}
          <section className="bg-[#19222D] p-8 rounded-2xl border border-[#C6F10E]/10">
            <h2 className="text-2xl font-bold mb-4 text-[#C6F10E]">3. Types of Cookies We Use</h2>
            
            <div className="space-y-6">
              {/* Essential Cookies */}
              <div className="bg-[#20293A] p-6 rounded-lg border border-[#C6F10E]/5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-2 h-2 bg-[#C6F10E] rounded-full"></div>
                  <h3 className="text-xl font-semibold text-white">Essential Cookies</h3>
                </div>
                <p className="text-gray-300 mb-3">
                  <strong className="text-[#C6F10E]">Required:</strong> Always Active
                </p>
                <p className="text-gray-300 text-sm leading-relaxed mb-3">
                  These cookies are strictly necessary for the website to function and cannot be switched off. They are usually only set in response to actions made by you, such as setting your privacy preferences or filling in forms.
                </p>
                <p className="text-gray-400 text-sm">
                  <strong>Examples:</strong> Session cookies, security cookies, load balancing cookies
                </p>
              </div>

              {/* Analytics Cookies */}
              <div className="bg-[#20293A] p-6 rounded-lg border border-[#C6F10E]/5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <h3 className="text-xl font-semibold text-white">Analytics Cookies</h3>
                </div>
                <p className="text-gray-300 mb-3">
                  <strong className="text-yellow-500">Optional:</strong> Can Be Disabled
                </p>
                <p className="text-gray-300 text-sm leading-relaxed mb-3">
                  These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us know which pages are most and least popular and see how visitors move around the site.
                </p>
                <p className="text-gray-400 text-sm mb-3">
                  <strong>We use:</strong>
                </p>
                <ul className="text-gray-400 text-sm space-y-1 ml-4">
                  <li>• Google Analytics (_ga, _gid, _gat)</li>
                  <li>• Vercel Analytics</li>
                </ul>
                <p className="text-gray-400 text-sm mt-3">
                  <strong>Duration:</strong> Varies from session to 2 years
                </p>
              </div>

              {/* Performance Cookies */}
              <div className="bg-[#20293A] p-6 rounded-lg border border-[#C6F10E]/5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <h3 className="text-xl font-semibold text-white">Performance Cookies</h3>
                </div>
                <p className="text-gray-300 mb-3">
                  <strong className="text-blue-500">Optional:</strong> Can Be Disabled
                </p>
                <p className="text-gray-300 text-sm leading-relaxed mb-3">
                  These cookies help improve the performance and functionality of our website but are non-essential. They may be set by us or by third-party providers whose services we use.
                </p>
                <p className="text-gray-400 text-sm">
                  <strong>Purpose:</strong> Speed optimization, error tracking, resource loading
                </p>
              </div>

              {/* Preference Cookies */}
              <div className="bg-[#20293A] p-6 rounded-lg border border-[#C6F10E]/5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <h3 className="text-xl font-semibold text-white">Preference Cookies</h3>
                </div>
                <p className="text-gray-300 mb-3">
                  <strong className="text-purple-500">Optional:</strong> Can Be Disabled
                </p>
                <p className="text-gray-300 text-sm leading-relaxed mb-3">
                  These cookies enable the website to remember information that changes the way the site behaves or looks, such as your preferred language or the region you are in.
                </p>
                <p className="text-gray-400 text-sm">
                  <strong>Examples:</strong> Language settings, theme preferences, saved choices
                </p>
              </div>
            </div>
          </section>

          {/* Cookie Duration */}
          <section className="bg-[#19222D] p-8 rounded-2xl border border-[#C6F10E]/10">
            <h2 className="text-2xl font-bold mb-4 text-[#C6F10E]">4. Cookie Duration</h2>
            
            <div className="space-y-4">
              <div className="bg-[#20293A] p-4 rounded-lg">
                <h4 className="font-semibold text-white mb-2">Session Cookies</h4>
                <p className="text-gray-300 text-sm">
                  Temporary cookies that are deleted when you close your browser. Used for essential website functionality.
                </p>
              </div>

              <div className="bg-[#20293A] p-4 rounded-lg">
                <h4 className="font-semibold text-white mb-2">Persistent Cookies</h4>
                <p className="text-gray-300 text-sm">
                  Remain on your device for a set period or until you delete them. Used to remember your preferences and provide analytics.
                </p>
                <p className="text-gray-400 text-xs mt-2">
                  Duration: From 24 hours to 2 years, depending on the cookie type
                </p>
              </div>
            </div>
          </section>

          {/* Third-Party Cookies */}
          <section className="bg-[#19222D] p-8 rounded-2xl border border-[#C6F10E]/10">
            <h2 className="text-2xl font-bold mb-4 text-[#C6F10E]">5. Third-Party Cookies</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              In addition to our own cookies, we may use various third-party cookies to report usage statistics and deliver advertisements:
            </p>
            
            <div className="space-y-4">
              <div className="bg-[#20293A] p-4 rounded-lg">
                <h4 className="font-semibold text-white mb-2">Google Analytics</h4>
                <p className="text-gray-300 text-sm mb-2">
                  Provides anonymized statistics about how visitors use our website.
                </p>
                <a 
                  href="https://policies.google.com/technologies/cookies" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#C6F10E] hover:underline text-sm"
                >
                  Learn about Google&apos;s cookie usage →
                </a>
              </div>

              <div className="bg-[#20293A] p-4 rounded-lg">
                <h4 className="font-semibold text-white mb-2">Vercel Analytics</h4>
                <p className="text-gray-300 text-sm mb-2">
                  Privacy-friendly analytics to understand website performance and usage.
                </p>
                <a 
                  href="https://vercel.com/docs/analytics/privacy-policy" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#C6F10E] hover:underline text-sm"
                >
                  Vercel Analytics Privacy →
                </a>
              </div>
            </div>
          </section>

          {/* Managing Cookies */}
          <section className="bg-[#19222D] p-8 rounded-2xl border border-[#C6F10E]/10">
            <h2 className="text-2xl font-bold mb-4 text-[#C6F10E]">6. How to Manage Cookies</h2>
            
            <h3 className="text-xl font-semibold mb-3 text-white">On Our Website</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              You can manage your cookie preferences through our Cookie Consent banner that appears when you first visit our website. You can:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4 mb-6">
              <li>Accept all cookies</li>
              <li>Reject non-essential cookies</li>
              <li>Customize your preferences for different cookie categories</li>
              <li>Change your preferences at any time by clicking the link in the footer</li>
            </ul>

            <div className="bg-[#C6F10E]/10 border border-[#C6F10E]/20 p-4 rounded-lg mb-6">
              <button
                onClick={() => {
                  if (typeof window !== 'undefined') {
                    // Clear cookie consent
                    localStorage.removeItem('cookieConsent');
                    localStorage.removeItem('cookieConsentDate');
                    localStorage.removeItem('cookiePreferences');
                    setTimeout(() => {
                      window.location.reload();
                    }, 100);
                  }
                }}
                className="bg-[#C6F10E] hover:bg-[#a5c70c] text-black font-semibold px-6 py-3 rounded-lg transition-all duration-200 transform hover:scale-105 w-full sm:w-auto"
              >
                Manage Cookie Preferences
              </button>
            </div>

            <h3 className="text-xl font-semibold mb-3 text-white">In Your Browser</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              Most web browsers allow you to control cookies through their settings. To find out more about cookies, including how to see what cookies have been set and how to manage and delete them, visit:
            </p>
            
            <div className="space-y-2 text-gray-300 mb-4">
              <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="block text-[#C6F10E] hover:underline">
                • Google Chrome →
              </a>
              <a href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer" target="_blank" rel="noopener noreferrer" className="block text-[#C6F10E] hover:underline">
                • Mozilla Firefox →
              </a>
              <a href="https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac" target="_blank" rel="noopener noreferrer" className="block text-[#C6F10E] hover:underline">
                • Safari (macOS) →
              </a>
              <a href="https://support.apple.com/en-us/HT201265" target="_blank" rel="noopener noreferrer" className="block text-[#C6F10E] hover:underline">
                • Safari (iOS) →
              </a>
              <a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="block text-[#C6F10E] hover:underline">
                • Microsoft Edge →
              </a>
            </div>

            <p className="text-gray-400 text-sm">
              <strong>Note:</strong> Blocking all cookies may affect your ability to use certain features of our website.
            </p>
          </section>

          {/* Do Not Track */}
          <section className="bg-[#19222D] p-8 rounded-2xl border border-[#C6F10E]/10">
            <h2 className="text-2xl font-bold mb-4 text-[#C6F10E]">7. Do Not Track Signals</h2>
            <p className="text-gray-300 leading-relaxed">
              Some browsers have a &quot;Do Not Track&quot; feature that lets you tell websites that you do not want to have your online activities tracked. We respect Do Not Track signals and will not track, plant cookies, or use advertising when a Do Not Track browser mechanism is in place.
            </p>
          </section>

          {/* Local Storage */}
          <section className="bg-[#19222D] p-8 rounded-2xl border border-[#C6F10E]/10">
            <h2 className="text-2xl font-bold mb-4 text-[#C6F10E]">8. Local Storage</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              In addition to cookies, we use browser local storage to store:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
              <li>Your cookie consent preferences</li>
              <li>Theme and display preferences</li>
              <li>Temporary session data</li>
            </ul>
            <p className="text-gray-300 leading-relaxed mt-4">
              Local storage is similar to cookies but can store more data and persists even when you close your browser. You can clear local storage through your browser settings.
            </p>
          </section>

          {/* Updates to Policy */}
          <section className="bg-[#19222D] p-8 rounded-2xl border border-[#C6F10E]/10">
            <h2 className="text-2xl font-bold mb-4 text-[#C6F10E]">9. Updates to This Policy</h2>
            <p className="text-gray-300 leading-relaxed">
              We may update this Cookie Policy from time to time to reflect changes in technology, legislation, or our business operations. When we make changes, we will update the &quot;Last Updated&quot; date at the top of this policy.
            </p>
          </section>

          {/* Contact */}
          <section className="bg-[#19222D] p-8 rounded-2xl border border-[#C6F10E]/10">
            <h2 className="text-2xl font-bold mb-4 text-[#C6F10E]">10. Contact Us</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              If you have questions about our use of cookies, please contact us:
            </p>
            <div className="space-y-2 text-gray-300">
              <p><strong className="text-white">Email:</strong> <a href="mailto:contact@sabidzpro.is-a.dev" className="text-[#C6F10E] hover:underline">contact@sabidzpro.is-a.dev</a></p>
              <p><strong className="text-white">Website:</strong> <a href="https://sabidzpro.is-a.dev" className="text-[#C6F10E] hover:underline">sabidzpro.is-a.dev</a></p>
            </div>
          </section>

          {/* Summary Table */}
          <section className="bg-[#19222D] p-8 rounded-2xl border border-[#C6F10E]/10">
            <h2 className="text-2xl font-bold mb-4 text-[#C6F10E]">11. Cookie Summary Table</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left">
                <thead className="text-xs uppercase bg-[#20293A]">
                  <tr>
                    <th className="px-4 py-3 text-[#C6F10E]">Category</th>
                    <th className="px-4 py-3 text-[#C6F10E]">Purpose</th>
                    <th className="px-4 py-3 text-[#C6F10E]">Duration</th>
                    <th className="px-4 py-3 text-[#C6F10E]">Optional</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-700">
                    <td className="px-4 py-3 text-white font-semibold">Essential</td>
                    <td className="px-4 py-3 text-gray-300">Site functionality</td>
                    <td className="px-4 py-3 text-gray-300">Session</td>
                    <td className="px-4 py-3 text-red-400">No</td>
                  </tr>
                  <tr className="border-b border-gray-700">
                    <td className="px-4 py-3 text-white font-semibold">Analytics</td>
                    <td className="px-4 py-3 text-gray-300">Usage statistics</td>
                    <td className="px-4 py-3 text-gray-300">Up to 2 years</td>
                    <td className="px-4 py-3 text-green-400">Yes</td>
                  </tr>
                  <tr className="border-b border-gray-700">
                    <td className="px-4 py-3 text-white font-semibold">Performance</td>
                    <td className="px-4 py-3 text-gray-300">Speed & optimization</td>
                    <td className="px-4 py-3 text-gray-300">Session to 1 year</td>
                    <td className="px-4 py-3 text-green-400">Yes</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-white font-semibold">Preferences</td>
                    <td className="px-4 py-3 text-gray-300">Save settings</td>
                    <td className="px-4 py-3 text-gray-300">Up to 1 year</td>
                    <td className="px-4 py-3 text-green-400">Yes</td>
                  </tr>
                </tbody>
              </table>
            </div>
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
                href="/privacy-policy"
                className="text-gray-400 hover:text-[#C6F10E] transition-colors"
              >
                Privacy Policy
              </Link>
              <span className="text-gray-600">•</span>
              <Link 
                href="/#contact"
                className="text-gray-400 hover:text-[#C6F10E] transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <FooterSection />
    </div>
  );
}
