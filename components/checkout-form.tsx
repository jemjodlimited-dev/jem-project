"use client"

import type React from "react"

import { useState, useEffect } from "react"
import emailjs from "@emailjs/browser"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
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

  // Initialize EmailJS
  useEffect(() => {
    if (process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY) {
      emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY)
    }
  }, [])

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

      // Get email HTML from API route
      const response = await fetch("/api/send-order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderData),
      })

      const data = await response.json()

      if (response.ok) {
        // Send customer confirmation email
        if (data.customerEmailHTML) {
          try {
            await emailjs.send(
              process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
              process.env.NEXT_PUBLIC_EMAILJS_CUSTOMER_TEMPLATE_ID || "",
              {
                to_email: formData.email,
                customer_name: formData.fullName,
                order_html: data.customerEmailHTML,
              }
            )
          } catch (emailError) {
            // Email sending failed but order was still submitted
          }
        }

        // Send admin notification email
        if (data.adminEmailHTML) {
          try {
            await emailjs.send(
              process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
              process.env.NEXT_PUBLIC_EMAILJS_ADMIN_TEMPLATE_ID || "",
              {
                to_email: process.env.NEXT_PUBLIC_ADMIN_EMAIL || "",
                customer_name: formData.fullName,
                order_html: data.adminEmailHTML,
              }
            )
          } catch (emailError) {
            // Email sending failed but order was still submitted
          }
        }

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
      alert("There was an error submitting your order. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <Dialog open={isSuccess} onOpenChange={() => {
        if (!isSuccess) setIsSuccess(false)
      }}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
            </div>
            <DialogTitle className="text-center font-serif text-2xl">Order Submitted Successfully!</DialogTitle>
            <DialogDescription className="text-center pt-2">
              Thank you for your order. A confirmation email has been sent to <strong>{formData.email || 'your email'}</strong>. We'll process your order shortly.
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col gap-3 mt-6">
            <Button onClick={() => {
              setIsSuccess(false)
              window.location.href = "/products"
            }} className="w-full">
              Continue Shopping
            </Button>
            <Button onClick={() => {
              setIsSuccess(false)
              window.location.href = "/"
            }} variant="outline" className="w-full">
              Back to Home
            </Button>
          </div>
        </DialogContent>
      </Dialog>

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
    </>
  )
}
