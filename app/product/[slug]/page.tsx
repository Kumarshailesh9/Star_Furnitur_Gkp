"use client"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ChevronRight, Minus, Plus, Share2, Truck, RotateCcw, Shield, Star, Check } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"


import ProductCard from "@/components/product-card"
import { getProductBySlug } from "@/lib/products"

export default function ProductPage({ params }: { params: { slug: string } }) {
  // Get product data
  const product = getProductBySlug(params.slug)

  // If product not found, show 404
  if (!product) {
    notFound()
  }

  const formattedPrice = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(product.price)

  // Calculate discounted price if applicable
  const discountedPrice = product.discount ? product.price - (product.price * product.discount) / 100 : null

  const formattedDiscountedPrice = discountedPrice
    ? new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
        maximumFractionDigits: 0,
      }).format(discountedPrice)
    : null

  // Determine category name for breadcrumb
  const categoryNames: Record<string, string> = {
    beds: "Beds & Mattresses",
    sofas: "Sofas & Sectionals",
    dining: "Dining Sets",
    storage: "Storage Solutions",
  }

  const categoryName = categoryNames[product.category] || "Products"

   const handlePurchase = () => {
    
    setTimeout(() => {
      window.location.href =
        `https://wa.me/917651847029?text=Hi%2C%20I%20want%20to%20order%20the%${categoryName}!`
    }, 1000)
  }

  return (
    <>
      {/* Breadcrumb - Hidden on small screens */}
      <div className="container mx-auto px-4 py-2 md:py-4 text-xs md:text-sm hidden sm:block">
        <div className="flex items-center">
          <Link href="/" className="text-muted-foreground hover:text-foreground">
            Home
          </Link>
          <ChevronRight className="h-3 w-3 md:h-4 md:w-4 mx-1 md:mx-2 text-muted-foreground" />
          <Link href={`/category/${product.category}`} className="text-muted-foreground hover:text-foreground">
            {categoryName}
          </Link>
          <ChevronRight className="h-3 w-3 md:h-4 md:w-4 mx-1 md:mx-2 text-muted-foreground" />
          <span className="text-foreground font-medium">{product.name}</span>
        </div>
      </div>

      {/* Product Details */}
      <section className="container mx-auto px-4 py-4 md:py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
          {/* Product Images */}
          <div className="space-y-3 md:space-y-4">
            <div className="relative h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px] w-full overflow-hidden rounded-lg border">
              <Image
                src={product.images[0].src || "/placeholder.svg"}
                alt={product.images[0].alt || product.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-2">
              {product.images.map((image, index) => (
                <div
                  key={index}
                  className="relative h-16 sm:h-20 md:h-24 overflow-hidden rounded-md border cursor-pointer"
                >
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt || `${product.name} - View ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-4 md:space-y-6">
            <div>
              <h1 className="text-xl sm:text-2xl md:text-3xl font-bold">{product.name}</h1>
              <div className="flex items-center mt-2">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 md:h-5 md:w-5 ${
                        i < Math.floor(product.rating)
                          ? "fill-primary text-primary"
                          : "fill-muted stroke-muted-foreground"
                      }`}
                    />
                  ))}
                </div>
                <span className="ml-2 text-xs md:text-sm font-medium">{product.rating}</span>
                <span className="mx-1 md:mx-2 text-muted-foreground">•</span>
                <span className="text-xs md:text-sm text-muted-foreground">{product.reviewCount} reviews</span>
              </div>
            </div>

            <div className="text-2xl md:text-3xl font-bold">
              {discountedPrice ? (
                <div className="flex items-center gap-2">
                  <span>{formattedDiscountedPrice}</span>
                  <span className="text-base md:text-lg line-through text-muted-foreground">{formattedPrice}</span>
                  <span className="text-sm md:text-base text-green-600 font-medium">{product.discount}% off</span>
                </div>
              ) : (
                formattedPrice
              )}
            </div>

            <p className="text-sm md:text-base text-muted-foreground">{product.description}</p>

            <div className="space-y-4">
              {/* {product.colors && product.colors.length > 0 && (
                <div>
                  <h3 className="font-medium text-sm md:text-base mb-2">Color</h3>
                  <RadioGroup defaultValue={product.colors[0]} className="flex flex-wrap gap-3">
                    {product.colors.map((color) => (
                      <div key={color} className="flex items-center space-x-2">
                        <RadioGroupItem value={color} id={`color-${color.toLowerCase().replace(/\s+/g, "-")}`} />
                        <Label
                          htmlFor={`color-${color.toLowerCase().replace(/\s+/g, "-")}`}
                          className="text-sm md:text-base"
                        >
                          {color}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>
              )} */}

              {/* {product.sizes && product.sizes.length > 0 && (
                <div>
                  <h3 className="font-medium text-sm md:text-base mb-2">Size</h3>
                  <RadioGroup defaultValue={product.sizes[0]} className="flex flex-wrap gap-3">
                    {product.sizes.map((size) => (
                      <div key={size} className="flex items-center space-x-2">
                        <RadioGroupItem value={size} id={`size-${size.toLowerCase().replace(/\s+/g, "-")}`} />
                        <Label
                          htmlFor={`size-${size.toLowerCase().replace(/\s+/g, "-")}`}
                          className="text-sm md:text-base"
                        >
                          {size}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>
              )} */}

              {/* <div>
                <h3 className="font-medium text-sm md:text-base mb-2">Quantity</h3>
                <div className="flex items-center">
                  <Button variant="outline" size="icon" className="h-9 w-9 md:h-10 md:w-10 rounded-r-none">
                    <Minus className="h-3 w-3 md:h-4 md:w-4" />
                    <span className="sr-only">Decrease quantity</span>
                  </Button>
                  <div className="h-9 md:h-10 w-10 md:w-12 flex items-center justify-center border-y text-sm md:text-base">
                    1
                  </div>
                  <Button variant="outline" size="icon" className="h-9 w-9 md:h-10 md:w-10 rounded-l-none">
                    <Plus className="h-3 w-3 md:h-4 md:w-4" />
                    <span className="sr-only">Increase quantity</span>
                  </Button>
                </div>
              </div> */}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button
               size="lg" 
               variant="outline"
              className="flex-1 text-sm md:text-base" 
               onClick={handlePurchase}
               >
                Contact for Purchase
              </Button>
              <Button size="icon" variant="outline" className="h-10 w-10 sm:h-12 sm:w-12">
                <Share2 className="h-4 w-4 md:h-5 md:w-5" />
                <span className="sr-only">Share product</span>
              </Button>
            </div>

            <div className="space-y-2 md:space-y-3 pt-2 md:pt-4">
              <div className="flex items-center text-xs md:text-sm">
                <Truck className="h-4 w-4 md:h-5 md:w-5 mr-2 text-muted-foreground shrink-0" />
                <span>Free delivery on orders above ₹5000</span>
              </div>
              <div className="flex items-center text-xs md:text-sm">
                <RotateCcw className="h-4 w-4 md:h-5 md:w-5 mr-2 text-muted-foreground shrink-0" />
                <span>30-day return policy</span>
              </div>
              <div className="flex items-center text-xs md:text-sm">
                <Shield className="h-4 w-4 md:h-5 md:w-5 mr-2 text-muted-foreground shrink-0" />
                <span>{product.specifications.warranty}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Details Tabs */}
      <section className="container mx-auto px-4 py-6 md:py-8">
        <Tabs defaultValue="features" className="w-full">
          <TabsList className="grid w-full grid-cols-3 h-auto">
            <TabsTrigger value="features" className="text-xs md:text-sm py-2 md:py-3">
              Features
            </TabsTrigger>
            <TabsTrigger value="specifications" className="text-xs md:text-sm py-2 md:py-3">
              Specifications
            </TabsTrigger>
            <TabsTrigger value="reviews" className="text-xs md:text-sm py-2 md:py-3">
              Reviews
            </TabsTrigger>
          </TabsList>
          <TabsContent value="features" className="p-3 md:p-4 border rounded-md mt-2">
            <h3 className="font-semibold text-base md:text-lg mb-3 md:mb-4">Key Features</h3>
            <ul className="space-y-2">
              {product.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <Check className="h-4 w-4 md:h-5 md:w-5 mr-2 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm md:text-base">{feature.text}</span>
                </li>
              ))}
            </ul>
          </TabsContent>
          <TabsContent value="specifications" className="p-3 md:p-4 border rounded-md mt-2">
            <h3 className="font-semibold text-base md:text-lg mb-3 md:mb-4">Product Specifications</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
              {Object.entries(product.specifications).map(([key, value]) => (
                <div key={key} className="flex flex-col">
                  <span className="font-medium capitalize text-sm md:text-base">{key}</span>
                  <span className="text-muted-foreground text-xs md:text-sm">{value}</span>
                </div>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="reviews" className="p-3 md:p-4 border rounded-md mt-2">
            <div className="flex items-center justify-between mb-4 md:mb-6">
              <h3 className="font-semibold text-base md:text-lg">Customer Reviews</h3>
              <Button size="sm" className="text-xs md:text-sm">
                Write a Review
              </Button>
            </div>
            <div className="space-y-4 md:space-y-6">
              {product.reviews.map((review) => (
                <div key={review.id} className="flex items-start gap-3 md:gap-4 pb-4 md:pb-6 border-b">
                  <div className="relative h-8 w-8 md:h-10 md:w-10 overflow-hidden rounded-full bg-muted shrink-0">
                    <Image
                      src={review.userImage || "/placeholder.svg"}
                      alt={review.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h4 className="font-medium text-sm md:text-base">{review.name}</h4>
                      <span className="text-xs text-muted-foreground">{review.date}</span>
                    </div>
                    <div className="flex items-center my-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-3 w-3 md:h-4 md:w-4 ${
                            i < review.rating ? "fill-primary text-primary" : "fill-muted stroke-muted-foreground"
                          }`}
                        />
                      ))}
                    </div>
                    <p className="text-muted-foreground text-xs md:text-sm">{review.comment}</p>
                  </div>
                </div>
              ))}

              {product.reviews.length > 2 && (
                <Button variant="outline" className="w-full text-xs md:text-sm">
                  Load More Reviews
                </Button>
              )}
            </div>
          </TabsContent>
        </Tabs>
      </section>

      {/* Related Products */}
      <section className="container mx-auto px-4 py-6 md:py-8">
        <div className="flex justify-between items-center mb-4 md:mb-6">
          <h2 className="text-lg md:text-2xl font-bold">You May Also Like</h2>
          <Link
            href={`/category/${product.category}`}
            className="text-primary flex items-center hover:underline text-xs md:text-sm"
          >
            View All <ChevronRight className="h-3 w-3 md:h-4 md:w-4 ml-1" />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6">
          {product.relatedProducts.map((relatedProduct, index) => (
            <ProductCard
              key={index}
              name={relatedProduct.name}
              price={relatedProduct.price}
              image={relatedProduct.image}
              rating={relatedProduct.rating}
              reviewCount={relatedProduct.reviewCount}
              href={relatedProduct.href}
              discount={relatedProduct.discount}
              isNew={relatedProduct.isNew}
            />
          ))}
        </div>
      </section>
    </>
  )
}
