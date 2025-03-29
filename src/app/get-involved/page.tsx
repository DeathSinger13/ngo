import Image from "next/image"
import Link from "next/link"
import { SiteLayout } from "../components/site-layout"
import { PageHeader } from "../components/page-header"
import { Button } from "../components/ui/button"
import { SimpleCard } from "../components/simple-card"
import { ColoredIcon } from "../components/colored-icon"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/ui/card"
import { Input } from "../components/ui/input"
import { Label } from "../components/ui/label"
import { Textarea } from "../components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select"
import { HandHelping, Users, Calendar, Globe, Heart, Mail, ArrowRight } from "lucide-react"

export default function GetInvolvedPage() {
  return (
    <SiteLayout>
      <PageHeader
        title="Get Involved"
        description="Join our community and help us make a difference in the world."
        gradient
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid gap-8 md:grid-cols-2 mb-12">
        <div>
          <h2 className="text-2xl font-bold mb-4 gradient-heading">Ways to Get Involved</h2>
          <p className="text-muted-foreground mb-6">
            There are many ways to contribute to our mission. Whether you have time, skills, or resources to share, we
            welcome your support in creating positive change in communities around the world.
          </p>
          <div className="aspect-video relative rounded-lg overflow-hidden mb-4">
            <Image
              src="/placeholder.svg?height=400&width=600&text=Volunteers+in+Action"
              alt="Volunteers in action"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {[
            {
              title: "Volunteer",
              icon: HandHelping,
              color: "primary",
              description: "Donate your time and skills to support our programs and initiatives.",
              link: "#volunteer-form",
            },
            {
              title: "Fundraise",
              icon: Heart,
              color: "secondary",
              description: "Organize a fundraising event or campaign to support our work.",
              link: "/fundraise",
            },
            {
              title: "Partner",
              icon: Users,
              color: "tertiary",
              description: "Collaborate with us as an organization to amplify our collective impact.",
              link: "/partner",
            },
            {
              title: "Advocate",
              icon: Globe,
              color: "accent1",
              description: "Raise awareness about our cause and help spread our message.",
              link: "/advocate",
            },
          ].map((item, i) => (
            <SimpleCard key={i} color={item.color as any} className="card-hover">
              <div className="flex items-start gap-4">
                <ColoredIcon icon={<item.icon className="h-5 w-5" />} size="md" color={item.color as any} />
                <div>
                  <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                  <p className="text-muted-foreground text-sm mb-2">{item.description}</p>
                  <Button variant="link" size="sm" className="p-0" asChild>
                    <Link href={item.link} className="flex items-center">
                      Learn More <ArrowRight className="ml-1 h-3 w-3" />
                    </Link>
                  </Button>
                </div>
              </div>
            </SimpleCard>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-bold mb-6 gradient-heading" id="volunteer-form">
            Volunteer Application
          </h2>
          <Card>
            <CardHeader>
              <CardTitle>Join Our Volunteer Team</CardTitle>
              <CardDescription>
                Fill out the form below to express your interest in volunteering with us.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="first-name">First Name</Label>
                  <Input id="first-name" placeholder="John" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="last-name">Last Name</Label>
                  <Input id="last-name" placeholder="Doe" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="john@example.com" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" placeholder="+1 (555) 123-4567" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <Input id="location" placeholder="City, Country" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="interest">Area of Interest</Label>
                <Select>
                  <SelectTrigger id="interest">
                    <SelectValue placeholder="Select an area" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="environment">Environmental Programs</SelectItem>
                    <SelectItem value="education">Education Initiatives</SelectItem>
                    <SelectItem value="health">Healthcare Projects</SelectItem>
                    <SelectItem value="community">Community Development</SelectItem>
                    <SelectItem value="fundraising">Fundraising</SelectItem>
                    <SelectItem value="admin">Administrative Support</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="availability">Availability</Label>
                <Select>
                  <SelectTrigger id="availability">
                    <SelectValue placeholder="Select availability" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="weekdays">Weekdays</SelectItem>
                    <SelectItem value="weekends">Weekends</SelectItem>
                    <SelectItem value="evenings">Evenings</SelectItem>
                    <SelectItem value="flexible">Flexible</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="skills">Skills & Experience</Label>
                <Textarea
                  id="skills"
                  placeholder="Tell us about your skills, experience, and why you want to volunteer with us."
                  className="min-h-[100px]"
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full colored-button colored-button-primary">Submit Application</Button>
            </CardFooter>
          </Card>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-6 gradient-heading">Upcoming Volunteer Opportunities</h2>
          <div className="space-y-4">
            {[
              {
                title: "Community Garden Project",
                date: "June 15, 2025",
                location: "Portland, OR",
                color: "primary",
              },
              {
                title: "School Supply Drive",
                date: "July 10, 2025",
                location: "Multiple Locations",
                color: "secondary",
              },
              {
                title: "Beach Cleanup Day",
                date: "August 5, 2025",
                location: "San Diego, CA",
                color: "tertiary",
              },
            ].map((event, i) => (
              <SimpleCard key={i} color={event.color as any} className="card-hover">
                <div className="flex items-center gap-3 mb-2">
                  <ColoredIcon icon={<Calendar className="h-4 w-4" />} size="sm" color={event.color as any} />
                  <h3 className="font-bold">{event.title}</h3>
                </div>
                <div className="pl-11 space-y-1 text-sm text-muted-foreground">
                  <p>Date: {event.date}</p>
                  <p>Location: {event.location}</p>
                </div>
                <Button variant="link" size="sm" className="pl-11 mt-1" asChild>
                  <Link href={`/events/${i + 1}`}>
                    Sign Up <ArrowRight className="ml-1 h-3 w-3" />
                  </Link>
                </Button>
              </SimpleCard>
            ))}

            <SimpleCard className="bg-muted/30 border-dashed">
              <div className="text-center py-4">
                <p className="text-muted-foreground mb-2">Looking for more opportunities?</p>
                <Button variant="outline" size="sm" className="rounded-full" asChild>
                  <Link href="/events">View All Events</Link>
                </Button>
              </div>
            </SimpleCard>
          </div>

          <div className="mt-8">
            <SimpleCard color="accent1" className="card-hover">
              <div className="flex items-start gap-4">
                <ColoredIcon icon={<Mail className="h-5 w-5" />} size="md" color="accent1" />
                <div>
                  <h3 className="font-bold text-lg mb-1">Questions?</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    Contact our volunteer coordinator for more information about getting involved.
                  </p>
                  <Button variant="outline" size="sm" className="rounded-full" asChild>
                    <Link href="/contact">Contact Us</Link>
                  </Button>
                </div>
              </div>
            </SimpleCard>
          </div>
        </div>
      </div>
    </SiteLayout>
  )
}

