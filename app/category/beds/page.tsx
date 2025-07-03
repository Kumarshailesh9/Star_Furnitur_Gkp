import type { Metadata } from "next"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

import { getProductsByCategory } from "@/lib/products"
import ProductCard from "@/components/product-card"
import PremiumProductCard from "@/components/premium-product-card"
import { AnimatedSection } from "@/components/animated-section"

export const metadata: Metadata = {
  title: "Beds & Mattresses | GKP Furniture",
  description:
    "Explore our wide range of beds and mattresses, from comfortable basics to premium luxury options with 7-year warranty.",
}

export default function BedsPage() {
  const products = getProductsByCategory("beds")

  // Separate premium and regular products
  const premiumProducts = products.filter((product) => product.isPremium)
  const regularProducts = products.filter((product) => !product.isPremium)

  return (
    <div className="container px-4 py-8 mx-auto">
      <div className="flex items-center gap-1 text-sm text-muted-foreground mb-6">
        <Link href="/" className="hover:text-foreground">
          Home
        </Link>
        <ChevronRight className="h-4 w-4" />
        <span>Beds & Mattresses</span>
      </div>

      <h1 className="text-3xl font-bold mb-2">Beds & Mattresses</h1>
      <p className="text-muted-foreground mb-8">
        Discover our collection of premium quality beds and mattresses designed for ultimate comfort and durability.
      </p>

      {/* Premium Products Section */}
      <AnimatedSection className="mb-12">
        <div className="relative mb-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-muted"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="bg-background px-4 text-xl font-semibold text-primary">Premium Collection</span>
          </div>
        </div>

        <div className="bg-gradient-to-r from-amber-50 to-yellow-50 p-6 rounded-lg mb-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold mb-2">Premium Beds & Mattresses</h2>
              <p className="text-muted-foreground max-w-2xl">
                Our premium collection features exceptional craftsmanship, superior materials, and a comprehensive
                7-year warranty. Each piece is meticulously designed to provide unparalleled comfort and elegance.
              </p>
            </div>
            <div className="mt-4 md:mt-0 flex items-center justify-center bg-amber-100 text-amber-800 px-4 py-2 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
              7-Year Warranty on All Premium Products
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {premiumProducts.map((product) => (
              <AnimatedSection key={product.id} delay={0.1} direction="up">
                <PremiumProductCard
                  name={product.name}
                  price={product.price}
                  image={product.images[0].src}
                  rating={product.rating}
                  reviewCount={product.reviewCount}
                  href={`/product/${product.slug}`}
                  discount={product.discount}
                  isNew={product.isNew}
                  isPremium={product.isPremium}
                />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Regular Products Section */}
      <AnimatedSection>
        <div className="relative mb-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-muted"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="bg-background px-4 text-xl font-semibold">Standard Collection</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {regularProducts.map((product) => (
            <AnimatedSection key={product.id} delay={0.1} direction="up">
              <ProductCard
                name={product.name}
                price={product.price}
                image={product.images[0].src}
                rating={product.rating}
                reviewCount={product.reviewCount}
                href={`/product/${product.slug}`}
                discount={product.discount}
                isNew={product.isNew}
              />
            </AnimatedSection>
          ))}
        </div>
      </AnimatedSection>
    </div>
  )
}
