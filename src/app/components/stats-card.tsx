import type React from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Card, CardContent } from "./ui/card"

interface StatsCardProps {
  title: string
  value: string | number
  description: string
  icon: React.ReactNode
  link: string
}

export function StatsCard({ title, description, icon, link }: StatsCardProps) {
  return (
    <Card className="group hover:shadow-md transition-all duration-200 hover:border-primary/50">
      <CardContent className="p-6 flex flex-col items-center text-center">
        <div className="mb-4 p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">{icon}</div>
        <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
        <Link href={link} className="text-primary font-medium flex items-center hover:underline">
          Learn more <ArrowRight className="ml-1 h-4 w-4" />
        </Link>
      </CardContent>
    </Card>
  )
}

