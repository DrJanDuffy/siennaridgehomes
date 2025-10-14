import Link from 'next/link'
import { Phone, Mail, MapPin, Home, User, Search } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Home className="h-6 w-6 text-blue-400" />
              <h3 className="text-lg font-semibold">Sienna Ridge Homes</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Your premier Southwest Las Vegas real estate specialist. Expert guidance for families, investors, and first-time buyers.
            </p>
            <div className="flex items-center space-x-2 text-gray-300">
              <MapPin className="h-4 w-4" />
              <span className="text-sm">Spring Valley & Southwest Las Vegas</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/listings" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Available Listings
                </Link>
              </li>
              <li>
                <Link href="/neighborhoods/89117" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Spring Valley (89117)
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-blue-400 transition-colors">
                  About Dr. Duffy
                </Link>
              </li>
              <li>
                <a 
                  href="http://drjanduffy.realscout.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-blue-400 transition-colors flex items-center"
                >
                  <Search className="h-4 w-4 mr-1" />
                  Search Properties
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-blue-400" />
                <a href="tel:+17029033336" className="text-gray-300 hover:text-blue-400 transition-colors">
                  (702) 903-3336
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-blue-400" />
                <a href="mailto:DrJanSells@SiennaRidgeHomes.com" className="text-gray-300 hover:text-blue-400 transition-colors">
                  DrJanSells@SiennaRidgeHomes.com
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-blue-400 mt-1" />
                <div className="text-gray-300">
                  <p className="text-sm">8370 Caldera Hills Avenue</p>
                  <p className="text-sm">Las Vegas, NV 89147</p>
                </div>
              </div>
            </div>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Service Areas</h3>
            <div className="space-y-2">
              <p className="text-gray-300">Southwest Las Vegas</p>
              <p className="text-gray-300">Spring Valley</p>
              <div className="space-y-1">
                <p className="text-sm text-gray-400">Zip Codes:</p>
                <p className="text-sm text-gray-300">89117, 89147, 89148</p>
              </div>
              <p className="text-sm text-gray-300 mt-3">
                Specializing in established homes and newer developments with strong investment potential.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Sienna Ridge Homes. All rights reserved. Dr. Jan Duffy - Licensed Real Estate Agent.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
                Terms of Service
              </Link>
              <Link href="/sitemap" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
