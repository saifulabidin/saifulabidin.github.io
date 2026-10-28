import { Analytics } from "@vercel/analytics/next"
import Script from "next/script";
import { Plus_Jakarta_Sans, Space_Grotesk } from "next/font/google";
import "../globals.css";
import "../maps.css";
import { metadata as baseMetadata, viewport } from "../constants/seoMetadata";
import { personSchema, websiteSchema, profilePageSchema } from "../constants/structuredData";
import CookieConsent from "../components/CookieConsent/CookieConsent";
import Providers from "../components/Providers";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing, type Locale } from '@/lib/routing';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export { viewport };

export async function generateMetadata({
  params: { locale }
}: {
  params: { locale: string };
}) {
  const isId = locale === 'id';
  const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://sabidzpro.is-a.dev";
  const canonicalUrl = `${SITE_URL}/${locale}`;

  return {
    ...baseMetadata,
    title: isId
      ? "Saiful Abidin | Biodata, Profil & Portfolio Full Stack Developer"
      : "Saiful Abidin | Full Stack Developer & Systems Engineer Portfolio",
    description: isId
      ? "Biodata, profil lengkap, dan portofolio profesional Saiful Abidin (sabidzpro) - Full Stack Developer & Software Engineer asal Wonogiri, Jawa Tengah, Indonesia. Pengalaman 5+ tahun membangun aplikasi web, mobile, dan sistem enterprise modern."
      : "Professional Full Stack Developer & Software Engineer with 5+ years experience in React, Next.js, Node.js, TypeScript, PostgreSQL, and Flutter. Building scalable enterprise web and mobile solutions.",
    alternates: {
      canonical: canonicalUrl,
      languages: {
        id: `${SITE_URL}/id`,
        en: `${SITE_URL}/en`,
        'x-default': `${SITE_URL}/id`,
      },
    },
    openGraph: {
      ...baseMetadata.openGraph,
      url: canonicalUrl,
      locale: isId ? 'id_ID' : 'en_US',
      alternateLocale: isId ? ['en_US'] : ['id_ID'],
    },
  };
}

export default async function LocaleLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  if (!routing.locales.includes(locale as Locale)) {
    notFound();
  }

  setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageSchema) }}
        />
      </head>
      <body
        className={`${plusJakartaSans.variable} ${spaceGrotesk.variable} antialiased`}
      >
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PXFQVC47"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>

        <NextIntlClientProvider messages={messages}>
          <Providers>
            {children}
          </Providers>
        </NextIntlClientProvider>
        <CookieConsent />
        <Analytics />

        <Script
          id="google-tag-manager"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PXFQVC47');`,
          }}
        />
      </body>
    </html>
  );
}
