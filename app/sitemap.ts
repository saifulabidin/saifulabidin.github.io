import type { MetadataRoute } from 'next'

// Use SITE_URL consistent with other SEO configuration files
const SITE_URL = process.env.SITE_URL || process.env.NEXT_PUBLIC_SITE_URL || 'https://sabidzpro.is-a.dev'

// Define route configuration with SEO-optimized priorities and frequencies
const routeConfig = [
  // Main landing page - highest priority, updated regularly with content
  {
    path: '',
    priority: 1.0,
    changeFrequency: 'weekly' as const,
    lastModified: new Date('2025-01-04'), // Last significant content update
    images: [
      {
        url: '/favicon.ico',
        title: 'Saiful Abidin - Full Stack Developer Portfolio Logo',
        caption: 'Professional portfolio of Saiful Abidin showcasing React and Next.js expertise'
      }
    ]
  },

  // Main content sections (hash-based routes for SPA navigation)
  {
    path: '/#about',
    priority: 0.9,
    changeFrequency: 'monthly' as const,
    lastModified: new Date('2025-01-04'),
    alternates: {
      languages: {
        'id-ID': `${SITE_URL}/#about`,
        'en-US': `${SITE_URL}/#about`
      }
    }
  },

  {
    path: '/#skills',
    priority: 0.8,
    changeFrequency: 'monthly' as const,
    lastModified: new Date('2025-01-04'),
    alternates: {
      languages: {
        'id-ID': `${SITE_URL}/#skills`,
        'en-US': `${SITE_URL}/#skills`
      }
    }
  },

  {
    path: '/#projects',
    priority: 0.9,
    changeFrequency: 'weekly' as const, // Projects may be added more frequently
    lastModified: new Date('2025-01-04'),
    alternates: {
      languages: {
        'id-ID': `${SITE_URL}/#projects`,
        'en-US': `${SITE_URL}/#projects`
      }
    }
  },

  {
    path: '/#experience',
    priority: 0.7,
    changeFrequency: 'yearly' as const, // Experience changes less frequently
    lastModified: new Date('2025-01-04'),
    alternates: {
      languages: {
        'id-ID': `${SITE_URL}/#experience`,
        'en-US': `${SITE_URL}/#experience`
      }
    }
  },

  {
    path: '/#education',
    priority: 0.6,
    changeFrequency: 'yearly' as const, // Education rarely changes
    lastModified: new Date('2025-01-04'),
    alternates: {
      languages: {
        'id-ID': `${SITE_URL}/#education`,
        'en-US': `${SITE_URL}/#education`
      }
    }
  },

  {
    path: '/#certificates',
    priority: 0.7,
    changeFrequency: 'monthly' as const, // Certificates may be added periodically
    lastModified: new Date('2025-01-04'),
    alternates: {
      languages: {
        'id-ID': `${SITE_URL}/#certificates`,
        'en-US': `${SITE_URL}/#certificates`
      }
    }
  },

  {
    path: '/#contact',
    priority: 0.8,
    changeFrequency: 'yearly' as const, // Contact info changes occasionally
    lastModified: new Date('2025-01-04'),
    alternates: {
      languages: {
        'id-ID': `${SITE_URL}/#contact`,
        'en-US': `${SITE_URL}/#contact`
      }
    }
  },

  // Legal and policy pages - important for compliance
  {
    path: '/privacy-policy',
    priority: 0.5,
    changeFrequency: 'monthly' as const,
    lastModified: new Date('2025-01-04'),
    alternates: {
      languages: {
        'id-ID': `${SITE_URL}/privacy-policy`,
        'en-US': `${SITE_URL}/privacy-policy`
      }
    }
  },

  {
    path: '/cookie-policy',
    priority: 0.5,
    changeFrequency: 'monthly' as const,
    lastModified: new Date('2025-01-04'),
    alternates: {
      languages: {
        'id-ID': `${SITE_URL}/cookie-policy`,
        'en-US': `${SITE_URL}/cookie-policy`
      }
    }
  }
]

export default function sitemap(): MetadataRoute.Sitemap {
  return routeConfig.map((route) => {
    // Extend the type to allow images property
    const sitemapEntry: MetadataRoute.Sitemap[0] & { images?: { url: string; title?: string; caption?: string }[] } = {
      url: `${SITE_URL}${route.path}`,
      lastModified: route.lastModified,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    }

    // Add alternates if available
    if (route.alternates?.languages) {
      sitemapEntry.alternates = {
        languages: route.alternates.languages
      }
    }

    // Add images if available
    if (route.images) {
      sitemapEntry.images = route.images
    }

    return sitemapEntry
  })
}
