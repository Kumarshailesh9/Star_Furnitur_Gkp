"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

interface ScrollingMarqueeProps {
  messages: string[]
  speed?: "slow" | "normal" | "fast"
  pauseOnHover?: boolean
  className?: string
  backgroundColor?: string
  textColor?: string
}

export function ScrollingMarquee({
  messages,
  speed = "normal",
  pauseOnHover = true,
  className,
  backgroundColor,
  textColor,
}: ScrollingMarqueeProps) {
  const [duplicatedMessages, setDuplicatedMessages] = useState<string[]>([])

  // Duplicate messages to ensure continuous scrolling
  useEffect(() => {
    // Duplicate messages to ensure continuous scrolling
    setDuplicatedMessages([...messages, ...messages, ...messages])
  }, [messages])

  // Determine animation duration based on speed
  const getDuration = () => {
    switch (speed) {
      case "slow":
        return "40s"
      case "fast":
        return "20s"
      default:
        return "30s"
    }
  }

  return (
    <div
      className={cn(
        "overflow-hidden whitespace-nowrap relative",
        backgroundColor || "bg-primary",
        textColor || "text-primary-foreground",
        className,
      )}
    >
      <div
        className={cn("inline-block animate-marquee", pauseOnHover && "hover:pause-animation")}
        style={{
          animationDuration: getDuration(),
        }}
      >
        {duplicatedMessages.map((message, index) => (
          <span key={index} className="mx-4 inline-block">
            {message}
          </span>
        ))}
      </div>
    </div>
  )
}
