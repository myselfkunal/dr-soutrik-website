import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function AboutPreview() {
  return (
    <section className="py-20 lg:py-28 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/dr-soutrik-consultation.png"
                alt="Dr. Soutrik Mukherjee consulting a patient at Advanced Ortho and Spine Clinic"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-background rounded-xl shadow-lg p-6 max-w-xs hidden lg:block">
              <p className="text-sm text-muted-foreground mb-1">Specialised in</p>
              <p className="font-serif font-semibold text-foreground">Joint Replacement, Spine & Trauma Surgery</p>
            </div>
          </div>

          <div className="space-y-6 order-1 lg:order-2">
            <div>
              <p className="text-sm font-medium uppercase tracking-wider text-secondary mb-3">
                Meet Your Surgeon
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Dr. Soutrik Mukherjee
              </h2>
              <p className="text-lg text-primary font-medium">
                MS (Ortho) · AO Masters · 10 Years Experience
              </p>
            </div>
            
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Dr. Soutrik Mukherjee is an orthopedic surgeon with over 10 years of experience 
                and more than 3,000 procedures to his credit. He specialises in complex joint 
                replacements, spine surgery, trauma care, and sports medicine. He completed his 
                MS in Orthopaedics from WBUHS and pursued five specialised fellowships — including 
                at the internationally acclaimed Ganga Hospital, Coimbatore.
              </p>
              <p>
                A national academic award winner and invited international speaker (Rome, 2023), 
                Dr. Mukherjee practices at <strong>Advanced Ortho and Spine Clinic</strong> in 
                Lake Town, Kolkata — combining surgical precision with a genuinely patient-first approach.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {[
                'MBBS & MS Ortho – WBUHS',
                'Fellowship – Ganga Hospital, Coimbatore',
                'AO Masters Qualification',
                'Fellowship in Spine Surgeries – SSWB',
                'Joint Reconstruction & Sports Medicine – WBOA',
                '10+ Years Clinical Experience',
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-secondary flex-shrink-0" />
                  <span className="text-sm text-foreground">{item}</span>
                </div>
              ))}
            </div>

            <Button asChild size="lg" className="mt-4">
              <Link href="/about">
                Full Profile & Qualifications
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
