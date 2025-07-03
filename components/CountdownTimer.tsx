"use client"

import { useEffect, useState } from "react"

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export default function CountdownTimer() {
  const calculateTimeLeft = (): TimeLeft => {
    const targetDate = new Date("2025-07-20T00:00:00").getTime()
    const now = new Date().getTime()
    const difference = targetDate - now

    if (difference > 0) {
      const days = Math.floor(difference / (1000 * 60 * 60 * 24))
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24)
      const minutes = Math.floor((difference / (1000 * 60)) % 60)
      const seconds = Math.floor((difference / 1000) % 60)
      return { days, hours, minutes, seconds }
    } else {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 }
    }
  }

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft())

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="flex justify-center mb-6">
      <div className="bg-white/10 backdrop-blur-sm rounded-xl px-3 sm:px-6 py-2 sm:py-3 inline-flex items-center gap-2 sm:gap-4">
        <div className="text-center">
          <div className="text-xl sm:text-2xl font-bold text-white">
            {String(timeLeft.days).padStart(2, "0")}
          </div>
          <div className="text-[10px] sm:text-xs text-blue-200">Days</div>
        </div>
        <div className="text-white font-bold">:</div>
        <div className="text-center">
          <div className="text-xl sm:text-2xl font-bold text-white">
            {String(timeLeft.hours).padStart(2, "0")}
          </div>
          <div className="text-[10px] sm:text-xs text-blue-200">Hours</div>
        </div>
        <div className="text-white font-bold">:</div>
        <div className="text-center">
          <div className="text-xl sm:text-2xl font-bold text-white">
            {String(timeLeft.minutes).padStart(2, "0")}
          </div>
          <div className="text-[10px] sm:text-xs text-blue-200">Minutes</div>
        </div>
        <div className="text-white font-bold">:</div>
        <div className="text-center">
          <div className="text-xl sm:text-2xl font-bold text-white">
            {String(timeLeft.seconds).padStart(2, "0")}
          </div>
          <div className="text-[10px] sm:text-xs text-blue-200">Seconds</div>
        </div>
      </div>
    </div>
  )
}
