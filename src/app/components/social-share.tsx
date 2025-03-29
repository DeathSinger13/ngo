"use client"

import { Button } from "./ui/button"
import { Facebook, Twitter, Linkedin, Mail, LinkIcon } from "lucide-react"
import { toast } from "../hooks/use-toast"
import { cn } from "../lib/utils"

interface SocialShareProps {
  url: string
  title: string
  description?: string
  className?: string
  variant?: "default" | "minimal" | "buttons"
}

export function SocialShare({ url, title, description, className, variant = "default" }: SocialShareProps) {
  // Use the current URL if none provided
  const shareUrl = url ? url : (typeof window !== "undefined" ? window.location.href : "");
  const handleCopyLink = () => {
    navigator.clipboard.writeText(shareUrl)
    toast({
      title: "Link copied!",
      description: "The link has been copied to your clipboard.",
    })
  }

  const openShareWindow = (url: string) => {
    window.open(url, "_blank", "width=600,height=400")
  }

  const shareOnFacebook = () => {
    openShareWindow(
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}&quote=${encodeURIComponent(title)}`,
    )
  }

  const shareOnTwitter = () => {
    openShareWindow(
      `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(title)}`,
    )
  }

  const shareOnLinkedin = () => {
    openShareWindow(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`)
  }

  const shareByEmail = () => {
    window.location.href = `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(description || "")}%0A%0A${encodeURIComponent(shareUrl)}`
  }

  if (variant === "minimal") {
    return (
      <div className={cn("flex items-center gap-2", className)}>
        <Button variant="ghost" size="icon" onClick={shareOnFacebook} title="Share on Facebook">
          <Facebook className="h-4 w-4" />
          <span className="sr-only">Share on Facebook</span>
        </Button>
        <Button variant="ghost" size="icon" onClick={shareOnTwitter} title="Share on Twitter">
          <Twitter className="h-4 w-4" />
          <span className="sr-only">Share on Twitter</span>
        </Button>
        <Button variant="ghost" size="icon" onClick={shareOnLinkedin} title="Share on LinkedIn">
          <Linkedin className="h-4 w-4" />
          <span className="sr-only">Share on LinkedIn</span>
        </Button>
        <Button variant="ghost" size="icon" onClick={shareByEmail} title="Share by Email">
          <Mail className="h-4 w-4" />
          <span className="sr-only">Share by Email</span>
        </Button>
        <Button variant="ghost" size="icon" onClick={handleCopyLink} title="Copy Link">
          <LinkIcon className="h-4 w-4" />
          <span className="sr-only">Copy Link</span>
        </Button>
      </div>
    )
  }

  if (variant === "buttons") {
    return (
      <div className={cn("flex flex-wrap gap-2", className)}>
        <Button variant="outline" size="sm" onClick={shareOnFacebook} className="flex items-center gap-2">
          <Facebook className="h-4 w-4" />
          Facebook
        </Button>
        <Button variant="outline" size="sm" onClick={shareOnTwitter} className="flex items-center gap-2">
          <Twitter className="h-4 w-4" />
          Twitter
        </Button>
        <Button variant="outline" size="sm" onClick={shareOnLinkedin} className="flex items-center gap-2">
          <Linkedin className="h-4 w-4" />
          LinkedIn
        </Button>
        <Button variant="outline" size="sm" onClick={shareByEmail} className="flex items-center gap-2">
          <Mail className="h-4 w-4" />
          Email
        </Button>
        <Button variant="outline" size="sm" onClick={handleCopyLink} className="flex items-center gap-2">
          <LinkIcon className="h-4 w-4" />
          Copy Link
        </Button>
      </div>
    )
  }

  // Default variant
  return (
    <div className={cn("space-y-3", className)}>
      <p className="text-sm font-medium">Share this page</p>
      <div className="flex items-center gap-2">
        <Button variant="outline" size="icon" onClick={shareOnFacebook} className="rounded-full h-9 w-9">
          <Facebook className="h-4 w-4" />
          <span className="sr-only">Share on Facebook</span>
        </Button>
        <Button variant="outline" size="icon" onClick={shareOnTwitter} className="rounded-full h-9 w-9">
          <Twitter className="h-4 w-4" />
          <span className="sr-only">Share on Twitter</span>
        </Button>
        <Button variant="outline" size="icon" onClick={shareOnLinkedin} className="rounded-full h-9 w-9">
          <Linkedin className="h-4 w-4" />
          <span className="sr-only">Share on LinkedIn</span>
        </Button>
        <Button variant="outline" size="icon" onClick={shareByEmail} className="rounded-full h-9 w-9">
          <Mail className="h-4 w-4" />
          <span className="sr-only">Share by Email</span>
        </Button>
        <Button variant="outline" size="icon" onClick={handleCopyLink} className="rounded-full h-9 w-9">
          <LinkIcon className="h-4 w-4" />
          <span className="sr-only">Copy Link</span>
        </Button>
      </div>
    </div>
  )
}

