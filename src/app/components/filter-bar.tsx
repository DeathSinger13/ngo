"use client"

import * as React from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Label } from "../components/ui/label"
import { Popover, PopoverContent, PopoverTrigger } from "../components/ui/popover"
import { Checkbox } from "../components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select"
import { Badge } from "../components/ui/badge"
import { cn } from "../lib/utils"
import { Search, Filter, X, SlidersHorizontal } from "lucide-react"

interface FilterOption {
  id: string
  label: string
}

interface FilterBarProps {
  categories?: FilterOption[]
  locations?: FilterOption[]
  tags?: FilterOption[]
  className?: string
}

export function FilterBar({ categories = [], locations = [], tags = [], className }: FilterBarProps) {
  const router = useRouter()
  const searchParams = useSearchParams()

  // Get initial values from URL
  const [search, setSearch] = React.useState(searchParams.get("q") || "")
  const [selectedCategory, setSelectedCategory] = React.useState(searchParams.get("category") || "")
  const [selectedLocation, setSelectedLocation] = React.useState(searchParams.get("location") || "")
  const [selectedTags, setSelectedTags] = React.useState<string[]>(
    searchParams.get("tags") ? searchParams.get("tags")!.split(",") : [],
  )
  const [sortBy, setSortBy] = React.useState(searchParams.get("sort") || "")
  const [isFiltersOpen, setIsFiltersOpen] = React.useState(false)

  // Calculate active filters count
  const activeFiltersCount = React.useMemo(() => {
    let count = 0
    if (search) count++
    if (selectedCategory) count++
    if (selectedLocation) count++
    count += selectedTags.length
    if (sortBy) count++
    return count
  }, [search, selectedCategory, selectedLocation, selectedTags, sortBy])

  // Apply filters by updating URL
  const applyFilters = React.useCallback(() => {
    const params = new URLSearchParams()

    if (search) params.set("q", search)
    if (selectedCategory) params.set("category", selectedCategory)
    if (selectedLocation) params.set("location", selectedLocation)
    if (selectedTags.length > 0) params.set("tags", selectedTags.join(","))
    if (sortBy) params.set("sort", sortBy)

    const queryString = params.toString()
    router.push(queryString ? `?${queryString}` : window.location.pathname)
  }, [search, selectedCategory, selectedLocation, selectedTags, sortBy, router])

  // Handle search input
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    applyFilters()
  }

  // Clear all filters
  const clearAllFilters = () => {
    setSearch("")
    setSelectedCategory("")
    setSelectedLocation("")
    setSelectedTags([])
    setSortBy("")
    router.push(window.location.pathname)
  }

  // Remove a specific filter
  const removeFilter = (type: string, value?: string) => {
    switch (type) {
      case "search":
        setSearch("")
        break
      case "category":
        setSelectedCategory("")
        break
      case "location":
        setSelectedLocation("")
        break
      case "tag":
        if (value) {
          setSelectedTags(selectedTags.filter((tag) => tag !== value))
        }
        break
      case "sort":
        setSortBy("")
        break
    }

    // Apply filters after a short delay to allow state to update
    setTimeout(applyFilters, 0)
  }

  return (
    <div className={cn("space-y-4", className)}>
      <div className="flex flex-col sm:flex-row gap-2">
        {/* Search Input */}
        <form onSubmit={handleSearch} className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search..." className="pl-8" value={search} onChange={(e) => setSearch(e.target.value)} />
          <button type="submit" className="sr-only">
            Search
          </button>
        </form>

        {/* Filters Button */}
        <Popover open={isFiltersOpen} onOpenChange={setIsFiltersOpen}>
          <PopoverTrigger asChild>
            <Button variant="outline" className="flex items-center gap-2 whitespace-nowrap">
              <Filter className="h-4 w-4" />
              <span>Filters</span>
              {activeFiltersCount > 0 && (
                <Badge variant="secondary" className="ml-1 h-5 w-5 p-0 flex items-center justify-center">
                  {activeFiltersCount}
                </Badge>
              )}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-80 sm:w-96 p-4" align="end">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-medium">Filters</h3>
                <Button variant="ghost" size="sm" onClick={clearAllFilters} className="h-8 px-2 text-xs">
                  Clear all
                </Button>
              </div>

              {/* Categories */}
              {categories.length > 0 && (
                <div className="space-y-2">
                  <Label>Categories</Label>
                  <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Categories</SelectItem>
                      {categories.map((category) => (
                        <SelectItem key={category.id} value={category.id}>
                          {category.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              )}

              {/* Locations */}
              {locations && locations.length > 0 && (
                <div className="space-y-2">
                  <Label>Locations</Label>
                  <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select location" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Locations</SelectItem>
                      {locations.map((location) => (
                        <SelectItem key={location.id} value={location.id}>
                          {location.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              )}

              {/* Tags */}
              {tags.length > 0 && (
                <div className="space-y-2">
                  <Label>Tags</Label>
                  <div className="grid grid-cols-2 gap-2">
                    {tags.map((tag) => (
                      <div key={tag.id} className="flex items-center space-x-2">
                        <Checkbox
                          id={`tag-${tag.id}`}
                          checked={selectedTags.includes(tag.id)}
                          onCheckedChange={(checked) => {
                            if (checked) {
                              setSelectedTags([...selectedTags, tag.id])
                            } else {
                              setSelectedTags(selectedTags.filter((t) => t !== tag.id))
                            }
                          }}
                        />
                        <Label htmlFor={`tag-${tag.id}`} className="text-sm font-normal cursor-pointer">
                          {tag.label}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Sort By */}
              <div className="space-y-2">
                <Label>Sort By</Label>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger>
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="default">Default</SelectItem>
                    <SelectItem value="newest">Newest</SelectItem>
                    <SelectItem value="oldest">Oldest</SelectItem>
                    <SelectItem value="name_asc">Name (A-Z)</SelectItem>
                    <SelectItem value="name_desc">Name (Z-A)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button
                className="w-full"
                onClick={() => {
                  applyFilters()
                  setIsFiltersOpen(false)
                }}
              >
                Apply Filters
              </Button>
            </div>
          </PopoverContent>
        </Popover>

        {/* Sort Button (Mobile) */}
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" className="sm:hidden">
              <SlidersHorizontal className="h-4 w-4" />
              <span className="sr-only">Sort</span>
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-56" align="end">
            <div className="space-y-2">
              <h3 className="font-medium">Sort By</h3>
              <Select
                value={sortBy}
                onValueChange={(value) => {
                  setSortBy(value)
                  setTimeout(applyFilters, 0)
                }}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="default">Default</SelectItem>
                  <SelectItem value="newest">Newest</SelectItem>
                  <SelectItem value="oldest">Oldest</SelectItem>
                  <SelectItem value="name_asc">Name (A-Z)</SelectItem>
                  <SelectItem value="name_desc">Name (Z-A)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </PopoverContent>
        </Popover>
      </div>

      {/* Active Filters */}
      {activeFiltersCount > 0 && (
        <div className="flex flex-wrap gap-2 items-center">
          <span className="text-sm text-muted-foreground">Active filters:</span>
          {search && (
            <Badge variant="secondary" className="flex items-center gap-1">
              Search: {search}
              <Button variant="ghost" size="icon" className="h-4 w-4 p-0 ml-1" onClick={() => removeFilter("search")}>
                <X className="h-3 w-3" />
                <span className="sr-only">Remove search filter</span>
              </Button>
            </Badge>
          )}
          {selectedCategory && (
            <Badge variant="secondary" className="flex items-center gap-1">
              Category: {categories.find((c) => c.id === selectedCategory)?.label || selectedCategory}
              <Button variant="ghost" size="icon" className="h-4 w-4 p-0 ml-1" onClick={() => removeFilter("category")}>
                <X className="h-3 w-3" />
                <span className="sr-only">Remove category filter</span>
              </Button>
            </Badge>
          )}
          {selectedLocation && (
            <Badge variant="secondary" className="flex items-center gap-1">
              Location: {locations.find((l) => l.id === selectedLocation)?.label || selectedLocation}
              <Button variant="ghost" size="icon" className="h-4 w-4 p-0 ml-1" onClick={() => removeFilter("location")}>
                <X className="h-3 w-3" />
                <span className="sr-only">Remove location filter</span>
              </Button>
            </Badge>
          )}
          {selectedTags.map((tag) => {
            const tagLabel = tags.find((t) => t.id === tag)?.label || tag
            return (
              <Badge key={tag} variant="secondary" className="flex items-center gap-1">
                {tagLabel}
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-4 w-4 p-0 ml-1"
                  onClick={() => removeFilter("tag", tag)}
                >
                  <X className="h-3 w-3" />
                  <span className="sr-only">Remove tag filter</span>
                </Button>
              </Badge>
            )
          })}
          {sortBy && (
            <Badge variant="secondary" className="flex items-center gap-1">
              Sort: {sortBy.replace("_", " ").replace(/\b\w/g, (l) => l.toUpperCase())}
              <Button variant="ghost" size="icon" className="h-4 w-4 p-0 ml-1" onClick={() => removeFilter("sort")}>
                <X className="h-3 w-3" />
                <span className="sr-only">Remove sort filter</span>
              </Button>
            </Badge>
          )}
          <Button variant="ghost" size="sm" className="h-8 px-2 text-xs" onClick={clearAllFilters}>
            Clear all
          </Button>
        </div>
      )}
    </div>
  )
}

