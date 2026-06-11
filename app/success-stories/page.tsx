import { Metadata } from 'next'
import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { CTASection } from '@/components/sections/cta-section'
import { Star, Quote, Play } from 'lucide-react'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Patient Success Stories | Dr. Soutrik Mukherjee',
  description: 'Read inspiring recovery stories from patients who have experienced successful orthopedic treatment with Dr. Soutrik Mukherjee.',
}

const testimonials = [
  {
    name: 'Rajesh Kumar',
    age: 58,
    location: 'Kolkata',
    procedure: 'Total Knee Replacement (Bilateral)',
    rating: 5,
    image: null,
    story: 'For over a decade, I struggled with severe knee pain from arthritis. Walking even short distances became a challenge. Dr. Mukherjee recommended bilateral knee replacement, and I was initially apprehensive about having both knees done. However, his confidence and detailed explanation of the procedure put me at ease. The surgery was successful, and within 3 months, I was walking without any support. Today, I can climb stairs, go for morning walks, and even play with my grandchildren. Dr. Mukherjee and his team have given me a new lease on life.',
    highlight: 'Back to walking without support in 3 months',
  },
  {
    name: 'Priya Sharma',
    age: 45,
    location: 'Howrah',
    procedure: 'Minimally Invasive Spine Surgery',
    rating: 5,
    image: null,
    story: 'I suffered from chronic back pain for 5 years due to a herniated disc. The pain had started affecting my work and daily life. After trying various treatments without success, I consulted Dr. Mukherjee. He recommended minimally invasive spine surgery after thorough evaluation. The surgery was done through a small incision, and I was amazed at how quickly I recovered. Within 2 weeks, I was back at work. The pain that had plagued me for years was finally gone. I am forever grateful to Dr. Mukherjee for his expertise and care.',
    highlight: 'Back to work within 2 weeks',
  },
  {
    name: 'Amit Banerjee',
    age: 34,
    location: 'Salt Lake',
    procedure: 'ACL Reconstruction',
    rating: 5,
    image: null,
    story: 'As an amateur football player, my ACL tear was devastating. I thought my playing days were over. Dr. Mukherjee not only repaired my knee arthroscopically but also designed a comprehensive rehabilitation program. His sports medicine expertise was evident throughout my recovery. After 9 months of dedicated rehab, I was back on the football field. The knee feels as strong as ever, and I have returned to competitive play. Dr. Mukherjee understands athletes and their needs.',
    highlight: 'Returned to competitive football after 9 months',
  },
  {
    name: 'Sunita Das',
    age: 62,
    location: 'Ballygunge',
    procedure: 'Hip Replacement',
    rating: 5,
    image: null,
    story: 'My mother had been suffering from severe hip pain due to avascular necrosis. She could barely walk and was completely dependent on us for daily activities. Dr. Mukherjee performed a total hip replacement using modern techniques. The surgery went smoothly, and what surprised us was how quickly she recovered. Within a month, she was walking independently. The transformation has been remarkable. She is now active and independent again. We cannot thank Dr. Mukherjee enough for restoring her mobility and dignity.',
    highlight: 'Walking independently within a month',
  },
  {
    name: 'Debashis Roy',
    age: 52,
    location: 'Dum Dum',
    procedure: 'Revision Knee Replacement',
    rating: 5,
    image: null,
    story: 'I had undergone knee replacement elsewhere 12 years ago, and the implant had loosened, causing significant pain. Revision surgery is complex, and I was worried. Dr. Mukherjee took the time to explain everything and assured me of his experience with revision cases. The surgery required special implants and bone grafting, but he handled it expertly. Six months post-surgery, I am pain-free and mobile. His skill in handling complex cases is exceptional.',
    highlight: 'Successfully managed complex revision surgery',
  },
  {
    name: 'Ananya Ghosh',
    age: 28,
    location: 'New Town',
    procedure: 'Sports Injury - Meniscus Repair',
    rating: 5,
    image: null,
    story: 'I injured my knee while running a marathon and was diagnosed with a meniscus tear. As a fitness enthusiast, I was anxious about returning to my active lifestyle. Dr. Mukherjee performed an arthroscopic meniscus repair, preserving my meniscus instead of removing it. The recovery was guided by a structured rehab program. Within 4 months, I was back to running. His approach of preserving the meniscus has given me confidence that my knee will remain healthy for years.',
    highlight: 'Back to running marathons in 4 months',
  },
]

const videoTestimonials = [
  {
    name: 'Ashok Chatterjee',
    procedure: 'Knee Replacement',
    thumbnail: null,
  },
  {
    name: 'Meera Sinha',
    procedure: 'Spine Surgery',
    thumbnail: null,
  },
  {
    name: 'Suresh Agarwal',
    procedure: 'Hip Replacement',
    thumbnail: null,
  },
]

export default function SuccessStoriesPage() {
  return (
    <main>
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-muted via-background to-muted">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-medium uppercase tracking-wider text-secondary mb-3">
            Patient Success Stories
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Real Patients, Real Results
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Every successful surgery tells a story of hope, trust, and recovery. 
            Read inspiring testimonials from patients who have regained mobility 
            and returned to pain-free living.
          </p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-background border border-border rounded-2xl p-8 hover:border-primary/30 hover:shadow-lg transition-all"
              >
                <div className="flex flex-col lg:flex-row gap-8">
                  {/* Patient Info */}
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
                          {testimonial.age} years, {testimonial.location}
                        </p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm font-medium text-primary">{testimonial.procedure}</p>
                      <div className="flex items-center gap-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-secondary text-secondary" />
                        ))}
                      </div>
                    </div>
                    <div className="mt-4 p-3 bg-secondary/10 rounded-lg">
                      <p className="text-xs text-muted-foreground mb-1">Highlight</p>
                      <p className="text-sm font-medium text-secondary">{testimonial.highlight}</p>
                    </div>
                  </div>

                  {/* Story */}
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

      {/* Video Testimonials */}
      <section className="py-20 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-medium uppercase tracking-wider text-secondary mb-3">
              Video Testimonials
            </p>
            <h2 className="font-serif text-3xl font-bold text-foreground">
              Watch Patient Stories
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {videoTestimonials.map((video, index) => (
              <div 
                key={index}
                className="bg-background rounded-xl overflow-hidden border border-border hover:border-primary/30 hover:shadow-md transition-all"
              >
                <div className="aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 relative flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-primary/80 flex items-center justify-center cursor-pointer hover:bg-primary transition-colors">
                    <Play className="h-6 w-6 text-primary-foreground ml-1" />
                  </div>
                </div>
                <div className="p-4">
                  <p className="font-medium text-foreground">{video.name}</p>
                  <p className="text-sm text-muted-foreground">{video.procedure}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Share Your Story */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-primary/5 border border-primary/10 rounded-2xl p-8 lg:p-12 text-center">
            <h2 className="font-serif text-2xl lg:text-3xl font-bold text-foreground mb-4">
              Share Your Success Story
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Have you been treated by Dr. Mukherjee? We would love to hear about your 
              experience. Your story could inspire others who are on their own healing journey.
            </p>
            <Button asChild size="lg">
              <Link href="/contact">Share Your Story</Link>
            </Button>
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </main>
  )
}
