import { Suspense } from "react"
import Link from "next/link"
import Image from "next/image"
import { SiteLayout } from "../components/site-layout"
import { PageHeader } from "../components/page-header"
import { Button } from "../components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/ui/card"
import { Badge } from "../components/ui/badge"
import { FilterBar } from "../components/filter-bar"
import { SkeletonCard } from "../components/skeleton-card"
import { Calendar, Clock, MapPin } from "lucide-react"
import { formatDate } from "../lib/utils"
import { getEvents } from "../lib/api"

export const metadata = {
  title: "Events | HopeWorks NGO",
  description: "Join us at our upcoming events and fundraisers to support our mission.",
}

export default async function EventsPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const events = await getEvents()

  // Filter events based on search params
  const filteredEvents = events.filter((event) => {
    // Filter by search query
    if (
      searchParams.q &&
      !event.title.toLowerCase().includes((searchParams.q as string).toLowerCase()) &&
      !event.description.toLowerCase().includes((searchParams.q as string).toLowerCase())
    ) {
      return false
    }

    // Filter by category
    if (searchParams.category && event.category !== searchParams.category) {
      return false
    }

    // Filter by location
    if (searchParams.location && event.location !== searchParams.location) {
      return false
    }

    // Filter by tags
    if (searchParams.tags) {
      const tagList = (searchParams.tags as string).split(",")
      if (!event.tags?.some((tag) => tagList.includes(tag))) {
        return false
      }
    }

    return true
  })

  // Sort events
  const sortedEvents = [...filteredEvents]
  if (searchParams.sort) {
    switch (searchParams.sort) {
      case "newest":
        sortedEvents.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
        break
      case "oldest":
        sortedEvents.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
        break
      case "name_asc":
        sortedEvents.sort((a, b) => a.title.localeCompare(b.title))
        break
      case "name_desc":
        sortedEvents.sort((a, b) => b.title.localeCompare(a.title))
        break
    }
  }

  const categories = [
    { id: "fundraising", label: "Fundraising" },
    { id: "conference", label: "Conference" },
    { id: "training", label: "Training" },
    { id: "community", label: "Community" },
    { id: "virtual", label: "Virtual" },
  ]

  const locations = [
    { id: "new-york", label: "New York" },
    { id: "chicago", label: "Chicago" },
    { id: "san-francisco", label: "San Francisco" },
    { id: "virtual", label: "Virtual" },
  ]

  const tags = [
    { id: "gala", label: "Gala" },
    { id: "workshop", label: "Workshop" },
    { id: "conference", label: "Conference" },
    { id: "fundraising", label: "Fundraising" },
    { id: "volunteer", label: "Volunteer" },
    { id: "training", label: "Training" },
  ]

  return (
    <SiteLayout>
      <PageHeader
        title="Events"
        description="Join us at our upcoming events and fundraisers to support our mission and connect with our community."
      />

      <div className="container py-12">
        <FilterBar categories={categories} locations={locations} tags={tags} className="mb-8" />

        <Suspense fallback={<EventsLoading />}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedEvents.length > 0 ? (
              sortedEvents.map((event) => (
                <Card key={event.id} className="overflow-hidden flex flex-col h-full">
                  <div className="relative h-48">
                    <Image src={event.image || "/placeholder.svg"} alt={event.title} fill className="object-cover" />
                    <div className="absolute top-2 right-2">
                      <Badge variant="secondary" className="bg-primary text-primary-foreground">
                        {event.category}
                      </Badge>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="line-clamp-2">
                      <Link href={`/events/${event.slug}`} className="hover:underline">
                        {event.title}
                      </Link>
                    </CardTitle>
                    <CardDescription className="line-clamp-3">{event.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow space-y-3">
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="h-4 w-4 text-primary" />
                      <span>{formatDate(event.date)}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="h-4 w-4 text-primary" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <MapPin className="h-4 w-4 text-primary" />
                      <span>{event.location}</span>
                    </div>
                  </CardContent>
                  <CardFooter className="border-t pt-4">
                    <Button asChild className="w-full">
                      <Link href={`/events/${event.slug}`}>View Details</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))
            ) : (
              <div className="col-span-3 py-12 text-center">
                <h3 className="text-xl font-medium mb-2">No events found</h3>
                <p className="text-muted-foreground">Try adjusting your filters to find what you're looking for.</p>
              </div>
            )}
          </div>
        </Suspense>
      </div>
    </SiteLayout>
  )
}

function EventsLoading() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: 6 }).map((_, index) => (
        <SkeletonCard key={index} imageHeight={192} hasFooter={true} hasAction={true} />
      ))}
    </div>
  )
}

