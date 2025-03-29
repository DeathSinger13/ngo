import Image from "next/image"
import Link from "next/link"
import { SiteLayout } from "../components/site-layout"
import { PageHeader } from "../components/page-header"
import { Button } from "../components/ui/button"
import { SimpleCard } from "../components/simple-card"
import { ColoredIcon } from "../components/colored-icon"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs"
import { Droplet, Leaf, Globe, BookOpen, Heart, Users } from "lucide-react"

export default function ProgramsPage() {
  return (
    <SiteLayout>
      <PageHeader
        title="Our Programs"
        description="Explore our initiatives making a positive impact around the world."
        gradient
      />

      <Tabs defaultValue="all" className="mb-12">
        <TabsList className="w-full max-w-3xl mx-auto grid grid-cols-2 md:grid-cols-4 h-auto p-1 mb-8">
          <TabsTrigger value="all" className="py-3">
            All Programs
          </TabsTrigger>
          <TabsTrigger value="environment" className="py-3">
            Environment
          </TabsTrigger>
          <TabsTrigger value="education" className="py-3">
            Education
          </TabsTrigger>
          <TabsTrigger value="health" className="py-3">
            Health
          </TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-8">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Clean Water Initiative",
                icon: Droplet,
                color: "primary",
                description: "Providing clean water access to rural communities through sustainable infrastructure.",
                location: "Kenya, India, Brazil",
                impact: "50,000+ people served",
              },
              {
                title: "Environmental Conservation",
                icon: Leaf,
                color: "secondary",
                description:
                  "Protecting natural habitats and promoting sustainable practices to combat climate change.",
                location: "Global",
                impact: "15 conservation sites",
              },
              {
                title: "Education for All",
                icon: BookOpen,
                color: "tertiary",
                description: "Ensuring quality education for children in underserved communities worldwide.",
                location: "Africa, Asia, South America",
                impact: "10,000+ students enrolled",
              },
              {
                title: "Healthcare Access",
                icon: Heart,
                color: "accent1",
                description: "Providing essential healthcare services to communities with limited medical resources.",
                location: "Rural communities worldwide",
                impact: "25 medical centers established",
              },
              {
                title: "Community Development",
                icon: Users,
                color: "accent2",
                description: "Building stronger communities through local leadership and sustainable development.",
                location: "Global",
                impact: "100+ communities supported",
              },
              {
                title: "Global Partnerships",
                icon: Globe,
                color: "primary",
                description: "Collaborating with organizations worldwide to maximize our collective impact.",
                location: "International",
                impact: "30+ partner organizations",
              },
            ].map((program, i) => (
              <SimpleCard key={i} color={program.color as any} className="h-full card-hover">
                <div className="aspect-video relative bg-muted/50 rounded-lg overflow-hidden mb-4">
                  <Image
                    src={`/placeholder.svg?height=200&width=400&text=Program+${i + 1}`}
                    alt={program.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <ColoredIcon icon={<program.icon className="h-4 w-4" />} size="sm" color={program.color as any} />
                  </div>
                </div>
                <h3 className="font-bold text-lg mb-2">{program.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{program.description}</p>
                <div className="flex flex-col gap-1 mb-4 text-sm">
                  <div className="flex items-center gap-2">
                    <span className="font-medium">Location:</span>
                    <span className="text-muted-foreground">{program.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-medium">Impact:</span>
                    <span className="text-muted-foreground">{program.impact}</span>
                  </div>
                </div>
                <Button variant="outline" size="sm" className="rounded-full" asChild>
                  <Link href={`/programs/${i + 1}`}>Learn More</Link>
                </Button>
              </SimpleCard>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="environment" className="space-y-8">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Clean Water Initiative",
                icon: Droplet,
                color: "primary",
                description: "Providing clean water access to rural communities through sustainable infrastructure.",
                location: "Kenya, India, Brazil",
                impact: "50,000+ people served",
              },
              {
                title: "Environmental Conservation",
                icon: Leaf,
                color: "secondary",
                description:
                  "Protecting natural habitats and promoting sustainable practices to combat climate change.",
                location: "Global",
                impact: "15 conservation sites",
              },
            ].map((program, i) => (
              <SimpleCard key={i} color={program.color as any} className="h-full card-hover">
                <div className="aspect-video relative bg-muted/50 rounded-lg overflow-hidden mb-4">
                  <Image
                    src={`/placeholder.svg?height=200&width=400&text=Environment+${i + 1}`}
                    alt={program.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <ColoredIcon icon={<program.icon className="h-4 w-4" />} size="sm" color={program.color as any} />
                  </div>
                </div>
                <h3 className="font-bold text-lg mb-2">{program.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{program.description}</p>
                <div className="flex flex-col gap-1 mb-4 text-sm">
                  <div className="flex items-center gap-2">
                    <span className="font-medium">Location:</span>
                    <span className="text-muted-foreground">{program.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-medium">Impact:</span>
                    <span className="text-muted-foreground">{program.impact}</span>
                  </div>
                </div>
                <Button variant="outline" size="sm" className="rounded-full" asChild>
                  <Link href={`/programs/${i + 1}`}>Learn More</Link>
                </Button>
              </SimpleCard>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="education" className="space-y-8">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Education for All",
                icon: BookOpen,
                color: "tertiary",
                description: "Ensuring quality education for children in underserved communities worldwide.",
                location: "Africa, Asia, South America",
                impact: "10,000+ students enrolled",
              },
              {
                title: "Teacher Training",
                icon: BookOpen,
                color: "primary",
                description: "Providing professional development for teachers in underserved communities.",
                location: "Global",
                impact: "500+ teachers trained",
              },
            ].map((program, i) => (
              <SimpleCard key={i} color={program.color as any} className="h-full card-hover">
                <div className="aspect-video relative bg-muted/50 rounded-lg overflow-hidden mb-4">
                  <Image
                    src={`/placeholder.svg?height=200&width=400&text=Education+${i + 1}`}
                    alt={program.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <ColoredIcon icon={<program.icon className="h-4 w-4" />} size="sm" color={program.color as any} />
                  </div>
                </div>
                <h3 className="font-bold text-lg mb-2">{program.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{program.description}</p>
                <div className="flex flex-col gap-1 mb-4 text-sm">
                  <div className="flex items-center gap-2">
                    <span className="font-medium">Location:</span>
                    <span className="text-muted-foreground">{program.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-medium">Impact:</span>
                    <span className="text-muted-foreground">{program.impact}</span>
                  </div>
                </div>
                <Button variant="outline" size="sm" className="rounded-full" asChild>
                  <Link href={`/programs/${i + 1}`}>Learn More</Link>
                </Button>
              </SimpleCard>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="health" className="space-y-8">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Healthcare Access",
                icon: Heart,
                color: "accent1",
                description: "Providing essential healthcare services to communities with limited medical resources.",
                location: "Rural communities worldwide",
                impact: "25 medical centers established",
              },
              {
                title: "Maternal Health",
                icon: Heart,
                color: "accent2",
                description: "Supporting maternal and child health through education and medical care.",
                location: "Developing regions",
                impact: "1,000+ healthy births supported",
              },
            ].map((program, i) => (
              <SimpleCard key={i} color={program.color as any} className="h-full card-hover">
                <div className="aspect-video relative bg-muted/50 rounded-lg overflow-hidden mb-4">
                  <Image
                    src={`/placeholder.svg?height=200&width=400&text=Health+${i + 1}`}
                    alt={program.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <ColoredIcon icon={<program.icon className="h-4 w-4" />} size="sm" color={program.color as any} />
                  </div>
                </div>
                <h3 className="font-bold text-lg mb-2">{program.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{program.description}</p>
                <div className="flex flex-col gap-1 mb-4 text-sm">
                  <div className="flex items-center gap-2">
                    <span className="font-medium">Location:</span>
                    <span className="text-muted-foreground">{program.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-medium">Impact:</span>
                    <span className="text-muted-foreground">{program.impact}</span>
                  </div>
                </div>
                <Button variant="outline" size="sm" className="rounded-full" asChild>
                  <Link href={`/programs/${i + 1}`}>Learn More</Link>
                </Button>
              </SimpleCard>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      <section className="py-12 mt-8">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8 inline-block mx-auto">
            <ColoredIcon icon={<Globe className="h-6 w-6" />} size="lg" color="primary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-heading">Want to support our programs?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Your contribution can help us expand our programs and reach more communities in need.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="colored-button colored-button-primary" asChild>
              <Link href="/donate">Donate Now</Link>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full" asChild>
              <Link href="/get-involved">Get Involved</Link>
            </Button>
          </div>
        </div>
      </section>
    </SiteLayout>
  )
}

