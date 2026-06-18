const hospitals = [
  { name: 'Spandan Hospital', location: 'Kolkata' },
  { name: 'JBCH', location: 'Salt Lake' },
  { name: 'Eksag Sanjeevani', location: 'Baghbazar' },
  { name: 'Lake Land Hospital', location: 'Kolkata' },
  { name: 'Health Pillar Hospital', location: 'Kolkata' },
  { name: 'Desun Hospital', location: 'Kolkata' },
]

export function HospitalAffiliations() {
  return (
    <section className="py-20 lg:py-28 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-medium uppercase tracking-wider text-secondary mb-3">
            Hospital Affiliations
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Operating at Leading Hospitals
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Dr. Mukherjee operates at multiple hospitals across Kolkata, bringing advanced 
            orthopedic care to patients wherever they are most comfortable.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {hospitals.map((hospital, index) => (
            <div 
              key={index}
              className="p-6 rounded-xl bg-background border border-border hover:border-primary/30 hover:shadow-md transition-all flex items-center gap-4"
            >
              <div className="w-12 h-12 flex-shrink-0 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-lg font-bold text-primary">
                  {hospital.name.charAt(0)}
                </span>
              </div>
              <div>
                <h3 className="font-semibold text-foreground text-sm">{hospital.name}</h3>
                <p className="text-xs text-muted-foreground mt-0.5">{hospital.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
