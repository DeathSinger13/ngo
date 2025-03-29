import type { ReactNode } from "react"
import { cn } from "../lib/utils"

interface ColoredIconProps {
  icon: ReactNode
  className?: string
  size?: "sm" | "md" | "lg"
  color?: "primary" | "secondary" | "tertiary" | "accent1" | "accent2"
}

export function ColoredIcon({ icon, className, size = "md", color = "primary" }: ColoredIconProps) {
  const sizeClasses = {
    sm: "h-8 w-8 p-1.5",
    md: "h-10 w-10 p-2",
    lg: "h-12 w-12 p-2.5",
  }

  return <div className={cn("colored-icon", `colored-icon-${color}`, sizeClasses[size], className)}>{icon}</div>
}

