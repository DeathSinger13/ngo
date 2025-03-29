import { SiteLayout } from "../../components/site-layout"
import { BlobBackground } from "../../components/blob-background"
import { PageHeader } from "../../components/page-header"
import { Card } from "../../components/ui/card"
import Image from "next/image"
import Link from "next/link"

export default async function EnvironmentMissionPage() {
  return (
    <SiteLayout>
      <div className="relative overflow-hidden">
        <BlobBackground className="opacity-20" />

        <div className="container mx-auto px-4 py-12">
          <PageHeader title="Environment Mission" description="Protecting our planet for future generations" />

          {/* Rest of the content */}
          <div className="mt-8 grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Our Environmental Vision
              </h2>
              <p className="mb-4">
                At HopeWorks, we believe that environmental sustainability is essential for the wellbeing of communities
                and the planet. Our environment mission focuses on conservation, restoration, and sustainable practices.
              </p>
              <p className="mb-4">
                Through reforestation, waste management, renewable energy, and environmental education, we're working to
                protect natural resources and combat climate change.
              </p>
              <div className="flex flex-wrap gap-3 mt-6">
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Reforestation</span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Waste Management</span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Renewable Energy</span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                  Environmental Education
                </span>
              </div>
            </div>
            <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/placeholder.svg?height=800&width=1200"
                alt="Environmental conservation project"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* More content would go here */}
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Get Involved in Our Environmental Mission
            </h2>
            <p className="max-w-2xl mx-auto mb-8">
              There are many ways you can support our environmental initiatives and help protect our planet for future
              generations.
            </p>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-3">Donate</h3>
                <p className="mb-4">
                  Your financial support helps fund reforestation, waste management, and environmental education
                  programs.
                </p>
                <Link
                  href="/donate"
                  className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 inline-block w-full"
                >
                  Make a Donation
                </Link>
              </Card>
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-3">Volunteer</h3>
                <p className="mb-4">
                  Share your skills as an environmentalist, educator, or community organizer on our projects.
                </p>
                <Link
                  href="/get-involved/volunteer"
                  className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 inline-block w-full"
                >
                  Volunteer With Us
                </Link>
              </Card>
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-3">Partner</h3>
                <p className="mb-4">
                  Organizations can partner with us to expand our environmental impact through joint initiatives.
                </p>
                <Link
                  href="/contact"
                  className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 inline-block w-full"
                >
                  Become a Partner
                </Link>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </SiteLayout>
  )
}

