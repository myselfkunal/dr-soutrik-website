import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-muted via-background to-muted overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230F4C81' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>
      
      <div className="relative mx-auto max-w-7xl px-4 py-32 sm:px-6 lg:px-8 lg:py-40">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-4">
              <p className="text-sm font-medium uppercase tracking-wider text-secondary">
                Orthopedic Excellence in Kolkata
              </p>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
                Advanced Orthopedic, Joint Replacement & Spine Care
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto lg:mx-0">
                Led by Dr. Soutrik Mukherjee — MS (Ortho), AO Masters, with 10 years of experience 
                and multiple international fellowships. Trusted by thousands of patients across Kolkata 
                for complex orthopedic surgeries, joint replacements, and spine care.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button asChild size="lg" className="text-base">
                <Link href="/appointment">
                  Book Appointment
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-base">
                <a href="tel:+919874731994">
                  <Phone className="mr-2 h-5 w-5" />
                  +91 98747 31994
                </a>
              </Button>
            </div>

            <div className="flex flex-wrap gap-6 justify-center lg:justify-start text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-secondary" />
                10+ Years Experience
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-secondary" />
                5 Advanced Fellowships
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-secondary" />
                Lake Town, Kolkata
              </div>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/dr-soutrik-hero.png"
                alt="Dr. Soutrik Mukherjee – Orthopedic Surgeon, Lake Town Kolkata"
                fill
                className="object-cover object-top"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>

            <div className="absolute -bottom-6 -left-6 bg-background rounded-xl shadow-lg p-5 max-w-xs">
              <p className="text-xs text-muted-foreground mb-1">Advanced Ortho and Spine Clinic</p>
              <p className="font-semibold text-foreground text-sm">Lake Town, Kolkata</p>
              <p className="text-xs text-muted-foreground mt-1">P 786, Lake Town Block A</p>
            </div>

            <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground rounded-xl shadow-lg p-4 text-center">
              <p className="text-2xl font-bold font-serif">3000+</p>
              <p className="text-xs text-primary-foreground/80">Procedures</p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-1">
          <div className="w-1 h-2 rounded-full bg-muted-foreground/50" />
        </div>
      </div>
    </section>
  )
}
