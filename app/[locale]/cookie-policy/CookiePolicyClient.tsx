'use client';

export default function CookiePolicyClient() {
  return (
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
      className="inline-flex items-center justify-center gap-2 bg-[#C6F10E] text-black font-black text-sm px-5 py-2.5 rounded-xl border-2 border-black shadow-neo hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-neo-sm active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all cursor-pointer"
    >
      Manage Cookie Preferences
    </button>
  );
}
