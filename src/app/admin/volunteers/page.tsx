import { Card } from "../../components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs"
import { BlobBackground } from "../../components/blob-background"
import { PageHeader } from "../../components/page-header"
import { AdminLayout } from "../../components/admin-layout"

export default function AdminVolunteersPage() {
  return (
    <AdminLayout>
      <BlobBackground className="opacity-10" />
      <PageHeader title="Volunteer Management" description="Organize, track, and manage volunteer activities" />

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mt-8 mb-6">
        <div className="flex gap-2">
          <button className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90">
            Add Volunteer
          </button>
          <button className="px-4 py-2 bg-muted hover:bg-muted/80 rounded-md">Import Volunteers</button>
        </div>

        <div className="flex gap-2">
          <select className="px-3 py-2 bg-background border rounded-md">
            <option>All Skills</option>
            <option>Teaching</option>
            <option>Medical</option>
            <option>Construction</option>
            <option>Administration</option>
          </select>
          <select className="px-3 py-2 bg-background border rounded-md">
            <option>All Availability</option>
            <option>Weekdays</option>
            <option>Weekends</option>
            <option>Evenings</option>
          </select>
        </div>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="grid w-full md:w-auto grid-cols-4 mb-8">
          <TabsTrigger value="all">All Volunteers</TabsTrigger>
          <TabsTrigger value="active">Active</TabsTrigger>
          <TabsTrigger value="pending">Pending</TabsTrigger>
          <TabsTrigger value="inactive">Inactive</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-4">
          <Card className="p-6">
            <h3 className="text-xl font-bold mb-4">All Volunteers</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-2">Name</th>
                    <th className="text-left py-3 px-2">Email</th>
                    <th className="text-left py-3 px-2">Skills</th>
                    <th className="text-left py-3 px-2">Availability</th>
                    <th className="text-left py-3 px-2">Hours</th>
                    <th className="text-left py-3 px-2">Status</th>
                    <th className="text-left py-3 px-2">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {[...Array(10)].map((_, i) => (
                    <tr key={i} className="border-b hover:bg-muted/50">
                      <td className="py-3 px-2 font-medium">
                        {i % 3 === 0 ? "John Smith" : i % 3 === 1 ? "Maria Garcia" : "David Chen"}
                      </td>
                      <td className="py-3 px-2">volunteer{i + 1}@example.com</td>
                      <td className="py-3 px-2">
                        {i % 4 === 0
                          ? "Teaching, Mentoring"
                          : i % 4 === 1
                            ? "Medical, First Aid"
                            : i % 4 === 2
                              ? "Construction, Carpentry"
                              : "Administration, IT"}
                      </td>
                      <td className="py-3 px-2">
                        {i % 3 === 0 ? "Weekends" : i % 3 === 1 ? "Weekday Evenings" : "Flexible"}
                      </td>
                      <td className="py-3 px-2">{Math.floor(Math.random() * 100) + 5}</td>
                      <td className="py-3 px-2">
                        <span
                          className={`px-2 py-1 rounded-full text-xs ${i % 3 === 0
                            ? "bg-green-100 text-green-800"
                            : i % 3 === 1
                              ? "bg-yellow-100 text-yellow-800"
                              : "bg-gray-100 text-gray-800"
                            }`}
                        >
                          {i % 3 === 0 ? "Active" : i % 3 === 1 ? "Pending" : "Inactive"}
                        </span>
                      </td>
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

        <TabsContent value="active" className="space-y-4">
          <Card className="p-6">
            <h3 className="text-xl font-bold mb-4">Active Volunteers</h3>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {[...Array(6)].map((_, i) => (
                <Card key={i} className="p-4 border">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-semibold">
                        {i % 3 === 0 ? "John Smith" : i % 3 === 1 ? "Maria Garcia" : "David Chen"}
                      </h4>
                      <p className="text-sm text-muted-foreground">volunteer{i + 1}@example.com</p>
                    </div>
                    <span className="px-2 py-1 rounded-full text-xs bg-green-100 text-green-800">Active</span>
                  </div>
                  <div className="mt-3">
                    <p className="text-sm">
                      <span className="font-medium">Skills:</span>{" "}
                      {i % 3 === 0
                        ? "Teaching, Mentoring"
                        : i % 3 === 1
                          ? "Medical, First Aid"
                          : "Construction, Carpentry"}
                    </p>
                    <p className="text-sm">
                      <span className="font-medium">Availability:</span> {i % 2 === 0 ? "Weekends" : "Weekday Evenings"}
                    </p>
                    <p className="text-sm">
                      <span className="font-medium">Hours Contributed:</span> {Math.floor(Math.random() * 100) + 20}
                    </p>
                    <p className="text-sm">
                      <span className="font-medium">Current Project:</span>{" "}
                      {i % 3 === 0 ? "Community Garden" : i % 3 === 1 ? "Youth Mentorship" : "Disaster Relief"}
                    </p>
                  </div>
                  <div className="mt-4 flex justify-end gap-2">
                    <button className="px-3 py-1 bg-primary text-primary-foreground rounded-md text-sm hover:bg-primary/90">
                      Assign
                    </button>
                    <button className="px-3 py-1 bg-muted hover:bg-muted/80 rounded-md text-sm">Profile</button>
                  </div>
                </Card>
              ))}
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="pending" className="space-y-4">
          <Card className="p-6">
            <h3 className="text-xl font-bold mb-4">Pending Volunteers</h3>
            <div className="grid gap-4">
              {[...Array(4)].map((_, i) => (
                <Card key={i} className="p-4 border">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                    <div>
                      <h4 className="font-semibold">{i % 2 === 0 ? "Sarah Johnson" : "Michael Lee"}</h4>
                      <p className="text-sm text-muted-foreground">pending{i + 1}@example.com</p>
                      <p className="text-sm mt-1">
                        <span className="font-medium">Applied:</span> 2023-{Math.floor(Math.random() * 12) + 1}-
                        {Math.floor(Math.random() * 28) + 1}
                      </p>
                    </div>
                    <div className="mt-3 md:mt-0">
                      <p className="text-sm">
                        <span className="font-medium">Skills:</span>{" "}
                        {i % 2 === 0 ? "Education, Counseling" : "IT, Photography"}
                      </p>
                      <p className="text-sm">
                        <span className="font-medium">Availability:</span> {i % 2 === 0 ? "Weekends" : "Flexible"}
                      </p>
                      <p className="text-sm">
                        <span className="font-medium">Interests:</span>{" "}
                        {i % 2 === 0 ? "Youth Programs, Education" : "Environmental, Technology"}
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 flex justify-end gap-2">
                    <button className="px-3 py-1 bg-primary text-primary-foreground rounded-md text-sm hover:bg-primary/90">
                      Approve
                    </button>
                    <button className="px-3 py-1 bg-destructive text-destructive-foreground rounded-md text-sm hover:bg-destructive/90">
                      Reject
                    </button>
                    <button className="px-3 py-1 bg-muted hover:bg-muted/80 rounded-md text-sm">
                      View Application
                    </button>
                  </div>
                </Card>
              ))}
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="inactive" className="space-y-4">
          <Card className="p-6">
            <h3 className="text-xl font-bold mb-4">Inactive Volunteers</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-2">Name</th>
                    <th className="text-left py-3 px-2">Email</th>
                    <th className="text-left py-3 px-2">Last Active</th>
                    <th className="text-left py-3 px-2">Total Hours</th>
                    <th className="text-left py-3 px-2">Reason</th>
                    <th className="text-left py-3 px-2">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {[...Array(5)].map((_, i) => (
                    <tr key={i} className="border-b hover:bg-muted/50">
                      <td className="py-3 px-2 font-medium">
                        {i % 3 === 0 ? "Robert Brown" : i % 3 === 1 ? "Jennifer Kim" : "Thomas Wilson"}
                      </td>
                      <td className="py-3 px-2">inactive{i + 1}@example.com</td>
                      <td className="py-3 px-2">
                        2023-{Math.floor(Math.random() * 12) + 1}-{Math.floor(Math.random() * 28) + 1}
                      </td>
                      <td className="py-3 px-2">{Math.floor(Math.random() * 200) + 10}</td>
                      <td className="py-3 px-2">
                        {i % 3 === 0 ? "Moved away" : i % 3 === 1 ? "Time constraints" : "Completed commitment"}
                      </td>
                      <td className="py-3 px-2">
                        <button className="text-primary hover:text-primary/80 mr-2">Reactivate</button>
                        <button className="text-primary hover:text-primary/80">View History</button>
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
          <h3 className="text-lg font-semibold mb-4">Volunteer Statistics</h3>
          <div className="space-y-4">
            <div className="flex justify-between">
              <span>Total Volunteers</span>
              <span className="font-medium">128</span>
            </div>
            <div className="flex justify-between">
              <span>Active Volunteers</span>
              <span className="font-medium">87</span>
            </div>
            <div className="flex justify-between">
              <span>Pending Applications</span>
              <span className="font-medium">12</span>
            </div>
            <div className="flex justify-between">
              <span>Inactive Volunteers</span>
              <span className="font-medium">29</span>
            </div>
            <div className="flex justify-between">
              <span>Total Hours Contributed</span>
              <span className="font-medium">4,567</span>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Skill Distribution</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span>Teaching/Education</span>
              <span className="font-medium">32 volunteers</span>
            </div>
            <div className="w-full bg-muted rounded-full h-2">
              <div className="bg-primary rounded-full h-2" style={{ width: "25%" }}></div>
            </div>

            <div className="flex justify-between items-center mt-4">
              <span>Medical/Healthcare</span>
              <span className="font-medium">18 volunteers</span>
            </div>
            <div className="w-full bg-muted rounded-full h-2">
              <div className="bg-primary rounded-full h-2" style={{ width: "14%" }}></div>
            </div>

            <div className="flex justify-between items-center mt-4">
              <span>Construction/Maintenance</span>
              <span className="font-medium">24 volunteers</span>
            </div>
            <div className="w-full bg-muted rounded-full h-2">
              <div className="bg-primary rounded-full h-2" style={{ width: "19%" }}></div>
            </div>

            <div className="flex justify-between items-center mt-4">
              <span>Administration/IT</span>
              <span className="font-medium">22 volunteers</span>
            </div>
            <div className="w-full bg-muted rounded-full h-2">
              <div className="bg-primary rounded-full h-2" style={{ width: "17%" }}></div>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
          <div className="space-y-3">
            <button className="w-full py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90">
              Schedule Volunteers
            </button>
            <button className="w-full py-2 bg-muted hover:bg-muted/80 rounded-md">Send Appreciation Emails</button>
            <button className="w-full py-2 bg-muted hover:bg-muted/80 rounded-md">Generate Hour Certificates</button>
            <button className="w-full py-2 bg-muted hover:bg-muted/80 rounded-md">Create Training Session</button>
          </div>
        </Card>
      </div>
    </AdminLayout>
  )
}

