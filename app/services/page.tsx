import { Metadata } from 'next'
import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { CTASection } from '@/components/sections/cta-section'
import { ArrowRight, Check } from 'lucide-react'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Orthopedic Services | Dr. Soutrik Mukherjee - Kolkata',
  description: 'Comprehensive orthopedic services including Knee Replacement, Hip Replacement, Spine Surgery, Sports Injury Care, and Arthritis Treatment in Kolkata.',
}

const services = [
  {
    id: 'knee-replacement',
    title: 'Total Knee Replacement',
    subtitle: 'Restore Mobility, Eliminate Pain',
    description: 'Total knee replacement (TKR) is a surgical procedure to replace the damaged surfaces of the knee joint with artificial implants. It is highly effective for patients with severe arthritis or knee damage.',
    conditions: [
      'Osteoarthritis of the knee',
      'Rheumatoid arthritis',
      'Post-traumatic arthritis',
      'Severe knee deformity',
      'Failed conservative treatment',
    ],
    benefits: [
      'Significant pain relief',
      'Improved mobility and function',
      'Better quality of life',
      'Long-lasting results (15-20+ years)',
      'Return to daily activities',
    ],
    recovery: 'Most patients can walk with support within 24-48 hours. Full recovery typically takes 3-6 months with proper physiotherapy.',
  },
  {
    id: 'hip-replacement',
    title: 'Total Hip Replacement',
    subtitle: 'Advanced Hip Care Solutions',
    description: 'Hip replacement surgery involves removing damaged parts of the hip joint and replacing them with prosthetic components. Modern techniques allow for faster recovery and excellent outcomes.',
    conditions: [
      'Hip osteoarthritis',
      'Avascular necrosis',
      'Hip fractures in elderly',
      'Rheumatoid arthritis',
      'Hip dysplasia',
    ],
    benefits: [
      'Complete pain relief',
      'Restored hip function',
      'Improved walking ability',
      'Enhanced range of motion',
      'Quick return to activities',
    ],
    recovery: 'Patients typically begin walking the day after surgery. Most resume normal activities within 6-8 weeks.',
  },
  {
    id: 'spine-surgery',
    title: 'Spine Surgery',
    subtitle: 'Minimally Invasive Spine Care',
    description: 'Dr. Mukherjee offers comprehensive spine surgery services using minimally invasive techniques whenever possible, resulting in less pain, smaller incisions, and faster recovery.',
    conditions: [
      'Herniated disc',
      'Spinal stenosis',
      'Degenerative disc disease',
      'Spondylolisthesis',
      'Spinal deformities',
      'Spinal tumors',
    ],
    benefits: [
      'Minimally invasive options',
      'Faster recovery times',
      'Reduced post-operative pain',
      'Smaller incisions',
      'Shorter hospital stay',
    ],
    recovery: 'Recovery varies by procedure. Minimally invasive procedures often allow return to activities within 2-4 weeks.',
  },
  {
    id: 'arthritis',
    title: 'Arthritis Treatment',
    subtitle: 'Comprehensive Arthritis Management',
    description: 'A personalized approach to managing all forms of arthritis, from conservative treatments like medication and physical therapy to surgical interventions when necessary.',
    conditions: [
      'Osteoarthritis',
      'Rheumatoid arthritis',
      'Psoriatic arthritis',
      'Gout',
      'Post-traumatic arthritis',
    ],
    benefits: [
      'Customized treatment plans',
      'Multi-modal approach',
      'Focus on preserving joints',
      'Pain management',
      'Improved function',
    ],
    recovery: 'Treatment is ongoing with regular monitoring. Many patients experience significant improvement within weeks to months.',
  },
  {
    id: 'sports-injury',
    title: 'Sports Injury Care',
    subtitle: 'Get Back in the Game',
    description: 'Specialized care for athletes and active individuals suffering from sports-related injuries. Our goal is to help you return to your sport safely and quickly.',
    conditions: [
      'ACL/PCL tears',
      'Meniscus injuries',
      'Rotator cuff tears',
      'Tennis/Golfer\'s elbow',
      'Ankle sprains and fractures',
      'Muscle strains',
    ],
    benefits: [
      'Sports-specific rehabilitation',
      'Arthroscopic surgery options',
      'Quick return to sport',
      'Injury prevention guidance',
      'Performance optimization',
    ],
    recovery: 'Recovery depends on the injury. ACL reconstruction typically requires 6-9 months before returning to sports.',
  },
  {
    id: 'trauma',
    title: 'Trauma & Fracture Surgery',
    subtitle: 'Expert Fracture Care',
    description: 'Comprehensive treatment for all types of fractures and musculoskeletal trauma, from simple fractures to complex polytrauma cases requiring multiple surgeries.',
    conditions: [
      'Simple and complex fractures',
      'Open fractures',
      'Pelvic fractures',
      'Spine fractures',
      'Polytrauma',
    ],
    benefits: [
      '24/7 emergency care',
      'Modern fixation techniques',
      'Minimally invasive when possible',
      'Early mobilization protocols',
      'Comprehensive rehabilitation',
    ],
    recovery: 'Healing times vary by fracture type and location. Most simple fractures heal in 6-8 weeks.',
  },
  {
    id: 'joint-preservation',
    title: 'Joint Preservation',
    subtitle: 'Save Your Natural Joints',
    description: 'Innovative techniques to preserve and repair damaged joints, delaying or avoiding the need for joint replacement surgery, especially in younger patients.',
    conditions: [
      'Early-stage arthritis',
      'Cartilage injuries',
      'Meniscal tears',
      'Labral tears',
      'Joint instability',
    ],
    benefits: [
      'Preserve natural joint',
      'Delay joint replacement',
      'Biological solutions',
      'Minimally invasive',
      'Faster recovery',
    ],
    recovery: 'Recovery varies by procedure. Many patients return to activities within 4-6 weeks.',
  },
  {
    id: 'rehabilitation',
    title: 'Rehabilitation Support',
    subtitle: 'Complete Recovery Programs',
    description: 'Comprehensive post-operative and non-operative rehabilitation programs designed to optimize recovery, restore function, and prevent future injuries.',
    conditions: [
      'Post-surgical rehabilitation',
      'Sports injury rehab',
      'Chronic pain management',
      'Mobility restoration',
      'Strength rebuilding',
    ],
    benefits: [
      'Customized programs',
      'Expert physiotherapy guidance',
      'Home exercise programs',
      'Progress monitoring',
      'Ongoing support',
    ],
    recovery: 'Rehabilitation is tailored to each patient\'s needs and goals. Programs typically last 4-12 weeks.',
  },
]

