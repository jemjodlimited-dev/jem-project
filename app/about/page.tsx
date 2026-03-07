import { Clock, Award, Users, Truck, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
         <Navigation />
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-primary/5 to-primary/10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6 text-balance">
            About JEMJOD
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Your trusted source for right preserved foods, delivered daily from the coast to your kitchen.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-serif font-bold text-foreground mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Founded in 2019, JEMJOD Limited began as a small family business with a simple mission: to bring the highest-quality, technologically preserved foods directly to your table.
                </p>
                <p>
                  What started as a single stall in the local market has grown into a trusted name in preserved foods,
                  serving thousands of families across the region. We maintain the same commitment to quality and excellence that our founders established nearly four decades ago.
                </p>
                <p>
                  Every day, our team works meticulously to process and preserve foods using advanced food technology, ensuring that what reaches your kitchen maintains the highest standards of safety, nutrition, and taste.
                </p>
              </div>
            </div>
            <div className="space-y-8">
              <div className="relative">
                <div className="absolute -inset-0.5 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl blur-2xl opacity-75"></div>
                <img
                  src="/owner.jpg"
                  alt="Mrs Darasimi Olagunju"
                  className="relative rounded-2xl shadow-2xl w-full h-96 object-cover ring-1 ring-primary/10"
                />
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-3xl font-serif font-bold text-foreground mb-1">Mrs Darasimi Olagunju</h3>
                  <p className="text-primary font-sans font-semibold">Food Scientist & Founder</p>
                </div>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p className="font-sans">
                    Darasimi Olagunju is a food scientist who specializes in food processing and storage technology. She graduated from Joseph Ayo Babalola University with both her bachelor's and master's degrees, bringing scientific rigor to every product we create.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                    <div className="border-l-4 border-primary pl-4">
                      <p className="font-sans font-semibold text-sm text-foreground mb-1">Professional Background</p>
                      <p className="text-sm">Trained by NAFDAC (2014) and served with the Federal Institute of Research Oshodi (FIIRO)</p>
                    </div>
                    <div className="border-l-4 border-primary pl-4">
                      <p className="font-sans font-semibold text-sm text-foreground mb-1">Credentials</p>
                      <p className="text-sm">Registered member of the Nigerian Institute of Food Science and Technology (NIFST)</p>
                    </div>
                  </div>
                  <p className="font-sans pt-2">
                    With her expertise in food technology and preservation, Darasimi brings scientific excellence to JEMJOD Limited's products, ensuring every item meets the highest standards of quality and food safety.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-16 px-4 bg-primary/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-serif font-bold text-foreground mb-4">Ready to Experience our Products?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Order now and taste the difference quality makes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/products">Shop Here</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
