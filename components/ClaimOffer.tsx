"use client"

import { useState } from "react"
import Confetti from "react-confetti"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function ClaimOffer() {
  const [showConfetti, setShowConfetti] = useState(false)

  const handleClaimOffer = () => {
    setShowConfetti(true)
    setTimeout(() => {
      window.location.href =
        "https://wa.me/917651847029?text=Hi%2C%20I%20want%20to%20order%20the%20Monsoon%20Bundle%20Offer!"
    }, 2000)
  }

  return (
    <>
      {showConfetti && (
        <>
          <Confetti />
          <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/50">
            <div className="bg-white text-black text-center p-8 rounded-xl shadow-xl text-2xl font-bold">
              🎉 Congratulations! 🎉<br />
                 wait a second .....
            </div>
          </div>
        </>
      )}

      <Button
        onClick={handleClaimOffer}
        className="w-full sm:flex-1 bg-yellow-500 hover:bg-yellow-400 text-black font-bold px-3 sm:px-5 py-2.5 sm:py-3 text-sm rounded-full flex items-center justify-center gap-2 shadow-glow-sm transition-all duration-300 hover:scale-105"
      >
        <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
        <span className="whitespace-nowrap">Claim This Offer</span>
      </Button>
    </>
  )
}
