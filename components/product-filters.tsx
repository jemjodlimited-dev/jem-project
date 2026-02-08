"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"

export function ProductFilters() {
  const [priceRange, setPriceRange] = useState([0, 500])

  const categories = [
    { id: "shoes", label: "Shoes", count: 24 },
    { id: "bags", label: "Bags", count: 18 },
    { id: "clothing", label: "Clothing", count: 32 },
    { id: "accessories", label: "Accessories", count: 15 },
  ]

  const brands = [
    { id: "premium", label: "Premium Collection", count: 12 },
    { id: "urban", label: "Urban Style", count: 20 },
    { id: "classic", label: "Classic Line", count: 16 },
    { id: "sport", label: "Sport Series", count: 14 },
  ]

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="font-serif text-lg">Categories</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {categories.map((category) => (
            <div key={category.id} className="flex items-center space-x-2">
              <Checkbox id={category.id} />
              <Label htmlFor={category.id} className="flex-1 cursor-pointer text-sm">
                {category.label}
              </Label>
              <span className="text-xs text-muted-foreground">({category.count})</span>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="font-serif text-lg">Price Range</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Slider value={priceRange} onValueChange={setPriceRange} max={500} step={10} className="w-full" />
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <span>₦{priceRange[0]}</span>
            <span>₦{priceRange[1]}</span>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="font-serif text-lg">Brands</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {brands.map((brand) => (
            <div key={brand.id} className="flex items-center space-x-2">
              <Checkbox id={brand.id} />
              <Label htmlFor={brand.id} className="flex-1 cursor-pointer text-sm">
                {brand.label}
              </Label>
              <span className="text-xs text-muted-foreground">({brand.count})</span>
            </div>
          ))}
        </CardContent>
      </Card>

      <Button variant="outline" className="w-full bg-transparent">
        Clear Filters
      </Button>
    </div>
  )
}
