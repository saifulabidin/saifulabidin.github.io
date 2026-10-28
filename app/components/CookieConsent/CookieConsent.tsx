'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import CookieSettings from './CookieSettings';
import {
  initializeCookieConsent,
  setCookieConsentWithVersion,
  getCookiePreferences,
  setCookiePreferences,
  isDoNotTrackEnabled
} from '@/app/lib/cookies';

interface CookieConsentProps {
  onAccept?: () => void;
  onReject?: () => void;
}

export default function CookieConsent({ onAccept, onReject }: CookieConsentProps) {
  const [showBanner, setShowBanner] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [showSettings, setShowSettings] = useState(false);

  useEffect(() => {
    // Initialize cookie consent system
    const { shouldShow, reason } = initializeCookieConsent();

    if (shouldShow) {
      // Show banner after 1 second delay
      const timer = setTimeout(() => {
        setShowBanner(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    setCookieConsentWithVersion('accepted');

    // Set all preferences to true (accept all)
    const prefs = getCookiePreferences();
    const allAccepted = {
      ...prefs,
      essential: true,
      analytics: true,
      marketing: true,
      preferences: true,
    };
    setCookiePreferences(allAccepted);

    setIsVisible(false);

    // Enable analytics and tracking
    if (typeof window !== 'undefined') {
      // Google Analytics consent
      if (window.gtag) {
        window.gtag('consent', 'update', {
          'analytics_storage': 'granted',
          'ad_storage': 'granted',
          'functionality_storage': 'granted',
        });
      }
    }

    onAccept?.();

    setTimeout(() => {
      setShowBanner(false);
    }, 300);
  };

  const handleReject = () => {
    setCookieConsentWithVersion('rejected');

    // Set all preferences to false except essential
    const onlyEssential = {
      essential: true,
      analytics: false,
      marketing: false,
      preferences: false,
    };
    setCookiePreferences(onlyEssential);

    setIsVisible(false);

    // Disable analytics and tracking
    if (typeof window !== 'undefined') {
      if (window.gtag) {
        window.gtag('consent', 'update', {
          'analytics_storage': 'denied',
          'ad_storage': 'denied',
          'functionality_storage': 'denied',
        });
      }
    }

    onReject?.();

    setTimeout(() => {
      setShowBanner(false);
    }, 300);
  };

  const handleCustomize = () => {
    setShowSettings(true);
  };

  const handleSettingsSave = () => {
    setIsVisible(false);
    setTimeout(() => {
      setShowBanner(false);
    }, 300);
  };

  if (!showBanner) return null;

  return (
    <>
      <CookieSettings 
        isOpen={showSettings} 
        onClose={() => setShowSettings(false)}
        onSave={handleSettingsSave}
      />
      
      <AnimatePresence>
        {isVisible && (
          <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="fixed bottom-0 left-0 right-0 z-[9999] p-4 md:p-6"
          role="dialog"
          aria-labelledby="cookie-consent-title"
          aria-describedby="cookie-consent-description"
          aria-live="polite"
        >
          <div className="container mx-auto max-w-6xl">
            <div className="bg-white border-2 md:border-[3px] border-black rounded-2xl shadow-neo-lg overflow-hidden">
              {/* Top Accent Stripe */}
              <div className="h-2 bg-[#C6F10E] border-b-2 border-black"></div>
              
              <div className="p-6 md:p-8">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                  {/* Content */}
                  <div className="flex-1 space-y-3">
                    <div className="flex items-center gap-3">
                      {/* Cookie Icon */}
                      <div className="flex-shrink-0 w-10 h-10 bg-[#FFDE59] border-2 border-black rounded-xl shadow-[2px_2px_0px_0px_#000] flex items-center justify-center">
                        <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      
                      <div>
                        <h3 id="cookie-consent-title" className="text-lg md:text-xl font-black text-black font-display">
                          Privacy & Local Storage Notice
                        </h3>
                      </div>
                    </div>

                    <p id="cookie-consent-description" className="text-sm md:text-base text-neutral-800 leading-relaxed font-medium">
                      This website utilizes essential cookies and browser telemetry to ensure reliable performance and user interface preferences.{' '}
                      <Link
                        href="/privacy-policy"
                        className="text-black font-black underline hover:bg-[#FFDE59]"
                        aria-label="Learn more about our privacy policy"
                      >
                        Review Privacy Policy
                      </Link>
                    </p>

                    {/* Cookie categories */}
                    <div className="flex flex-wrap gap-2 pt-1" role="list" aria-label="Cookie categories">
                      <span className="inline-flex items-center px-3 py-0.5 rounded-full text-xs font-black bg-[#FFFDF5] text-black border border-black shadow-[1px_1px_0px_0px_#000]" role="listitem">
                        Essential
                      </span>
                      <span className="inline-flex items-center px-3 py-0.5 rounded-full text-xs font-black bg-[#FFFDF5] text-black border border-black shadow-[1px_1px_0px_0px_#000]" role="listitem">
                        Analytics
                      </span>
                      <span className="inline-flex items-center px-3 py-0.5 rounded-full text-xs font-black bg-[#FFFDF5] text-black border border-black shadow-[1px_1px_0px_0px_#000]" role="listitem">
                        Marketing
                      </span>
                      <span className="inline-flex items-center px-3 py-0.5 rounded-full text-xs font-black bg-[#FFFDF5] text-black border border-black shadow-[1px_1px_0px_0px_#000]" role="listitem">
                        Preferences
                      </span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-col sm:flex-row gap-3 lg:flex-col lg:min-w-[200px]" role="group" aria-label="Cookie consent actions">
                    {/* Accept Button */}
                    <button
                      onClick={handleAccept}
                      className="w-full sm:flex-1 lg:w-full bg-[#C6F10E] text-black font-black px-6 py-3 rounded-xl border-2 border-black shadow-neo hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-neo-sm active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all cursor-pointer"
                      aria-label="Accept all cookies"
                    >
                      Accept All
                    </button>

                    {/* Reject Button */}
                    <button
                      onClick={handleReject}
                      className="w-full sm:flex-1 lg:w-full bg-white text-black font-black px-6 py-3 rounded-xl border-2 border-black shadow-neo hover:bg-[#FFDE59] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-neo-sm active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all cursor-pointer"
                      aria-label="Reject all non-essential cookies"
                    >
                      Reject Non-Essential
                    </button>

                    {/* Customize Button */}
                    <button
                      onClick={handleCustomize}
                      className="w-full text-xs font-black uppercase text-neutral-700 hover:text-black py-1 cursor-pointer transition-colors"
                      aria-label="Customize cookie settings"
                    >
                      Configure Preferences
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

// Type declaration for gtag
declare global {
  interface Window {
    gtag?: (
      command: string,
      action: string,
      params: Record<string, string>
    ) => void;
  }
}