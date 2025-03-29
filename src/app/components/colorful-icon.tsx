import type { ReactNode } from "react"
import { cn } from "../lib/utils"

interface ColorfulIconProps {
  icon: ReactNode
  className?: string
  size?: "sm" | "md" | "lg"
  color?: "primary" | "secondary" | "tertiary" | "accent1" | "accent2" | "rainbow"
  animated?: boolean
}

export function ColorfulIcon({ icon, className, size = "md", color = "primary", animated = false }: ColorfulIconProps) {
  const sizeClasses = {
    sm: "h-8 w-8",
    md: "h-12 w-12",
    lg: "h-16 w-16",
  }

  const iconSizes = {
    sm: "h-4 w-4",
    md: "h-6 w-6",
    lg: "h-8 w-8",
  }

  const colorClasses = {
    primary: "bg-primary text-primary-foreground",
    secondary: "bg-secondary text-secondary-foreground",
    tertiary: "bg-tertiary text-tertiary-foreground",
    accent1: "bg-accent1 text-accent1-foreground",
    accent2: "bg-accent2 text-accent2-foreground",
    rainbow: "colorful-gradient text-white",
  }

  return (
    <div className="relative">
      <div
        className={cn(
          "relative flex items-center justify-center rounded-full",
          sizeClasses[size],
          colorClasses[color],
          animated && "animate-bounce-gentle",
          className,
        )}
      >
        <div className={cn(iconSizes[size])}>{icon}</div>
      </div>
      <div
        className={cn(
          "absolute -inset-1 rounded-full opacity-30 blur-sm",
          colorClasses[color],
          animated && "animate-pulse-gentle",
        )}
      />
    </div>
  )
}

