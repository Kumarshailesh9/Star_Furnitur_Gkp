import Image from "next/image"
import Link from "next/link"
import { ChevronRight, Award, Users, Clock, ThumbsUp } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <>
      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-4 text-sm">
        <div className="flex items-center">
          <Link href="/" className="text-muted-foreground hover:text-foreground">
            Home
          </Link>
          <ChevronRight className="h-4 w-4 mx-2 text-muted-foreground" />
          <span className="text-foreground font-medium">About Us</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative">
        <div className="relative h-[300px] md:h-[400px] w-full overflow-hidden">
          <Image src="/bustling-woodwork-studio.png" alt="Star Furniture Workshop" fill className="object-cover" />
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 flex flex-col justify-center items-center p-6 text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">Our Story</h1>
            <p className="text-lg text-white max-w-2xl">
              Crafting premium furniture with passion and precision since 1995
            </p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">The GKP Furniture Journey</h2>
              <p className="text-muted-foreground mb-4">
                Founded in 1995 by Mr. Ramesh Kumar in Gorakhpur, Uttar Pradesh, GKP Furniture began as a modest
                workshop with a simple mission: to create beautiful, durable furniture that brings comfort and joy to
                Indian homes.
              </p>
              <p className="text-muted-foreground mb-4">
                What started as a small family business with just three craftsmen has now grown into a respected
                furniture brand with over 50 skilled artisans, all while maintaining our commitment to quality
                craftsmanship and customer satisfaction.
              </p>
              <p className="text-muted-foreground">
                Today, GKP Furniture continues to blend traditional woodworking techniques with modern designs, creating
                pieces that are both timeless and contemporary. Our furniture is not just built to last—it's designed to
                become a cherished part of your home and family memories.
              </p>
            </div>
            <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/skilled-indian-woodworker.png"
                alt="Craftsmanship at Star Furniture"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-12 md:py-16 bg-muted">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              At GKP Furniture, our values guide everything we do, from the selection of materials to the final delivery
              of your furniture.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <div className="bg-background p-6 rounded-lg text-center flex flex-col items-center">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Quality Craftsmanship</h3>
              <p className="text-muted-foreground">
                We take pride in our attention to detail and commitment to excellence in every piece we create.
              </p>
            </div>

            <div className="bg-background p-6 rounded-lg text-center flex flex-col items-center">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Customer First</h3>
              <p className="text-muted-foreground">
                Your satisfaction is our priority. We listen to your needs and strive to exceed your expectations.
              </p>
            </div>

            <div className="bg-background p-6 rounded-lg text-center flex flex-col items-center">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Timeless Design</h3>
              <p className="text-muted-foreground">
                We create furniture that stands the test of time, both in durability and style.
              </p>
            </div>

            <div className="bg-background p-6 rounded-lg text-center flex flex-col items-center">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <ThumbsUp className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Community Impact</h3>
              <p className="text-muted-foreground">
                We support local artisans and sustainable practices to make a positive impact on our community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      {/* <section className="py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The passionate people behind Star Furniture who bring your dream furniture to life.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="relative h-64 w-full mb-4 rounded-lg overflow-hidden">
                <Image src="/confident-indian-professional.png" alt="Ramesh Kumar" fill className="object-cover" />
              </div>
              <h3 className="font-semibold text-lg">Ramesh Kumar</h3>
              <p className="text-muted-foreground">Founder & CEO</p>
            </div>

            <div className="text-center">
              <div className="relative h-64 w-full mb-4 rounded-lg overflow-hidden">
                <Image src="/confident-indian-professional.png" alt="Priya Kumar" fill className="object-cover" />
              </div>
              <h3 className="font-semibold text-lg">Priya Kumar</h3>
              <p className="text-muted-foreground">Design Director</p>
            </div>

            <div className="text-center">
              <div className="relative h-64 w-full mb-4 rounded-lg overflow-hidden">
                <Image src="/confident-indian-professional.png" alt="Vikram Singh" fill className="object-cover" />
              </div>
              <h3 className="font-semibold text-lg">Vikram Singh</h3>
              <p className="text-muted-foreground">Head of Production</p>
            </div>

            <div className="text-center">
              <div className="relative h-64 w-full mb-4 rounded-lg overflow-hidden">
                <Image src="/confident-indian-professional.png" alt="Anjali Patel" fill className="object-cover" />
              </div>
              <h3 className="font-semibold text-lg">Anjali Patel</h3>
              <p className="text-muted-foreground">Customer Experience Manager</p>
            </div>
          </div>
        </div>
      </section> */}

      {/* Milestones */}
      <section className="py-12 md:py-16 bg-muted">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Journey</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Key milestones in the Star Furniture story</p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="relative border-l border-primary pl-8 pb-8">
              <div className="absolute w-4 h-4 bg-primary rounded-full -left-2 top-0"></div>
              <div>
                <h3 className="font-bold text-lg">1995</h3>
                <p className="font-medium">Founding of Star Furniture</p>
                <p className="text-muted-foreground mt-1">
                  Ramesh Kumar establishes a small workshop in Gorakhpur with three craftsmen.
                </p>
              </div>
            </div>

            <div className="relative border-l border-primary pl-8 pb-8">
              <div className="absolute w-4 h-4 bg-primary rounded-full -left-2 top-0"></div>
              <div>
                <h3 className="font-bold text-lg">2005</h3>
                <p className="font-medium">First Showroom Opening</p>
                <p className="text-muted-foreground mt-1">
                  Opened our first dedicated showroom in Gorakhpur, expanding our reach to local customers.
                </p>
              </div>
            </div>

            <div className="relative border-l border-primary pl-8 pb-8">
              <div className="absolute w-4 h-4 bg-primary rounded-full -left-2 top-0"></div>
              <div>
                <h3 className="font-bold text-lg">2012</h3>
                <p className="font-medium">Expansion to Electronics</p>
                <p className="text-muted-foreground mt-1">
                  Expanded our business to include electronics, bringing quality technology products to our customers.
                </p>
              </div>
            </div>

            <div className="relative border-l border-primary pl-8 pb-8">
              <div className="absolute w-4 h-4 bg-primary rounded-full -left-2 top-0"></div>
              <div>
                <h3 className="font-bold text-lg">2018</h3>
                <p className="font-medium">Launch of Online Store</p>
                <p className="text-muted-foreground mt-1">
                  Embraced digital transformation with the launch of our e-commerce platform.
                </p>
              </div>
            </div>

            <div className="relative pl-8">
              <div className="absolute w-4 h-4 bg-primary rounded-full -left-2 top-0"></div>
              <div>
                <h3 className="font-bold text-lg">2023</h3>
                <p className="font-medium">New Flagship Store</p>
                <p className="text-muted-foreground mt-1">
                  Opened our new flagship store at Nakaha no.1, Gorakhnath Road, Gorakhpur.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Experience the Star Furniture Difference</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Visit our showroom or browse our online collection to discover furniture that combines craftsmanship,
            comfort, and style.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/category/beds">Explore Our Collection</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
