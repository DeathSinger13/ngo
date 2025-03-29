import Image from "next/image"
import Link from "next/link"
import { SiteLayout } from "../../components/site-layout"
import { Button } from "../../components/ui/button"
import { Progress } from "../../components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs"
import { BlobBackground } from "../../components/blob-background"
import { DecorativeCurl } from "../../components/decorative-curl"
import { ColoredIcon } from "../../components/colored-icon"
import { SimpleCard } from "../../components/simple-card"
import {
  Heart,
  Calendar,
  Users,
  MapPin,
  ArrowRight,
  Share2,
  Bookmark,
  Clock,
  Target,
  BarChart3,
  Droplet,
} from "lucide-react"

// This would normally come from a database
const getProjectData = (slug: string) => {
  // Mock data for demonstration
  return {
    id: "1",
    title: "Clean Water Initiative",
    slug: "clean-water-initiative",
    description: "Providing clean water solutions to rural communities facing water scarcity.",
    fullDescription:
      "Access to clean water is a fundamental human right, yet millions of people around the world still lack this basic necessity. Our Clean Water Initiative aims to address this critical issue by implementing sustainable water solutions in rural communities facing severe water scarcity. Through a combination of well construction, water filtration systems, rainwater harvesting, and community education, we're working to ensure that everyone has access to safe, clean water for drinking, cooking, and sanitation.",
    location: "Kenya, Ethiopia, and Tanzania",
    startDate: "January 2023",
    endDate: "December 2025",
    goal: 150000,
    raised: 112500,
    donors: 450,
    volunteers: 35,
    beneficiaries: 25000,
    category: "Environment",
    status: "Active",
    mainImage: "/placeholder.svg?height=600&width=1200&text=Clean+Water+Initiative",
    gallery: [
      "/placeholder.svg?height=400&width=600&text=Water+Well+Construction",
      "/placeholder.svg?height=400&width=600&text=Community+Training",
      "/placeholder.svg?height=400&width=600&text=Water+Filtration+System",
      "/placeholder.svg?height=400&width=600&text=Children+With+Clean+Water",
    ],
    updates: [
      {
        date: "May 15, 2025",
        title: "New Water Well Completed",
        content:
          "We're excited to announce the completion of our newest water well in the Kibera community. This well will provide clean water to over 500 families daily.",
      },
      {
        date: "April 2, 2025",
        title: "Water Filtration Training",
        content:
          "Our team conducted a successful training session on water filtration maintenance for 20 community leaders who will now train others in their villages.",
      },
      {
        date: "March 10, 2025",
        title: "Quarterly Progress Report",
        content:
          "In the first quarter of 2025, we've reached 5 new communities, installed 3 water wells, and distributed 200 water filters. We're on track to meet our annual goals.",
      },
    ],
    team: [
      {
        name: "Dr. Sarah Johnson",
        role: "Project Director",
        image: "/placeholder.svg?height=200&width=200&text=Sarah",
      },
      {
        name: "Michael Ochieng",
        role: "Field Coordinator",
        image: "/placeholder.svg?height=200&width=200&text=Michael",
      },
      {
        name: "Emily Rodriguez",
        role: "Water Engineer",
        image: "/placeholder.svg?height=200&width=200&text=Emily",
      },
    ],
    impact: [
      {
        metric: "25,000",
        label: "People with Clean Water Access",
        icon: Droplet,
      },
      {
        metric: "15",
        label: "Communities Served",
        icon: MapPin,
      },
      {
        metric: "30",
        label: "Water Wells Built",
        icon: Target,
      },
    ],
    faqs: [
      {
        question: "How does the water filtration system work?",
        answer:
          "Our water filtration systems use a combination of ceramic, carbon, and biosand filtration to remove contaminants, bacteria, and parasites from water sources, making them safe for consumption.",
      },
      {
        question: "How do you ensure project sustainability?",
        answer:
          "We train local community members in system maintenance and establish water committees responsible for ongoing operations. We also implement usage fees that go into a maintenance fund.",
      },
      {
        question: "How can I get involved with this project?",
        answer:
          "You can support this project by donating, volunteering your skills (especially in engineering, public health, or education), or helping raise awareness about water scarcity issues.",
      },
    ],
  }
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = getProjectData(params.slug)
  const percentRaised = Math.round((project.raised / project.goal) * 100)

  return (
    <SiteLayout>
      <div className="relative">
        <BlobBackground blobCount={3} className="opacity-30" />
        <DecorativeCurl position="top-right" color="primary" size="md" />
        <DecorativeCurl position="bottom-left" color="tertiary" size="sm" />

        {/* Project Header */}
        <div className="relative mb-8">
          <div className="aspect-[21/9] relative rounded-xl overflow-hidden mb-6">
            <Image src={project.mainImage || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6">
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground">
                  {project.category}
                </span>
                <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground">
                  {project.status}
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">{project.title}</h1>
              <p className="text-lg text-muted-foreground max-w-3xl">{project.description}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="md:col-span-2">
              <div className="flex flex-col sm:flex-row gap-4 mb-4">
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-muted-foreground" />
                  <span>{project.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-muted-foreground" />
                  <span>
                    {project.startDate} - {project.endDate}
                  </span>
                </div>
              </div>

              <div className="space-y-2 mb-6">
                <div className="flex justify-between items-center">
                  <span className="font-medium">
                    ${project.raised.toLocaleString()} raised of ${project.goal.toLocaleString()}
                  </span>
                  <span className="text-sm text-muted-foreground">{percentRaised}% Complete</span>
                </div>
                <Progress value={percentRaised} className="h-2" />
                <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Heart className="h-4 w-4 text-primary" />
                    <span>{project.donors} Donors</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4 text-secondary" />
                    <span>{project.volunteers} Volunteers</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Target className="h-4 w-4 text-tertiary" />
                    <span>{project.beneficiaries.toLocaleString()} Beneficiaries</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <Button className="colored-button colored-button-primary" size="lg" asChild>
                <Link href={`/donate?project=${project.slug}`}>
                  <Heart className="mr-2 h-4 w-4" /> Donate Now
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href={`/get-involved?project=${project.slug}`}>
                  <Users className="mr-2 h-4 w-4" /> Volunteer
                </Link>
              </Button>
              <div className="flex gap-2 mt-2">
                <Button variant="ghost" size="icon" className="rounded-full flex-1">
                  <Share2 className="h-4 w-4" />
                  <span className="sr-only">Share</span>
                </Button>
                <Button variant="ghost" size="icon" className="rounded-full flex-1">
                  <Bookmark className="h-4 w-4" />
                  <span className="sr-only">Save</span>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Project Content */}
        <Tabs defaultValue="about" className="mb-12">
          <TabsList className="w-full max-w-3xl mx-auto grid grid-cols-2 md:grid-cols-4 h-auto p-1 mb-8">
            <TabsTrigger value="about" className="py-3">
              About
            </TabsTrigger>
            <TabsTrigger value="updates" className="py-3">
              Updates
            </TabsTrigger>
            <TabsTrigger value="team" className="py-3">
              Team
            </TabsTrigger>
            <TabsTrigger value="faq" className="py-3">
              FAQ
            </TabsTrigger>
          </TabsList>

          <TabsContent value="about" className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <h2 className="text-2xl font-bold mb-4 gradient-heading">About This Project</h2>
                <div className="prose max-w-none">
                  <p className="text-muted-foreground mb-4">{project.fullDescription}</p>
                  <h3 className="text-xl font-bold mb-3">Our Approach</h3>
                  <p className="text-muted-foreground mb-4">
                    We take a comprehensive approach to water access that includes:
                  </p>
                  <ul className="space-y-2 text-muted-foreground mb-6">
                    <li className="flex items-start gap-2">
                      <span className="rounded-full bg-primary/10 p-1 mt-0.5">
                        <Droplet className="h-4 w-4 text-primary" />
                      </span>
                      <span>
                        <strong>Water Source Development:</strong> Constructing wells, boreholes, and rainwater
                        harvesting systems.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="rounded-full bg-secondary/10 p-1 mt-0.5">
                        <Target className="h-4 w-4 text-secondary" />
                      </span>
                      <span>
                        <strong>Water Treatment:</strong> Installing filtration systems to ensure water safety.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="rounded-full bg-tertiary/10 p-1 mt-0.5">
                        <Users className="h-4 w-4 text-tertiary" />
                      </span>
                      <span>
                        <strong>Community Training:</strong> Educating communities on water management and system
                        maintenance.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="rounded-full bg-accent1/10 p-1 mt-0.5">
                        <BarChart3 className="h-4 w-4 text-accent1" />
                      </span>
                      <span>
                        <strong>Monitoring & Evaluation:</strong> Tracking water quality and project impact over time.
                      </span>
                    </li>
                  </ul>

                  <h3 className="text-xl font-bold mb-3">Project Timeline</h3>
                  <div className="space-y-4 mb-6">
                    <div className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                          <Clock className="h-5 w-5 text-primary" />
                        </div>
                        <div className="h-full w-0.5 bg-primary/20 my-1"></div>
                      </div>
                      <div>
                        <h4 className="font-bold">Phase 1: Community Assessment</h4>
                        <p className="text-sm text-muted-foreground">January - March 2023</p>
                        <p className="text-muted-foreground mt-1">
                          Conducted water needs assessments in target communities and identified priority locations.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <div className="h-10 w-10 rounded-full bg-secondary/10 flex items-center justify-center">
                          <Clock className="h-5 w-5 text-secondary" />
                        </div>
                        <div className="h-full w-0.5 bg-secondary/20 my-1"></div>
                      </div>
                      <div>
                        <h4 className="font-bold">Phase 2: Infrastructure Development</h4>
                        <p className="text-sm text-muted-foreground">April 2023 - June 2024</p>
                        <p className="text-muted-foreground mt-1">
                          Construction of wells, installation of filtration systems, and development of water
                          distribution networks.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <div className="h-10 w-10 rounded-full bg-tertiary/10 flex items-center justify-center">
                          <Clock className="h-5 w-5 text-tertiary" />
                        </div>
                        <div className="h-full w-0.5 bg-tertiary/20 my-1"></div>
                      </div>
                      <div>
                        <h4 className="font-bold">Phase 3: Community Training</h4>
                        <p className="text-sm text-muted-foreground">July 2024 - December 2024</p>
                        <p className="text-muted-foreground mt-1">
                          Training local community members on system maintenance, water management, and hygiene
                          practices.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <div className="h-10 w-10 rounded-full bg-accent1/10 flex items-center justify-center">
                          <Clock className="h-5 w-5 text-accent1" />
                        </div>
                      </div>
                      <div>
                        <h4 className="font-bold">Phase 4: Monitoring & Expansion</h4>
                        <p className="text-sm text-muted-foreground">January 2025 - December 2025</p>
                        <p className="text-muted-foreground mt-1">
                          Ongoing monitoring of water quality and system performance, with expansion to additional
                          communities.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4 gradient-heading">Project Impact</h3>
                <div className="space-y-4 mb-6">
                  {project.impact.map((item, i) => (
                    <SimpleCard
                      key={i}
                      color={i === 0 ? "primary" : i === 1 ? "secondary" : "tertiary"}
                      className="card-hover"
                    >
                      <div className="flex items-center gap-4">
                        <ColoredIcon
                          icon={<item.icon className="h-5 w-5" />}
                          size="md"
                          color={i === 0 ? "primary" : i === 1 ? "secondary" : "tertiary"}
                        />
                        <div>
                          <div className="text-2xl font-bold">{item.metric}</div>
                          <div className="text-sm text-muted-foreground">{item.label}</div>
                        </div>
                      </div>
                    </SimpleCard>
                  ))}
                </div>

                <h3 className="text-xl font-bold mb-4 gradient-heading">Project Gallery</h3>
                <div className="grid grid-cols-2 gap-3">
                  {project.gallery.map((image, i) => (
                    <div key={i} className="aspect-square relative rounded-lg overflow-hidden">
                      <Image
                        src={image || "/placeholder.svg"}
                        alt={`Project image ${i + 1}`}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>

                <div className="mt-6">
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="/gallery">View More Photos</Link>
                  </Button>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="updates" className="space-y-8">
            <h2 className="text-2xl font-bold mb-6 gradient-heading">Project Updates</h2>
            <div className="space-y-6">
              {project.updates.map((update, i) => (
                <SimpleCard key={i} className="card-hover">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 text-primary rounded-full px-3 py-1 text-sm font-medium whitespace-nowrap">
                      {update.date}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{update.title}</h3>
                      <p className="text-muted-foreground">{update.content}</p>
                    </div>
                  </div>
                </SimpleCard>
              ))}
            </div>

            <div className="flex justify-center mt-8">
              <Button variant="outline" asChild>
                <Link href={`/projects/${project.slug}/updates`}>
                  View All Updates <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="team" className="space-y-8">
            <h2 className="text-2xl font-bold mb-6 gradient-heading">Project Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {project.team.map((member, i) => (
                <SimpleCard key={i} className="card-hover">
                  <div className="aspect-square relative rounded-lg overflow-hidden mb-4">
                    <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                  </div>
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-sm text-primary font-medium">{member.role}</p>
                </SimpleCard>
              ))}
            </div>

            <div className="bg-muted/30 rounded-lg p-6 mt-8">
              <h3 className="text-xl font-bold mb-4">Join Our Team</h3>
              <p className="text-muted-foreground mb-4">
                We're always looking for passionate individuals to join our project teams. Whether you have expertise in
                water engineering, community development, or project management, we'd love to hear from you.
              </p>
              <Button asChild>
                <Link href="/get-involved">
                  Volunteer With Us <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="faq" className="space-y-8">
            <h2 className="text-2xl font-bold mb-6 gradient-heading">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {project.faqs.map((faq, i) => (
                <SimpleCard key={i} className="card-hover">
                  <h3 className="text-lg font-bold mb-2">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </SimpleCard>
              ))}
            </div>

            <div className="bg-muted/30 rounded-lg p-6 mt-8">
              <h3 className="text-xl font-bold mb-4">Have More Questions?</h3>
              <p className="text-muted-foreground mb-4">
                If you have additional questions about this project or how you can get involved, please don't hesitate
                to reach out to our team.
              </p>
              <Button asChild>
                <Link href="/contact">
                  Contact Us <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </TabsContent>
        </Tabs>

        {/* Related Projects */}
        <section className="py-12 mt-8">
          <h2 className="text-2xl font-bold mb-8 gradient-heading">Related Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Education for All",
                description: "Building schools and providing educational resources in underserved areas.",
                image: "/placeholder.svg?height=300&width=400",
                category: "Education",
                progress: 60,
                color: "secondary",
              },
              {
                title: "Healthcare Access",
                description: "Improving healthcare access through mobile clinics and medical supplies.",
                image: "/placeholder.svg?height=300&width=400",
                category: "Healthcare",
                progress: 40,
                color: "tertiary",
              },
              {
                title: "Sustainable Agriculture",
                description: "Teaching sustainable farming practices to improve food security.",
                image: "/placeholder.svg?height=300&width=400",
                category: "Environment",
                progress: 85,
                color: "accent1",
              },
            ].map((relatedProject, i) => (
              <div
                key={i}
                className={`colored-card colored-card-${relatedProject.color} rounded-xl overflow-hidden card-hover`}
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={relatedProject.image || "/placeholder.svg"}
                    alt={relatedProject.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div
                    className={`absolute top-3 right-3 bg-${relatedProject.color} text-${relatedProject.color}-foreground px-3 py-1 rounded-full text-xs font-medium`}
                  >
                    {relatedProject.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{relatedProject.title}</h3>
                  <p className="text-muted-foreground mb-4">{relatedProject.description}</p>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Progress</span>
                      <span className="font-medium">{relatedProject.progress}%</span>
                    </div>
                    <div className="h-2 w-full bg-background rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-${relatedProject.color} rounded-full`}
                        style={{ width: `${relatedProject.progress}%` }}
                      ></div>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    className={`mt-4 p-0 text-${relatedProject.color} hover:text-${relatedProject.color}/90`}
                    asChild
                  >
                    <Link
                      href={`/projects/${relatedProject.title.toLowerCase().replace(/\s+/g, "-")}`}
                      className="flex items-center"
                    >
                      Learn more <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </SiteLayout>
  )
}

