/**
 * Structured Data (JSON-LD) Configuration for SEO
 * Schema.org markup for better search engine understanding
 */

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://sabidzpro.is-a.dev";

/**
 * Person Schema - Main profile information
 */
export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Saiful Abidin",
  "alternateName": "sabidzpro",
  "url": SITE_URL,
  "image": `${SITE_URL}/images/logo/React.svg`,
  "jobTitle": "Full Stack Developer",
  "worksFor": {
    "@type": "Organization",
    "name": "Freelance"
  },
  "description": "Professional Full Stack Developer with expertise in React, Next.js, Node.js, and modern web technologies. Over 5 years of experience building scalable web applications and innovative digital solutions.",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Wonogiri",
    "addressRegion": "Jawa Tengah",
    "addressCountry": "Indonesia"
  },
  "sameAs": [
    "https://github.com/saifulabidin",
    "https://linkedin.com/in/saiful-abidin",
    "https://twitter.com/syaifulosd",
    "https://instagram.com/itssabidz"
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
    "Flutter",
    "Mobile Development",
    "Full Stack Development",
    "Web Development",
    "Frontend Development",
    "Backend Development",
    "API Development",
    "Database Design",
    "Cloud Computing",
    "DevOps"
  ],
  "knowsLanguage": [
    {
      "@type": "Language",
      "name": "Indonesian",
      "alternateName": "id"
    },
    {
      "@type": "Language",
      "name": "English",
      "alternateName": "en"
    }
  ],
  "alumniOf": {
    "@type": "EducationalOrganization",
    "name": "Self-Taught Developer"
  }
};

/**
 * Website Schema - Overall website information
 */
export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Saiful Abidin Portfolio",
  "alternateName": "sabidzpro Portfolio",
  "url": SITE_URL,
  "description": "Professional Full Stack Developer Portfolio showcasing projects and skills in React, Next.js, Node.js, and modern web technologies. Over 5 years of experience with 50+ completed projects.",
  "author": {
    "@type": "Person",
    "name": "Saiful Abidin"
  },
  "inLanguage": "en-US",
  "copyrightYear": new Date().getFullYear(),
  "copyrightHolder": {
    "@type": "Person",
    "name": "Saiful Abidin"
  },
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": `${SITE_URL}/#projects?q={search_term_string}`
    },
    "query-input": "required name=search_term_string"
  }
};

/**
 * ProfilePage Schema - Profile page specific data
 */
export const profilePageSchema = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "dateCreated": "2020-01-01T00:00:00+00:00",
  "dateModified": new Date().toISOString(),
  "mainEntity": {
    "@type": "Person",
    "name": "Saiful Abidin",
    "alternateName": "sabidzpro",
    "identifier": "sabidzpro",
    "description": "Full Stack Developer specializing in React, Next.js, and Node.js with 5+ years of experience",
    "image": `${SITE_URL}/images/logo/React.svg`,
    "interactionStatistic": [
      {
        "@type": "InteractionCounter",
        "interactionType": "https://schema.org/CreateAction",
        "userInteractionCount": 50,
        "name": "Projects Completed"
      },
      {
        "@type": "InteractionCounter",
        "interactionType": "https://schema.org/LikeAction",
        "userInteractionCount": 8,
        "name": "Certifications"
      }
    ]
  }
};

/**
 * Organization Schema - For company/freelance work
 */
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "sabidzpro",
  "alternateName": "Saiful Abidin Web Development",
  "url": SITE_URL,
  "logo": `${SITE_URL}/images/logo/React.svg`,
  "description": "Professional web development services specializing in React, Next.js, and Full Stack solutions",
  "founder": {
    "@type": "Person",
    "name": "Saiful Abidin"
  },
  "foundingDate": "2020",
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "Professional Services",
    "availableLanguage": ["Indonesian", "English"]
  },
  "sameAs": [
    "https://github.com/saifulabidin",
    "https://linkedin.com/in/saiful-abidin",
    "https://twitter.com/syaifulosd",
    "https://instagram.com/itssabidz"
  ]
};

/**
 * BreadcrumbList Schema - For navigation breadcrumbs
 */
export const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": SITE_URL
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "About",
      "item": `${SITE_URL}/#about`
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Skills",
      "item": `${SITE_URL}/#skills`
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "Projects",
      "item": `${SITE_URL}/#projects`
    },
    {
      "@type": "ListItem",
      "position": 5,
      "name": "Experience",
      "item": `${SITE_URL}/#experience`
    },
    {
      "@type": "ListItem",
      "position": 6,
      "name": "Education",
      "item": `${SITE_URL}/#education`
    },
    {
      "@type": "ListItem",
      "position": 7,
      "name": "Certificates",
      "item": `${SITE_URL}/#certificates`
    },
    {
      "@type": "ListItem",
      "position": 8,
      "name": "Contact",
      "item": `${SITE_URL}/#contact`
    }
  ]
};

/**
 * All structured data schemas combined
 */
export const allSchemas = [
  personSchema,
  websiteSchema,
  profilePageSchema,
  organizationSchema,
  breadcrumbSchema
];

const structuredDataExport = {
  personSchema,
  websiteSchema,
  profilePageSchema,
  organizationSchema,
  breadcrumbSchema,
  allSchemas
};

export default structuredDataExport;