import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { HeroSection } from '@/components/sections/hero-section'
import { TrustIndicators } from '@/components/sections/trust-indicators'
import { TreatmentsSection } from '@/components/sections/treatments-section'
import { AboutPreview } from '@/components/sections/about-preview'
import { WhyChooseSection } from '@/components/sections/why-choose-section'
import { HospitalAffiliations } from '@/components/sections/hospital-affiliations'
import { InsuranceSection } from '@/components/sections/insurance-section'
import { TestimonialsSection } from '@/components/sections/testimonials-section'
import { PatientEducation } from '@/components/sections/patient-education'
import { FAQSection } from '@/components/sections/faq-section'
import { CTASection } from '@/components/sections/cta-section'

export default function HomePage() {
  return (
    <main>
      <Header />
      <HeroSection />
      <TrustIndicators />
      <TreatmentsSection />
      <AboutPreview />
      <WhyChooseSection />
      <HospitalAffiliations />
      <InsuranceSection />
      <TestimonialsSection />
      <PatientEducation />
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
  )
}
