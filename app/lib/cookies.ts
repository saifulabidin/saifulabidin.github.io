/**
 * Cookie Management Utilities
 * Helper functions for managing cookie consent and preferences
 */

export type CookieConsentStatus = 'accepted' | 'rejected' | null;

/**
 * Get cookie consent status
 */
export const getCookieConsent = (): CookieConsentStatus => {
  if (typeof window === 'undefined') return null;
  
  const consent = localStorage.getItem('cookieConsent');
  if (consent === 'accepted') return 'accepted';
  if (consent === 'rejected') return 'rejected';
  return null;
};

/**
 * Check if user has accepted cookies
 */
export const hasCookieConsent = (): boolean => {
  return getCookieConsent() === 'accepted';
};

/**
 * Get when user gave consent
 */
export const getCookieConsentDate = (): Date | null => {
  if (typeof window === 'undefined') return null;
  
  const dateStr = localStorage.getItem('cookieConsentDate');
  return dateStr ? new Date(dateStr) : null;
};

/**
 * Clear cookie consent (for testing or reset)
 */
export const clearCookieConsent = (): void => {
  if (typeof window === 'undefined') return;
  
  localStorage.removeItem('cookieConsent');
  localStorage.removeItem('cookieConsentDate');
};

/**
 * Set cookie consent manually
 */
export const setCookieConsent = (status: 'accepted' | 'rejected'): void => {
  if (typeof window === 'undefined') return;
  
  localStorage.setItem('cookieConsent', status);
  localStorage.setItem('cookieConsentDate', new Date().toISOString());
};

/**
 * Cookie categories and their status
 */
export interface CookiePreferences {
  essential: boolean; // Always true, cannot be disabled
  analytics: boolean;
  marketing: boolean;
  preferences: boolean;
}

/**
 * Get cookie preferences
 */
export const getCookiePreferences = (): CookiePreferences => {
  if (typeof window === 'undefined') {
    return {
      essential: true,
      analytics: false,
      marketing: false,
      preferences: false,
    };
  }
  
  const prefsStr = localStorage.getItem('cookiePreferences');
  if (!prefsStr) {
    return {
      essential: true,
      analytics: false,
      marketing: false,
      preferences: false,
    };
  }
  
  try {
    return JSON.parse(prefsStr);
  } catch {
    return {
      essential: true,
      analytics: false,
      marketing: false,
      preferences: false,
    };
  }
};

/**
 * Set cookie preferences
 */
export const setCookiePreferences = (prefs: CookiePreferences): void => {
  if (typeof window === 'undefined') return;
  
  // Essential cookies always enabled
  prefs.essential = true;
  
  localStorage.setItem('cookiePreferences', JSON.stringify(prefs));
  localStorage.setItem('cookieConsentDate', new Date().toISOString());
};

/**
 * Accept all cookies
 */
export const acceptAllCookies = (): void => {
  setCookieConsent('accepted');
  setCookiePreferences({
    essential: true,
    analytics: true,
    marketing: true,
    preferences: true,
  });
};

/**
 * Reject all cookies (except essential)
 */
export const rejectAllCookies = (): void => {
  setCookieConsent('rejected');
  setCookiePreferences({
    essential: true,
    analytics: false,
    marketing: false,
    preferences: false,
  });
};

/**
 * Check if consent is expired (1 year)
 */
export const isCookieConsentExpired = (): boolean => {
  const consentDate = getCookieConsentDate();
  if (!consentDate) return true;
  
  const oneYearAgo = new Date();
  oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);
  
  return consentDate < oneYearAgo;
};

/**
 * Initialize Google Analytics based on consent
 */
export const initializeAnalytics = (): void => {
  if (typeof window === 'undefined') return;
  
  const consent = hasCookieConsent();
  const prefs = getCookiePreferences();
  
  if (window.gtag) {
    window.gtag('consent', 'update', {
      'analytics_storage': consent && prefs.analytics ? 'granted' : 'denied',
      'ad_storage': consent && prefs.marketing ? 'granted' : 'denied',
      'functionality_storage': consent && prefs.preferences ? 'granted' : 'denied',
    });
  }
};

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
