"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, ShoppingCart } from "lucide-react"
import { useCart } from "@/hooks/use-cart"

interface Product {
  id: number
  name: string
  description: string
  price: number
  originalPrice?: number
  image: string
  category: string
  brand: string
}

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const [isLiked, setIsLiked] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const { addToCart } = useCart()

  const handleAddToCart = async () => {
    setIsLoading(true)
    await addToCart(product)
    setIsLoading(false)
  }

  const discountPercentage = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0

  return (
    <Card className="group overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <div className="relative aspect-square overflow-hidden">
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />

        {/* Discount Badge */}
        {discountPercentage > 0 && (
          <Badge className="absolute top-3 left-3 bg-destructive text-destructive-foreground">
            -{discountPercentage}%
          </Badge>
        )}

        {/* Wishlist Button */}
        <Button
          variant="ghost"
          size="sm"
          className="absolute top-3 right-3 bg-white/80 hover:bg-white"
          onClick={() => setIsLiked(!isLiked)}
        >
          <Heart className={`w-4 h-4 ${isLiked ? "fill-red-500 text-red-500" : "text-gray-600"}`} />
        </Button>
      </div>

      <CardContent className="p-4">
        <div className="space-y-2">
          <h3 className="font-serif font-semibold text-lg text-card-foreground line-clamp-1">{product.name}</h3>
          <p className="text-sm text-muted-foreground line-clamp-2">{product.description}</p>

          <div className="flex items-center gap-2">
            <span className="font-semibold text-lg text-foreground">₦{product.price}</span>
            {product.originalPrice && (
              <span className="text-sm text-muted-foreground line-through">₦{product.originalPrice}</span>
            )}
          </div>

          <Button onClick={handleAddToCart} disabled={isLoading} className="w-full gap-2 mt-3">
            <ShoppingCart className="w-4 h-4" />
            {isLoading ? "Adding..." : "Add to Cart"}
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
