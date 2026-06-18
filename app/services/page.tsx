import { Metadata } from 'next'
import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { CTASection } from '@/components/sections/cta-section'
import { ArrowRight, Check } from 'lucide-react'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Orthopedic Services | Dr. Soutrik Mukherjee – Lake Town, Kolkata',
  description: 'Comprehensive orthopedic services by Dr. Soutrik Mukherjee including Joint Replacement, Spine Surgery, Complex Trauma, Arthroscopy, and Sports Medicine in Kolkata.',
}

const services = [
  {
    id: 'trauma',
    title: 'Complex Trauma Surgery',
    subtitle: 'Expert Care for Fractures & Injuries',
    description: 'Dr. Mukherjee has extensive training in managing complex fractures and polytrauma cases. Whether it is a road traffic accident, a fall, or a high-energy injury, his team provides rapid, expert surgical care to stabilise fractures, restore function, and minimise long-term complications. He uses modern internal fixation techniques — plates, nails, screws — and advocates for early mobilisation to speed up recovery.',
    conditions: [
      'Complex long bone fractures (femur, tibia, humerus)',
      'Pelvic and acetabular fractures',
      'Periarticular fractures around knee, hip & shoulder',
      'Open and compound fractures',
      'Polytrauma and multi-system injuries',
      'Non-union and malunion (failed fracture healing)',
    ],
    benefits: [
      'Subspeciality fellowship training in pelvi-acetabular surgery',
      'Modern fixation with early weight-bearing protocols',
      'Minimally invasive fixation wherever appropriate',
      'Comprehensive post-operative rehabilitation support',
      'Guidance available for emergency cases',
    ],
    recovery: 'Recovery depends on fracture location and severity. Simple fractures heal in 6–10 weeks. Complex pelvic or periarticular fractures may require 3–6 months of supervised rehabilitation.',
  },
  {
    id: 'joint-replacement',
    title: 'Primary & Revision Joint Replacement',
    subtitle: 'Hip, Knee, Shoulder & Elbow',
    description: 'Dr. Mukherjee performs primary and revision replacement surgeries across all major joints — hip, knee, shoulder, and elbow. With a Fellowship in Adult Joint Reconstruction and Sports Medicine (WBOA) and exposure to thousands of cases, he uses internationally validated implants and technique-driven approaches to deliver consistent, long-lasting outcomes. For patients with failed prior replacements, his revision expertise is particularly sought after.',
    conditions: [
      'Severe osteoarthritis of hip, knee, shoulder or elbow',
      'Avascular necrosis (bone death due to poor blood supply)',
      'Rheumatoid and inflammatory arthritis',
      'Post-traumatic arthritis following old fractures',
      'Failed or worn-out prior joint replacements (revision)',
      'Hip dysplasia and developmental deformities',
    ],
    benefits: [
      'Fellowship-trained in adult joint reconstruction',
      'Both primary and complex revision procedures',
      'Modern implants with 15–20+ year lifespan',
      'Rapid rehabilitation — walking within 24–48 hours post knee/hip replacement',
      'Structured physiotherapy protocol included',
    ],
    recovery: 'Most patients walk with support within 1–2 days after knee or hip replacement. Return to independent walking in 4–6 weeks. Full functional recovery takes 3–6 months with physiotherapy.',
  },
  {
    id: 'arthroscopy',
    title: 'Arthroscopic Knee & Shoulder Surgery',
    subtitle: 'Minimally Invasive Joint Surgery',
    description: 'Arthroscopy is a keyhole surgical technique that allows Dr. Mukherjee to diagnose and treat joint problems through tiny incisions using a camera and specialised instruments. This means significantly less pain, minimal scarring, and faster recovery compared to open surgery. Dr. Mukherjee performs arthroscopic procedures on both the knee and shoulder — from meniscus repairs and ACL reconstructions to rotator cuff repairs and shoulder stabilisations.',
    conditions: [
      'Meniscus tears (medial and lateral)',
      'ACL and PCL ligament injuries',
      'Knee cartilage damage and chondral lesions',
      'Rotator cuff tears (partial and complete)',
      'Shoulder impingement and bursitis',
      'Shoulder instability and recurrent dislocations',
    ],
    benefits: [
      'Keyhole surgery — 2–3 tiny incisions only',
      'Significantly less post-operative pain',
      'Day procedure or 1-night stay in most cases',
      'Faster return to work and daily activities',
      'Sports-specific rehabilitation protocols for athletes',
    ],
    recovery: 'Meniscus repair: 4–6 weeks to return to light activity. ACL reconstruction: 6–9 months before full sport return. Rotator cuff: 4–6 months depending on tear size.',
  },
  {
    id: 'sports',
    title: 'Ligament Injuries & Sports Medicine',
    subtitle: 'Get Back to the Sport You Love',
    description: 'Dr. Mukherjee holds a Fellowship in Adult Joint Reconstruction and Sports Medicine (WBOA) and understands what it means for an active person — whether a professional athlete or a weekend runner — to be sidelined by an injury. His sports medicine practice covers the full spectrum from acute ligament injuries to chronic overuse conditions, with a focus on getting patients back to activity as safely and quickly as possible.',
    conditions: [
      'ACL, PCL, MCL and LCL tears',
      'Meniscal injuries in athletes',
      'Ankle ligament sprains and chronic instability',
      'Tennis elbow and golfer\'s elbow (tendinopathy)',
      'Patellofemoral pain syndrome',
      'Muscle and tendon injuries',
    ],
    benefits: [
      'Fellowship-trained sports medicine expertise',
      'Conservative and surgical options discussed openly',
      'Criteria-based return-to-sport clearance',
      'Sports-specific rehabilitation plans',
      'Injury prevention advice and load management',
    ],
    recovery: 'Ankle sprains: 4–8 weeks. Meniscal repairs: 4–6 weeks. ACL reconstruction: 6–9 months. Tendinopathy: 8–12 weeks with structured rehab.',
  },
  {
    id: 'spine',
    title: 'Degenerative & Traumatic Spine Surgery',
    subtitle: 'Precise Spine Care for Lasting Relief',
    description: 'Dr. Mukherjee completed his Fellowship in Spine Surgeries (SSWB) and manages a wide range of degenerative and trauma-related spinal conditions. His approach is always conservative-first — surgery is recommended only when non-surgical treatments have failed or when there is a neurological emergency. When surgery is indicated, he uses minimally invasive techniques wherever possible to reduce muscle damage and speed recovery.',
    conditions: [
      'Lumbar disc herniation with sciatica',
      'Degenerative disc disease and spondylosis',
      'Spinal stenosis (narrowing of the spinal canal)',
      'Spondylolisthesis (vertebral slippage)',
      'Traumatic spine fractures',
      'Ankylosing spondylitis and inflammatory spinal conditions',
    ],
    benefits: [
      'Fellowship training in spine surgery (SSWB)',
      'Conservative treatment prioritised wherever possible',
      'Minimally invasive surgical options',
      'Shorter hospital stays and faster recovery',
      'Comprehensive post-op physiotherapy guidance',
    ],
    recovery: 'Microdiscectomy: return to light activity in 2–4 weeks. Spinal fusion: 3–6 months for full recovery. All patients receive a structured physiotherapy programme.',
  },
  {
    id: 'arthritis',
    title: 'Osteoarthritis, Osteoporosis & Rheumatoid Arthritis',
    subtitle: 'Long-Term Management of Bone & Joint Conditions',
    description: 'Arthritis and metabolic bone diseases like osteoporosis affect millions of Indians, particularly women over 50. Dr. Mukherjee offers a comprehensive, staged management approach — starting with lifestyle advice, physiotherapy, and medications, progressing to injections and eventually surgery if required. He also manages conditions like Ankylosing Spondylitis, Tendinopathy, and Back pain as part of his musculoskeletal practice.',
    conditions: [
      'Osteoarthritis of knee, hip, shoulder',
      'Osteoporosis and fragility fractures',
      'Rheumatoid arthritis — medical and surgical management',
      'Ankylosing spondylitis',
      'Tendinopathy (shoulder, knee, heel)',
      'Back pain — mechanical and degenerative',
    ],
    benefits: [
      'Staged approach — non-surgical to surgical',
      'Personalised treatment plans based on severity',
      'Injections (steroids, PRP) for appropriate cases',
      'Surgical intervention when truly indicated',
      'Long-term follow-up and monitoring',
    ],
    recovery: 'Non-surgical management often shows improvement within 4–8 weeks. Surgical interventions follow procedure-specific timelines with structured rehabilitation.',
  },
]

export default function ServicesPage() {
  return (
    <main>
      <Header />
      
      <section className="pt-32 pb-16 bg-gradient-to-br from-muted via-background to-muted">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-medium uppercase tracking-wider text-secondary mb-3">
            Our Services
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Comprehensive Orthopedic Care
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            From complex trauma and joint replacement to spine surgery, arthroscopy, and sports medicine — 
            Dr. Soutrik Mukherjee offers a complete range of orthopedic care at Advanced Ortho and Spine Clinic, Lake Town.
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div 
                key={service.id}
                id={service.id}
                className="grid lg:grid-cols-2 gap-12 items-start"
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
                    <h3 className="font-semibold text-foreground mb-2">Recovery & Timeline</h3>
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
                    <h3 className="font-semibold text-foreground mb-4">Why Choose Dr. Mukherjee</h3>
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
