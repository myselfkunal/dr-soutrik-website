import { Award, Users, BookOpen, Medal } from 'lucide-react'

const stats = [
  {
    icon: Award,
    label: 'Years of Experience',
    value: 'XX+',
    description: 'Dedicated to orthopedic excellence',
  },
  {
    icon: Users,
    label: 'Successful Procedures',
    value: 'XXX+',
    description: 'Patients treated with care',
  },
  {
    icon: BookOpen,
    label: 'Research Publications',
    value: 'XX+',
    description: 'Contributing to medical science',
  },
  {
    icon: Medal,
    label: 'Awards & Recognitions',
    value: 'XX+',
    description: 'For clinical excellence',
  },
]

export function TrustIndicators() {
  return (
    <section className="py-16 bg-muted/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center p-6 rounded-xl bg-background shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
                <stat.icon className="h-6 w-6" />
              </div>
              <p className="font-serif text-3xl lg:text-4xl font-bold text-primary">{stat.value}</p>
              <p className="text-sm font-medium text-foreground mt-1">{stat.label}</p>
              <p className="text-xs text-muted-foreground mt-1">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
