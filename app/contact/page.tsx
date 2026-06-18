"use client"

import { useState } from 'react'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { CTASection } from '@/components/sections/cta-section'
import { Button } from '@/components/ui/button'
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, Loader2, AlertCircle } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: 'c73d839e-cd0b-442b-b0e0-8a0912126c89',
          subject: `Website Enquiry – ${formData.subject} (from ${formData.name})`,
          from_name: formData.name,
          replyto: formData.email,
          name: formData.name,
          email: formData.email,
          phone: formData.phone || 'Not provided',
          subject_type: formData.subject,
          message: formData.message,
        }),
      })

      const result = await response.json()

      if (result.success) {
        setSubmitted(true)
      } else {
        setError('Something went wrong. Please call us at +91 98747 31994.')
      }
    } catch {
      setError('Network error. Please call us at +91 98747 31994.')
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <main>
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-muted via-background to-muted">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-medium uppercase tracking-wider text-secondary mb-3">
            Get in Touch
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Contact Us
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Have questions about orthopedic conditions or treatments? We are here to help. 
            Reach out to us through any of the channels below.
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-8">
                Contact Information
              </h2>
              
              <div className="space-y-6 mb-12">
                <div className="flex items-start gap-4 p-6 bg-muted/50 rounded-xl">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Clinic Address</h3>
                    <p className="text-muted-foreground">
                      Advanced Ortho and Spine Clinic<br />
                      P 786, Lake Town Block A<br />
                      Kolkata – 700 089<br />
                      <span className="text-sm">(Behind Jaya Cinema, Opp. IDBI Bank, Lake Town)</span>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-muted/50 rounded-xl">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Phone</h3>
                    <a href="tel:+919874731994" className="text-primary hover:underline block">
                      +91 98747 31994
                    </a>
                    <a href="tel:+919304153453" className="text-primary hover:underline block">
                      +91 93041 53453
                    </a>
                    <a href="tel:+919804270742" className="text-primary hover:underline block">
                      +91 98042 70742
                    </a>
                    <p className="text-sm text-muted-foreground mt-1">
                      For appointments and inquiries
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-muted/50 rounded-xl">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Email</h3>
                    <a href="mailto:drsoutrikmukherjee@gmail.com" className="text-primary hover:underline block">
                      drsoutrikmukherjee@gmail.com
                    </a>
                    <p className="text-sm text-muted-foreground mt-1">
                      We respond within 24 hours
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-muted/50 rounded-xl">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Clinic Hours</h3>
                    <div className="text-muted-foreground space-y-1">
                      <p>Monday - Saturday: 10:00 AM - 7:00 PM</p>
                      <p>Sunday: By Appointment Only</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Google Maps Embed */}
              <div className="rounded-xl overflow-hidden border border-border shadow-sm">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1038.2951468074923!2d88.40204657623457!3d22.60624644921985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e4412df76187fb%3A0x4904c51cbecd3022!2sDr.%20Soutrik%20Mukherjee%20-%20Best%20Orthopedic%2C%20Joint%20Replacement%20and%20Spine%20Surgeon%20in%20Kolkata.!5e0!3m2!1sen!2sin!4v1781233310014!5m2!1sen!2sin"
                  width="100%"
                  height="380"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Advanced Ortho and Spine Clinic – Dr. Soutrik Mukherjee, Lake Town, Kolkata"
                />
              </div>
              <a
                href="https://maps.google.com/?q=Dr.+Soutrik+Mukherjee+Lake+Town+Kolkata"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-2 text-sm text-primary hover:underline"
              >
                <MapPin className="h-4 w-4" />
                Open in Google Maps
              </a>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-8">
                Send Us a Message
              </h2>
              
              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
                  <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                  <h3 className="font-serif text-xl font-bold text-foreground mb-2">
                    Message Sent Successfully
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Thank you for reaching out. We will get back to you within 24 hours.
                  </p>
                  <Button onClick={() => setSubmitted(false)}>
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20"
                        placeholder="+91 98747 31994"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Subject *
                      </label>
                      <select
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20"
                      >
                        <option value="">Select a subject</option>
                        <option value="general">General Inquiry</option>
                        <option value="appointment">Appointment Query</option>
                        <option value="insurance">Insurance Question</option>
                        <option value="feedback">Feedback</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 resize-none"
                      placeholder="How can we help you?"
                    />
                  </div>

                  <Button type="submit" size="lg">
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Directions */}
      <section className="py-16 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl font-bold text-foreground mb-8 text-center">
            How to Reach Us
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="bg-background rounded-xl p-6 text-center">
              <h3 className="font-semibold text-foreground mb-2">By Metro</h3>
              <p className="text-sm text-muted-foreground">
                Nearest Metro Station: Noapara (Orange Line) or Shyambazar<br />
                Auto/cab from station to Lake Town Block A
              </p>
            </div>
            <div className="bg-background rounded-xl p-6 text-center">
              <h3 className="font-semibold text-foreground mb-2">By Car</h3>
              <p className="text-sm text-muted-foreground">
                Available near the clinic on Lake Town Block A<br />
                Behind Jaya Cinema, opposite IDBI Bank
              </p>
            </div>
            <div className="bg-background rounded-xl p-6 text-center">
              <h3 className="font-semibold text-foreground mb-2">By Bus</h3>
              <p className="text-sm text-muted-foreground">
                Buses from Ultadanga, Dumdum, Shyambazar<br />
                Alight at Lake Town crossing
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </main>
  )
}
