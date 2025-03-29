"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { ModernHeader } from "./modern-header"
import { ModernFooter } from "./modern-footer"
import { BackToTop } from "./back-to-top"

interface SiteLayoutProps {
  children: React.ReactNode
  hideHeader?: boolean
  hideFooter?: boolean
  isAdmin?: boolean
}

export function SiteLayout({ children, hideHeader, hideFooter, isAdmin }: SiteLayoutProps) {
  const [mounted, setMounted] = useState(false)

  // Ensure hydration completes before rendering to prevent layout shifts
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="flex min-h-screen flex-col">
        {!hideHeader && <ModernHeader />}
        <main className="flex-1">{children}</main>
        {!hideFooter && <ModernFooter />}
      </div>
    )
  }

  return (
    <div className="flex min-h-screen flex-col">
      {!hideHeader && <ModernHeader />}
      <main className="flex-1">{children}</main>
      {!hideFooter && <ModernFooter />}
      <BackToTop />
    </div>
  )
}

