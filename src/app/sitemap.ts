import type { MetadataRoute } from 'next';
import { cases } from '@/data/cases';
import { blogPosts } from '@/data/blog';
import { SITE_URL } from '@/lib/constants';

const STATIC_LAST_MODIFIED = '2026-05-01';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified: new Date(STATIC_LAST_MODIFIED),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${SITE_URL}/sobre`,
      lastModified: new Date(STATIC_LAST_MODIFIED),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/equipe`,
      lastModified: new Date(STATIC_LAST_MODIFIED),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${SITE_URL}/contato`,
      lastModified: new Date(STATIC_LAST_MODIFIED),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/metodologia`,
      lastModified: new Date(STATIC_LAST_MODIFIED),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/solucoes`,
      lastModified: new Date(STATIC_LAST_MODIFIED),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/blog`,
      lastModified: new Date(STATIC_LAST_MODIFIED),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/cases`,
      lastModified: new Date(STATIC_LAST_MODIFIED),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/servicos`,
      lastModified: new Date(STATIC_LAST_MODIFIED),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/servicos/clinicas`,
      lastModified: new Date(STATIC_LAST_MODIFIED),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/servicos/distribuidoras`,
      lastModified: new Date(STATIC_LAST_MODIFIED),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/servicos/escritorios`,
      lastModified: new Date(STATIC_LAST_MODIFIED),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/politica-de-privacidade`,
      lastModified: new Date(STATIC_LAST_MODIFIED),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${SITE_URL}/termos-de-uso`,
      lastModified: new Date(STATIC_LAST_MODIFIED),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];

  const casePages: MetadataRoute.Sitemap = cases.map((c) => ({
    url: `${SITE_URL}/cases/${c.slug}`,
    lastModified: new Date(c.updatedAt),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const blogPages: MetadataRoute.Sitemap = blogPosts.map((p) => ({
    url: `${SITE_URL}/blog/${p.slug}`,
    lastModified: new Date(p.updatedAt ?? p.date),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...staticPages, ...casePages, ...blogPages];
}
