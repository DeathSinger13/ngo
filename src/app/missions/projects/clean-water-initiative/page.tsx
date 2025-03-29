import Image from "next/image"
import Link from "next/link"
import { SiteLayout } from "../../../components/site-layout"
import { PageHeader } from "../../../components/page-header"
import { Button } from "../../../components/ui/button"
import { Card, CardContent } from "../../../components/ui/card"
import { Progress } from "../../../components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../../components/ui/tabs"
import { BlobBackground } from "../../../components/blob-background"
import { DecorativeCurl } from "../../../components/decorative-curl"
import { MissionGallery } from "../../../components/mission-gallery"
import { MissionUpdates } from "../../../components/mission-updates"
import { MissionTeam } from "../../../components/mission-team"
import { MissionDonors } from "../../../components/mission-donors"
import { ArrowRight, MapPin, Calendar, Target, Users, Clock, CheckCircle, AlertTriangle, Droplet } from "lucide-react"

export default function CleanWaterInitiativeProjectPage() {
  return (
    <SiteLayout>
      <div className="relative">
        <BlobBackground blobCount={4} className="opacity-40" />
        <DecorativeCurl position="top-right" color="primary" size="md" />
        <DecorativeCurl position="bottom-left" color="primary" size="sm" />

        <PageHeader
          title="Clean Water Initiative"
          description="Providing clean water access to rural communities in Kenya through sustainable infrastructure."
          gradient
        />

        {/* Project Overview */}
        <section className="relative z-10 mb-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground">
                Active Project
              </div>
              <h2 className="text-2xl md:text-3xl font-bold gradient-heading">Project Overview</h2>
              <p className="text-muted-foreground">
                The Clean Water Initiative is working to provide sustainable access to clean water for rural communities
                in Kenya. By drilling wells, installing water pumps, and building water storage facilities, we're
                helping communities overcome water scarcity and improve their health and quality of life.
              </p>
              <p className="text-muted-foreground">
                This project also includes community education on water management, hygiene practices, and system
                maintenance to ensure long-term sustainability.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <Button className="rounded-full colored-button colored-button-primary" asChild>
                  <Link href="/donate?project=clean-water-initiative">Support This Project</Link>
                </Button>
                <Button variant="outline" className="rounded-full" asChild>
                  <Link href="/get-involved">
                    Get Involved <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative rounded-xl overflow-hidden shadow-lg h-[400px]">
              <Image
                src="/placeholder.svg?height=800&width=600&text=Kenya+Water+Project"
                alt="Clean water project in Kenya"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-xl font-bold text-white mb-2">Rural Kenya</h3>
                <p className="text-white/90 text-sm">Bringing clean water to 5,000+ people across 10 villages</p>
              </div>
            </div>
          </div>
        </section>

        {/* Project Details */}
        <section className="relative z-10 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border-0 shadow-md card-hover colored-card-primary">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="colored-icon colored-icon-primary p-3">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Location</div>
                    <div className="font-medium">Kakamega County, Kenya</div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Serving 10 rural villages with limited access to clean water sources
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md card-hover colored-card-primary">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="colored-icon colored-icon-primary p-3">
                    <Calendar className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Timeline</div>
                    <div className="font-medium">January 2025 - August 2025</div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  8-month project with phased implementation across communities
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md card-hover colored-card-primary">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="colored-icon colored-icon-primary p-3">
                    <Target className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Funding Goal</div>
                    <div className="font-medium">$50,000</div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Progress</span>
                    <span className="font-medium">75% ($37,500)</span>
                  </div>
                  <Progress value={75} className="h-2" />
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Project Goals */}
        <section className="relative z-10 mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 gradient-heading">Project Goals</h2>
          <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-12">
            Our Clean Water Initiative aims to achieve these specific outcomes for the communities we serve.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "5,000+ People Served",
                description: "Provide clean water access to over 5,000 people across 10 rural villages.",
                icon: <Users className="h-6 w-6" />,
                color: "primary",
                progress: 65,
              },
              {
                title: "10 Water Systems",
                description: "Install 10 community water systems including wells, pumps, and storage facilities.",
                icon: <Droplet className="h-6 w-6" />,
                color: "primary",
                progress: 70,
              },
              {
                title: "50% Disease Reduction",
                description: "Reduce waterborne diseases by at least 50% in the target communities.",
                icon: <CheckCircle className="h-6 w-6" />,
                color: "primary",
                progress: 40,
              },
              {
                title: "100 Community Leaders",
                description: "Train 100 community leaders in water management and system maintenance.",
                icon: <Users className="h-6 w-6" />,
                color: "primary",
                progress: 80,
              },
            ].map((goal, i) => (
              <Card key={i} className={`border-0 shadow-md card-hover colored-card-${goal.color}`}>
                <CardContent className="p-6">
                  <div className={`colored-icon colored-icon-${goal.color} p-3 mb-4`}>{goal.icon}</div>
                  <h3 className="text-lg font-bold mb-2">{goal.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{goal.description}</p>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Progress</span>
                      <span className="font-medium">{goal.progress}%</span>
                    </div>
                    <Progress value={goal.progress} className="h-2" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Project Tabs */}
        <section className="relative z-10 mb-16">
          <Tabs defaultValue="updates" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="grid w-full max-w-2xl grid-cols-4">
                <TabsTrigger value="updates" className="text-sm py-3">
                  Updates
                </TabsTrigger>
                <TabsTrigger value="gallery" className="text-sm py-3">
                  Gallery
                </TabsTrigger>
                <TabsTrigger value="team" className="text-sm py-3">
                  Team
                </TabsTrigger>
                <TabsTrigger value="donors" className="text-sm py-3">
                  Donors
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="updates" className="space-y-8">
              <MissionUpdates
                updates={[
                  {
                    date: "June 1, 2025",
                    title: "Project Launch",
                    description:
                      "We officially launched the Clean Water Initiative in Kakamega County, Kenya. The local community welcomed our team with open arms, and we conducted initial assessments of water needs across the 10 target villages.",
                    image: "/placeholder.svg?height=300&width=500&text=Launch",
                    type: "milestone",
                  },
                  {
                    date: "May 15, 2025",
                    title: "First Well Completed",
                    description:
                      "We completed drilling the first well in Mukumu village! Water testing confirmed the source is clean and safe for drinking. The community gathered for a celebration as clean water flowed for the first time.",
                    image: "/placeholder.svg?height=300&width=500&text=First+Well",
                    type: "success",
                  },
                  {
                    date: "April 28, 2025",
                    title: "Community Training",
                    description:
                      "Conducted our first water management and hygiene training session with 25 community leaders from 5 villages. The participants were enthusiastic and eager to share their knowledge with their communities.",
                    image: "/placeholder.svg?height=300&width=500&text=Training",
                    type: "update",
                  },
                  {
                    date: "April 10, 2025",
                    title: "Supply Delivery Delayed",
                    description:
                      "Due to heavy rains, the delivery of some equipment has been delayed by two weeks. We're working with our partners to expedite shipping once road conditions improve.",
                    type: "challenge",
                  },
                  {
                    date: "March 20, 2025",
                    title: "Site Surveys Completed",
                    description:
                      "Our engineering team completed geological surveys across all 10 villages to identify optimal well locations. We've identified promising sites with good groundwater potential.",
                    type: "update",
                  },
                ]}
              />
            </TabsContent>

            <TabsContent value="gallery" className="space-y-8">
              <MissionGallery
                images={[
                  {
                    src: "/placeholder.svg?height=400&width=600&text=Community+Meeting",
                    alt: "Community meeting to discuss water needs",
                    caption: "Community meeting in Mukumu village",
                  },
                  {
                    src: "/placeholder.svg?height=400&width=600&text=Well+Drilling",
                    alt: "Well drilling in progress",
                    caption: "Drilling the first well",
                  },
                  {
                    src: "/placeholder.svg?height=400&width=600&text=Water+Testing",
                    alt: "Testing water quality",
                    caption: "Testing water quality from the new well",
                  },
                  {
                    src: "/placeholder.svg?height=400&width=600&text=Training+Session",
                    alt: "Community training session",
                    caption: "Water management training for community leaders",
                  },
                  {
                    src: "/placeholder.svg?height=400&width=600&text=Children+With+Water",
                    alt: "Children collecting clean water",
                    caption: "Children collecting clean water from the new well",
                  },
                  {
                    src: "/placeholder.svg?height=400&width=600&text=Construction",
                    alt: "Water storage tank construction",
                    caption: "Building a water storage tank",
                  },
                ]}
              />
            </TabsContent>

            <TabsContent value="team" className="space-y-8">
              <MissionTeam
                members={[
                  {
                    name: "Dr. Sarah Johnson",
                    role: "Project Director",
                    bio: "Water resource engineer with 15 years of experience implementing clean water projects across Africa.",
                    image: "/placeholder.svg?height=200&width=200&text=Sarah",
                  },
                  {
                    name: "James Mwangi",
                    role: "Local Coordinator",
                    bio: "Kenyan community development specialist who serves as our liaison with local villages and government.",
                    image: "/placeholder.svg?height=200&width=200&text=James",
                  },
                  {
                    name: "Emily Chen",
                    role: "Water Quality Specialist",
                    bio: "Environmental scientist ensuring all water sources meet international safety standards.",
                    image: "/placeholder.svg?height=200&width=200&text=Emily",
                  },
                  {
                    name: "Robert Ochieng",
                    role: "Engineering Lead",
                    bio: "Civil engineer overseeing the technical aspects of well drilling and water system construction.",
                    image: "/placeholder.svg?height=200&width=200&text=Robert",
                  },
                  {
                    name: "Maria Rodriguez",
                    role: "Community Educator",
                    bio: "Public health specialist leading our water management and hygiene training programs.",
                    image: "/placeholder.svg?height=200&width=200&text=Maria",
                  },
                  {
                    name: "David Kim",
                    role: "Project Manager",
                    bio: "Experienced manager ensuring the project stays on schedule and within budget.",
                    image: "/placeholder.svg?height=200&width=200&text=David",
                  },
                ]}
              />
            </TabsContent>

            <TabsContent value="donors" className="space-y-8">
              <MissionDonors
                featuredDonors={[
                  {
                    name: "Smith Family Foundation",
                    amount: "$10,000",
                    image: "/placeholder.svg?height=100&width=100&text=Smith",
                  },
                  {
                    name: "Global Water Trust",
                    amount: "$7,500",
                    image: "/placeholder.svg?height=100&width=100&text=GWT",
                  },
                  {
                    name: "TechForGood Inc.",
                    amount: "$5,000",
                    image: "/placeholder.svg?height=100&width=100&text=Tech",
                  },
                ]}
                recentDonors={[
                  { name: "Michael Chen", amount: "$1,000" },
                  { name: "Sarah Williams", amount: "$500" },
                  { name: "Rodriguez Family", amount: "$250" },
                  { name: "Anonymous", amount: "$1,500" },
                  { name: "David Johnson", amount: "$100" },
                  { name: "Emily Parker", amount: "$75" },
                  { name: "James Wilson", amount: "$200" },
                  { name: "Local Business Association", amount: "$2,000" },
                  { name: "University Water Club", amount: "$750" },
                  { name: "Anonymous", amount: "$50" },
                ]}
              />
            </TabsContent>
          </Tabs>
        </section>

        {/* Project Timeline */}
        <section className="relative z-10 mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 gradient-heading">Project Timeline</h2>
          <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-12">
            Our 8-month implementation plan ensures thorough and sustainable completion of all project components.
          </p>

          <div className="relative border-l-2 border-primary/30 ml-4 md:mx-auto md:max-w-3xl pl-8 pb-8 space-y-10">
            {[
              {
                phase: "Phase 1",
                title: "Community Assessment & Planning",
                date: "January - February 2025",
                description:
                  "Conduct detailed needs assessment, site surveys, and develop implementation plans with community input.",
                status: "Completed",
                icon: <CheckCircle className="h-5 w-5" />,
                color: "bg-green-500",
              },
              {
                phase: "Phase 2",
                title: "Well Drilling & Construction",
                date: "March - May 2025",
                description:
                  "Drill wells, install pumps, and construct water storage facilities across the 10 target villages.",
                status: "In Progress",
                icon: <Clock className="h-5 w-5" />,
                color: "bg-blue-500",
              },
              {
                phase: "Phase 3",
                title: "Community Training",
                date: "April - June 2025",
                description: "Train community leaders in water management, hygiene practices, and system maintenance.",
                status: "In Progress",
                icon: <Clock className="h-5 w-5" />,
                color: "bg-blue-500",
              },
              {
                phase: "Phase 4",
                title: "System Testing & Refinement",
                date: "June - July 2025",
                description:
                  "Test all water systems, make necessary adjustments, and ensure water quality meets standards.",
                status: "Upcoming",
                icon: <AlertTriangle className="h-5 w-5" />,
                color: "bg-amber-500",
              },
              {
                phase: "Phase 5",
                title: "Project Completion & Handover",
                date: "August 2025",
                description:
                  "Complete all installations, conduct final community training, and officially hand over systems to community management committees.",
                status: "Upcoming",
                icon: <AlertTriangle className="h-5 w-5" />,
                color: "bg-amber-500",
              },
            ].map((phase, i) => (
              <div key={i} className="relative">
                <div
                  className={`absolute -left-12 w-6 h-6 rounded-full ${phase.color} flex items-center justify-center text-white`}
                >
                  {phase.icon}
                </div>
                <div className="bg-background/80 backdrop-blur-sm rounded-lg p-6 border shadow-sm">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                    <div>
                      <span className="text-xs font-medium text-primary">{phase.phase}</span>
                      <h3 className="text-lg font-bold">{phase.title}</h3>
                    </div>
                    <span className="text-sm text-muted-foreground">{phase.date}</span>
                  </div>
                  <p className="text-muted-foreground text-sm">{phase.description}</p>
                  <div className="mt-2">
                    <span
                      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${phase.status === "Completed"
                        ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                        : phase.status === "In Progress"
                          ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
                          : "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-300"
                        }`}
                    >
                      {phase.status}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Get Involved */}
        <section className="relative z-10 py-12 px-8 bg-primary/5 rounded-2xl border border-primary/10 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 gradient-heading">Support This Project</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Your contribution can help bring clean water to rural communities in Kenya. We need to raise $12,500 more to
            complete this project.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="rounded-full colored-button colored-button-primary" asChild>
              <Link href="/donate?project=clean-water-initiative">Donate Now</Link>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full" asChild>
              <Link href="/get-involved">
                Get Involved <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>
      </div>
    </SiteLayout>
  )
}

