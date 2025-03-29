import Image from "next/image"
import Link from "next/link"
import { SiteLayout } from "../../components/site-layout"
import { Button } from "../../components/ui/button"
import { BlobBackground } from "../../components/blob-background"
import { DecorativeCurl } from "../../components/decorative-curl"
import { SimpleCard } from "../../components/simple-card"
import { Avatar, AvatarFallback, AvatarImage } from "../../components/ui/avatar"
import {
  Calendar,
  User,
  ArrowRight,
  Heart,
  MessageSquare,
  Share2,
  Bookmark,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"

// This would normally come from a database
const getBlogPostData = (slug: string) => {
  // Mock data for demonstration
  return {
    id: "1",
    title: "Transforming Lives: Clean Water Initiative Success in Rural Kenya",
    slug: "transforming-lives-clean-water-initiative",
    excerpt:
      "Our clean water initiative has reached a significant milestone, providing access to clean drinking water for over 10,000 people in rural Kenya. Learn about the impact this has had on local communities and the sustainable solutions we've implemented.",
    content: `
      <p>Access to clean water is something many of us take for granted, but for millions of people around the world, it remains an everyday struggle. In rural Kenya, communities have long faced challenges in accessing clean, safe drinking water, leading to waterborne diseases, reduced productivity, and limited opportunities for education and economic development.</p>
      
      <p>That's why we launched our Clean Water Initiative three years ago, with the ambitious goal of providing sustainable access to clean water for communities across rural Kenya. Today, we're proud to announce that we've reached a significant milestone: over 10,000 people now have reliable access to clean drinking water through our program.</p>
      
      <h2>The Challenge</h2>
      
      <p>When we began this initiative, we identified several key challenges:</p>
      
      <ul>
        <li>Limited infrastructure for water collection and distribution</li>
        <li>Contaminated water sources leading to waterborne diseases</li>
        <li>Long distances traveled (primarily by women and children) to collect water</li>
        <li>Lack of knowledge about water treatment and hygiene practices</li>
        <li>Limited resources for maintaining water systems</li>
      </ul>
      
      <p>These challenges required a comprehensive approach that went beyond simply drilling wells or installing pumps. We needed solutions that would be sustainable, community-driven, and adaptable to local conditions.</p>
      
      <h2>Our Approach</h2>
      
      <p>Working closely with local communities, government agencies, and technical experts, we developed a multi-faceted approach:</p>
      
      <ol>
        <li><strong>Infrastructure Development:</strong> We constructed 15 deep wells, installed 20 rainwater harvesting systems, and built 5 water distribution networks.</li>
        <li><strong>Water Treatment:</strong> We provided household water filters and established community water treatment stations.</li>
        <li><strong>Community Engagement:</strong> We formed and trained water management committees in each community.</li>
        <li><strong>Education:</strong> We conducted workshops on hygiene practices, water conservation, and system maintenance.</li>
        <li><strong>Sustainability Planning:</strong> We developed fee structures and maintenance plans to ensure long-term operation.</li>
      </ol>
      
      <h2>The Impact</h2>
      
      <p>The results have been transformative:</p>
      
      <ul>
        <li><strong>Health Improvements:</strong> Cases of waterborne diseases have decreased by 65% in the communities we serve.</li>
        <li><strong>Time Savings:</strong> Women and children now save an average of 3 hours per day previously spent collecting water.</li>
        <li><strong>Educational Opportunities:</strong> School attendance has increased by 35%, particularly among girls who were often responsible for water collection.</li>
        <li><strong>Economic Development:</strong> With more time available and better health, communities have seen growth in small businesses and agricultural productivity.</li>
        <li><strong>Community Empowerment:</strong> Local water committees now have the skills and resources to manage their water systems independently.</li>
      </ul>
      
      <h2>Stories of Change</h2>
      
      <p>Behind these statistics are real people whose lives have been transformed. Meet Sarah, a mother of four from the village of Kibera:</p>
      
      <blockquote>
        "Before the water project came to our village, I spent nearly four hours every day walking to collect water. The water wasn't clean, and my children were often sick. Now, we have clean water just five minutes from our home. My children are healthier and attending school regularly. I've even started a small vegetable garden with the extra time I have."
      </blockquote>
      
      <p>Or consider the story of Makena Primary School, where attendance has increased dramatically:</p>
      
      <blockquote>
        "Our students, especially girls, would miss school frequently either because they were collecting water or were sick from waterborne diseases," explains Principal Ochieng. "Since the installation of our rainwater harvesting system and filters, attendance has improved by over 40%. We're seeing better academic performance and more students continuing to secondary education."
      </blockquote>
      
      <h2>Looking Ahead</h2>
      
      <p>While we celebrate this milestone, we recognize that our work is far from complete. Millions of people in Kenya and around the world still lack access to clean water. Building on our success and lessons learned, we're expanding our initiative to reach an additional 15,000 people over the next two years.</p>
      
      <p>We're also enhancing our approach by:</p>
      
      <ul>
        <li>Incorporating solar-powered pumping systems to improve reliability and reduce operating costs</li>
        <li>Expanding our hygiene education program to include menstrual hygiene management</li>
        <li>Developing a mobile app for water committees to track system performance and maintenance needs</li>
        <li>Creating a revolving fund to support system repairs and upgrades</li>
      </ul>
      
      <h2>How You Can Help</h2>
      
      <p>The success of our Clean Water Initiative depends on the support of donors, volunteers, and advocates like you. Here's how you can get involved:</p>
      
      <ul>
        <li><strong>Donate:</strong> Your contribution helps us reach more communities with clean water solutions.</li>
        <li><strong>Volunteer:</strong> We need engineers, educators, and community organizers to support our work.</li>
        <li><strong>Spread the Word:</strong> Share our story and help raise awareness about the global water crisis.</li>
        <li><strong>Partner with Us:</strong> If you represent an organization with complementary goals, let's explore collaboration opportunities.</li>
      </ul>
      
      <p>Together, we can ensure that clean water becomes a reality for all, transforming lives and communities one drop at a time.</p>
    `,
    date: "June 10, 2025",
    author: {
      name: "Sarah Johnson",
      role: "Program Director",
      image: "/placeholder.svg?height=100&width=100&text=SJ",
    },
    category: "Success Stories",
    tags: ["Clean Water", "Kenya", "Community Development", "Health"],
    featuredImage: "/placeholder.svg?height=600&width=1200&text=Clean+Water+Initiative",
    gallery: [
      "/placeholder.svg?height=400&width=600&text=Water+Well",
      "/placeholder.svg?height=400&width=600&text=Community+Meeting",
      "/placeholder.svg?height=400&width=600&text=Children+With+Clean+Water",
      "/placeholder.svg?height=400&width=600&text=Water+Committee+Training",
    ],
    relatedPosts: [
      {
        title: "Education Program Expands to 5 New Schools",
        excerpt:
          "Our education initiative is growing with the addition of 5 new partner schools in underserved communities.",
        slug: "education-program-expands",
        category: "Updates",
        date: "May 28, 2025",
        image: "/placeholder.svg?height=200&width=400&text=Education",
      },
      {
        title: "Volunteer Spotlight: Meet Maria",
        excerpt:
          "Maria has dedicated over 500 hours to our community development projects. Learn about her journey and impact.",
        slug: "volunteer-spotlight-maria",
        category: "Stories",
        date: "May 15, 2025",
        image: "/placeholder.svg?height=200&width=400&text=Volunteer",
      },
      {
        title: "The Importance of Sustainable Development",
        excerpt:
          "Exploring how sustainable practices are essential for long-term community development and environmental protection.",
        slug: "importance-of-sustainable-development",
        category: "Insights",
        date: "May 3, 2025",
        image: "/placeholder.svg?height=200&width=400&text=Sustainable",
      },
    ],
    comments: 12,
    likes: 45,
  }
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getBlogPostData(params.slug)

  return (
    <SiteLayout>
      <div className="relative">
        <BlobBackground blobCount={3} className="opacity-30" />
        <DecorativeCurl position="top-right" color="primary" size="md" />
        <DecorativeCurl position="bottom-left" color="tertiary" size="sm" />

        {/* Blog Post Header */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2 mb-4">
            <Link
              href={`/blog/category/${post.category.toLowerCase().replace(/\s+/g, "-")}`}
              className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80"
            >
              {post.category}
            </Link>
            {post.tags.map((tag, i) => (
              <Link
                key={i}
                href={`/blog/tag/${tag.toLowerCase().replace(/\s+/g, "-")}`}
                className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary/10 text-secondary hover:bg-secondary/20"
              >
                {tag}
              </Link>
            ))}
          </div>

          <h1 className="text-3xl md:text-4xl font-bold mb-4 gradient-heading">{post.title}</h1>

          <div className="flex items-center gap-6 mb-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span>{post.author.name}</span>
            </div>
            <div className="flex items-center gap-2">
              <MessageSquare className="h-4 w-4" />
              <span>{post.comments} Comments</span>
            </div>
          </div>

          <div className="aspect-[21/9] relative rounded-xl overflow-hidden mb-8">
            <Image src={post.featuredImage || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
          </div>
        </div>

        {/* Blog Post Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">
            <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: post.content }}></div>

            <div className="flex items-center justify-between mt-8 pt-6 border-t">
              <div className="flex items-center gap-4">
                <Button variant="outline" size="sm" className="rounded-full">
                  <Heart className="h-4 w-4 mr-2" />
                  <span>{post.likes} Likes</span>
                </Button>
                <Button variant="outline" size="sm" className="rounded-full">
                  <Share2 className="h-4 w-4 mr-2" />
                  <span>Share</span>
                </Button>
                <Button variant="outline" size="sm" className="rounded-full">
                  <Bookmark className="h-4 w-4 mr-2" />
                  <span>Save</span>
                </Button>
              </div>

              <div className="flex gap-2">
                <Button variant="outline" size="icon" className="rounded-full">
                  <ChevronLeft className="h-4 w-4" />
                  <span className="sr-only">Previous post</span>
                </Button>
                <Button variant="outline" size="icon" className="rounded-full">
                  <ChevronRight className="h-4 w-4" />
                  <span className="sr-only">Next post</span>
                </Button>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t">
              <div className="flex items-center gap-4 mb-6">
                <Avatar className="h-16 w-16">
                  <AvatarImage src={post.author.image} alt={post.author.name} />
                  <AvatarFallback>
                    {post.author.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-lg font-bold">{post.author.name}</h3>
                  <p className="text-sm text-muted-foreground">{post.author.role}</p>
                </div>
              </div>
              <p className="text-muted-foreground mb-4">
                Sarah Johnson is the Program Director for our Clean Water Initiative. With over 10 years of experience
                in international development, she has led water access projects across East Africa and Asia.
              </p>
              <Button variant="outline" size="sm" asChild>
                <Link href="/about#team">View Profile</Link>
              </Button>
            </div>

            <div className="mt-8 pt-6 border-t">
              <h2 className="text-2xl font-bold mb-6">Comments (12)</h2>
              <div className="space-y-6">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex gap-4">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={`/placeholder.svg?height=40&width=40&text=User${i}`} alt={`User ${i}`} />
                      <AvatarFallback>U{i}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="font-medium">User Name {i}</h4>
                        <span className="text-xs text-muted-foreground">
                          {i} day{i > 1 ? "s" : ""} ago
                        </span>
                      </div>
                      <p className="text-muted-foreground text-sm mb-2">
                        This is an amazing initiative! It's wonderful to see the positive impact clean water access has
                        on communities, especially for women and children.
                      </p>
                      <Button variant="ghost" size="sm" className="h-7 px-2 text-xs">
                        Reply
                      </Button>
                    </div>
                  </div>
                ))}
              </div>

              <Button className="mt-4" asChild>
                <Link href="#comments">View All Comments</Link>
              </Button>
            </div>
          </div>

          <div>
            <div className="sticky top-24">
              <SimpleCard color="primary" className="mb-6">
                <h3 className="font-bold text-lg mb-4">Related Projects</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-16 h-16 relative shrink-0 rounded-md overflow-hidden">
                      <Image
                        src="/placeholder.svg?height=64&width=64&text=Water"
                        alt="Clean Water Initiative"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-medium text-sm">Clean Water Initiative</h4>
                      <p className="text-xs text-muted-foreground mt-1">
                        Providing clean water solutions to rural communities
                      </p>
                      <Button variant="link" className="p-0 h-auto text-xs" asChild>
                        <Link href="/projects/clean-water-initiative">Learn More</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </SimpleCard>

              <SimpleCard color="secondary" className="mb-6">
                <h3 className="font-bold text-lg mb-4">Related Posts</h3>
                <div className="space-y-4">
                  {post.relatedPosts.map((relatedPost, i) => (
                    <Link
                      key={i}
                      href={`/blog/${relatedPost.slug}`}
                      className="flex items-start gap-3 p-2 rounded-md hover:bg-muted/50 transition-colors"
                    >
                      <div className="w-16 h-16 relative shrink-0 rounded-md overflow-hidden">
                        <Image
                          src={relatedPost.image || "/placeholder.svg"}
                          alt={relatedPost.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-medium text-sm line-clamp-2">{relatedPost.title}</h4>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground mt-1">
                          <span>{relatedPost.date}</span>
                          <span>•</span>
                          <span>{relatedPost.category}</span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </SimpleCard>

              <SimpleCard color="tertiary">
                <h3 className="font-bold text-lg mb-4">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag, i) => (
                    <Link
                      key={i}
                      href={`/blog/tag/${tag.toLowerCase().replace(/\s+/g, "-")}`}
                      className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-tertiary/10 text-tertiary hover:bg-tertiary/20"
                    >
                      {tag}
                    </Link>
                  ))}
                  <Link
                    href="/blog/tags"
                    className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-muted hover:bg-muted/80"
                  >
                    View All Tags
                  </Link>
                </div>
              </SimpleCard>
            </div>
          </div>
        </div>

        {/* More Posts */}
        <section className="py-12 mt-8 border-t">
          <h2 className="text-2xl font-bold mb-8 gradient-heading">More Articles You Might Like</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <SimpleCard key={i} className="overflow-hidden card-hover">
                <div className="aspect-video relative">
                  <Image
                    src={`/placeholder.svg?height=200&width=400&text=Article${i}`}
                    alt={`Article ${i}`}
                    fill
                    className="object-cover rounded-t-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
                  <div className="absolute top-4 left-4 bg-primary text-primary-foreground rounded-full px-2 py-0.5 text-xs font-medium">
                    Featured
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-3 text-xs text-muted-foreground mb-2">
                    <div className="flex items-center">
                      <Calendar className="mr-1 h-3 w-3" />
                      <span>June {i}, 2025</span>
                    </div>
                    <div className="flex items-center">
                      <User className="mr-1 h-3 w-3" />
                      <span>Author Name</span>
                    </div>
                  </div>
                  <h3 className="font-bold text-lg mb-2">Another Interesting Article Title Here</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    A brief excerpt from the article that gives readers an idea of what the content is about.
                  </p>
                  <Button variant="link" className="p-0" asChild>
                    <Link href={`/blog/another-article-${i}`} className="flex items-center">
                      Read More <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </SimpleCard>
            ))}
          </div>

          <div className="flex justify-center mt-8">
            <Button variant="outline" className="rounded-full" asChild>
              <Link href="/blog">View All Articles</Link>
            </Button>
          </div>
        </section>
      </div>
    </SiteLayout>
  )
}

