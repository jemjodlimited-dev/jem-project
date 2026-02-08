import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />

      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-serif font-bold text-3xl sm:text-4xl text-foreground mb-4">Eat Better. Feel Better. Live Better.</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover our best foods in stocks.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Yellow maize dried pap",
              description: "A very good Yellow maize dried pap",
              image: "/pap1.jpeg",
            },
            {
              title: "Sorghum dried pap",
              description: "Sorghum dried pap varieties",
              image: "/pap2.jpeg",
            },
            {
              title: "Oven dried meat",
              description: "Crabs, shrimp, and mollusks",
              image: "/oven.jpeg",
            },
          ].map((category, index) => (
            <div
              key={index}
              className="group cursor-pointer bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={category.image || "/placeholder.svg"}
                  alt={category.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="font-serif font-semibold text-xl text-card-foreground mb-2">{category.title}</h3>
                <p className="text-muted-foreground">{category.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif font-bold text-3xl text-foreground mb-6">Our Freshness Promise</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">🐟</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">Straight from Nature to You.</h3>
              <p className="text-muted-foreground">Newly prepared for you</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">❄️</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">Well Prepared</h3>
              <p className="text-muted-foreground">Maintained at optimal temperature</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">✅</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">Quality Guaranteed</h3>
              <p className="text-muted-foreground">100% satisfaction or money back</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
