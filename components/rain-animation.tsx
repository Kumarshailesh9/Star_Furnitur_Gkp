"use client"

import { useEffect, useState } from "react"

interface RainDropProps {
  count?: number
}

export function RainAnimation({ count = 20 }: RainDropProps) {
  const [raindrops, setRaindrops] = useState<
    Array<{
      id: number
      left: string
      delay: string
      duration: string
      width: string
      height: string
      opacity: string
    }>
  >([])

  useEffect(() => {
    const drops = Array.from({ length: count }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 5}s`,
      duration: `${1 + Math.random() * 1}s`,
      width: `${Math.random() * 2 + 1}px`,
      height: `${Math.random() * 10 + 10}px`,
      opacity: `${Math.random() * 0.3 + 0.2}`,
    }))

    setRaindrops(drops)
  }, [count])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {raindrops.map((drop) => (
        <div
          key={drop.id}
          className="absolute bg-white rounded-full animate-falling-rain"
          style={{
            left: drop.left,
            animationDelay: drop.delay,
            animationDuration: drop.duration,
            width: drop.width,
            height: drop.height,
            opacity: drop.opacity,
          }}
        />
      ))}
    </div>
  )
}
