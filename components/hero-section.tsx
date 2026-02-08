import { Button } from "@/components/ui/button"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/fresh-fish-market.png')`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="font-serif font-bold text-4xl sm:text-5xl lg:text-6xl text-white mb-6 leading-tight">
          JemJod Investment Limited
        </h1>
        <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
        At JemJod Investment Limited, we believe in the power of pure, unprocessed foods to fuel your body and uplift your spirit
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/products">
            <Button
              size="lg"
              className="text-lg px-8 py-3 bg-primary hover:bg-primary/90 text-primary-foreground font-medium"
            >
              View Our Store
            </Button>
          </Link>
          <Link href="/contact">
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 py-3 bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm"
            >
              Place Order
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
