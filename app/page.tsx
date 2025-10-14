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

export const metadata: Metadata = {
  title: 'Sienna Ridge Homes - Dr. Janet Duffy, Las Vegas Real Estate',
  description: 'Find your dream home in Sienna Ridge, Las Vegas with Dr. Janet Duffy, your premier buyer agent. Expert guidance for new construction homes and luxury properties.',
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
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Your Sienna Ridge Home Awaits
                </h1>
                <p className="text-xl mb-8 text-blue-100">
                  Expert guidance from Dr. Jan Duffy, your premier buyer agent for Sienna Ridge, Las Vegas
                </p>
                <div className="flex flex-wrap gap-4 mb-8">
                  <Badge variant="secondary" className="bg-white text-blue-600 px-4 py-2">
                    <Award className="h-4 w-4 mr-2" />
                    Licensed Agent
                  </Badge>
                  <Badge variant="secondary" className="bg-white text-blue-600 px-4 py-2">
                    <MapPin className="h-4 w-4 mr-2" />
                    Sienna Ridge Expert
                  </Badge>
                  <Badge variant="secondary" className="bg-white text-blue-600 px-4 py-2">
                    <Users className="h-4 w-4 mr-2" />
                    100+ Happy Clients
                  </Badge>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                    <Home className="h-4 w-4 mr-2" />
                    View Available Homes
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                    <Calendar className="h-4 w-4 mr-2" />
                    Schedule Consultation
                  </Button>
                </div>
              </div>
              <div>
                <LeadForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
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
                Discover what your Sienna Ridge property is worth with our instant valuation tool
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
                      <p className="text-gray-600">Sienna Ridge area-specific valuations</p>
                      <div className="mt-2 p-2 bg-gray-100 rounded text-xs">
                        <p className="font-medium">Example: 8370 Caldera Hills Avenue</p>
                        <p className="text-gray-500">Las Vegas, NV 89147</p>
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
              <h2 className="text-3xl font-bold mb-4">Welcome to Sienna Ridge</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                A premier master-planned community in Las Vegas offering luxury homes, 
                world-class amenities, and an exceptional lifestyle.
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
                    Strategically located in Las Vegas with easy access to major highways, 
                    shopping centers, and entertainment venues.
                  </p>
                  <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                    <p className="text-sm font-semibold text-blue-800">Dr. Jan Duffy's Office</p>
                    <p className="text-sm text-blue-600">8370 Caldera Hills Avenue</p>
                    <p className="text-xs text-blue-500">Las Vegas, NV 89147</p>
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
                    Enjoy resort-style amenities including pools, fitness centers, 
                    parks, and walking trails throughout the community.
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
                    Strong appreciation potential with growing demand and 
                    limited inventory in this desirable Las Vegas location.
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
              {/* Model 1 - Placeholder */}
              <Card className="overflow-hidden">
                <div className="bg-gray-200 h-48 flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <Home className="h-12 w-12 mx-auto mb-2" />
                    <p className="text-sm">Model Photo</p>
                    <p className="text-xs">Replace with licensed Lennar image</p>
                  </div>
                </div>
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

              {/* Model 2 - Placeholder */}
              <Card className="overflow-hidden">
                <div className="bg-gray-200 h-48 flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <Home className="h-12 w-12 mx-auto mb-2" />
                    <p className="text-sm">Model Photo</p>
                    <p className="text-xs">Replace with licensed Lennar image</p>
                  </div>
                </div>
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

              {/* Model 3 - Placeholder */}
              <Card className="overflow-hidden">
                <div className="bg-gray-200 h-48 flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <Home className="h-12 w-12 mx-auto mb-2" />
                    <p className="text-sm">Model Photo</p>
                    <p className="text-xs">Replace with licensed Lennar image</p>
                  </div>
                </div>
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

      {/* CTA Section */}
      {/* RealScout Lead Generation Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Find Your Dream Home Today</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Search live MLS listings and get instant property valuations with Dr. Jan Duffy's expertise
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

            {/* Featured Listings */}
            <Card className="mb-12">
              <CardHeader>
                <CardTitle className="text-center">Featured Sienna Ridge Homes</CardTitle>
                <CardDescription className="text-center">
                  Current listings in the Sienna Ridge area - $500K to $600K range
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <realscout-office-listings 
                  agent-encoded-id="QWdlbnQtMjI1MDUw" 
                  sort-order="NEWEST" 
                  listing-status="For Sale,In Contract" 
                  property-types=",SFR" 
                  price-min="500000" 
                  price-max="600000"
                  style={{
                    '--rs-listing-divider-color': '#0e64c8',
                    'width': '100%'
                  } as React.CSSProperties}
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Find Your Sienna Ridge Home?</h2>
            <p className="text-xl mb-8">
              Let Dr. Jan Duffy guide you through your home buying journey with expert knowledge and personalized service.
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
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}