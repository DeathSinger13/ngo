"use client"

import { useEffect, useState } from "react"
import { cn } from "../lib/utils"
import type { JSX } from "react"

interface ConfettiBackgroundProps {
  className?: string
  density?: number
  colors?: string[]
}

export function ConfettiBackground({
  className,
  density = 50,
  colors = ["#10b981", "#3b82f6", "#8b5cf6", "#ec4899", "#f59e0b"],
}: ConfettiBackgroundProps) {
  const [confetti, setConfetti] = useState<JSX.Element[]>([])

  useEffect(() => {
    const items = []
    for (let i = 0; i < density; i++) {
      const size = Math.random() * 10 + 5
      const color = colors[Math.floor(Math.random() * colors.length)]
      const left = `${Math.random() * 100}%`
      const top = `${Math.random() * 100}%`
      const animationDelay = `${Math.random() * 5}s`
      const animationDuration = `${Math.random() * 10 + 10}s`

      items.push(
        <div
          key={i}
          className="absolute rounded-full animate-float"
          style={{
            width: size,
            height: size,
            backgroundColor: color,
            left,
            top,
            opacity: 0.6,
            animationDelay,
            animationDuration,
          }}
        />,
      )
    }
    setConfetti(items)
  }, [density, colors])

  return <div className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}>{confetti}</div>
}

