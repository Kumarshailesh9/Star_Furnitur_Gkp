"use client"

import Link from "next/link"
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Instagram,
  Twitter,
  ExternalLink,
} from "lucide-react"
import { Button } from "@/components/ui/button"


export function Footer() {
  const storeLocation = {
    address:
      "Q9V9+2W6, Gorakhnath Rd, Ghosipurwa, Vistar Colony, Gorakhpur, Uttar Pradesh 273007",
    latitude: 26.7605,
    longitude: 83.3731,
  }

  const getDirections = () => {
    const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${storeLocation.latitude},${storeLocation.longitude}`
    window.open(directionsUrl, "_blank")
  }

  return (
    <footer className="mt-auto">
      {/* 4-Part Footer */}
      <div className="bg-gray-900 text-white">
        <div className="container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* 1️⃣ Map */}
          <div className="w-full h-[250px] md:h-[300px] lg:h-[300px] relative rounded-lg overflow-hidden shadow-md">
            <iframe
              src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3636.0801726621894!2d83.36074518945225!3d26.78679588699488!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399145b394285a53%3A0x3c00785df2251bd5!2sGorakhnath%20Rd%2C%20Gorakhpur%2C%20Uttar%20Pradesh!5e1!3m2!1sen!2sin!4v1752666049822!5m2!1sen!2sin`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0"
              title="GKP Furniture Location"
            ></iframe>
          </div>

          {/* 2️⃣ Star Furniture */}
          <div>
            <h3 className="text-xl font-bold mb-4">Star Furniture</h3>
            <p className="text-gray-400 mb-4">
              Crafting premium furniture that transforms houses into homes since 1995.
            </p>
            <div className="flex space-x-4 mb-4">
              <Link href="#" className="text-gray-400 hover:text-white">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Twitter className="h-5 w-5" />
              </Link>
            </div>
            <Button onClick={getDirections} className="w-fit">
              Get Directions <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </div>

          {/* 3️⃣ Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-400 hover:text-white">Home</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-white">About Us</Link></li>
              <li><Link href="/category/beds" className="text-gray-400 hover:text-white">Beds</Link></li>
              <li><Link href="/category/sofas" className="text-gray-400 hover:text-white">Sofas</Link></li>
              <li><Link href="/category/dining" className="text-gray-400 hover:text-white">Dining Sets</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
            </ul>
          </div>

          {/* 4️⃣ Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex">
                <MapPin className="h-5 w-5 mr-2 text-primary" />
                {storeLocation.address}
              </li>
              <li className="flex">
                <Phone className="h-5 w-5 mr-2 text-primary" />
                +91 7651847029
              </li>
              <li className="flex">
                <Mail className="h-5 w-5 mr-2 text-primary" />
                Info@starfurnitureandelectronics.in
              </li>
              <li className="flex">
                <Clock className="h-5 w-5 mr-2 text-primary" />
                Mon-Sat: 10AM-8PM, Sun: 11AM-6PM
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-6 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Star Furniture. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
