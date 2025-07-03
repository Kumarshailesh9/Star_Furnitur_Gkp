"use client"

import { useEffect, useState } from "react"

interface CountdownTimerProps {
  endDate: Date
  className?: string
}

export function CountdownTimer({ endDate, className = "" }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = endDate.getTime() - new Date().getTime()

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        })
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [endDate])

  return (
    <div className={`flex justify-center gap-2 sm:gap-4 ${className}`}>
      <div className="flex flex-col items-center">
        <div className="bg-white/10 backdrop-blur-sm rounded-lg w-14 sm:w-16 md:w-20 h-14 sm:h-16 md:h-20 flex items-center justify-center">
          <span className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
            {String(timeLeft.days).padStart(2, "0")}
          </span>
        </div>
        <span className="text-xs sm:text-sm text-blue-100 mt-1">Days</span>
      </div>

      <div className="flex flex-col items-center">
        <div className="bg-white/10 backdrop-blur-sm rounded-lg w-14 sm:w-16 md:w-20 h-14 sm:h-16 md:h-20 flex items-center justify-center">
          <span className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
            {String(timeLeft.hours).padStart(2, "0")}
          </span>
        </div>
        <span className="text-xs sm:text-sm text-blue-100 mt-1">Hours</span>
      </div>

      <div className="flex flex-col items-center">
        <div className="bg-white/10 backdrop-blur-sm rounded-lg w-14 sm:w-16 md:w-20 h-14 sm:h-16 md:h-20 flex items-center justify-center">
          <span className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
            {String(timeLeft.minutes).padStart(2, "0")}
          </span>
        </div>
        <span className="text-xs sm:text-sm text-blue-100 mt-1">Minutes</span>
      </div>

      <div className="flex flex-col items-center">
        <div className="bg-white/10 backdrop-blur-sm rounded-lg w-14 sm:w-16 md:w-20 h-14 sm:h-16 md:h-20 flex items-center justify-center">
          <span className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
            {String(timeLeft.seconds).padStart(2, "0")}
          </span>
        </div>
        <span className="text-xs sm:text-sm text-blue-100 mt-1">Seconds</span>
      </div>
    </div>
  )
}
