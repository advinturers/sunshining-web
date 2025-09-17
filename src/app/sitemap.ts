import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const host = process.env.NEXT_PUBLIC_SITE_URL || 'https://sun-shining.com';
  const now = new Date().toISOString();
  const pages = ['/', '#about', '#projects', '#values', '#contact'];
  return pages.map((p) => ({
    url: `${host}/`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));
}
