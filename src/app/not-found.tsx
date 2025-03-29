import Link from "next/link"
import { Button } from "./components/ui/button"
import { BlobBackground } from "./components/blob-background"
import { DecorativeCurl } from "./components/decorative-curl"
import { AlertCircle, Home, ArrowLeft } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative px-4">
      <BlobBackground blobCount={3} className="opacity-30" />
      <DecorativeCurl position="top-right" color="primary" size="md" />
      <DecorativeCurl position="bottom-left" color="tertiary" size="sm" />

      <div className="text-center max-w-md z-10">
        <div className="mb-6 mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-primary/20">
          <AlertCircle className="h-8 w-8 text-primary" />
        </div>

        <h1 className="text-4xl font-bold mb-4 gradient-heading">404</h1>
        <h2 className="text-2xl font-bold mb-4">Page Not Found</h2>
        <p className="text-muted-foreground mb-8">
          Sorry, the page you're looking for doesn't exist or has been moved.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="colored-button colored-button-primary" asChild>
            <Link href="/">
              <Home className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
          <Button size="lg" variant="outline" className="rounded-full" asChild>
            <Link href="/contact">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Contact Support
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

