import { Metadata } from 'next'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Home, MapPin, Bed, Bath, Square, DollarSign, Filter, Search, TrendingUp, Star } from 'lucide-react'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Sienna Ridge Homes for Sale - Available Listings',
  description: 'Browse available homes for sale in Sienna Ridge, Las Vegas. Find your dream home with expert guidance from Dr. Jan Duffy.',
}

export default function ListingsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* RealScout Script */}
      <Script
        src="https://em.realscout.com/widgets/realscout-web-components.umd.js"
        type="module"
        strategy="afterInteractive"
      />
      {/* Header Section */}
      <section className="relative py-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-700/80"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')" }}
        ></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Sienna Ridge Homes for Sale
            </h1>
            <p className="text-lg md:text-xl mb-6">
              Discover available properties in Sienna Ridge with expert guidance from Dr. Jan Duffy
            </p>
            <Badge variant="secondary" className="bg-white text-blue-600 px-4 py-2">
              <Home className="h-4 w-4 mr-2" />
              Live MLS Listings
            </Badge>
          </div>
        </div>
      </section>

      {/* Market Overview Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Sienna Ridge Real Estate Market Overview</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Sienna Ridge represents one of Las Vegas's most desirable master-planned communities, 
                offering luxury new construction homes with exceptional amenities and investment potential.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-blue-600" />
                    Market Trends
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    The Sienna Ridge market continues to show strong appreciation with increasing demand 
                    for new construction homes. Properties in this area maintain excellent resale value 
                    due to the community's amenities and location.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-blue-600" />
                    Location Benefits
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Strategically located with easy access to major highways, shopping centers, 
                    entertainment venues, and the Las Vegas Strip. Close proximity to McCarran 
                    Airport makes travel convenient.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Star className="h-5 w-5 text-blue-600" />
                    Community Amenities
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Residents enjoy resort-style amenities including community pools, fitness centers, 
                    parks, playgrounds, and walking trails. The master-planned community offers 
                    an exceptional lifestyle.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Search className="h-5 w-5 text-blue-600" />
                  Search Sienna Ridge Properties
                </CardTitle>
                <CardDescription>
                  Use the filters below to find your perfect home in Sienna Ridge
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Price Range</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Any Price" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="under-400k">Under $400K</SelectItem>
                        <SelectItem value="400k-500k">$400K - $500K</SelectItem>
                        <SelectItem value="500k-600k">$500K - $600K</SelectItem>
                        <SelectItem value="600k-750k">$600K - $750K</SelectItem>
                        <SelectItem value="750k-plus">$750K+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Bedrooms</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Any" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1+</SelectItem>
                        <SelectItem value="2">2+</SelectItem>
                        <SelectItem value="3">3+</SelectItem>
                        <SelectItem value="4">4+</SelectItem>
                        <SelectItem value="5">5+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Bathrooms</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Any" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1+</SelectItem>
                        <SelectItem value="2">2+</SelectItem>
                        <SelectItem value="2.5">2.5+</SelectItem>
                        <SelectItem value="3">3+</SelectItem>
                        <SelectItem value="4">4+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Property Type</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Any Type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="single-family">Single Family</SelectItem>
                        <SelectItem value="townhouse">Townhouse</SelectItem>
                        <SelectItem value="condo">Condo</SelectItem>
                        <SelectItem value="new-construction">New Construction</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 mt-6">
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    <Search className="h-4 w-4 mr-2" />
                    Search Properties
                  </Button>
                  <Button variant="outline">
                    <Filter className="h-4 w-4 mr-2" />
                    More Filters
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* RealScout Integration */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-4">Live MLS Listings</h2>
              <p className="text-gray-600">
                Search available properties in Sienna Ridge and surrounding areas
              </p>
            </div>

            {/* RealScout Search Widgets */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              {/* Simple Search */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-center">Quick Search</CardTitle>
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

            {/* RealScout Office Listings */}
            <Card className="mb-8">
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

            {/* Featured Property - Dr. Jan Duffy's Office */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-center mb-6">Featured Property</h3>
              <Card className="overflow-hidden hover:shadow-lg transition-shadow max-w-2xl mx-auto">
                <div className="bg-gradient-to-r from-blue-600 to-blue-800 h-48 flex items-center justify-center">
                  <div className="text-center text-white">
                    <Home className="h-16 w-16 mx-auto mb-4" />
                    <p className="text-lg font-semibold">Dr. Jan Duffy's Office</p>
                    <p className="text-sm">8370 Caldera Hills Avenue</p>
                    <p className="text-xs">Las Vegas, NV 89147</p>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-semibold">8370 Caldera Hills Avenue</h3>
                    <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                      Office Location
                    </Badge>
                  </div>
                  <p className="text-lg font-semibold text-blue-600 mb-2">Dr. Jan Duffy's Real Estate Office</p>
                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      <span>Las Vegas, NV 89147</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Phone className="h-4 w-4" />
                      <span>(702) 555-0123</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">
                    Visit Dr. Jan Duffy's conveniently located office in the heart of Las Vegas. 
                    Professional consultation space for all your Sienna Ridge real estate needs.
                  </p>
                  <div className="flex gap-2">
                    <Button className="flex-1">
                      <Phone className="h-4 w-4 mr-2" />
                      Call Office
                    </Button>
                    <Button variant="outline" className="flex-1">
                      <a href="http://drjanduffy.realscout.com/" target="_blank" rel="noopener noreferrer" className="flex items-center">
                        <Home className="h-4 w-4 mr-2" />
                        Search Properties
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sample Property Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Sample Property 1 */}
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div 
                  className="h-48 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')" }}
                ></div>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="bg-green-100 text-green-800">
                      New Construction
                    </Badge>
                    <span className="text-sm text-gray-500">MLS #123456</span>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">1594 Sienna Ridge</h3>
                  <div className="flex items-center gap-1 mb-2">
                    <MapPin className="h-4 w-4 text-gray-400" />
                    <span className="text-sm text-gray-600">Sienna Ridge, Las Vegas</span>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                    <div className="flex items-center gap-1">
                      <Bed className="h-4 w-4" />
                      <span>3</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Bath className="h-4 w-4" />
                      <span>2.5</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Square className="h-4 w-4" />
                      <span>1,594 sq ft</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-xl font-bold text-blue-600">$485,000</div>
                    <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                      <a href="http://drjanduffy.realscout.com/" target="_blank" rel="noopener noreferrer" className="flex items-center">
                        Search Properties
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Sample Property 2 */}
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div 
                  className="h-48 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600607687644-c7171b42498b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')" }}
                ></div>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                      Available Now
                    </Badge>
                    <span className="text-sm text-gray-500">MLS #123457</span>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">1760 Sienna Ridge</h3>
                  <div className="flex items-center gap-1 mb-2">
                    <MapPin className="h-4 w-4 text-gray-400" />
                    <span className="text-sm text-gray-600">Sienna Ridge, Las Vegas</span>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                    <div className="flex items-center gap-1">
                      <Bed className="h-4 w-4" />
                      <span>4</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Bath className="h-4 w-4" />
                      <span>3</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Square className="h-4 w-4" />
                      <span>1,760 sq ft</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-xl font-bold text-blue-600">$525,000</div>
                    <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                      <a href="http://drjanduffy.realscout.com/" target="_blank" rel="noopener noreferrer" className="flex items-center">
                        Search Properties
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Sample Property 3 */}
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div 
                  className="h-48 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')" }}
                ></div>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="bg-purple-100 text-purple-800">
                      Coming Soon
                    </Badge>
                    <span className="text-sm text-gray-500">MLS #123458</span>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">2270 Sienna Ridge</h3>
                  <div className="flex items-center gap-1 mb-2">
                    <MapPin className="h-4 w-4 text-gray-400" />
                    <span className="text-sm text-gray-600">Sienna Ridge, Las Vegas</span>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                    <div className="flex items-center gap-1">
                      <Bed className="h-4 w-4" />
                      <span>5</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Bath className="h-4 w-4" />
                      <span>3.5</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Square className="h-4 w-4" />
                      <span>2,270 sq ft</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-xl font-bold text-blue-600">$675,000</div>
                    <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                      <a href="http://drjanduffy.realscout.com/" target="_blank" rel="noopener noreferrer" className="flex items-center">
                        Search Properties
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* CTA Section */}
            <div className="text-center mt-12">
              <Card className="bg-blue-50 border-blue-200">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4">Don't See What You're Looking For?</h3>
                  <p className="text-gray-600 mb-6">
                    Dr. Janet Duffy can help you find off-market properties and pre-construction opportunities in Sienna Ridge
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                      <Home className="h-4 w-4 mr-2" />
                      Get Custom Search
                    </Button>
                    <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
                      <MapPin className="h-4 w-4 mr-2" />
                      Schedule Tour
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
