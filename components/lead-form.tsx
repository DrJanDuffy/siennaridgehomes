'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

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
        <CardTitle>Find Your Sienna Ridge Dream Home</CardTitle>
        <CardDescription>
          Get expert guidance from Dr. Janet Duffy, your premier Sienna Ridge buyer agent
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
                placeholder="(702) 555-0123"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="interestLevel">Interest Level</Label>
              <Select value={formData.interestLevel} onValueChange={(value) => setFormData({ ...formData, interestLevel: value })}>
                <SelectTrigger>
                  <SelectValue placeholder="Select your interest level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="just-looking">Just Looking</SelectItem>
                  <SelectItem value="serious-buyer">Serious Buyer</SelectItem>
                  <SelectItem value="ready-to-buy">Ready to Buy</SelectItem>
                  <SelectItem value="investor">Investor</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="timeline">Timeline</Label>
              <Select value={formData.timeline} onValueChange={(value) => setFormData({ ...formData, timeline: value })}>
                <SelectTrigger>
                  <SelectValue placeholder="When are you looking to buy?" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="immediately">Immediately</SelectItem>
                  <SelectItem value="1-3-months">1-3 Months</SelectItem>
                  <SelectItem value="3-6-months">3-6 Months</SelectItem>
                  <SelectItem value="6-12-months">6-12 Months</SelectItem>
                  <SelectItem value="planning-ahead">Planning Ahead</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="budget">Budget Range</Label>
              <Select value={formData.budget} onValueChange={(value) => setFormData({ ...formData, budget: value })}>
                <SelectTrigger>
                  <SelectValue placeholder="Select your budget range" />
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
            Get Expert Guidance from Dr. Janet Duffy
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
