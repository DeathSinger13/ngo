import Link from "next/link"
import { Search, ArrowRight, HelpCircle, Mail } from "lucide-react"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Card, CardContent } from "../components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs"
import { FaqAccordion } from "../components/faq-accordion"
import { SiteLayout } from "../components/site-layout"
import { PageHeader } from "../components/page-header"
import { BlobBackground } from "../components/blob-background"
import { DecorativeCurl } from "../components/decorative-curl"

export default function FaqPage() {
  return (
    <SiteLayout>
      <div className="relative">
        <BlobBackground blobCount={4} className="opacity-40" />
        <DecorativeCurl position="top-right" color="accent1" size="md" />
        <DecorativeCurl position="bottom-left" color="accent2" size="sm" />

        <PageHeader
          title="Frequently Asked Questions"
          description="Find answers to common questions about our organization, projects, donations, and how you can get involved."
          gradient
        />

        <div className="relative max-w-xl mx-auto mb-12 z-10">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input type="search" placeholder="Search for answers..." className="pl-10 py-6 text-base" />
        </div>

        {/* FAQ Categories */}
        <div className="relative z-10">
          <Tabs defaultValue="general" className="w-full">
            <div className="flex justify-center mb-8 overflow-x-auto">
              <TabsList className="grid min-w-[600px] grid-cols-5">
                <TabsTrigger value="general">General</TabsTrigger>
                <TabsTrigger value="donations">Donations</TabsTrigger>
                <TabsTrigger value="volunteering">Volunteering</TabsTrigger>
                <TabsTrigger value="projects">Projects</TabsTrigger>
                <TabsTrigger value="partnerships">Partnerships</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="general" className="space-y-6">
              <FaqAccordion
                items={[
                  {
                    question: "What is HopeWorks?",
                    answer:
                      "HopeWorks is a non-governmental organization dedicated to creating sustainable solutions for communities in need through education, healthcare, and environmental initiatives. We work with local partners to implement projects that have a lasting impact on communities worldwide.",
                  },
                  {
                    question: "How long has HopeWorks been operating?",
                    answer:
                      "HopeWorks was founded in 2010 and has been operating for over 15 years. During this time, we've completed more than 120 projects across 75 communities, impacting over 50,000 lives.",
                  },
                  {
                    question: "Is HopeWorks a registered non-profit organization?",
                    answer:
                      "Yes, HopeWorks is a registered 501(c)(3) non-profit organization in the United States. All donations are tax-deductible to the extent allowed by law.",
                  },
                  {
                    question: "Where does HopeWorks operate?",
                    answer:
                      "We operate globally with a focus on regions with the greatest need. Our current projects span across Africa, Southeast Asia, and Latin America, though we also have some domestic programs in underserved communities in the United States.",
                  },
                  {
                    question: "How can I contact HopeWorks?",
                    answer:
                      "You can reach us through our contact page, by email at info@hopeworks.org, or by phone at (123) 456-7890. Our headquarters is located at 123 Hope Street, New York, NY 10001.",
                  },
                ]}
              />
            </TabsContent>

            <TabsContent value="donations" className="space-y-6">
              <FaqAccordion
                items={[
                  {
                    question: "How can I donate to HopeWorks?",
                    answer:
                      "You can donate online through our secure donation page, by mail with a check to our headquarters, or by phone. We accept one-time and recurring donations, as well as planned giving and corporate matching gifts.",
                  },
                  {
                    question: "Is my donation tax-deductible?",
                    answer:
                      "Yes, as a registered 501(c)(3) non-profit organization, all donations to HopeWorks are tax-deductible in the United States to the extent allowed by law. You will receive a tax receipt for your donation.",
                  },
                  {
                    question: "Can I specify which project my donation supports?",
                    answer:
                      "On our donation page, you can select a specific project to support. If you don't specify, your donation will go to our general fund, which allows us to allocate resources where they're needed most.",
                  },
                  {
                    question: "What percentage of my donation goes directly to programs?",
                    answer:
                      "We're proud that 85% of all donations go directly to our programs and services. The remaining 15% covers essential administrative and fundraising costs to ensure we can continue our work effectively.",
                  },
                  {
                    question: "Can I donate items instead of money?",
                    answer:
                      "Yes, we accept in-kind donations of goods and services that support our mission. Please contact us at donations@hopeworks.org to discuss your in-kind donation and ensure it aligns with our current needs.",
                  },
                ]}
              />
            </TabsContent>

            <TabsContent value="volunteering" className="space-y-6">
              <FaqAccordion
                items={[
                  {
                    question: "How can I volunteer with HopeWorks?",
                    answer:
                      "You can volunteer locally or internationally through our various programs. Visit our 'Get Involved' page to see current volunteer opportunities and fill out an application form. We have both short-term and long-term volunteer positions available.",
                  },
                  {
                    question: "Do I need special skills to volunteer?",
                    answer:
                      "While some volunteer positions require specific skills (like medical professionals for healthcare projects), we have opportunities for volunteers of all backgrounds and skill levels. We'll match you with a role that fits your skills and interests.",
                  },
                  {
                    question: "Is there an age requirement for volunteering?",
                    answer:
                      "For most local volunteer opportunities, volunteers must be at least 16 years old. For international volunteering, the minimum age is 18 years old. Some youth programs are available for younger volunteers when accompanied by a parent or guardian.",
                  },
                  {
                    question: "Do you provide training for volunteers?",
                    answer:
                      "Yes, all volunteers receive training specific to their role and the project they'll be working on. For international volunteers, we also provide cultural orientation and safety training before departure.",
                  },
                  {
                    question: "Can I volunteer remotely?",
                    answer:
                      "Yes, we offer remote volunteer opportunities in areas such as grant writing, graphic design, social media management, and translation services. These positions allow you to contribute to our mission from anywhere in the world.",
                  },
                ]}
              />
            </TabsContent>

            <TabsContent value="projects" className="space-y-6">
              <FaqAccordion
                items={[
                  {
                    question: "How does HopeWorks select its projects?",
                    answer:
                      "We select projects based on community needs, potential impact, sustainability, and alignment with our mission. We work closely with local communities to ensure projects address their most pressing needs and have their full participation and support.",
                  },
                  {
                    question: "How long does a typical project last?",
                    answer:
                      "Project duration varies widely depending on the type and scope. Small-scale projects might be completed in a few months, while larger initiatives can span several years. We focus on long-term sustainability rather than quick fixes.",
                  },
                  {
                    question: "How do you measure the success of your projects?",
                    answer:
                      "We use both quantitative and qualitative metrics to evaluate our projects. This includes tracking direct outputs (like number of wells built or students educated) as well as long-term outcomes and community feedback. We conduct regular monitoring and evaluation throughout the project lifecycle.",
                  },
                  {
                    question: "Do you partner with local organizations?",
                    answer:
                      "Yes, we believe strongly in local partnerships. We collaborate with local NGOs, community groups, and government agencies to ensure our projects are culturally appropriate, sustainable, and build local capacity.",
                  },
                  {
                    question: "Can I suggest a project or community in need?",
                    answer:
                      "We welcome suggestions for potential projects. Please contact us at projects@hopeworks.org with details about the community, their needs, and any local contacts. While we can't pursue every suggestion, we review all proposals carefully.",
                  },
                ]}
              />
            </TabsContent>

            <TabsContent value="partnerships" className="space-y-6">
              <FaqAccordion
                items={[
                  {
                    question: "How can my company partner with HopeWorks?",
                    answer:
                      "Companies can partner with us through corporate donations, employee giving programs, cause marketing, sponsorships, and volunteer initiatives. We create customized partnership opportunities that align with your company's values and CSR goals.",
                  },
                  {
                    question: "Do you offer corporate volunteer opportunities?",
                    answer:
                      "Yes, we organize corporate volunteer days and team-building activities that support our mission. These can be one-time events or ongoing programs, and can be tailored to your team's size, interests, and availability.",
                  },
                  {
                    question: "Can we sponsor a specific project?",
                    answer:
                      "Corporate sponsors can support specific projects or programs that align with their values. Sponsorship packages include recognition, impact reports, and opportunities for employee engagement.",
                  },
                  {
                    question: "Do you have a matching gift program?",
                    answer:
                      "While we don't administer matching gift programs ourselves, many companies have their own matching gift programs that can double or even triple employee donations to HopeWorks. We're happy to provide any documentation needed for your company's matching gift process.",
                  },
                  {
                    question: "How do I start a partnership conversation?",
                    answer:
                      "Contact our partnerships team at partnerships@hopeworks.org to start the conversation. We'll schedule a call to learn about your goals and explore how we can work together to create meaningful impact.",
                  },
                ]}
              />
            </TabsContent>
          </Tabs>
        </div>

        {/* Still Have Questions */}
        <section className="py-16 mt-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="mb-6 mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-primary/20">
              <HelpCircle className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 gradient-heading">Still Have Questions?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Can't find the answer you're looking for? Please contact our support team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="flex items-center gap-2 colored-button colored-button-primary">
                <Link href="/contact">
                  <Mail className="h-4 w-4" />
                  Contact Us
                </Link>
              </Button>
              <Button variant="outline" asChild className="rounded-full">
                <Link href="/about">
                  Learn More About Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Popular Resources */}
        <section className="py-16 relative z-10">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 gradient-heading">Popular Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="card-hover colored-card-primary">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-3">Annual Reports</h3>
                <p className="text-muted-foreground mb-4">
                  View our annual reports to see our impact, financials, and achievements.
                </p>
                <Link
                  href="/resources/annual-reports"
                  className="text-primary font-medium flex items-center hover:underline"
                >
                  View Reports <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
            <Card className="card-hover colored-card-secondary">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-3">Donation Guide</h3>
                <p className="text-muted-foreground mb-4">
                  Learn about different ways to donate and how your contribution makes an impact.
                </p>
                <Link
                  href="/resources/donation-guide"
                  className="text-secondary font-medium flex items-center hover:underline"
                >
                  Read Guide <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
            <Card className="card-hover colored-card-tertiary">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-3">Volunteer Handbook</h3>
                <p className="text-muted-foreground mb-4">
                  Everything you need to know about volunteering with HopeWorks.
                </p>
                <Link
                  href="/resources/volunteer-handbook"
                  className="text-tertiary font-medium flex items-center hover:underline"
                >
                  Download Handbook <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </SiteLayout>
  )
}

