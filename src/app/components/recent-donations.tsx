import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { Badge } from "./ui/badge"
import { Button } from "./ui/button"
import Link from "next/link"
import { ArrowUpRight, Check, X } from "lucide-react"

export function RecentDonations() {
  const donations = [
    {
      id: 1,
      name: "Sarah Johnson",
      amount: 250,
      project: "Clean Water Initiative",
      date: "2 hours ago",
      recurring: true,
      status: "completed",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 2,
      name: "Michael Chen",
      amount: 100,
      project: "Education for All",
      date: "5 hours ago",
      recurring: false,
      status: "completed",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      amount: 500,
      project: "Healthcare Access",
      date: "Yesterday",
      recurring: true,
      status: "pending",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 4,
      name: "David Kim",
      amount: 75,
      project: "General Fund",
      date: "Yesterday",
      recurring: false,
      status: "completed",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 5,
      name: "Anonymous",
      amount: 1000,
      project: "Clean Water Initiative",
      date: "2 days ago",
      recurring: false,
      status: "failed",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  ]

  return (
    <div className="space-y-4">
      {donations.map((donation) => (
        <div
          key={donation.id}
          className="flex items-center justify-between p-3 rounded-lg hover:bg-muted/50 transition-colors"
        >
          <div className="flex items-center gap-3">
            <Avatar className="h-8 w-8 md:h-10 md:w-10">
              <AvatarImage src={donation.avatar} alt={donation.name} />
              <AvatarFallback>
                {donation.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <div>
              <div className="font-medium text-sm md:text-base">{donation.name}</div>
              <div className="text-xs md:text-sm text-muted-foreground">{donation.project}</div>
            </div>
          </div>
          <div className="text-right">
            <div className="font-medium text-primary text-sm md:text-base">${donation.amount}</div>
            <div className="flex items-center gap-2 justify-end">
              <span className="text-xs text-muted-foreground">{donation.date}</span>
              {donation.recurring && (
                <Badge variant="outline" className="text-xs bg-primary/10 hover:bg-primary/20 border-primary/20">
                  Recurring
                </Badge>
              )}
              {donation.status === "pending" && (
                <Badge
                  variant="outline"
                  className="text-xs bg-amber-500/10 hover:bg-amber-500/20 border-amber-500/20 text-amber-500"
                >
                  Pending
                </Badge>
              )}
              {donation.status === "failed" && (
                <Badge
                  variant="outline"
                  className="text-xs bg-red-500/10 hover:bg-red-500/20 border-red-500/20 text-red-500"
                >
                  Failed
                </Badge>
              )}
            </div>
          </div>
          <div className="ml-2 flex gap-1">
            {donation.status === "pending" && (
              <>
                <Button
                  size="icon"
                  variant="ghost"
                  className="h-7 w-7 rounded-full text-green-600 hover:text-green-700 hover:bg-green-100"
                >
                  <Check className="h-4 w-4" />
                  <span className="sr-only">Approve</span>
                </Button>
                <Button
                  size="icon"
                  variant="ghost"
                  className="h-7 w-7 rounded-full text-red-600 hover:text-red-700 hover:bg-red-100"
                >
                  <X className="h-4 w-4" />
                  <span className="sr-only">Reject</span>
                </Button>
              </>
            )}
            <Button size="icon" variant="ghost" className="h-7 w-7 rounded-full" asChild>
              <Link href={`/admin/donations/${donation.id}`}>
                <ArrowUpRight className="h-4 w-4" />
                <span className="sr-only">View</span>
              </Link>
            </Button>
          </div>
        </div>
      ))}
    </div>
  )
}

