'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/lib/routing';
import type { Locale } from '@/lib/routing';

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const toggleLocale = (newLocale: Locale) => {
    if (newLocale === locale) return;
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <div className="flex items-center gap-1.5" role="group" aria-label="Language selection">
      <button
        onClick={() => toggleLocale('en')}
        className={`px-2.5 py-1 text-xs font-black rounded-lg border-2 border-black transition-all cursor-pointer ${
          locale === 'en'
            ? 'bg-[#C6F10E] text-black shadow-neo-sm'
            : 'bg-white text-black hover:bg-[#FFDE59] hover:translate-x-[1px] hover:translate-y-[1px]'
        }`}
        aria-label="Switch to English"
        aria-pressed={locale === 'en'}
      >
        EN
      </button>
      <button
        onClick={() => toggleLocale('id')}
        className={`px-2.5 py-1 text-xs font-black rounded-lg border-2 border-black transition-all cursor-pointer ${
          locale === 'id'
            ? 'bg-[#C6F10E] text-black shadow-neo-sm'
            : 'bg-white text-black hover:bg-[#FFDE59] hover:translate-x-[1px] hover:translate-y-[1px]'
        }`}
        aria-label="Switch to Indonesian"
        aria-pressed={locale === 'id'}
      >
        ID
      </button>
    </div>
  );
}
