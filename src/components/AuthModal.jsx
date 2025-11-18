import { useState } from 'react'

export default function AuthModal({ mode = 'login', open, onClose }){
  const [form, setForm] = useState({ name: '', email: '', password: '' })
  const [status, setStatus] = useState('idle')
  const isSignup = mode === 'signup'

  const submit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const url = `${import.meta.env.VITE_BACKEND_URL || ''}/api/auth/${isSignup ? 'signup' : 'login'}`
      const payload = isSignup ? { name: form.name, email: form.email, password: form.password } : { email: form.email, password: form.password }
      const res = await fetch(url, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) })
      if(!res.ok) throw new Error('Request failed')
      const data = await res.json()
      localStorage.setItem('token', data.token)
      setStatus('success')
      setTimeout(() => onClose(), 700)
    } catch (err) {
      setStatus('error')
    }
  }

  if(!open) return null

  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-black/20">
      <div className="w-full max-w-md mx-auto rounded-2xl bg-white border border-slate-200 p-6 shadow-xl">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold text-slate-900">{isSignup ? 'Create your account' : 'Welcome back'}</h3>
          <button onClick={onClose} className="px-2 py-1 rounded-md hover:bg-slate-100">×</button>
        </div>
        <form onSubmit={submit} className="mt-4 space-y-4">
          {isSignup && (
            <input required placeholder="Your name" className="px-4 py-3 rounded-lg border border-slate-200 w-full" value={form.name} onChange={e=>setForm({...form, name: e.target.value})} />
          )}
          <input required type="email" placeholder="Email" className="px-4 py-3 rounded-lg border border-slate-200 w-full" value={form.email} onChange={e=>setForm({...form, email: e.target.value})} />
          <input required type="password" placeholder="Password" className="px-4 py-3 rounded-lg border border-slate-200 w-full" value={form.password} onChange={e=>setForm({...form, password: e.target.value})} />
          <button disabled={status==='loading'} className="w-full px-5 py-3 rounded-lg bg-slate-900 text-white hover:bg-slate-800 disabled:opacity-50">{status==='loading' ? 'Please wait...' : (isSignup ? 'Create account' : 'Log in')}</button>
          {status==='success' && <p className="text-emerald-600 text-sm">Success!</p>}
          {status==='error' && <p className="text-rose-600 text-sm">Something went wrong. Try again.</p>}
        </form>
      </div>
    </div>
  )
}
