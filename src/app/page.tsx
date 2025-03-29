import { SiteLayout } from "./components/site-layout"
import { BlobBackground } from "./components/blob-background"
import { Button } from "./components/ui/button"
import { Card } from "./components/ui/card"
import { ArrowRight, Heart, Users, Globe } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default async function HomePage() {
  // Simulate fetching data
  const stats = [
    { label: "Lives Impacted", value: "250K+", icon: Users },
    { label: "Projects Completed", value: "120+", icon: Globe },
    { label: "Donations Received", value: "$2.5M+", icon: Heart },
  ]

  return (
    <SiteLayout>
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center">
        <BlobBackground className="opacity-20" />
        <div className="container mx-auto px-4 py-12 relative z-10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Creating a Better World Together
              </h1>
              <p className="text-lg md:text-xl mb-6 text-muted-foreground">
                Join HopeWorks in our mission to build sustainable communities, protect the environment, and empower
                people around the world.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/donate">
                  <Button size="lg" className="rounded-full">
                    Donate Now
                  </Button>
                </Link>
                <Link href="/get-involved">
                  <Button size="lg" variant="outline" className="rounded-full">
                    Get Involved
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/placeholder.svg?height=800&width=1200"
                alt="People working together on community project"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-12 bg-primary/5">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Our Impact
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="p-6 text-center">
                <div className="flex justify-center mb-4">
                  <stat.icon className="h-12 w-12 text-primary" />
                </div>
                <h3 className="text-3xl font-bold mb-2">{stat.value}</h3>
                <p className="text-muted-foreground">{stat.label}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Missions */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Our Missions
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Clean Water",
                description:
                  "Providing access to clean and safe drinking water for communities in need around the world.",
                image: "/placeholder.svg?height=400&width=600",
                link: "/missions/clean-water",
              },
              {
                title: "Education",
                description: "Building schools and supporting educational programs to empower future generations.",
                image: "/placeholder.svg?height=400&width=600",
                link: "/missions/education",
              },
              {
                title: "Environment",
                description: "Protecting natural habitats and promoting sustainable practices for a healthier planet.",
                image: "/placeholder.svg?height=400&width=600",
                link: "/missions/environment",
              },
            ].map((mission, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="relative h-48">
                  <Image src={mission.image || "/placeholder.svg"} alt={mission.title} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{mission.title}</h3>
                  <p className="text-muted-foreground mb-4">{mission.description}</p>
                  <Link href={mission.link} className="text-primary hover:underline flex items-center">
                    Learn more <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/missions">
              <Button variant="outline" className="rounded-full">
                View All Missions
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-12 bg-primary/5">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Upcoming Events
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Annual Fundraising Gala",
                date: "June 15, 2023",
                location: "Grand Hotel, New York",
                image: "/placeholder.svg?height=400&width=600",
              },
              {
                title: "Beach Cleanup Day",
                date: "July 8, 2023",
                location: "Sunset Beach, California",
                image: "/placeholder.svg?height=400&width=600",
              },
              {
                title: "Volunteer Training Workshop",
                date: "July 22, 2023",
                location: "Community Center, Chicago",
                image: "/placeholder.svg?height=400&width=600",
              },
            ].map((event, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="relative h-48">
                  <Image src={event.image || "/placeholder.svg"} alt={event.title} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                  <p className="text-muted-foreground mb-1">{event.date}</p>
                  <p className="text-muted-foreground mb-4">{event.location}</p>
                  <Link href="/events" className="text-primary hover:underline flex items-center">
                    View details <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/events">
              <Button variant="outline" className="rounded-full">
                View All Events
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            What People Say
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                quote:
                  "HopeWorks' clean water initiative transformed our village. We now have access to safe drinking water for the first time.",
                name: "Maria Rodriguez",
                role: "Community Member",
                image: "/placeholder.svg?height=200&width=200",
              },
              {
                quote:
                  "Volunteering with HopeWorks was one of the most rewarding experiences of my life. I saw firsthand the impact of their work.",
                name: "David Chen",
                role: "Volunteer",
                image: "/placeholder.svg?height=200&width=200",
              },
              {
                quote:
                  "The educational resources provided by HopeWorks have made a significant difference in our school and the future of our students.",
                name: "Sarah Okafor",
                role: "School Principal",
                image: "/placeholder.svg?height=200&width=200",
              },
            ].map((testimonial, index) => (
              <Card key={index} className="p-6">
                <div className="flex items-center mb-4">
                  <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold">{testimonial.name}</h3>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
                <p className="italic">"{testimonial.quote}"</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Join Us in Making a Difference
          </h2>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            Whether you want to donate, volunteer, or spread the word, there are many ways to support our mission and
            help create a better world for all.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/donate">
              <Button size="lg" className="rounded-full">
                Donate Now
              </Button>
            </Link>
            <Link href="/get-involved">
              <Button size="lg" variant="outline" className="rounded-full">
                Get Involved
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="rounded-full">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  )
}

