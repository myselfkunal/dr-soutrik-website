import { UserCheck, Stethoscope, Heart, Zap, MessageSquare, CalendarCheck } from 'lucide-react'

const features = [
  {
    icon: UserCheck,
    title: 'Personalized Treatment Plans',
    description: 'Every patient is unique. Your treatment plan is customized based on your specific condition, lifestyle, and recovery goals.',
  },
  {
    icon: Stethoscope,
    title: 'Modern Surgical Techniques',
    description: 'Utilizing the latest minimally invasive procedures and advanced technologies for better outcomes and faster recovery.',
  },
  {
    icon: Heart,
    title: 'Evidence-Based Medicine',
    description: 'Treatment decisions are guided by the latest medical research and proven clinical protocols.',
  },
  {
    icon: Zap,
    title: 'Faster Recovery Focus',
    description: 'Our protocols are designed to get you back on your feet quickly with comprehensive rehabilitation support.',
  },
  {
    icon: MessageSquare,
    title: 'Transparent Communication',
    description: 'Clear explanations of your condition, treatment options, risks, and expected outcomes at every step.',
  },
  {
    icon: CalendarCheck,
    title: 'Comprehensive Follow-Up Care',
    description: 'Regular post-operative check-ups and ongoing support to ensure the best long-term results.',
  },
]

export function WhyChooseSection() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-medium uppercase tracking-wider text-secondary mb-3">
            Why Choose Us
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Excellence in Orthopedic Care
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            What sets Dr. Soutrik Mukherjee&apos;s practice apart is the unwavering commitment 
            to patient welfare and clinical excellence.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group p-8 rounded-2xl border border-border bg-background hover:bg-muted/30 hover:border-primary/20 transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 text-primary mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <feature.icon className="h-7 w-7" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
