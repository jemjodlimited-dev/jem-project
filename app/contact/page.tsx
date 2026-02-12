import { Navigation } from "@/components/navigation"
import { ContactForm } from "@/components/contact-form"

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
              Have any questions? We'd love to hear from you. Fill out the form below and we'll get back to you shortly.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Company Information */}
            <div className="space-y-8">
              <div>
                <h2 className="font-serif font-semibold text-2xl text-foreground mb-4">JEMJOD Limited</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  We pride ourselves on providing the freshest, highest-quality products. Whether you're looking to place an order or have any enquiries, we're here to help.
                </p>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="font-medium text-foreground mb-2">Address</h3>
                  <p className="text-muted-foreground">
                    43b Onifade Crescent Off Orona
                    <br />
                    New Oko-Oba Abule Egba
                    <br />
                    Lagos, Nigeria
                  </p>
                </div>

                <div>
                  <h3 className="font-medium text-foreground mb-2">Phone</h3>
                  <p className="text-muted-foreground">
                    <a href="tel:+2349033447991" className="hover:text-primary transition-colors">
                      +2349033447991
                    </a>
                  </p>
                </div>

                <div>
                  <h3 className="font-medium text-foreground mb-2">Email</h3>
                  <p className="text-muted-foreground">
                    <a href="mailto:orders@jemjod.com" className="hover:text-primary transition-colors">
                      orders@jemjod.com
                    </a>
                  </p>
                </div>

                <div>
                  <h3 className="font-medium text-foreground mb-2">Market Hours</h3>
                  <p className="text-muted-foreground">
                    Daily: 5:00 AM - 2:00 PM
                    <br />
                    <span className="text-sm">(Fresh catch arrives at 5 AM)</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Enquiry Form */}
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
