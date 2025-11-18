import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative w-full h-[72vh] min-h-[520px] bg-gradient-to-b from-sky-50 via-rose-50 to-emerald-50 overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/8nsoLg1te84JZcE9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="max-w-2xl">
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/70 backdrop-blur border border-white text-slate-700 text-sm mb-4">Fintech-ready SaaS template</span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-900">
            Grow your digital banking SaaS in soft pastels
          </h1>
          <p className="mt-4 text-lg text-slate-700/80">
            Beautiful marketing site, authentication, blog and a working contact form — styled with gentle pastel gradients.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#pricing" className="px-5 py-3 rounded-lg bg-slate-900 text-white hover:bg-slate-800 shadow-sm">See pricing</a>
            <a href="#contact" className="px-5 py-3 rounded-lg bg-white/80 backdrop-blur border border-slate-200 text-slate-900 hover:bg-white">Talk to sales</a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-white/20 to-white" />
    </section>
  )
}
