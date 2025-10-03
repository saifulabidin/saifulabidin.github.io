/**
 * SEO Metadata Configuration
 * Centralized metadata for better maintainability
 */

import type { Metadata, Viewport } from "next";
import { allKeywords } from "./seoKeywords";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://sabidzpro.is-a.dev";
const SITE_NAME = "Saiful Abidin - Full Stack Developer Portfolio";
const SITE_TITLE = "Saiful Abidin - Full Stack Developer | React, Next.js, Node.js Expert";
const SITE_DESCRIPTION = "Professional Full Stack Developer from Indonesia with 5+ years experience. Expert in React, Next.js, Node.js, TypeScript, MongoDB, PostgreSQL. Building scalable web applications, e-commerce platforms, and innovative digital solutions. Available for freelance projects and collaborations.";
const AUTHOR_NAME = "Saiful Abidin";
const TWITTER_HANDLE = "@syaifulosd";

/**
 * Main Metadata Configuration
 */
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  
  // Title Configuration
  title: {
    default: SITE_TITLE,
    template: `%s | ${AUTHOR_NAME} - Full Stack Developer`,
  },
  
  // Description
  description: SITE_DESCRIPTION,
  
  // Keywords (300+ comprehensive keywords)
  keywords: allKeywords,
  
  // Authors & Publisher
  authors: [
    { 
      name: AUTHOR_NAME, 
      url: SITE_URL 
    }
  ],
  creator: AUTHOR_NAME,
  publisher: AUTHOR_NAME,
  
  // Alternate URLs
  alternates: {
    canonical: "/",
  },
  
  // Robots Configuration
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  // Google Site Verification
  verification: {
    google: "VkTaSN1dEMEteIx2hvauHQ0RFQ1nrV1gbjQUgrbhX60",
  },
  
  // Open Graph (Facebook, LinkedIn, etc)
  openGraph: {
    type: "website",
    locale: "id_ID",
    alternateLocale: ["en_US"],
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "Saiful Abidin - Professional Full Stack Developer | React & Next.js Expert",
    description: SITE_DESCRIPTION,
    images: [
      {
        url: "/images/logo/React.svg",
        width: 1200,
        height: 630,
        alt: SITE_NAME,
        type: "image/svg+xml",
      },
    ],
  },
  
  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: TWITTER_HANDLE,
    creator: TWITTER_HANDLE,
    title: "Saiful Abidin - Full Stack Developer | React & Next.js Expert",
    description: "Professional Full Stack Developer from Indonesia. Expert in React, Next.js, Node.js, TypeScript. Building scalable web applications and innovative digital solutions.",
    images: ["/images/logo/React.svg"],
  },
  
  // Additional Metadata
  category: "Technology",
  applicationName: "Saiful Abidin Portfolio",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  
  // Icons & Manifest
  icons: {
    icon: "/images/logo/React.svg",
    apple: "/images/logo/React.svg",
  },
  manifest: "/manifest.json",
};

/**
 * Viewport Configuration
 */
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#C6F10E" },
    { media: "(prefers-color-scheme: dark)", color: "#19222D" },
  ],
  colorScheme: "dark",
};

/**
 * Alternative metadata configurations for different pages
 */

// About Page Metadata
export const aboutMetadata: Metadata = {
  title: "About Saiful Abidin - Full Stack Developer",
  description: "Learn more about Saiful Abidin, a professional Full Stack Developer with 5+ years of experience in React, Next.js, Node.js, and modern web technologies.",
  openGraph: {
    title: "About Saiful Abidin - Full Stack Developer",
    description: "Learn more about Saiful Abidin, a professional Full Stack Developer with 5+ years of experience in React, Next.js, Node.js, and modern web technologies.",
    url: `${SITE_URL}/#about`,
  },
};

// Projects Page Metadata
export const projectsMetadata: Metadata = {
  title: "Projects - Saiful Abidin Portfolio",
  description: "Explore my portfolio of 50+ completed projects including web applications, e-commerce platforms, mobile apps, and enterprise solutions built with React, Next.js, Node.js, and Flutter.",
  openGraph: {
    title: "Projects - Saiful Abidin Portfolio",
    description: "Explore my portfolio of 50+ completed projects including web applications, e-commerce platforms, mobile apps, and enterprise solutions.",
    url: `${SITE_URL}/#projects`,
  },
};

// Skills Page Metadata
export const skillsMetadata: Metadata = {
  title: "Skills & Technologies - Saiful Abidin",
  description: "Comprehensive list of technologies and skills including React, Next.js, Node.js, TypeScript, MongoDB, PostgreSQL, Docker, AWS, Flutter, and more.",
  openGraph: {
    title: "Skills & Technologies - Saiful Abidin",
    description: "Comprehensive list of technologies and skills including React, Next.js, Node.js, TypeScript, MongoDB, PostgreSQL, Docker, AWS, Flutter, and more.",
    url: `${SITE_URL}/#skills`,
  },
};

// Contact Page Metadata
export const contactMetadata: Metadata = {
  title: "Contact Saiful Abidin - Get In Touch",
  description: "Get in touch with Saiful Abidin for freelance projects, collaborations, or full-time opportunities. Available for web development, mobile app development, and consulting services.",
  openGraph: {
    title: "Contact Saiful Abidin - Get In Touch",
    description: "Get in touch with Saiful Abidin for freelance projects, collaborations, or full-time opportunities.",
    url: `${SITE_URL}/#contact`,
  },
};

// Experience Page Metadata
export const experienceMetadata: Metadata = {
  title: "Work Experience - Saiful Abidin",
  description: "5+ years of professional experience as Full Stack Developer, working on enterprise applications, e-commerce platforms, and innovative digital solutions.",
  openGraph: {
    title: "Work Experience - Saiful Abidin",
    description: "5+ years of professional experience as Full Stack Developer, working on enterprise applications, e-commerce platforms, and innovative digital solutions.",
    url: `${SITE_URL}/#experience`,
  },
};

// Certificates Page Metadata
export const certificatesMetadata: Metadata = {
  title: "Certifications & Achievements - Saiful Abidin",
  description: "Professional certifications from FreeCodeCamp, Dicoding Indonesia, and other platforms. 8+ certifications validating skills in web development, backend development, and cloud computing.",
  openGraph: {
    title: "Certifications & Achievements - Saiful Abidin",
    description: "Professional certifications from FreeCodeCamp, Dicoding Indonesia, and other platforms. 8+ certifications validating skills in web development.",
    url: `${SITE_URL}/#certificates`,
  },
};

// Export all metadata
const seoMetadataExport = {
  metadata,
  viewport,
  aboutMetadata,
  projectsMetadata,
  skillsMetadata,
  contactMetadata,
  experienceMetadata,
  certificatesMetadata,
};

export default seoMetadataExport;

/**
 * Usage in layout.tsx:
 * 
 * import { metadata, viewport } from '@/app/constants/seoMetadata';
 * 
 * export { metadata, viewport };
 */
