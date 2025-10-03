import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next"
import localFont from "next/font/local";
import "./globals.css";
import "./maps.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://sabidzpro.is-a.dev"),
  title: {
    default: "Saiful Abidin - Full Stack Developer | React, Next.js, Node.js Expert",
    template: "%s | Saiful Abidin - Full Stack Developer",
  },
  description:
    "Professional Full Stack Developer from Indonesia with 5+ years experience. Expert in React, Next.js, Node.js, TypeScript, MongoDB, PostgreSQL. Building scalable web applications, e-commerce platforms, and innovative digital solutions. Available for freelance projects and collaborations.",
  keywords: [
    "Saiful",
    "itssabidz",
    "sabidz",
    "sabidzpro",
    "sabidzpro.is-a.dev",
    "Saiful Abidin",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "TypeScript Developer",
    "Web Developer Indonesia",
    "JavaScript Expert",
    "Frontend Developer",
    "Backend Developer",
    "MERN Stack Developer",
    "MongoDB Expert",
    "PostgreSQL Developer",
    "Docker",
    "AWS",
    "Freelance Developer",
    "Wonogiri Developer",
    "Indonesian Programmer",
    "Web Application Development",
    "E-commerce Developer",
    "API Development",
    "REST API",
    "GraphQL",
    "Tailwind CSS",
    "Vue.js",
    "Laravel",
    "PHP Developer",
    "Python Developer",
    "Golang Developer",
    "Flutter Developer",
    "Mobile App Developer",
    "UI/UX Implementation",
    "Responsive Web Design",
    "Progressive Web Apps",
    "Software Engineer",
    "sabidzpro",
  ],
  authors: [{ name: "Saiful Abidin", url: "https://sabidzpro.is-a.dev" }],
  creator: "Saiful Abidin",
  publisher: "Saiful Abidin",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "VkTaSN1dEMEteIx2hvauHQ0RFQ1nrV1gbjQUgrbhX60",
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://sabidzpro.is-a.dev",
    siteName: "Saiful Abidin - Full Stack Developer Portfolio",
    title: "Saiful Abidin - Professional Full Stack Developer | React & Next.js Expert",
    description:
      "Professional Full Stack Developer from Indonesia with 5+ years experience. Expert in React, Next.js, Node.js, TypeScript, and modern web technologies. Building scalable web applications and innovative digital solutions.",
    images: [
      {
        url: "/images/logo/React.svg",
        width: 1200,
        height: 630,
        alt: "Saiful Abidin - Full Stack Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@sabidzpro",
    creator: "@sabidzpro",
    title: "Saiful Abidin - Full Stack Developer | React & Next.js Expert",
    description:
      "Professional Full Stack Developer from Indonesia. Expert in React, Next.js, Node.js, TypeScript. Building scalable web applications and innovative digital solutions.",
    images: ["/images/logo/React.svg"],
  },
  category: "Technology",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#19222D",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Saiful Abidin",
    "alternateName": "sabidzpro",
    "url": "https://sabidzpro.is-a.dev",
    "image": "https://sabidzpro.is-a.dev/images/logo/React.svg",
    "jobTitle": "Full Stack Developer",
    "worksFor": {
      "@type": "Organization",
      "name": "Freelance"
    },
    "description": "Professional Full Stack Developer with expertise in React, Next.js, Node.js, and modern web technologies",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Wonogiri",
      "addressCountry": "Indonesia"
    },
    "sameAs": [
      "https://github.com/sabidzpro",
      "https://linkedin.com/in/sabidzpro",
      "https://twitter.com/sabidzpro"
    ],
    "knowsAbout": [
      "React",
      "Next.js",
      "Node.js",
      "TypeScript",
      "JavaScript",
      "MongoDB",
      "PostgreSQL",
      "Docker",
      "AWS",
      "Full Stack Development",
      "Web Development",
      "Frontend Development",
      "Backend Development"
    ],
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "Universitas Gadjah Mada"
    }
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Saiful Abidin Portfolio",
    "url": "https://sabidzpro.is-a.dev",
    "description": "Professional Full Stack Developer Portfolio showcasing projects and skills in React, Next.js, Node.js, and modern web technologies",
    "author": {
      "@type": "Person",
      "name": "Saiful Abidin"
    },
    "inLanguage": "en-US",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://sabidzpro.is-a.dev/#projects?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const profilePageJsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "dateCreated": "2020-01-01T00:00:00+00:00",
    "dateModified": new Date().toISOString(),
    "mainEntity": {
      "@type": "Person",
      "name": "Saiful Abidin",
      "alternateName": "sabidzpro",
      "identifier": "sabidzpro",
      "description": "Full Stack Developer specializing in React, Next.js, and Node.js",
      "image": "https://sabidzpro.is-a.dev/images/logo/React.svg"
    }
  };

  return (
    <html lang="en">
      <head>
        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageJsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
