import type { ReactNode } from "react"
import { cn } from "../lib/utils"

interface PageHeaderProps {
  title: string
  description?: string
  action?: ReactNode
  className?: string
  gradient?: boolean
}

export function PageHeader({ title, description, action, className, gradient = false }: PageHeaderProps) {
  return (
    <div className={cn("flex flex-col gap-4 mb-6 md:mb-8", className)}>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className={cn("text-2xl md:text-3xl font-bold tracking-tight", gradient && "gradient-heading")}>
            {title}
          </h1>
          {description && <p className="text-muted-foreground mt-1 max-w-2xl text-sm md:text-base">{description}</p>}
        </div>
        {action && <div className="shrink-0">{action}</div>}
      </div>
    </div>
  )
}

