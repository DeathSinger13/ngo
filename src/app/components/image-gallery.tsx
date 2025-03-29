"use client"

import { useState } from "react"
import Image from "next/image"
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog"
import { Button } from "./ui/button"
import { ChevronLeft, ChevronRight, X, Maximize2 } from "lucide-react"
import { cn } from "../lib/utils"

interface ImageGalleryProps {
  images: {
    src: string
    alt: string
    caption?: string
  }[]
  className?: string
  columns?: 1 | 2 | 3 | 4
  aspectRatio?: "square" | "video" | "wide" | "auto"
  lightbox?: boolean
}

export function ImageGallery({
  images,
  className,
  columns = 3,
  aspectRatio = "square",
  lightbox = true,
}: ImageGalleryProps) {
  const [currentImage, setCurrentImage] = useState(0)
  const [isOpen, setIsOpen] = useState(false)

  const handlePrevious = () => {
    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  const getAspectRatioClass = () => {
    switch (aspectRatio) {
      case "square":
        return "aspect-square"
      case "video":
        return "aspect-video"
      case "wide":
        return "aspect-[2/1]"
      case "auto":
        return "aspect-auto"
      default:
        return "aspect-square"
    }
  }

  const getGridClass = () => {
    switch (columns) {
      case 1:
        return "grid-cols-1"
      case 2:
        return "grid-cols-1 sm:grid-cols-2"
      case 3:
        return "grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
      case 4:
        return "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
      default:
        return "grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
    }
  }

  return (
    <div className={cn("space-y-4", className)}>
      <div className={cn("grid gap-4", getGridClass())}>
        {images.map((image, index) => (
          <div
            key={index}
            className={cn("group relative overflow-hidden rounded-lg border bg-muted/20", getAspectRatioClass())}
          >
            <Image
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              fill
              className="object-cover transition-all group-hover:scale-105"
            />
            {lightbox && (
              <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:bg-black/40 group-hover:opacity-100">
                <Dialog
                  open={isOpen && currentImage === index}
                  onOpenChange={(open) => {
                    setIsOpen(open)
                    if (open) setCurrentImage(index)
                  }}
                >
                  <DialogTrigger asChild>
                    <Button
                      variant="secondary"
                      size="icon"
                      className="h-9 w-9 rounded-full"
                      onClick={() => {
                        setCurrentImage(index)
                        setIsOpen(true)
                      }}
                    >
                      <Maximize2 className="h-4 w-4" />
                      <span className="sr-only">View image</span>
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl p-0 border-none bg-transparent">
                    <div className="relative flex items-center justify-center">
                      <div className="relative overflow-hidden rounded-lg bg-muted/20">
                        <Image
                          src={images[currentImage].src || "/placeholder.svg"}
                          alt={images[currentImage].alt}
                          width={800}
                          height={600}
                          className="object-contain"
                        />
                        {images[currentImage].caption && (
                          <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-3 text-center text-white">
                            {images[currentImage].caption}
                          </div>
                        )}
                      </div>
                      <Button
                        variant="secondary"
                        size="icon"
                        className="absolute left-2 h-9 w-9 rounded-full"
                        onClick={handlePrevious}
                      >
                        <ChevronLeft className="h-4 w-4" />
                        <span className="sr-only">Previous image</span>
                      </Button>
                      <Button
                        variant="secondary"
                        size="icon"
                        className="absolute right-2 h-9 w-9 rounded-full"
                        onClick={handleNext}
                      >
                        <ChevronRight className="h-4 w-4" />
                        <span className="sr-only">Next image</span>
                      </Button>
                      <Button
                        variant="secondary"
                        size="icon"
                        className="absolute right-2 top-2 h-9 w-9 rounded-full"
                        onClick={() => setIsOpen(false)}
                      >
                        <X className="h-4 w-4" />
                        <span className="sr-only">Close</span>
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

