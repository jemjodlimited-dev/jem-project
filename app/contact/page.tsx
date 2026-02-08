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
              Ready to order fresh fish? Have questions about our daily catch? Get in touch with us today.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="font-serif font-semibold text-2xl text-foreground mb-4">Place Your Order</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Ready to order fresh fish or have questions about our daily catch? Contact us to place your order or
                  inquire about availability. We guarantee the freshest fish delivered to your door.
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="font-medium text-foreground mb-1">Email</h3>
                  <p className="text-muted-foreground">orders@JEMJOD.com</p>
                </div>
                <div>
                  <h3 className="font-medium text-foreground mb-1">Phone</h3>
                  <p className="text-muted-foreground">+2349033447991</p>
                </div>
                <div>
                  <h3 className="font-medium text-foreground mb-1">Market Location</h3>
                  <p className="text-muted-foreground">
                    JemJod Limited
                    <br />
                    43b Onifade Crescent Off Orona
                    <br />
                    New Oko-Oba Abule Egba
                    <br />
                    Lagos, Nigeria
                  </p>
                </div>
                <div>
                  <h3 className="font-medium text-foreground mb-1">Market Hours</h3>
                  <p className="text-muted-foreground">
                    Daily: 5:00 AM - 2:00 PM
                    <br />
                    (Fresh catch arrives at 5 AM)
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
