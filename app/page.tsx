import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import LeadForm from '@/components/lead-form'
import Script from 'next/script'
import { 
  Home, 
  MapPin, 
  Users, 
  Star, 
  Phone, 
  Mail, 
  Calendar,
  ArrowRight,
  CheckCircle,
  Award,
  TrendingUp,
  DollarSign
} from 'lucide-react'

// Type declarations for RealScout web components
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'realscout-simple-search': {
        'agent-encoded-id': string
        style?: React.CSSProperties
        className?: string
      }
      'realscout-advanced-search': {
        'agent-encoded-id': string
        style?: React.CSSProperties
        className?: string
      }
      'realscout-office-listings': {
        'agent-encoded-id': string
        'sort-order'?: string
        'listing-status'?: string
        'property-types'?: string
        'price-min'?: string
        'price-max'?: string
        style?: React.CSSProperties
        className?: string
      }
      'realscout-home-value': {
        'agent-encoded-id': string
        style?: React.CSSProperties
        className?: string
      }
    }
  }
}

export const metadata: Metadata = {
  title: 'Southwest Las Vegas Real Estate - Dr. Jan Duffy, Spring Valley Specialist',
  description: 'Find your dream home in Southwest Las Vegas / Spring Valley (89117, 89147, 89148) with Dr. Jan Duffy. Expert guidance for families, investors, and first-time buyers in this outperforming market.',
}

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* RealScout Script */}
      <Script
        src="https://em.realscout.com/widgets/realscout-web-components.umd.js"
        type="module"
        strategy="afterInteractive"
      />
      {/* Hero Section */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-700/80"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80')" }}
        ></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Southwest Las Vegas Real Estate
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              Discover homes in Spring Valley & Southwest Las Vegas (89117, 89147, 89148) with Dr. Jan Duffy, your premier area specialist
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Badge variant="secondary" className="bg-white text-blue-600 px-4 py-2">
                <Award className="h-4 w-4 mr-2" />
                Licensed Agent
              </Badge>
              <Badge variant="secondary" className="bg-white text-blue-600 px-4 py-2">
                <MapPin className="h-4 w-4 mr-2" />
                Spring Valley Expert
              </Badge>
              <Badge variant="secondary" className="bg-white text-blue-600 px-4 py-2">
                <TrendingUp className="h-4 w-4 mr-2" />
                2025 Market Leader
              </Badge>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/listings" passHref>
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                  <Home className="h-4 w-4 mr-2" />
                  View Available Homes <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </Link>
              <Link href="/about" passHref>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                  <Calendar className="h-4 w-4 mr-2" />
                  Schedule Consultation <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* RealScout Lead Generation Section - Moved to Top */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Find Your Dream Home Today</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Search live MLS listings and get instant property valuations with Dr. Jan Duffy's expertise in Southwest Las Vegas
              </p>
            </div>
            
            {/* RealScout Search Widgets */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              {/* Simple Search */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-center">Quick Property Search</CardTitle>
                  <CardDescription className="text-center">
                    Find properties with a simple search
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="flex justify-center">
                    {/* @ts-ignore */}
                    <realscout-simple-search 
                      agent-encoded-id="QWdlbnQtMjI1MDUw"
                      style={{
                        '--rs-ss-font-primary-color': '#6a6d72',
                        '--rs-ss-searchbar-border-color': 'hsl(0, 0%, 80%)',
                        '--rs-ss-box-shadow': '0 10px 15px -3px #0000001a',
                        '--rs-ss-widget-width': '100%'
                      } as React.CSSProperties}
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Advanced Search */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-center">Advanced Search</CardTitle>
                  <CardDescription className="text-center">
                    Detailed search with filters and criteria
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="flex justify-center">
                    {/* @ts-ignore */}
                    <realscout-advanced-search 
                      agent-encoded-id="QWdlbnQtMjI1MDUw"
                      style={{
                        '--rs-as-button-text-color': '#ffffff',
                        '--rs-as-background-color': '#ffffff',
                        '--rs-as-button-color': 'rgb(35, 93, 137)',
                        '--rs-as-widget-width': '100%'
                      } as React.CSSProperties}
                    />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Home Valuation */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
              <div>
                <h3 className="text-2xl font-bold mb-6">Get Your Home's Value</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <DollarSign className="h-6 w-6 text-blue-600 mt-1" />
                    <div>
                      <h4 className="font-semibold">Accurate Market Value</h4>
                      <p className="text-gray-600">Get instant, data-driven property valuations</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <TrendingUp className="h-6 w-6 text-blue-600 mt-1" />
                    <div>
                      <h4 className="font-semibold">Market Trends</h4>
                      <p className="text-gray-600">Understand current market conditions and trends</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="h-6 w-6 text-blue-600 mt-1" />
                    <div>
                      <h4 className="font-semibold">Local Expertise</h4>
                      <p className="text-gray-600">Spring Valley & Southwest Las Vegas area-specific valuations</p>
                      <div className="mt-2 p-2 bg-gray-100 rounded text-xs">
                        <p className="font-medium">Coverage Areas:</p>
                        <p className="text-gray-500">89117, 89147, 89148</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-center flex items-center justify-center gap-2">
                      <DollarSign className="h-5 w-5 text-blue-600" />
                      Instant Home Valuation
                    </CardTitle>
                    <CardDescription className="text-center">
                      Get your property's estimated value in seconds
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-6">
                    {/* @ts-ignore */}
                    <realscout-home-value 
                      agent-encoded-id="QWdlbnQtMjI1MDUw"
                      style={{
                        '--rs-hvw-background-color': '#ffffff',
                        '--rs-hvw-title-color': '#000000',
                        '--rs-hvw-subtitle-color': 'rgba(28, 30, 38, 0.5)',
                        '--rs-hvw-primary-button-text-color': '#ffffff',
                        '--rs-hvw-primary-button-color': 'rgb(35, 93, 137)',
                        '--rs-hvw-secondary-button-text-color': 'rgb(35, 93, 137)',
                        '--rs-hvw-secondary-button-color': '#ffffff',
                        '--rs-hvw-widget-width': '100%'
                      } as React.CSSProperties}
                    />
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Featured Listings */}
            <Card className="mb-12">
              <CardHeader>
                <CardTitle className="text-center">Featured Southwest Las Vegas Homes</CardTitle>
                <CardDescription className="text-center">
                  Current listings in Spring Valley & Southwest Las Vegas (89117, 89147, 89148) - $400K to $600K range
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                {/* @ts-ignore */}
                <realscout-office-listings 
                  agent-encoded-id="QWdlbnQtMjI1MDUw" 
                  sort-order="NEWEST" 
                  listing-status="For Sale,In Contract" 
                  property-types=",SFR" 
                  price-min="400000" 
                  price-max="600000"
                  style={{
                    '--rs-listing-divider-color': '#0e64c8',
                    'width': '100%'
                  } as React.CSSProperties}
                />
              </CardContent>
            </Card>

            {/* Lead Form */}
            <Card className="max-w-2xl mx-auto">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold mb-2">
                  Get Personalized Guidance
                </CardTitle>
                <CardDescription className="text-gray-600">
                  Connect with Dr. Jan Duffy for expert real estate advice
                </CardDescription>
              </CardHeader>
              <CardContent>
                <LeadForm />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Why Choose Dr. Jan Duffy for Southwest Las Vegas?</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                With years of experience in Las Vegas real estate, Dr. Jan Duffy has helped over 100 families find their dream homes in Spring Valley, Southwest Las Vegas (89117, 89147, 89148), and surrounding areas.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center mb-12">
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">100+</div>
                <div className="text-gray-600">Happy Clients</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">5+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
                <div className="text-gray-600">Available Support</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
                <div className="text-gray-600">Client Satisfaction</div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Award className="h-5 w-5 text-blue-600" />
                    Expert Local Knowledge
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Dr. Jan Duffy has extensive knowledge of Sienna Ridge, including neighborhood amenities, 
                    school districts, and future development plans. Her expertise ensures you make informed decisions.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-blue-600" />
                    Personalized Service
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Every client receives personalized attention and customized search strategies. 
                    Dr. Jan Duffy takes the time to understand your unique needs and preferences.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-blue-600" />
                    Market Expertise
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Stay ahead of market trends with Dr. Jan Duffy's insights into Las Vegas real estate. 
                    She helps you understand market conditions and timing for optimal results.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Lennar Home Models Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Southwest Las Vegas Market Overview</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Spring Valley & Southwest Las Vegas (89117, 89147, 89148) offer exceptional opportunities for families, investors, and first-time buyers in a market expected to outperform metro averages in 2025.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="overflow-hidden">
                <div 
                  className="h-48 bg-cover bg-center bg-no-repeat relative"
                  style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80')" }}
                >
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <div className="text-center text-white">
                      <Home className="h-16 w-16 mx-auto mb-4" />
                      <p className="text-lg font-semibold">Single Story</p>
                      <p className="text-sm">1,800 - 2,400 sq ft</p>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Established Homes (89117, 89147)</h3>
                  <p className="text-gray-600 mb-4">
                    Well-maintained established homes in Spring Valley with mature landscaping, larger lots, and proven neighborhoods.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Bedrooms:</span>
                      <span>3-4</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Bathrooms:</span>
                      <span>2-3</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Price Range:</span>
                      <span className="font-semibold text-blue-600">$350K-$500K</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="overflow-hidden">
                <div 
                  className="h-48 bg-cover bg-center bg-no-repeat relative"
                  style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2053&q=80')" }}
                >
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <div className="text-center text-white">
                      <Home className="h-16 w-16 mx-auto mb-4" />
                      <p className="text-lg font-semibold">Two Story</p>
                      <p className="text-sm">2,200 - 3,200 sq ft</p>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Newer Developments (89148)</h3>
                  <p className="text-gray-600 mb-4">
                    Modern new construction homes with contemporary finishes, energy-efficient features, and resort-style amenities.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Bedrooms:</span>
                      <span>4-5</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Bathrooms:</span>
                      <span>3-4</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Price Range:</span>
                      <span className="font-semibold text-blue-600">$450K-$650K</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="overflow-hidden">
                <div 
                  className="h-48 bg-cover bg-center bg-no-repeat relative"
                  style={{ backgroundImage: "url('https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')" }}
                >
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <div className="text-center text-white">
                      <Home className="h-16 w-16 mx-auto mb-4" />
                      <p className="text-lg font-semibold">Executive</p>
                      <p className="text-sm">3,000+ sq ft</p>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Investment Properties</h3>
                  <p className="text-gray-600 mb-4">
                    Strong rental market with excellent cash flow potential. Perfect for investors seeking stable returns in a growing market.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Bedrooms:</span>
                      <span>3-4</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Bathrooms:</span>
                      <span>2-3</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Rental Yield:</span>
                      <span className="font-semibold text-green-600">6-8%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-12">
              <h3 className="text-2xl font-bold mb-4">Why Southwest Las Vegas is a Smart Investment</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                    <TrendingUp className="h-8 w-8 text-blue-600" />
                  </div>
                  <h4 className="font-semibold mb-2">2025 Market Leader</h4>
                  <p className="text-sm text-gray-600">Expected to outperform metro average growth</p>
                </div>
                <div className="text-center">
                  <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                    <DollarSign className="h-8 w-8 text-green-600" />
                  </div>
                  <h4 className="font-semibold mb-2">Strong Rental Market</h4>
                  <p className="text-sm text-gray-600">Excellent cash flow potential for investors</p>
                </div>
                <div className="text-center">
                  <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                    <MapPin className="h-8 w-8 text-purple-600" />
                  </div>
                  <h4 className="font-semibold mb-2">Prime Location</h4>
                  <p className="text-sm text-gray-600">Close to Strip, airport, and major employers</p>
                </div>
                <div className="text-center">
                  <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                    <Users className="h-8 w-8 text-orange-600" />
                  </div>
                  <h4 className="font-semibold mb-2">Family Friendly</h4>
                  <p className="text-sm text-gray-600">Great schools, parks, and community amenities</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Home Valuation Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Get Your Home's Value</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover what your Southwest Las Vegas property is worth with our instant valuation tool
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-6">Why Get a Home Valuation?</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <DollarSign className="h-6 w-6 text-blue-600 mt-1" />
                    <div>
                      <h4 className="font-semibold">Accurate Market Value</h4>
                      <p className="text-gray-600">Get instant, data-driven property valuations</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <TrendingUp className="h-6 w-6 text-blue-600 mt-1" />
                    <div>
                      <h4 className="font-semibold">Market Trends</h4>
                      <p className="text-gray-600">Understand current market conditions and trends</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="h-6 w-6 text-blue-600 mt-1" />
                    <div>
                      <h4 className="font-semibold">Local Expertise</h4>
                      <p className="text-gray-600">Spring Valley & Southwest Las Vegas area-specific valuations</p>
                      <div className="mt-2 p-2 bg-gray-100 rounded text-xs">
                        <p className="font-medium">Coverage Areas:</p>
                        <p className="text-gray-500">89117, 89147, 89148</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-center flex items-center justify-center gap-2">
                      <DollarSign className="h-5 w-5 text-blue-600" />
                      Instant Home Valuation
                    </CardTitle>
                    <CardDescription className="text-center">
                      Get your property's estimated value in seconds
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-6">
                    {/* @ts-ignore */}
                    <realscout-home-value 
                      agent-encoded-id="QWdlbnQtMjI1MDUw"
                      style={{
                        '--rs-hvw-background-color': '#ffffff',
                        '--rs-hvw-title-color': '#000000',
                        '--rs-hvw-subtitle-color': 'rgba(28, 30, 38, 0.5)',
                        '--rs-hvw-primary-button-text-color': '#ffffff',
                        '--rs-hvw-primary-button-color': 'rgb(35, 93, 137)',
                        '--rs-hvw-secondary-button-text-color': 'rgb(35, 93, 137)',
                        '--rs-hvw-secondary-button-color': '#ffffff',
                        '--rs-hvw-widget-width': '100%'
                      } as React.CSSProperties}
                    />
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Sienna Ridge */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Welcome to Southwest Las Vegas / Spring Valley</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Experience the best of Las Vegas living in Spring Valley and Southwest Las Vegas (89117, 89147, 89148). 
                A thriving community with established neighborhoods, new developments, and exceptional investment opportunities.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-blue-600" />
                    Prime Location
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Strategically located in Southwest Las Vegas with easy access to major highways, 
                    shopping centers, and entertainment venues. Close to the Las Vegas Strip and McCarran Airport.
                  </p>
                  <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                    <p className="text-sm font-semibold text-blue-800">Coverage Areas</p>
                    <p className="text-sm text-blue-600">89117, 89147, 89148</p>
                    <p className="text-xs text-blue-500">Spring Valley & Southwest Las Vegas</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Star className="h-5 w-5 text-blue-600" />
                    Luxury Amenities
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Enjoy excellent amenities including community pools, fitness centers, 
                    parks, playgrounds, and walking trails throughout the established and newer neighborhoods.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-blue-600" />
                    Investment Value
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Strong appreciation potential with growing demand and limited inventory. 
                    Perfect for both families and investors seeking stable returns in a market expected to outperform in 2025.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Home Models Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Featured Home Models</h2>
              <p className="text-xl text-gray-600">
                Discover the beautiful floor plans available in Sienna Ridge
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Model 1 */}
              <Card className="overflow-hidden">
                <div 
                  className="h-48 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')" }}
                ></div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">1594 Sienna Ridge</h3>
                  <div className="space-y-2 text-gray-600">
                    <div className="flex justify-between">
                      <span>Bedrooms:</span>
                      <span>3</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Bathrooms:</span>
                      <span>2.5</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Square Feet:</span>
                      <span>1,594</span>
                    </div>
                    <div className="flex justify-between font-semibold">
                      <span>Starting at:</span>
                      <span className="text-blue-600">$485,000</span>
                    </div>
                  </div>
                  <Button className="w-full mt-4 bg-blue-600 hover:bg-blue-700">
                    Learn More
                  </Button>
                </CardContent>
              </Card>

              {/* Model 2 */}
              <Card className="overflow-hidden">
                <div 
                  className="h-48 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600607687644-c7171b42498b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')" }}
                ></div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">1760 Sienna Ridge</h3>
                  <div className="space-y-2 text-gray-600">
                    <div className="flex justify-between">
                      <span>Bedrooms:</span>
                      <span>4</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Bathrooms:</span>
                      <span>3</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Square Feet:</span>
                      <span>1,760</span>
                    </div>
                    <div className="flex justify-between font-semibold">
                      <span>Starting at:</span>
                      <span className="text-blue-600">$525,000</span>
                    </div>
                  </div>
                  <Button className="w-full mt-4 bg-blue-600 hover:bg-blue-700">
                    Learn More
                  </Button>
                </CardContent>
              </Card>

              {/* Model 3 */}
              <Card className="overflow-hidden">
                <div 
                  className="h-48 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')" }}
                ></div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">2270 Sienna Ridge</h3>
                  <div className="space-y-2 text-gray-600">
                    <div className="flex justify-between">
                      <span>Bedrooms:</span>
                      <span>5</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Bathrooms:</span>
                      <span>3.5</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Square Feet:</span>
                      <span>2,270</span>
                    </div>
                    <div className="flex justify-between font-semibold">
                      <span>Starting at:</span>
                      <span className="text-blue-600">$675,000</span>
                    </div>
                  </div>
                  <Button className="w-full mt-4 bg-blue-600 hover:bg-blue-700">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>


      {/* Call to Action Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Find Your Southwest Las Vegas Home?</h2>
            <p className="text-xl mb-8">
              Let Dr. Jan Duffy guide you through your home buying journey in Spring Valley & Southwest Las Vegas (89117, 89147, 89148) with expert knowledge and personalized service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
                  <Phone className="h-4 w-4 mr-2" />
                  Call (702) 555-0123
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                  <Mail className="h-4 w-4 mr-2" />
                  Email DrJanSells@SiennaRidgeHomes.com
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                  <a href="http://drjanduffy.realscout.com/" target="_blank" rel="noopener noreferrer" className="flex items-center">
                    <Home className="h-4 w-4 mr-2" />
                    Search Properties
                  </a>
                </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}