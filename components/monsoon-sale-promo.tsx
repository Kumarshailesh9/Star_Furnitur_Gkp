"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Sparkles, ArrowRight, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

import { RainAnimation } from "./rain-animation"
import { FloatingParticles } from "./floating-particles"

export function MonsoonSalePromo() {
  const [isMounted, setIsMounted] = useState(false)

  // Set end date to August 20th of current year
  const currentYear = new Date().getFullYear()
  const saleEndDate = new Date(currentYear, 6, 25, 23, 59, 59) // Month is 0-indexed, so 7 is August

  useEffect(() => {
    setIsMounted(true)
  }, [])

  // Only render countdown on client to avoid hydration mismatch
  if (!isMounted) {
    return null
  }

  return (
    <section className="relative py-12 sm:py-16 md:py-20 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-teal-800 to-emerald-900 z-0">
        {/* Animated elements */}
        <FloatingParticles count={30} />
        <RainAnimation count={20} />

        {/* Glowing orbs */}
        <div className="absolute -left-20 -top-20 w-64 h-64 bg-blue-500/30 rounded-full blur-3xl"></div>
        <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-emerald-500/30 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-10 sm:mb-12">
          <Badge className="bg-yellow-500 text-black hover:bg-yellow-500 px-4 py-1.5 text-sm mb-4 rounded-full font-bold shadow-lg animate-pulse">
            <Sparkles className="w-4 h-4 mr-1 inline-block" /> LIMITED TIME OFFER
          </Badge>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight">
            Premium Monsoon Bundle Sale
          </h2>

          <p className="text-blue-100 text-sm sm:text-base md:text-lg max-w-2xl">
            Complete Home Package - 9 Essential Items at One Incredible Price!
          </p>
        </div>

        {/* Countdown timer */}
        

        {/* Products grid */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 sm:p-8 mb-10 border border-white/20 shadow-xl">
          <div className="grid grid-cols-3 md:grid-cols-9 gap-3 sm:gap-4 md:gap-6 mb-8">
            {[
              { name: "Double Bed", desc: "6×6 Size", icon: "/bed2.jpeg" },
              { name: "Sofa Set", desc: "5 Seater", icon: "/comfortable-living-room-set.png" },
              { name: "Center Table", desc: "Premium", icon: "/ornate-center-table.png" },
              { name: "Dressing Table", desc: "With Mirror", icon: "/ornate-dressing-table.png" },
              { name: "Almirah", desc: "Spacious", icon: "/classic-wooden-wardrobe.png" },
              { name: "Refrigerator", desc: "Double Door", icon: "/modern-refrigerator.png" },
              { name: "Washing Machine", desc: "Fully Auto", icon: "/modern-washing-machine.png" },
              { name: "Mattress", desc: "Orthopedic", icon: "/comfortable-mattress.png" },
              { name: "TV Unit", desc: "Modern", icon: "/modern-wooden-tv-unit.png" },
            ].map((item, index) => (
              <div key={index} className="group">
                <div className="flex flex-col items-center text-center transform transition-all duration-300 group-hover:scale-105">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-white/20 group-hover:bg-white/30 rounded-xl flex items-center justify-center mb-2 transition-all duration-300 group-hover:shadow-lg">
                    <Image
                      src={item.icon || "/placeholder.svg"}
                      width={60}
                      height={60}
                      alt={item.name}
                      className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 transition-all duration-300 group-hover:scale-110"
                    />
                  </div>
                  <span className="text-white text-xs sm:text-sm font-medium">{item.name}</span>
                  <span className="text-blue-200 text-[10px] sm:text-xs">{item.desc}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Features list */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
            {[
              "Free Delivery & Installation",
              "5-Year Warranty",
              "EMI Options Available",
              "Premium Quality Products",
            ].map((feature, index) => (
              <div key={index} className="flex items-center bg-white/10 rounded-lg px-3 py-2">
                <Check className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                <span className="text-white text-xs sm:text-sm">{feature}</span>
              </div>
            ))}
          </div>

          {/* Price and CTA */}
          <div className="flex flex-col bg-white/10 rounded-xl p-6 border border-white/10">
            <div className="flex flex-col items-center mb-6">
              <div className="flex items-center">
                <span className="text-white text-2xl sm:text-3xl md:text-4xl font-bold">₹96,427</span>
                <span className="text-gray-300 text-base md:text-lg line-through ml-2">₹1,28,570</span>
                <Badge className="bg-yellow-500 text-black ml-2 px-2 shadow-lg">25% OFF</Badge>
              </div>
              <p className="text-blue-100 text-sm md:text-base mt-1">Complete 9-item package - Limited time offer!</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 w-full">
              {/* <Button className="w-full sm:flex-1 bg-emerald-500 hover:bg-emerald-400 text-white font-bold py-3 text-base rounded-full flex items-center justify-center gap-2 shadow-lg transition-all duration-300 hover:scale-105">
                <ArrowRight className="h-5 w-5" />
                <span>Shop Now</span>
              </Button> */}
              <Button className="w-full sm:flex-1 bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-3 text-base rounded-full flex items-center justify-center gap-2 shadow-lg transition-all duration-300 hover:scale-105">
                <Sparkles className="h-5 w-5" />
                <span>Claim This Offer</span>
              </Button>
            </div>
          </div>
        </div>

        {/* Social proof */}
        <div className="flex justify-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 inline-flex items-center gap-2 border border-white/10">
            <div className="flex -space-x-2">
              <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-xs text-white">
                S
              </div>
              <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center text-xs text-white">
                R
              </div>
              <div className="w-6 h-6 rounded-full bg-yellow-500 flex items-center justify-center text-xs text-white">
                A
              </div>
            </div>
            <p className="text-white text-xs">
              <span className="font-bold">120+ customers</span> purchased this bundle this month!
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

