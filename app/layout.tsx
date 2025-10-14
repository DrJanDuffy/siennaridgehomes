import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from 'next-themes'
import Script from 'next/script'
import Header from '../components/header'
import Footer from '../components/footer'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.siennaridgehomes.com'),
  title: 'Spring Valley Real Estate Agent | Dr. Jan Duffy | Southwest Las Vegas Homes',
  description: 'Top Spring Valley real estate agent Dr. Jan Duffy specializes in Southwest Las Vegas homes (89117, 89147, 89148). Expert buyer agent for families, investors & first-time buyers. Free home valuation & market insights.',
  keywords: [
    'Spring Valley real estate agent',
    'Southwest Las Vegas homes for sale',
    '89117 homes',
    '89147 homes', 
    '89148 homes',
    'Las Vegas real estate',
    'Dr. Jan Duffy realtor',
    'Spring Valley homes',
    'Southwest Las Vegas real estate',
    'Las Vegas buyer agent',
    'Nevada real estate agent',
    'Las Vegas investment properties',
    'Spring Valley new homes',
    'Las Vegas home valuation',
    'best real estate agent Las Vegas',
    'Spring Valley luxury homes',
    'Southwest Las Vegas condos',
    'Las Vegas first time home buyer',
    'Spring Valley real estate market',
    'Las Vegas property search'
  ],
  authors: [{ name: 'Dr. Jan Duffy', url: 'https://www.siennaridgehomes.com' }],
  creator: 'Dr. Jan Duffy',
  publisher: 'Southwest Las Vegas Homes',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'YOUR_GOOGLE_SEARCH_CONSOLE_VERIFICATION_CODE', // Replace with your actual verification code
  },
  openGraph: {
    title: 'Spring Valley Real Estate Agent | Dr. Jan Duffy | Southwest Las Vegas Homes',
    description: 'Top Spring Valley real estate agent Dr. Jan Duffy specializes in Southwest Las Vegas homes (89117, 89147, 89148). Expert buyer agent for families, investors & first-time buyers.',
    url: 'https://www.siennaridgehomes.com',
    siteName: 'Southwest Las Vegas Homes',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Dr. Jan Duffy - Spring Valley Real Estate Agent',
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Spring Valley Real Estate Agent | Dr. Jan Duffy',
    description: 'Top Spring Valley real estate agent specializing in Southwest Las Vegas homes (89117, 89147, 89148). Expert guidance for buyers.',
    images: ['/og-image.png'],
    creator: '@DrJanDuffy',
    site: '@SiennaRidgeHomes',
  },
  alternates: {
    canonical: 'https://www.siennaridgehomes.com',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-VB9NKRDQK1"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-VB9NKRDQK1');
          `}
        </Script>
        
        {/* Structured Data - Real Estate Agent */}
        <Script
          id="real-estate-agent-schema"
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {`
            {
              "@context": "https://schema.org",
              "@type": "RealEstateAgent",
              "name": "Dr. Jan Duffy",
              "description": "Premier Spring Valley real estate agent specializing in Southwest Las Vegas homes (89117, 89147, 89148). Expert buyer agent for families, investors, and first-time home buyers.",
              "url": "https://www.siennaridgehomes.com",
              "telephone": "(702) 903-3336",
              "email": "DrJanSells@SiennaRidgeHomes.com",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Las Vegas",
                "addressRegion": "NV",
                "addressCountry": "US",
                "postalCode": "89117"
              },
              "areaServed": [
                {
                  "@type": "City",
                  "name": "Spring Valley",
                  "containedInPlace": {
                    "@type": "State",
                    "name": "Nevada"
                  }
                },
                {
                  "@type": "PostalCode",
                  "postalCode": "89117"
                },
                {
                  "@type": "PostalCode", 
                  "postalCode": "89147"
                },
                {
                  "@type": "PostalCode",
                  "postalCode": "89148"
                }
              ],
              "knowsAbout": [
                "Spring Valley real estate",
                "Southwest Las Vegas homes",
                "Las Vegas investment properties",
                "First time home buyers",
                "Real estate market analysis",
                "Home valuations"
              ],
              "hasCredential": {
                "@type": "EducationalOccupationalCredential",
                "credentialCategory": "Real Estate License",
                "recognizedBy": {
                  "@type": "Organization",
                  "name": "Nevada Real Estate Division"
                }
              },
              "memberOf": {
                "@type": "Organization",
                "name": "National Association of Realtors"
              }
            }
          `}
        </Script>
        
        {/* Structured Data - Local Business */}
        <Script
          id="local-business-schema"
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {`
            {
              "@context": "https://schema.org",
              "@type": "RealEstateAgent",
              "name": "Dr. Jan Duffy Real Estate",
              "description": "Spring Valley real estate services specializing in Southwest Las Vegas homes for sale, buyer representation, and property valuations.",
              "url": "https://www.siennaridgehomes.com",
              "telephone": "(702) 903-3336",
              "email": "DrJanSells@SiennaRidgeHomes.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Southwest Las Vegas",
                "addressLocality": "Las Vegas",
                "addressRegion": "NV",
                "postalCode": "89117",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "36.0958",
                "longitude": "-115.3036"
              },
              "openingHours": "Mo-Su 00:00-23:59",
              "serviceArea": {
                "@type": "GeoCircle",
                "geoMidpoint": {
                  "@type": "GeoCoordinates",
                  "latitude": "36.0958",
                  "longitude": "-115.3036"
                },
                "geoRadius": "15"
              },
              "priceRange": "$$",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "5.0",
                "reviewCount": "100"
              }
            }
          `}
        </Script>
        
        {/* Structured Data - Web Application */}
        <Script
          id="web-app-schema"
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "Southwest Las Vegas Homes - Property Search",
              "description": "Find your dream home in Spring Valley & Southwest Las Vegas with Dr. Jan Duffy's expert real estate services. Search MLS listings, get home valuations, and expert buyer guidance.",
              "url": "https://www.siennaridgehomes.com",
              "applicationCategory": "RealEstateApplication",
              "operatingSystem": "Web Browser",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD",
                "description": "Free property search and home valuation services"
              },
              "author": {
                "@type": "Person",
                "name": "Dr. Jan Duffy",
                "url": "https://www.siennaridgehomes.com"
              },
              "publisher": {
                "@type": "Organization",
                "name": "Southwest Las Vegas Homes",
                "url": "https://www.siennaridgehomes.com"
              },
              "keywords": "Spring Valley real estate, Southwest Las Vegas homes, 89117 homes, 89147 homes, 89148 homes, Las Vegas real estate agent, Dr. Jan Duffy"
            }
          `}
        </Script>
      </head>
          <body
            className={`${inter.className} antialiased`}
          >
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
              storageKey="theme"
            >
              <Header />
              <main>
                {children}
              </main>
              <Footer />
            </ThemeProvider>
          </body>
    </html>
  )
}
