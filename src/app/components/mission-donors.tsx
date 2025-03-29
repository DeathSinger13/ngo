import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Button } from "./ui/button"
import Link from "next/link"

interface FeaturedDonor {
  name: string
  amount: string
  image: string
}

interface Donor {
  name: string
  amount: string
}

interface MissionDonorsProps {
  featuredDonors: FeaturedDonor[]
  recentDonors: Donor[]
}

export function MissionDonors({ featuredDonors, recentDonors }: MissionDonorsProps) {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-xl font-bold mb-6">Featured Donors</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredDonors.map((donor, i) => (
            <Card key={i} className="card-hover">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="relative w-16 h-16 rounded-full overflow-hidden mb-4">
                  <Image src={donor.image || "/placeholder.svg"} alt={donor.name} fill className="object-cover" />
                </div>
                <h4 className="font-bold mb-1">{donor.name}</h4>
                <p className="text-primary font-medium">{donor.amount}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Donors</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {recentDonors.map((donor, i) => (
              <div
                key={i}
                className="flex justify-between items-center p-3 rounded-lg hover:bg-muted/50 transition-colors"
              >
                <span>{donor.name}</span>
                <span className="font-medium text-primary">{donor.amount}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="text-center">
        <p className="text-muted-foreground mb-4">
          Join these generous donors in supporting our mission to bring clean water to communities in need.
        </p>
        <Button className="rounded-full colored-button colored-button-primary" asChild>
          <Link href="/donate?project=clean-water-initiative">Donate Now</Link>
        </Button>
      </div>
    </div>
  )
}

