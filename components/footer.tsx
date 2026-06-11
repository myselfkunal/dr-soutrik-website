import Link from 'next/link'
import { Phone, Mail, MapPin, Clock, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react'

const quickLinks = [
  { name: 'About Dr. Mukherjee', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Success Stories', href: '/success-stories' },
  { name: 'Patient Education', href: '/blog' },
  { name: 'FAQ', href: '/faq' },
  { name: 'Contact', href: '/contact' },
]

const services = [
  { name: 'Knee Replacement', href: '/services#knee-replacement' },
  { name: 'Hip Replacement', href: '/services#hip-replacement' },
  { name: 'Spine Surgery', href: '/services#spine-surgery' },
  { name: 'Sports Injury Care', href: '/services#sports-injury' },
  { name: 'Arthritis Treatment', href: '/services#arthritis' },
  { name: 'Trauma Surgery', href: '/services#trauma' },
]

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="font-serif text-xl font-bold">Dr. Soutrik Mukherjee</h3>
            <p className="text-sm text-primary-foreground/80 leading-relaxed">
              Orthopedic, Joint Replacement & Spine Surgeon providing comprehensive musculoskeletal care with a patient-first approach in Kolkata.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <Link href={service.href} className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">Contact Information</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-primary-foreground/80">
                <MapPin className="h-5 w-5 flex-shrink-0 mt-0.5" />
                <span>
                  Medical Chambers<br />
                  Salt Lake, Sector V<br />
                  Kolkata, West Bengal 700091
                </span>
              </li>
              <li>
                <a href="tel:+919999999999" className="flex items-center gap-3 text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  <Phone className="h-5 w-5 flex-shrink-0" />
                  <span>+91 99999 99999</span>
                </a>
              </li>
              <li>
                <a href="mailto:contact@drsoutrik.com" className="flex items-center gap-3 text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  <Mail className="h-5 w-5 flex-shrink-0" />
                  <span>contact@drsoutrik.com</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-primary-foreground/80">
                <Clock className="h-5 w-5 flex-shrink-0 mt-0.5" />
                <span>
                  Mon - Sat: 10:00 AM - 7:00 PM<br />
                  Sunday: By Appointment Only
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-primary-foreground/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-primary-foreground/60">
              © {new Date().getFullYear()} Dr. Soutrik Mukherjee. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="/privacy" className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
