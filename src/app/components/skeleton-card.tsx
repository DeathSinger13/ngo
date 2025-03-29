import { Skeleton } from "./ui/skeleton"
import { cn } from "../lib/utils"

interface SkeletonCardProps {
  className?: string
  imageHeight?: number
  hasImage?: boolean
  hasFooter?: boolean
  hasAction?: boolean
}

export function SkeletonCard({
  className,
  imageHeight = 200,
  hasImage = true,
  hasFooter = true,
  hasAction = false,
}: SkeletonCardProps) {
  return (
    <div className={cn("rounded-lg border bg-card p-4 shadow-sm", className)}>
      {hasImage && (
        <div className="mb-4">
          <Skeleton className="h-[200px] w-full rounded-md" style={{ height: `${imageHeight}px` }} />
        </div>
      )}
      <div className="space-y-3">
        <Skeleton className="h-5 w-2/3" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-3/4" />
      </div>
      {hasFooter && (
        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Skeleton className="h-8 w-8 rounded-full" />
            <Skeleton className="h-4 w-24" />
          </div>
          {hasAction && <Skeleton className="h-9 w-20 rounded-md" />}
        </div>
      )}
    </div>
  )
}

