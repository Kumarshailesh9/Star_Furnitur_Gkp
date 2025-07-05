import Link from "next/link"
import Image from "next/image"
import { ChevronRight, Truck, Shield, Clock, ThumbsUp, ArrowRight, Sparkles, MessageCircle, Check } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

import ProductCard from "@/components/product-card"
import TestimonialCard from "@/components/testimonial-card"
import CategoryCard from "@/components/category-card"
import { AnimatedSection } from "@/components/animated-section"
import { PremiumBedsShowcase } from "@/components/premium-beds-showcase"
import MansoonOffer from '@/components/MonsoonOffer'
import { USP } from "@/components/Usp"

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative">
  <div className="relative h-[350px] sm:h-[400px] md:h-[500px] lg:h-[650px] w-full overflow-hidden">
    <Image
      src="/elegant-modern-living.png"
      alt="Premium Furniture Collection"
      fill
      className="object-cover"
      priority
    />
    {/* Better gradient overlay */}
    <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/20" />

    {/* Content */}
    <div className="absolute inset-0 flex flex-col justify-center items-start px-4 sm:px-8 md:px-16 lg:px-24 max-w-7xl mx-auto">
      <AnimatedSection delay={0.2} direction="left">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-3 sm:mb-5 drop-shadow-lg">
          Comfort Meets Elegance
        </h1>
      </AnimatedSection>

      <AnimatedSection delay={0.4} direction="left">
        <p className="text-base sm:text-lg md:text-xl text-white mb-6 sm:mb-8 md:mb-10 max-w-2xl drop-shadow-md">
          Discover Premium Furniture at GKP Furniture — Where Quality Craftsmanship Meets Affordable Luxury.
        </p>
      </AnimatedSection>

      <AnimatedSection delay={0.6} direction="up">
        <div className="flex flex-col sm:flex-row gap-4">
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 transition-all duration-300 shadow-xl"
          >
            Shop Now
          </Button>
          <Button
            size="lg"
            variant="default"
            className="bg-yellow-500 text-black hover:bg-yellow-400 border-yellow-500 shadow-xl font-bold transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            Book Now
          </Button>
        </div>
      </AnimatedSection>
    </div>
  </div>
</section>


      {/* Premium Monsoon Sale Bundle Offer - Futuristic Version */}
        <MansoonOffer/>



      {/* Categories Section */}
      <AnimatedSection className="py-10 sm:py-14 md:py-16 lg:py-20 px-4 md:px-6 max-w-7xl mx-auto">
  <div className="text-center mb-8 md:mb-12">
    <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-3 text-gray-800 dark:text-white">
      <span className="bg-gradient-to-r from-yellow-400 to-pink-500 bg-clip-text text-transparent">
        Explore Our Collections
      </span>
    </h2>
    <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
      Discover a wide range of premium furniture collections designed for comfort, style, and lasting durability.
    </p>
  </div>

  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
    {[
      { title: "Beds & Mattresses", image: "/minimalist-platform-bed.png", href: "/category/beds", delay: 0.1 },
      { title: "Sofas & Sectionals", image: "/luxurious-living-room-sofa.png", href: "/category/sofas", delay: 0.2 },
      { title: "Dining Sets", image: "/rustic-dining-set.png", href: "/category/dining", delay: 0.3 },
      { title: "Storage Solutions", image: "/minimalist-wooden-wardrobe.png", href: "/category/storage", delay: 0.4 },
    ].map((item) => (
      <AnimatedSection
        key={item.title}
        delay={item.delay}
        direction="up"
        className="h-full"
      >
        <div className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
          <CategoryCard {...item} />
        </div>
      </AnimatedSection>
    ))}
  </div>
</AnimatedSection>

      {/* Premium Beds Showcase Section */}
      <PremiumBedsShowcase />

      {/* Testimonials Section */}
      <AnimatedSection className="py-8 sm:py-10 md:py-12 lg:py-16 px-4 md:px-6 max-w-7xl mx-auto">
        <div className="text-center mb-6 md:mb-10">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 md:mb-4">What Our Customers Say</h2>
          <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our happy customers have to say about their GKP Furniture
            experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          <AnimatedSection delay={0.1} direction="up">
            <TestimonialCard
              name="Priya Sharma"
              location="Delhi"
              image="/serene-indian-woman.png"
              rating={5}
              testimonial="The quality of my new sofa is exceptional. The customer service was also top-notch from ordering to delivery. Highly recommend GKP Furniture!"
            />
          </AnimatedSection>
          <AnimatedSection delay={0.2} direction="up">
            <TestimonialCard
              name="Rahul Verma"
              location="Lucknow"
              image="/thoughtful-indian-man.png"
              rating={4}
              testimonial="We purchased a dining set last month and couldn't be happier. The craftsmanship is excellent and it looks exactly like the pictures. Great value for money."
            />
          </AnimatedSection>
          <AnimatedSection delay={0.3} direction="up">
            <TestimonialCard
              name="Ananya Patel"
              location="Varanasi"
              image="/serene-indian-woman.png"
              rating={5}
              testimonial="The bed we ordered is not only beautiful but extremely comfortable. The delivery was prompt and the installation team was professional. Will definitely shop again!"
            />
          </AnimatedSection>
        </div>

        {/* Trust Badges Section */}
      <section className="py-6 sm:py-8 md:py-10 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-0">
            <AnimatedSection delay={0.1} direction="up">
              <div className="flex flex-col items-center text-center p-2 sm:p-3 md:p-4">
                <Shield className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 mb-2 md:mb-3 text-primary" />
                <h3 className="font-medium text-xs sm:text-sm">Secure Payments</h3>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2} direction="up">
              <div className="flex flex-col items-center text-center p-2 sm:p-3 md:p-4">
                <Truck className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:h-8 mb-2 md:mb-3 text-primary" />
                <h3 className="font-medium text-xs sm:text-sm">Free Delivery</h3>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.4} direction="up">
              <div className="flex flex-col items-center text-center p-2 sm:p-3 md:p-4">
                <Badge className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:h-8 mb-2 md:mb-3 text-primary" />
                <h3 className="font-medium text-xs sm:text-sm">Quality Assurance</h3>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
      </AnimatedSection>
      <USP/>
    </>
  )
}
