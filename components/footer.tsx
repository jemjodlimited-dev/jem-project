import Link from "next/link"
import { Phone, Mail, MapPin, Clock, Fish } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Fish className="h-8 w-8 text-emerald-400" />
              <span className="text-2xl font-bold font-serif">JEMJOD</span>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed">
              Your trusted source for premium fresh fish and seafood. Daily catches delivered with quality guaranteed.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold font-serif">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-slate-300 hover:text-emerald-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-slate-300 hover:text-emerald-400 transition-colors">
                  Fresh Fish
                </Link>
              </li>
              <li>
                <Link href="/cart" className="text-slate-300 hover:text-emerald-400 transition-colors">
                  Cart
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-300 hover:text-emerald-400 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold font-serif">Contact Info</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-emerald-400" />
                <span className="text-slate-300">+2349033447991</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-emerald-400" />
                <span className="text-slate-300">orders@JEMJOD.com</span>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-emerald-400 mt-0.5" />
                <span className="text-slate-300">
                  43b Onifade Crescent Off Orona 
                  <br />
                  New Oko-Oba Abule Egba. Lagos State
                </span>
              </li>
            </ul>
          </div>

          {/* Market Hours */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold font-serif">Market Hours</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-emerald-400" />
                <span className="text-slate-300">Hours Of Operation</span>
              </div>
              <div className="text-slate-300 space-y-1">
                <p>Mon - Sat: 6:00 AM - 8:00 PM</p>
                <p>Sunday: 6:00 AM - 6:00 PM</p>
                <p className="text-emerald-400 text-xs mt-2">Best selection available 6-10 AM</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm">© 2025 JEMJOD. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <Link href="#" className="text-slate-400 hover:text-emerald-400 text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-slate-400 hover:text-emerald-400 text-sm transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="text-slate-400 hover:text-emerald-400 text-sm transition-colors">
              Quality Guarantee
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
