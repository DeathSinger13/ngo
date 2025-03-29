import Link from "next/link"
import { Calendar, MapPin, Users, ArrowUpRight, Edit, Trash2 } from "lucide-react"
import { Button } from "./ui/button"
import { Badge } from "./ui/badge"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu"

export function UpcomingEvents() {
  const events = [
    {
      id: 1,
      title: "Annual Charity Gala",
      date: "June 15, 2025",
      time: "7:00 PM",
      location: "Grand Hotel, New York",
      attendees: 120,
      status: "Confirmed",
    },
    {
      id: 2,
      title: "Community Cleanup Day",
      date: "July 8, 2025",
      time: "9:00 AM",
      location: "Riverside Park",
      attendees: 45,
      status: "Planning",
    },
    {
      id: 3,
      title: "Volunteer Training Workshop",
      date: "July 22, 2025",
      time: "2:00 PM",
      location: "Community Center",
      attendees: 30,
      status: "Confirmed",
    },
    {
      id: 4,
      title: "Fundraising Dinner",
      date: "August 5, 2025",
      time: "6:30 PM",
      location: "City Restaurant",
      attendees: 80,
      status: "Planning",
    },
  ]

  return (
    <div className="space-y-4">
      {events.map((event) => (
        <div key={event.id} className="p-3 md:p-4 rounded-lg border hover:shadow-sm transition-all">
          <div className="flex justify-between items-start mb-2">
            <h3 className="font-medium text-sm md:text-base">{event.title}</h3>
            <Badge
              variant={event.status === "Confirmed" ? "default" : "outline"}
              className={event.status === "Confirmed" ? "bg-green-500 hover:bg-green-600 text-xs" : "text-xs"}
            >
              {event.status}
            </Badge>
          </div>
          <div className="space-y-1 mb-3 text-xs md:text-sm">
            <div className="flex items-center text-muted-foreground">
              <Calendar className="h-3 w-3 md:h-4 md:w-4 mr-2" />
              <span>
                {event.date}, {event.time}
              </span>
            </div>
            <div className="flex items-center text-muted-foreground">
              <MapPin className="h-3 w-3 md:h-4 md:w-4 mr-2" />
              <span>{event.location}</span>
            </div>
            <div className="flex items-center text-muted-foreground">
              <Users className="h-3 w-3 md:h-4 md:w-4 mr-2" />
              <span>{event.attendees} attendees</span>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <Button size="sm" variant="outline" asChild className="text-xs">
              <Link href={`/admin/events/${event.id}/attendees`}>
                <Users className="h-3 w-3 mr-1" />
                Attendees
              </Link>
            </Button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                  <span className="sr-only">Open menu</span>
                  <ArrowUpRight className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem asChild>
                  <Link href={`/admin/events/${event.id}`} className="cursor-pointer">
                    <ArrowUpRight className="h-4 w-4 mr-2" />
                    View Details
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href={`/admin/events/${event.id}/edit`} className="cursor-pointer">
                    <Edit className="h-4 w-4 mr-2" />
                    Edit Event
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="text-red-600 focus:text-red-600 cursor-pointer">
                  <Trash2 className="h-4 w-4 mr-2" />
                  Cancel Event
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      ))}
    </div>
  )
}

