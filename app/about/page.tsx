import { Metadata } from 'next'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { CTASection } from '@/components/sections/cta-section'
import { Award, GraduationCap, Briefcase, Heart, Target, BookOpen } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Dr. Soutrik Mukherjee | Orthopedic Surgeon in Kolkata',
  description: 'Learn about Dr. Soutrik Mukherjee, a leading Orthopedic, Joint Replacement & Spine Surgeon in Kolkata with extensive experience in musculoskeletal care.',
}

const qualifications = [
  'MBBS – West Bengal University of Health Sciences (WBUHS)',
  'MS (Orthopaedics) – WBUHS',
  'Fellowship in Spine Surgeries – SSWB',
  'Fellowship in Pelvi-Acetabular Surgery – Ganga Hospital, Coimbatore',
  'Fellowship in Adult Joint Reconstruction & Sports Medicine – WBOA',
  'AO Masters',
]

const memberships = [
  'West Bengal Orthopaedic Association (WBOA)',
  'Indian Orthopaedic Association (IOA)',
  'AO Foundation – AO Masters',
  'SICOT – International Society of Orthopaedic Surgery and Traumatology',
  'Spine Surgery Working Group (SSWB)',
]

const awards = [
  { year: '2018', title: 'Best PG Paper Award – Jharkhand State Orthopaedic Conference' },
  { year: '2019', title: 'Winner of PG Quiz – West Bengal State Orthopaedic Conference' },
  { year: '2019', title: 'First Runner Up in PG Paper Award – West Bengal State Orthopaedic Conference' },
  { year: '2019', title: 'Winner – EAST ZONE Finals, Torrent Young Scholar Award (TYSA) in Orthopaedics' },
  { year: '2019', title: 'First Runner Up – NATIONAL Finals, Torrent Young Scholar Award (TYSA) in Orthopaedics' },
  { year: '2020', title: 'Exchange Fellow – West Bengal Orthopaedic Association (WBOA)' },
  { year: '2020', title: 'Best Paper Award – Foot & Ankle Session, MIDCON' },
  { year: '2023', title: 'Invited Speaker – 7th International Conference in Orthopaedics, Rome' },
  { year: 'ongoing', title: 'Invited Faculty – Hip Symposia across India (complex primary & revision hip replacements)' },
  { year: 'ongoing', title: 'Faculty – Arthroplasty Sessions at National Symposium and SICOT' },
  { year: '2024', title: 'Speaker – Siliguri Trauma Conference (distal femur fractures & novel surgical techniques)' },
]

const specialInterests = [
  'Complex Trauma Surgery',
  'Primary & Revision Hip, Knee, Shoulder & Elbow Replacement',
  'Arthroscopic Knee & Shoulder Surgery',
  'Ligament Injury & Sports Medicine',
  'Degenerative & Traumatic Spine Surgery',
  'Treatment for Osteoarthritis, Osteoporosis & Rheumatoid Arthritis',
]

export default function AboutPage() {
  return (
    <main>
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-muted via-background to-muted">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm font-medium uppercase tracking-wider text-secondary mb-3">
                About the Doctor
              </p>
              <h1 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mb-6">
                Dr. Soutrik Mukherjee
              </h1>
              <p className="text-xl text-primary font-medium mb-6">
                MS (Ortho) | Fellowships in Spine, Joint Reconstruction & Sports Medicine | AO Masters
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Dr. Soutrik Mukherjee is a distinguished orthopedic surgeon with over 10 years of 
                experience, specialising in joint replacement, spine surgery, complex trauma, and 
                sports medicine. He has performed over 3,000 procedures and runs the Advanced Ortho 
                and Spine Clinic in Lake Town, Kolkata, where he combines advanced surgical techniques 
                with personalised, compassionate care.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                A winner of multiple state and national academic awards — including the Torrent Young 
                Scholar Award and Best Paper recognitions — Dr. Mukherjee has been invited as a speaker 
                at the 7th International Conference in Orthopaedics in Rome and as a faculty at hip 
                symposia across India. His philosophy is simple: treat every patient the way you would 
                treat your own family.
              </p>
            </div>
            
            <div className="relative">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-40 h-40 mx-auto rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-4">
                      <svg className="w-20 h-20 text-primary/40" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                      </svg>
                    </div>
                    <p className="text-sm text-muted-foreground">Professional Portrait</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Briefcase className="h-6 w-6 text-primary" />
              </div>
              <h2 className="font-serif text-3xl font-bold text-foreground">
                Professional Journey
              </h2>
            </div>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p>
                Dr. Mukherjee&apos;s journey in orthopedic surgery spans over a decade of rigorous 
                training and hands-on clinical practice. After completing his MBBS and MS 
                in Orthopaedics from West Bengal University of Health Sciences, he pursued 
                multiple advanced fellowships to sharpen his expertise across different subspecialities.
              </p>
              <p>
                His Fellowship in Spine Surgeries (SSWB) and Fellowship in Pelvi-Acetabular Surgery 
                at the renowned Ganga Hospital in Coimbatore gave him exposure to some of the most 
                complex orthopedic cases in the country. He further completed a Fellowship in Adult 
                Joint Reconstruction and Sports Medicine under WBOA and holds the prestigious 
                AO Masters qualification.
              </p>
              <p>
                Today, with 10 years of experience, Dr. Mukherjee runs the Advanced Ortho and Spine 
                Clinic in Lake Town, Kolkata — a modern facility dedicated to delivering evidence-based, 
                patient-centred orthopedic care to the people of Kolkata and beyond.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Qualifications & Memberships */}
      <section className="py-20 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <h2 className="font-serif text-2xl font-bold text-foreground">
                  Qualifications
                </h2>
              </div>
              <ul className="space-y-3">
                {qualifications.map((qual, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-secondary mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">{qual}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <h2 className="font-serif text-2xl font-bold text-foreground">
                  Professional Memberships
                </h2>
              </div>
              <ul className="space-y-3">
                {memberships.map((membership, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-secondary mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">{membership}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
              <Award className="h-6 w-6 text-primary" />
            </div>
            <h2 className="font-serif text-3xl font-bold text-foreground">
              Awards & Recognitions
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {awards.map((award, index) => (
              <div 
                key={index}
                className="p-6 rounded-xl border border-border bg-background hover:border-primary/30 hover:shadow-md transition-all"
              >
                <p className="text-sm text-secondary font-medium mb-2">{award.year}</p>
                <p className="font-medium text-foreground">{award.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Interests */}
      <section className="py-20 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
              <Target className="h-6 w-6 text-primary" />
            </div>
            <h2 className="font-serif text-3xl font-bold text-foreground">
              Areas of Special Interest
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {specialInterests.map((interest, index) => (
              <div 
                key={index}
                className="p-4 rounded-lg bg-background border border-border flex items-center gap-3"
              >
                <div className="w-2 h-2 rounded-full bg-secondary" />
                <span className="text-foreground">{interest}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
              <Heart className="h-8 w-8 text-primary" />
            </div>
            <h2 className="font-serif text-3xl font-bold text-foreground mb-6">
              Surgical Philosophy
            </h2>
            <blockquote className="text-xl text-muted-foreground leading-relaxed italic">
              &quot;Every patient deserves to understand their condition and be an active participant 
              in their treatment decisions. My role is not just to operate, but to guide patients 
              through their entire journey—from diagnosis to full recovery. I believe in treating 
              patients the way I would want my own family to be treated: with expertise, compassion, 
              and transparency.&quot;
            </blockquote>
            <p className="mt-6 text-primary font-semibold">— Dr. Soutrik Mukherjee</p>
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </main>
  )
}
