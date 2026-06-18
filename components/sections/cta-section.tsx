import Link from 'next/link'
import { Calendar, Clock, MapPin, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function CTASection() {
  return (
    <section className="py-20 lg:py-28 bg-primary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Ready to Take the First Step Towards Pain-Free Living?
          </h2>
          <p className="text-lg text-primary-foreground/80 leading-relaxed mb-10">
            Whether it is joint pain, a spine condition, a sports injury, or a fracture — 
            Dr. Soutrik Mukherjee and his team at Advanced Ortho and Spine Clinic, Lake Town 
            are here to help. Book a consultation today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild 
              size="lg" 
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
            >
              <Link href="/appointment">
                <Calendar className="mr-2 h-5 w-5" />
                Book Consultation
              </Link>
            </Button>
            <Button 
              asChild 
              size="lg"
              className="bg-white/15 text-primary-foreground border border-primary-foreground/60 hover:bg-white/25"
            >
              <a href="tel:+919874731994">
                <Phone className="mr-2 h-5 w-5" />
                +91 98747 31994
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
