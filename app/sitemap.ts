import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://sabidzpro.is-a.dev'
  
  // Define routes with specific priorities for SEO
  const routes = [
    { path: '', priority: 1.0, changeFrequency: 'daily' as const },
    { path: '/#about', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/#skills', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/#projects', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/#experience', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/#education', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/#certificates', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/#contact', priority: 0.8, changeFrequency: 'monthly' as const },
  ]

  const now = new Date()
  
  return routes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }))
}
