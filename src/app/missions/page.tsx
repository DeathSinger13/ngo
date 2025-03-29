import { SiteLayout } from "../components/site-layout"
import { PageHeader } from "../components/page-header"
import { Card } from "../components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default async function MissionsPage() {
  return (
    <SiteLayout>
      <div className="container mx-auto px-4 py-12">
        <PageHeader
          title="Our Missions"
          description="Discover the core missions that drive our work and impact communities worldwide"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {[
            {
              title: "Clean Water",
              description: "Providing access to clean and safe drinking water for communities in need.",
              image: "/placeholder.svg?height=400&width=600",
              link: "/missions/clean-water",
              color: "bg-blue-50 dark:bg-blue-950",
              textColor: "text-blue-600 dark:text-blue-400",
            },
            {
              title: "Education",
              description: "Building schools and supporting educational programs to empower future generations.",
              image: "/placeholder.svg?height=400&width=600",
              link: "/missions/education",
              color: "bg-amber-50 dark:bg-amber-950",
              textColor: "text-amber-600 dark:text-amber-400",
            },
            {
              title: "Healthcare",
              description: "Providing essential medical services and supplies to underserved communities.",
              image: "/placeholder.svg?height=400&width=600",
              link: "/missions/healthcare",
              color: "bg-red-50 dark:bg-red-950",
              textColor: "text-red-600 dark:text-red-400",
            },
            {
              title: "Environment",
              description: "Protecting natural habitats and promoting sustainable practices for a healthier planet.",
              image: "/placeholder.svg?height=400&width=600",
              link: "/missions/environment",
              color: "bg-green-50 dark:bg-green-950",
              textColor: "text-green-600 dark:text-green-400",
            },
          ].map((mission, index) => (
            <Card key={index} className={`overflow-hidden border-none ${mission.color}`}>
              <div className="relative h-48">
                <Image src={mission.image || "/placeholder.svg"} alt={mission.title} fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className={`text-xl font-bold mb-2 ${mission.textColor}`}>{mission.title}</h3>
                <p className="text-muted-foreground mb-4">{mission.description}</p>
                <Link href={mission.link} className={`${mission.textColor} hover:underline flex items-center`}>
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Our Approach
          </h2>
          <p className="max-w-3xl mx-auto mb-12 text-lg">
            At HopeWorks, we believe in sustainable, community-driven solutions that create lasting change. Our approach
            combines immediate relief with long-term development strategies.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">1</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Community Partnership</h3>
              <p className="text-muted-foreground">
                We work directly with local communities to understand their needs and develop solutions together.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">2</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Sustainable Solutions</h3>
              <p className="text-muted-foreground">
                Our projects are designed to be environmentally sustainable and economically viable for the long term.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">3</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Knowledge Transfer</h3>
              <p className="text-muted-foreground">
                We empower communities with the skills and knowledge to maintain and expand upon our initiatives.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-primary/5 rounded-xl p-8 md:p-12 mb-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-bold mb-4">Global Impact</h2>
              <p className="mb-4">
                Since our founding, HopeWorks has implemented projects in over 30 countries across 5 continents,
                reaching millions of people with life-changing interventions.
              </p>
              <p>
                Our work spans diverse contexts, from rural villages to urban slums, conflict zones to natural disaster
                areas. Wherever there is need, we strive to bring hope and practical solutions.
              </p>
            </div>
            <div className="relative h-[300px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="World map showing our impact"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </SiteLayout>
  )
}

