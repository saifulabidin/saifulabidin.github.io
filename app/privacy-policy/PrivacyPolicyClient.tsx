'use client';

export default function PrivacyPolicyClient() {
  return (
    <button
      onClick={() => {
        if (typeof window !== 'undefined') {
          localStorage.removeItem('cookieConsent');
          localStorage.removeItem('cookieConsentDate');
          localStorage.removeItem('cookiePreferences');
          window.location.href = '/';
          setTimeout(() => {
            window.location.reload();
          }, 100);
        }
      }}
      className="text-gray-400 hover:text-[#C6F10E] transition-colors cursor-pointer"
    >
      Cookie Settings
    </button>
  );
}