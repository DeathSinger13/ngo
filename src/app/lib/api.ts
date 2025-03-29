// Types
export interface Project {
  id: string
  slug: string
  title: string
  description: string
  image: string
  category: string
  location: string
  goal: number
  raised: number
  startDate: string
  endDate: string
  tags: string[]
  featured: boolean
  progress?: number 
}

export interface BlogPost {
  id: string
  slug: string
  title: string
  excerpt: string
  content: string
  image: string
  author: {
    name: string
    avatar: string
  }
  date: string
  category: string
  tags: string[]
  readTime: number
}

export interface Event {
  id: string
  slug: string
  title: string
  description: string
  image: string
  date: string
  time: string
  location: string
  address: string
  organizer: string
  category: string
  tags: string[]
  featured: boolean
}

export interface Donation {
  id: string
  amount: number
  name: string
  email: string
  date: string
  projectId?: string
  projectName?: string
  anonymous: boolean
  recurring: boolean
}

export interface Volunteer {
  id: string
  name: string
  email: string
  phone: string
  skills: string[]
  availability: string[]
  location: string
  joinDate: string
  status: "active" | "pending" | "inactive"
}

export interface TeamMember {
  id: string
  name: string
  role: string
  bio: string
  image: string
  social: {
    twitter?: string
    linkedin?: string
    email?: string
  }
}

export interface Mission {
  id: string
  slug: string
  title: string
  description: string
  image: string
  stats: {
    label: string
    value: string
    icon?: string
  }[]
  projects: string[]
  featured: boolean
}

export interface Testimonial {
  id: string
  name: string
  role: string
  content: string
  image: string
  rating: number
}

export interface FAQ {
  id: string
  question: string
  answer: string
  category: string
}

// Mock data
const projects: Project[] = [
  {
    id: "1",
    slug: "clean-water-initiative",
    title: "Clean Water Initiative",
    description: "Providing clean water to communities in need through sustainable solutions.",
    image: "/placeholder.svg?height=400&width=600&text=Clean+Water+Initiative",
    category: "water",
    location: "East Africa",
    goal: 50000,
    raised: 32500,
    startDate: "2023-01-15",
    endDate: "2023-12-31",
    tags: ["water", "health", "sustainability"],
    featured: true,
  },
  {
    id: "2",
    slug: "education-for-all",
    title: "Education For All",
    description: "Building schools and providing educational resources to underserved communities.",
    image: "/placeholder.svg?height=400&width=600&text=Education+For+All",
    category: "education",
    location: "South Asia",
    goal: 75000,
    raised: 45000,
    startDate: "2023-03-01",
    endDate: "2024-02-28",
    tags: ["education", "children", "development"],
    featured: true,
  },
  {
    id: "3",
    slug: "healthcare-outreach",
    title: "Healthcare Outreach",
    description: "Mobile clinics and medical supplies for remote communities.",
    image: "/placeholder.svg?height=400&width=600&text=Healthcare+Outreach",
    category: "healthcare",
    location: "Central America",
    goal: 100000,
    raised: 62000,
    startDate: "2023-02-10",
    endDate: "2023-11-30",
    tags: ["healthcare", "medical", "community"],
    featured: false,
  },
  {
    id: "4",
    slug: "sustainable-farming",
    title: "Sustainable Farming",
    description: "Teaching sustainable agricultural practices to improve food security.",
    image: "/placeholder.svg?height=400&width=600&text=Sustainable+Farming",
    category: "environment",
    location: "West Africa",
    goal: 40000,
    raised: 28000,
    startDate: "2023-04-15",
    endDate: "2024-04-14",
    tags: ["environment", "agriculture", "sustainability"],
    featured: false,
  },
]

