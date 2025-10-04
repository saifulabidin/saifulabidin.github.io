import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Saiful Abidin - Full Stack Developer Portfolio',
    short_name: 'Sabidzpro',
    description: 'Professional Full Stack Developer specializing in React, Next.js, Node.js, and modern web technologies',
    start_url: '/',
    display: 'standalone',
    background_color: '#19222D',
    theme_color: '#C6F10E',
    orientation: 'portrait-primary',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
        purpose: 'any',
      },
    ],
    categories: ['technology', 'portfolio', 'developer'],
    lang: 'en',
    dir: 'ltr',
  }
}
