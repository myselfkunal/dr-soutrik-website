import Link from 'next/link'
import { Phone, Mail, MapPin, Clock, Facebook, Linkedin, Instagram } from 'lucide-react'

const quickLinks = [
  { name: 'About Dr. Mukherjee', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Success Stories', href: '/success-stories' },
  { name: 'Patient Education', href: '/blog' },
  { name: 'FAQ', href: '/faq' },
  { name: 'Book Appointment', href: '/appointment' },
  { name: 'Contact', href: '/contact' },
]

const services = [
  { name: 'Complex Trauma Surgery', href: '/services#trauma' },
  { name: 'Hip & Knee Replacement', href: '/services#joint-replacement' },
  { name: 'Shoulder & Elbow Replacement', href: '/services#joint-replacement' },
  { name: 'Arthroscopic Surgery', href: '/services#arthroscopy' },
  { name: 'Spine Surgery', href: '/services#spine' },
  { name: 'Sports Medicine', href: '/services#sports' },
  { name: 'Arthritis & Osteoporosis', href: '/services#arthritis' },
]

export function Footer() {
  return (
<footer className="bg-primary text-primary-foreground">

  {/* Top Info Section */}
  <div className="border-t border-white/10 border-b border-white/10">

    <div className="mx-auto max-w-4xl px-6 py-12">

      <div className="grid grid-cols-1 md:grid-cols-3 gap-20 text-center">

        <div className="flex flex-col items-center">
          <MapPin className="h-6 w-6 text-secondary mb-3" />
          <p className="text-sm text-primary-foreground/80 leading-relaxed">
            Advanced Ortho and Spine Clinic
            <br />
            Lake Town
          </p>
        </div>

        <div className="flex flex-col items-center">
          <Clock className="h-6 w-6 text-secondary mb-3" />
          <p className="text-sm text-primary-foreground/80 leading-relaxed">
            Mon – Sat
            <br />
            10:00 AM – 7:00 PM
          </p>
        </div>

        <div className="flex flex-col items-center">
          <Phone className="h-6 w-6 text-secondary mb-3" />
          <p className="text-sm text-primary-foreground/80 leading-relaxed">
            Emergency Guidance
            <br />
            Available
          </p>
        </div>

      </div>

    </div>

  </div>

  {/* Main Footer */}
  <div className="mx-auto max-w-7xl px-10 lg:px-16 py-16">

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">

      {/* Quick Links */}
      <div>

        <h4 className="text-secondary font-semibold uppercase tracking-[0.15em] text-sm mb-10">
          Quick Links
        </h4>

        <ul className="space-y-4">

          {quickLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className="text-[17px] text-primary-foreground/80 hover:text-white transition-colors"
              >
                {link.name}
              </Link>
            </li>
          ))}

        </ul>

      </div>

      {/* Services */}
      <div>

        <h4 className="text-secondary font-semibold uppercase tracking-[0.15em] text-sm mb-10">
          Our Services
        </h4>

        <ul className="space-y-4">

          {services.map((service) => (
            <li key={service.name}>
              <Link
                href={service.href}
                className="text-[17px] text-primary-foreground/80 hover:text-white transition-colors"
              >
                {service.name}
              </Link>
            </li>
          ))}

        </ul>

      </div>

      {/* Contact */}
      <div>

        <h4 className="text-secondary font-semibold uppercase tracking-[0.15em] text-sm mb-10">
          Contact & Hours
        </h4>

        <div className="space-y-6">

          <div className="flex gap-4">

            <MapPin className="h-5 w-5 text-secondary mt-1 flex-shrink-0" />

            <div className="text-[17px] text-primary-foreground/80 leading-7">

              Advanced Ortho and Spine Clinic
              <br />

              P 786, Lake Town Block A,
              Kolkata – 700089

              <br />

              <span className="text-primary-foreground/50 text-sm">
                Behind Jaya Cinema, Opp. IDBI Bank
              </span>

            </div>

          </div>

          <div className="flex gap-4">

            <Phone className="h-5 w-5 text-secondary mt-1 flex-shrink-0" />

            <div className="space-y-2">

              <a
                href="tel:+919874731994"
                className="block text-[17px] text-primary-foreground/80 hover:text-white transition-colors"
              >
                +91 98747 31994
              </a>

              <a
                href="tel:+919334153453"
                className="block text-[17px] text-primary-foreground/80 hover:text-white transition-colors"
              >
                +91 93341 53453
              </a>

              <a
                href="tel:+919804270742"
                className="block text-[17px] text-primary-foreground/80 hover:text-white transition-colors"
              >
                +91 98042 70742
              </a>

            </div>

          </div>

          <div className="flex gap-4">

            <Mail className="h-5 w-5 text-secondary mt-1 flex-shrink-0" />

            <a
              href="mailto:drsoutrikmukherjee@gmail.com"
              className="text-[17px] text-primary-foreground/80 hover:text-white transition-colors"
            >
              drsoutrikmukherjee@gmail.com
            </a>

          </div>

          <div className="flex gap-4">

            <Clock className="h-5 w-5 text-secondary mt-1 flex-shrink-0" />

            <div className="text-[17px] text-primary-foreground/80 leading-7">

              Mon – Sat: 10:00 AM – 7:00 PM

              <br />

              <span className="text-primary-foreground/50 text-sm">
                Sunday: By Appointment Only
              </span>

            </div>

          </div>

        </div>

      </div>

    </div>

  </div>

  {/* Bottom Bar */}
  <div className="border-t border-white/10">

    <div className="mx-auto max-w-7xl px-10 lg:px-16 py-5">

      <div className="flex flex-col sm:flex-row justify-between items-center gap-3">

        <p className="text-sm text-primary-foreground/50">
          © {new Date().getFullYear()} Dr. Soutrik Mukherjee. All rights reserved.
        </p>

        <p className="text-sm text-primary-foreground/40">
          Website by Kunal Shaw
        </p>

      </div>

    </div>

  </div>

</footer>

  )
}