import { SiteLayout } from "../../components/site-layout"
import { BlobBackground } from "../../components/blob-background"
import { PageHeader } from "../../components/page-header"
import { Card } from "../../components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs"
import Image from "next/image"
import Link from "next/link"

export default async function EducationMissionPage() {
  return (
    <SiteLayout>
      <div className="relative overflow-hidden">
        <BlobBackground className="opacity-20" />

        <div className="container mx-auto px-4 py-12">
          <PageHeader title="Education Mission" description="Empowering communities through knowledge and learning" />

          <div className="mt-8 grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Our Education Vision
              </h2>
              <p className="mb-4">
                At HopeWorks, we believe that education is the foundation for sustainable development and empowered
                communities. Our education mission focuses on providing quality learning opportunities to underserved
                populations around the world.
              </p>
              <p className="mb-4">
                Through innovative programs, dedicated teachers, and community partnerships, we're working to break the
                cycle of poverty and create pathways to brighter futures for children and adults alike.
              </p>
              <div className="flex flex-wrap gap-3 mt-6">
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Quality Education</span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Teacher Training</span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">School Construction</span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Educational Resources</span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Scholarships</span>
              </div>
            </div>
            <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/placeholder.svg?height=800&width=1200"
                alt="Students in a classroom"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Our Education Programs
            </h2>

            <Tabs defaultValue="schools" className="w-full">
              <TabsList className="grid w-full md:w-auto grid-cols-3 md:grid-cols-5 mb-8 mx-auto max-w-3xl">
                <TabsTrigger value="schools">Schools</TabsTrigger>
                <TabsTrigger value="teachers">Teachers</TabsTrigger>
                <TabsTrigger value="resources">Resources</TabsTrigger>
                <TabsTrigger value="scholarships">Scholarships</TabsTrigger>
                <TabsTrigger value="adult">Adult Education</TabsTrigger>
              </TabsList>

              <TabsContent value="schools" className="space-y-4">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="relative h-[250px] md:h-[350px] rounded-lg overflow-hidden shadow-xl order-2 md:order-1">
                    <Image
                      src="/placeholder.svg?height=700&width=1000"
                      alt="School building"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="order-1 md:order-2">
                    <h3 className="text-2xl font-bold mb-4">School Construction & Renovation</h3>
                    <p className="mb-4">
                      We build and renovate schools in communities where educational infrastructure is lacking. Our
                      school projects focus on creating safe, sustainable, and conducive learning environments.
                    </p>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-start">
                        <span className="text-primary mr-2">✓</span>
                        <span>Built 35+ schools across 12 countries</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">✓</span>
                        <span>Eco-friendly design with local materials</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">✓</span>
                        <span>Community involvement in construction</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">✓</span>
                        <span>Equipped with modern learning facilities</span>
                      </li>
                    </ul>
                    <Link
                      href="/projects/school-construction"
                      className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 inline-block"
                    >
                      View School Projects
                    </Link>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="teachers" className="space-y-4">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Teacher Training & Support</h3>
                    <p className="mb-4">
                      Quality education requires qualified teachers. Our teacher training programs equip educators with
                      modern teaching methodologies, subject expertise, and classroom management skills.
                    </p>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-start">
                        <span className="text-primary mr-2">✓</span>
                        <span>Trained 1,200+ teachers since inception</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">✓</span>
                        <span>Ongoing professional development</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">✓</span>
                        <span>Mentorship and peer learning networks</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">✓</span>
                        <span>Resources and teaching materials</span>
                      </li>
                    </ul>
                    <Link
                      href="/projects/teacher-training"
                      className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 inline-block"
                    >
                      Learn About Teacher Programs
                    </Link>
                  </div>
                  <div className="relative h-[250px] md:h-[350px] rounded-lg overflow-hidden shadow-xl">
                    <Image
                      src="/placeholder.svg?height=700&width=1000"
                      alt="Teacher training session"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="resources" className="space-y-4">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="relative h-[250px] md:h-[350px] rounded-lg overflow-hidden shadow-xl order-2 md:order-1">
                    <Image
                      src="/placeholder.svg?height=700&width=1000"
                      alt="Educational resources"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="order-1 md:order-2">
                    <h3 className="text-2xl font-bold mb-4">Educational Resources & Materials</h3>
                    <p className="mb-4">
                      We provide textbooks, learning materials, and educational resources to schools and communities.
                      Our goal is to ensure that every student has access to quality learning materials.
                    </p>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-start">
                        <span className="text-primary mr-2">✓</span>
                        <span>Distributed 50,000+ books and learning materials</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">✓</span>
                        <span>Digital learning resources and libraries</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">✓</span>
                        <span>Culturally relevant and multilingual materials</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">✓</span>
                        <span>Science kits and hands-on learning tools</span>
                      </li>
                    </ul>
                    <Link
                      href="/projects/educational-resources"
                      className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 inline-block"
                    >
                      View Resource Programs
                    </Link>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="scholarships" className="space-y-4">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Scholarship Programs</h3>
                    <p className="mb-4">
                      Our scholarship programs provide financial support to talented students from disadvantaged
                      backgrounds, enabling them to continue their education and reach their full potential.
                    </p>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-start">
                        <span className="text-primary mr-2">✓</span>
                        <span>Awarded 500+ scholarships since program inception</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">✓</span>
                        <span>Support for primary through university education</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">✓</span>
                        <span>Mentorship and career guidance included</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">✓</span>
                        <span>Focus on girls' education and STEM fields</span>
                      </li>
                    </ul>
                    <Link
                      href="/projects/scholarships"
                      className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 inline-block"
                    >
                      Learn About Scholarships
                    </Link>
                  </div>
                  <div className="relative h-[250px] md:h-[350px] rounded-lg overflow-hidden shadow-xl">
                    <Image
                      src="/placeholder.svg?height=700&width=1000"
                      alt="Scholarship recipients"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="adult" className="space-y-4">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="relative h-[250px] md:h-[350px] rounded-lg overflow-hidden shadow-xl order-2 md:order-1">
                    <Image
                      src="/placeholder.svg?height=700&width=1000"
                      alt="Adult education class"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="order-1 md:order-2">
                    <h3 className="text-2xl font-bold mb-4">Adult Education & Literacy</h3>
                    <p className="mb-4">
                      Education is for everyone, regardless of age. Our adult education programs focus on literacy,
                      vocational skills, and lifelong learning opportunities for adults in underserved communities.
                    </p>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-start">
                        <span className="text-primary mr-2">✓</span>
                        <span>Literacy programs in 8 countries</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">✓</span>
                        <span>Vocational training and skills development</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">✓</span>
                        <span>Financial literacy and entrepreneurship</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">✓</span>
                        <span>Community-based learning centers</span>
                      </li>
                    </ul>
                    <Link
                      href="/projects/adult-education"
                      className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 inline-block"
                    >
                      Explore Adult Education
                    </Link>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Impact Stories
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              {[...Array(3)].map((_, i) => (
                <Card key={i} className="overflow-hidden">
                  <div className="relative h-48">
                    <Image
                      src={`/placeholder.svg?height=400&width=600`}
                      alt={`Impact story ${i + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">
                      {i === 0
                        ? "Maria's Journey to Teaching"
                        : i === 1
                          ? "A New School for Riverside Village"
                          : "From Student to Community Leader"}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {i === 0
                        ? "How a scholarship changed one woman's life and her entire community."
                        : i === 1
                          ? "How a collaborative effort brought education to a remote community."
                          : "The ripple effect of education on community development."}
                    </p>
                    <Link href={`/stories/education-${i + 1}`} className="text-primary hover:underline">
                      Read the full story →
                    </Link>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <div className="bg-primary/5 rounded-xl p-8 md:p-12 mb-16">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl font-bold mb-4">Education by the Numbers</h2>
                <div className="grid grid-cols-2 gap-6 mb-6">
                  <div className="bg-background p-4 rounded-lg shadow-sm">
                    <div className="text-3xl font-bold text-primary">35+</div>
                    <div className="text-sm text-muted-foreground">Schools Built</div>
                  </div>
                  <div className="bg-background p-4 rounded-lg shadow-sm">
                    <div className="text-3xl font-bold text-primary">15,000+</div>
                    <div className="text-sm text-muted-foreground">Students Reached</div>
                  </div>
                  <div className="bg-background p-4 rounded-lg shadow-sm">
                    <div className="text-3xl font-bold text-primary">1,200+</div>
                    <div className="text-sm text-muted-foreground">Teachers Trained</div>
                  </div>
                  <div className="bg-background p-4 rounded-lg shadow-sm">
                    <div className="text-3xl font-bold text-primary">12</div>
                    <div className="text-sm text-muted-foreground">Countries</div>
                  </div>
                </div>
                <p>
                  These numbers represent real change in communities around the world. Behind each statistic are
                  children and adults whose lives have been transformed through education.
                </p>
              </div>
              <div className="relative h-[300px] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="Education impact visualization"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Get Involved in Our Education Mission
            </h2>
            <p className="max-w-2xl mx-auto mb-8">
              There are many ways you can support our education initiatives and help create opportunities for learners
              around the world.
            </p>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-3">Donate</h3>
                <p className="mb-4">
                  Your financial support helps build schools, train teachers, and provide educational resources.
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
                  Share your skills as a teacher, mentor, or construction volunteer on our education projects.
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
                  Organizations can partner with us to expand our educational impact through joint initiatives.
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

