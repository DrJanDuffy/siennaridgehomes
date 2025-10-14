import { NextResponse } from 'next/server'

export async function GET() {
  const baseUrl = 'https://www.siennaridgehomes.com'
  const currentDate = new Date().toISOString()

  const images = [
    // Hero images
    {
      loc: `${baseUrl}/images/hero-homepage.jpg`,
      caption: 'Southwest Las Vegas Real Estate - Beautiful homes in Spring Valley',
      title: 'Spring Valley Real Estate Agent Dr. Jan Duffy',
    },
    {
      loc: `${baseUrl}/images/hero-about.jpg`,
      caption: 'Dr. Jan Duffy - Southwest Las Vegas Real Estate Expert',
      title: 'Meet Dr. Jan Duffy - Premier Real Estate Agent',
    },
    {
      loc: `${baseUrl}/images/hero-listings.jpg`,
      caption: 'Southwest Las Vegas Homes for Sale - Spring Valley Listings',
      title: 'Available Homes in Spring Valley and Southwest Las Vegas',
    },
    {
      loc: `${baseUrl}/images/hero-spring-valley.jpg`,
      caption: 'Spring Valley Real Estate - Beautiful neighborhood in Southwest Las Vegas',
      title: 'Spring Valley Neighborhood Guide - 89117',
    },
    {
      loc: `${baseUrl}/images/professional-photo.jpg`,
      caption: 'Dr. Jan Duffy - Professional Real Estate Agent',
      title: 'Professional Headshot - Dr. Jan Duffy Real Estate',
    },
    // Property sample images
    {
      loc: `${baseUrl}/images/property-sample-1.jpg`,
      caption: 'New construction home in Spring Valley',
      title: '1594 Sienna Ridge - Single Story Home Model',
    },
    {
      loc: `${baseUrl}/images/property-sample-2.jpg`,
      caption: 'Available home in Southwest Las Vegas',
      title: '1760 Sienna Ridge - Two Story Home Model',
    },
    {
      loc: `${baseUrl}/images/property-sample-3.jpg`,
      caption: 'Investment opportunity in Las Vegas',
      title: '2270 Sienna Ridge - Executive Home Model',
    },
  ]

  const imageSitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  ${images.map(image => `
  <url>
    <loc>${baseUrl}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
    <image:image>
      <image:loc>${image.loc}</image:loc>
      <image:caption>${image.caption}</image:caption>
      <image:title>${image.title}</image:title>
    </image:image>
  </url>`).join('')}
</urlset>`

  return new NextResponse(imageSitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  })
}
