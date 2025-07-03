"use client"

import { useEffect, useState } from "react"

interface FloatingParticlesProps {
  count?: number
}

export function FloatingParticles({ count = 30 }: FloatingParticlesProps) {
  const [particles, setParticles] = useState<
    Array<{
      id: number
      size: string
      left: string
      top: string
      duration: string
      delay: string
      opacity: string
    }>
  >([])

  useEffect(() => {
    const particlesArray = Array.from({ length: count }, (_, i) => ({
      id: i,
      size: `${Math.random() * 8 + 2}px`,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      duration: `${Math.random() * 10 + 5}s`,
      delay: `${Math.random() * 5}s`,
      opacity: `${Math.random() * 0.5 + 0.1}`,
    }))

    setParticles(particlesArray)
  }, [count])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full animate-float-particle"
          style={{
            width: particle.size,
            height: particle.size,
            left: particle.left,
            top: particle.top,
            background: `rgba(255, 255, 255, ${particle.opacity})`,
            animationDuration: particle.duration,
            animationDelay: particle.delay,
          }}
        />
      ))}
    </div>
  )
}
