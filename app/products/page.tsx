"use client"

import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useCart } from "@/hooks/use-cart"
import { useState } from "react"
import Link from "next/link"

const fishProducts = [
  {
    id: 1,
    name: "Yellow maize dried pap",
    price: "2,000",
    image: "/pap1.jpeg",
    description: "A very good Yellow maize dried pap",
    availability: "In Stock",
    origin: "Nigeria",
  },
  {
    id: 2,
    name: "Sorghum dried pap",
    price: "1,200",
    image: "/pap2.jpeg",
    description: "Sorghum dried pap varieties",
    availability: "In Stock",
    origin: "Nigeria",
  },
  {
    id: 3,
    name: "Oven dried meat",
    price: "1,500",
    image: "/oven.jpeg",
    description: "A great, sweet and succulent meat",
    availability: "Limited",
    origin: "Nigeria",
  },
  {
    id: 4,
    name: "Oven dried catfish",
    price: "16,000/kg",
    image: "/fish.jpeg",
    description: "Amazing Oven dried catfish",
    availability: "In Stock",
    origin: "Nigeria",
  },
  {
    id: 5,
    name: "Oven dried snail",
    price: "9000/kg",
    image: "/snail.jpeg",
    description: "Fresh dried snail",
    availability: "In Stock",
    origin: "Nigeria",
  },
  {
    id: 6,
    name: "White Maize dried pap",
    price: "1,800",
    image: "/pap3.jpeg",
    description: "White Maize dried pap",
    availability: "In Stock",
    origin: "Nigeria",
  },
]

export default function ProductsPage() {
  const { addItem } = useCart()
  const [addingToCart, setAddingToCart] = useState<number | null>(null)

  const handleAddToCart = async (product: (typeof fishProducts)[0]) => {
    setAddingToCart(product.id)

    try {
      await addItem({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        description: product.description,
        origin: product.origin,
      })
    } catch (error) {
      console.error("Failed to add item to cart:", error)
    } finally {
      setAddingToCart(null)
    }
  }

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-12">
          <h1 className="font-serif font-bold text-4xl text-foreground mb-4">Eat Better. Feel Better. Live Better.</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Browse our daily selection of premium fresh fish and seafood. All items are caught fresh and delivered the
            same day.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {fishProducts.map((product) => (
            <div
              key={product.id}
              className="bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-serif font-semibold text-xl text-card-foreground">{product.name}</h3>
                  <Badge variant={product.availability === "In Stock" ? "default" : "secondary"}>
                    {product.availability}
                  </Badge>
                </div>
                <p className="text-muted-foreground mb-2">{product.description}</p>
                <p className="text-sm text-muted-foreground mb-4">Origin: {product.origin}</p>
                <div className="flex items-center justify-between">
                  <span className="font-bold text-2xl text-primary">{product.price}</span>
                  <Button
                    size="sm"
                    onClick={() => handleAddToCart(product)}
                    disabled={addingToCart === product.id || product.availability !== "In Stock"}
                  >
                    {addingToCart === product.id ? "Adding..." : "Add to Cart"}
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h2 className="font-serif font-bold text-2xl mb-4">Need Something Specific?</h2>
          <p className="text-muted-foreground mb-6">
            Can't find what you're looking for? Contact us for special orders and custom requirements.
          </p>
          <Link href="/contact">
            <Button size="lg">Contact Us for Special Orders</Button>
          </Link>
        </div>
      </div>
    </main>
  )
}
