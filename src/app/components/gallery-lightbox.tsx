"use client"

import { useState } from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight, Download, Share2 } from "lucide-react"
import { Button } from "./ui/button"
import { Badge } from "./ui/badge"

interface GalleryLightboxProps {
  index: number
  src: string
  alt: string
  category: string
}

export function GalleryLightbox({ index, src, alt, category }: GalleryLightboxProps) {
  const [isOpen, setIsOpen] = useState(false)

  const openLightbox = () => {
    setIsOpen(true)
    document.body.style.overflow = "hidden"
  }

  const closeLightbox = () => {
    setIsOpen(false)
    document.body.style.overflow = "auto"
  }

  return (
    <>
      <div className="relative overflow-hidden rounded-md cursor-pointer group aspect-square" onClick={openLightbox}>
        <Image
          src={src || "/placeholder.svg"}
          alt={alt}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
        <Badge className="absolute top-2 right-2 bg-background/80 text-foreground hover:bg-background">
          {category}
        </Badge>
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="relative w-full max-w-5xl">
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-0 right-0 z-10 rounded-full bg-background/50 hover:bg-background/80"
              onClick={closeLightbox}
            >
              <X className="h-5 w-5" />
              <span className="sr-only">Close</span>
            </Button>

            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <Image src={src || "/placeholder.svg"} alt={alt} fill className="object-contain" />
            </div>

            <div className="flex items-center justify-between mt-4">
              <div>
                <h3 className="font-medium">{alt}</h3>
                <p className="text-sm text-muted-foreground">{category}</p>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="icon">
                  <Download className="h-4 w-4" />
                  <span className="sr-only">Download</span>
                </Button>
                <Button variant="outline" size="icon">
                  <Share2 className="h-4 w-4" />
                  <span className="sr-only">Share</span>
                </Button>
              </div>
            </div>

            <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-12">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-background/50 hover:bg-background/80"
                onClick={(e) => {
                  e.stopPropagation()
                  // Previous image logic would go here
                }}
              >
                <ChevronLeft className="h-6 w-6" />
                <span className="sr-only">Previous</span>
              </Button>
            </div>

            <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-12">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-background/50 hover:bg-background/80"
                onClick={(e) => {
                  e.stopPropagation()
                  // Next image logic would go here
                }}
              >
                <ChevronRight className="h-6 w-6" />
                <span className="sr-only">Next</span>
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

