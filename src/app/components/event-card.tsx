import Image from "next/image"
import Link from "next/link"
import { Calendar, MapPin } from "lucide-react"
import { Card, CardContent } from "./ui/card"
import { Button } from "./ui/button"

interface EventCardProps {
  title: string
  date: string
  location: string
  image: string
}

export function EventCard({ title, date, location, image }: EventCardProps) {
  return (
    <Card className="overflow-hidden group hover:shadow-lg transition-all duration-200">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="relative h-full min-h-[200px] md:col-span-1">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <CardContent className="p-6 md:col-span-2 flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{title}</h3>
            <div className="flex items-center text-muted-foreground mb-2">
              <Calendar className="h-4 w-4 mr-2" />
              <span>{date}</span>
            </div>
            <div className="flex items-center text-muted-foreground mb-4">
              <MapPin className="h-4 w-4 mr-2" />
              <span>{location}</span>
            </div>
          </div>
          <div className="flex gap-3 mt-2">
            <Button size="sm" asChild>
              <Link href={`/events/${title.toLowerCase().replace(/\s+/g, "-")}`}>Register</Link>
            </Button>
            <Button size="sm" variant="outline" asChild>
              <Link href={`/events/${title.toLowerCase().replace(/\s+/g, "-")}`}>Learn More</Link>
            </Button>
          </div>
        </CardContent>
      </div>
    </Card>
  )
}

