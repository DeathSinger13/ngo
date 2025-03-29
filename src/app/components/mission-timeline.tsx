import type React from "react"
import { cn } from "../lib/utils"

interface TimelineEvent {
  year: string
  title: string
  description: string
  icon: React.ReactNode
  color: string
}

interface MissionTimelineProps {
  events: TimelineEvent[]
  className?: string
}

export function MissionTimeline({ events, className }: MissionTimelineProps) {
  return (
    <div className={cn("relative", className)}>
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-muted"></div>

      <div className="space-y-12">
        {events.map((event, i) => (
          <div key={i} className="relative">
            <div className="flex items-center justify-center">
              <div
                className={`absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-${event.color}/10 flex items-center justify-center z-10`}
              >
                {event.icon}
              </div>
            </div>

            <div className={`ml-0 md:ml-${i % 2 === 0 ? "0" : "1/2"} mr-0 md:mr-${i % 2 === 0 ? "1/2" : "0"} mt-8`}>
              <div
                className={`bg-background border border-${event.color}/20 rounded-lg p-6 shadow-sm ml-0 md:ml-${i % 2 === 0 ? "1/2" : "0"} mr-0 md:mr-${i % 2 === 0 ? "0" : "1/2"}`}
              >
                <div
                  className={`inline-block px-3 py-1 rounded-full bg-${event.color}/10 text-${event.color} text-sm font-medium mb-3`}
                >
                  {event.year}
                </div>
                <h3 className="text-lg font-bold mb-2">{event.title}</h3>
                <p className="text-muted-foreground">{event.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

