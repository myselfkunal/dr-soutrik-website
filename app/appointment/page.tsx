"use client"

import { useState } from 'react'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Calendar, Clock, MapPin, Phone, Mail, FileText, AlertCircle, CheckCircle, Loader2 } from 'lucide-react'

const treatmentTypes = [
  'Knee Pain / Knee Replacement',
  'Hip Pain / Hip Replacement',
  'Shoulder / Elbow Replacement',
  'Back Pain / Spine Issues',
  'Sports Injury / Ligament Tear',
  'Arthritis (Osteo / Rheumatoid)',
  'Fracture / Trauma Surgery',
  'Arthroscopic Surgery',
  'Osteoporosis',
  'General Consultation',
  'Second Opinion',
  'Post-Surgery Follow-up',
  'Other',
]

const timeSlots = [
  '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
  '12:00 PM', '12:30 PM', '02:00 PM', '02:30 PM',
  '03:00 PM', '03:30 PM', '04:00 PM', '04:30 PM',
  '05:00 PM', '05:30 PM', '06:00 PM', '06:30 PM',
]

export default function AppointmentPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    time: '',
    treatment: '',
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
          access_key: 'c73d839e-cd0b-442b-b0e0-8a0912126c89', // ← replace this
          subject: `New Appointment Request – ${formData.name} (${formData.treatment})`,
          from_name: formData.name,
          replyto: formData.email || formData.phone,
          name: formData.name,
          phone: formData.phone,
          email: formData.email || 'Not provided',
          preferred_date: formData.date,
          preferred_time: formData.time,
          treatment_type: formData.treatment,
          message: formData.message || 'No additional notes',
        }),
      })

      const result = await response.json()

      if (result.success) {
        setSubmitted(true)
      } else {
        setError('Something went wrong. Please call us directly at +91 98747 31994.')
      }
    } catch {
      setError('Network error. Please call us directly at +91 98747 31994.')
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  // Minimum date = today
  const today = new Date().toISOString().split('T')[0]

  return (
    <main>
      <Header />

      <section className="pt-32 pb-16 bg-gradient-to-br from-muted via-background to-muted">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-medium uppercase tracking-wider text-secondary mb-3">
            Book Appointment
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Schedule Your Consultation
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Fill out the form below and our team will confirm your appointment within 24 hours. 
            For urgent cases, please call us directly.
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">

            {/* Form */}
            <div className="lg:col-span-2">
              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-2xl p-10 text-center">
                  <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                  <h2 className="font-serif text-2xl font-bold text-foreground mb-3">
                    Request Received!
                  </h2>
                  <p className="text-muted-foreground mb-2">
                    Thank you, <strong>{formData.name}</strong>. Your appointment request has been sent to Dr. Soutrik Mukherjee&apos;s clinic.
                  </p>
                  <p className="text-muted-foreground mb-8">
                    Our team will call you on <strong>{formData.phone}</strong> within 24 hours to confirm your slot.
                  </p>
                  <Button onClick={() => { setSubmitted(false); setFormData({ name: '', phone: '', email: '', date: '', time: '', treatment: '', message: '' }) }}>
                    Book Another Appointment
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">

                  {/* Name + Phone */}
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
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20"
                        placeholder="+91 XXXXX XXXXX"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email Address <span className="text-muted-foreground font-normal">(Optional)</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20"
                      placeholder="your@email.com"
                    />
                  </div>

                  {/* Date + Time */}
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Preferred Date *
                      </label>
                      <input
                        type="date"
                        name="date"
                        required
                        min={today}
                        value={formData.date}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Preferred Time *
                      </label>
                      <select
                        name="time"
                        required
                        value={formData.time}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20"
                      >
                        <option value="">Select a time slot</option>
                        {timeSlots.map((slot) => (
                          <option key={slot} value={slot}>{slot}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Treatment Type */}
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Reason for Visit *
                    </label>
                    <select
                      name="treatment"
                      required
                      value={formData.treatment}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20"
                    >
                      <option value="">Select type of concern</option>
                      {treatmentTypes.map((type) => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Brief Description <span className="text-muted-foreground font-normal">(optional)</span>
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 resize-none"
                      placeholder="Describe your symptoms, how long you've had them, any previous treatment..."
                    />
                  </div>

                  {/* Error */}
                  {error && (
                    <div className="flex items-center gap-3 p-4 bg-destructive/5 border border-destructive/20 rounded-lg text-sm text-destructive">
                      <AlertCircle className="h-4 w-4 flex-shrink-0" />
                      {error}
                    </div>
                  )}

                  <Button type="submit" size="lg" className="w-full sm:w-auto" disabled={loading}>
                    {loading ? (
                      <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                        Sending Request...
                      </>
                    ) : (
                      <>
                        <Calendar className="mr-2 h-5 w-5" />
                        Request Appointment
                      </>
                    )}
                  </Button>

                  <p className="text-xs text-muted-foreground">
                    * By submitting this form you consent to being contacted by the clinic to confirm your appointment.
                  </p>
                </form>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-muted/50 rounded-2xl p-6">
                <h3 className="font-serif text-lg font-semibold text-foreground mb-4">
                  Clinic Information
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-foreground text-sm">Location</p>
                      <p className="text-sm text-muted-foreground mt-0.5">
                        Advanced Ortho and Spine Clinic<br />
                        P 786, Lake Town Block A<br />
                        Kolkata – 700 089<br />
                        <span className="text-xs">Behind Jaya Cinema, Opp. IDBI Bank</span>
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-foreground text-sm">Clinic Hours</p>
                      <p className="text-sm text-muted-foreground mt-0.5">
                        Mon – Sat: 10:00 AM – 7:00 PM<br />
                        Sunday: By Appointment Only
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-foreground text-sm">Phone</p>
                      <div className="space-y-1 mt-0.5">
                        {['+91 98747 31994', '+91 93041 53453', '+91 98042 70742'].map((n, i) => (
                          <a key={i} href={`tel:+91${n.replace(/\s/g, '').slice(3)}`} className="block text-sm text-primary hover:underline">
                            {n}
                          </a>
                        ))}
                      </div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-foreground text-sm">Email</p>
                      <a href="mailto:kunalshawip@gmail.com" className="text-sm text-primary hover:underline break-all mt-0.5 block">
                        kunalshawip@gmail.com
                      </a>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-background border border-border rounded-2xl p-6">
                <h3 className="font-serif text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                  <FileText className="h-5 w-5 text-primary" />
                  What to Bring
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {[
                    'Previous medical records or discharge summary',
                    'Recent X-rays, MRI or CT scan reports',
                    'List of current medications',
                    'Valid ID proof (Aadhaar / PAN)',
                    'Insurance card (if applicable)',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-destructive/5 border border-destructive/20 rounded-2xl p-6">
                <h3 className="font-serif text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
                  <AlertCircle className="h-5 w-5 text-destructive" />
                  Emergency Cases
                </h3>
                <p className="text-sm text-muted-foreground">
                  For fractures or emergency orthopedic injuries, please visit the nearest 
                  hospital emergency or call us immediately at{' '}
                  <a href="tel:+919874731994" className="text-primary font-medium hover:underline">
                    +91 98747 31994
                  </a>{' '}
                  for guidance.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
