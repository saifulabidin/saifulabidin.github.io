import type { MetadataRoute } from 'next';

const SITE_URL = process.env.SITE_URL || process.env.NEXT_PUBLIC_SITE_URL || 'https://sabidzpro.is-a.dev';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: SITE_URL,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1.0,
      alternates: {
        languages: {
          id: `${SITE_URL}/id`,
          en: `${SITE_URL}/en`,
        },
      },
    },
    {
      url: `${SITE_URL}/id`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1.0,
      alternates: {
        languages: {
          id: `${SITE_URL}/id`,
          en: `${SITE_URL}/en`,
        },
      },
    },
    {
      url: `${SITE_URL}/en`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
      alternates: {
        languages: {
          id: `${SITE_URL}/id`,
          en: `${SITE_URL}/en`,
        },
      },
    },
    {
      url: `${SITE_URL}/id/privacy-policy`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.4,
      alternates: {
        languages: {
          id: `${SITE_URL}/id/privacy-policy`,
          en: `${SITE_URL}/en/privacy-policy`,
        },
      },
    },
    {
      url: `${SITE_URL}/en/privacy-policy`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.4,
      alternates: {
        languages: {
          id: `${SITE_URL}/id/privacy-policy`,
          en: `${SITE_URL}/en/privacy-policy`,
        },
      },
    },
    {
      url: `${SITE_URL}/id/cookie-policy`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.4,
      alternates: {
        languages: {
          id: `${SITE_URL}/id/cookie-policy`,
          en: `${SITE_URL}/en/cookie-policy`,
        },
      },
    },
    {
      url: `${SITE_URL}/en/cookie-policy`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.4,
      alternates: {
        languages: {
          id: `${SITE_URL}/id/cookie-policy`,
          en: `${SITE_URL}/en/cookie-policy`,
        },
      },
    },
  ];
}
