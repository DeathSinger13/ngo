import { Suspense } from "react"
import Link from "next/link"
import Image from "next/image"
import { SiteLayout } from "../components/site-layout"
import { PageHeader } from "../components/page-header"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar"
import { Badge } from "../components/ui/badge"
import { FilterBar } from "../components/filter-bar"
import { SkeletonCard } from "../components/skeleton-card"
import { SocialShare } from "../components/social-share"
import { Clock, Calendar } from "lucide-react"
import { formatDate, getInitials } from "../lib/utils"
import { getBlogPosts } from "../lib/api"

export const metadata = {
  title: "Blog | HopeWorks NGO",
  description: "Read the latest news, stories, and updates from our work around the world.",
}

export default async function BlogPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const posts = await getBlogPosts()

  // Filter posts based on search params
  const filteredPosts = posts.filter((post) => {
    // Filter by search query
    if (
      searchParams.q &&
      !post.title.toLowerCase().includes((searchParams.q as string).toLowerCase()) &&
      !post.excerpt.toLowerCase().includes((searchParams.q as string).toLowerCase())
    ) {
      return false
    }

    // Filter by category
    if (searchParams.category && post.category !== searchParams.category) {
      return false
    }

    // Filter by tags
    if (searchParams.tags) {
      const tagList = (searchParams.tags as string).split(",")
      if (!post.tags?.some((tag) => tagList.includes(tag))) {
        return false
      }
    }

    return true
  })

  // Sort posts
  const sortedPosts = [...filteredPosts]
  if (searchParams.sort) {
    switch (searchParams.sort) {
      case "newest":
        sortedPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
        break
      case "oldest":
        sortedPosts.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
        break
      case "name_asc":
        sortedPosts.sort((a, b) => a.title.localeCompare(b.title))
        break
      case "name_desc":
        sortedPosts.sort((a, b) => b.title.localeCompare(a.title))
        break
    }
  }

  const categories = [
    { id: "water", label: "Water" },
    { id: "education", label: "Education" },
    { id: "healthcare", label: "Healthcare" },
    { id: "environment", label: "Environment" },
    { id: "stories", label: "Success Stories" },
    { id: "updates", label: "Updates" },
  ]

  const tags = [
    { id: "water", label: "Water" },
    { id: "health", label: "Health" },
    { id: "education", label: "Education" },
    { id: "children", label: "Children" },
    { id: "sustainability", label: "Sustainability" },
    { id: "community", label: "Community" },
    { id: "impact", label: "Impact" },
  ]

  return (
    <SiteLayout>
      <PageHeader
        title="Our Blog"
        description="Read the latest news, stories, and updates from our work around the world."
      />

      <div className="container py-12">
        <FilterBar categories={categories} tags={tags} className="mb-8" />

        <Suspense fallback={<BlogLoading />}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedPosts.length > 0 ? (
              sortedPosts.map((post) => (
                <Card key={post.id} className="overflow-hidden flex flex-col h-full">
                  <div className="relative h-48">
                    <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="secondary">{post.category}</Badge>
                      <div className="flex items-center text-xs text-muted-foreground">
                        <Clock className="mr-1 h-3 w-3" />
                        {post.readTime} min read
                      </div>
                    </div>
                    <CardTitle className="line-clamp-2">
                      <Link href={`/blog/${post.slug}`} className="hover:underline">
                        {post.title}
                      </Link>
                    </CardTitle>
                    <CardDescription className="line-clamp-3">{post.excerpt}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>{formatDate(post.date)}</span>
                    </div>
                  </CardContent>
                  <CardFooter className="border-t pt-4 flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={post.author.avatar} alt={post.author.name} />
                        <AvatarFallback>{getInitials(post.author.name)}</AvatarFallback>
                      </Avatar>
                      <span className="text-sm font-medium">{post.author.name}</span>
                    </div>
                    <SocialShare url={`https://hopeworks.org/blog/${post.slug}`} title={post.title} variant="minimal" />
                  </CardFooter>
                </Card>
              ))
            ) : (
              <div className="col-span-3 py-12 text-center">
                <h3 className="text-xl font-medium mb-2">No blog posts found</h3>
                <p className="text-muted-foreground">Try adjusting your filters to find what you're looking for.</p>
              </div>
            )}
          </div>
        </Suspense>
      </div>
    </SiteLayout>
  )
}

function BlogLoading() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: 6 }).map((_, index) => (
        <SkeletonCard key={index} imageHeight={192} hasFooter={true} />
      ))}
    </div>
  )
}

