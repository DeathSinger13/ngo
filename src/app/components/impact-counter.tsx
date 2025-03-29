"use client"

import { useEffect, useState } from "react"
import { Trophy, Users, Map } from "lucide-react"
import { Card, CardContent } from "./ui/card"

interface ImpactCounterProps {
  value: number
  label: string
  icon: string
}

export function ImpactCounter({ value, label, icon }: ImpactCounterProps) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const duration = 2000 // 2 seconds
    const steps = 50
    const stepValue = value / steps
    const stepTime = duration / steps
    let current = 0

    const timer = setInterval(() => {
      current += stepValue
      if (current >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, stepTime)

    return () => clearInterval(timer)
  }, [value])

  const renderIcon = () => {
    switch (icon) {
      case "Trophy":
        return <Trophy className="h-10 w-10 text-primary" />
      case "Users":
        return <Users className="h-10 w-10 text-primary" />
      case "Map":
        return <Map className="h-10 w-10 text-primary" />
      default:
        return <Trophy className="h-10 w-10 text-primary" />
    }
  }

  return (
    <Card className="hover:shadow-md transition-all duration-200 hover:border-primary/50">
      <CardContent className="p-6 flex flex-col items-center text-center">
        <div className="mb-4 p-3 rounded-full bg-primary/10">{renderIcon()}</div>
        <div className="text-3xl font-bold mb-2 text-primary">{count.toLocaleString()}</div>
        <p className="text-muted-foreground">{label}</p>
      </CardContent>
    </Card>
  )
}

