import Image from "next/image"
import Link from "next/link"
import { Button } from "./ui/button"
import { MapPin, Calendar, ArrowRight } from "lucide-react"
import { cn } from "../lib/utils"

interface MissionCardProps {
  title: string
  location: string
  description: string
  image: string
  category: string
  progress: number
  target: string
  raised: string
  deadline: string
  color: "primary" | "secondary" | "tertiary" | "accent1" | "accent2"
  href: string
  className?: string
}

export function MissionCard({
  title,
  location,
  description,
  image,
  category,
  progress,
  target,
  raised,
  deadline,
  color = "primary",
  href,
  className,
}: MissionCardProps) {
  return (
    <div className={cn(`colored-card colored-card-${color} rounded-xl overflow-hidden card-hover`, className)}>
      <div className="relative h-48 overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div
          className={`absolute top-3 right-3 bg-${color} text-${color}-foreground px-3 py-1 rounded-full text-xs font-medium`}
        >
          {category}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
          <MapPin className="h-4 w-4" />
          <span>{location}</span>
        </div>
        <p className="text-muted-foreground mb-4 line-clamp-2">{description}</p>
        <div className="space-y-2 mb-4">
          <div className="flex justify-between text-sm">
            <span>Progress</span>
            <span className="font-medium">{progress}%</span>
          </div>
          <div className="h-2 w-full bg-background rounded-full overflow-hidden">
            <div className={`h-full bg-${color} rounded-full`} style={{ width: `${progress}%` }}></div>
          </div>
          <div className="flex justify-between text-sm">
            <span>{raised} raised</span>
            <span>Goal: {target}</span>
          </div>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
          <Calendar className="h-4 w-4" />
          <span>Deadline: {deadline}</span>
        </div>
        <Button variant="ghost" className={`p-0 text-${color} hover:text-${color}/90`} asChild>
          <Link href={href} className="flex items-center">
            Learn more <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  )
}

