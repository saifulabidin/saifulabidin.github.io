'use client';

export default function CookiePolicyClient() {
  return (
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
  );
}