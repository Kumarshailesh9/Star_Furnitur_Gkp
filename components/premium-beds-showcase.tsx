import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { getPremiumProducts } from "@/lib/products"
import PremiumProductCard from "@/components/premium-product-card"
import { AnimatedSection } from "@/components/animated-section"

export function PremiumBedsShowcase() {
  const premiumProducts = getPremiumProducts(4)

  return (
    <section className="py-12 bg-gradient-to-r from-amber-50 to-yellow-50">
      <div className="container px-4 mx-auto">
        <AnimatedSection>
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-2">Premium Beds Collection</h2>
              <p className="text-muted-foreground max-w-2xl">
                Discover our exclusive range of premium beds and mattresses, each with a comprehensive 7-year warranty.
              </p>
            </div>
            <Link href="/category/beds" className="hidden md:flex items-center text-primary hover:underline">
              View All <ChevronRight className="h-4 w-4 ml-1" />
            </Link>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {premiumProducts.map((product, index) => (
            <AnimatedSection key={product.id} delay={0.1 * index} direction="up">
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

        <AnimatedSection delay={0.5}>
          <div className="mt-8 text-center md:hidden">
            <Link href="/category/beds" className="inline-flex items-center text-primary hover:underline">
              View All Premium Beds <ChevronRight className="h-4 w-4 ml-1" />
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
