'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import {
  CookiePreferences,
  getCookiePreferences,
  setCookiePreferences,
  setCookieConsentWithVersion,
  isDoNotTrackEnabled
} from '@/app/lib/cookies';

interface CookieSettingsProps {
  isOpen: boolean;
  onClose: () => void;
  onSave?: (preferences: CookiePreferences) => void;
}

export default function CookieSettings({ isOpen, onClose, onSave }: CookieSettingsProps) {
  const [preferences, setPreferences] = useState<CookiePreferences>({
    essential: true,
    analytics: false,
    marketing: false,
    preferences: false,
  });

  useEffect(() => {
    if (isOpen) {
      const currentPrefs = getCookiePreferences();
      const dntEnabled = isDoNotTrackEnabled();

      if (dntEnabled) {
        // If DNT is enabled, show warning and disable optional cookies
        setPreferences({
          essential: true,
          analytics: false,
          marketing: false,
          preferences: false,
        });
      } else {
        setPreferences(currentPrefs);
      }
    }
  }, [isOpen]);

  const handleToggle = (category: keyof CookiePreferences) => {
    const dntEnabled = isDoNotTrackEnabled();

    // Essential cookies cannot be toggled
    if (category === 'essential') return;

    // If DNT is enabled, prevent toggling optional cookies
    if (dntEnabled) return;

    // Type guard to ensure we're working with optional cookie categories
    const optionalCategory = category as Exclude<keyof CookiePreferences, 'essential'>;

    setPreferences(prev => ({
      ...prev,
      [optionalCategory]: !prev[optionalCategory],
    }));
  };

  const handleSave = () => {
    setCookiePreferences(preferences);
    setCookieConsentWithVersion('accepted');

    // Update Google Analytics consent
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('consent', 'update', {
        'analytics_storage': preferences.analytics ? 'granted' : 'denied',
        'ad_storage': preferences.marketing ? 'granted' : 'denied',
        'functionality_storage': preferences.preferences ? 'granted' : 'denied',
      });
    }

    onSave?.(preferences);
    onClose();
  };

  const handleAcceptAll = () => {
    const dntEnabled = isDoNotTrackEnabled();

    const allAccepted: CookiePreferences = {
      essential: true,
      analytics: !dntEnabled,
      marketing: !dntEnabled,
      preferences: !dntEnabled,
    };

    setPreferences(allAccepted);
    setCookiePreferences(allAccepted);
    setCookieConsentWithVersion('accepted');

    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('consent', 'update', {
        'analytics_storage': allAccepted.analytics ? 'granted' : 'denied',
        'ad_storage': allAccepted.marketing ? 'granted' : 'denied',
        'functionality_storage': allAccepted.preferences ? 'granted' : 'denied',
      });
    }

    onSave?.(allAccepted);
    onClose();
  };

  const handleRejectAll = () => {
    const onlyEssential: CookiePreferences = {
      essential: true,
      analytics: false,
      marketing: false,
      preferences: false,
    };
    setPreferences(onlyEssential);
    setCookiePreferences(onlyEssential);
    setCookieConsentWithVersion('rejected');

    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('consent', 'update', {
        'analytics_storage': 'denied',
        'ad_storage': 'denied',
        'functionality_storage': 'denied',
      });
    }

    onSave?.(onlyEssential);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[10000]"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[10001] flex items-center justify-center p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-white border-2 md:border-[3px] border-black rounded-2xl shadow-neo-xl max-w-3xl w-full max-h-[90vh] overflow-hidden flex flex-col text-black">
              {/* Header */}
              <div className="relative p-6 border-b-2 border-black bg-[#FFFDF5]">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#FFDE59] border-2 border-black rounded-xl shadow-[2px_2px_0px_0px_#000] flex items-center justify-center">
                      <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h2 className="text-2xl font-black text-black font-display">Cookie Settings</h2>
                      <p className="text-xs sm:text-sm font-semibold text-neutral-600">Manage your cookie and telemetry preferences</p>
                    </div>
                  </div>
                  
                  <button
                    onClick={onClose}
                    className="p-2 border-2 border-black bg-[#FF90E8] rounded-xl shadow-neo-sm hover:translate-x-[1px] hover:translate-y-[1px] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all cursor-pointer"
                    aria-label="Close"
                  >
                    <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 overflow-y-auto p-6 space-y-6">
                {/* Do Not Track Warning */}
                {isDoNotTrackEnabled() && (
                  <div className="bg-[#FFDE59] border-2 border-black rounded-xl p-4 mb-6 shadow-neo-sm">
                    <div className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-black mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                      </svg>
                      <div className="flex-1">
                        <h4 className="text-sm font-black text-black mb-1">Do Not Track Enabled</h4>
                        <p className="text-xs text-neutral-800 font-medium leading-relaxed">
                          Your browser has Do Not Track enabled. We respect your privacy and have automatically disabled all optional cookies. Only essential cookies required for the website to function will be used.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
                {/* Essential Cookies */}
                <div className="space-y-3 bg-white p-4 rounded-xl border-2 border-black shadow-neo-sm">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-lg font-black text-black font-display">Essential Cookies</h3>
                        <span className="text-xs bg-[#C6F10E] text-black border border-black px-2.5 py-0.5 rounded-md font-black uppercase">
                          Always Active
                        </span>
                      </div>
                      <p className="text-sm text-neutral-700 font-medium leading-relaxed">
                        These cookies are necessary for the website to function and cannot be switched off. 
                        They are usually only set in response to actions made by you such as setting your privacy preferences, 
                        logging in or filling in forms.
                      </p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        <span className="text-xs bg-[#FFFDF5] border border-black text-black font-bold px-2.5 py-1 rounded-md">Session Management</span>
                        <span className="text-xs bg-[#FFFDF5] border border-black text-black font-bold px-2.5 py-1 rounded-md">Security</span>
                        <span className="text-xs bg-[#FFFDF5] border border-black text-black font-bold px-2.5 py-1 rounded-md">Authentication</span>
                      </div>
                    </div>
                    <div className="flex-shrink-0 pt-1">
                      <div className="w-12 h-7 bg-[#C6F10E] border-2 border-black rounded-full flex items-center justify-end px-1 cursor-not-allowed">
                        <div className="w-4 h-4 bg-black rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Analytics Cookies */}
                <div className="space-y-3 bg-white p-4 rounded-xl border-2 border-black shadow-neo-sm">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-black text-black font-display mb-2">Analytics Cookies</h3>
                      <p className="text-sm text-neutral-700 font-medium leading-relaxed">
                        These cookies allow us to count visits and traffic sources so we can measure and improve 
                        the performance of our site. They help us understand which pages are the most and least popular 
                        and see how visitors move around the site.
                      </p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        <span className="text-xs bg-[#FFFDF5] border border-black text-black font-bold px-2.5 py-1 rounded-md">Google Analytics</span>
                        <span className="text-xs bg-[#FFFDF5] border border-black text-black font-bold px-2.5 py-1 rounded-md">Vercel Analytics</span>
                        <span className="text-xs bg-[#FFFDF5] border border-black text-black font-bold px-2.5 py-1 rounded-md">Usage Stats</span>
                      </div>
                    </div>
                    <div className="flex-shrink-0 pt-1">
                      <button
                        onClick={() => handleToggle('analytics')}
                        className={`w-12 h-7 rounded-full border-2 border-black transition-colors ${
                          preferences.analytics ? 'bg-[#C6F10E]' : 'bg-neutral-200'
                        } flex items-center ${preferences.analytics ? 'justify-end' : 'justify-start'} px-1 cursor-pointer`}
                        aria-label="Toggle analytics cookies"
                      >
                        <div className="w-4 h-4 bg-black rounded-full transition-transform"></div>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Marketing Cookies */}
                <div className="space-y-3 bg-white p-4 rounded-xl border-2 border-black shadow-neo-sm">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-black text-black font-display mb-2">Marketing Cookies</h3>
                      <p className="text-sm text-neutral-700 font-medium leading-relaxed">
                        These cookies may be set through our site by our advertising partners. They may be used by those 
                        companies to build a profile of your interests and show you relevant adverts on other sites.
                      </p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        <span className="text-xs bg-[#FFFDF5] border border-black text-black font-bold px-2.5 py-1 rounded-md">Ad Targeting</span>
                        <span className="text-xs bg-[#FFFDF5] border border-black text-black font-bold px-2.5 py-1 rounded-md">Social Media</span>
                        <span className="text-xs bg-[#FFFDF5] border border-black text-black font-bold px-2.5 py-1 rounded-md">Remarketing</span>
                      </div>
                    </div>
                    <div className="flex-shrink-0 pt-1">
                      <button
                        onClick={() => handleToggle('marketing')}
                        className={`w-12 h-7 rounded-full border-2 border-black transition-colors ${
                          preferences.marketing ? 'bg-[#C6F10E]' : 'bg-neutral-200'
                        } flex items-center ${preferences.marketing ? 'justify-end' : 'justify-start'} px-1 cursor-pointer`}
                        aria-label="Toggle marketing cookies"
                      >
                        <div className="w-4 h-4 bg-black rounded-full transition-transform"></div>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Preferences Cookies */}
                <div className="space-y-3 bg-white p-4 rounded-xl border-2 border-black shadow-neo-sm">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-black text-black font-display mb-2">Preference Cookies</h3>
                      <p className="text-sm text-neutral-700 font-medium leading-relaxed">
                        These cookies enable the website to remember choices you make (such as your language or the region 
                        you are in) and provide enhanced, more personal features.
                      </p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        <span className="text-xs bg-[#FFFDF5] border border-black text-black font-bold px-2.5 py-1 rounded-md">Language</span>
                        <span className="text-xs bg-[#FFFDF5] border border-black text-black font-bold px-2.5 py-1 rounded-md">Theme</span>
                        <span className="text-xs bg-[#FFFDF5] border border-black text-black font-bold px-2.5 py-1 rounded-md">Layout</span>
                      </div>
                    </div>
                    <div className="flex-shrink-0 pt-1">
                      <button
                        onClick={() => handleToggle('preferences')}
                        className={`w-12 h-7 rounded-full border-2 border-black transition-colors ${
                          preferences.preferences ? 'bg-[#C6F10E]' : 'bg-neutral-200'
                        } flex items-center ${preferences.preferences ? 'justify-end' : 'justify-start'} px-1 cursor-pointer`}
                        aria-label="Toggle preference cookies"
                      >
                        <div className="w-4 h-4 bg-black rounded-full transition-transform"></div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="border-t-2 border-black p-6 bg-[#FFFDF5]">
                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={handleRejectAll}
                    className="flex-1 bg-white text-black font-black text-sm px-4 py-3 rounded-xl border-2 border-black shadow-neo hover:bg-[#FF90E8] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-neo-sm active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all cursor-pointer"
                  >
                    Reject Optional
                  </button>
                  <button
                    onClick={handleSave}
                    className="flex-1 bg-[#FFDE59] text-black font-black text-sm px-4 py-3 rounded-xl border-2 border-black shadow-neo hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-neo-sm active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all cursor-pointer"
                  >
                    Save Preferences
                  </button>
                  <button
                    onClick={handleAcceptAll}
                    className="flex-1 bg-[#C6F10E] text-black font-black text-sm px-4 py-3 rounded-xl border-2 border-black shadow-neo hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-neo-sm active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all cursor-pointer"
                  >
                    Accept All
                  </button>
                </div>
                <p className="text-xs text-center text-neutral-600 font-bold mt-4">
                  Learn more in our{' '}
                  <Link href="/privacy-policy" className="text-black font-black underline">Privacy Policy</Link>
                  {' '}and{' '}
                  <Link href="/cookie-policy" className="text-black font-black underline">Cookie Policy</Link>
                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
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
