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
  title: 'Simple v0 - AI-Powered App Generator',
  description: 'The simplest way to use v0 - just prompt and see your app generated instantly. Build AI-powered apps with real-time generation and seamless deployment to Vercel.',
  keywords: ['v0', 'AI', 'app generator', 'Next.js', 'React', 'Vercel', 'artificial intelligence', 'code generation'],
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
    title: 'Simple v0 - AI-Powered App Generator',
    description: 'The simplest way to use v0 - just prompt and see your app generated instantly. Build AI-powered apps with real-time generation and seamless deployment to Vercel.',
    url: 'https://siennaridgehomes.com',
    siteName: 'Sienna Ridge Homes',
    images: ['/og-image.png'],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Simple v0 - AI-Powered App Generator',
    description: 'The simplest way to use v0 - just prompt and see your app generated instantly.',
    images: ['/og-image.png'],
    creator: '@DrJanDuffy',
  },
  alternates: {
    canonical: 'https://siennaridgehomes.com',
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
              "name": "Simple v0 - AI-Powered App Generator",
              "description": "The simplest way to use v0 - just prompt and see your app generated instantly. Build AI-powered apps with real-time generation and seamless deployment to Vercel.",
              "url": "https://siennaridgehomes.com",
              "applicationCategory": "DeveloperApplication",
              "operatingSystem": "Web Browser",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              },
              "author": {
                "@type": "Person",
                "name": "Dr. Janet Duffy",
                "url": "https://siennaridgehomes.com"
              },
              "publisher": {
                "@type": "Organization",
                "name": "Sienna Ridge Homes",
                "url": "https://siennaridgehomes.com"
              },
              "keywords": "v0, AI, app generator, Next.js, React, Vercel, artificial intelligence, code generation"
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
