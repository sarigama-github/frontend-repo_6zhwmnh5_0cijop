import { Shield, CreditCard, Zap, Globe } from 'lucide-react'

const features = [
  { icon: Shield, title: 'Bank-grade security', desc: 'Encrypted at rest and in transit, with audit logs.' },
  { icon: CreditCard, title: 'Payments built-in', desc: 'Card vaulting, tokenization and payouts.' },
  { icon: Zap, title: 'Instant setup', desc: 'Start fast with sensible defaults and docs.' },
  { icon: Globe, title: 'Global-ready', desc: 'Multi-currency, localization and tax helpers.' },
]

export default function Features(){
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold text-slate-900">Everything you need to launch</h2>
          <p className="mt-3 text-slate-600">Built for fintech SaaS with a calm pastel aesthetic.</p>
        </div>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div key={f.title} className="p-6 rounded-2xl bg-gradient-to-br from-sky-50 to-rose-50 border border-slate-200">
              <div className="w-10 h-10 rounded-lg bg-white shadow flex items-center justify-center mb-4">
                <f.icon className="text-slate-700" size={20} />
              </div>
              <h3 className="font-semibold text-slate-900">{f.title}</h3>
              <p className="text-slate-600 mt-1">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
