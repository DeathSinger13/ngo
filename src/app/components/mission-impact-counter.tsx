"use client"

import { useState, useEffect, useRef } from "react"
import { cn } from "../lib/utils"
import { School, Users, GraduationCap, MapPin, Ambulance, Stethoscope, Droplet, Leaf, Heart } from "lucide-react"

interface MissionImpactCounterProps {
  value: number
  label: string
  icon: string
  color: string
  className?: string
}

export function MissionImpactCounter({ value, label, icon, color = "primary", className }: MissionImpactCounterProps) {
  const [count, setCount] = useState(0)
  const countRef = useRef<HTMLDivElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true
            animateCount()
          }
        })
      },
      { threshold: 0.1 },
    )

    if (countRef.current) {
      observer.observe(countRef.current)
    }

    return () => {
      if (countRef.current) {
        observer.unobserve(countRef.current)
      }
    }
  }, [])

  const animateCount = () => {
    const duration = 2000 // ms
    const steps = 60
    const stepValue = value / steps
    const stepTime = duration / steps
    let currentStep = 0

    const timer = setInterval(() => {
      currentStep += 1
      const nextCount = Math.round(Math.min(stepValue * currentStep, value))
      setCount(nextCount)

      if (currentStep >= steps) {
        clearInterval(timer)
      }
    }, stepTime)
  }

  const renderIcon = () => {
    const iconProps = { className: `h-6 w-6 text-${color}` }

    switch (icon) {
      case "School":
        return <School {...iconProps} />
      case "Users":
        return <Users {...iconProps} />
      case "GraduationCap":
        return <GraduationCap {...iconProps} />
      case "MapPin":
        return <MapPin {...iconProps} />
      case "Ambulance":
        return <Ambulance {...iconProps} />
      case "Stethoscope":
        return <Stethoscope {...iconProps} />
      case "Droplet":
        return <Droplet {...iconProps} />
      case "Leaf":
        return <Leaf {...iconProps} />
      case "Heart":
        return <Heart {...iconProps} />
      default:
        return <Heart {...iconProps} />
    }
  }

  const formattedCount = count >= 1000 ? `${(count / 1000).toFixed(1)}k+` : count

  return (
    <div
      ref={countRef}
      className={cn("flex flex-col items-center text-center p-6 bg-background rounded-xl shadow-sm", className)}
    >
      <div className={`colored-icon colored-icon-${color} p-3 mb-4`}>{renderIcon()}</div>
      <div className={`text-3xl md:text-4xl font-bold text-${color}`}>{formattedCount}</div>
      <div className="text-sm text-muted-foreground mt-1">{label}</div>
    </div>
  )
}

