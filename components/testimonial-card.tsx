import Image from "next/image"
import { Star } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"

interface TestimonialCardProps {
  name: string
  location: string
  image: string
  rating: number
  testimonial: string
}

export default function TestimonialCard({ name, location, image, rating, testimonial }: TestimonialCardProps) {
  return (
    <Card>
      <CardContent className="p-4 md:p-6">
        <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
          <div className="relative h-10 w-10 md:h-12 md:w-12 overflow-hidden rounded-full">
            <Image src={image || "/placeholder.svg"} alt={name} fill className="object-cover" />
          </div>
          <div>
            <h4 className="font-medium text-sm md:text-base">{name}</h4>
            <p className="text-xs md:text-sm text-muted-foreground">{location}</p>
          </div>
        </div>
        <div className="flex mb-3 md:mb-4">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`h-3 w-3 md:h-4 md:w-4 ${i < rating ? "fill-primary text-primary" : "fill-muted text-muted-foreground"}`}
            />
          ))}
        </div>
        <p className="text-muted-foreground italic text-sm md:text-base">"{testimonial}"</p>
      </CardContent>
    </Card>
  )
}
