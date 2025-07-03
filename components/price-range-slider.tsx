"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Slider } from "@/components/ui/slider"
import { Input } from "@/components/ui/input"

interface PriceRangeSliderProps {
  min: number
  max: number
  step?: number
  defaultValue?: [number, number]
  onChange?: (value: [number, number]) => void
}

export function PriceRangeSlider({
  min,
  max,
  step = 1000,
  defaultValue = [min, max],
  onChange,
}: PriceRangeSliderProps) {
  // Use a ref to track if this is the initial render
  const isInitialMount = useRef(true)
  const isUpdatingFromProps = useRef(false)

  // Internal state for the range values
  const [range, setRange] = useState<[number, number]>(defaultValue)

  // Format price in Indian Rupees
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(price)
  }

  // Handle slider change - only update parent on user interaction
  const handleSliderChange = (value: number[]) => {
    if (isUpdatingFromProps.current) return

    const newRange: [number, number] = [value[0], value[1]]
    setRange(newRange)

    // Only call onChange if this isn't the initial setup
    if (!isInitialMount.current) {
      onChange?.(newRange)
    }
  }

  // Handle min input change
  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (isUpdatingFromProps.current) return

    const value = Number.parseInt(e.target.value) || min
    const newMin = Math.max(min, Math.min(value, range[1] - step))
    const newRange: [number, number] = [newMin, range[1]]
    setRange(newRange)
    onChange?.(newRange)
  }

  // Handle max input change
  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (isUpdatingFromProps.current) return

    const value = Number.parseInt(e.target.value) || max
    const newMax = Math.min(max, Math.max(value, range[0] + step))
    const newRange: [number, number] = [range[0], newMax]
    setRange(newRange)
    onChange?.(newRange)
  }

  // Initialize with default values and update when props change
  useEffect(() => {
    // Mark that we're updating from props to prevent loops
    isUpdatingFromProps.current = true

    // Check if the default values are different from current range
    const isDifferent = Math.abs(defaultValue[0] - range[0]) > 0.1 || Math.abs(defaultValue[1] - range[1]) > 0.1

    if (isDifferent) {
      setRange(defaultValue)
    }

    // After first mount, we're no longer in initial mount state
    if (isInitialMount.current) {
      isInitialMount.current = false
    }

    // Reset the updating flag after the state update is processed
    setTimeout(() => {
      isUpdatingFromProps.current = false
    }, 0)
  }, [defaultValue, min, max])

  return (
    <div className="space-y-4">
      <Slider min={min} max={max} step={step} value={range} onValueChange={handleSliderChange} className="my-6" />
      <div className="flex items-center gap-2">
        <div className="flex-1">
          <label htmlFor="min-price" className="block text-xs font-medium text-muted-foreground mb-1">
            Min
          </label>
          <Input
            id="min-price"
            type="number"
            min={min}
            max={range[1] - step}
            value={range[0]}
            onChange={handleMinChange}
            className="h-8 text-xs"
          />
        </div>
        <span className="text-muted-foreground mt-5">-</span>
        <div className="flex-1">
          <label htmlFor="max-price" className="block text-xs font-medium text-muted-foreground mb-1">
            Max
          </label>
          <Input
            id="max-price"
            type="number"
            min={range[0] + step}
            max={max}
            value={range[1]}
            onChange={handleMaxChange}
            className="h-8 text-xs"
          />
        </div>
      </div>
      <p className="text-xs text-muted-foreground mt-2">
        Price: {formatPrice(range[0])} - {formatPrice(range[1])}
      </p>
    </div>
  )
}
