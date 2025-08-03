import { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'TechVibe Global - Innovative Engineering Solutions',
    short_name: 'TechVibe Global',
    description: 'TechVibe Global provides innovative engineering solutions in Fire & Life Safety, Electrical Safety, and IT & Surveillance in Bangladesh.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#2563eb',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
    categories: ['business', 'engineering', 'safety'],
    lang: 'en',
    dir: 'ltr',
  }
}
