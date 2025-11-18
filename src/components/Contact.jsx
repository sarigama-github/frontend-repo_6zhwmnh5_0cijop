import { useState } from 'react'

export default function Contact(){
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState('idle')

  const submit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const url = `${import.meta.env.VITE_BACKEND_URL || ''}/api/contact`
      const res = await fetch(url, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) })
      if(!res.ok) throw new Error('Request failed')
      setStatus('success')
      setForm({ name: '', email: '', subject: '', message: '' })
    } catch (err) {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="py-24 bg-gradient-to-t from-white to-sky-50/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl font-semibold text-slate-900">Let’s talk</h2>
            <p className="mt-3 text-slate-600">Tell us about your project and we’ll get back to you.</p>
            <div className="mt-6 p-6 rounded-2xl bg-white border border-slate-200">
              <form onSubmit={submit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <input required placeholder="Your name" className="px-4 py-3 rounded-lg border border-slate-200 w-full" value={form.name} onChange={e=>setForm({...form, name: e.target.value})} />
                  <input required type="email" placeholder="Email address" className="px-4 py-3 rounded-lg border border-slate-200 w-full" value={form.email} onChange={e=>setForm({...form, email: e.target.value})} />
                </div>
                <input required placeholder="Subject" className="px-4 py-3 rounded-lg border border-slate-200 w-full" value={form.subject} onChange={e=>setForm({...form, subject: e.target.value})} />
                <textarea required rows="5" placeholder="Message" className="px-4 py-3 rounded-lg border border-slate-200 w-full" value={form.message} onChange={e=>setForm({...form, message: e.target.value})}></textarea>
                <button disabled={status==='loading'} className="px-5 py-3 rounded-lg bg-slate-900 text-white hover:bg-slate-800 disabled:opacity-50">{status==='loading' ? 'Sending...' : 'Send message'}</button>
                {status==='success' && <p className="text-emerald-600">Thanks! We received your message.</p>}
                {status==='error' && <p className="text-rose-600">Something went wrong. Try again.</p>}
              </form>
            </div>
          </div>
          <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-50 to-rose-50 border border-slate-200">
            <h3 className="text-lg font-semibold text-slate-900">Why teams choose us</h3>
            <ul className="mt-4 space-y-3 text-slate-700">
              <li>• Pastel, modern aesthetics</li>
              <li>• Production-ready backend endpoints</li>
              <li>• Secure auth with hashed passwords</li>
              <li>• Blog and contact form out of the box</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
