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
  Truck,
  Tag,
  Umbrella,
} from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  // GKP Furniture location coordinates
  const storeLocation = {
    address: "Q9VC+986, near ocean 11 resort, Nakaha no 1, Ramjanki Nagar, Gorakhpur, Uttar Pradesh 273004, India",
    latitude: 26.7605,
    longitude: 83.3731,
  }

  // Function to open directions in user's default map app
  const getDirections = () => {
    // Create a URL that works with both Google Maps and Apple Maps
    const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${storeLocation.latitude},${storeLocation.longitude}&destination_place_id=GKP+Furniture`
    window.open(directionsUrl, "_blank")
  }

  return (
    <footer className="mt-auto">
      {/* Promotional Banner - Improved */}
      <div className="bg-gradient-to-r from-purple-700 to-pink-600 text-white py-5 sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center mb-3 md:mb-0">
              <Truck className="h-10 w-10 mr-3 animate-pulse" />
              <div>
                <h3 className="text-xl md:text-2xl font-bold">
                  <span className="text-2xl md:text-3xl">15 km Radius</span>{" "}
                  <span className="bg-white text-purple-700 px-3 py-1 rounded-md font-extrabold">DELIVERY FREE</span>
                </h3>
                <p className="text-white font-medium text-lg">
                  <span className="bg-purple-800 px-2 py-0.5 rounded">Biggest Offer</span> for Gorakhpur People!
                </p>
              </div>
            </div>
            <div className="flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg">
              <Tag className="h-6 w-6 mr-2 text-pink-200" />
              <p className="text-lg font-semibold">
                All Products are{" "}
                <span className="underline decoration-2 decoration-pink-200 font-bold">LUXURY AND PREMIUM</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Premium Monsoon Bundle Sale - Updated */}
      <div className="bg-gradient-to-r from-purple-700 to-pink-600 text-white py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center text-center mb-4">
            <Umbrella className="h-10 w-10 mb-2 animate-bounce" />
            <h3 className="text-2xl md:text-3xl font-bold">Premium Monsoon Bundle Sale</h3>
            <p className="text-white/90 text-lg">Limited time offers on exclusive furniture collections!</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
            <div className="bg-white/20 backdrop-blur-sm px-5 py-3 rounded-lg transform hover:scale-105 transition-transform">
              <p className="font-bold text-xl">Bedroom Set</p>
              <p className="text-sm mb-1">Complete room solution</p>
              <p className="text-lg font-extrabold bg-yellow-500 text-purple-900 inline-block px-2 rounded">
                Save up to 25%
              </p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm px-5 py-3 rounded-lg transform hover:scale-105 transition-transform">
              <p className="font-bold text-xl">Living Room</p>
              <p className="text-sm mb-1">Sofa + Table combos</p>
              <p className="text-lg font-extrabold bg-yellow-500 text-purple-900 inline-block px-2 rounded">
                Save up to 20%
              </p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm px-5 py-3 rounded-lg transform hover:scale-105 transition-transform">
              <p className="font-bold text-xl">Dining Sets</p>
              <p className="text-sm mb-1">Table + Chairs + Sideboard</p>
              <p className="text-lg font-extrabold bg-yellow-500 text-purple-900 inline-block px-2 rounded">
                Save up to 15%
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Medium-sized Map Section */}
      <div className="w-full relative bg-gray-100">
        <div className="container mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold mb-4 text-center">Visit Our Showroom</h2>

          {/* Map Container */}
          <div className="w-full h-[300px] md:h-[350px] relative rounded-lg overflow-hidden shadow-md">
            <iframe
              src={`https://www.google.com/maps/embed/v1/place?q=${storeLocation.latitude},${storeLocation.longitude}&zoom=16&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0"
              title="GKP Furniture Location"
              aria-label="Map showing GKP Furniture location"
            ></iframe>

            {/* Map Overlay with Store Info */}
            <div className="absolute top-4 left-4 max-w-xs bg-white/95 dark:bg-gray-900/95 p-4 rounded-lg shadow-lg backdrop-blur-sm z-10 hidden md:block">
              <h3 className="text-lg font-bold mb-2">GKP Furniture</h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-start">
                  <MapPin className="h-4 w-4 mr-2 mt-1 text-primary flex-shrink-0" />
                  <p>{storeLocation.address}</p>
                </div>
                <div className="flex items-center">
                  <Phone className="h-4 w-4 mr-2 text-primary flex-shrink-0" />
                  <p>+91 9876543210</p>
                </div>
              </div>
              <Button onClick={getDirections} className="mt-3 w-full text-sm" size="sm">
                Get Directions
                <ExternalLink className="ml-1 h-3 w-3" />
              </Button>
            </div>
          </div>

          {/* Mobile Get Directions Button */}
          <div className="mt-4 flex justify-center md:hidden">
            <Button onClick={getDirections} className="shadow-md bg-primary text-white hover:bg-primary/90">
              Get Directions
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Footer Content */}
      <div className="bg-gray-900 text-white">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">GKP Furniture</h3>
              <p className="text-gray-400 mb-4">
                Crafting premium furniture that transforms houses into homes since 1995.
              </p>
              <div className="flex space-x-4">
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Facebook className="h-5 w-5" />
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </Link>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/category/beds" className="text-gray-400 hover:text-white transition-colors">
                    Beds
                  </Link>
                </li>
                <li>
                  <Link href="/category/sofas" className="text-gray-400 hover:text-white transition-colors">
                    Sofas
                  </Link>
                </li>
                <li>
                  <Link href="/category/dining" className="text-gray-400 hover:text-white transition-colors">
                    Dining Sets
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Contact Info</h3>
              <ul className="space-y-3">
                <li className="flex">
                  <MapPin className="h-5 w-5 mr-2 text-primary flex-shrink-0" />
                  <span className="text-gray-400">
                    Q9VC+986, near ocean 11 resort, Nakaha no 1, Ramjanki Nagar, Gorakhpur, UP 273004
                  </span>
                </li>
                <li className="flex">
                  <Phone className="h-5 w-5 mr-2 text-primary flex-shrink-0" />
                  <span className="text-gray-400">+91 9876543210</span>
                </li>
                <li className="flex">
                  <Mail className="h-5 w-5 mr-2 text-primary flex-shrink-0" />
                  <span className="text-gray-400">info@gkpfurniture.com</span>
                </li>
                <li className="flex">
                  <Clock className="h-5 w-5 mr-2 text-primary flex-shrink-0" />
                  <span className="text-gray-400">Mon-Sat: 10AM-8PM, Sun: 11AM-6PM</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} GKP Furniture. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
