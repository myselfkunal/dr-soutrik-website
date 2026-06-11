"use client"

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

const faqs = [
  {
    question: 'When should I consider knee replacement surgery?',
    answer: 'You may need to consider knee replacement if you experience severe knee pain that limits daily activities, pain that persists even at rest, chronic knee inflammation, knee deformity, or failure to improve with conservative treatments like medication and physical therapy.',
  },
  {
    question: 'How long does recovery take after joint replacement?',
    answer: 'Recovery varies by individual, but most patients can walk with support within 1-2 days after surgery. Full recovery typically takes 3-6 months. Physical therapy is essential for optimal recovery, and most patients return to normal activities within 2-3 months.',
  },
  {
    question: 'Can back pain be treated without surgery?',
    answer: 'Yes, many cases of back pain can be effectively treated without surgery. Conservative treatments include physical therapy, medications, lifestyle modifications, and injections. Surgery is typically recommended only when conservative treatments fail to provide relief.',
  },
  {
    question: 'Is joint replacement surgery safe?',
    answer: 'Joint replacement is one of the most successful surgical procedures. Modern techniques and implants have significantly improved outcomes. However, like any surgery, it carries some risks. Dr. Mukherjee will discuss all potential risks and benefits during your consultation.',
  },
  {
    question: 'What happens during the first consultation?',
    answer: 'During your first visit, Dr. Mukherjee will review your medical history, perform a physical examination, review any imaging studies, discuss your symptoms and concerns, and recommend a personalized treatment plan. Feel free to ask any questions you may have.',
  },
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="py-20 lg:py-28 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <div>
            <p className="text-sm font-medium uppercase tracking-wider text-secondary mb-3">
              Frequently Asked Questions
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Common Questions About Orthopedic Care
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Find answers to frequently asked questions about orthopedic conditions, 
              treatments, and what to expect during your care journey.
            </p>
            <Button asChild>
              <Link href="/faq">View All FAQs</Link>
            </Button>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="bg-background rounded-xl border border-border overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="font-medium text-foreground pr-4">{faq.question}</span>
                  <ChevronDown 
                    className={`h-5 w-5 flex-shrink-0 text-muted-foreground transition-transform ${
                      openIndex === index ? 'rotate-180' : ''
                    }`} 
                  />
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-6">
                    <p className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
