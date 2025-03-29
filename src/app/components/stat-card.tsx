import type { ReactNode } from "react"
import { cn } from "../lib/utils"
import { Card, CardContent } from "./ui/card"

interface StatCardProps {
  icon: ReactNode
  value: string | number
  label: string
  trend?: {
    value: string
    positive?: boolean
  }
  className?: string
}

export function StatCard({ icon, value, label, trend, className }: StatCardProps) {
  return (
    <Card className={cn("overflow-hidden border-none", className)}>
      <CardContent className="stat-card flex items-start p-6">
        <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
          {icon}
        </div>
        <div>
          <div className="text-2xl font-bold">{value}</div>
          <p className="text-sm text-muted-foreground">{label}</p>
          {trend && (
            <p
              className={cn(
                "text-xs mt-1",
                trend.positive ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400",
              )}
            >
              {trend.positive ? "↑" : "↓"} {trend.value}
            </p>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

