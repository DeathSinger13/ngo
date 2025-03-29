"use client"

import { useState, useEffect } from "react"
import { Button } from "./ui/button"
import { ArrowUp } from "lucide-react"
import { cn } from "../lib/utils"

interface BackToTopProps {
  threshold?: number
  className?: string
  smooth?: boolean
}

export function BackToTop({ threshold = 300, className, smooth = true }: BackToTopProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  // Handle hydration
  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (!isMounted) return

    const toggleVisibility = () => {
      setIsVisible(window.pageYOffset > threshold)
    }

    // Set initial visibility
    toggleVisibility()

    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [threshold, isMounted])

  const scrollToTop = () => {
    if (!isMounted) return

    if (smooth) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    } else {
      window.scrollTo(0, 0)
    }
  }

  // Don't render anything during SSR
  if (!isMounted) return null

  return (
    <Button
      variant="outline"
      size="icon"
      className={cn(
        "fixed bottom-6 right-6 z-50 h-10 w-10 rounded-full shadow-md transition-opacity duration-300",
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none",
        className,
      )}
      onClick={scrollToTop}
      aria-label="Back to top"
    >
      <ArrowUp className="h-5 w-5" />
    </Button>
  )
}

