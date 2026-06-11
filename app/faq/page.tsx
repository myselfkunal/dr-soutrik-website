"use client"

import { useState } from 'react'
import { Metadata } from 'next'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { CTASection } from '@/components/sections/cta-section'
import { ChevronDown, Search } from 'lucide-react'

const faqCategories = [
  { id: 'all', name: 'All Questions' },
  { id: 'knee', name: 'Knee Replacement' },
  { id: 'hip', name: 'Hip Replacement' },
  { id: 'spine', name: 'Spine Conditions' },
  { id: 'sports', name: 'Sports Injuries' },
  { id: 'general', name: 'General' },
]

const faqs = [
  {
    category: 'knee',
    question: 'When should I consider knee replacement surgery?',
    answer: 'Knee replacement may be recommended when you experience severe knee pain that limits daily activities like walking, climbing stairs, or getting up from a chair; pain that continues while resting or sleeping; chronic knee inflammation that does not improve with rest or medications; knee deformity (bowing in or out); and failure to achieve adequate relief from conservative treatments like physical therapy, injections, or medications.',
  },
  {
    category: 'knee',
    question: 'How long does a knee replacement last?',
    answer: 'Modern knee replacements are designed to last 15-20 years or more in most patients. The longevity depends on factors such as your activity level, body weight, and overall health. With proper care and avoiding high-impact activities, many implants last even longer. Regular follow-ups help monitor the implant and address any issues early.',
  },
  {
    category: 'knee',
    question: 'Can I kneel after knee replacement?',
    answer: 'While kneeling is technically possible after knee replacement, many patients find it uncomfortable due to numbness around the incision or the feeling of the implant. Most patients can kneel on soft surfaces with proper technique. We recommend using knee pads if you need to kneel and avoiding prolonged kneeling when possible.',
  },
  {
    category: 'hip',
    question: 'What are the different approaches for hip replacement?',
    answer: 'There are several surgical approaches for hip replacement: Posterior approach (most common), Anterior approach (allows muscle-sparing technique), and Lateral approach. Dr. Mukherjee uses the approach best suited to your anatomy and condition. The anterior approach often allows faster recovery, but the best approach varies by patient.',
  },
  {
    category: 'hip',
    question: 'How soon can I walk after hip replacement?',
    answer: 'Most patients are able to stand and take their first steps with assistance on the day of surgery or the next day. By the time you leave the hospital (typically 2-3 days), you will be walking with a walker or crutches. Most patients transition to a cane within 2-4 weeks and walk independently within 4-6 weeks.',
  },
  {
    category: 'hip',
    question: 'Are there any activity restrictions after hip replacement?',
    answer: 'While hip replacement allows return to most activities, some precautions are recommended, especially in the first few months. Activities to avoid include high-impact sports (running, jumping), crossing legs, bending hip beyond 90 degrees (especially in early recovery), and heavy lifting. Low-impact activities like walking, swimming, cycling, and golf are generally safe and encouraged.',
  },
  {
    category: 'spine',
    question: 'Can back pain be treated without surgery?',
    answer: 'Yes, the majority of back pain cases can be effectively managed without surgery. Non-surgical treatments include physical therapy, medications, lifestyle modifications, weight management, ergonomic adjustments, steroid injections, and alternative therapies like acupuncture. Surgery is typically considered only when conservative treatments fail to provide relief after 6-12 weeks or if there are concerning symptoms like progressive weakness.',
  },
  {
    category: 'spine',
    question: 'What is minimally invasive spine surgery?',
    answer: 'Minimally invasive spine surgery (MISS) uses smaller incisions (often less than an inch) and specialized instruments to access the spine. Benefits include less muscle damage, reduced blood loss, shorter hospital stays, faster recovery, less post-operative pain, and smaller scars. Not all conditions are suitable for MISS, but Dr. Mukherjee uses these techniques whenever appropriate.',
  },
  {
    category: 'spine',
    question: 'How long is recovery after spine surgery?',
    answer: 'Recovery time varies by the type of procedure. For minimally invasive procedures like microdiscectomy, many patients return to light activities within 2-4 weeks. More complex procedures like spinal fusion may require 3-6 months for full recovery. Physical therapy is an important part of recovery, and return to work timing depends on the type of job.',
  },
  {
    category: 'sports',
    question: 'How soon can I return to sports after ACL surgery?',
    answer: 'Return to sports after ACL reconstruction typically takes 6-9 months, depending on the sport and your progress in rehabilitation. The timeline is based on achieving specific strength and functional milestones rather than just time since surgery. Dr. Mukherjee uses a criteria-based approach to clear athletes for return to sport, ensuring the knee is fully ready.',
  },
  {
    category: 'sports',
    question: 'Do all meniscus tears require surgery?',
    answer: 'No, not all meniscus tears need surgery. Small tears in the outer portion of the meniscus (which has better blood supply) may heal with rest and physical therapy. Surgery is typically recommended for tears that cause persistent symptoms like locking, catching, or significant pain, or large tears that are unlikely to heal on their own.',
  },
  {
    category: 'sports',
    question: 'What is the difference between a sprain and a strain?',
    answer: 'A sprain involves damage to ligaments (which connect bones to bones), while a strain involves damage to muscles or tendons (which connect muscles to bones). Sprains commonly affect ankles, knees, and wrists; strains often occur in the back, hamstrings, or shoulders. Both are graded by severity (Grade I-III) and treatment depends on the extent of injury.',
  },
  {
    category: 'general',
    question: 'What happens during the first consultation?',
    answer: 'During your first visit, Dr. Mukherjee will review your medical history and current symptoms, perform a thorough physical examination, review any imaging studies (X-rays, MRI, CT scans), discuss diagnosis and treatment options, answer all your questions, and develop a personalized treatment plan. Please bring your previous medical records and imaging studies if available.',
  },
  {
    category: 'general',
    question: 'Does Dr. Mukherjee accept insurance?',
    answer: 'Yes, we work with most major insurance providers and offer cashless hospitalization facilities at our affiliated hospitals. Our team assists with insurance paperwork and pre-authorization. Please contact our office with your insurance details, and we can verify coverage and explain any out-of-pocket costs before your visit.',
  },
  {
    category: 'general',
    question: 'What should I bring to my appointment?',
    answer: 'Please bring: a valid ID proof, insurance card (if applicable), list of current medications, previous medical records related to your condition, any imaging studies (X-rays, MRI scans) - if digital, bring on a CD/USB, referral letter (if required by insurance), and a list of questions you would like to ask.',
  },
  {
    category: 'general',
    question: 'How do I get a second opinion?',
    answer: 'We welcome patients seeking second opinions. Please bring all your medical records, imaging studies, and reports from previous consultations. Dr. Mukherjee will provide an honest assessment of your condition and treatment options. Second opinions are valuable for major decisions like surgery, and we encourage patients to be fully informed before proceeding.',
  },
  {
    category: 'general',
    question: 'What are the risks of orthopedic surgery?',
    answer: 'Like any surgery, orthopedic procedures carry some risks including infection, blood clots, nerve or blood vessel injury, anesthesia complications, implant complications, and stiffness or persistent pain. However, modern techniques have made these risks very low. Dr. Mukherjee will discuss specific risks related to your procedure and the steps taken to minimize them.',
  },
  {
    category: 'general',
    question: 'How can I prepare for surgery?',
    answer: 'Pre-surgery preparation includes: completing all pre-operative tests, stopping certain medications as directed, optimizing any chronic conditions (diabetes, blood pressure), quitting smoking (ideally 4-6 weeks before), attending pre-operative education sessions, arranging help at home for after surgery, and preparing your home (removing tripping hazards, setting up a recovery area). Our team will provide detailed instructions specific to your surgery.',
  },
]

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const [searchQuery, setSearchQuery] = useState('')

  const filteredFaqs = faqs.filter(faq => {
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <main>
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-muted via-background to-muted">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-medium uppercase tracking-wider text-secondary mb-3">
            FAQ
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-8">
            Find answers to common questions about orthopedic conditions, treatments, 
            recovery, and what to expect during your care journey.
          </p>
          
          {/* Search */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <input 
              type="text"
              placeholder="Search questions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-full border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-background border-b border-border sticky top-16 z-40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {faqCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category.id 
                    ? 'bg-primary text-primary-foreground' 
                    : 'bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ List */}
      <section className="py-16 bg-background">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {filteredFaqs.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No questions found matching your search.</p>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredFaqs.map((faq, index) => (
                <div 
                  key={index}
                  className="bg-background rounded-xl border border-border overflow-hidden hover:border-primary/30 transition-colors"
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full flex items-start justify-between p-6 text-left"
                  >
                    <span className="font-medium text-foreground pr-4">{faq.question}</span>
                    <ChevronDown 
                      className={`h-5 w-5 flex-shrink-0 text-muted-foreground transition-transform mt-0.5 ${
                        openIndex === index ? 'rotate-180' : ''
                      }`} 
                    />
                  </button>
                  {openIndex === index && (
                    <div className="px-6 pb-6">
                      <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-16 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
            Still Have Questions?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            If you could not find the answer you were looking for, feel free to contact us. 
            Our team is happy to help with any questions about your orthopedic care.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Contact Us
            </a>
            <a 
              href="/appointment"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-border text-foreground hover:bg-muted transition-colors"
            >
              Book Appointment
            </a>
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </main>
  )
}
