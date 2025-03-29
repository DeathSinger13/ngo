"use client"

import Link from "next/link"
import { PageHeader } from "../../components/page-header"
import { Button } from "../../components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card"
import { Input } from "../../components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../../components/ui/table"
import { Plus, Search, Edit, Trash2, MoreHorizontal, FileText, Users, Calendar } from "lucide-react"
import { DecorativeCurl } from "../../components/decorative-curl"
import { BlobBackground } from "../../components/blob-background"
import { AdminLayout } from "../../components/admin-layout"

export default function ProjectsPage() {
  return (
    <AdminLayout>
      <BlobBackground blobCount={3} className="opacity-30" />
      <DecorativeCurl position="top-right" color="tertiary" size="sm" />

      <div className="container mx-auto px-0 sm:px-4">
        <PageHeader
          title="Manage Projects"
          description="Create, edit, and manage your organization's projects."
          action={
            <Button asChild className="colored-button colored-button-primary">
              <Link href="/admin/projects/new">
                <Plus className="mr-2 h-4 w-4" /> <span className="hidden sm:inline">Add Project</span>
              </Link>
            </Button>
          }
          gradient
        />

        <Card className="mb-6 card-hover">
          <CardHeader>
            <CardTitle>Project Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
              <div className="flex items-center gap-4">
                <div className="colored-icon colored-icon-primary">
                  <FileText className="h-5 w-5 md:h-6 md:w-6" />
                </div>
                <div>
                  <div className="text-xl md:text-2xl font-bold">12</div>
                  <div className="text-xs md:text-sm text-muted-foreground">Total Projects</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="colored-icon colored-icon-secondary">
                  <Users className="h-5 w-5 md:h-6 md:w-6" />
                </div>
                <div>
                  <div className="text-xl md:text-2xl font-bold">45</div>
                  <div className="text-xs md:text-sm text-muted-foreground">Team Members</div>
                </div>
              </div>
              <div className="flex items-center gap-4 sm:col-span-2 md:col-span-1">
                <div className="colored-icon colored-icon-tertiary">
                  <Calendar className="h-5 w-5 md:h-6 md:w-6" />
                </div>
                <div>
                  <div className="text-xl md:text-2xl font-bold">7</div>
                  <div className="text-xs md:text-sm text-muted-foreground">Active Projects</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="card-hover">
          <CardHeader className="flex flex-col sm:flex-row sm:items-center gap-4">
            <CardTitle>All Projects</CardTitle>
            <div className="w-full sm:w-auto sm:ml-auto">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search projects..."
                  className="w-full pl-8 sm:w-[200px] md:w-[300px]"
                />
              </div>
            </div>
          </CardHeader>
          <CardContent className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead className="hidden md:table-cell">Location</TableHead>
                  <TableHead className="hidden sm:table-cell">Start Date</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="hidden lg:table-cell">Budget</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                  <TableRow key={i}>
                    <TableCell className="font-medium">
                      <Link href={`/admin/projects/${i}`} className="hover:underline">
                        Clean Water Initiative {i}
                      </Link>
                    </TableCell>
                    <TableCell className="hidden md:table-cell">
                      {["Kenya", "India", "Brazil", "Thailand", "Mexico", "Ghana", "Vietnam", "Peru"][i - 1]}
                    </TableCell>
                    <TableCell className="hidden sm:table-cell">
                      {new Date(Date.now() - i * 30 * 86400000).toLocaleDateString()}
                    </TableCell>
                    <TableCell>
                      <span
                        className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${i % 4 === 0
                          ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                          : i % 4 === 1
                            ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
                            : i % 4 === 2
                              ? "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300"
                              : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
                          }`}
                      >
                        {i % 4 === 0 ? "Active" : i % 4 === 1 ? "Planning" : i % 4 === 2 ? "Final Phase" : "On Hold"}
                      </span>
                    </TableCell>
                    <TableCell className="hidden lg:table-cell">
                      ${(Math.floor(Math.random() * 50) + 10) * 1000}
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Button variant="ghost" size="icon" asChild>
                          <Link href={`/admin/projects/${i}/edit`}>
                            <Edit className="h-4 w-4" />
                            <span className="sr-only">Edit</span>
                          </Link>
                        </Button>
                        <Button variant="ghost" size="icon">
                          <Trash2 className="h-4 w-4" />
                          <span className="sr-only">Delete</span>
                        </Button>
                        <Button variant="ghost" size="icon" className="hidden sm:flex">
                          <MoreHorizontal className="h-4 w-4" />
                          <span className="sr-only">More</span>
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  )
}

