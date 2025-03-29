"use client"

import { Badge } from "../components/ui/badge"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "../components/ui/card"
import { DashboardChart } from "../components/dashboard-chart"
import { RecentDonations } from "../components/recent-donations"
import { UpcomingEvents } from "../components/upcoming-events"
import { DecorativeCurl } from "../components/decorative-curl"
import { BlobBackground } from "../components/blob-background"
import {
  TrendingUp,
  DollarSign,
  Clock,
  Heart,
  Calendar,
  FolderOpen,
  Bell,
  Users,
  MessageSquare,
  ChevronRight,
  ArrowUpRight,
  User2,
  LogOut,
  Settings,
} from "lucide-react"
import { Button } from "../components/ui/button"
import { Progress } from "../components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../components/ui/dropdown-menu"
import { AdminLayout } from "../components/admin-layout"

export default function AdminDashboard() {
  const [currentTime, setCurrentTime] = useState(new Date())
  const [loading, setLoading] = useState(true)

  // Simulate loading state
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  // Update current time
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  const recentActivity = [
    { action: "New donation received", amount: "$250.00", user: "Sarah Johnson", time: "10 minutes ago" },
    { action: "New volunteer registered", user: "Michael Chen", time: "25 minutes ago" },
    { action: "Project status updated", project: "Clean Water Initiative", status: "In Progress", time: "1 hour ago" },
    { action: "Event created", event: "Annual Fundraising Gala", time: "3 hours ago" },
    {
      action: "New message received",
      from: "Emily Rodriguez",
      subject: "Partnership Opportunity",
      time: "5 hours ago",
    },
  ]

  return (
    <AdminLayout>
      <BlobBackground blobCount={3} className="opacity-30" />
      <DecorativeCurl position="top-right" color="primary" size="md" />

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold gradient-heading">Admin Dashboard</h1>
          <p className="text-muted-foreground">Welcome back, Admin User! Here's what's happening today.</p>
        </div>

        <div className="flex items-center gap-3">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-medium">{currentTime.toLocaleDateString()}</p>
            <p className="text-xs text-muted-foreground">{currentTime.toLocaleTimeString()}</p>
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon" className="relative rounded-full">
                <Bell className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-primary text-[10px] text-primary-foreground flex items-center justify-center">
                  3
                </span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-80">
              <DropdownMenuLabel>Notifications</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {[
                { title: "New donation received", desc: "Sarah Johnson donated $250", time: "10 min ago" },
                {
                  title: "New volunteer application",
                  desc: "Michael Chen applied to volunteer",
                  time: "25 min ago",
                },
                {
                  title: "Project update required",
                  desc: "Clean Water Initiative needs an update",
                  time: "1 hour ago",
                },
              ].map((notification, i) => (
                <DropdownMenuItem key={i} className="cursor-pointer py-2">
                  <div className="flex items-start gap-2">
                    <div
                      className={`h-2 w-2 rounded-full mt-1.5 ${i === 0 ? "bg-primary" : i === 1 ? "bg-secondary" : "bg-tertiary"}`}
                    ></div>
                    <div>
                      <p className="font-medium text-sm">{notification.title}</p>
                      <p className="text-xs text-muted-foreground">{notification.desc}</p>
                      <p className="text-xs text-muted-foreground mt-1">{notification.time}</p>
                    </div>
                  </div>
                </DropdownMenuItem>
              ))}
              <DropdownMenuSeparator />
              <DropdownMenuItem className="cursor-pointer justify-center">
                <Link href="/admin/notifications" className="text-primary text-sm">
                  View all notifications
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="rounded-full flex items-center gap-2">
                <Avatar className="h-6 w-6">
                  <AvatarImage src="/placeholder.svg?height=24&width=24" alt="Admin User" />
                  <AvatarFallback className="text-xs">AU</AvatarFallback>
                </Avatar>
                <span className="hidden sm:inline text-sm">Admin</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link href="/admin/profile" className="flex items-center gap-2">
                  <User2 className="h-4 w-4" />
                  Profile
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/admin/settings" className="flex items-center gap-2">
                  <Settings className="h-4 w-4" />
                  Settings
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link href="/" className="flex items-center gap-2">
                  <LogOut className="h-4 w-4" />
                  Exit Admin
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {loading ? (
        <div className="space-y-4">
          <div className="h-8 w-64 bg-muted animate-pulse rounded-md"></div>
          <div className="grid gap-4 md:gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-32 bg-muted animate-pulse rounded-xl"></div>
            ))}
          </div>
          <div className="h-80 bg-muted animate-pulse rounded-xl mt-6"></div>
          <div className="grid gap-6 grid-cols-1 lg:grid-cols-2 mt-6">
            <div className="h-96 bg-muted animate-pulse rounded-xl"></div>
            <div className="h-96 bg-muted animate-pulse rounded-xl"></div>
          </div>
        </div>
      ) : (
        <>
          <div className="grid gap-4 md:gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 mb-6">
            <Card className="card-hover border-l-4 border-l-primary">
              <CardContent className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground mb-1">Total Donations</p>
                    <div className="text-2xl md:text-3xl font-bold">$124,750</div>
                    <div className="flex items-center mt-1 text-xs text-green-600 dark:text-green-400">
                      <TrendingUp className="h-3 w-3 mr-1" />
                      <span>+12.5% from last month</span>
                    </div>
                  </div>
                  <div className="p-2 rounded-full bg-primary/10">
                    <DollarSign className="h-5 w-5 text-primary" />
                  </div>
                </div>
                <Progress value={75} className="h-1 mt-4" />
              </CardContent>
            </Card>

            <Card className="card-hover border-l-4 border-l-secondary">
              <CardContent className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground mb-1">Active Projects</p>
                    <div className="text-2xl md:text-3xl font-bold">24</div>
                    <div className="flex items-center mt-1 text-xs text-green-600 dark:text-green-400">
                      <TrendingUp className="h-3 w-3 mr-1" />
                      <span>3 new this month</span>
                    </div>
                  </div>
                  <div className="p-2 rounded-full bg-secondary/10">
                    <FolderOpen className="h-5 w-5 text-secondary" />
                  </div>
                </div>
                <Progress value={60} className="h-1 mt-4 bg-muted [&>div]:bg-secondary" />
              </CardContent>
            </Card>

            <Card className="card-hover border-l-4 border-l-tertiary">
              <CardContent className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground mb-1">Volunteers</p>
                    <div className="text-2xl md:text-3xl font-bold">342</div>
                    <div className="flex items-center mt-1 text-xs text-green-600 dark:text-green-400">
                      <TrendingUp className="h-3 w-3 mr-1" />
                      <span>+28 from last month</span>
                    </div>
                  </div>
                  <div className="p-2 rounded-full bg-tertiary/10">
                    <Users className="h-5 w-5 text-tertiary" />
                  </div>
                </div>
                <Progress value={85} className="h-1 mt-4 bg-muted [&>div]:bg-tertiary" />
              </CardContent>
            </Card>

            <Card className="card-hover border-l-4 border-l-accent1">
              <CardContent className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground mb-1">Upcoming Events</p>
                    <div className="text-2xl md:text-3xl font-bold">8</div>
                    <div className="flex items-center mt-1 text-xs text-amber-600 dark:text-amber-400">
                      <Clock className="h-3 w-3 mr-1" />
                      <span>Next: Annual Gala (3 days)</span>
                    </div>
                  </div>
                  <div className="p-2 rounded-full bg-accent1/10">
                    <Calendar className="h-5 w-5 text-accent1" />
                  </div>
                </div>
                <Progress value={40} className="h-1 mt-4 bg-muted [&>div]:bg-accent1" />
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            <Card className="lg:col-span-2 card-hover">
              <CardHeader className="pb-2 flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Donation Analytics</CardTitle>
                  <CardDescription>View donation trends over the past 6 months</CardDescription>
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="sm">
                      Last 6 Months <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>Last 30 Days</DropdownMenuItem>
                    <DropdownMenuItem>Last 6 Months</DropdownMenuItem>
                    <DropdownMenuItem>Last Year</DropdownMenuItem>
                    <DropdownMenuItem>All Time</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </CardHeader>
              <CardContent>
                <DashboardChart type="donations" />
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader className="pb-2">
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>Latest actions across the platform</CardDescription>
              </CardHeader>
              <CardContent className="max-h-[300px] overflow-y-auto">
                <div className="space-y-4">
                  {recentActivity.map((activity, i) => (
                    <div key={i} className="flex gap-3 pb-4 border-b last:border-0 last:pb-0">
                      <div
                        className={`h-8 w-8 rounded-full flex items-center justify-center shrink-0 ${i % 5 === 0
                          ? "bg-primary/10 text-primary"
                          : i % 5 === 1
                            ? "bg-secondary/10 text-secondary"
                            : i % 5 === 2
                              ? "bg-tertiary/10 text-tertiary"
                              : i % 5 === 3
                                ? "bg-accent1/10 text-accent1"
                                : "bg-accent2/10 text-accent2"
                          }`}
                      >
                        {i % 5 === 0 ? (
                          <Heart className="h-4 w-4" />
                        ) : i % 5 === 1 ? (
                          <Users className="h-4 w-4" />
                        ) : i % 5 === 2 ? (
                          <FolderOpen className="h-4 w-4" />
                        ) : i % 5 === 3 ? (
                          <Calendar className="h-4 w-4" />
                        ) : (
                          <MessageSquare className="h-4 w-4" />
                        )}
                      </div>
                      <div>
                        <p className="text-sm font-medium">{activity.action}</p>
                        {activity.amount && <p className="text-xs text-primary font-medium">{activity.amount}</p>}
                        {activity.user && <p className="text-xs text-muted-foreground">By {activity.user}</p>}
                        {activity.project && (
                          <p className="text-xs text-muted-foreground">Project: {activity.project}</p>
                        )}
                        {activity.event && <p className="text-xs text-muted-foreground">Event: {activity.event}</p>}
                        {activity.from && <p className="text-xs text-muted-foreground">From: {activity.from}</p>}
                        {activity.subject && (
                          <p className="text-xs text-muted-foreground">Subject: {activity.subject}</p>
                        )}
                        {activity.status && <p className="text-xs text-muted-foreground">Status: {activity.status}</p>}
                        <p className="text-xs text-muted-foreground mt-1">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="border-t pt-4 pb-2">
                <Button variant="ghost" size="sm" className="w-full text-primary" asChild>
                  <Link href="/admin/activity">
                    View All Activity <ArrowUpRight className="ml-1 h-3 w-3" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>

          <div className="grid gap-6 grid-cols-1 lg:grid-cols-2">
            <Card className="card-hover">
              <CardHeader className="pb-2 flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Recent Donations</CardTitle>
                  <CardDescription>View the most recent donations</CardDescription>
                </div>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/admin/donations">View All</Link>
                </Button>
              </CardHeader>
              <CardContent>
                <RecentDonations />
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader className="pb-2 flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Upcoming Events</CardTitle>
                  <CardDescription>Manage upcoming events</CardDescription>
                </div>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/admin/events">View All</Link>
                </Button>
              </CardHeader>
              <CardContent>
                <UpcomingEvents />
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-6 grid-cols-1 md:grid-cols-3 mt-6">
            <Card className="card-hover">
              <CardHeader className="pb-2">
                <CardTitle className="text-base">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-2">
                  <Button variant="outline" size="sm" className="justify-start" asChild>
                    <Link href="/admin/donations/new">
                      <Heart className="h-4 w-4 mr-2" />
                      Add Donation
                    </Link>
                  </Button>
                  <Button variant="outline" size="sm" className="justify-start" asChild>
                    <Link href="/admin/events/new">
                      <Calendar className="h-4 w-4 mr-2" />
                      Create Event
                    </Link>
                  </Button>
                  <Button variant="outline" size="sm" className="justify-start" asChild>
                    <Link href="/admin/projects/new">
                      <FolderOpen className="h-4 w-4 mr-2" />
                      New Project
                    </Link>
                  </Button>
                  <Button variant="outline" size="sm" className="justify-start" asChild>
                    <Link href="/admin/volunteers/new">
                      <Users className="h-4 w-4 mr-2" />
                      Add Volunteer
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader className="pb-2">
                <CardTitle className="text-base">Project Status</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Clean Water Initiative</span>
                  <Badge className="bg-green-500 hover:bg-green-600">Active</Badge>
                </div>
                <Progress value={75} className="h-1.5" />

                <div className="flex justify-between items-center">
                  <span className="text-sm">Education for All</span>
                  <Badge className="bg-blue-500 hover:bg-blue-600">Planning</Badge>
                </div>
                <Progress value={30} className="h-1.5 [&>div]:bg-blue-500" />

                <div className="flex justify-between items-center">
                  <span className="text-sm">Healthcare Access</span>
                  <Badge className="bg-amber-500 hover:bg-amber-600">On Hold</Badge>
                </div>
                <Progress value={50} className="h-1.5 [&>div]:bg-amber-500" />
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader className="pb-2">
                <CardTitle className="text-base">System Status</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Server Status</span>
                    <Badge className="bg-green-500 hover:bg-green-600">Online</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Database</span>
                    <Badge className="bg-green-500 hover:bg-green-600">Connected</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Last Backup</span>
                    <span className="text-xs text-muted-foreground">Today, 03:45 AM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Storage Usage</span>
                    <span className="text-xs text-muted-foreground">42% of 10GB</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </>
      )}
    </AdminLayout>
  )
}

