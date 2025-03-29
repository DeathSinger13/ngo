"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "../lib/utils"
import { Button } from "./ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet"
import { ThemeToggle } from "./theme-toggle"
import { Heart, Menu, Search } from "lucide-react"
import { useMobile } from "../hooks/use-mobile"

export function ModernHeader() {
  const isMobile = useMobile()
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = React.useState(false)
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Check initial scroll position

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const isActive = (path: string) => {
    if (path === "/") {
      return pathname === path
    }
    return pathname.startsWith(path)
  }

  // Don't render anything until mounted to prevent hydration issues
  if (!mounted) {
    return null
  }

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-all duration-200",
        isScrolled ? "bg-background/95 shadow-sm" : "bg-background/80",
      )}
    >
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-2">
            <Heart className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">HopeWorks</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className={isActive("/about") ? "text-primary" : ""}>
                    About
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <a
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                            href="/about"
                          >
                            <Heart className="h-6 w-6 text-primary" />
                            <div className="mb-2 mt-4 text-lg font-medium">Our Story</div>
                            <p className="text-sm leading-tight text-muted-foreground">
                              Learn about our mission, vision, and the impact we're making around the world.
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <ListItem href="/about" title="About Us">
                        Our mission, vision, and history
                      </ListItem>
                      <ListItem href="/about#team" title="Our Team">
                        Meet the people behind our organization
                      </ListItem>
                      <ListItem href="/about#partners" title="Partners">
                        Organizations we collaborate with
                      </ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger
                    className={isActive("/programs") || isActive("/missions") ? "text-primary" : ""}
                  >
                    Programs
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      <ListItem href="/missions/education" title="Education">
                        Building schools and training teachers
                      </ListItem>
                      <ListItem href="/missions/healthcare" title="Healthcare">
                        Providing medical services and supplies
                      </ListItem>
                      <ListItem href="/programs" title="All Programs">
                        View all our initiatives
                      </ListItem>
                      <ListItem href="/projects" title="Current Projects">
                        Our ongoing work around the world
                      </ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className={isActive("/get-involved") ? "text-primary" : ""}>
                    Get Involved
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      <ListItem href="/donate" title="Donate">
                        Support our work financially
                      </ListItem>
                      <ListItem href="/get-involved" title="Volunteer">
                        Join our team of dedicated volunteers
                      </ListItem>
                      <ListItem href="/events" title="Events">
                        Attend or organize fundraising events
                      </ListItem>
                      <ListItem href="/get-involved" title="More Ways">
                        Discover all ways to contribute
                      </ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/blog" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={cn(navigationMenuTriggerStyle(), isActive("/blog") && "text-primary")}
                    >
                      Blog
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/contact" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={cn(navigationMenuTriggerStyle(), isActive("/contact") && "text-primary")}
                    >
                      Contact
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/admin" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={cn(navigationMenuTriggerStyle(), isActive("/admin") && "text-primary")}
                    >
                      Admin
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/search" className="hidden md:flex">
            <Button variant="ghost" size="icon" className="text-foreground hover:text-primary">
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </Button>
          </Link>
          <Link href="/donate" className="hidden md:flex">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">Donate Now</Button>
          </Link>
          <ThemeToggle />
          {isMobile && (
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-foreground hover:text-primary">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <SheetHeader className="mb-6">
                  <SheetTitle>HopeWorks</SheetTitle>
                  <SheetDescription>Making a difference in communities worldwide.</SheetDescription>
                </SheetHeader>
                <div className="grid gap-4 py-4">
                  <Link
                    href="/"
                    className={cn(
                      "block px-2 py-1 text-lg",
                      isActive("/") ? "font-medium text-primary" : "text-foreground",
                    )}
                  >
                    Home
                  </Link>
                  <Link
                    href="/about"
                    className={cn(
                      "block px-2 py-1 text-lg",
                      isActive("/about") ? "font-medium text-primary" : "text-foreground",
                    )}
                  >
                    About
                  </Link>
                  <Link
                    href="/programs"
                    className={cn(
                      "block px-2 py-1 text-lg",
                      isActive("/programs") ? "font-medium text-primary" : "text-foreground",
                    )}
                  >
                    Programs
                  </Link>
                  <Link
                    href="/projects"
                    className={cn(
                      "block px-2 py-1 text-lg",
                      isActive("/projects") ? "font-medium text-primary" : "text-foreground",
                    )}
                  >
                    Projects
                  </Link>
                  <Link
                    href="/get-involved"
                    className={cn(
                      "block px-2 py-1 text-lg",
                      isActive("/get-involved") ? "font-medium text-primary" : "text-foreground",
                    )}
                  >
                    Get Involved
                  </Link>
                  <Link
                    href="/blog"
                    className={cn(
                      "block px-2 py-1 text-lg",
                      isActive("/blog") ? "font-medium text-primary" : "text-foreground",
                    )}
                  >
                    Blog
                  </Link>
                  <Link
                    href="/contact"
                    className={cn(
                      "block px-2 py-1 text-lg",
                      isActive("/contact") ? "font-medium text-primary" : "text-foreground",
                    )}
                  >
                    Contact
                  </Link>
                  <Link
                    href="/admin"
                    className={cn(
                      "block px-2 py-1 text-lg",
                      isActive("/admin") ? "font-medium text-primary" : "text-foreground",
                    )}
                  >
                    Admin
                  </Link>
                  <div className="pt-4">
                    <Link href="/donate">
                      <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                        Donate Now
                      </Button>
                    </Link>
                  </div>
                  <div>
                    <Link href="/search">
                      <Button variant="outline" className="w-full">
                        <Search className="mr-2 h-4 w-4" />
                        Search
                      </Button>
                    </Link>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          )}
        </div>
      </div>
    </header>
  )
}

const ListItem = React.forwardRef<React.ElementRef<"a">, React.ComponentPropsWithoutRef<"a"> & { title: string }>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className,
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
          </a>
        </NavigationMenuLink>
      </li>
    )
  },
)
ListItem.displayName = "ListItem"

