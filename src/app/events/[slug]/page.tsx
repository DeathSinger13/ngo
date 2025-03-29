import Image from "next/image"
import Link from "next/link"
import { SiteLayout } from "../../components/site-layout"
import { Button } from "../../components/ui/button"
import { BlobBackground } from "../../components/blob-background"
import { DecorativeCurl } from "../../components/decorative-curl"
import { SimpleCard } from "../../components/simple-card"
import { Calendar, Clock, MapPin, Users, ArrowRight, ChevronRight, AlertCircle } from "lucide-react"

// This would normally come from a database
const getEventData = (slug: string) => {
  // Mock data for demonstration
  return {
    id: "1",
    title: "Annual Charity Gala",
    slug: "annual-charity-gala",
    description:
      "Join us for an elegant evening of dinner, entertainment, and fundraising to support our global initiatives.",
    fullDescription:
      "Our Annual Charity Gala is our premier fundraising event of the year, bringing together supporters, partners, and community leaders for an elegant evening of fine dining, entertainment, and meaningful connection. This black-tie event features a gourmet dinner, silent and live auctions, inspiring speakers, and live entertainment. All proceeds from the event will support our global initiatives, with a special focus this year on our Clean Water Initiative in East Africa.",
    date: "September 15, 2025",
    time: "7:00 PM - 11:00 PM",
    location: "Grand Ballroom, Hilton Hotel",
    address: "123 Main Street, New York, NY 10001",
    capacity: 250,
    registered: 180,
    ticketPrice: 150,
    tablePrice: 1200,
    category: "Fundraiser",
    status: "Upcoming",
    mainImage: "/placeholder.svg?height=600&width=1200&text=Annual+Charity+Gala",
    gallery: [
      "/placeholder.svg?height=400&width=600&text=Previous+Gala+1",
      "/placeholder.svg?height=400&width=600&text=Previous+Gala+2",
      "/placeholder.svg?height=400&width=600&text=Previous+Gala+3",
      "/placeholder.svg?height=400&width=600&text=Previous+Gala+4",
    ],
    schedule: [
      {
        time: "7:00 PM - 7:30 PM",
        activity: "Welcome Reception & Cocktails",
      },
      {
        time: "7:30 PM - 8:30 PM",
        activity: "Dinner Service",
      },
      {
        time: "8:30 PM - 9:00 PM",
        activity: "Keynote Speaker & Program Presentation",
      },
      {
        time: "9:00 PM - 10:00 PM",
        activity: "Live Auction",
      },
      {
        time: "10:00 PM - 11:00 PM",
        activity: "Entertainment & Dancing",
      },
    ],
    speakers: [
      {
        name: "Dr. Sarah Johnson",
        role: "Program Director",
        image: "/placeholder.svg?height=200&width=200&text=Sarah",
      },
      {
        name: "Michael Chen",
        role: "CEO, Global Partners Inc.",
        image: "/placeholder.svg?height=200&width=200&text=Michael",
      },
    ],
    sponsors: [
      {
        name: "ABC Corporation",
        logo: "/placeholder.svg?height=100&width=200&text=ABC+Corp",
      },
      {
        name: "XYZ Foundation",
        logo: "/placeholder.svg?height=100&width=200&text=XYZ+Foundation",
      },
      {
        name: "123 Industries",
        logo: "/placeholder.svg?height=100&width=200&text=123+Industries",
      },
      {
        name: "Global Tech",
        logo: "/placeholder.svg?height=100&width=200&text=Global+Tech",
      },
    ],
    faqs: [
      {
        question: "What is the dress code?",
        answer:
          "The dress code for the Annual Charity Gala is black-tie formal. Gentlemen are expected to wear tuxedos or formal suits, and ladies typically wear formal evening gowns or cocktail dresses.",
      },
      {
        question: "Is my ticket purchase tax-deductible?",
        answer:
          "Yes, a portion of your ticket purchase is tax-deductible. The tax-deductible amount is the ticket price minus the fair market value of goods and services received (approximately $75 per ticket). You will receive a receipt indicating the tax-deductible amount.",
      },
      {
        question: "Is there parking available at the venue?",
        answer:
          "Yes, the Hilton Hotel offers valet parking for $25 per vehicle. There are also several public parking garages within walking distance of the venue.",
      },
    ],
  }
}

