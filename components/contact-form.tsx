"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Loader2, CheckCircle } from "lucide-react"

interface OrderFormData {
  name: string
  email: string
  phone: string
  fishType: string
  quantity: string
  deliveryDate: string
  address: string
  message: string
}

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [formData, setFormData] = useState<OrderFormData>({
    name: "",
    email: "",
    phone: "",
    fishType: "",
    quantity: "",
    deliveryDate: "",
    address: "",
    message: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      console.log("Fish order submitted:", formData)
      setIsSuccess(true)

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        fishType: "",
        quantity: "",
        deliveryDate: "",
        address: "",
        message: "",
      })
    } catch (error) {
      console.error("Order form error:", error)
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
            <h3 className="font-serif font-semibold text-xl">Order Received!</h3>
            <p className="text-muted-foreground">
              Thank you for your order. We'll contact you within 2 hours to confirm availability and delivery details.
            </p>
            <Button onClick={() => setIsSuccess(false)}>Place Another Order</Button>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-serif text-xl">Place Your Fish Order</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name *</Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                placeholder="Your name"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Phone *</Label>
              <Input
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
                placeholder="+2349033447991"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="your.email@example.com"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="fishType">Fish Type *</Label>
              <Select onValueChange={(value) => handleSelectChange("fishType", value)} required>
                <SelectTrigger>
                  <SelectValue placeholder="Select fish type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="salmon">Atlantic Salmon</SelectItem>
                  <SelectItem value="seabass">Sea Bass</SelectItem>
                  <SelectItem value="prawns">King Prawns</SelectItem>
                  <SelectItem value="tuna">Tuna Steaks</SelectItem>
                  <SelectItem value="pomfret">Pomfret</SelectItem>
                  <SelectItem value="crab">Mud Crab</SelectItem>
                  <SelectItem value="other">Other (specify in message)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="quantity">Quantity *</Label>
              <Input
                id="quantity"
                name="quantity"
                value={formData.quantity}
                onChange={handleInputChange}
                required
                placeholder="e.g., 2 kg, 5 pieces"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="deliveryDate">Preferred Delivery Date *</Label>
            <Input
              id="deliveryDate"
              name="deliveryDate"
              type="date"
              value={formData.deliveryDate}
              onChange={handleInputChange}
              required
              min={new Date().toISOString().split("T")[0]}
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
              placeholder="Full delivery address with pincode"
              rows={3}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Special Instructions</Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Any special requirements, cleaning instructions, or other requests"
              rows={3}
            />
          </div>

          <Button type="submit" disabled={isSubmitting} className="w-full">
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Submitting Order...
              </>
            ) : (
              "Submit Order Request"
            )}
          </Button>

          <p className="text-sm text-muted-foreground text-center">
            * We'll contact you within 2 hours to confirm availability and provide total cost
          </p>
        </form>
      </CardContent>
    </Card>
  )
}
