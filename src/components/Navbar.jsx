import { useState } from 'react'
import { Menu, X, LogIn, UserPlus } from 'lucide-react'

export default function Navbar({ onOpenAuth }) {
  const [open, setOpen] = useState(false)

  const navItems = [
    { href: '#features', label: 'Features' },
    { href: '#pricing', label: 'Pricing' },
    { href: '#blog', label: 'Blog' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header className="w-full sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/50 border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-rose-300 via-sky-300 to-emerald-300" />
            <span className="font-semibold text-slate-800">PastelPay</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-slate-600 hover:text-slate-900 transition-colors">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <button onClick={() => onOpenAuth('login')} className="inline-flex items-center gap-2 px-3 py-2 text-slate-700 hover:text-slate-900">
              <LogIn size={18} /> Login
            </button>
            <button onClick={() => onOpenAuth('signup')} className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-900 text-white hover:bg-slate-800 shadow-sm">
              <UserPlus size={18} /> Get started
            </button>
          </div>

          <button className="md:hidden inline-flex p-2 rounded-lg hover:bg-white/60" onClick={() => setOpen(!open)}>
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 space-y-2">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="block px-2 py-2 rounded-lg hover:bg-white/60 text-slate-700">
                {item.label}
              </a>
            ))}
            <div className="flex gap-2 pt-2">
              <button onClick={() => onOpenAuth('login')} className="flex-1 px-3 py-2 rounded-lg bg-white text-slate-800 border border-slate-200">Login</button>
              <button onClick={() => onOpenAuth('signup')} className="flex-1 px-3 py-2 rounded-lg bg-slate-900 text-white">Get started</button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