export default function ServicesPage() {
  return (
    <main>
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-muted via-background to-muted">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-medium uppercase tracking-wider text-secondary mb-3">
            Our Services
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Comprehensive Orthopedic Care
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            From joint replacement to spine surgery, sports medicine to trauma care, 
            we offer a complete range of orthopedic services tailored to your individual needs.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div 
                key={service.id}
                id={service.id}
                className={`grid lg:grid-cols-2 gap-12 items-start ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <p className="text-sm font-medium uppercase tracking-wider text-secondary mb-2">
                    {service.subtitle}
                  </p>
                  <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
                    {service.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {service.description}
                  </p>
                  
                  <div className="bg-muted/50 rounded-xl p-6 mb-6">
                    <h3 className="font-semibold text-foreground mb-3">Recovery Information</h3>
                    <p className="text-sm text-muted-foreground">{service.recovery}</p>
                  </div>

                  <Button asChild>
                    <Link href="/appointment">
                      Book Consultation
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>

                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="bg-background border border-border rounded-xl p-6">
                    <h3 className="font-semibold text-foreground mb-4">Conditions Treated</h3>
                    <ul className="space-y-2">
                      {service.conditions.map((condition, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                          <Check className="h-4 w-4 text-secondary flex-shrink-0 mt-0.5" />
                          {condition}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-primary/5 border border-primary/10 rounded-xl p-6">
                    <h3 className="font-semibold text-foreground mb-4">Benefits</h3>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                          <Check className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </main>
  )
}
