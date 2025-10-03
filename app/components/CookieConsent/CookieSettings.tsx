'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { CookiePreferences, getCookiePreferences, setCookiePreferences, setCookieConsent } from '@/app/lib/cookies';

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
      setPreferences(currentPrefs);
    }
  }, [isOpen]);

  const handleToggle = (category: keyof CookiePreferences) => {
    if (category === 'essential') return; // Essential cannot be disabled
    
    setPreferences(prev => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  const handleSave = () => {
    setCookiePreferences(preferences);
    setCookieConsent('accepted');
    
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
    const allAccepted: CookiePreferences = {
      essential: true,
      analytics: true,
      marketing: true,
      preferences: true,
    };
    setPreferences(allAccepted);
    setCookiePreferences(allAccepted);
    setCookieConsent('accepted');
    
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('consent', 'update', {
        'analytics_storage': 'granted',
        'ad_storage': 'granted',
        'functionality_storage': 'granted',
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
    setCookieConsent('rejected');
    
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
            <div className="bg-[#19222D] border border-[#C6F10E]/20 rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-hidden flex flex-col">
              {/* Header */}
              <div className="relative p-6 border-b border-gray-700/50">
                <div className="h-1 absolute top-0 left-0 right-0 bg-gradient-to-r from-[#C6F10E] via-[#C6F10E]/50 to-transparent"></div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#C6F10E]/10 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-[#C6F10E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-white">Cookie Settings</h2>
                      <p className="text-sm text-gray-400 mt-1">Manage your cookie preferences</p>
                    </div>
                  </div>
                  
                  <button
                    onClick={onClose}
                    className="text-gray-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/5"
                    aria-label="Close"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 overflow-y-auto p-6 space-y-6">
                {/* Essential Cookies */}
                <div className="space-y-3">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-lg font-semibold text-white">Essential Cookies</h3>
                        <span className="text-xs bg-[#C6F10E]/20 text-[#C6F10E] px-2 py-1 rounded-full font-medium">
                          Always Active
                        </span>
                      </div>
                      <p className="text-sm text-gray-400 leading-relaxed">
                        These cookies are necessary for the website to function and cannot be switched off. 
                        They are usually only set in response to actions made by you such as setting your privacy preferences, 
                        logging in or filling in forms.
                      </p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        <span className="text-xs bg-gray-700/50 text-gray-300 px-2 py-1 rounded">Session Management</span>
                        <span className="text-xs bg-gray-700/50 text-gray-300 px-2 py-1 rounded">Security</span>
                        <span className="text-xs bg-gray-700/50 text-gray-300 px-2 py-1 rounded">Authentication</span>
                      </div>
                    </div>
                    <div className="flex-shrink-0">
                      <div className="w-12 h-6 bg-[#C6F10E] rounded-full flex items-center justify-end px-1 cursor-not-allowed opacity-50">
                        <div className="w-4 h-4 bg-white rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Analytics Cookies */}
                <div className="space-y-3 pt-4 border-t border-gray-700/50">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white mb-2">Analytics Cookies</h3>
                      <p className="text-sm text-gray-400 leading-relaxed">
                        These cookies allow us to count visits and traffic sources so we can measure and improve 
                        the performance of our site. They help us understand which pages are the most and least popular 
                        and see how visitors move around the site.
                      </p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        <span className="text-xs bg-gray-700/50 text-gray-300 px-2 py-1 rounded">Google Analytics</span>
                        <span className="text-xs bg-gray-700/50 text-gray-300 px-2 py-1 rounded">Vercel Analytics</span>
                        <span className="text-xs bg-gray-700/50 text-gray-300 px-2 py-1 rounded">Usage Stats</span>
                      </div>
                    </div>
                    <div className="flex-shrink-0">
                      <button
                        onClick={() => handleToggle('analytics')}
                        className={`w-12 h-6 rounded-full transition-colors ${
                          preferences.analytics ? 'bg-[#C6F10E]' : 'bg-gray-600'
                        } flex items-center ${preferences.analytics ? 'justify-end' : 'justify-start'} px-1`}
                        aria-label="Toggle analytics cookies"
                      >
                        <div className="w-4 h-4 bg-white rounded-full transition-transform"></div>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Marketing Cookies */}
                <div className="space-y-3 pt-4 border-t border-gray-700/50">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white mb-2">Marketing Cookies</h3>
                      <p className="text-sm text-gray-400 leading-relaxed">
                        These cookies may be set through our site by our advertising partners. They may be used by those 
                        companies to build a profile of your interests and show you relevant adverts on other sites.
                      </p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        <span className="text-xs bg-gray-700/50 text-gray-300 px-2 py-1 rounded">Ad Targeting</span>
                        <span className="text-xs bg-gray-700/50 text-gray-300 px-2 py-1 rounded">Social Media</span>
                        <span className="text-xs bg-gray-700/50 text-gray-300 px-2 py-1 rounded">Remarketing</span>
                      </div>
                    </div>
                    <div className="flex-shrink-0">
                      <button
                        onClick={() => handleToggle('marketing')}
                        className={`w-12 h-6 rounded-full transition-colors ${
                          preferences.marketing ? 'bg-[#C6F10E]' : 'bg-gray-600'
                        } flex items-center ${preferences.marketing ? 'justify-end' : 'justify-start'} px-1`}
                        aria-label="Toggle marketing cookies"
                      >
                        <div className="w-4 h-4 bg-white rounded-full transition-transform"></div>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Preferences Cookies */}
                <div className="space-y-3 pt-4 border-t border-gray-700/50">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white mb-2">Preference Cookies</h3>
                      <p className="text-sm text-gray-400 leading-relaxed">
                        These cookies enable the website to remember choices you make (such as your language or the region 
                        you are in) and provide enhanced, more personal features.
                      </p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        <span className="text-xs bg-gray-700/50 text-gray-300 px-2 py-1 rounded">Language</span>
                        <span className="text-xs bg-gray-700/50 text-gray-300 px-2 py-1 rounded">Theme</span>
                        <span className="text-xs bg-gray-700/50 text-gray-300 px-2 py-1 rounded">Layout</span>
                      </div>
                    </div>
                    <div className="flex-shrink-0">
                      <button
                        onClick={() => handleToggle('preferences')}
                        className={`w-12 h-6 rounded-full transition-colors ${
                          preferences.preferences ? 'bg-[#C6F10E]' : 'bg-gray-600'
                        } flex items-center ${preferences.preferences ? 'justify-end' : 'justify-start'} px-1`}
                        aria-label="Toggle preference cookies"
                      >
                        <div className="w-4 h-4 bg-white rounded-full transition-transform"></div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="border-t border-gray-700/50 p-6 bg-[#19222D]/50">
                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={handleRejectAll}
                    className="flex-1 bg-transparent hover:bg-white/5 text-white border-2 border-white/20 hover:border-red-500/50 font-semibold px-6 py-3 rounded-lg transition-all duration-200"
                  >
                    Reject All
                  </button>
                  <button
                    onClick={handleSave}
                    className="flex-1 bg-gray-700 hover:bg-gray-600 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-200"
                  >
                    Save Preferences
                  </button>
                  <button
                    onClick={handleAcceptAll}
                    className="flex-1 bg-[#C6F10E] hover:bg-[#a5c70c] text-black font-semibold px-6 py-3 rounded-lg transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-lg shadow-[#C6F10E]/25"
                  >
                    Accept All
                  </button>
                </div>
                <p className="text-xs text-center text-gray-500 mt-4">
                  Learn more in our{' '}
                  <Link href="/privacy-policy" className="text-[#C6F10E] hover:underline">Privacy Policy</Link>
                  {' '}and{' '}
                  <Link href="/cookie-policy" className="text-[#C6F10E] hover:underline">Cookie Policy</Link>
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
