import React from "react";
import { Card } from "../../components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs"
import { BlobBackground } from "../../components/blob-background"
import { PageHeader } from "../../components/page-header"
import { AdminLayout } from "../../components/admin-layout"

export default function AdminDonationsPage() {
  return (
    <AdminLayout>
      <BlobBackground className="opacity-10" />
      <PageHeader title="Donation Management" description="Track, manage, and process all donations" />

      <Tabs defaultValue="all" className="w-full mt-8">
        <TabsList className="grid w-full md:w-auto grid-cols-4 md:grid-cols-5 mb-8">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="recent">Recent</TabsTrigger>
          <TabsTrigger value="recurring">Recurring</TabsTrigger>
          <TabsTrigger value="pending">Pending</TabsTrigger>
          <TabsTrigger value="completed" className="hidden md:block">
            Completed
          </TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-4">
          <Card className="p-6">
            <h3 className="text-xl font-bold mb-4">All Donations</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-2">ID</th>
                    <th className="text-left py-3 px-2">Donor</th>
                    <th className="text-left py-3 px-2">Amount</th>
                    <th className="text-left py-3 px-2">Project</th>
                    <th className="text-left py-3 px-2">Date</th>
                    <th className="text-left py-3 px-2">Status</th>
                    <th className="text-left py-3 px-2">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {[...Array(10)].map((_, i) => (
                    <tr key={i} className="border-b hover:bg-muted/50">
                      <td className="py-3 px-2">DON-{1000 + i}</td>
                      <td className="py-3 px-2">John Doe</td>
                      <td className="py-3 px-2">${Math.floor(Math.random() * 900) + 100}</td>
                      <td className="py-3 px-2">Clean Water Initiative</td>
                      <td className="py-3 px-2">
                        2023-{Math.floor(Math.random() * 12) + 1}-{Math.floor(Math.random() * 28) + 1}
                      </td>
                      <td className="py-3 px-2">
                        <span
                          className={`px-2 py-1 rounded-full text-xs ${i % 3 === 0
                            ? "bg-yellow-100 text-yellow-800"
                            : i % 3 === 1
                              ? "bg-green-100 text-green-800"
                              : "bg-blue-100 text-blue-800"
                            }`}
                        >
                          {i % 3 === 0 ? "Pending" : i % 3 === 1 ? "Completed" : "Recurring"}
                        </span>
                      </td>
                      <td className="py-3 px-2">
                        <button className="text-primary hover:text-primary/80 mr-2">View</button>
                        <button className="text-primary hover:text-primary/80">Process</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="recent" className="space-y-4">
          <Card className="p-6">
            <h3 className="text-xl font-bold mb-4">Recent Donations</h3>
            <div className="grid gap-4 md:grid-cols-2">
              {[...Array(6)].map((_, i) => (
                <Card key={i} className="p-4 border">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-semibold">John Doe</h4>
                      <p className="text-sm text-muted-foreground">DON-{1000 + i}</p>
                      <p className="mt-2">${Math.floor(Math.random() * 900) + 100}</p>
                      <p className="text-sm text-muted-foreground">Clean Water Initiative</p>
                    </div>
                    <span
                      className={`px-2 py-1 rounded-full text-xs ${i % 2 === 0 ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
                        }`}
                    >
                      {i % 2 === 0 ? "Completed" : "Pending"}
                    </span>
                  </div>
                  <div className="mt-4 flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">
                      2023-{Math.floor(Math.random() * 12) + 1}-{Math.floor(Math.random() * 28) + 1}
                    </span>
                    <div>
                      <button className="text-primary hover:text-primary/80 text-sm mr-2">View</button>
                      <button className="text-primary hover:text-primary/80 text-sm">Process</button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="recurring" className="space-y-4">
          <Card className="p-6">
            <h3 className="text-xl font-bold mb-4">Recurring Donations</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-2">Donor</th>
                    <th className="text-left py-3 px-2">Amount</th>
                    <th className="text-left py-3 px-2">Frequency</th>
                    <th className="text-left py-3 px-2">Next Date</th>
                    <th className="text-left py-3 px-2">Total Donated</th>
                    <th className="text-left py-3 px-2">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {[...Array(8)].map((_, i) => (
                    <tr key={i} className="border-b hover:bg-muted/50">
                      <td className="py-3 px-2">Jane Smith</td>
                      <td className="py-3 px-2">${Math.floor(Math.random() * 50) + 20}/mo</td>
                      <td className="py-3 px-2">{i % 2 === 0 ? "Monthly" : "Quarterly"}</td>
                      <td className="py-3 px-2">
                        2023-{Math.floor(Math.random() * 12) + 1}-{Math.floor(Math.random() * 28) + 1}
                      </td>
                      <td className="py-3 px-2">${Math.floor(Math.random() * 900) + 100}</td>
                      <td className="py-3 px-2">
                        <button className="text-primary hover:text-primary/80 mr-2">View</button>
                        <button className="text-primary hover:text-primary/80">Edit</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="pending" className="space-y-4">
          <Card className="p-6">
            <h3 className="text-xl font-bold mb-4">Pending Donations</h3>
            <div className="grid gap-4">
              {[...Array(5)].map((_, i) => (
                <Card key={i} className="p-4 border">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                    <div>
                      <h4 className="font-semibold">Robert Johnson</h4>
                      <p className="text-sm text-muted-foreground">DON-{1020 + i}</p>
                      <p className="mt-1">${Math.floor(Math.random() * 900) + 100}</p>
                    </div>
                    <div className="mt-2 md:mt-0 md:text-right">
                      <p className="text-sm">Reforestation Project</p>
                      <p className="text-sm text-muted-foreground">
                        2023-{Math.floor(Math.random() * 12) + 1}-{Math.floor(Math.random() * 28) + 1}
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 flex justify-end gap-2">
                    <button className="px-3 py-1 bg-primary text-primary-foreground rounded-md text-sm hover:bg-primary/90">
                      Process
                    </button>
                    <button className="px-3 py-1 bg-muted hover:bg-muted/80 rounded-md text-sm">Contact</button>
                  </div>
                </Card>
              ))}
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="completed" className="space-y-4">
          <Card className="p-6">
            <h3 className="text-xl font-bold mb-4">Completed Donations</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-2">ID</th>
                    <th className="text-left py-3 px-2">Donor</th>
                    <th className="text-left py-3 px-2">Amount</th>
                    <th className="text-left py-3 px-2">Project</th>
                    <th className="text-left py-3 px-2">Date</th>
                    <th className="text-left py-3 px-2">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {[...Array(10)].map((_, i) => (
                    <tr key={i} className="border-b hover:bg-muted/50">
                      <td className="py-3 px-2">DON-{900 + i}</td>
                      <td className="py-3 px-2">Sarah Williams</td>
                      <td className="py-3 px-2">${Math.floor(Math.random() * 900) + 100}</td>
                      <td className="py-3 px-2">Education Fund</td>
                      <td className="py-3 px-2">
                        2023-{Math.floor(Math.random() * 12) + 1}-{Math.floor(Math.random() * 28) + 1}
                      </td>
                      <td className="py-3 px-2">
                        <button className="text-primary hover:text-primary/80 mr-2">View</button>
                        <button className="text-primary hover:text-primary/80">Receipt</button>
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
          <h3 className="text-lg font-semibold mb-4">Donation Summary</h3>
          <div className="space-y-4">
            <div className="flex justify-between">
              <span>Total Donations</span>
              <span className="font-medium">$24,567</span>
            </div>
            <div className="flex justify-between">
              <span>This Month</span>
              <span className="font-medium">$3,842</span>
            </div>
            <div className="flex justify-between">
              <span>Recurring Monthly</span>
              <span className="font-medium">$1,250</span>
            </div>
            <div className="flex justify-between">
              <span>Average Donation</span>
              <span className="font-medium">$78</span>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Top Projects</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span>Clean Water Initiative</span>
              <span className="font-medium">$8,245</span>
            </div>
            <div className="w-full bg-muted rounded-full h-2">
              <div className="bg-primary rounded-full h-2" style={{ width: "65%" }}></div>
            </div>

            <div className="flex justify-between items-center mt-4">
              <span>Education Fund</span>
              <span className="font-medium">$6,120</span>
            </div>
            <div className="w-full bg-muted rounded-full h-2">
              <div className="bg-primary rounded-full h-2" style={{ width: "48%" }}></div>
            </div>

            <div className="flex justify-between items-center mt-4">
              <span>Reforestation Project</span>
              <span className="font-medium">$5,890</span>
            </div>
            <div className="w-full bg-muted rounded-full h-2">
              <div className="bg-primary rounded-full h-2" style={{ width: "42%" }}></div>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
          <div className="space-y-3">
            <button className="w-full py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90">
              Export Reports
            </button>
            <button className="w-full py-2 bg-muted hover:bg-muted/80 rounded-md">Send Thank You Emails</button>
            <button className="w-full py-2 bg-muted hover:bg-muted/80 rounded-md">Generate Tax Receipts</button>
            <button className="w-full py-2 bg-muted hover:bg-muted/80 rounded-md">Update Donation Page</button>
          </div>
        </Card>
      </div>
    </AdminLayout>
  )
}

