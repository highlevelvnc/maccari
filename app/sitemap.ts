import type { MetadataRoute } from 'next'
import { BLOG_POSTS } from '@/lib/blog-posts'

const BASE_URL = 'https://maccariengenharia.pt'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: `${BASE_URL}/blog`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BASE_URL}/servicos/aumento-de-potencia`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
  ]

  const blogRoutes: MetadataRoute.Sitemap = BLOG_POSTS.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.dateISO),
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  return [...staticRoutes, ...blogRoutes]
}
