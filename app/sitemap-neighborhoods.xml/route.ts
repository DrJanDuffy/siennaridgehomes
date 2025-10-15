import { NextResponse } from 'next/server'

export async function GET() {
  const baseUrl = 'https://www.siennaridgehomes.com'
  const currentDate = new Date().toISOString()

  const neighborhoodPages = [
    {
      url: `${baseUrl}/neighborhoods/89117`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: '0.9',
    },
    // Future neighborhood pages can be added here
    // {
    //   url: `${baseUrl}/neighborhoods/89147`,
    //   lastmod: currentDate,
    //   changefreq: 'weekly',
    //   priority: '0.9',
    // },
    // {
    //   url: `${baseUrl}/neighborhoods/89148`,
    //   lastmod: currentDate,
    //   changefreq: 'weekly',
    //   priority: '0.9',
    // },
  ]

  const neighborhoodSitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${neighborhoodPages.map(page => `
  <url>
    <loc>${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('')}
</urlset>`

  return new NextResponse(neighborhoodSitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  })
}
