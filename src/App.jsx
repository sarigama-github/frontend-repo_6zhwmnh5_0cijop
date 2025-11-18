import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Pricing from './components/Pricing'
import Blog from './components/Blog'
import Contact from './components/Contact'
import AuthModal from './components/AuthModal'

function App() {
  const [authOpen, setAuthOpen] = useState(false)
  const [authMode, setAuthMode] = useState('login')

  const openAuth = (mode) => { setAuthMode(mode); setAuthOpen(true) }

  return (
    <div className="min-h-screen bg-white">
      <Navbar onOpenAuth={openAuth} />
      <Hero />
      <Features />
      <Pricing />
      <Blog />
      <Contact />
      <footer className="py-10 border-t border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-600">© {new Date().getFullYear()} PastelPay. All rights reserved.</p>
          <div className="flex items-center gap-3 text-slate-600">
            <span>Terms</span>
            <span>Privacy</span>
            <span>Status</span>
          </div>
        </div>
      </footer>

      <AuthModal mode={authMode} open={authOpen} onClose={() => setAuthOpen(false)} />
    </div>
  )
}

export default App
