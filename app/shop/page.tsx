import { Navigation } from "@/components/navigation"
import { ProductGrid } from "@/components/product-grid"
import { ProductFilters } from "@/components/product-filters"

export default function ShopPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Page Header */}
      <section className="bg-muted py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-serif font-bold text-4xl sm:text-5xl text-foreground mb-4">Shop Collection</h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Discover our curated selection of premium products designed for your lifestyle
            </p>
          </div>
        </div>
      </section>

      {/* Shop Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters Sidebar */}
            <aside className="lg:w-64 flex-shrink-0">
              <ProductFilters />
            </aside>

            {/* Product Grid */}
            <main className="flex-1">
              <ProductGrid />
            </main>
          </div>
        </div>
      </section>
    </main>
  )
}
