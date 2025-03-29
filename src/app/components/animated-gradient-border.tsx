"use client"

import type { ReactNode } from "react"
import { cn } from "../lib/utils"

interface AnimatedGradientBorderProps {
  children: ReactNode
  className?: string
  containerClassName?: string
  gradientClassName?: string
  rainbow?: boolean
}

export function AnimatedGradientBorder({
  children,
  className,
  containerClassName,
  gradientClassName,
  rainbow = false,
}: AnimatedGradientBorderProps) {
  return (
    <div className={cn("relative rounded-xl p-[1px] overflow-hidden", containerClassName)}>
      <div
        className={cn(
          rainbow
            ? "absolute inset-0 bg-rainbow-gradient opacity-75 animate-rainbow bg-[length:400%_400%]"
            : "absolute inset-0 bg-gradient-to-r from-primary via-secondary to-primary opacity-75 animate-[spin_4s_linear_infinite]",
          gradientClassName,
        )}
      />
      <div className={cn("relative rounded-[calc(0.75rem-1px)] bg-background z-10", className)}>{children}</div>
    </div>
  )
}

