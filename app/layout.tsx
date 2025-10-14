import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { ThemeProvider } from 'next-themes'
import Script from 'next/script'
import DeployBanner from '../components/deploy-banner'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Sienna Ridge Homes - Dr. Janet Duffy, Las Vegas Real Estate',
  description: 'Find your dream home in Sienna Ridge, Las Vegas with Dr. Janet Duffy, your premier buyer agent. Expert guidance for new construction homes, luxury properties, and investment opportunities.',
  keywords: ['Sienna Ridge', 'Las Vegas real estate', 'Dr. Janet Duffy', 'new homes', 'Lennar homes', 'Las Vegas homes', 'real estate agent', 'buyer agent', 'Nevada real estate'],
  authors: [{ name: 'Dr. Janet Duffy' }],
  creator: 'Dr. Janet Duffy',
  publisher: 'Sienna Ridge Homes',
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
    title: 'Sienna Ridge Homes - Dr. Janet Duffy, Las Vegas Real Estate',
    description: 'Find your dream home in Sienna Ridge, Las Vegas with Dr. Janet Duffy, your premier buyer agent. Expert guidance for new construction homes and luxury properties.',
    url: 'https://www.siennaridgehomes.com',
    siteName: 'Sienna Ridge Homes',
    images: ['/og-image.png'],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sienna Ridge Homes - Dr. Janet Duffy, Las Vegas Real Estate',
    description: 'Find your dream home in Sienna Ridge, Las Vegas with expert guidance from Dr. Janet Duffy.',
    images: ['/og-image.png'],
    creator: '@DrJanDuffy',
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
        
        {/* Structured Data */}
        <Script
          id="structured-data"
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "Sienna Ridge Homes - Dr. Janet Duffy, Las Vegas Real Estate",
              "description": "Find your dream home in Sienna Ridge, Las Vegas with Dr. Janet Duffy, your premier buyer agent. Expert guidance for new construction homes, luxury properties, and investment opportunities.",
              "url": "https://www.siennaridgehomes.com",
              "applicationCategory": "RealEstateApplication",
              "operatingSystem": "Web Browser",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              },
              "author": {
                "@type": "Person",
                "name": "Dr. Janet Duffy",
                "url": "https://www.siennaridgehomes.com"
              },
              "publisher": {
                "@type": "Organization",
                "name": "Sienna Ridge Homes",
                "url": "https://www.siennaridgehomes.com"
              },
              "keywords": "Sienna Ridge, Las Vegas real estate, Dr. Janet Duffy, new homes, Lennar homes, Las Vegas homes, real estate agent, buyer agent, Nevada real estate"
            }
          `}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          storageKey="theme"
        >
          <DeployBanner />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
