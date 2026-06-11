import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const treatments = [
  {
    title: 'Knee Replacement',
    description: 'Total and partial knee replacement surgery for severe arthritis, restoring mobility and eliminating chronic knee pain.',
    href: '/services#knee-replacement',
  },
  {
    title: 'Hip Replacement',
    description: 'Advanced hip replacement procedures using modern techniques for faster recovery and improved quality of life.',
    href: '/services#hip-replacement',
  },
  {
    title: 'Spine Surgery',
    description: 'Comprehensive spine care including minimally invasive procedures for herniated discs, spinal stenosis, and deformities.',
    href: '/services#spine-surgery',
  },
  {
    title: 'Arthritis Treatment',
    description: 'Personalized treatment plans for all types of arthritis, from conservative management to surgical intervention.',
    href: '/services#arthritis',
  },
  {
    title: 'Sports Injury Care',
    description: 'Specialized treatment for sports-related injuries including ACL tears, meniscus injuries, and rotator cuff repairs.',
    href: '/services#sports-injury',
  },
  {
    title: 'Trauma & Fracture Surgery',
    description: 'Emergency and elective treatment for complex fractures and musculoskeletal trauma with expert surgical care.',
    href: '/services#trauma',
  },
  {
    title: 'Joint Preservation',
    description: 'Innovative techniques to preserve natural joints, delaying or avoiding the need for joint replacement surgery.',
    href: '/services#joint-preservation',
  },
  {
    title: 'Rehabilitation Support',
    description: 'Comprehensive post-operative rehabilitation programs designed for optimal recovery and return to activity.',
    href: '/services#rehabilitation',
  },
]

export function TreatmentsSection() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-medium uppercase tracking-wider text-secondary mb-3">
            Specialized Care
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Comprehensive Orthopedic Treatments
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            From joint replacement to spine surgery, we offer a full spectrum of orthopedic services 
            tailored to your individual needs.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {treatments.map((treatment, index) => (
            <div 
              key={index}
              className="group p-6 rounded-xl border border-border bg-background hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              <h3 className="font-serif text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                {treatment.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                {treatment.description}
              </p>
              <Link 
                href={treatment.href}
                className="inline-flex items-center text-sm font-medium text-primary hover:text-secondary transition-colors"
              >
                Learn More
                <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild variant="outline" size="lg">
            <Link href="/services">
              View All Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
