import { Metadata } from 'next'
import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { CTASection } from '@/components/sections/cta-section'
import { Star, Quote, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Patient Success Stories | Dr. Soutrik Mukherjee – Kolkata',
  description: 'Read real recovery stories from patients treated by Dr. Soutrik Mukherjee at Advanced Ortho and Spine Clinic, Lake Town, Kolkata.',
}

const testimonials = [
  {
    name: 'Rajesh Kumar',
    age: 58,
    location: 'Kolkata',
    procedure: 'Bilateral Knee Replacement',
    rating: 5,
    story: 'For over ten years I struggled with severe knee pain from arthritis. Walking even short distances had become a challenge. Dr. Mukherjee recommended bilateral knee replacement and took the time to explain the entire procedure in detail, which put me completely at ease. Within three months of surgery I was walking without any support. Today I can climb stairs, take morning walks, and play with my grandchildren without pain. He has truly given me a new life.',
    highlight: 'Walking without support in 3 months',
  },
  {
    name: 'Priya Sharma',
    age: 45,
    location: 'Howrah',
    procedure: 'Spine Surgery – Herniated Disc',
    rating: 5,
    story: 'I suffered from chronic back pain for five years due to a herniated disc that had started affecting my work and sleep. After consulting Dr. Mukherjee, he clearly explained why surgery was the right choice and what to expect. The surgery was done through a small incision and I was amazed at how quickly I recovered — back at my desk within two weeks. The pain that had plagued me for years was completely gone. His patience in answering all my questions made a big difference.',
    highlight: 'Back to work within 2 weeks',
  },
  {
    name: 'Amit Banerjee',
    age: 34,
    location: 'Salt Lake',
    procedure: 'ACL Reconstruction',
    rating: 5,
    story: 'As an amateur footballer, an ACL tear felt like the end of my playing days. Dr. Mukherjee not only performed the arthroscopic reconstruction but also designed a detailed rehabilitation plan specific to my sport. His sports medicine background was evident throughout. After nine months of dedicated rehab, I was back on the field — stronger than before. He understands what being active means to a person and genuinely works to get you there.',
    highlight: 'Back to competitive football in 9 months',
  },
  {
    name: 'Sunita Das',
    age: 62,
    location: 'Ballygunge',
    procedure: 'Total Hip Replacement',
    rating: 5,
    story: 'My mother had severe hip pain from avascular necrosis and could barely walk on her own. We were worried about surgery at her age, but Dr. Mukherjee was very reassuring and thorough in his assessment. The surgery went smoothly and within a month she was walking independently — something we had not seen in years. The transformation has been remarkable. We are deeply grateful for his skill and the care shown by his entire team.',
    highlight: 'Walking independently within a month',
  },
  {
    name: 'Debashis Roy',
    age: 52,
    location: 'Dum Dum',
    procedure: 'Revision Knee Replacement',
    rating: 5,
    story: 'My original knee replacement done elsewhere twelve years ago had loosened and was causing significant pain. Revision surgery is complex and I was understandably anxious. Dr. Mukherjee explained exactly what was needed, what the risks were, and why he was confident about the outcome. He handled the revision with special implants and bone grafting. Six months later I am completely pain-free. His expertise in handling complex revision cases is exceptional.',
    highlight: 'Complex revision surgery — pain-free in 6 months',
  },
  {
    name: 'Ananya Ghosh',
    age: 28,
    location: 'New Town',
    procedure: 'Arthroscopic Meniscus Repair',
    rating: 5,
    story: 'I injured my knee during a half-marathon and was diagnosed with a meniscus tear. As someone who runs regularly, I was anxious about my future activity levels. Dr. Mukherjee performed an arthroscopic meniscus repair — preserving it rather than removing it — which he said would protect my knee long-term. The structured rehab programme he outlined was very clear. Within four months I was back to running. I am grateful he chose the more conservative, joint-preserving approach.',
    highlight: 'Back to running in 4 months',
  },
]

export default function SuccessStoriesPage() {
  return (
    <main>
      <Header />
      
      <section className="pt-32 pb-16 bg-gradient-to-br from-muted via-background to-muted">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-medium uppercase tracking-wider text-secondary mb-3">
            Patient Success Stories
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Real Patients. Real Recoveries.
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            From bilateral knee replacements to ACL reconstructions and complex spine surgeries — 
            read how patients from across Kolkata regained mobility and returned to the lives they love.
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-background border border-border rounded-2xl p-8 hover:border-primary/30 hover:shadow-lg transition-all"
              >
                <div className="flex flex-col lg:flex-row gap-8">
                  <div className="lg:w-64 flex-shrink-0">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                        <span className="text-xl font-serif font-bold text-primary">
                          {testimonial.name.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {testimonial.age} yrs · {testimonial.location}
                        </p>
                      </div>
                    </div>
                    <p className="text-sm font-medium text-primary mb-2">{testimonial.procedure}</p>
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-secondary text-secondary" />
                      ))}
                    </div>
                    <div className="p-3 bg-secondary/10 rounded-lg">
                      <p className="text-xs text-muted-foreground mb-1">Outcome</p>
                      <p className="text-sm font-medium text-secondary">{testimonial.highlight}</p>
                    </div>
                  </div>

                  <div className="flex-1">
                    <Quote className="h-10 w-10 text-primary/10 mb-4" />
                    <p className="text-muted-foreground leading-relaxed">
                      {testimonial.story}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-background border border-border rounded-2xl p-8 lg:p-12 text-center">
            <h2 className="font-serif text-2xl lg:text-3xl font-bold text-foreground mb-4">
              See More Reviews from Our Patients
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Dr. Mukherjee has helped hundreds of patients across Kolkata. 
              Read more reviews on his Google and Facebook pages, or share your own experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://www.facebook.com/orthodoc30"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                <ExternalLink className="h-4 w-4" />
                View Facebook Reviews
              </a>
              <Link 
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-border text-foreground hover:bg-muted transition-colors"
              >
                Share Your Story
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </main>
  )
}
