const hospitals = [
  { name: 'Apollo Hospitals', location: 'Kolkata' },
  { name: 'Fortis Hospital', location: 'Kolkata' },
  { name: 'AMRI Hospitals', location: 'Salt Lake' },
  { name: 'Medica Superspecialty', location: 'Kolkata' },
  { name: 'Belle Vue Clinic', location: 'Kolkata' },
  { name: 'Peerless Hospital', location: 'Kolkata' },
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
            Dr. Mukherjee operates at some of Kolkata&apos;s most prestigious healthcare facilities, 
            ensuring access to world-class infrastructure and support.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {hospitals.map((hospital, index) => (
            <div 
              key={index}
              className="p-6 rounded-xl bg-background border border-border hover:border-primary/30 hover:shadow-md transition-all text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-muted flex items-center justify-center">
                <span className="text-2xl font-serif font-bold text-primary/60">
                  {hospital.name.charAt(0)}
                </span>
              </div>
              <h3 className="font-medium text-foreground text-sm">{hospital.name}</h3>
              <p className="text-xs text-muted-foreground mt-1">{hospital.location}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
