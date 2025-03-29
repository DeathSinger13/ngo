import { BlobBackground } from "../components/blob-background"
import { DecorativeCurl } from "../components/decorative-curl"
import { SiteLayout } from "../components/site-layout"
import { PageHeader } from "../components/page-header"
import { Card, CardContent } from "../components/ui/card"
import { ContactForm } from "../components/contact-form"
import { LocationMap } from "../components/location-map"
import { Mail, Phone, MapPin, Clock, Twitter, Instagram, Facebook, Linkedin } from "lucide-react"
import Link from "next/link"

export default function ContactPage() {
  return (
    <SiteLayout>
      <div className="relative">
        <BlobBackground blobCount={4} className="opacity-40" />
        <DecorativeCurl position="top-right" color="secondary" size="md" />
        <DecorativeCurl position="bottom-left" color="tertiary" size="sm" />

        <PageHeader
          title="Get in Touch"
          description="Have questions or want to learn more about our work? We'd love to hear from you. Reach out to us using any of the methods below."
          gradient
        />

        {/* Contact Information */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 relative z-10">
          <Card className="overflow-hidden card-hover colored-card-primary">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="mb-4 p-3 rounded-full bg-primary/20">
                <Mail className="h-10 w-10 text-primary" />
              </div>
              <h3 className="font-bold mb-2">Email Us</h3>
              <p className="text-muted-foreground mb-4">For general inquiries, donations, or volunteer information</p>
              <a href="mailto:info@hopeworks.org" className="text-primary font-medium hover:underline">
                info@hopeworks.org
              </a>
            </CardContent>
          </Card>
          <Card className="overflow-hidden card-hover colored-card-secondary">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="mb-4 p-3 rounded-full bg-secondary/20">
                <Phone className="h-10 w-10 text-secondary" />
              </div>
              <h3 className="font-bold mb-2">Call Us</h3>
              <p className="text-muted-foreground mb-4">Speak directly with our team during business hours</p>
              <a href="tel:+11234567890" className="text-secondary font-medium hover:underline">
                (123) 456-7890
              </a>
            </CardContent>
          </Card>
          <Card className="overflow-hidden card-hover colored-card-tertiary">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="mb-4 p-3 rounded-full bg-tertiary/20">
                <MapPin className="h-10 w-10 text-tertiary" />
              </div>
              <h3 className="font-bold mb-2">Visit Us</h3>
              <p className="text-muted-foreground mb-4">
                Stop by our headquarters during office hours to meet our team
              </p>
              <address className="not-italic text-tertiary font-medium">
                123 Hope Street
                <br />
                New York, NY 10001
              </address>
            </CardContent>
          </Card>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 relative z-10">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-6 gradient-heading">Send Us a Message</h2>
            <p className="text-muted-foreground mb-6">
              Fill out the form below and we'll get back to you as soon as possible.
            </p>
            <ContactForm />
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-6 gradient-heading">Our Location</h2>
            <div className="rounded-lg overflow-hidden mb-6 border shadow-md">
              <LocationMap />
            </div>
            <div className="flex items-start gap-4 mb-4">
              <Clock className="h-5 w-5 text-primary mt-0.5" />
              <div>
                <h3 className="font-medium mb-1">Office Hours</h3>
                <p className="text-muted-foreground">
                  Monday - Friday: 9:00 AM - 5:00 PM
                  <br />
                  Saturday: 10:00 AM - 2:00 PM
                  <br />
                  Sunday: Closed
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4 mt-6">
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <span className="sr-only">Twitter</span>
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-secondary transition-colors">
                <span className="sr-only">Instagram</span>
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-tertiary transition-colors">
                <span className="sr-only">Facebook</span>
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-accent1 transition-colors">
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Department Contacts */}
        <section className="py-16 mt-8 relative z-10">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 gradient-heading">Department Contacts</h2>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="card-hover colored-card-primary">
              <CardContent className="p-6">
                <h3 className="font-bold mb-3">Donations</h3>
                <p className="text-muted-foreground mb-4">
                  For questions about donations, tax receipts, or planned giving.
                </p>
                <a
                  href="mailto:donations@hopeworks.org"
                  className="text-primary font-medium hover:underline flex items-center gap-2"
                >
                  <Mail className="h-4 w-4" />
                  donations@hopeworks.org
                </a>
              </CardContent>
            </Card>
            <Card className="card-hover colored-card-secondary">
              <CardContent className="p-6">
                <h3 className="font-bold mb-3">Volunteer Coordination</h3>
                <p className="text-muted-foreground mb-4">For volunteer opportunities and scheduling.</p>
                <a
                  href="mailto:volunteer@hopeworks.org"
                  className="text-secondary font-medium hover:underline flex items-center gap-2"
                >
                  <Mail className="h-4 w-4" />
                  volunteer@hopeworks.org
                </a>
              </CardContent>
            </Card>
            <Card className="card-hover colored-card-tertiary">
              <CardContent className="p-6">
                <h3 className="font-bold mb-3">Media Inquiries</h3>
                <p className="text-muted-foreground mb-4">For press, interviews, and media resources.</p>
                <a
                  href="mailto:media@hopeworks.org"
                  className="text-tertiary font-medium hover:underline flex items-center gap-2"
                >
                  <Mail className="h-4 w-4" />
                  media@hopeworks.org
                </a>
              </CardContent>
            </Card>
            <Card className="card-hover colored-card-accent1">
              <CardContent className="p-6">
                <h3 className="font-bold mb-3">Partnerships</h3>
                <p className="text-muted-foreground mb-4">For corporate partnerships and sponsorships.</p>
                <a
                  href="mailto:partnerships@hopeworks.org"
                  className="text-accent1 font-medium hover:underline flex items-center gap-2"
                >
                  <Mail className="h-4 w-4" />
                  partnerships@hopeworks.org
                </a>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </SiteLayout>
  )
}

