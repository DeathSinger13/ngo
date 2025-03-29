"use client"

import { useEffect, useRef } from "react"
import { cn } from "../lib/utils"

interface BlobBackgroundProps {
  className?: string
  blobCount?: number
  colors?: string[]
  animated?: boolean
}

export function BlobBackground({
  className,
  blobCount = 5,
  colors = ["primary", "secondary", "tertiary", "accent1", "accent2"],
  animated = true,
}: BlobBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const container = containerRef.current
    container.innerHTML = ""

    for (let i = 0; i < blobCount; i++) {
      const blob = document.createElement("div")

      // Random size between 100px and 300px
      const size = 100 + Math.random() * 200

      // Random position
      const left = Math.random() * 100
      const top = Math.random() * 100

      // Random color from the colors array
      const colorClass = `bg-${colors[i % colors.length]}/10`

      // Set styles
      blob.className = cn("absolute rounded-full blur-3xl", colorClass, animated && "animate-blob")

      blob.style.width = `${size}px`
      blob.style.height = `${size}px`
      blob.style.left = `${left}%`
      blob.style.top = `${top}%`

      // Random animation delay if animated
      if (animated) {
        blob.style.animationDelay = `${Math.random() * 10}s`
        blob.style.animationDuration = `${20 + Math.random() * 20}s`
      }

      container.appendChild(blob)
    }
  }, [blobCount, colors, animated])

  return (
    <div ref={containerRef} className={cn("absolute inset-0 overflow-hidden pointer-events-none z-0", className)} />
  )
}

