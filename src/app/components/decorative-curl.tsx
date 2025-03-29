"use client"

import { useEffect, useRef } from "react"
import { cn } from "../lib/utils"

interface DecorativeCurlProps {
  className?: string
  color?: "primary" | "secondary" | "tertiary" | "accent1" | "accent2" | "rainbow"
  size?: "sm" | "md" | "lg"
  animated?: boolean
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right"
}

export function DecorativeCurl({
  className,
  color = "primary",
  size = "md",
  animated = true,
  position = "top-right",
}: DecorativeCurlProps) {
  const svgRef = useRef<SVGSVGElement>(null)

  const sizeClasses = {
    sm: "w-24 h-24",
    md: "w-40 h-40",
    lg: "w-64 h-64",
  }

  const positionClasses = {
    "top-left": "-top-12 -left-12",
    "top-right": "-top-12 -right-12",
    "bottom-left": "-bottom-12 -left-12",
    "bottom-right": "-bottom-12 -right-12",
  }

  const colorClasses = {
    primary: "text-primary",
    secondary: "text-secondary",
    tertiary: "text-tertiary",
    accent1: "text-accent1",
    accent2: "text-accent2",
    rainbow: "text-transparent",
  }

  useEffect(() => {
    if (!svgRef.current || !animated) return

    const svg = svgRef.current
    const paths = svg.querySelectorAll("path")

    paths.forEach((path, index) => {
      const length = path.getTotalLength()

      // Set up the starting position
      path.style.strokeDasharray = `${length}`
      path.style.strokeDashoffset = `${length}`

      // Define the animation
      path.animate([{ strokeDashoffset: length }, { strokeDashoffset: 0 }], {
        duration: 1500 + index * 500,
        delay: index * 300,
        fill: "forwards",
        easing: "cubic-bezier(0.4, 0, 0.2, 1)",
      })
    })
  }, [animated])

  return (
    <div
      className={cn(
        "absolute z-0 opacity-30 pointer-events-none overflow-visible",
        positionClasses[position],
        sizeClasses[size],
        className,
      )}
    >
      <svg
        ref={svgRef}
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={cn(
          "w-full h-full",
          colorClasses[color],
          color === "rainbow" && "stroke-rainbow-gradient",
          animated && "animate-spin-slow",
        )}
      >
        {color === "rainbow" ? (
          <>
            <defs>
              <linearGradient id="curl-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="hsl(var(--primary))" />
                <stop offset="25%" stopColor="hsl(var(--secondary))" />
                <stop offset="50%" stopColor="hsl(var(--tertiary))" />
                <stop offset="75%" stopColor="hsl(var(--accent1))" />
                <stop offset="100%" stopColor="hsl(var(--accent2))" />
              </linearGradient>
            </defs>
            <path
              d="M40,90 Q60,10 150,40 Q190,60 160,120 Q140,160 80,140 Q40,120 40,90"
              stroke="url(#curl-gradient)"
              strokeWidth="3"
              fill="none"
            />
            <path
              d="M60,100 Q80,50 130,60 Q160,70 140,110 Q120,140 80,120 Q60,110 60,100"
              stroke="url(#curl-gradient)"
              strokeWidth="2"
              fill="none"
            />
            <path
              d="M80,100 Q90,70 120,80 Q140,90 130,110 Q120,130 90,120 Q80,110 80,100"
              stroke="url(#curl-gradient)"
              strokeWidth="1.5"
              fill="none"
            />
          </>
        ) : (
          <>
            <path
              d="M40,90 Q60,10 150,40 Q190,60 160,120 Q140,160 80,140 Q40,120 40,90"
              stroke="currentColor"
              strokeWidth="3"
              fill="none"
            />
            <path
              d="M60,100 Q80,50 130,60 Q160,70 140,110 Q120,140 80,120 Q60,110 60,100"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
            />
            <path
              d="M80,100 Q90,70 120,80 Q140,90 130,110 Q120,130 90,120 Q80,110 80,100"
              stroke="currentColor"
              strokeWidth="1.5"
              fill="none"
            />
          </>
        )}
      </svg>
    </div>
  )
}