export default function EventPage({ params }: { params: { slug: string } }) {
  const event = getEventData(params.slug)
  const percentFilled = Math.round((event.registered / event.capacity) * 100)
  const spotsRemaining = event.capacity - event.registered

  return (
    <SiteLayout>
      <div className="relative">
        <BlobBackground blobCount={3} className="opacity-30" />
        <DecorativeCurl position="top-right" color="primary" size="md" />
        <DecorativeCurl position="bottom-left" color="tertiary" size="sm" />

        {/* Event Header */}
        <div className="relative mb-8">
          <div className="aspect-[21/9] relative rounded-xl overflow-hidden mb-6">
            <Image src={event.mainImage || "/placeholder.svg"} alt={event.title} fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6">
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground">
                  {event.category}
                </span>
                <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground">
                  {event.status}
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">{event.title}</h1>
              <p className="text-lg text-muted-foreground max-w-3xl">{event.description}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="md:col-span-2">
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  <span className="font-medium">{event.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-secondary" />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-tertiary" />
                  <span>{event.location}</span>
                </div>
              </div>

              <p className="text-muted-foreground mb-4">{event.fullDescription}</p>

              <div className="flex items-center gap-4 text-sm">
                <div className="flex items-center gap-1">
                  <Users className="h-4 w-4 text-primary" />
                  <span>{event.registered} registered</span>
                </div>
                <div className="flex items-center gap-1">
                  <AlertCircle className="h-4 w-4 text-amber-500" />
                  <span>Only {spotsRemaining} spots remaining</span>
                </div>
              </div>
            </div>

            <div>
              <SimpleCard color="primary" className="card-hover">
                <h3 className="text-xl font-bold mb-4">Registration</h3>
                <div className="space-y-4 mb-6">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">Individual Ticket</span>
                      <span className="font-bold">${event.ticketPrice}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Includes dinner, drinks, and entertainment</p>
                  </div>

                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">Table (8 Guests)</span>
                      <span className="font-bold">${event.tablePrice}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Premium seating and recognition in program</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <Button className="w-full" asChild>
                    <Link href={`/events/${event.slug}/register`}>Register Now</Link>
                  </Button>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="/contact">Contact for Sponsorship</Link>
                  </Button>
                </div>
              </SimpleCard>
            </div>
          </div>
        </div>

        {/* Event Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold mb-6 gradient-heading">Event Schedule</h2>
            <div className="space-y-4 mb-8">
              {event.schedule.map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Clock className="h-5 w-5 text-primary" />
                    </div>
                    {i < event.schedule.length - 1 && <div className="h-full w-0.5 bg-primary/20 my-1"></div>}
                  </div>
                  <div>
                    <h4 className="font-bold">{item.time}</h4>
                    <p className="text-muted-foreground">{item.activity}</p>
                  </div>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold mb-6 gradient-heading">Featured Speakers</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              {event.speakers.map((speaker, i) => (
                <SimpleCard key={i} className="card-hover">
                  <div className="flex items-center gap-4">
                    <div className="h-16 w-16 relative rounded-full overflow-hidden">
                      <Image
                        src={speaker.image || "/placeholder.svg"}
                        alt={speaker.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-bold">{speaker.name}</h3>
                      <p className="text-sm text-muted-foreground">{speaker.role}</p>
                    </div>
                  </div>
                </SimpleCard>
              ))}
            </div>

            <h2 className="text-2xl font-bold mb-6 gradient-heading">Event Sponsors</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
              {event.sponsors.map((sponsor, i) => (
                <div key={i} className="flex items-center justify-center p-4 border rounded-lg bg-background h-24">
                  <Image
                    src={sponsor.logo || "/placeholder.svg"}
                    alt={sponsor.name}
                    width={150}
                    height={60}
                    className="max-h-full"
                  />
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold mb-6 gradient-heading">Frequently Asked Questions</h2>
            <div className="space-y-4 mb-8">
              {event.faqs.map((faq, i) => (
                <SimpleCard key={i} className="card-hover">
                  <h3 className="text-lg font-bold mb-2">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </SimpleCard>
              ))}
            </div>

            <div className="bg-muted/30 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">Have More Questions?</h3>
              <p className="text-muted-foreground mb-4">
                If you have additional questions about this event or need special accommodations, please don't hesitate
                to contact our events team.
              </p>
              <Button asChild>
                <Link href="/contact">
                  Contact Us <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-6 gradient-heading">Event Details</h2>
            <SimpleCard className="mb-6 card-hover">
              <div className="space-y-4">
                <div>
                  <h3 className="font-bold mb-2">Date & Time</h3>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="h-4 w-4 text-primary" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground mt-1">
                    <Clock className="h-4 w-4 text-primary" />
                    <span>{event.time}</span>
                  </div>
                </div>

                <div>
                  <h3 className="font-bold mb-2">Location</h3>
                  <div className="flex items-start gap-2 text-muted-foreground">
                    <MapPin className="h-4 w-4 text-secondary mt-0.5" />
                    <div>
                      <p>{event.location}</p>
                      <p>{event.address}</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="mt-2" asChild>
                    <a
                      href={`https://maps.google.com/?q=${encodeURIComponent(event.address)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Map
                    </a>
                  </Button>
                </div>

                <div>
                  <h3 className="font-bold mb-2">Capacity</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>
                        {event.registered} registered of {event.capacity} capacity
                      </span>
                      <span className="font-medium">{percentFilled}%</span>
                    </div>
                    <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-primary rounded-full" style={{ width: `${percentFilled}%` }}></div>
                    </div>
                    {spotsRemaining < 50 && (
                      <p className="text-sm text-amber-500 flex items-center gap-1">
                        <AlertCircle className="h-3 w-3" />
                        <span>Only {spotsRemaining} spots remaining!</span>
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </SimpleCard>

            <h3 className="text-xl font-bold mb-4 gradient-heading">Previous Events</h3>
            <div className="grid grid-cols-2 gap-3 mb-6">
              {event.gallery.map((image, i) => (
                <div key={i} className="aspect-square relative rounded-lg overflow-hidden">
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`Previous event image ${i + 1}`}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>

            <div className="flex gap-3">
              <Button variant="outline" className="flex-1" asChild>
                <Link href="/gallery">View Gallery</Link>
              </Button>
              <Button variant="outline" className="flex-1" asChild>
                <Link href="/events">All Events</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Related Events */}
        <section className="py-12 mt-8 border-t">
          <h2 className="text-2xl font-bold mb-8 gradient-heading">Upcoming Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Community Cleanup Day",
                date: "July 8, 2025",
                time: "9:00 AM - 1:00 PM",
                location: "Riverside Park",
                image: "/placeholder.svg?height=300&width=400&text=Cleanup",
                category: "Volunteer",
              },
              {
                title: "Educational Workshop",
                date: "August 5, 2025",
                time: "10:00 AM - 3:00 PM",
                location: "Community Center",
                image: "/placeholder.svg?height=300&width=400&text=Workshop",
                category: "Education",
              },
              {
                title: "Fundraising Dinner",
                date: "August 20, 2025",
                time: "6:30 PM - 9:30 PM",
                location: "City Restaurant",
                image: "/placeholder.svg?height=300&width=400&text=Dinner",
                category: "Fundraiser",
              },
            ].map((relatedEvent, i) => (
              <SimpleCard key={i} className="overflow-hidden card-hover">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={relatedEvent.image || "/placeholder.svg"}
                    alt={relatedEvent.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-3 right-3 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                    {relatedEvent.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{relatedEvent.title}</h3>
                  <div className="space-y-2 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center">
                      <Calendar className="mr-2 h-4 w-4" />
                      <span>{relatedEvent.date}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="mr-2 h-4 w-4" />
                      <span>{relatedEvent.time}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="mr-2 h-4 w-4" />
                      <span>{relatedEvent.location}</span>
                    </div>
                  </div>
                  <Button className="rounded-full" size="sm" asChild>
                    <Link href={`/events/${relatedEvent.title.toLowerCase().replace(/\s+/g, "-")}`}>
                      Learn More <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </SimpleCard>
            ))}
          </div>
        </section>
      </div>
    </SiteLayout>
  )
}

