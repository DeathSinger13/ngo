import Image from "next/image"
import { cn } from "../lib/utils"

interface MissionTestimonialProps {
  quote: string
  name: string
  location: string
  image: string
  color: string
  className?: string
}

export function MissionTestimonial({
  quote,
  name,
  location,
  image,
  color = "primary",
  className,
}: MissionTestimonialProps) {
  return (
    <div className={cn(`bg-background border border-${color}/20 rounded-xl p-6 shadow-sm`, className)}>
      <div className={`text-${color} text-4xl font-serif leading-none mb-4`}>"</div>
      <blockquote className="text-lg italic mb-6">{quote}</blockquote>
      <div className="flex items-center gap-4">
        <div className="relative h-12 w-12 rounded-full overflow-hidden">
          <Image src={image || "/placeholder.svg"} alt={name} fill className="object-cover" />
        </div>
        <div>
          <div className="font-medium">{name}</div>
          <div className="text-sm text-muted-foreground">{location}</div>
        </div>
      </div>
    </div>
  )
}

