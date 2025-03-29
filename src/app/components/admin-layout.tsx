"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { Badge } from "./ui/badge"
import {
    Settings,
    LogOut,
    LayoutDashboard,
    Heart,
    Calendar,
    FolderOpen,
    Menu,
    X,
    Search,
    Users,
    FileText,
    MessageSquare,
    HelpCircle,
    ChevronRight,
} from "lucide-react"
import { Card, CardContent } from "./ui/card"
import { BackToTop } from "./back-to-top"

interface AdminLayoutProps {
    children: React.ReactNode
}

export function AdminLayout({ children }: AdminLayoutProps) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [mounted, setMounted] = useState(false)
    const pathname = usePathname()

    // Ensure hydration completes before rendering to prevent layout shifts
    useEffect(() => {
        setMounted(true)
    }, [])

    const navItems = [
        { name: "Dashboard", href: "/admin", icon: LayoutDashboard, active: pathname === "/admin" },
        { name: "Donations", href: "/admin/donations", icon: Heart, active: pathname === "/admin/donations" },
        { name: "Events", href: "/admin/events", icon: Calendar, active: pathname === "/admin/events" },
        { name: "Projects", href: "/admin/projects", icon: FolderOpen, active: pathname === "/admin/projects" },
        { name: "Volunteers", href: "/admin/volunteers", icon: Users, active: pathname === "/admin/volunteers" },
        { name: "Reports", href: "/admin/reports", icon: FileText, active: pathname === "/admin/reports" },
        { name: "Messages", href: "/admin/messages", icon: MessageSquare, active: pathname === "/admin/messages" },
        { name: "Settings", href: "/admin/settings", icon: Settings, active: pathname === "/admin/settings" },
    ]

    if (!mounted) {
        return <div className="min-h-screen bg-muted/30">{children}</div>
    }

    return (
        <div className="flex min-h-screen bg-muted/30">
            {/* Mobile menu button */}
            <div className="fixed top-4 left-4 z-40 md:hidden">
                <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full bg-background/80 backdrop-blur-sm"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    <Menu className="h-5 w-5" />
                </Button>
            </div>

            {/* Mobile sidebar */}
            {mobileMenuOpen && (
                <div className="fixed inset-0 z-30 bg-background/95 backdrop-blur-sm md:hidden">
                    <div className="flex flex-col h-full p-6">
                        <div className="flex justify-between items-center mb-8">
                            <Link href="/" className="flex items-center gap-2">
                                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                                    <Heart className="h-4 w-4" />
                                </div>
                                <span className="font-bold text-xl">HopeWorks</span>
                            </Link>
                            <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(false)}>
                                <X className="h-5 w-5" />
                            </Button>
                        </div>

                        <nav className="flex-1">
                            <ul className="space-y-4">
                                {navItems.map((item) => (
                                    <li key={item.name}>
                                        <Link
                                            href={item.href}
                                            className={`flex items-center gap-3 px-4 py-3 rounded-lg ${item.active
                                                ? "bg-primary/10 text-primary font-medium"
                                                : "text-muted-foreground hover:bg-muted hover:text-foreground"
                                                } transition-colors`}
                                            onClick={() => setMobileMenuOpen(false)}
                                        >
                                            <item.icon className="h-5 w-5" />
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>

                        <div className="pt-6 border-t">
                            <Link
                                href="/"
                                className="flex items-center gap-3 px-4 py-3 rounded-lg text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                <LogOut className="h-5 w-5" />
                                Exit Admin
                            </Link>
                        </div>
                    </div>
                </div>
            )}

            {/* Desktop sidebar */}
            <aside className="hidden md:flex w-64 flex-col bg-background border-r fixed h-full">
                <div className="p-6 border-b">
                    <Link href="/" className="flex items-center gap-2">
                        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground">
                            <Heart className="h-3 w-3" />
                        </div>
                        <span className="text-xl font-bold">HopeWorks</span>
                    </Link>
                </div>

                <div className="p-4">
                    <div className="flex items-center gap-3 mb-6">
                        <Avatar>
                            <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Admin User" />
                            <AvatarFallback>AU</AvatarFallback>
                        </Avatar>
                        <div>
                            <p className="font-medium text-sm">Admin User</p>
                            <p className="text-xs text-muted-foreground">Administrator</p>
                        </div>
                    </div>

                    <div className="relative mb-6">
                        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                        <Input type="search" placeholder="Search..." className="pl-8 bg-muted/50" />
                    </div>
                </div>

                <nav className="flex-1 p-4 overflow-y-auto">
                    <div className="text-xs font-semibold text-muted-foreground mb-2 pl-3">MAIN MENU</div>
                    <ul className="space-y-1">
                        {navItems.slice(0, 4).map((item) => (
                            <li key={item.name}>
                                <Link
                                    href={item.href}
                                    className={`flex items-center justify-between px-3 py-2 rounded-md ${item.active
                                        ? "bg-primary/10 text-primary font-medium"
                                        : "text-muted-foreground hover:bg-muted hover:text-foreground"
                                        } transition-colors`}
                                >
                                    <div className="flex items-center gap-3">
                                        <item.icon className="h-5 w-5" />
                                        {item.name}
                                    </div>
                                    {item.active && <ChevronRight className="h-4 w-4" />}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <div className="text-xs font-semibold text-muted-foreground mt-6 mb-2 pl-3">MANAGEMENT</div>
                    <ul className="space-y-1">
                        {navItems.slice(4, 7).map((item) => (
                            <li key={item.name}>
                                <Link
                                    href={item.href}
                                    className={`flex items-center justify-between px-3 py-2 rounded-md ${item.active
                                        ? "bg-primary/10 text-primary font-medium"
                                        : "text-muted-foreground hover:bg-muted hover:text-foreground"
                                        } transition-colors`}
                                >
                                    <div className="flex items-center gap-3">
                                        <item.icon className="h-5 w-5" />
                                        {item.name}
                                    </div>
                                    {item.name === "Messages" && <Badge className="bg-primary text-xs">3</Badge>}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <div className="text-xs font-semibold text-muted-foreground mt-6 mb-2 pl-3">SETTINGS</div>
                    <ul className="space-y-1">
                        {navItems.slice(7).map((item) => (
                            <li key={item.name}>
                                <Link
                                    href={item.href}
                                    className={`flex items-center gap-3 px-3 py-2 rounded-md ${item.active
                                        ? "bg-primary/10 text-primary font-medium"
                                        : "text-muted-foreground hover:bg-muted hover:text-foreground"
                                        } transition-colors`}
                                >
                                    <item.icon className="h-5 w-5" />
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="p-4 border-t mt-auto">
                    <Card className="bg-primary/5 border-primary/20">
                        <CardContent className="p-4">
                            <div className="flex items-center gap-3 mb-2">
                                <HelpCircle className="h-5 w-5 text-primary" />
                                <h4 className="font-medium text-sm">Need Help?</h4>
                            </div>
                            <p className="text-xs text-muted-foreground mb-3">
                                Check our documentation or contact support for assistance.
                            </p>
                            <Button variant="outline" size="sm" className="w-full text-xs">
                                View Documentation
                            </Button>
                        </CardContent>
                    </Card>

                    <Link
                        href="/"
                        className="flex items-center gap-3 px-3 py-3 mt-4 rounded-md text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
                    >
                        <LogOut className="h-5 w-5" />
                        Exit Admin
                    </Link>
                </div>
            </aside>

            {/* Main content */}
            <main className="flex-1 p-4 md:p-6 md:ml-64 pt-16 md:pt-6">
                <div className="max-w-6xl mx-auto">{children}</div>
            </main>

            <BackToTop />
        </div>
    )
}

