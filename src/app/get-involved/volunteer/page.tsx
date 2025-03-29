import Image from "next/image"
import Link from "next/link"
import { SiteLayout } from "../../components/site-layout"
import { PageHeader } from "../../components/page-header"
import { Button } from "../../components/ui/button"
import { SimpleCard } from "../../components/simple-card"
import { ColoredIcon } from "../../components/colored-icon"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../../components/ui/card"
import { Input } from "../../components/ui/input"
import { Label } from "../../components/ui/label"
import { Textarea } from "../../components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../components/ui/select"
import { BlobBackground } from "../../components/blob-background"
import { DecorativeCurl } from "../../components/decorative-curl"
import { HandHelping, Users, Calendar, Globe, Heart, Mail, ArrowRight, CheckCircle, MapPin } from "lucide-react"

export default function VolunteerPage() {
  return (
    <SiteLayout>
      <div className="relative">
        <BlobBackground blobCount={3} className="opacity-30" />
        <DecorativeCurl position="top-right" color="primary" size="md" />
        <DecorativeCurl position="bottom-left" color="tertiary" size="sm" />

        <PageHeader
          title="Volunteer With Us"
          description="Join our team of dedicated volunteers and help us make a difference in communities around the world."
          gradient
        />

        <div className="grid gap-8 md:grid-cols-2 mb-12">
          <div>
            <h2 className="text-2xl font-bold mb-4 gradient-heading">Why Volunteer?</h2>
            <p className="text-muted-foreground mb-6">
              Volunteering with GreenHope is a rewarding experience that allows you to contribute your skills and time
              to meaningful projects that create positive change. Whether you're looking to gain experience, develop new
              skills, or simply give back to the community, we have opportunities for everyone.
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
                title: "Make a Difference",
                icon: Heart,
                color: "primary",
                description: "Your time and skills directly impact the lives of people in need around the world.",
              },
              {
                title: "Gain Experience",
                icon: Users,
                color: "secondary",
                description: "Develop new skills and gain valuable experience in your field of interest.",
              },
              {
                title: "Connect with Others",
                icon: Globe,
                color: "tertiary",
                description: "Meet like-minded individuals and build relationships with people who share your values.",
              },
              {
                title: "Personal Growth",
                icon: HandHelping,
                color: "accent1",
                description: "Challenge yourself, broaden your perspective, and grow as an individual.",
              },
            ].map((item, i) => (
              <SimpleCard key={i} color={item.color as any} className="card-hover">
                <div className="flex items-start gap-4">
                  <ColoredIcon icon={<item.icon className="h-5 w-5" />} size="md" color={item.color as any} />
                  <div>
                    <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </div>
                </div>
              </SimpleCard>
            ))}
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
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
            <h2 className="text-2xl font-bold mb-6 gradient-heading">Volunteer Opportunities</h2>
            <div className="space-y-4">
              {[
                {
                  title: "Community Garden Project",
                  date: "June 15, 2025",
                  location: "Portland, OR",
                  description:
                    "Help us build and maintain community gardens that provide fresh produce for local families.",
                  color: "primary",
                },
                {
                  title: "School Supply Drive",
                  date: "July 10, 2025",
                  location: "Multiple Locations",
                  description: "Collect and distribute school supplies to children in need before the new school year.",
                  color: "secondary",
                },
                {
                  title: "Beach Cleanup Day",
                  date: "August 5, 2025",
                  location: "San Diego, CA",
                  description: "Join our team in removing trash and plastic from local beaches to protect marine life.",
                  color: "tertiary",
                },
              ].map((event, i) => (
                <SimpleCard key={i} color={event.color as any} className="card-hover">
                  <h3 className="font-bold text-lg mb-2">{event.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{event.description}</p>
                  <div className="space-y-1 text-sm text-muted-foreground mb-3">
                    <div className="flex items-center">
                      <Calendar className="mr-2 h-4 w-4" />
                      <span>Date: {event.date}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="mr-2 h-4 w-4" />
                      <span>Location: {event.location}</span>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="w-full" asChild>
                    <Link href={`/events/${event.title.toLowerCase().replace(/\s+/g, "-")}`}>
                      Learn More <ArrowRight className="ml-1 h-3 w-3" />
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

        {/* Volunteer Stories */}
        <section className="py-12 mt-8 border-t">
          <h2 className="text-2xl font-bold mb-8 gradient-heading">Volunteer Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="overflow-hidden card-hover">
                <div className="aspect-video relative">
                  <Image
                    src={`/placeholder.svg?height=200&width=400&text=Volunteer+${i}`}
                    alt={`Volunteer ${i}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-2">Maria's Story</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    "Volunteering with GreenHope has been one of the most rewarding experiences of my life. I've met
                    amazing people and learned so much while making a real difference in communities."
                  </p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Volunteered for 2 years</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Globe className="h-4 w-4 text-primary" />
                    <span>Participated in 5 projects</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex justify-center mt-8">
            <Button variant="outline" className="rounded-full" asChild>
              <Link href="/blog/category/volunteer-stories">
                Read More Stories <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12 mt-8 bg-muted/30 rounded-xl">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 gradient-heading text-center">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {[
                {
                  question: "Do I need special skills to volunteer?",
                  answer:
                    "While some volunteer positions require specific skills (like medical professionals for healthcare projects), we have opportunities for volunteers of all backgrounds and skill levels. We'll match you with a role that fits your skills and interests.",
                },
                {
                  question: "Is there an age requirement for volunteering?",
                  answer:
                    "For most local volunteer opportunities, volunteers must be at least 16 years old. For international volunteering, the minimum age is 18 years old. Some youth programs are available for younger volunteers when accompanied by a parent or guardian.",
                },
                {
                  question: "How much time do I need to commit?",
                  answer:
                    "We have volunteer opportunities ranging from one-time events to ongoing weekly commitments. You can choose opportunities that fit your schedule and availability.",
                },
                {
                  question: "Can I volunteer remotely?",
                  answer:
                    "Yes, we offer remote volunteer opportunities in areas such as grant writing, graphic design, social media management, and translation services. These positions allow you to contribute to our mission from anywhere in the world.",
                },
              ].map((faq, i) => (
                <SimpleCard key={i} className="card-hover">
                  <h3 className="font-bold text-lg mb-2">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </SimpleCard>
              ))}
            </div>

            <div className="flex justify-center mt-8">
              <Button asChild>
                <Link href="/faq">
                  View All FAQs <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </SiteLayout>
  )
}

