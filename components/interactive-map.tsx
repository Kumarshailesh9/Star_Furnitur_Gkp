"use client"

import { useState, useEffect, useRef } from "react"
import { ExternalLink, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

interface MapProps {
  address: string
  latitude: number
  longitude: number
  zoom?: number
  aspectRatio?: string
  className?: string
}

export function InteractiveMap({
  address,
  latitude,
  longitude,
  zoom = 16,
  aspectRatio = "aspect-video", // Using aspect ratio instead of fixed height
  className = "",
}: MapProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const mapRef = useRef<HTMLDivElement>(null)

  // Only load the map when it's visible in the viewport
  useEffect(() => {
    if (!mapRef.current) return

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 },
    )

    observer.observe(mapRef.current)

    return () => {
      observer.disconnect()
    }
  }, [])

  // Create a static map URL for initial placeholder (much smaller file size)
  const staticMapUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${latitude},${longitude}&zoom=${zoom}&size=600x400&markers=color:red%7C${latitude},${longitude}&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8`

  // Create the Google Maps embed URL (only loaded when visible)
  const mapEmbedUrl = `https://www.google.com/maps/embed/v1/place?q=${latitude},${longitude}&zoom=${zoom}&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8`

  // Create a direct link to Google Maps for directions
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}&destination_place_id=GKP+Furniture`

  return (
    <Card className={`overflow-hidden ${className}`}>
      <CardContent className="p-0">
        <div ref={mapRef} className={`relative w-full ${aspectRatio}`}>
          {isVisible ? (
            <iframe
              src={mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              onLoad={() => setIsLoaded(true)}
              className="absolute inset-0"
              title={`Map showing location of ${address}`}
              aria-label={`Interactive map showing the location of ${address}`}
            ></iframe>
          ) : (
            // Optimized placeholder using background image instead of iframe
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${staticMapUrl})` }}
              aria-label="Map placeholder"
            ></div>
          )}

          {/* Show loading indicator only when map is visible but not yet loaded */}
          {isVisible && !isLoaded && (
            <div className="absolute inset-0 flex items-center justify-center bg-muted/80 backdrop-blur-sm">
              <div className="flex flex-col items-center">
                <MapPin className="h-8 w-8 text-primary animate-pulse" />
                <p className="text-sm text-muted-foreground mt-2">Loading map...</p>
              </div>
            </div>
          )}

          <div className="absolute bottom-4 right-4 z-10 flex flex-col sm:flex-row gap-2">
            <Button
              onClick={() => window.open(directionsUrl, "_blank")}
              className="shadow-md text-xs sm:text-sm whitespace-nowrap"
              size="sm"
            >
              Get Directions
              <ExternalLink className="ml-1 h-3 w-3 sm:h-4 sm:w-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
