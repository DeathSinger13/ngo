import Image from "next/image"
import { Card, CardContent } from "./ui/card"
import { CheckCircle, AlertTriangle, Info, Flag } from "lucide-react"

interface Update {
  date: string
  title: string
  description: string
  image?: string
  type: "success" | "challenge" | "update" | "milestone"
}

interface MissionUpdatesProps {
  updates: Update[]
}

export function MissionUpdates({ updates }: MissionUpdatesProps) {
  return (
    <div className="space-y-6">
      {updates.map((update, i) => (
        <Card
          key={i}
          className={`border-l-4 ${update.type === "success"
              ? "border-l-green-500"
              : update.type === "challenge"
                ? "border-l-red-500"
                : update.type === "milestone"
                  ? "border-l-primary"
                  : "border-l-blue-500"
            } card-hover`}
        >
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-6">
              {update.image && (
                <div className="md:w-1/3">
                  <div className="relative aspect-video rounded-lg overflow-hidden">
                    <Image src={update.image || "/placeholder.svg"} alt={update.title} fill className="object-cover" />
                  </div>
                </div>
              )}
              <div className={update.image ? "md:w-2/3" : "w-full"}>
                <div className="flex items-center gap-2 mb-2">
                  <div
                    className={`p-1 rounded-full ${update.type === "success"
                        ? "bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-300"
                        : update.type === "challenge"
                          ? "bg-red-100 text-red-600 dark:bg-red-900 dark:text-red-300"
                          : update.type === "milestone"
                            ? "bg-primary/10 text-primary"
                            : "bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300"
                      }`}
                  >
                    {update.type === "success" ? (
                      <CheckCircle className="h-4 w-4" />
                    ) : update.type === "challenge" ? (
                      <AlertTriangle className="h-4 w-4" />
                    ) : update.type === "milestone" ? (
                      <Flag className="h-4 w-4" />
                    ) : (
                      <Info className="h-4 w-4" />
                    )}
                  </div>
                  <span className="text-sm text-muted-foreground">{update.date}</span>
                </div>
                <h3 className="text-lg font-bold mb-2">{update.title}</h3>
                <p className="text-muted-foreground">{update.description}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

