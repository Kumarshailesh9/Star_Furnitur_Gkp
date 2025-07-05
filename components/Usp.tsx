  import { AnimatedSection } from "@/components/animated-section"
import {Truck,Shield,ThumbsUp,   Clock,} from 'lucide-react'

export function  USP(){
  return (
<section className="py-8 sm:py-10 md:py-12 bg-muted">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <AnimatedSection>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-6 md:mb-10">
              Why Choose Star Furniture?
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            <AnimatedSection delay={0.1} direction="up">
              <div className="bg-background p-4 md:p-6 rounded-lg text-center flex flex-col items-center hover:shadow-md transition hover:-translate-y-1">
                <div className="h-10 w-10 md:h-12 md:w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <ThumbsUp className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-base md:text-lg mb-2">Locally Crafted</h3>
                <p className="text-sm text-muted-foreground text-center">
                  Handcrafted with pride in Gorakhpur by skilled artisans.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2} direction="up">
              <div className="bg-background p-4 md:p-6 rounded-lg text-center flex flex-col items-center hover:shadow-md transition hover:-translate-y-1">
                <div className="h-10 w-10 md:h-12 md:w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Shield className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-base md:text-lg mb-2">Durable Materials</h3>
                <p className="text-sm text-muted-foreground text-center">
                  Premium quality materials with ergonomic designs.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3} direction="up">
              <div className="bg-background p-4 md:p-6 rounded-lg text-center flex flex-col items-center hover:shadow-md transition hover:-translate-y-1">
                <div className="h-10 w-10 md:h-12 md:w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Truck className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-base md:text-lg mb-2">Easy Delivery</h3>
                <p className="text-sm text-muted-foreground text-center">
                  Hassle-free delivery and professional installation.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.4} direction="up">
              <div className="bg-background p-4 md:p-6 rounded-lg text-center flex flex-col items-center hover:shadow-md transition hover:-translate-y-1">
                <div className="h-10 w-10 md:h-12 md:w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Clock className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-base md:text-lg mb-2">Affordable Luxury</h3>
                <p className="text-sm text-muted-foreground text-center">
                  Premium quality at competitive prices.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
  )
}
