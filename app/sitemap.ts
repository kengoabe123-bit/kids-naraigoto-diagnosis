import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://kids-naraigoto-diagnosis.vercel.app';
  const blogArticles = ['naraigoto-erabi-guide','programming-kids','swimming-kids-merit','piano-kids-start','eikaiwa-kids-itsukara','naraigoto-hiyou-hikaku','naraigoto-yameru-timing','naraigoto-ikutsu-made','online-naraigoto-merit','naraigoto-trend-2026'];

  return [
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'monthly', priority: 1.0 },
    { url: `${baseUrl}/diagnosis`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/blog`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/services`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    ...blogArticles.map((slug) => ({ url: `${baseUrl}/blog/${slug}`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 })),
  ];
}
