import Image from "next/image"
import Link from "next/link"
import { SiteLayout } from "../components/site-layout"
import { PageHeader } from "../components/page-header"
import { Button } from "../components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs"
import { BlobBackground } from "../components/blob-background"
import { SocialShare } from "../components/social-share"
import { StatsCard } from "../components/stats-card"
import { Heart, Users, Globe, Award, Twitter, Linkedin, Mail } from "lucide-react"
import { getTeamMembers, getTestimonials } from "../lib/api"

export const metadata = {
  title: "About Us | HopeWorks NGO",
  description: "Learn about our mission, vision, and the impact we're making around the world.",
}

export default async function AboutPage() {
  const teamMembers = await getTeamMembers()
  const testimonials = await getTestimonials()

  return (
    <SiteLayout>
      <PageHeader
        title="About Us"
        description="Learn about our mission, vision, and the impact we're making around the world."
        className="flex flex-col items-center text-center mt-6"
      />


      <div className="relative">
        <BlobBackground className="absolute inset-0 z-0" />

        <div className="container relative z-10 py-12 space-y-20">
          {/* Mission & Vision */}
          <section className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
              <p className="text-muted-foreground mb-6">
                HopeWorks is dedicated to creating sustainable solutions for communities in need through education,
                healthcare, and environmental initiatives. We believe in empowering communities to build a better future
                for themselves.
              </p>
              <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
              <p className="text-muted-foreground mb-6">
                We envision a world where all communities have access to the resources and opportunities they need to
                thrive. Through collaboration, innovation, and compassion, we work towards creating lasting change.
              </p>
              <Button asChild>
                <Link href="/get-involved">Get Involved</Link>
              </Button>
            </div>
            <div>
              <Image
                src="/placeholder.svg?height=500&width=600&text=Our+Mission"
                alt="Our mission in action"
                width={600}
                height={500}
                className="rounded-lg shadow-lg"
              />
            </div>
          </section>

          {/* Our Impact */}
          <section>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Impact</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Since our founding in 2005, we've made a significant impact on communities around the world. Here's a
                glimpse of what we've accomplished together.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <StatsCard
                title="Communities Served"
                value="250+"
                description="Communities across 30 countries"
                icon={<Globe className="h-6 w-6 text-primary" />}
                link="/impact/communities"
              />
              <StatsCard
                title="People Impacted"
                value="2M+"
                description="Lives changed through our programs"
                icon={<Users className="h-6 w-6 text-primary" />}
                link="/impact/people"
              />
              <StatsCard
                title="Projects Completed"
                value="500+"
                description="Sustainable initiatives implemented"
                icon={<Heart className="h-6 w-6 text-primary" />}
                link="/impact/projects"
              />
              <StatsCard
                title="Awards Received"
                value="25+"
                description="Recognitions for our impact"
                icon={<Award className="h-6 w-6 text-primary" />}
                link="/impact/awards"
              />
            </div>
          </section>

          {/* Our History */}
          <section>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our History</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                From humble beginnings to a global organization, our journey has been driven by a commitment to creating
                positive change.
              </p>
            </div>

            <Tabs defaultValue="founding" className="w-full">
              <TabsList className="grid w-full grid-cols-1 md:grid-cols-4">
                <TabsTrigger value="founding">Founding</TabsTrigger>
                <TabsTrigger value="growth">Growth</TabsTrigger>
                <TabsTrigger value="expansion">Expansion</TabsTrigger>
                <TabsTrigger value="today">Today</TabsTrigger>
              </TabsList>
              <TabsContent value="founding" className="p-6 bg-muted/30 rounded-lg mt-6">
                <h3 className="text-xl font-semibold mb-2">2005: Our Founding</h3>
                <p className="mb-4">
                  HopeWorks was founded by Dr. Elizabeth Chen and a small group of dedicated humanitarians who saw a
                  need for sustainable development solutions in underserved communities. What began as a small clean
                  water project in East Africa quickly grew as they witnessed the transformative impact of their work.
                </p>
                <Image
                  src="/placeholder.svg?height=300&width=600&text=Founding+Story"
                  alt="HopeWorks founding team"
                  width={600}
                  height={300}
                  className="rounded-lg"
                />
              </TabsContent>
              <TabsContent value="growth" className="p-6 bg-muted/30 rounded-lg mt-6">
                <h3 className="text-xl font-semibold mb-2">2008-2015: Growth Years</h3>
                <p className="mb-4">
                  During this period, HopeWorks expanded its programs to include education and healthcare initiatives.
                  We established partnerships with local organizations and international institutions, allowing us to
                  scale our impact and reach more communities in need.
                </p>
                <Image
                  src="/placeholder.svg?height=300&width=600&text=Growth+Years"
                  alt="HopeWorks growth period"
                  width={600}
                  height={300}
                  className="rounded-lg"
                />
              </TabsContent>
              <TabsContent value="expansion" className="p-6 bg-muted/30 rounded-lg mt-6">
                <h3 className="text-xl font-semibold mb-2">2016-2020: Global Expansion</h3>
                <p className="mb-4">
                  HopeWorks expanded to 30 countries across five continents, implementing our proven models while
                  adapting to local contexts. We launched our environmental sustainability programs and strengthened our
                  focus on community-led development.
                </p>
                <Image
                  src="/placeholder.svg?height=300&width=600&text=Global+Expansion"
                  alt="HopeWorks global expansion"
                  width={600}
                  height={300}
                  className="rounded-lg"
                />
              </TabsContent>
              <TabsContent value="today" className="p-6 bg-muted/30 rounded-lg mt-6">
                <h3 className="text-xl font-semibold mb-2">2021-Present: HopeWorks Today</h3>
                <p className="mb-4">
                  Today, HopeWorks is a leading international NGO with a diverse team of professionals and volunteers
                  dedicated to our mission. We continue to innovate and collaborate with communities, governments, and
                  other organizations to address the most pressing challenges facing our world.
                </p>
                <Image
                  src="/placeholder.svg?height=300&width=600&text=HopeWorks+Today"
                  alt="HopeWorks today"
                  width={600}
                  height={300}
                  className="rounded-lg"
                />
              </TabsContent>
            </Tabs>
          </section>

          {/* Our Team */}
          <section id="team">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Team</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Meet the dedicated professionals who lead our organization and drive our mission forward.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {teamMembers.map((member) => (
                <Card key={member.id} className="overflow-hidden">
                  <div className="relative h-64">
                    <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                  </div>
                  <CardHeader>
                    <CardTitle>{member.name}</CardTitle>
                    <CardDescription>{member.role}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{member.bio}</p>
                  </CardContent>
                  <CardFooter className="flex justify-start gap-2">
                    {member.social.twitter && (
                      <Button variant="ghost" size="icon" asChild>
                        <a href={member.social.twitter} target="_blank" rel="noopener noreferrer">
                          <Twitter className="h-4 w-4" />
                          <span className="sr-only">Twitter</span>
                        </a>
                      </Button>
                    )}
                    {member.social.linkedin && (
                      <Button variant="ghost" size="icon" asChild>
                        <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer">
                          <Linkedin className="h-4 w-4" />
                          <span className="sr-only">LinkedIn</span>
                        </a>
                      </Button>
                    )}
                    {member.social.email && (
                      <Button variant="ghost" size="icon" asChild>
                        <a href={`mailto:${member.social.email}`}>
                          <Mail className="h-4 w-4" />
                          <span className="sr-only">Email</span>
                        </a>
                      </Button>
                    )}
                  </CardFooter>
                </Card>
              ))}
            </div>

            <div className="mt-8 text-center">
              <Button variant="outline" asChild>
                <Link href="/about/team">View Full Team</Link>
              </Button>
            </div>
          </section>

          {/* Partners */}
          <section id="partners">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Partners</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We collaborate with a diverse range of organizations to maximize our impact and reach.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center">
              {Array.from({ length: 6 }).map((_, index) => (
                <div key={index} className="bg-background rounded-lg p-4 flex items-center justify-center h-24 border">
                  <Image
                    src={`/placeholder.svg?height=80&width=120&text=Partner+${index + 1}`}
                    alt={`Partner ${index + 1}`}
                    width={120}
                    height={80}
                  />
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <Button variant="outline" asChild>
                <Link href="/about/partners">View All Partners</Link>
              </Button>
            </div>
          </section>

          {/* Testimonials */}
          <section>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Testimonials</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Hear from the communities and individuals we've worked with.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((testimonial) => (
                <Card key={testimonial.id} className="bg-muted/30">
                  <CardHeader className="flex flex-row items-center gap-4">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={60}
                      height={60}
                      className="rounded-full"
                    />
                    <div>
                      <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                      <CardDescription>{testimonial.role}</CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="italic">"{testimonial.content}"</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Share */}
          <section className="text-center">
            <h2 className="text-2xl font-bold mb-4">Share Our Story</h2>
            <div className="flex justify-center">
              <SocialShare
                url="https://hopeworks.org/about"
                title="About HopeWorks NGO - Making a Difference"
                description="Learn about HopeWorks NGO's mission, vision, and impact around the world."
              />
            </div>
          </section>
        </div>
      </div>
    </SiteLayout>
  )
}