const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "impact-of-clean-water",
    title: "The Impact of Clean Water on Communities",
    excerpt: "Discover how access to clean water transforms lives and communities.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: "/placeholder.svg?height=400&width=600&text=Clean+Water+Impact",
    author: {
      name: "Sarah Johnson",
      avatar: "/placeholder.svg?height=100&width=100&text=SJ",
    },
    date: "2023-05-12",
    category: "Water",
    tags: ["water", "health", "community"],
    readTime: 5,
  },
  {
    id: "2",
    slug: "education-changes-lives",
    title: "How Education Changes Lives",
    excerpt: "Education is the most powerful tool we can use to change the world.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: "/placeholder.svg?height=400&width=600&text=Education+Impact",
    author: {
      name: "Michael Chen",
      avatar: "/placeholder.svg?height=100&width=100&text=MC",
    },
    date: "2023-06-03",
    category: "Education",
    tags: ["education", "development", "children"],
    readTime: 7,
  },
  {
    id: "3",
    slug: "healthcare-in-remote-areas",
    title: "Healthcare Challenges in Remote Areas",
    excerpt: "Exploring the unique challenges of providing healthcare in remote communities.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: "/placeholder.svg?height=400&width=600&text=Healthcare+Challenges",
    author: {
      name: "Dr. Amara Okafor",
      avatar: "/placeholder.svg?height=100&width=100&text=AO",
    },
    date: "2023-06-18",
    category: "Healthcare",
    tags: ["healthcare", "remote", "challenges"],
    readTime: 6,
  },
]

const events: Event[] = [
  {
    id: "1",
    slug: "annual-charity-gala",
    title: "Annual Charity Gala",
    description: "Join us for an evening of celebration and fundraising for our global initiatives.",
    image: "/placeholder.svg?height=400&width=600&text=Charity+Gala",
    date: "2023-09-15",
    time: "7:00 PM - 11:00 PM",
    location: "Grand Ballroom",
    address: "123 Main Street, New York, NY 10001",
    organizer: "HopeWorks Events Team",
    category: "Fundraising",
    tags: ["gala", "fundraising", "networking"],
    featured: true,
  },
  {
    id: "2",
    slug: "volunteer-training-workshop",
    title: "Volunteer Training Workshop",
    description: "Learn essential skills for volunteering effectively with our organization.",
    image: "/placeholder.svg?height=400&width=600&text=Volunteer+Workshop",
    date: "2023-07-22",
    time: "10:00 AM - 3:00 PM",
    location: "Community Center",
    address: "456 Oak Avenue, Chicago, IL 60601",
    organizer: "Volunteer Coordination Team",
    category: "Training",
    tags: ["volunteer", "training", "skills"],
    featured: false,
  },
  {
    id: "3",
    slug: "clean-water-conference",
    title: "Clean Water Conference",
    description: "A gathering of experts and advocates to discuss clean water solutions.",
    image: "/placeholder.svg?height=400&width=600&text=Water+Conference",
    date: "2023-08-10",
    time: "9:00 AM - 5:00 PM",
    location: "Water Institute",
    address: "789 River Road, San Francisco, CA 94105",
    organizer: "Clean Water Initiative",
    category: "Conference",
    tags: ["water", "conference", "experts"],
    featured: true,
  },
]

const donations: Donation[] = [
  {
    id: "1",
    amount: 250,
    name: "John Smith",
    email: "john@example.com",
    date: "2023-06-15",
    projectId: "1",
    projectName: "Clean Water Initiative",
    anonymous: false,
    recurring: true,
  },
  {
    id: "2",
    amount: 100,
    name: "Anonymous",
    email: "anonymous@example.com",
    date: "2023-06-14",
    anonymous: true,
    recurring: false,
  },
  {
    id: "3",
    amount: 500,
    name: "Emily Johnson",
    email: "emily@example.com",
    date: "2023-06-12",
    projectId: "2",
    projectName: "Education For All",
    anonymous: false,
    recurring: false,
  },
]

