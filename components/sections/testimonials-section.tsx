"use client"

import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { Button } from '@/components/ui/button'

const testimonials = [
  {
    name: 'Rajesh Kumar',
    age: 58,
    procedure: 'Total Knee Replacement',
    rating: 5,
    content: 'After years of struggling with knee pain from arthritis, Dr. Mukherjee performed my total knee replacement. The recovery was smoother than I expected, and now I can walk pain-free. His caring approach made all the difference.',
  },
  {
    name: 'Priya Sharma',
    age: 45,
    procedure: 'Spine Surgery',
    rating: 5,
    content: 'I suffered from chronic back pain for over 5 years. Dr. Mukherjee\'s minimally invasive spine surgery changed my life. The pain is gone, and I\'m back to my normal activities. I highly recommend him to anyone with spine problems.',
  },
  {
    name: 'Amit Banerjee',
    age: 34,
    procedure: 'ACL Reconstruction',
    rating: 5,
    content: 'As a sports enthusiast, my ACL injury was devastating. Dr. Mukherjee not only repaired my knee but also guided me through rehabilitation. I\'m now back to playing football. His expertise in sports injuries is exceptional.',
  },
  {
    name: 'Sunita Das',
    age: 62,
    procedure: 'Hip Replacement',
    rating: 5,
    content: 'Dr. Mukherjee performed my mother\'s hip replacement surgery. His team was incredibly supportive throughout the process. The surgery was successful, and she recovered much faster than we anticipated.',
  },
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 lg:py-28 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-medium uppercase tracking-wider text-secondary mb-3">
            Patient Stories
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4">
            What Our Patients Say
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Real stories from real patients who have experienced the difference of quality 
            orthopedic care and compassionate treatment.
          </p>
        </div>

        {/* Desktop view - grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-background rounded-2xl p-6 border border-border hover:border-primary/30 hover:shadow-lg transition-all"
            >
              <Quote className="h-8 w-8 text-primary/20 mb-4" />
              <p className="text-muted-foreground text-sm leading-relaxed mb-6 line-clamp-5">
                {testimonial.content}
              </p>
              <div className="flex items-center gap-1 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-secondary text-secondary" />
                ))}
              </div>
              <p className="font-semibold text-foreground">{testimonial.name}</p>
              <p className="text-sm text-muted-foreground">
                {testimonial.procedure}
              </p>
            </div>
          ))}
        </div>

        {/* Mobile view - carousel */}
        <div className="md:hidden">
          <div className="bg-background rounded-2xl p-6 border border-border mb-6">
            <Quote className="h-8 w-8 text-primary/20 mb-4" />
            <p className="text-muted-foreground leading-relaxed mb-6">
              {testimonials[currentIndex].content}
            </p>
            <div className="flex items-center gap-1 mb-3">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-secondary text-secondary" />
              ))}
            </div>
            <p className="font-semibold text-foreground">{testimonials[currentIndex].name}</p>
            <p className="text-sm text-muted-foreground">
              {testimonials[currentIndex].procedure}
            </p>
          </div>
          
          <div className="flex items-center justify-center gap-4">
            <button 
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-muted hover:bg-primary/10 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-primary' : 'bg-muted-foreground/30'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <button 
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-muted hover:bg-primary/10 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="text-center mt-12">
          <Button asChild variant="outline" size="lg">
            <Link href="/success-stories">
              Read More Success Stories
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
