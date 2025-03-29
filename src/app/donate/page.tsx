import Link from "next/link"
import { Heart, CreditCard, Calendar, Wallet, ArrowRight } from "lucide-react"
import { Button } from "../components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs"
import { DonationForm } from "../components/donation-form"
import { ProjectSelector } from "../components/project-selector"

export default function DonatePage() {
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
                Your Donation Makes a <span className="text-primary">Difference</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Every contribution helps us create sustainable solutions for communities in need. Choose how you'd like
                to support our mission.
              </p>
            </div>
          </div>
        </section>

        {/* Donation Options */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <Tabs defaultValue="one-time" className="mb-12">
                <div className="flex justify-center mb-8">
                  <TabsList className="grid w-full max-w-md grid-cols-2">
                    <TabsTrigger value="one-time" className="text-base py-3">
                      One-Time Donation
                    </TabsTrigger>
                    <TabsTrigger value="monthly" className="text-base py-3">
                      Monthly Giving
                    </TabsTrigger>
                  </TabsList>
                </div>

                <TabsContent value="one-time">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h2 className="text-2xl font-bold mb-4">Choose a Project</h2>
                      <p className="text-muted-foreground mb-6">
                        Select a specific project to support or contribute to our general fund.
                      </p>
                      <ProjectSelector />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold mb-4">Donation Details</h2>
                      <p className="text-muted-foreground mb-6">Choose an amount or enter a custom donation.</p>
                      <DonationForm type="one-time" />
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="monthly">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h2 className="text-2xl font-bold mb-4">Monthly Impact</h2>
                      <p className="text-muted-foreground mb-6">
                        Your recurring donation provides sustainable support for our ongoing projects.
                      </p>
                      <div className="space-y-4">
                        <Card className="border-primary/20 hover:border-primary/50 transition-colors">
                          <CardContent className="p-6">
                            <div className="flex items-start gap-4">
                              <div className="p-2 rounded-full bg-primary/10">
                                <CreditCard className="h-6 w-6 text-primary" />
                              </div>
                              <div>
                                <h3 className="font-medium mb-1">Easy Management</h3>
                                <p className="text-sm text-muted-foreground">
                                  Modify or cancel your monthly donation at any time through your account.
                                </p>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                        <Card className="border-primary/20 hover:border-primary/50 transition-colors">
                          <CardContent className="p-6">
                            <div className="flex items-start gap-4">
                              <div className="p-2 rounded-full bg-primary/10">
                                <Calendar className="h-6 w-6 text-primary" />
                              </div>
                              <div>
                                <h3 className="font-medium mb-1">Regular Updates</h3>
                                <p className="text-sm text-muted-foreground">
                                  Receive monthly impact reports showing how your donation is making a difference.
                                </p>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold mb-4">Monthly Donation</h2>
                      <p className="text-muted-foreground mb-6">Choose a monthly amount to support our ongoing work.</p>
                      <DonationForm type="monthly" />
                    </div>
                  </div>
                </TabsContent>
              </Tabs>

              <div className="bg-muted/50 rounded-lg p-6 md:p-8">
                <h2 className="text-2xl font-bold mb-4 text-center">Other Ways to Give</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Card className="bg-background">
                    <CardHeader>
                      <div className="p-2 w-fit rounded-full bg-primary/10 mb-2">
                        <Wallet className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle>Corporate Giving</CardTitle>
                      <CardDescription>Partner with us through corporate donations and matching gifts.</CardDescription>
                    </CardHeader>
                    <CardFooter>
                      <Button variant="outline" asChild className="w-full">
                        <Link href="/corporate-giving">
                          Learn More <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                  <Card className="bg-background">
                    <CardHeader>
                      <div className="p-2 w-fit rounded-full bg-primary/10 mb-2">
                        <Calendar className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle>Legacy Giving</CardTitle>
                      <CardDescription>
                        Create a lasting impact by including us in your estate planning.
                      </CardDescription>
                    </CardHeader>
                    <CardFooter>
                      <Button variant="outline" asChild className="w-full">
                        <Link href="/legacy-giving">
                          Learn More <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                  <Card className="bg-background">
                    <CardHeader>
                      <div className="p-2 w-fit rounded-full bg-primary/10 mb-2">
                        <Heart className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle>In-Kind Donations</CardTitle>
                      <CardDescription>Donate goods, services, or expertise to support our mission.</CardDescription>
                    </CardHeader>
                    <CardFooter>
                      <Button variant="outline" asChild className="w-full">
                        <Link href="/in-kind-donations">
                          Learn More <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-12">Why Donors Support Us</h2>
              <div className="relative">
                <div className="absolute -top-6 -left-6 text-6xl text-primary/20">"</div>
                <blockquote className="text-xl italic mb-6">
                  I've been a monthly donor for over two years now. The transparency and regular updates about how my
                  donations are being used make me confident that I'm truly making a difference.
                </blockquote>
                <div className="font-medium">Sarah Johnson</div>
                <div className="text-sm text-muted-foreground">Monthly Donor since 2023</div>
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

