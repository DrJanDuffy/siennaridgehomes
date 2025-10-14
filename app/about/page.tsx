import { Metadata } from 'next'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Phone, Mail, MapPin, Award, Users, Home, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Dr. Janet Duffy - Sienna Ridge Real Estate Expert',
  description: 'Meet Dr. Janet Duffy, your premier buyer agent for Sienna Ridge, Las Vegas. Expert guidance, local knowledge, and personalized service for your home buying journey.',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Meet Dr. Janet Duffy
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Your Premier Sienna Ridge Real Estate Expert
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="bg-white text-blue-600 px-4 py-2">
                <Award className="h-4 w-4 mr-2" />
                Licensed Real Estate Agent
              </Badge>
              <Badge variant="secondary" className="bg-white text-blue-600 px-4 py-2">
                <MapPin className="h-4 w-4 mr-2" />
                Sienna Ridge Specialist
              </Badge>
              <Badge variant="secondary" className="bg-white text-blue-600 px-4 py-2">
                <Users className="h-4 w-4 mr-2" />
                100+ Happy Clients
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Profile Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                {/* Placeholder for Dr. Janet Duffy's professional photo */}
                <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <Users className="h-16 w-16 mx-auto mb-4" />
                    <p className="text-lg font-semibold">Professional Photo</p>
                    <p className="text-sm">Dr. Janet Duffy</p>
                    <p className="text-xs mt-2">Replace with professional headshot</p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-gray-900">
                  Your Trusted Sienna Ridge Expert
                </h2>
                <p className="text-lg text-gray-600">
                  With years of experience in Las Vegas real estate, Dr. Janet Duffy has become 
                  the go-to expert for buyers looking to make Sienna Ridge their home. Her deep 
                  knowledge of the community, builder relationships, and market trends ensures 
                  you get the best possible guidance.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">100+</div>
                    <div className="text-sm text-gray-600">Happy Clients</div>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">5+</div>
                    <div className="text-sm text-gray-600">Years Experience</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose Dr. Janet Duffy?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-blue-600" />
                    Local Expertise
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Deep knowledge of Sienna Ridge community, amenities, and neighborhood dynamics. 
                    Knows every street, every builder, and every opportunity.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Home className="h-5 w-5 text-blue-600" />
                    Builder Relationships
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Strong relationships with Lennar and other builders in the area. 
                    Access to pre-construction opportunities and exclusive deals.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Award className="h-5 w-5 text-blue-600" />
                    Market Knowledge
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Expert understanding of Las Vegas real estate trends, pricing, 
                    and investment opportunities in the Sienna Ridge area.
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
                    Dedicated to understanding your unique needs and preferences. 
                    Tailored approach to finding your perfect Sienna Ridge home.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Star className="h-5 w-5 text-blue-600" />
                    Client Success
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Proven track record of successful transactions and satisfied clients. 
                    Your success is my priority.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Phone className="h-5 w-5 text-blue-600" />
                    Always Available
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Responsive communication and flexible scheduling. Available when you need me, 
                    whether it's evenings, weekends, or holidays.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">What Clients Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Placeholder testimonials - user to replace with real ones */}
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4">
                    "Dr. Janet Duffy made our home buying process seamless. Her knowledge of Sienna Ridge 
                    helped us find the perfect home for our family."
                  </p>
                  <div className="font-semibold">Sarah & Mike Johnson</div>
                  <div className="text-sm text-gray-500">Sienna Ridge Homeowners</div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4">
                    "Professional, knowledgeable, and always available. Dr. Duffy helped us navigate 
                    the new construction process with confidence."
                  </p>
                  <div className="font-semibold">David Chen</div>
                  <div className="text-sm text-gray-500">Sienna Ridge Homeowner</div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4">
                    "As an investor, I needed someone who understood the market. Dr. Duffy's expertise 
                    helped me make smart investment decisions in Sienna Ridge."
                  </p>
                  <div className="font-semibold">Robert Martinez</div>
                  <div className="text-sm text-gray-500">Real Estate Investor</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Find Your Sienna Ridge Home?</h2>
            <p className="text-xl mb-8">
              Let Dr. Janet Duffy guide you through your home buying journey with expert knowledge and personalized service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
                <Phone className="h-4 w-4 mr-2" />
                Call (702) 555-0123
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                <Mail className="h-4 w-4 mr-2" />
                Email Dr. Duffy
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
