import { NextResponse } from 'next/server'

export async function GET() {
  const baseUrl = 'https://www.siennaridgehomes.com'
  const currentDate = new Date().toISOString()

  const sitemaps = [
    {
      loc: `${baseUrl}/sitemap.xml`,
      lastmod: currentDate,
    },
    {
      loc: `${baseUrl}/sitemap-images.xml`,
      lastmod: currentDate,
    },
    {
      loc: `${baseUrl}/sitemap-local.xml`,
      lastmod: currentDate,
    },
  ]

  const sitemapIndex = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${sitemaps.map(sitemap => `
  <sitemap>
    <loc>${sitemap.loc}</loc>
    <lastmod>${sitemap.lastmod}</lastmod>
  </sitemap>`).join('')}
</sitemapindex>`

  return new NextResponse(sitemapIndex, {
    headers: {
      'Content-Type': 'application/xml',
    },
  })
}
