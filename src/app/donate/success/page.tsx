import Link from "next/link"
import { SiteLayout } from "../../components/site-layout"
import { Button } from "../../components/ui/button"
import { BlobBackground } from "../../components/blob-background"
import { DecorativeCurl } from "../../components/decorative-curl"
import { ConfettiBackground } from "../../components/confetti-background"
import { SimpleCard } from "../../components/simple-card"
import { CheckCircle, Calendar, Share2, ArrowRight, Download, Mail } from "lucide-react"

export default function DonationSuccessPage() {
  return (
    <SiteLayout>
      <div className="relative">
        <BlobBackground blobCount={3} className="opacity-30" />
        <DecorativeCurl position="top-right" color="primary" size="md" />
        <DecorativeCurl position="bottom-left" color="tertiary" size="sm" />
        <ConfettiBackground density={100} />

        <div className="max-w-3xl mx-auto text-center py-12">
          <div className="mb-6 inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10">
            <CheckCircle className="h-10 w-10 text-primary" />
          </div>

          <h1 className="text-3xl md:text-4xl font-bold mb-4 gradient-heading">Thank You for Your Donation!</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Your generosity makes a real difference in the lives of those we serve. We've sent a receipt to your email
            address.
          </p>

          <SimpleCard color="primary" className="mb-8 text-left">
            <div className="p-6">
              <h2 className="text-xl font-bold mb-4">Donation Summary</h2>
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-2 border-b">
                  <span className="text-muted-foreground">Donation Amount:</span>
                  <span className="font-bold text-lg">$100.00</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b">
                  <span className="text-muted-foreground">Donation Type:</span>
                  <span>One-Time</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b">
                  <span className="text-muted-foreground">Project:</span>
                  <span>Clean Water Initiative</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b">
                  <span className="text-muted-foreground">Date:</span>
                  <span>{new Date().toLocaleDateString()}</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b">
                  <span className="text-muted-foreground">Transaction ID:</span>
                  <span className="font-mono text-sm">
                    TXN-{Math.random().toString(36).substring(2, 10).toUpperCase()}
                  </span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 mt-6">
                <Button variant="outline" className="flex-1" asChild>
                  <a href="#" download>
                    <Download className="mr-2 h-4 w-4" />
                    Download Receipt
                  </a>
                </Button>
                <Button variant="outline" className="flex-1" asChild>
                  <a href="mailto:?subject=I%20just%20donated%20to%20GreenHope&body=I%20just%20made%20a%20donation%20to%20support%20GreenHope's%20important%20work.%20You%20can%20learn%20more%20and%20donate%20at%20https://greenhope.org">
                    <Share2 className="mr-2 h-4 w-4" />
                    Share
                  </a>
                </Button>
              </div>
            </div>
          </SimpleCard>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <SimpleCard color="secondary" className="card-hover">
              <div className="p-6 flex flex-col items-center text-center">
                <Calendar className="h-10 w-10 text-secondary mb-4" />
                <h3 className="font-bold mb-2">Attend an Event</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Join us at an upcoming event to see our work in action and connect with our community.
                </p>
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <Link href="/events">View Events</Link>
                </Button>
              </div>
            </SimpleCard>

            <SimpleCard color="tertiary" className="card-hover">
              <div className="p-6 flex flex-col items-center text-center">
                <Mail className="h-10 w-10 text-tertiary mb-4" />
                <h3 className="font-bold mb-2">Stay Updated</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Subscribe to our newsletter to receive updates about our projects and impact.
                </p>
                <Button variant="outline" size="sm" className="w-full">
                  Subscribe
                </Button>
              </div>
            </SimpleCard>

            <SimpleCard color="accent1" className="card-hover">
              <div className="p-6 flex flex-col items-center text-center">
                <Share2 className="h-10 w-10 text-accent1 mb-4" />
                <h3 className="font-bold mb-2">Spread the Word</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Help us reach more people by sharing our mission with your friends and family.
                </p>
                <Button variant="outline" size="sm" className="w-full">
                  Share Now
                </Button>
              </div>
            </SimpleCard>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="colored-button colored-button-primary" asChild>
              <Link href="/">Return to Homepage</Link>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full" asChild>
              <Link href="/projects">
                Explore Our Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </SiteLayout>
  )
}

