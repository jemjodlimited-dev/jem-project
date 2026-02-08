"use client"

import { useState } from "react"
import { ProductCard } from "@/components/product-card"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Mock product data
const products = [
  {
    id: 1,
    name: "Premium Leather Sneakers",
    description: "Handcrafted leather sneakers with premium comfort",
    price: 189,
    originalPrice: 229,
    image: "/premium-footwear-collection.png",
    category: "shoes",
    brand: "premium",
  },
  {
    id: 2,
    name: "Designer Crossbody Bag",
    description: "Elegant crossbody bag perfect for daily use",
    price: 149,
    image: "/luxury-bags-display.png",
    category: "bags",
    brand: "urban",
  },
  {
    id: 3,
    name: "Minimalist Backpack",
    description: "Clean design meets functionality",
    price: 89,
    image: "/luxury-bags-display.png",
    category: "bags",
    brand: "classic",
  },
  {
    id: 4,
    name: "Casual Cotton Tee",
    description: "Soft, breathable cotton for everyday comfort",
    price: 39,
    image: "/modern-fashion-lifestyle.png",
    category: "clothing",
    brand: "urban",
  },
  {
    id: 5,
    name: "Running Shoes Pro",
    description: "Advanced cushioning for peak performance",
    price: 159,
    originalPrice: 199,
    image: "/premium-footwear-collection.png",
    category: "shoes",
    brand: "sport",
  },
  {
    id: 6,
    name: "Leather Jacket",
    description: "Timeless leather jacket with modern cut",
    price: 299,
    image: "/modern-fashion-lifestyle.png",
    category: "clothing",
    brand: "premium",
  },
  {
    id: 7,
    name: "Canvas Sneakers",
    description: "Classic canvas design with modern comfort",
    price: 79,
    image: "/premium-footwear-collection.png",
    category: "shoes",
    brand: "classic",
  },
  {
    id: 8,
    name: "Structured Handbag",
    description: "Professional handbag for the modern woman",
    price: 199,
    image: "/luxury-bags-display.png",
    category: "bags",
    brand: "premium",
  },
]

export function ProductGrid() {
  const [sortBy, setSortBy] = useState("featured")
  const [currentProducts] = useState(products)

  return (
    <div className="space-y-6">
      {/* Sort and Results Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <p className="text-muted-foreground">Showing {currentProducts.length} products</p>
        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground">Sort by:</span>
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-40">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="featured">Featured</SelectItem>
              <SelectItem value="price-low">Price: Low to High</SelectItem>
              <SelectItem value="price-high">Price: High to Low</SelectItem>
              <SelectItem value="newest">Newest</SelectItem>
              <SelectItem value="popular">Most Popular</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Load More Button */}
      <div className="text-center pt-8">
        <Button variant="outline" size="lg">
          Load More Products
        </Button>
      </div>
    </div>
  )
}
