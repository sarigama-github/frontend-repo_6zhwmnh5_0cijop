const tiers = [
  {
    name: 'Starter',
    price: '$0',
    caption: 'For early experiments',
    features: ['1,000 API calls/mo', 'Basic auth', 'Community support'],
    highlight: false,
  },
  {
    name: 'Growth',
    price: '$39',
    caption: 'Most popular',
    features: ['100k API calls/mo', 'Advanced auth', 'Priority email support'],
    highlight: true,
  },
  {
    name: 'Scale',
    price: 'Custom',
    caption: 'For large teams',
    features: ['Unlimited API', 'SAML/SSO', 'Dedicated success'],
    highlight: false,
  }
]

export default function Pricing(){
  return (
    <section id="pricing" className="py-24 bg-gradient-to-b from-white to-emerald-50/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-semibold text-slate-900">Simple pricing</h2>
          <p className="mt-3 text-slate-600">Start free and scale as you grow.</p>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {tiers.map((t) => (
            <div key={t.name} className={`rounded-2xl border ${t.highlight ? 'border-slate-900 shadow-lg bg-white' : 'border-slate-200 bg-white/70'} p-6`}>
              <div className="flex items-baseline justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-slate-900">{t.name}</h3>
                  <p className="text-slate-600">{t.caption}</p>
                </div>
                <div className="text-3xl font-semibold text-slate-900">{t.price}</div>
              </div>
              <ul className="mt-6 space-y-2">
                {t.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-slate-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-900" /> {f}
                  </li>
                ))}
              </ul>
              <button className={`mt-6 w-full px-4 py-2 rounded-lg ${t.highlight ? 'bg-slate-900 text-white' : 'bg-white border border-slate-200 text-slate-900'} hover:opacity-90`}>
                Choose {t.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
