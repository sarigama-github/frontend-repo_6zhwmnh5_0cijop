import { useEffect, useState } from 'react'

export default function Blog(){
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const url = `${import.meta.env.VITE_BACKEND_URL || ''}/api/blogs`
    fetch(url)
      .then(r => r.json())
      .then(data => { setItems(data.items || []); setLoading(false) })
      .catch(() => { setError('Failed to load'); setLoading(false) })
  }, [])

  return (
    <section id="blog" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-semibold text-slate-900">Latest from the blog</h2>
            <p className="mt-2 text-slate-600">Updates, releases and stories.</p>
          </div>
        </div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {loading && <div className="text-slate-600">Loading...</div>}
          {error && <div className="text-rose-600">{error}</div>}
          {!loading && !error && items.map((p) => (
            <article key={p.id} className="rounded-2xl overflow-hidden border border-slate-200 bg-gradient-to-br from-sky-50 to-rose-50">
              {p.cover_image && (
                <img src={p.cover_image} alt={p.title} className="w-full h-40 object-cover" />
              )}
              <div className="p-5">
                <h3 className="text-lg font-semibold text-slate-900">{p.title}</h3>
                <p className="mt-1 text-slate-600 line-clamp-2">{p.excerpt}</p>
                <a href={`#/blog/${p.slug}`} className="inline-block mt-3 text-slate-900 font-medium">Read more →</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
