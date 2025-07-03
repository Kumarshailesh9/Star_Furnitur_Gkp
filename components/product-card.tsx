"use client"

import Link from "next/link"
import Image from "next/image"
import { Star } from "lucide-react"
import { motion } from "framer-motion"

import { Badge } from "@/components/ui/badge"

interface ProductCardProps {
  name: string
  price: number
  image: string
  rating: number
  reviewCount: number
  href: string
  discount?: number
  isNew?: boolean
}

function ProductCard({ name, price, image, rating, reviewCount, href, discount, isNew = false }: ProductCardProps) {
  const formattedPrice = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(price)

  const discountedPrice = discount ? price - (price * discount) / 100 : price
  const formattedDiscountedPrice = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(discountedPrice)

  return (
    <motion.div
      className="group relative bg-background rounded-lg border overflow-hidden transition-all hover:shadow-md"
      whileHover={{
        y: -5,
        transition: { duration: 0.2 },
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {isNew && <Badge className="absolute top-2 left-2 z-10 bg-primary text-primary-foreground">New</Badge>}
      {discount && (
        <Badge variant="destructive" className="absolute top-2 right-2 z-10">
          {discount}% OFF
        </Badge>
      )}
      <Link href={href} className="block overflow-hidden">
        <div className="relative aspect-square w-full overflow-hidden">
          <Image
            src={image || "/placeholder.svg"}
            alt={name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            priority={isNew || discount ? true : false}
          />
        </div>
      </Link>
      <div className="p-3 md:p-4">
        <Link href={href}>
          <h3 className="font-medium text-base md:text-lg mb-1 line-clamp-2 group-hover:text-primary transition-colors">
            {name}
          </h3>
        </Link>
        <div className="flex items-center mb-2">
          <div className="flex items-center">
            <Star className="h-3 w-3 md:h-4 md:w-4 fill-primary text-primary" />
            <span className="ml-1 text-xs md:text-sm font-medium">{rating}</span>
          </div>
          <span className="mx-1 md:mx-2 text-muted-foreground">•</span>
          <span className="text-xs md:text-sm text-muted-foreground">{reviewCount} reviews</span>
        </div>
        <div className="flex items-center justify-between">
          <div>
            {discount ? (
              <div className="flex items-center gap-1 md:gap-2">
                <motion.span
                  className="font-bold text-sm md:text-base"
                  initial={{ scale: 1 }}
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                >
                  {formattedDiscountedPrice}
                </motion.span>
                <span className="text-xs md:text-sm text-muted-foreground line-through">{formattedPrice}</span>
              </div>
            ) : (
              <span className="font-bold text-sm md:text-base">{formattedPrice}</span>
            )}
          </div>
        </div>
      </div>
      <div className="p-3 md:p-4 pt-0">
        <Link
          href={href}
          className="block w-full text-center py-2 px-3 md:px-4 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors text-sm md:text-base"
        >
          View Details
        </Link>
      </div>
    </motion.div>
  )
}

export { ProductCard }
export default ProductCard
