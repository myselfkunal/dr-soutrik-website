import { Shield, FileCheck, CreditCard } from 'lucide-react'

const insuranceProviders = [
  'Star Health',
  'HDFC ERGO',
  'ICICI Lombard',
  'Bajaj Allianz',
  'New India Assurance',
  'Max Bupa',
  'Religare Health',
  'Care Health',
]

export function InsuranceSection() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-6">
            <div>
              <p className="text-sm font-medium uppercase tracking-wider text-secondary mb-3">
                Insurance & Payment
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Cashless Treatment Facilities
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We understand that healthcare expenses can be a concern. Our practice offers 
                cashless treatment facilities with major insurance providers to make quality 
                orthopedic care accessible.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Insurance Support</h3>
                  <p className="text-muted-foreground text-sm">
                    We work with all major health insurance providers for cashless hospitalization.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <FileCheck className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Documentation Assistance</h3>
                  <p className="text-muted-foreground text-sm">
                    Our team assists with all insurance paperwork and pre-authorization requirements.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <CreditCard className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Flexible Payment Options</h3>
                  <p className="text-muted-foreground text-sm">
                    Multiple payment options including EMI facilities for non-insured patients.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-muted/50 rounded-2xl p-8">
            <h3 className="font-serif text-xl font-semibold text-foreground mb-6">
              Accepted Insurance Providers
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {insuranceProviders.map((provider, index) => (
                <div 
                  key={index}
                  className="p-4 rounded-lg bg-background border border-border text-center"
                >
                  <span className="text-sm font-medium text-foreground">{provider}</span>
                </div>
              ))}
            </div>
            <p className="text-sm text-muted-foreground mt-6 text-center">
              And many more. Contact us to verify your insurance coverage.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
