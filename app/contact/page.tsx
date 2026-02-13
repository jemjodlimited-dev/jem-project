import { Navigation } from "@/components/navigation"

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Page Header */}
      <section className="bg-muted py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-serif font-bold text-4xl sm:text-5xl text-foreground mb-4">Contact Us</h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Get in touch with JEMJOD Limited for all your inquiries and orders.
            </p>
          </div>
        </div>
      </section>

      {/* Company Information */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            <div>
              <h2 className="font-serif font-semibold text-3xl text-foreground mb-4">JEMJOD Limited</h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                We pride ourselves on providing the freshest, highest-quality products. Whether you're looking to place an order or have any enquiries, we're here to help.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-foreground mb-3 text-lg">Address</h3>
                <p className="text-muted-foreground leading-relaxed">
                  43b Onifade Crescent Off Orona
                  <br />
                  New Oko-Oba Abule Egba
                  <br />
                  Lagos, Nigeria
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-3 text-lg">Market Hours</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Daily: 5:00 AM - 2:00 PM
                  <br />
                  <span className="text-sm">(Fresh catch arrives at 5 AM)</span>
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-3 text-lg">Phone</h3>
                <p className="text-muted-foreground">
                  <a href="tel:+2349033447991" className="hover:text-primary transition-colors text-base">
                    +2349033447991
                  </a>
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-3 text-lg">Email</h3>
                <p className="text-muted-foreground">
                  <a href="mailto:orders@jemjod.com" className="hover:text-primary transition-colors text-base">
                    orders@jemjod.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
