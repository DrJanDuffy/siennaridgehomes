import { NextResponse } from 'next/server'

export async function GET() {
  const baseUrl = 'https://www.siennaridgehomes.com'
  const currentDate = new Date().toISOString()

  const localPages = [
    {
      url: `${baseUrl}/`,
      title: 'Spring Valley Real Estate Agent | Dr. Jan Duffy | Southwest Las Vegas Homes',
      description: 'Top Spring Valley real estate agent Dr. Jan Duffy specializes in Southwest Las Vegas homes (89117, 89147, 89148). Expert buyer agent for families, investors & first-time buyers.',
      keywords: ['Spring Valley real estate agent', 'Southwest Las Vegas homes for sale', '89117 homes', '89147 homes', '89148 homes'],
    },
    {
      url: `${baseUrl}/about`,
      title: 'About Dr. Jan Duffy - Southwest Las Vegas Real Estate Expert',
      description: 'Meet Dr. Jan Duffy, your premier buyer agent for Spring Valley & Southwest Las Vegas (89117, 89147, 89148). Expert guidance, local knowledge, and personalized service.',
      keywords: ['Dr. Jan Duffy', 'Spring Valley real estate agent', 'Southwest Las Vegas realtor', 'Las Vegas buyer agent'],
    },
    {
      url: `${baseUrl}/listings`,
      title: 'Southwest Las Vegas Homes for Sale - Spring Valley Listings',
      description: 'Browse available homes for sale in Southwest Las Vegas / Spring Valley (89117, 89147, 89148). Find your dream home with expert guidance from Dr. Jan Duffy.',
      keywords: ['Spring Valley homes for sale', '89117 real estate', '89147 homes for sale', '89148 properties'],
    },
    {
      url: `${baseUrl}/neighborhoods/89117`,
      title: 'Spring Valley Real Estate | 89117 Homes for Sale | Dr. Jan Duffy',
      description: 'Discover Spring Valley homes for sale in zip code 89117. Dr. Jan Duffy specializes in Spring Valley real estate with expert local knowledge and personalized service.',
      keywords: ['Spring Valley homes for sale', '89117 real estate', 'Spring Valley Las Vegas homes', '89117 homes for sale'],
    },
  ]

  const localBusinessSitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:local="http://www.google.com/schemas/sitemap-local/1.0">
  ${localPages.map(page => `
  <url>
    <loc>${page.url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
    <local:business>
      <local:business_name>Dr. Jan Duffy Real Estate</local:business_name>
      <local:business_type>Real Estate Agent</local:business_type>
      <local:street_address>8370 Caldera Hills Avenue</local:street_address>
      <local:city>Las Vegas</local:city>
      <local:state>NV</local:state>
      <local:postal_code>89147</local:postal_code>
      <local:country>US</local:country>
      <local:phone>+1-702-903-3336</local:phone>
      <local:email>DrJanSells@SiennaRidgeHomes.com</local:email>
      <local:website>${baseUrl}</local:website>
      <local:service_areas>
        <local:service_area>Spring Valley, Las Vegas, NV 89117</local:service_area>
        <local:service_area>Southwest Las Vegas, NV 89147</local:service_area>
        <local:service_area>Southwest Las Vegas, NV 89148</local:service_area>
      </local:service_areas>
      <local:keywords>${page.keywords.join(', ')}</local:keywords>
      <local:description>${page.description}</local:description>
    </local:business>
  </url>`).join('')}
</urlset>`

  return new NextResponse(localBusinessSitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  })
}
