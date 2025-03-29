import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardFooter } from "./ui/card"
import { Badge } from "./ui/badge"
import { Progress } from "./ui/progress"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  slug: string
  category: string
  progress: number
  goal: number | string
  raised: number | string
}


export function ProjectCard({ title, description, image, category, progress }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden transition-all duration-200 hover:shadow-lg group">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <Badge className="absolute top-3 right-3 bg-primary/90 hover:bg-primary">{category}</Badge>
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Progress</span>
            <span className="font-medium">{progress}%</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>
      </CardContent>
      <CardFooter className="px-6 pb-6 pt-0">
        <Link
          href={`/projects/${title.toLowerCase().replace(/\s+/g, "-")}`}
          className="text-primary font-medium hover:underline"
        >
          Learn more
        </Link>
      </CardFooter>
    </Card>
  )
}

