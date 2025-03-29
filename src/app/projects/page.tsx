import { Suspense } from "react"
import { SiteLayout } from "../components/site-layout"
import { PageHeader } from "../components/page-header"
import { ProjectCard } from "../components/project-card"
import { FilterBar } from "../components/filter-bar"
import { SkeletonCard } from "../components/skeleton-card"
import { getProjects, Project } from "../lib/api"

export const metadata = {
  title: "Projects | HopeWorks NGO",
  description: "Explore our ongoing projects around the world and see how we're making a difference.",
}

export default async function ProjectsPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const projects: Project[] = await getProjects()

  // Filter projects based on search params
  const filteredProjects = projects.filter((project) => {
    // Filter by search query
    if (
      searchParams.q &&
      !project.title.toLowerCase().includes((searchParams.q as string).toLowerCase()) &&
      !project.description.toLowerCase().includes((searchParams.q as string).toLowerCase())
    ) {
      return false
    }

    // Filter by category
    if (searchParams.category && project.category !== searchParams.category) {
      return false
    }

    // Filter by location
    if (searchParams.location && project.location !== searchParams.location) {
      return false
    }

    // Filter by tags
    if (searchParams.tags) {
      const tagList = (searchParams.tags as string).split(",")
      if (!project.tags?.some((tag) => tagList.includes(tag))) {
        return false
      }
    }

    return true
  })

  // Sort projects
  const sortedProjects = [...filteredProjects]
  if (searchParams.sort) {
    switch (searchParams.sort) {
      case "newest":
        sortedProjects.sort((a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime())
        break
      case "oldest":
        sortedProjects.sort((a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime())
        break
      case "name_asc":
        sortedProjects.sort((a, b) => a.title.localeCompare(b.title))
        break
      case "name_desc":
        sortedProjects.sort((a, b) => b.title.localeCompare(a.title))
        break
    }
  }

  const categories = [
    { id: "water", label: "Clean Water" },
    { id: "education", label: "Education" },
    { id: "healthcare", label: "Healthcare" },
    { id: "environment", label: "Environment" },
  ]

  const locations = [
    { id: "africa", label: "Africa" },
    { id: "asia", label: "Asia" },
    { id: "americas", label: "Americas" },
    { id: "europe", label: "Europe" },
  ]

  const tags = [
    { id: "water", label: "Water" },
    { id: "health", label: "Health" },
    { id: "education", label: "Education" },
    { id: "children", label: "Children" },
    { id: "sustainability", label: "Sustainability" },
    { id: "agriculture", label: "Agriculture" },
    { id: "community", label: "Community" },
  ]

  return (
    <SiteLayout>
      <PageHeader
        title="Our Projects"
        description="Explore our ongoing projects around the world and see how we're making a difference in communities through sustainable solutions."
      />

      <div className="container py-12">
        <FilterBar categories={categories} locations={locations} tags={tags} className="mb-8" />

        <Suspense fallback={<ProjectsLoading />}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedProjects.length > 0 ? (
              sortedProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  slug={`/projects/${project.slug}`}
                  category={project.category}
                  progress={project.progress ?? 0}
                  goal={project.goal}
                  raised={project.raised}
                />
              ))
            ) : (
              <div className="col-span-3 py-12 text-center">
                <h3 className="text-xl font-medium mb-2">No projects found</h3>
                <p className="text-muted-foreground">Try adjusting your filters to find what you're looking for.</p>
              </div>
            )}
          </div>
        </Suspense>
      </div>
    </SiteLayout>
  )
}

function ProjectsLoading() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: 6 }).map((_, index) => (
        <SkeletonCard key={index} imageHeight={200} hasFooter={true} hasAction={true} />
      ))}
    </div>
  )
}

