import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import WhatsappFab from '@/components/whatsapp-fab'
import { BLOG_POSTS } from '@/lib/blog-posts'

export const metadata: Metadata = {
  title: 'Blog Técnico — Engenharia Eléctrica, Domótica e Energia | Maccari Engenharia',
  description:
    'Artigos técnicos sobre instalações eléctricas, aumento de potência E-Redes, domótica para alto padrão, projectos de loteamento e legislação portuguesa. Escrito por engenheiro eletrotécnico credenciado DGEG.',
  alternates: { canonical: 'https://maccariengenharia.pt/blog' },
  openGraph: {
    title: 'Blog Técnico Maccari Engenharia — Cascais',
    description:
      'Conhecimento prático sobre engenharia eléctrica, domótica, aumento de potência e legislação para clientes em Cascais e Lisboa.',
    url: 'https://maccariengenharia.pt/blog',
    locale: 'pt_PT',
    type: 'website',
  },
}

export default function BlogIndex() {
  const sorted = [...BLOG_POSTS].sort((a, b) => b.dateISO.localeCompare(a.dateISO))

  return (
    <>
      <Navbar />
      <WhatsappFab />

      <main className="bg-night min-h-screen pt-32 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-30 pointer-events-none" aria-hidden="true" />
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(245,158,11,0.06) 0%, transparent 60%)' }} />

        <div className="relative max-w-[1080px] mx-auto px-5 md:px-10">
          <div className="mb-16 text-center">
            <div className="section-label justify-center mb-3">Blog Técnico</div>
            <h1
              className="text-[#F8FAFC] font-black mb-5"
              style={{ fontSize: 'clamp(2.4rem, 5vw, 3.6rem)', letterSpacing: '-0.035em', lineHeight: 1.05 }}
            >
              Conhecimento técnico, <span className="text-amber-gradient">sem rodeios.</span>
            </h1>
            <p className="text-[#94A3B8] max-w-[60ch] mx-auto" style={{ fontSize: '1.05rem', lineHeight: 1.7 }}>
              Artigos práticos sobre instalações eléctricas, domótica, aumento de potência e legislação portuguesa — escritos por um engenheiro eletrotécnico credenciado DGEG, para clientes que querem perceber antes de decidir.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {sorted.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col p-7 rounded-2xl transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: 'rgba(17,24,39,0.45)',
                  border: '1px solid rgba(255,255,255,0.06)',
                  backdropFilter: 'blur(12px)',
                }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <span
                    className="text-[10px] font-bold uppercase tracking-[0.13em] px-2.5 py-1 rounded-md"
                    style={{ background: 'rgba(245,158,11,0.1)', color: '#F59E0B', border: '1px solid rgba(245,158,11,0.2)' }}
                  >
                    {post.category}
                  </span>
                  <span className="text-xs" style={{ color: '#64748B' }}>· {post.readTime} min de leitura</span>
                </div>

                <h2
                  className="text-[#F8FAFC] font-bold text-xl mb-3 group-hover:text-[#F59E0B] transition-colors"
                  style={{ letterSpacing: '-0.02em', lineHeight: 1.25 }}
                >
                  {post.title}
                </h2>
                <p className="text-[#94A3B8] text-sm mb-5 flex-1" style={{ lineHeight: 1.65 }}>
                  {post.description}
                </p>

                <div className="flex items-center justify-between pt-4 mt-auto" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                  <time className="text-xs" style={{ color: '#64748B' }} dateTime={post.dateISO}>
                    {post.date}
                  </time>
                  <span className="text-[11px] font-semibold flex items-center gap-1" style={{ color: '#F59E0B' }}>
                    Ler artigo
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="9 18 15 12 9 6" /></svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
