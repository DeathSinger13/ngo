import { Card } from "../../components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs"
import { BlobBackground } from "../../components/blob-background"
import { PageHeader } from "../../components/page-header"
import { AdminLayout } from "../../components/admin-layout"

export default function AdminEventsPage() {
  return (
    <AdminLayout>
      <BlobBackground className="opacity-10" />
      <PageHeader title="Event Management" description="Create, manage, and track all organization events" />

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mt-8 mb-6">
        <div className="flex gap-2">
          <button className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90">
            Create Event
          </button>
          <button className="px-4 py-2 bg-muted hover:bg-muted/80 rounded-md">Import Events</button>
        </div>

        <div className="flex gap-2">
          <select className="px-3 py-2 bg-background border rounded-md">
            <option>All Categories</option>
            <option>Fundraising</option>
            <option>Community</option>
            <option>Education</option>
            <option>Volunteer</option>
          </select>
          <select className="px-3 py-2 bg-background border rounded-md">
            <option>All Statuses</option>
            <option>Upcoming</option>
            <option>Ongoing</option>
            <option>Completed</option>
            <option>Cancelled</option>
          </select>
        </div>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="grid w-full md:w-auto grid-cols-4 mb-8">
          <TabsTrigger value="all">All Events</TabsTrigger>
          <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
          <TabsTrigger value="ongoing">Ongoing</TabsTrigger>
          <TabsTrigger value="past">Past Events</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-4">
          <Card className="p-6">
            <h3 className="text-xl font-bold mb-4">All Events</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-2">Event Name</th>
                    <th className="text-left py-3 px-2">Date</th>
                    <th className="text-left py-3 px-2">Location</th>
                    <th className="text-left py-3 px-2">Category</th>
                    <th className="text-left py-3 px-2">Status</th>
                    <th className="text-left py-3 px-2">Attendees</th>
                    <th className="text-left py-3 px-2">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {[...Array(10)].map((_, i) => (
                    <tr key={i} className="border-b hover:bg-muted/50">
                      <td className="py-3 px-2 font-medium">
                        {i % 3 === 0
                          ? "Annual Fundraising Gala"
                          : i % 3 === 1
                            ? "Community Clean-up Day"
                            : "Educational Workshop"}
                      </td>
                      <td className="py-3 px-2">
                        2023-{Math.floor(Math.random() * 12) + 1}-{Math.floor(Math.random() * 28) + 1}
                      </td>
                      <td className="py-3 px-2">
                        {i % 4 === 0
                          ? "City Hall"
                          : i % 4 === 1
                            ? "Community Center"
                            : i % 4 === 2
                              ? "Central Park"
                              : "Virtual"}
                      </td>
                      <td className="py-3 px-2">
                        {i % 3 === 0 ? "Fundraising" : i % 3 === 1 ? "Community" : "Education"}
                      </td>
                      <td className="py-3 px-2">
                        <span
                          className={`px-2 py-1 rounded-full text-xs ${i % 4 === 0
                            ? "bg-green-100 text-green-800"
                            : i % 4 === 1
                              ? "bg-blue-100 text-blue-800"
                              : i % 4 === 2
                                ? "bg-yellow-100 text-yellow-800"
                                : "bg-gray-100 text-gray-800"
                            }`}
                        >
                          {i % 4 === 0 ? "Upcoming" : i % 4 === 1 ? "Ongoing" : i % 4 === 2 ? "Completed" : "Cancelled"}
                        </span>
                      </td>
                      <td className="py-3 px-2">{Math.floor(Math.random() * 100) + 20}</td>
                      <td className="py-3 px-2">
                        <button className="text-primary hover:text-primary/80 mr-2">Edit</button>
                        <button className="text-primary hover:text-primary/80">View</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="upcoming" className="space-y-4">
          <Card className="p-6">
            <h3 className="text-xl font-bold mb-4">Upcoming Events</h3>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {[...Array(6)].map((_, i) => (
                <Card key={i} className="p-4 border">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-semibold">
                        {i % 2 === 0 ? "Annual Fundraising Gala" : "Community Clean-up Day"}
                      </h4>
                      <p className="text-sm text-muted-foreground">{i % 2 === 0 ? "Fundraising" : "Community"}</p>
                    </div>
                    <span className="px-2 py-1 rounded-full text-xs bg-green-100 text-green-800">Upcoming</span>
                  </div>
                  <div className="mt-3">
                    <p className="text-sm">
                      <span className="font-medium">Date:</span> 2023-{Math.floor(Math.random() * 12) + 1}-
                      {Math.floor(Math.random() * 28) + 1}
                    </p>
                    <p className="text-sm">
                      <span className="font-medium">Time:</span> {Math.floor(Math.random() * 12) + 1}:00{" "}
                      {Math.random() > 0.5 ? "PM" : "AM"}
                    </p>
                    <p className="text-sm">
                      <span className="font-medium">Location:</span> {i % 2 === 0 ? "City Hall" : "Central Park"}
                    </p>
                    <p className="text-sm">
                      <span className="font-medium">Registered:</span> {Math.floor(Math.random() * 50) + 10} attendees
                    </p>
                  </div>
                  <div className="mt-4 flex justify-end gap-2">
                    <button className="px-3 py-1 bg-primary text-primary-foreground rounded-md text-sm hover:bg-primary/90">
                      Edit
                    </button>
                    <button className="px-3 py-1 bg-muted hover:bg-muted/80 rounded-md text-sm">Details</button>
                  </div>
                </Card>
              ))}
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="ongoing" className="space-y-4">
          <Card className="p-6">
            <h3 className="text-xl font-bold mb-4">Ongoing Events</h3>
            <div className="grid gap-4 md:grid-cols-2">
              {[...Array(3)].map((_, i) => (
                <Card key={i} className="p-4 border">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-semibold">
                        {i === 0
                          ? "Educational Workshop Series"
                          : i === 1
                            ? "Virtual Fundraising Campaign"
                            : "Community Garden Project"}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {i === 0 ? "Education" : i === 1 ? "Fundraising" : "Community"}
                      </p>
                    </div>
                    <span className="px-2 py-1 rounded-full text-xs bg-blue-100 text-blue-800">Ongoing</span>
                  </div>
                  <div className="mt-3">
                    <p className="text-sm">
                      <span className="font-medium">Started:</span> 2023-{Math.floor(Math.random() * 12) + 1}-
                      {Math.floor(Math.random() * 28) + 1}
                    </p>
                    <p className="text-sm">
                      <span className="font-medium">Ends:</span> 2023-{Math.floor(Math.random() * 12) + 1}-
                      {Math.floor(Math.random() * 28) + 1}
                    </p>
                    <p className="text-sm">
                      <span className="font-medium">Location:</span>{" "}
                      {i === 0 ? "Community Center" : i === 1 ? "Virtual" : "Riverside Park"}
                    </p>
                    <p className="text-sm">
                      <span className="font-medium">Participants:</span> {Math.floor(Math.random() * 100) + 50}
                    </p>
                  </div>
                  <div className="mt-4">
                    <div className="flex justify-between text-sm mb-1">
                      <span>Progress</span>
                      <span>{Math.floor(Math.random() * 50) + 50}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div
                        className="bg-primary rounded-full h-2"
                        style={{ width: `${Math.floor(Math.random() * 50) + 50}%` }}
                      ></div>
                    </div>
                  </div>
                  <div className="mt-4 flex justify-end gap-2">
                    <button className="px-3 py-1 bg-primary text-primary-foreground rounded-md text-sm hover:bg-primary/90">
                      Update
                    </button>
                    <button className="px-3 py-1 bg-muted hover:bg-muted/80 rounded-md text-sm">Details</button>
                  </div>
                </Card>
              ))}
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="past" className="space-y-4">
          <Card className="p-6">
            <h3 className="text-xl font-bold mb-4">Past Events</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-2">Event Name</th>
                    <th className="text-left py-3 px-2">Date</th>
                    <th className="text-left py-3 px-2">Location</th>
                    <th className="text-left py-3 px-2">Attendees</th>
                    <th className="text-left py-3 px-2">Funds Raised</th>
                    <th className="text-left py-3 px-2">Status</th>
                    <th className="text-left py-3 px-2">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {[...Array(8)].map((_, i) => (
                    <tr key={i} className="border-b hover:bg-muted/50">
                      <td className="py-3 px-2 font-medium">
                        {i % 3 === 0
                          ? "Spring Charity Run"
                          : i % 3 === 1
                            ? "Environmental Workshop"
                            : "Winter Fundraising Dinner"}
                      </td>
                      <td className="py-3 px-2">
                        2023-{Math.floor(Math.random() * 12) + 1}-{Math.floor(Math.random() * 28) + 1}
                      </td>
                      <td className="py-3 px-2">
                        {i % 4 === 0
                          ? "City Park"
                          : i % 4 === 1
                            ? "Community Center"
                            : i % 4 === 2
                              ? "Convention Hall"
                              : "Downtown Plaza"}
                      </td>
                      <td className="py-3 px-2">{Math.floor(Math.random() * 200) + 50}</td>
                      <td className="py-3 px-2">${Math.floor(Math.random() * 5000) + 1000}</td>
                      <td className="py-3 px-2">
                        <span className="px-2 py-1 rounded-full text-xs bg-yellow-100 text-yellow-800">Completed</span>
                      </td>
                      <td className="py-3 px-2">
                        <button className="text-primary hover:text-primary/80 mr-2">Report</button>
                        <button className="text-primary hover:text-primary/80">View</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="grid md:grid-cols-3 gap-6 mt-8">
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Event Statistics</h3>
          <div className="space-y-4">
            <div className="flex justify-between">
              <span>Total Events</span>
              <span className="font-medium">42</span>
            </div>
            <div className="flex justify-between">
              <span>Upcoming Events</span>
              <span className="font-medium">12</span>
            </div>
            <div className="flex justify-between">
              <span>Ongoing Events</span>
              <span className="font-medium">3</span>
            </div>
            <div className="flex justify-between">
              <span>Completed Events</span>
              <span className="font-medium">27</span>
            </div>
            <div className="flex justify-between">
              <span>Total Attendees</span>
              <span className="font-medium">3,245</span>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Event Categories</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span>Fundraising</span>
              <span className="font-medium">15 events</span>
            </div>
            <div className="w-full bg-muted rounded-full h-2">
              <div className="bg-primary rounded-full h-2" style={{ width: "35%" }}></div>
            </div>

            <div className="flex justify-between items-center mt-4">
              <span>Community</span>
              <span className="font-medium">12 events</span>
            </div>
            <div className="w-full bg-muted rounded-full h-2">
              <div className="bg-primary rounded-full h-2" style={{ width: "28%" }}></div>
            </div>

            <div className="flex justify-between items-center mt-4">
              <span>Education</span>
              <span className="font-medium">10 events</span>
            </div>
            <div className="w-full bg-muted rounded-full h-2">
              <div className="bg-primary rounded-full h-2" style={{ width: "24%" }}></div>
            </div>

            <div className="flex justify-between items-center mt-4">
              <span>Volunteer</span>
              <span className="font-medium">5 events</span>
            </div>
            <div className="w-full bg-muted rounded-full h-2">
              <div className="bg-primary rounded-full h-2" style={{ width: "13%" }}></div>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
          <div className="space-y-3">
            <button className="w-full py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90">
              Create New Event
            </button>
            <button className="w-full py-2 bg-muted hover:bg-muted/80 rounded-md">Send Event Reminders</button>
            <button className="w-full py-2 bg-muted hover:bg-muted/80 rounded-md">Generate Event Reports</button>
            <button className="w-full py-2 bg-muted hover:bg-muted/80 rounded-md">Manage Event Calendar</button>
          </div>
        </Card>
      </div>
    </AdminLayout>
  )
}

