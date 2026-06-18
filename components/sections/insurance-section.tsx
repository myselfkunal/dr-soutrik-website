import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import Link from 'next/link'

export function InsuranceSection() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div className="space-y-6">
            <div>
              <p className="text-sm font-medium uppercase tracking-wider text-secondary mb-3">
                Payment & Appointments
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Booking & Payment Information
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Dr. Mukherjee&apos;s clinic welcomes all patients. For queries about payment modes, 
                insurance coverage, or to confirm your appointment, please contact the clinic directly.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 rounded-xl bg-muted/40 border border-border">
                <Clock className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Clinic Hours</h3>
                  <p className="text-muted-foreground text-sm">Monday – Saturday: 10:00 AM – 7:00 PM</p>
                  <p className="text-muted-foreground text-sm">Sunday: By Appointment Only</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-muted/40 border border-border">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Location</h3>
                  <p className="text-muted-foreground text-sm">Advanced Ortho and Spine Clinic</p>
                  <p className="text-muted-foreground text-sm">P 786, Lake Town Block A, Kolkata – 700 089</p>
                  <p className="text-muted-foreground text-sm">(Behind Jaya Cinema, Opp. IDBI Bank)</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-muted/40 border border-border">
                <Mail className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Email</h3>
                  <a href="mailto:drsoutrikmukherjee@gmail.com" className="text-primary text-sm hover:underline">
                    drsoutrikmukherjee@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-primary/5 border border-primary/10 rounded-2xl p-8 space-y-6">
            <h3 className="font-serif text-xl font-semibold text-foreground">
              Book Your Consultation
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              To book an appointment, you can call us directly, fill in the online appointment 
              form, or visit the clinic during working hours. We try to accommodate urgent 
              consultations as quickly as possible.
            </p>

            <div className="space-y-3">
              {[
                { label: 'Primary', number: '+91 98747 31994', href: 'tel:+919874731994' },
                { label: 'Alternate', number: '+91 93041 53453', href: 'tel:+919304153453' },
                { label: 'Alternate', number: '+91 98042 70742', href: 'tel:+919804270742' },
              ].map((phone, i) => (
                <a 
                  key={i}
                  href={phone.href}
                  className="flex items-center gap-4 p-4 rounded-xl bg-background border border-border hover:border-primary/30 hover:shadow-sm transition-all group"
                >
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">{phone.label}</p>
                    <p className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {phone.number}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            <Link 
              href="/appointment"
              className="block w-full text-center py-3 px-6 rounded-xl bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
            >
              Fill Online Appointment Form
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
