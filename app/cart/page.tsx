import { Navigation } from "@/components/navigation"
import { CartSummary } from "@/components/cart-summary"
import { CheckoutForm } from "@/components/checkout-form"

export default function CartPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Page Header */}
      <section className="bg-muted py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-serif font-bold text-4xl sm:text-5xl text-foreground mb-4">Shopping Cart</h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Review your items and complete your purchase
            </p>
          </div>
        </div>
      </section>

      {/* Cart Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <CartSummary />
            </div>

            {/* Checkout Form */}
            <div className="lg:col-span-1">
              <CheckoutForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