const volunteers: Volunteer[] = [
  {
    id: "1",
    name: "David Wilson",
    email: "david@example.com",
    phone: "555-123-4567",
    skills: ["teaching", "project management", "fundraising"],
    availability: ["weekends", "evenings"],
    location: "New York, NY",
    joinDate: "2023-01-10",
    status: "active",
  },
  {
    id: "2",
    name: "Maria Garcia",
    email: "maria@example.com",
    phone: "555-987-6543",
    skills: ["healthcare", "translation", "community outreach"],
    availability: ["weekdays"],
    location: "Los Angeles, CA",
    joinDate: "2023-02-15",
    status: "active",
  },
  {
    id: "3",
    name: "James Lee",
    email: "james@example.com",
    phone: "555-456-7890",
    skills: ["web development", "graphic design", "social media"],
    availability: ["flexible"],
    location: "Chicago, IL",
    joinDate: "2023-03-05",
    status: "pending",
  },
]

const teamMembers: TeamMember[] = [
  {
    id: "1",
    name: "Dr. Elizabeth Chen",
    role: "Executive Director",
    bio: "Dr. Chen has over 20 years of experience in international development and humanitarian work.",
    image: "/placeholder.svg?height=300&width=300&text=Dr.+Chen",
    social: {
      twitter: "https://twitter.com/drelizabethchen",
      linkedin: "https://linkedin.com/in/elizabethchen",
      email: "elizabeth@hopeworks.org",
    },
  },
  {
    id: "2",
    name: "Marcus Johnson",
    role: "Director of Operations",
    bio: "Marcus oversees all field operations and ensures our projects are executed efficiently and effectively.",
    image: "/placeholder.svg?height=300&width=300&text=Marcus+J",
    social: {
      linkedin: "https://linkedin.com/in/marcusjohnson",
      email: "marcus@hopeworks.org",
    },
  },
  {
    id: "3",
    name: "Sophia Patel",
    role: "Director of Development",
    bio: "Sophia leads our fundraising efforts and donor relations to support our global initiatives.",
    image: "/placeholder.svg?height=300&width=300&text=Sophia+P",
    social: {
      twitter: "https://twitter.com/sophiapatel",
      linkedin: "https://linkedin.com/in/sophiapatel",
      email: "sophia@hopeworks.org",
    },
  },
]

const missions: Mission[] = [
  {
    id: "1",
    slug: "clean-water",
    title: "Clean Water",
    description: "Providing sustainable access to clean water for communities in need.",
    image: "/placeholder.svg?height=400&width=600&text=Clean+Water",
    stats: [
      { label: "Communities Served", value: "250+", icon: "droplet" },
      { label: "Wells Built", value: "500+", icon: "tool" },
      { label: "People Impacted", value: "1M+", icon: "users" },
    ],
    projects: ["1"],
    featured: true,
  },
  {
    id: "2",
    slug: "education",
    title: "Education",
    description: "Building schools and providing educational resources to underserved communities.",
    image: "/placeholder.svg?height=400&width=600&text=Education",
    stats: [
      { label: "Schools Built", value: "75+", icon: "school" },
      { label: "Teachers Trained", value: "500+", icon: "book" },
      { label: "Students Reached", value: "25K+", icon: "users" },
    ],
    projects: ["2"],
    featured: true,
  },
  {
    id: "3",
    slug: "healthcare",
    title: "Healthcare",
    description: "Providing medical services and supplies to communities with limited access to healthcare.",
    image: "/placeholder.svg?height=400&width=600&text=Healthcare",
    stats: [
      { label: "Clinics Established", value: "30+", icon: "activity" },
      { label: "Medical Professionals", value: "200+", icon: "user" },
      { label: "Patients Treated", value: "500K+", icon: "heart" },
    ],
    projects: ["3"],
    featured: true,
  },
  {
    id: "4",
    slug: "environment",
    title: "Environment",
    description: "Promoting sustainable practices to protect the environment and combat climate change.",
    image: "/placeholder.svg?height=400&width=600&text=Environment",
    stats: [
      { label: "Trees Planted", value: "1M+", icon: "tree" },
      { label: "Acres Protected", value: "50K+", icon: "map" },
      { label: "Communities Engaged", value: "100+", icon: "users" },
    ],
    projects: ["4"],
    featured: false,
  },
]

