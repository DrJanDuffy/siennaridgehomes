'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Home, Phone } from 'lucide-react'

export default function LeadForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interestLevel: '',
    timeline: '',
    budget: '',
    message: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Integrate with contact form API
    console.log('Lead form submitted:', formData)
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      interestLevel: '',
      timeline: '',
      budget: '',
      message: ''
    })
  }

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Find Your Southwest Las Vegas Dream Home</CardTitle>
        <CardDescription>
          Get expert guidance from Dr. Jan Duffy, your premier Spring Valley & Southwest Las Vegas buyer agent
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name *</Label>
              <Input
                id="name"
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Your full name"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email Address *</Label>
              <Input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="your.email@example.com"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number *</Label>
              <Input
                id="phone"
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="(702) 903-3336"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="interestLevel">Interest Level</Label>
              <select
                id="interestLevel"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.interestLevel}
                onChange={(e) => setFormData({ ...formData, interestLevel: e.target.value })}
              >
                <option value="">Select your interest level</option>
                <option value="just-looking">Just Looking</option>
                <option value="serious-buyer">Serious Buyer</option>
                <option value="ready-to-buy">Ready to Buy</option>
                <option value="investor">Investor</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="timeline">Timeline</Label>
              <select
                id="timeline"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.timeline}
                onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
              >
                <option value="">When are you looking to buy?</option>
                <option value="immediately">Immediately</option>
                <option value="1-3-months">1-3 Months</option>
                <option value="3-6-months">3-6 Months</option>
                <option value="6-12-months">6-12 Months</option>
                <option value="planning-ahead">Planning Ahead</option>
              </select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="budget">Budget Range</Label>
              <select
                id="budget"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.budget}
                onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
              >
                <option value="">Select your budget range</option>
                <option value="under-400k">Under $400K</option>
                <option value="400k-500k">$400K - $500K</option>
                <option value="500k-600k">$500K - $600K</option>
                <option value="600k-750k">$600K - $750K</option>
                <option value="750k-plus">$750K+</option>
              </select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Additional Information</Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Tell us about your dream home, specific requirements, or any questions you have..."
              rows={4}
            />
          </div>

          <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
            Get Expert Guidance from Dr. Jan Duffy
          </Button>
          
          <div className="text-center mt-4 pt-4 border-t">
            <p className="text-sm text-gray-600 mb-3">Want to search properties right now?</p>
            <div className="space-y-2">
              <Button variant="outline" size="sm" className="w-full">
                <a href="http://drjanduffy.realscout.com/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                  <Home className="h-4 w-4 mr-2" />
                  Browse Available Properties
                </a>
              </Button>
              <Button variant="outline" size="sm" className="w-full">
                <a href="http://drjanduffy.realscout.com/onboarding" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                  <Phone className="h-4 w-4 mr-2" />
                  Create Custom Search
                </a>
              </Button>
            </div>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
