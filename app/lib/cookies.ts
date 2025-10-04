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
 * Check if user has enabled Do Not Track
 */
export const isDoNotTrackEnabled = (): boolean => {
  if (typeof window === 'undefined') return false;

  // Check various DNT signals with proper type assertions
  const dnt = navigator.doNotTrack || (window as any).doNotTrack;
  const msTracking = (navigator as any).msDoNotTrack;

  return dnt === '1' || dnt === 'yes' || msTracking === '1';
};

/**
 * Check if we should show cookie consent
 */
export const shouldShowCookieConsent = (): boolean => {
  const consent = getCookieConsent();
  const hasExpired = isCookieConsentExpired();
  const dntEnabled = isDoNotTrackEnabled();

  // Show if no consent, consent expired, or DNT is enabled (to allow rejection)
  return !consent || hasExpired || dntEnabled;
};

/**
 * Get effective cookie preferences considering DNT
 */
export const getEffectiveCookiePreferences = (): CookiePreferences => {
  const prefs = getCookiePreferences();
  const dntEnabled = isDoNotTrackEnabled();

  if (dntEnabled) {
    // If DNT is enabled, only essential cookies
    return {
      essential: true,
      analytics: false,
      marketing: false,
      preferences: false,
    };
  }

  return prefs;
};

/**
 * Cookie consent version for policy updates
 */
export const COOKIE_CONSENT_VERSION = '1.0';

/**
 * Check if cookie consent needs update due to version change
 */
export const needsCookieConsentUpdate = (): boolean => {
  if (typeof window === 'undefined') return false;

  const currentVersion = localStorage.getItem('cookieConsentVersion');
  const consent = getCookieConsent();

  // If no consent or version mismatch, needs update
  return !consent || currentVersion !== COOKIE_CONSENT_VERSION;
};

/**
 * Set cookie consent with version
 */
export const setCookieConsentWithVersion = (status: 'accepted' | 'rejected'): void => {
  if (typeof window === 'undefined') return;

  setCookieConsent(status);
  localStorage.setItem('cookieConsentVersion', COOKIE_CONSENT_VERSION);
};

/**
 * Initialize Google Analytics based on consent
 */
export const initializeAnalytics = (): void => {
  if (typeof window === 'undefined') return;

  const consent = hasCookieConsent();
  const prefs = getEffectiveCookiePreferences(); // Use effective prefs (DNT aware)

  if (window.gtag) {
    window.gtag('consent', 'update', {
      'analytics_storage': consent && prefs.analytics ? 'granted' : 'denied',
      'ad_storage': consent && prefs.marketing ? 'granted' : 'denied',
      'functionality_storage': consent && prefs.preferences ? 'granted' : 'denied',
    });
  }
};

/**
 * Complete cookie consent initialization
 */
export const initializeCookieConsent = (): { shouldShow: boolean; reason: string } => {
  if (typeof window === 'undefined') return { shouldShow: false, reason: 'SSR' };

  const consent = getCookieConsent();
  const hasExpired = isCookieConsentExpired();
  const needsUpdate = needsCookieConsentUpdate();
  const dntEnabled = isDoNotTrackEnabled();
  const shouldShow = shouldShowCookieConsent();

  let reason = '';
  if (!consent) reason = 'No consent found';
  else if (hasExpired) reason = 'Consent expired';
  else if (needsUpdate) reason = 'Policy updated';
  else if (dntEnabled) reason = 'Do Not Track enabled';
  else reason = 'Consent valid';

  // Initialize analytics with current preferences
  initializeAnalytics();

  return { shouldShow, reason };
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
