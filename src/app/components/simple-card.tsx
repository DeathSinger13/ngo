import type { ReactNode } from "react"
import { cn } from "../lib/utils"

interface SimpleCardProps {
  children: ReactNode
  className?: string
  color?: "primary" | "secondary" | "tertiary" | "accent1" | "accent2" | "none"
}

export function SimpleCard({ children, className, color = "none" }: SimpleCardProps) {
  return (
    <div
      className={cn(
        "rounded-xl border p-4 shadow-sm",
        color !== "none" && `colored-card colored-card-${color}`,
        className,
      )}
    >
      {children}
    </div>
  )
}

