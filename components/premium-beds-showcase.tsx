import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { getPremiumProducts } from "@/lib/products"
import PremiumProductCard from "@/components/premium-product-card"
import { AnimatedSection } from "@/components/animated-section"
import { Button } from "@/components/ui/button"

export function PremiumBedsShowcase() {
  const premiumProducts = getPremiumProducts(4)

  return (
    <section className="py-8 md:py-12 bg-gradient-to-r from-yellow-50 via-amber-50 to-yellow-100">
      <div className="container px-4 mx-auto max-w-7xl">
        <AnimatedSection>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 md:mb-8">
            <div className="mb-4 md:mb-0">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-1">
                Premium Beds Collection
              </h2>
              <p className="text-sm text-muted-foreground max-w-lg">
                Explore our exclusive range of premium beds & mattresses with warranty.
              </p>
            </div>

            <Link href="/category/beds" className="hidden md:inline-flex">
              <Button
                variant="outline"
                className="flex items-center gap-1 border-primary text-primary hover:bg-primary hover:text-white transition-colors text-sm px-4 py-2"
              >
                View All <ChevronRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
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
          <div className="mt-6 text-center md:hidden">
            <Link href="/category/beds">
              <Button
                variant="outline"
                className="inline-flex items-center gap-1 border-primary text-primary hover:bg-primary hover:text-white transition-colors text-sm px-4 py-2"
              >
                View All Premium Beds <ChevronRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