const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Sarah M.",
    role: "Community Leader",
    content:
      "The clean water project has transformed our community. Children are healthier, and women no longer have to walk miles for water.",
    image: "/placeholder.svg?height=100&width=100&text=SM",
    rating: 5,
  },
  {
    id: "2",
    name: "James K.",
    role: "School Principal",
    content:
      "The new school building and teacher training program have dramatically improved education outcomes in our village.",
    image: "/placeholder.svg?height=100&width=100&text=JK",
    rating: 5,
  },
  {
    id: "3",
    name: "Maria L.",
    role: "Healthcare Worker",
    content:
      "With the medical supplies and training provided by HopeWorks, we can now offer better care to our patients.",
    image: "/placeholder.svg?height=100&width=100&text=ML",
    rating: 4,
  },
]

const faqs: FAQ[] = [
  {
    id: "1",
    question: "How is my donation used?",
    answer:
      "Your donation directly supports our programs and projects. We ensure that at least 85% of all donations go directly to our field operations, with the remaining funds used for essential administrative costs and fundraising efforts.",
    category: "donations",
  },
  {
    id: "2",
    question: "Can I volunteer internationally?",
    answer:
      "Yes, we offer international volunteer opportunities for qualified individuals. These positions typically require specific skills and a commitment of at least 3 months. Please visit our Volunteer page for current opportunities.",
    category: "volunteering",
  },
  {
    id: "3",
    question: "Are donations tax-deductible?",
    answer:
      "Yes, HopeWorks is a registered 501(c)(3) nonprofit organization, and all donations are tax-deductible to the extent allowed by law. You will receive a tax receipt for your donation.",
    category: "donations",
  },
  {
    id: "4",
    question: "How can my company partner with HopeWorks?",
    answer:
      "We offer various corporate partnership opportunities, including sponsorships, matching gift programs, and employee volunteer initiatives. Please contact our partnerships team at partnerships@hopeworks.org to discuss possibilities.",
    category: "partnerships",
  },
]

// API functions
export async function getProjects(
  options: { featured?: boolean; category?: string; limit?: number } = {},
): Promise<Project[]> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500))

  let filteredProjects = [...projects]

  if (options.featured !== undefined) {
    filteredProjects = filteredProjects.filter((project) => project.featured === options.featured)
  }

  if (options.category) {
    filteredProjects = filteredProjects.filter((project) => project.category === options.category)
  }

  if (options.limit) {
    filteredProjects = filteredProjects.slice(0, options.limit)
  }

  return filteredProjects
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500))

  const project = projects.find((p) => p.slug === slug)
  return project || null
}

export async function getBlogPosts(options: { category?: string; limit?: number } = {}): Promise<BlogPost[]> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500))

  let filteredPosts = [...blogPosts]

  if (options.category) {
    filteredPosts = filteredPosts.filter((post) => options.category && post.category.toLowerCase() === options.category.toLowerCase())
  }

  if (options.limit) {
    filteredPosts = filteredPosts.slice(0, options.limit)
  }

  return filteredPosts
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500))

  const post = blogPosts.find((p) => p.slug === slug)
  return post || null
}

export async function getEvents(
  options: { featured?: boolean; upcoming?: boolean; limit?: number } = {},
): Promise<Event[]> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500))

  let filteredEvents = [...events]

  if (options.featured !== undefined) {
    filteredEvents = filteredEvents.filter((event) => event.featured === options.featured)
  }

  if (options.upcoming) {
    const today = new Date()
    filteredEvents = filteredEvents.filter((event) => new Date(event.date) >= today)
  }

  if (options.limit) {
    filteredEvents = filteredEvents.slice(0, options.limit)
  }

  return filteredEvents
}

export async function getEventBySlug(slug: string): Promise<Event | null> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500))

  const event = events.find((e) => e.slug === slug)
  return event || null
}

