"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useCart } from "@/hooks/use-cart"
import { Loader2, CheckCircle } from "lucide-react"

interface FormData {
  fullName: string
  email: string
  phone: string
  address: string
  city: string
  zipCode: string
  country: string
}

export function CheckoutForm() {
  const { items, totalPrice, clearCart } = useCart()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    zipCode: "",
    country: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (items.length === 0) {
      alert("Your cart is empty!")
      return
    }

    // Validate form
    if (!formData.fullName || !formData.email || !formData.phone || !formData.address || !formData.city || !formData.zipCode || !formData.country) {
      alert("Please fill in all required fields")
      return
    }

    setIsSubmitting(true)

    try {
      // Prepare order data
      const orderData = {
        customer: formData,
        items: items,
        totalPrice: totalPrice,
        totalWithTax: totalPrice * 1.08,
        orderDate: new Date().toISOString(),
      }

      console.log("[v0] Submitting order:", orderData)

      // Send email via API route
      const response = await fetch("/api/send-order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderData),
      })

      const data = await response.json()

      if (response.ok) {
        setIsSuccess(true)
        clearCart()
        // Reset form
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          address: "",
          city: "",
          zipCode: "",
          country: "",
        })
      } else {
        throw new Error(data.message || "Failed to submit order")
      }
    } catch (error) {
      console.error("[v0] Order submission error:", error)
      alert("There was an error submitting your order. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSuccess) {
    return (
      <Card>
        <CardContent className="p-8 text-center">
          <div className="space-y-4">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-serif font-semibold text-xl">Order Submitted!</h3>
            <p className="text-muted-foreground">
              Thank you for your order. We'll send you a confirmation email shortly.
            </p>
            <Button asChild>
              <a href="/products">Continue Shopping</a>
            </Button>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-serif text-xl">Checkout Details</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="fullName">Full Name *</Label>
            <Input
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              required
              placeholder="Enter your full name"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email Address *</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              placeholder="Enter your email"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number *</Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleInputChange}
              required
              placeholder="Enter your phone number"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="address">Delivery Address *</Label>
            <Textarea
              id="address"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              required
              placeholder="Enter your full address"
              rows={3}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="city">City *</Label>
              <Input
                id="city"
                name="city"
                value={formData.city}
                onChange={handleInputChange}
                required
                placeholder="City"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="zipCode">ZIP Code *</Label>
              <Input
                id="zipCode"
                name="zipCode"
                value={formData.zipCode}
                onChange={handleInputChange}
                required
                placeholder="ZIP Code"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="country">Country *</Label>
            <Input
              id="country"
              name="country"
              value={formData.country}
              onChange={handleInputChange}
              required
              placeholder="Country"
            />
          </div>

          <div className="pt-4 border-t border-border">
            <div className="space-y-2 mb-4">
              <div className="flex justify-between text-sm">
                <span>Subtotal:</span>
                <span>₦{totalPrice.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Tax:</span>
                <span>₦{Math.round(totalPrice * 0.08).toLocaleString()}</span>
              </div>
              <div className="flex justify-between font-semibold">
                <span>Total:</span>
                <span>₦{Math.round(totalPrice * 1.08).toLocaleString()}</span>
              </div>
            </div>

            <Button type="submit" disabled={isSubmitting || items.length === 0} className="w-full">
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Processing Order...
                </>
              ) : (
                "Complete Order"
              )}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
