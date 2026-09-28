import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/attendance', '/chapters', '/patterns/'],
    },
    sitemap: 'https://mlacademy.io/sitemap.xml',
  };
}