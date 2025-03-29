"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { SiteLayout } from "../components/site-layout"
import { PageHeader } from "../components/page-header"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs"
import { BlobBackground } from "../components/blob-background"
import { DecorativeCurl } from "../components/decorative-curl"
import { Search, FileText, Calendar, FolderOpen, ArrowRight } from "lucide-react"

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [searchResults, setSearchResults] = useState<any[]>([])
  const [isSearching, setIsSearching] = useState(false)

  // Mock search function - in a real app, this would call an API
  const performSearch = (query: string) => {
    setIsSearching(true)

    // Simulate API call delay
    setTimeout(() => {
      // Mock results
      const results = [
        // Projects
        {
          type: "project",
          title: "Clean Water Initiative",
          description: "Providing clean water solutions to rural communities facing water scarcity.",
          url: "/projects/clean-water-initiative",
          image: "/placeholder.svg?height=100&width=100&text=Water",
        },
        {
          type: "project",
          title: "Education for All",
          description: "Building schools and providing educational resources in underserved areas.",
          url: "/projects/education-for-all",
          image: "/placeholder.svg?height=100&width=100&text=Education",
        },

        // Blog posts
        {
          type: "blog",
          title: "Transforming Lives: Clean Water Initiative Success",
          description:
            "Our clean water initiative has reached a significant milestone, providing access to clean drinking water for over 10,000 people in rural Kenya.",
          url: "/blog/transforming-lives-clean-water-initiative",
          date: "June 10, 2025",
          image: "/placeholder.svg?height=100&width=100&text=Blog",
        },
        {
          type: "blog",
          title: "The Importance of Sustainable Development",
          description:
            "Exploring how sustainable practices are essential for long-term community development and environmental protection.",
          url: "/blog/importance-of-sustainable-development",
          date: "May 3, 2025",
          image: "/placeholder.svg?height=100&width=100&text=Blog",
        },

        // Events
        {
          type: "event",
          title: "Annual Charity Gala",
          description:
            "Join us for an elegant evening of dinner, entertainment, and fundraising to support our global initiatives.",
          url: "/events/annual-charity-gala",
          date: "September 15, 2025",
          image: "/placeholder.svg?height=100&width=100&text=Event",
        },
        {
          type: "event",
          title: "Community Cleanup Day",
          description: "Join our team in removing trash and plastic from local parks and streets.",
          url: "/events/community-cleanup-day",
          date: "July 8, 2025",
          image: "/placeholder.svg?height=100&width=100&text=Event",
        },
      ].filter(
        (item) =>
          item.title.toLowerCase().includes(query.toLowerCase()) ||
          item.description.toLowerCase().includes(query.toLowerCase()),
      )

      setSearchResults(results)
      setIsSearching(false)
    }, 500)
  }

  // Get search query from URL on initial load
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)
    const query = urlParams.get("q") || ""
    setSearchQuery(query)

    if (query) {
      performSearch(query)
    }
  }, [])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      // Update URL with search query
      const url = new URL(window.location.href)
      url.searchParams.set("q", searchQuery)
      window.history.pushState({}, "", url.toString())

      performSearch(searchQuery)
    }
  }

  // Filter results by type
  const projectResults = searchResults.filter((result) => result.type === "project")
  const blogResults = searchResults.filter((result) => result.type === "blog")
  const eventResults = searchResults.filter((result) => result.type === "event")

  return (
    <SiteLayout>
      <div className="relative">
        <BlobBackground blobCount={3} className="opacity-30" />
        <DecorativeCurl position="top-right" color="primary" size="md" />
        <DecorativeCurl position="bottom-left" color="tertiary" size="sm" />

        <PageHeader title="Search" description="Find projects, events, blog posts, and more." gradient />

        <div className="max-w-3xl mx-auto mb-8">
          <form onSubmit={handleSearch} className="flex gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search for projects, events, blog posts..."
                className="pl-10 py-6 text-base"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Button type="submit" size="lg" className="colored-button colored-button-primary">
              Search
            </Button>
          </form>
        </div>

        {searchQuery && (
          <div className="mb-6">
            <h2 className="text-xl font-bold mb-2">
              {isSearching
                ? "Searching..."
                : searchResults.length > 0
                  ? `Search results for "${searchQuery}" (${searchResults.length})`
                  : `No results found for "${searchQuery}"`}
            </h2>
            {!isSearching && searchResults.length === 0 && (
              <p className="text-muted-foreground">
                Try adjusting your search terms or browse our site using the navigation menu.
              </p>
            )}
          </div>
        )}

        {searchResults.length > 0 && (
          <Tabs defaultValue="all" className="mb-12">
            <TabsList className="w-full max-w-md grid grid-cols-4 h-auto p-1 mb-8">
              <TabsTrigger value="all" className="py-3">
                All ({searchResults.length})
              </TabsTrigger>
              <TabsTrigger value="projects" className="py-3">
                Projects ({projectResults.length})
              </TabsTrigger>
              <TabsTrigger value="blog" className="py-3">
                Blog ({blogResults.length})
              </TabsTrigger>
              <TabsTrigger value="events" className="py-3">
                Events ({eventResults.length})
              </TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="space-y-6">
              {searchResults.map((result, index) => (
                <div key={index} className="flex gap-4 p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                  <div className="hidden sm:block shrink-0">
                    <div className="relative w-16 h-16 rounded-md overflow-hidden">
                      <Image
                        src={result.image || "/placeholder.svg"}
                        alt={result.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      {result.type === "project" && (
                        <span className="flex items-center text-xs text-primary">
                          <FolderOpen className="h-3 w-3 mr-1" /> Project
                        </span>
                      )}
                      {result.type === "blog" && (
                        <span className="flex items-center text-xs text-secondary">
                          <FileText className="h-3 w-3 mr-1" /> Blog
                        </span>
                      )}
                      {result.type === "event" && (
                        <span className="flex items-center text-xs text-tertiary">
                          <Calendar className="h-3 w-3 mr-1" /> Event
                        </span>
                      )}
                      {result.date && (
                        <>
                          <span className="text-muted-foreground text-xs">•</span>
                          <span className="text-xs text-muted-foreground">{result.date}</span>
                        </>
                      )}
                    </div>
                    <h3 className="font-bold mb-1">
                      <Link href={result.url} className="hover:text-primary transition-colors">
                        {result.title}
                      </Link>
                    </h3>
                    <p className="text-sm text-muted-foreground mb-2">{result.description}</p>
                    <Button variant="link" className="p-0 h-auto" asChild>
                      <Link href={result.url} className="flex items-center text-primary">
                        View <ArrowRight className="ml-1 h-3 w-3" />
                      </Link>
                    </Button>
                  </div>
                </div>
              ))}
            </TabsContent>

            <TabsContent value="projects" className="space-y-6">
              {projectResults.length > 0 ? (
                projectResults.map((result, index) => (
                  <div key={index} className="flex gap-4 p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                    <div className="hidden sm:block shrink-0">
                      <div className="relative w-16 h-16 rounded-md overflow-hidden">
                        <Image
                          src={result.image || "/placeholder.svg"}
                          alt={result.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="flex items-center text-xs text-primary">
                          <FolderOpen className="h-3 w-3 mr-1" /> Project
                        </span>
                      </div>
                      <h3 className="font-bold mb-1">
                        <Link href={result.url} className="hover:text-primary transition-colors">
                          {result.title}
                        </Link>
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4">{result.description}</p>
                      <Button variant="link" className="p-0 h-auto" asChild>
                        <Link href={result.url} className="flex items-center text-primary">
                          View <ArrowRight className="ml-1 h-3 w-3" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-muted-foreground">No project results found. Try adjusting your search terms.</p>
              )}
            </TabsContent>

            <TabsContent value="blog" className="space-y-6">
              {blogResults.length > 0 ? (
                blogResults.map((result, index) => (
                  <div key={index} className="flex gap-4 p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                    <div className="hidden sm:block shrink-0">
                      <div className="relative w-16 h-16 rounded-md overflow-hidden">
                        <Image
                          src={result.image || "/placeholder.svg"}
                          alt={result.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="flex items-center text-xs text-secondary">
                          <FileText className="h-3 w-3 mr-1" /> Blog
                        </span>
                        <span className="text-muted-foreground text-xs">•</span>
                        <span className="text-xs text-muted-foreground">{result.date}</span>
                      </div>
                      <h3 className="font-bold mb-1">
                        <Link href={result.url} className="hover:text-primary transition-colors">
                          {result.title}
                        </Link>
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4">{result.description}</p>
                      <Button variant="link" className="p-0 h-auto" asChild>
                        <Link href={result.url} className="flex items-center text-primary">
                          Read More <ArrowRight className="ml-1 h-3 w-3" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-muted-foreground">No blog results found. Try adjusting your search terms.</p>
              )}
            </TabsContent>

            <TabsContent value="events" className="space-y-6">
              {eventResults.length > 0 ? (
                eventResults.map((result, index) => (
                  <div key={index} className="flex gap-4 p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                    <div className="hidden sm:block shrink-0">
                      <div className="relative w-16 h-16 rounded-md overflow-hidden">
                        <Image
                          src={result.image || "/placeholder.svg"}
                          alt={result.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="flex items-center text-xs text-tertiary">
                          <Calendar className="h-3 w-3 mr-1" /> Event
                        </span>
                        <span className="text-muted-foreground text-xs">•</span>
                        <span className="text-xs text-muted-foreground">{result.date}</span>
                      </div>
                      <h3 className="font-bold mb-1">
                        <Link href={result.url} className="hover:text-primary transition-colors">
                          {result.title}
                        </Link>
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4">{result.description}</p>
                      <Button variant="link" className="p-0 h-auto" asChild>
                        <Link href={result.url} className="flex items-center text-primary">
                          View Event <ArrowRight className="ml-1 h-3 w-3" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-muted-foreground">No event results found. Try adjusting your search terms.</p>
              )}
            </TabsContent>
          </Tabs>
        )}

        {/* Popular Searches */}
        {(!searchQuery || searchResults.length === 0) && (
          <div className="mt-8">
            <h2 className="text-xl font-bold mb-4">Popular Searches</h2>
            <div className="flex flex-wrap gap-2">
              {["Clean Water", "Education", "Volunteer", "Donate", "Events", "Healthcare", "Community Garden"].map(
                (term, i) => (
                  <Button
                    key={i}
                    variant="outline"
                    size="sm"
                    className="rounded-full"
                    onClick={() => {
                      setSearchQuery(term)
                      performSearch(term)

                      // Update URL
                      const url = new URL(window.location.href)
                      url.searchParams.set("q", term)
                      window.history.pushState({}, "", url.toString())
                    }}
                  >
                    {term}
                  </Button>
                ),
              )}
            </div>
          </div>
        )}
      </div>
    </SiteLayout>
  )
}

