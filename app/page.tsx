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
import { ClaimOffer } from "@/components/ClaimOffer"


export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative">
        <div className="relative h-[350px] sm:h-[400px] md:h-[500px] lg:h-[600px] w-full overflow-hidden">
          <Image
            src="/elegant-modern-living.png"
            alt="Premium Furniture Collection"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 flex flex-col justify-center items-start p-4 sm:p-6 md:p-12 lg:p-24 max-w-7xl mx-auto">
            <AnimatedSection delay={0.2} direction="left">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 sm:mb-4">
                Comfort Meets Elegance
              </h1>
            </AnimatedSection>
            <AnimatedSection delay={0.4} direction="left">
              <p className="text-base sm:text-lg md:text-xl text-white mb-4 sm:mb-6 md:mb-8 max-w-xl">
                Discover Premium Furniture at GKP Furniture – Where Quality Craftsmanship Meets Affordable Luxury
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.6} direction="up">
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Button
                  size="sm"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 transition-colors text-sm md:text-base md:h-11"
                >
                  Shop Now
                </Button>
                <Button
                  size="sm"
                  variant="default"
                  className="bg-yellow-500 text-black hover:bg-yellow-400 border-yellow-500 shadow-lg text-sm md:text-base md:h-11 font-bold animate-pulse transition-all duration-300 scale-105 hover:scale-110"
                >
                  Book Now
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Premium Monsoon Sale Bundle Offer - Futuristic Version */}
      <section className="relative py-10 overflow-hidden">
        {/* Futuristic background with gradient and effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-800 via-teal-700 to-cyan-900 z-0">
          {/* Animated particles */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(30)].map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full animate-float-particle"
                style={{
                  width: `${Math.random() * 10 + 2}px`,
                  height: `${Math.random() * 10 + 2}px`,
                  background: `rgba(255, 255, 255, ${Math.random() * 0.5 + 0.1})`,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDuration: `${Math.random() * 10 + 5}s`,
                  animationDelay: `${Math.random() * 5}s`,
                }}
              />
            ))}
          </div>

          {/* Animated rain effect */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-10 bg-white/20 rounded-full animate-falling-rain"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `-${Math.random() * 20}%`,
                  animationDuration: `${0.5 + Math.random() * 1.5}s`,
                  animationDelay: `${Math.random() * 2}s`,
                }}
              />
            ))}
          </div>

          {/* Glowing orbs */}
          <div className="absolute -left-20 -top-20 w-64 h-64 bg-emerald-500/30 rounded-full blur-3xl"></div>
          <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-cyan-500/30 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">
          {/* Header with 3D effect */}
          <div className="flex flex-col items-center text-center mb-8">
            <div className="relative">
              <Badge className="bg-yellow-500 text-black hover:bg-yellow-500 px-4 py-1.5 text-sm mb-3 rounded-full font-bold shadow-glow">
                <Sparkles className="w-4 h-4 mr-1 inline-block" /> LIMITED TIME OFFER
              </Badge>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 text-shadow-glow">
              Premium Monsoon Bundle Sale
            </h2>
            <p className="text-blue-100 text-sm sm:text-base md:text-lg max-w-2xl">
              Complete Home Package - 9 Essential Items at One Incredible Price!
            </p>
          </div>

          {/* Main content card with glassmorphism */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 sm:p-6 md:p-8 mb-8 border border-white/20 shadow-glow">
            {/* Countdown timer */}
            <div className="flex justify-center mb-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl px-3 sm:px-6 py-2 sm:py-3 inline-flex items-center gap-2 sm:gap-4">
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-bold text-white">05</div>
                  <div className="text-[10px] sm:text-xs text-blue-200">Days</div>
                </div>
                <div className="text-white font-bold">:</div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-bold text-white">12</div>
                  <div className="text-[10px] sm:text-xs text-blue-200">Hours</div>
                </div>
                <div className="text-white font-bold">:</div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-bold text-white">45</div>
                  <div className="text-[10px] sm:text-xs text-blue-200">Minutes</div>
                </div>
              </div>
            </div>

            {/* Products grid with hover effects */}
            <div className="grid grid-cols-3 md:grid-cols-9 gap-2 sm:gap-3 md:gap-4 mb-6 sm:mb-8">
              {[
                { name: "Double Bed", desc: "6×6 Size", icon: "/cozy-double-bed.png" },
                { name: "Sofa Set", desc: "5 Seater", icon: "/comfortable-living-room-set.png" },
                { name: "Center Table", desc: "Premium", icon: "/ornate-center-table.png" },
                { name: "Dressing Table", desc: "With Mirror", icon: "/ornate-dressing-table.png" },
                { name: "Almirah", desc: "Spacious", icon: "/classic-wooden-wardrobe.png" },
                { name: "Cooler", desc: "Energy Saving", icon: "/placeholder-et8xm.png" },
                { name: "Refrigerator", desc: "Double Door", icon: "/modern-refrigerator.png" },
                { name: "Washing Machine", desc: "Fully Auto", icon: "/modern-washing-machine.png" },
                { name: "Mattress", desc: "Orthopedic", icon: "/comfortable-mattress.png" },
              ].map((item, index) => (
                <div key={index} className="group">
                  <div className="flex flex-col items-center text-center transform transition-all duration-300 group-hover:scale-105">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-20 md:h-20 bg-white/20 group-hover:bg-white/30 rounded-2xl flex items-center justify-center mb-1 sm:mb-2 transition-all duration-300 group-hover:shadow-glow-sm">
                      <Image
                        src={item.icon || "/placeholder.svg"}
                        width={50}
                        height={50}
                        alt={item.name}
                        className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 transition-all duration-300 group-hover:scale-110"
                      />
                    </div>
                    <span className="text-white text-[10px] sm:text-xs md:text-sm font-medium">{item.name}</span>
                    <span className="text-blue-200 text-[8px] sm:text-[10px] md:text-xs">{item.desc}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Features list */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 mb-6 sm:mb-8">
              {[
                "Free Delivery & Installation",
                "5-Year Warranty",
                "EMI Options Available",
                "Premium Quality Products",
              ].map((feature, index) => (
                <div key={index} className="flex items-center bg-white/10 rounded-lg px-2 sm:px-3 py-1.5 sm:py-2">
                  <Check className="h-3 w-3 sm:h-4 sm:w-4 text-green-400 mr-1 sm:mr-2 flex-shrink-0" />
                  <span className="text-white text-[10px] sm:text-xs">{feature}</span>
                </div>
              ))}
            </div>

            {/* Price and CTA section - IMPROVED MOBILE RESPONSIVENESS */}
            <div className="flex flex-col bg-white/10 rounded-xl p-4 sm:p-5 border border-white/10">
              {/* Price section */}
              <div className="flex flex-col items-center mb-4 sm:mb-5">
                <div className="flex items-center">
                  <span className="text-white text-xl sm:text-2xl md:text-3xl font-bold">₹96,428</span>
                  <span className="text-gray-300 text-sm md:text-base line-through ml-2">₹1,28,570</span>
                  <Badge className="bg-yellow-500 text-black ml-2 px-2 shadow-glow-sm">25% OFF</Badge>
                </div>
                <p className="text-blue-100 text-xs md:text-sm mt-1">Complete 9-item package - Limited time offer!</p>
              </div>

              {/* Buttons - IMPROVED FOR MOBILE  */}
               {/* <div className="flex flex-col sm:flex-row w-full gap-3 sm:gap-4">
                 <Button className="w-full sm:flex-1 bg-green-500 hover:bg-green-400 text-white font-bold px-3 sm:px-5 py-2.5 sm:py-3 text-sm rounded-full flex items-center justify-center gap-2 shadow-glow-sm transition-all duration-300 hover:scale-105">
                  <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                  <span className="whitespace-nowrap">Order on WhatsApp</span>
                </Button> 
                <Button className="w-full sm:flex-1 bg-yellow-500 hover:bg-yellow-400 text-black font-bold px-3 sm:px-5 py-2.5 sm:py-3 text-sm rounded-full flex items-center justify-center gap-2 shadow-glow-sm transition-all duration-300 hover:scale-105">
                  <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                  <span className="whitespace-nowrap">Claim This Offer</span>
                </Button>
                
              </div> */}
              <div className="flex flex-col sm:flex-row w-full gap-3 sm:gap-4">
              <ClaimOffer />
              </div>

            </div>
          </div>

          {/* Testimonial snippet */}
          <div className="flex justify-center mb-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-full px-3 sm:px-4 py-1.5 sm:py-2 inline-flex items-center gap-2 border border-white/10">
              <div className="flex -space-x-2">
                <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-blue-500 flex items-center justify-center text-[10px] sm:text-xs text-white">
                  S
                </div>
                <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-green-500 flex items-center justify-center text-[10px] sm:text-xs text-white">
                  R
                </div>
                <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-yellow-500 flex items-center justify-center text-[10px] sm:text-xs text-white">
                  A
                </div>
              </div>
              <p className="text-white text-[10px] sm:text-xs">
                <span className="font-bold">120+ customers</span> purchased this bundle this month!
              </p>
            </div>
          </div>

          {/* Fine print */}
          <div className="flex justify-center">
            <p className="text-blue-100 text-[8px] sm:text-[10px] md:text-xs text-center max-w-md">
              *Offer valid until stocks last. Free delivery and installation within city limits. 5-year warranty on
              furniture items. EMI options available.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <AnimatedSection className="py-8 sm:py-10 md:py-12 lg:py-16 px-4 md:px-6 max-w-7xl mx-auto">
        <div className="text-center mb-6 md:mb-10">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 md:mb-4">Explore Our Collections</h2>
          <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
            Explore our wide range of furniture collections designed for comfort, style, and durability
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
          <AnimatedSection delay={0.1} direction="up" className="h-full">
            <CategoryCard title="Beds & Mattresses" image="/minimalist-platform-bed.png" href="/category/beds" />
          </AnimatedSection>
          <AnimatedSection delay={0.2} direction="up" className="h-full">
            <CategoryCard title="Sofas & Sectionals" image="/luxurious-living-room-sofa.png" href="/category/sofas" />
          </AnimatedSection>
          <AnimatedSection delay={0.3} direction="up" className="h-full">
            <CategoryCard title="Dining Sets" image="/rustic-dining-set.png" href="/category/dining" />
          </AnimatedSection>
          <AnimatedSection delay={0.4} direction="up" className="h-full">
            <CategoryCard title="Storage Solutions" image="/minimalist-wooden-wardrobe.png" href="/category/storage" />
          </AnimatedSection>
        </div>
      </AnimatedSection>

      {/* Premium Beds Showcase Section */}
      <PremiumBedsShowcase />

      {/* USP Section */}
      <section className="py-8 sm:py-10 md:py-12 bg-muted">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <AnimatedSection>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-6 md:mb-10">
              Why Choose GKP Furniture?
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
            <AnimatedSection delay={0.1} direction="up">
              <div className="bg-background p-3 sm:p-4 md:p-6 rounded-lg text-center flex flex-col items-center hover:shadow-md transition-all hover:-translate-y-1">
                <div className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 rounded-full bg-primary/10 flex items-center justify-center mb-2 sm:mb-3 md:mb-4">
                  <ThumbsUp className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-sm sm:text-base md:text-lg mb-1 md:mb-2">Locally Crafted</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Handcrafted with pride in Gorakhpur by skilled artisans
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2} direction="up">
              <div className="bg-background p-3 sm:p-4 md:p-6 rounded-lg text-center flex flex-col items-center hover:shadow-md transition-all hover:-translate-y-1">
                <div className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 rounded-full bg-primary/10 flex items-center justify-center mb-2 sm:mb-3 md:mb-4">
                  <Shield className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-sm sm:text-base md:text-lg mb-1 md:mb-2">Durable Materials</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Premium quality materials with ergonomic designs
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3} direction="up">
              <div className="bg-background p-3 sm:p-4 md:p-6 rounded-lg text-center flex flex-col items-center hover:shadow-md transition-all hover:-translate-y-1">
                <div className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 rounded-full bg-primary/10 flex items-center justify-center mb-2 sm:mb-3 md:mb-4">
                  <Truck className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-sm sm:text-base md:text-lg mb-1 md:mb-2">Easy Delivery</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Hassle-free delivery and professional installation
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.4} direction="up">
              <div className="bg-background p-3 sm:p-4 md:p-6 rounded-lg text-center flex flex-col items-center hover:shadow-md transition-all hover:-translate-y-1">
                <div className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 rounded-full bg-primary/10 flex items-center justify-center mb-2 sm:mb-3 md:mb-4">
                  <Clock className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-sm sm:text-base md:text-lg mb-1 md:mb-2">Affordable Luxury</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">Premium quality at competitive prices</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Best Sellers Section */}
      <AnimatedSection className="py-8 sm:py-10 md:py-12 lg:py-16 px-4 md:px-6 max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-4 sm:mb-6 md:mb-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">Best Sellers</h2>
          <Link href="/best-sellers" className="text-primary flex items-center hover:underline text-xs sm:text-sm">
            View All <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4 ml-1" />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
          <ProductCard
            name="Comfort Plus Queen Bed"
            price={24999}
            image="/minimalist-wood-bed.png"
            rating={4.8}
            reviewCount={124}
            href="/product/comfort-plus-bed"
          />
          <ProductCard
            name="Luxe 3-Seater Sofa"
            price={32999}
            image="/refined-linen-sofa.png"
            rating={4.7}
            reviewCount={98}
            href="/product/luxe-sofa"
          />
          <ProductCard
            name="Classic Dining Set (6 Seater)"
            price={28999}
            image="/rustic-wood-dining-set.png"
            rating={4.9}
            reviewCount={75}
            href="/product/classic-dining-set"
            discount={10}
          />
        </div>
      </AnimatedSection>

      {/* New Arrivals Section */}
      <AnimatedSection className="py-8 sm:py-10 md:py-12 lg:py-16 px-4 md:px-6 max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-4 sm:mb-6 md:mb-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">New Arrivals</h2>
          <Link href="/new-arrivals" className="text-primary flex items-center hover:underline text-xs sm:text-sm">
            View All <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4 ml-1" />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
          <ProductCard
            name="Modular Sofa Combination"
            price={45999}
            image="/modular-sectional-sofa.png"
            rating={4.8}
            reviewCount={86}
            href="/product/sofa-combined"
            isNew={true}
          />
          
         
          <ProductCard
            name="Executive Office Table"
            price={18999}
            image="/executive-office-desk.png"
            rating={4.7}
            reviewCount={68}
            href="/product/office-table"
            isNew={true}
          />
        </div>
      </AnimatedSection>

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
      </AnimatedSection>
    </>
  )
}
