"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { toast } from "../hooks/use-toast"
import { Loader2, Mail, CheckCircle } from "lucide-react"
import { cn } from "../lib/utils"

interface NewsletterSubscriptionProps {
  className?: string
  variant?: "default" | "card" | "inline"
  title?: string
  description?: string
}

export function NewsletterSubscription({
  className,
  variant = "default",
  title = "Subscribe to our newsletter",
  description = "Stay updated with our latest news and events. We promise not to spam your inbox.",
}: NewsletterSubscriptionProps) {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!email || !email.includes("@")) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      })
      return
    }

    setIsSubmitting(true)

    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500))

      setIsSuccess(true)
      toast({
        title: "Subscription successful!",
        description: "Thank you for subscribing to our newsletter.",
      })

      // Reset form after 3 seconds
      setTimeout(() => {
        setEmail("")
        setIsSuccess(false)
      }, 3000)
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Failed to subscribe. Please try again later.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  if (variant === "card") {
    return (
      <div className={cn("bg-muted/50 rounded-lg p-6 border", className)}>
        <div className="flex items-center gap-2 mb-2">
          <Mail className="h-5 w-5 text-primary" />
          <h3 className="font-semibold text-lg">{title}</h3>
        </div>
        <p className="text-sm text-muted-foreground mb-4">{description}</p>
        <form onSubmit={handleSubmit} className="space-y-3">
          <Input
            type="email"
            placeholder="Your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isSubmitting || isSuccess}
            required
          />
          <Button type="submit" className="w-full" disabled={isSubmitting || isSuccess}>
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Subscribing...
              </>
            ) : isSuccess ? (
              <>
                <CheckCircle className="mr-2 h-4 w-4" />
                Subscribed!
              </>
            ) : (
              "Subscribe"
            )}
          </Button>
        </form>
      </div>
    )
  }

  if (variant === "inline") {
    return (
      <form onSubmit={handleSubmit} className={cn("flex gap-2", className)}>
        <Input
          type="email"
          placeholder="Your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isSubmitting || isSuccess}
          required
          className="max-w-[240px]"
        />
        <Button type="submit" disabled={isSubmitting || isSuccess}>
          {isSubmitting ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : isSuccess ? (
            <CheckCircle className="h-4 w-4" />
          ) : (
            "Subscribe"
          )}
        </Button>
      </form>
    )
  }

  // Default variant
  return (
    <div className={cn("space-y-4", className)}>
      <div>
        <h3 className="font-semibold text-lg">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
        <Input
          type="email"
          placeholder="Your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isSubmitting || isSuccess}
          required
          className="flex-1"
        />
        <Button type="submit" disabled={isSubmitting || isSuccess}>
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Subscribing...
            </>
          ) : isSuccess ? (
            <>
              <CheckCircle className="mr-2 h-4 w-4" />
              Subscribed!
            </>
          ) : (
            "Subscribe"
          )}
        </Button>
      </form>
    </div>
  )
}