export async function getDonations(limit?: number): Promise<Donation[]> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500))

  let result = [...donations]

  if (limit) {
    result = result.slice(0, limit)
  }

  return result
}

export async function getVolunteers(): Promise<Volunteer[]> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500))

  return [...volunteers]
}

export async function getTeamMembers(): Promise<TeamMember[]> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500))

  return [...teamMembers]
}

export async function getMissions(options: { featured?: boolean } = {}): Promise<Mission[]> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500))

  let filteredMissions = [...missions]

  if (options.featured !== undefined) {
    filteredMissions = filteredMissions.filter((mission) => mission.featured === options.featured)
  }

  return filteredMissions
}

export async function getMissionBySlug(slug: string): Promise<Mission | null> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500))

  const mission = missions.find((m) => m.slug === slug)
  return mission || null
}

export async function getTestimonials(limit?: number): Promise<Testimonial[]> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500))

  let result = [...testimonials]

  if (limit) {
    result = result.slice(0, limit)
  }

  return result
}

export async function getFAQs(category?: string): Promise<FAQ[]> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500))

  let filteredFAQs = [...faqs]

  if (category) {
    filteredFAQs = filteredFAQs.filter((faq) => faq.category === category)
  }

  return filteredFAQs
}

// Form submission functions
export async function submitContactForm(data: any): Promise<{ success: boolean; message: string }> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 1000))

  // Simulate successful submission
  return {
    success: true,
    message: "Thank you for your message. We'll get back to you soon!",
  }
}

export async function submitDonation(data: any): Promise<{ success: boolean; message: string; donationId?: string }> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 1500))

  // Simulate successful submission
  return {
    success: true,
    message: "Thank you for your generous donation!",
    donationId: "don_" + Math.random().toString(36).substring(2, 10),
  }
}

export async function submitVolunteerApplication(data: any): Promise<{ success: boolean; message: string }> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 1000))

  // Simulate successful submission
  return {
    success: true,
    message: "Thank you for your interest in volunteering. We'll review your application and contact you soon!",
  }
}

export async function subscribeToNewsletter(email: string): Promise<{ success: boolean; message: string }> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 800))

  // Simulate successful submission
  return {
    success: true,
    message: "Thank you for subscribing to our newsletter!",
  }
}

// Search function
export async function searchSite(query: string): Promise<{
  projects: Project[]
  blogPosts: BlogPost[]
  events: Event[]
  pages: { title: string; url: string; excerpt: string }[]
}> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 800))

  const lowercaseQuery = query.toLowerCase()

  const filteredProjects = projects.filter(
    (project) =>
      project.title.toLowerCase().includes(lowercaseQuery) ||
      project.description.toLowerCase().includes(lowercaseQuery),
  )

  const filteredBlogPosts = blogPosts.filter(
    (post) => post.title.toLowerCase().includes(lowercaseQuery) || post.excerpt.toLowerCase().includes(lowercaseQuery),
  )

  const filteredEvents = events.filter(
    (event) =>
      event.title.toLowerCase().includes(lowercaseQuery) || event.description.toLowerCase().includes(lowercaseQuery),
  )

  // Mock pages search results
  const pages = [
    {
      title: "About Us",
      url: "/about",
      excerpt: "Learn about our mission, vision, and the impact we're making around the world.",
    },
    {
      title: "Get Involved",
      url: "/get-involved",
      excerpt: "Discover how you can contribute to our mission through volunteering, donations, and more.",
    },
    {
      title: "Contact Us",
      url: "/contact",
      excerpt: "Get in touch with our team for inquiries, partnerships, or support.",
    },
  ].filter(
    (page) => page.title.toLowerCase().includes(lowercaseQuery) || page.excerpt.toLowerCase().includes(lowercaseQuery),
  )

  return {
    projects: filteredProjects,
    blogPosts: filteredBlogPosts,
    events: filteredEvents,
    pages,
  }
}

