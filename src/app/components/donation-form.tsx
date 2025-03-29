"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { RadioGroup, RadioGroupItem } from "./ui/radio-group"
import { Checkbox } from "./ui/checkbox"
import { toast } from "../hooks/use-toast"
import { Loader2, CreditCard, Calendar, Lock } from "lucide-react"

interface DonationFormProps {
  type: "one-time" | "monthly"
}

export function DonationForm({ type }: DonationFormProps) {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [amount, setAmount] = useState<string>("50")
  const [customAmount, setCustomAmount] = useState<string>("")
  const [paymentInfo, setPaymentInfo] = useState({
    cardName: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    country: "US",
    saveInfo: false,
    receiveUpdates: true,
  })

  const handleAmountChange = (value: string) => {
    setAmount(value)
    if (value !== "custom") {
      setCustomAmount("")
    }
  }

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9.]/g, "")
    setCustomAmount(value)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setPaymentInfo((prev) => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (name: string, checked: boolean) => {
    setPaymentInfo((prev) => ({ ...prev, [name]: checked }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Validate form
    const donationAmount = amount === "custom" ? customAmount : amount
    if (!donationAmount || Number.parseFloat(donationAmount) <= 0) {
      toast({
        title: "Invalid amount",
        description: "Please enter a valid donation amount.",
        variant: "destructive",
      })
      return
    }

    if (!paymentInfo.cardName || !paymentInfo.cardNumber || !paymentInfo.expiry || !paymentInfo.cvv) {
      toast({
        title: "Missing payment information",
        description: "Please fill in all required payment fields.",
        variant: "destructive",
      })
      return
    }

    setIsSubmitting(true)

    // Simulate payment processing
    try {
      // In a real app, you would integrate with a payment processor like Stripe
      await new Promise((resolve) => setTimeout(resolve, 2000))

      toast({
        title: "Donation successful!",
        description: `Thank you for your ${type} donation of $${amount === "custom" ? customAmount : amount}.`,
      })

      // Redirect to success page
      router.push("/donate/success")
    } catch (error) {
      toast({
        title: "Payment failed",
        description: "There was an issue processing your payment. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <Label>Select Amount</Label>
        <RadioGroup value={amount} onValueChange={handleAmountChange} className="grid grid-cols-3 gap-3">
          <div>
            <RadioGroupItem value="25" id="amount-25" className="sr-only" />
            <Label
              htmlFor="amount-25"
              className="flex h-14 items-center justify-center rounded-md border border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
            >
              $25
            </Label>
          </div>
          <div>
            <RadioGroupItem value="50" id="amount-50" className="sr-only" />
            <Label
              htmlFor="amount-50"
              className="flex h-14 items-center justify-center rounded-md border border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
            >
              $50
            </Label>
          </div>
          <div>
            <RadioGroupItem value="100" id="amount-100" className="sr-only" />
            <Label
              htmlFor="amount-100"
              className="flex h-14 items-center justify-center rounded-md border border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
            >
              $100
            </Label>
          </div>
          <div>
            <RadioGroupItem value="250" id="amount-250" className="sr-only" />
            <Label
              htmlFor="amount-250"
              className="flex h-14 items-center justify-center rounded-md border border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
            >
              $250
            </Label>
          </div>
          <div>
            <RadioGroupItem value="500" id="amount-500" className="sr-only" />
            <Label
              htmlFor="amount-500"
              className="flex h-14 items-center justify-center rounded-md border border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
            >
              $500
            </Label>
          </div>
          <div>
            <RadioGroupItem value="custom" id="amount-custom" className="sr-only" />
            <Label
              htmlFor="amount-custom"
              className="flex h-14 items-center justify-center rounded-md border border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
            >
              Custom
            </Label>
          </div>
        </RadioGroup>

        {amount === "custom" && (
          <div className="mt-3">
            <Label htmlFor="custom-amount">Enter Amount</Label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
              <Input
                id="custom-amount"
                value={customAmount}
                onChange={handleCustomAmountChange}
                className="pl-7"
                placeholder="Enter custom amount"
              />
            </div>
          </div>
        )}
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <Label>Payment Information</Label>
          <div className="flex items-center text-sm text-muted-foreground">
            <Lock className="h-3 w-3 mr-1" />
            Secure Payment
          </div>
        </div>

        <div className="space-y-3">
          <div>
            <Label htmlFor="cardName">Name on Card</Label>
            <Input
              id="cardName"
              name="cardName"
              placeholder="John Doe"
              value={paymentInfo.cardName}
              onChange={handleInputChange}
              required
            />
          </div>

          <div>
            <Label htmlFor="cardNumber">Card Number</Label>
            <div className="relative">
              <CreditCard className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                id="cardNumber"
                name="cardNumber"
                placeholder="1234 5678 9012 3456"
                className="pl-10"
                value={paymentInfo.cardNumber}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="expiry">Expiry Date</Label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  id="expiry"
                  name="expiry"
                  placeholder="MM/YY"
                  className="pl-10"
                  value={paymentInfo.expiry}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            <div>
              <Label htmlFor="cvv">CVV</Label>
              <Input
                id="cvv"
                name="cvv"
                placeholder="123"
                value={paymentInfo.cvv}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <Label>Billing Address</Label>
        <div className="space-y-3">
          <div>
            <Label htmlFor="address">Street Address</Label>
            <Input
              id="address"
              name="address"
              placeholder="123 Main St"
              value={paymentInfo.address}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="city">City</Label>
              <Input
                id="city"
                name="city"
                placeholder="New York"
                value={paymentInfo.city}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <Label htmlFor="state">State</Label>
              <Input
                id="state"
                name="state"
                placeholder="NY"
                value={paymentInfo.state}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="zip">ZIP Code</Label>
              <Input
                id="zip"
                name="zip"
                placeholder="10001"
                value={paymentInfo.zip}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <Label htmlFor="country">Country</Label>
              <Input
                id="country"
                name="country"
                placeholder="United States"
                value={paymentInfo.country}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <div className="flex items-center space-x-2">
          <Checkbox
            id="saveInfo"
            checked={paymentInfo.saveInfo}
            onCheckedChange={(checked) => handleCheckboxChange("saveInfo", checked as boolean)}
          />
          <label
            htmlFor="saveInfo"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Save my payment information for future donations
          </label>
        </div>

        <div className="flex items-center space-x-2">
          <Checkbox
            id="receiveUpdates"
            checked={paymentInfo.receiveUpdates}
            onCheckedChange={(checked) => handleCheckboxChange("receiveUpdates", checked as boolean)}
          />
          <label
            htmlFor="receiveUpdates"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            I'd like to receive updates about how my donation is making an impact
          </label>
        </div>
      </div>

      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Processing...
          </>
        ) : (
          `${type === "monthly" ? "Start Monthly Donation" : "Donate"} ${amount === "custom" ? `$${customAmount}` : `$${amount}`}`
        )}
      </Button>

      <p className="text-xs text-center text-muted-foreground">
        By proceeding, you agree to our{" "}
        <a href="/terms-of-service" className="underline">
          Terms of Service
        </a>{" "}
        and{" "}
        <a href="/privacy-policy" className="underline">
          Privacy Policy
        </a>
        .
      </p>
    </form>
  )
}

