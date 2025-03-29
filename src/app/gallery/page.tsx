import Link from "next/link"
import Image from "next/image"
import { Heart, Filter, Play, Download } from "lucide-react"
import { Button } from "../components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs"
import { Card, CardContent } from "../components/ui/card"
import { Badge } from "../components/ui/badge"
import { GalleryLightbox } from "../components/gallery-lightbox"
import { VideoPlayer } from "../components/video-player"

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center gap-2">
              <Heart className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">HopeWorks</span>
            </Link>
            <nav className="hidden md:flex items-center gap-6">
              <Link href="/projects" className="text-sm font-medium hover:text-primary transition-colors">
                Projects
              </Link>
              <Link href="/events" className="text-sm font-medium hover:text-primary transition-colors">
                Events
              </Link>
              <Link href="/get-involved" className="text-sm font-medium hover:text-primary transition-colors">
                Get Involved
              </Link>
              <Link href="/blog" className="text-sm font-medium hover:text-primary transition-colors">
                Blog
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative py-16 md:py-24 bg-primary/10 dark:bg-primary/5">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                Our Impact in <span className="text-primary">Pictures</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Explore our gallery of photos and videos showcasing the impact of our work in communities around the
                world.
              </p>
            </div>
          </div>
        </section>

        {/* Gallery Tabs */}
        <section className="py-16">
          <div className="container">
            <Tabs defaultValue="photos" className="w-full">
              <div className="flex justify-center mb-8">
                <TabsList className="grid w-full max-w-md grid-cols-2">
                  <TabsTrigger value="photos" className="text-base py-3">
                    Photos
                  </TabsTrigger>
                  <TabsTrigger value="videos" className="text-base py-3">
                    Videos
                  </TabsTrigger>
                </TabsList>
              </div>

              {/* Photos Tab */}
              <TabsContent value="photos" className="space-y-8">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm" className="flex items-center gap-2">
                      <Filter className="h-4 w-4" />
                      Filter
                    </Button>
                    <Badge variant="outline" className="cursor-pointer hover:bg-muted">
                      All
                    </Badge>
                    <Badge variant="outline" className="cursor-pointer hover:bg-muted">
                      Water Projects
                    </Badge>
                    <Badge variant="outline" className="cursor-pointer hover:bg-muted">
                      Education
                    </Badge>
                    <Badge variant="outline" className="cursor-pointer hover:bg-muted">
                      Healthcare
                    </Badge>
                  </div>
                  <div className="text-sm text-muted-foreground">Showing 12 of 48 photos</div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {Array.from({ length: 12 }).map((_, i) => (
                    <GalleryLightbox
                      key={i}
                      index={i}
                      src={`/placeholder.svg?height=400&width=600`}
                      alt={`Gallery image ${i + 1}`}
                      category={
                        i % 4 === 0
                          ? "Water Projects"
                          : i % 4 === 1
                            ? "Education"
                            : i % 4 === 2
                              ? "Healthcare"
                              : "Community"
                      }
                    />
                  ))}
                </div>

                <div className="flex justify-center mt-8">
                  <Button>Load More</Button>
                </div>
              </TabsContent>

              {/* Videos Tab */}
              <TabsContent value="videos" className="space-y-8">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm" className="flex items-center gap-2">
                      <Filter className="h-4 w-4" />
                      Filter
                    </Button>
                    <Badge variant="outline" className="cursor-pointer hover:bg-muted">
                      All
                    </Badge>
                    <Badge variant="outline" className="cursor-pointer hover:bg-muted">
                      Project Updates
                    </Badge>
                    <Badge variant="outline" className="cursor-pointer hover:bg-muted">
                      Testimonials
                    </Badge>
                    <Badge variant="outline" className="cursor-pointer hover:bg-muted">
                      Events
                    </Badge>
                  </div>
                  <div className="text-sm text-muted-foreground">Showing 6 of 24 videos</div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {Array.from({ length: 6 }).map((_, i) => (
                    <VideoPlayer
                      key={i}
                      title={
                        i % 3 === 0
                          ? "Clean Water Project Update"
                          : i % 3 === 1
                            ? "Education Initiative Impact"
                            : "Community Healthcare Program"
                      }
                      description={
                        i % 3 === 0
                          ? "See how our clean water project is transforming lives in rural communities."
                          : i % 3 === 1
                            ? "Learn about the impact of our education initiatives on local children."
                            : "Discover how our healthcare programs are improving access to medical care."
                      }
                      thumbnail={`/placeholder.svg?height=400&width=600`}
                      duration={i % 3 === 0 ? "3:45" : i % 3 === 1 ? "5:20" : "4:10"}
                    />
                  ))}
                </div>

                <div className="flex justify-center mt-8">
                  <Button>Load More</Button>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Featured Media */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">Featured Media</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="overflow-hidden">
                <div className="relative aspect-video">
                  <Image
                    src="/placeholder.svg?height=600&width=1000"
                    alt="Annual Report Video"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <Button size="icon" className="rounded-full bg-primary/90 hover:bg-primary h-16 w-16">
                      <Play className="h-8 w-8" />
                      <span className="sr-only">Play Annual Report Video</span>
                    </Button>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">2024 Annual Impact Report</h3>
                  <p className="text-muted-foreground mb-4">
                    Watch our annual impact report video showcasing the difference we've made in communities worldwide
                    over the past year.
                  </p>
                  <div className="flex items-center gap-4">
                    <Button variant="outline" className="flex items-center gap-2">
                      <Download className="h-4 w-4" />
                      Download Report
                    </Button>
                    <Button>Watch Video</Button>
                  </div>
                </CardContent>
              </Card>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Card className="overflow-hidden">
                  <div className="relative aspect-square">
                    <Image
                      src="/placeholder.svg?height=400&width=400"
                      alt="Project Spotlight"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-bold mb-1">Project Spotlight</h3>
                    <p className="text-sm text-muted-foreground">Clean Water Initiative in East Africa</p>
                  </CardContent>
                </Card>
                <Card className="overflow-hidden">
                  <div className="relative aspect-square">
                    <Image
                      src="/placeholder.svg?height=400&width=400"
                      alt="Volunteer Stories"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-bold mb-1">Volunteer Stories</h3>
                    <p className="text-sm text-muted-foreground">Meet the people making a difference</p>
                  </CardContent>
                </Card>
                <Card className="overflow-hidden">
                  <div className="relative aspect-square">
                    <Image
                      src="/placeholder.svg?height=400&width=400"
                      alt="Behind the Scenes"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-bold mb-1">Behind the Scenes</h3>
                    <p className="text-sm text-muted-foreground">A day in the life of our field team</p>
                  </CardContent>
                </Card>
                <Card className="overflow-hidden">
                  <div className="relative aspect-square">
                    <Image
                      src="/placeholder.svg?height=400&width=400"
                      alt="Community Celebrations"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-bold mb-1">Community Celebrations</h3>
                    <p className="text-sm text-muted-foreground">Celebrating project completions</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Media Resources */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Media Resources</h2>
              <p className="text-muted-foreground mb-8">
                Download high-resolution photos, logos, and media kits for press and partner use.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <Card>
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className="mb-4 p-3 rounded-full bg-primary/10">
                      <Download className="h-10 w-10 text-primary" />
                    </div>
                    <h3 className="font-bold mb-2">Press Kit</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Download our complete press kit with logos, fact sheets, and executive bios.
                    </p>
                    <Button variant="outline" className="w-full">
                      Download
                    </Button>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className="mb-4 p-3 rounded-full bg-primary/10">
                      <Image
                        src="/placeholder.svg?height=40&width=40"
                        alt="Logo Icon"
                        width={40}
                        height={40}
                        className="text-primary"
                      />
                    </div>
                    <h3 className="font-bold mb-2">Logo Package</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Download our logos in various formats and sizes for different uses.
                    </p>
                    <Button variant="outline" className="w-full">
                      Download
                    </Button>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className="mb-4 p-3 rounded-full bg-primary/10">
                      <Play className="h-10 w-10 text-primary" />
                    </div>
                    <h3 className="font-bold mb-2">B-Roll Footage</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Access high-quality B-roll footage from our projects for media use.
                    </p>
                    <Button variant="outline" className="w-full">
                      Access
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t bg-background">
        <div className="container py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Heart className="h-6 w-6 text-primary" />
                <span className="text-xl font-bold">HopeWorks</span>
              </div>
              <p className="text-muted-foreground mb-4">
                Making a difference in communities worldwide through sustainable solutions.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className="text-muted-foreground hover:text-primary">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/projects" className="text-muted-foreground hover:text-primary">
                    Projects
                  </Link>
                </li>
                <li>
                  <Link href="/events" className="text-muted-foreground hover:text-primary">
                    Events
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-muted-foreground hover:text-primary">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Get Involved</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/donate" className="text-muted-foreground hover:text-primary">
                    Donate
                  </Link>
                </li>
                <li>
                  <Link href="/get-involved#volunteer" className="text-muted-foreground hover:text-primary">
                    Volunteer
                  </Link>
                </li>
                <li>
                  <Link href="/get-involved#partner" className="text-muted-foreground hover:text-primary">
                    Partner With Us
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
              <address className="not-italic text-muted-foreground">
                <p>123 Hope Street</p>
                <p>New York, NY 10001</p>
                <p className="mt-2">info@hopeworks.org</p>
                <p>(123) 456-7890</p>
              </address>
            </div>
          </div>
          <div className="border-t mt-12 pt-6 text-center text-muted-foreground">
            <p>© 2025 HopeWorks. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

