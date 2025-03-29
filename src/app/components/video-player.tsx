"use client"

import { useState } from "react"
import Image from "next/image"
import { Play, Pause, Volume2, VolumeX } from "lucide-react"
import { Card, CardContent } from "./ui/card"
import { Button } from "./ui/button"
import { Slider } from "./ui/slider"

interface VideoPlayerProps {
  title: string
  description: string
  thumbnail: string
  duration: string
}

export function VideoPlayer({ title, description, thumbnail, duration }: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)

  const togglePlay = () => {
    setIsPlaying(!isPlaying)
  }

  const toggleMute = () => {
    setIsMuted(!isMuted)
  }

  return (
    <Card className="overflow-hidden">
      <div className="relative aspect-video group cursor-pointer" onClick={togglePlay}>
        <Image src={thumbnail || "/placeholder.svg"} alt={title} fill className="object-cover" />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/40 transition-colors">
          <Button size="icon" className="rounded-full bg-primary/90 hover:bg-primary h-12 w-12">
            <Play className="h-6 w-6" />
            <span className="sr-only">Play video</span>
          </Button>
        </div>
        <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-xs">{duration}</div>

        {isPlaying && (
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="flex items-center gap-2 mb-2">
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 text-white hover:bg-white/20"
                onClick={(e) => {
                  e.stopPropagation()
                  togglePlay()
                }}
              >
                {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                <span className="sr-only">{isPlaying ? "Pause" : "Play"}</span>
              </Button>

              <div className="flex-1 mx-2">
                <Slider defaultValue={[0]} max={100} step={1} className="h-1" />
              </div>

              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 text-white hover:bg-white/20"
                onClick={(e) => {
                  e.stopPropagation()
                  toggleMute()
                }}
              >
                {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
                <span className="sr-only">{isMuted ? "Unmute" : "Mute"}</span>
              </Button>
            </div>
          </div>
        )}
      </div>
      <CardContent className="p-4">
        <h3 className="font-bold mb-1">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  )
}

