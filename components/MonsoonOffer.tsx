"use client";

import { Badge } from "@/components/ui/badge";
import { Sparkles, Check, ArrowRight } from "lucide-react";
import CountdownTimer from "@/components/CountdownTimer";
import ProductGrid from "./Mansoon-product";
import { useState } from "react";
import Confetti from "react-confetti";
import { Button } from "@/components/ui/button";

export default function MonsoonOffer() {
  const [showConfetti, setShowConfetti] = useState(false);

  const handleClaimOffer = () => {
    setShowConfetti(true);
    setTimeout(() => {
      window.location.href =
        "https://wa.me/917651847029?text=Hi%2C%20I%20want%20to%20order%20the%20Monsoon%20Bundle%20Offer!";
    }, 2000);
  };

  return (
    <section className="relative py-12 md:py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-900 via-emerald-800 to-teal-700 z-0">
        {/* Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full animate-float-particle"
              style={{
                width: `${Math.random() * 10 + 4}px`,
                height: `${Math.random() * 10 + 4}px`,
                background: `rgba(255, 255, 255, ${Math.random() * 0.4 + 0.1})`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDuration: `${Math.random() * 10 + 6}s`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            />
          ))}
        </div>

        {/* Rain */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-0.5 h-12 bg-white/20 rounded-full animate-falling-rain"
              style={{
                left: `${Math.random() * 100}%`,
                top: `-${Math.random() * 20}%`,
                animationDuration: `${0.8 + Math.random() * 1.5}s`,
                animationDelay: `${Math.random() * 2}s`,
              }}
            />
          ))}
        </div>

        {/* Orbs */}
        <div className="absolute -left-32 -top-32 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl"></div>
        <div className="absolute -right-32 -bottom-32 w-80 h-80 bg-emerald-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-10">
          <Badge className="bg-yellow-400 text-black px-5 py-1.5 text-xs rounded-full font-bold shadow-md">
            <Sparkles className="w-4 h-4 mr-1 inline-block" /> LIMITED TIME OFFER
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-3 drop-shadow-lg">
            Premium Monsoon Bundle Sale
          </h2>
          <p className="text-blue-100 text-sm sm:text-base md:text-lg max-w-xl">
            Upgrade your entire home — 9 premium items, one unbeatable price.
          </p>
        </div>

        {/* Card */}
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-6 md:p-8 border border-white/20 shadow-xl mb-10">
          <div className="flex justify-center mb-6">
            <CountdownTimer />
          </div>

          <ProductGrid />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
            {[
              "Free Delivery & Installation",
              "5-Year Warranty",
              "EMI With Bajaj",
              "Premium Quality Products",
            ].map((feature, index) => (
              <div
                key={index}
                className="flex items-center bg-white/10 rounded-md px-3 py-2"
              >
                <Check className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                <span className="text-white text-xs">{feature}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col bg-white/10 rounded-2xl p-5 border border-white/10">
            <div className="flex flex-col items-center mb-4">
              <div className="flex items-center">
                <span className="text-white text-2xl md:text-3xl font-extrabold">
                  ₹96,428
                </span>
                <span className="text-gray-300 text-sm md:text-base line-through ml-3">
                  ₹1,28,570
                </span>
                <Badge className="bg-yellow-400 text-black ml-3 px-3">
                  25% OFF
                </Badge>
              </div>
              <p className="text-blue-100 text-xs md:text-sm mt-1">
                Limited stock — order yours today!
              </p>
            </div>

            <div className="flex flex-col sm:flex-row w-full gap-4">
              {showConfetti && (
                <>
                  <Confetti />
                  <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/50">
                    <div className="bg-white text-black text-center p-10 rounded-2xl shadow-2xl text-2xl font-bold">
                      🎉 Congratulations! <br /> Please wait...
                    </div>
                  </div>
                </>
              )}

              <Button
                onClick={handleClaimOffer}
                className="w-full sm:flex-1 bg-yellow-400 hover:bg-yellow-300 text-black font-bold px-5 py-3 text-sm rounded-full flex items-center justify-center gap-2 shadow-md transition-transform hover:scale-105"
              >
                <ArrowRight className="h-5 w-5 flex-shrink-0" />
                Claim This Offer
              </Button>
            </div>
          </div>
        </div>

        {/* Testimonial */}
        <div className="flex justify-center mb-4">
          <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 inline-flex items-center gap-3 border border-white/10">
            <div className="flex -space-x-2">
              {["S", "R", "A"].map((c, i) => (
                <div
                  key={i}
                  className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-xs text-white font-bold"
                >
                  {c}
                </div>
              ))}
            </div>
            <p className="text-white text-xs">
              <span className="font-bold">120+ customers</span> grabbed this deal this month!
            </p>
          </div>
        </div>

        <p className="text-blue-100 text-[10px] md:text-xs text-center max-w-md mx-auto">
          *Offer valid while stocks last. Free delivery & installation within city limits.
          5-year warranty on all furniture. EMI options available.
        </p>
      </div>
    </section>
  );
}
