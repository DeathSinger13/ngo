"use client"

import type React from "react"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Heart, Calendar, Users, BookOpen } from "lucide-react"
import { Button } from "./components/ui/button"
import { DecorativeCurl } from "./components/decorative-curl"
import { BlobBackground } from "./components/blob-background"
import { WaveDivider } from "./components/wave-divider"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 md:py-48 overflow-hidden">
        <BlobBackground blobCount={5} />
        <DecorativeCurl position="top-right" color="primary" size="lg" />
        <DecorativeCurl position="bottom-left" color="secondary" size="md" />

        <div className="container relative z-10 flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 max-w-3xl gradient-heading">
            Making a Difference in Communities Worldwide
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl">
            We're dedicated to creating sustainable solutions for communities in need through education, healthcare, and
            environmental initiatives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="rounded-full colored-button colored-button-primary" asChild>
              <Link href="/donate">Donate Now</Link>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full" asChild>
              <Link href="/get-involved">
                Get Involved <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="relative py-16 bg-muted/30">
        <WaveDivider position="top" color="bg-muted/30" height={80} />
        <DecorativeCurl position="bottom-right" color="tertiary" size="sm" />

        <div className="container relative z-10">
          <h2 className="text-3xl font-bold text-center mb-12 gradient-heading">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-background rounded-xl p-6 shadow-md card-hover">
              <div className="flex items-center gap-4 mb-4">
                <div className="colored-icon colored-icon-primary p-3">
                  <Trophy className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">120+</div>
                  <div className="text-sm text-muted-foreground">Projects Completed</div>
                </div>
              </div>
              <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                <div className="h-full bg-primary rounded-full" style={{ width: "80%" }}></div>
              </div>
            </div>

            <div className="bg-background rounded-xl p-6 shadow-md card-hover">
              <div className="flex items-center gap-4 mb-4">
                <div className="colored-icon colored-icon-secondary p-3">
                  <Users className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-3xl font-bold text-secondary">50,000+</div>
                  <div className="text-sm text-muted-foreground">Lives Impacted</div>
                </div>
              </div>
              <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                <div className="h-full bg-secondary rounded-full" style={{ width: "65%" }}></div>
              </div>
            </div>

            <div className="bg-background rounded-xl p-6 shadow-md card-hover">
              <div className="flex items-center gap-4 mb-4">
                <div className="colored-icon colored-icon-tertiary p-3">
                  <Map className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-3xl font-bold text-tertiary">75+</div>
                  <div className="text-sm text-muted-foreground">Communities Served</div>
                </div>
              </div>
              <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                <div className="h-full bg-tertiary rounded-full" style={{ width: "90%" }}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16">
        <div className="container">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold gradient-heading">Featured Projects</h2>
            <Button variant="ghost" className="rounded-full" asChild>
              <Link href="/projects" className="flex items-center gap-2">
                View All <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Clean Water Initiative",
                description: "Providing clean water solutions to rural communities facing water scarcity.",
                image: "/placeholder.svg?height=300&width=400",
                category: "Environment",
                progress: 75,
                color: "primary",
              },
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
            ].map((project, i) => (
              <div
                key={i}
                className={`colored-card colored-card-${project.color} rounded-xl overflow-hidden card-hover`}
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div
                    className={`absolute top-3 right-3 bg-${project.color} text-${project.color}-foreground px-3 py-1 rounded-full text-xs font-medium`}
                  >
                    {project.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Progress</span>
                      <span className="font-medium">{project.progress}%</span>
                    </div>
                    <div className="h-2 w-full bg-background rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-${project.color} rounded-full`}
                        style={{ width: `${project.progress}%` }}
                      ></div>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    className={`mt-4 p-0 text-${project.color} hover:text-${project.color}/90`}
                    asChild
                  >
                    <Link
                      href={`/projects/${project.title.toLowerCase().replace(/\s+/g, "-")}`}
                      className="flex items-center"
                    >
                      Learn more <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Get Involved */}
      <section className="relative py-16 bg-muted/30">
        <WaveDivider position="top" color="bg-muted/30" height={80} />
        <DecorativeCurl position="top-left" color="accent1" size="md" />
        <DecorativeCurl position="bottom-right" color="accent2" size="sm" />

        <div className="container relative z-10">
          <h2 className="text-3xl font-bold text-center mb-12 gradient-heading">Ways to Get Involved</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Volunteer",
                description: "Join our team of dedicated volunteers making a difference.",
                icon: <Users className="h-10 w-10" />,
                link: "/get-involved#volunteer",
                color: "primary",
              },
              {
                title: "Donate",
                description: "Support our projects with one-time or recurring donations.",
                icon: <Heart className="h-10 w-10" />,
                link: "/donate",
                color: "secondary",
              },
              {
                title: "Attend Events",
                description: "Participate in our fundraising and awareness events.",
                icon: <Calendar className="h-10 w-10" />,
                link: "/events",
                color: "tertiary",
              },
              {
                title: "Stay Informed",
                description: "Read our blog and subscribe to our newsletter.",
                icon: <BookOpen className="h-10 w-10" />,
                link: "/blog",
                color: "accent1",
              },
            ].map((item, i) => (
              <div key={i} className={`colored-card colored-card-${item.color} rounded-xl p-6 card-hover`}>
                <div className={`colored-icon colored-icon-${item.color} p-4 mb-4 mx-auto`}>{item.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-center">{item.title}</h3>
                <p className="text-muted-foreground mb-4 text-center">{item.description}</p>
                <Button
                  variant="ghost"
                  className={`w-full text-${item.color} hover:text-${item.color}/90 border border-${item.color}/20 hover:bg-${item.color}/10 rounded-full`}
                  asChild
                >
                  <Link href={item.link}>Learn More</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

// These components are defined here for simplicity
function Trophy(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
      <path d="M4 22h16" />
      <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
      <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
      <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
    </svg>
  )
}

function Map(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21" />
      <line x1="9" x2="9" y1="3" y2="18" />
      <line x1="15" x2="15" y1="6" y2="21" />
    </svg>
  )
}

