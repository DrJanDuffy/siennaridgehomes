import { NextResponse } from 'next/server'

export async function GET() {
  const baseUrl = 'https://www.siennaridgehomes.com'
  const currentDate = new Date().toISOString()

  const pages = [
    // Main pages
    {
      url: `${baseUrl}/`,
      lastmod: currentDate,
      changefreq: 'daily',
      priority: '1.0',
    },
    {
      url: `${baseUrl}/about`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: '0.9',
    },
    {
      url: `${baseUrl}/listings`,
      lastmod: currentDate,
      changefreq: 'daily',
      priority: '0.9',
    },
    {
      url: `${baseUrl}/neighborhoods/89117`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: '0.8',
    },
    // Legal pages
    {
      url: `${baseUrl}/privacy`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: '0.3',
    },
    {
      url: `${baseUrl}/terms`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: '0.3',
    },
    // Utility pages
    {
      url: `${baseUrl}/sitemap`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: '0.2',
    },
  ]

  const completeSitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages.map(page => `
  <url>
    <loc>${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('')}
</urlset>`

  return new NextResponse(completeSitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  })
}
