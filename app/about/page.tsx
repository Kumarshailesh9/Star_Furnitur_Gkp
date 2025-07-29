import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Award, Users, Clock, ThumbsUp } from "lucide-react";

import { Button } from "@/components/ui/button";

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
          <Image
            src="/bustling-woodwork-studio.png"
            alt="Star Furniture Workshop"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 flex flex-col justify-center items-center p-6 text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Our Story
            </h1>
            <p className="text-lg text-white max-w-2xl">
              Crafting premium furniture with passion and precision since 1998
            </p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                The Star Furniture Journey
              </h2>
              <p className="text-muted-foreground mb-4">
                Founded in 1998 by <strong>Mr. Wasiullah</strong> in Gorakhpur,
                Uttar Pradesh, Star Furniture began as a modest workshop with a
                simple mission: to create beautiful, durable furniture that
                brings comfort and joy to Indian homes.
              </p>
              <p className="text-muted-foreground mb-4">
                What started as a small family-run unit has now grown into a
                respected furniture brand with a team of skilled artisans — all
                while staying true to our commitment to quality craftsmanship,
                timeless design, and customer satisfaction.
              </p>
              <p className="text-muted-foreground">
                Today, Star Furniture continues to blend traditional
                woodworking techniques with modern styles, creating pieces that
                are both classic and contemporary. Our furniture is built to
                last — designed to become a cherished part of your home and
                family stories.
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
              At Star Furniture, our values guide everything we do — from
              selecting raw materials to delivering your finished furniture.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <div className="bg-background p-6 rounded-lg text-center flex flex-col items-center">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">
                Quality Craftsmanship
              </h3>
              <p className="text-muted-foreground">
                We pride ourselves on attention to detail and excellence in
                every piece we create.
              </p>
            </div>

            <div className="bg-background p-6 rounded-lg text-center flex flex-col items-center">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Customer First</h3>
              <p className="text-muted-foreground">
                Your satisfaction is our top priority. We listen to your needs
                and exceed your expectations.
              </p>
            </div>

            <div className="bg-background p-6 rounded-lg text-center flex flex-col items-center">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Timeless Design</h3>
              <p className="text-muted-foreground">
                Our furniture is designed to stand the test of time — in both
                durability and style.
              </p>
            </div>

            <div className="bg-background p-6 rounded-lg text-center flex flex-col items-center">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <ThumbsUp className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Community Impact</h3>
              <p className="text-muted-foreground">
                We support local craftsmen and sustainable practices to uplift
                our community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Milestones Section */}
      <section className="py-12 md:py-16 bg-muted">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Our Journey
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Key milestones in the Star Furniture story
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="relative border-l border-primary pl-8 pb-8">
              <div className="absolute w-4 h-4 bg-primary rounded-full -left-2 top-0"></div>
              <div>
                <h3 className="font-bold text-lg">1998</h3>
                <p className="font-medium">Founding of Star Furniture</p>
                <p className="text-muted-foreground mt-1">
                  Mohd. Washad opens a small workshop in Gorakhpur with a
                  vision to craft quality furniture for local homes.
                </p>
              </div>
            </div>

            <div className="relative border-l border-primary pl-8 pb-8">
              <div className="absolute w-4 h-4 bg-primary rounded-full -left-2 top-0"></div>
              <div>
                <h3 className="font-bold text-lg">2005</h3>
                <p className="font-medium">First Showroom Opens</p>
                <p className="text-muted-foreground mt-1">
                  Opened the first dedicated showroom in Gorakhpur to serve
                  more customers.
                </p>
              </div>
            </div>

            <div className="relative border-l border-primary pl-8 pb-8">
              <div className="absolute w-4 h-4 bg-primary rounded-full -left-2 top-0"></div>
              <div>
                <h3 className="font-bold text-lg">2012</h3>
                <p className="font-medium">Expansion of Offerings</p>
                <p className="text-muted-foreground mt-1">
                  Introduced new furniture lines to meet modern lifestyle
                  needs.
                </p>
              </div>
            </div>

            <div className="relative border-l border-primary pl-8 pb-8">
              <div className="absolute w-4 h-4 bg-primary rounded-full -left-2 top-0"></div>
              <div>
                <h3 className="font-bold text-lg">2018</h3>
                <p className="font-medium">Online Store Launch</p>
                <p className="text-muted-foreground mt-1">
                  Went online to make our furniture accessible across India.
                </p>
              </div>
            </div>

            <div className="relative pl-8">
              <div className="absolute w-4 h-4 bg-primary rounded-full -left-2 top-0"></div>
              <div>
                <h3 className="font-bold text-lg">2023</h3>
                <p className="font-medium">New Flagship Store</p>
                <p className="text-muted-foreground mt-1">
                  Opened our flagship store at Nakaha No.1, Gorakhnath Road,
                  Gorakhpur.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Experience the Star Furniture Difference
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Visit our showroom or browse online to find furniture that combines
            craftsmanship, comfort, and style.
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
  );
}
