# Sienna Ridge Homes - Southwest Las Vegas Real Estate

A professional real estate website for Dr. Jan Duffy, specializing in Southwest Las Vegas and Spring Valley properties.

## Overview

This website serves as the primary online presence for Dr. Jan Duffy's real estate business, focusing on the Southwest Las Vegas market including Spring Valley and surrounding areas (zip codes 89117, 89147, 89148).

## Features

### Lead Generation
- **RealScout Integration**: Live MLS search widgets for property listings
- **Home Valuation Tool**: Instant property value estimates
- **Advanced Search**: Detailed property search with filters
- **Lead Capture Forms**: Multiple contact forms throughout the site

### Market Focus
- **Southwest Las Vegas**: Primary service area
- **Spring Valley**: Specialized neighborhood expertise
- **Zip Code Coverage**: 89117, 89147, 89148
- **Property Types**: Established homes and newer developments
- **Price Range**: $400K - $600K focus with broader market coverage

### SEO & Performance
- **Search Engine Optimized**: Meta tags, structured data, sitemap
- **Mobile Responsive**: Optimized for all devices
- **Fast Loading**: Optimized images and code
- **Google Analytics**: Traffic tracking and insights

## Technology Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v3
- **UI Components**: Radix UI primitives
- **Icons**: Lucide React
- **Real Estate Integration**: RealScout widgets
- **Deployment**: Vercel

## Project Structure

```
├── app/
│   ├── about/                 # About Dr. Jan Duffy page
│   ├── listings/             # Property listings page
│   ├── layout.tsx            # Root layout with header/footer
│   ├── page.tsx              # Homepage with RealScout widgets
│   ├── not-found.tsx         # 404 page with lead capture
│   ├── robots.ts             # SEO robots.txt
│   └── sitemap.ts            # SEO sitemap
├── components/
│   ├── ui/                   # Reusable UI components
│   ├── header.tsx            # Site navigation
│   ├── footer.tsx            # Site footer
│   └── lead-form.tsx         # Contact form component
├── public/                   # Static assets
└── types/                    # TypeScript declarations
```

## Key Pages

### Homepage (`/`)
- Hero section with market overview
- RealScout search widgets (Simple Search, Advanced Search)
- Home valuation tool
- Featured listings
- Lead capture form
- Market insights and testimonials

### Listings (`/listings`)
- Comprehensive property search
- RealScout integration for live MLS data
- Featured properties showcase
- Market statistics and trends

### About (`/about`)
- Dr. Jan Duffy's professional background
- Service areas and expertise
- Client testimonials
- Contact information and office location

## RealScout Integration

The website integrates with RealScout for:
- **Simple Search**: Quick property searches
- **Advanced Search**: Detailed filtering and criteria
- **Office Listings**: Featured properties display
- **Home Valuation**: Property value estimates

All widgets are configured for Dr. Jan Duffy's agent ID and styled to match the site design.

## Contact Information

- **Phone**: (702) 555-0123
- **Email**: DrJanSells@SiennaRidgeHomes.com
- **Office**: 8370 Caldera Hills Avenue, Las Vegas, NV 89147
- **Service Areas**: Southwest Las Vegas, Spring Valley (89117, 89147, 89148)

## Development

### Prerequisites
- Node.js 18+ 
- npm or pnpm

### Installation
```bash
npm install
# or
pnpm install
```

### Development Server
```bash
npm run dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build for Production
```bash
npm run build
# or
pnpm build
```

### Deployment
The site is configured for deployment on Vercel with automatic builds from the main branch.

## SEO Configuration

- **Meta Tags**: Optimized for Southwest Las Vegas real estate keywords
- **Structured Data**: JSON-LD markup for real estate business
- **Sitemap**: Dynamic sitemap generation
- **Robots.txt**: Search engine crawling instructions
- **Open Graph**: Social media sharing optimization

## Performance

- **Core Web Vitals**: Optimized for Google's performance metrics
- **Image Optimization**: Next.js Image component for fast loading
- **Code Splitting**: Automatic code splitting for faster page loads
- **Caching**: Strategic caching for improved performance

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

Private project for Dr. Jan Duffy's real estate business.

## Support

For technical support or updates, contact the development team.