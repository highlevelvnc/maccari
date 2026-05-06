import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import WhatsappFab from '@/components/whatsapp-fab'
import { BLOG_POSTS, BLOG_AUTHOR, BLOG_PUBLISHER, getPostBySlug, getRelatedPosts } from '@/lib/blog-posts'
import { waLink, WA_MESSAGES } from '@/lib/constants'

const BASE_URL = 'https://maccariengenharia.pt'

export function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return {}

  const url = `${BASE_URL}/blog/${post.slug}`
  return {
    title: `${post.title} | Maccari Engenharia`,
    description: post.description,
    alternates: { canonical: url },
    openGraph: {
      title: post.title,
      description: post.description,
      url,
      locale: 'pt_PT',
      type: 'article',
      publishedTime: post.dateISO,
      authors: [BLOG_AUTHOR],
      tags: post.tags,
    },
    keywords: post.tags,
  }
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) notFound()

  const url = `${BASE_URL}/blog/${post.slug}`
  const related = getRelatedPosts(post.slug, 2)

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    datePublished: post.dateISO,
    dateModified: post.dateISO,
    inLanguage: 'pt-PT',
    keywords: post.tags.join(', '),
    articleSection: post.category,
    author: {
      '@type': 'Person',
      name: BLOG_AUTHOR,
      url: BASE_URL,
      jobTitle: 'Engenheiro Eletrotécnico',
    },
    publisher: {
      '@type': 'Organization',
      name: BLOG_PUBLISHER,
      logo: { '@type': 'ImageObject', url: `${BASE_URL}/logo.png` },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
  }

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Início', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${BASE_URL}/blog` },
      { '@type': 'ListItem', position: 3, name: post.title, item: url },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <Navbar />
      <WhatsappFab />

      <main className="bg-night min-h-screen pt-32 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-25 pointer-events-none" aria-hidden="true" />
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 40% at 50% 0%, rgba(245,158,11,0.05) 0%, transparent 60%)' }} />

        <article className="relative max-w-[760px] mx-auto px-5 md:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs mb-8" style={{ color: '#64748B' }} aria-label="breadcrumb">
            <Link href="/" className="hover:text-[#F8FAFC] transition-colors">Início</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-[#F8FAFC] transition-colors">Blog</Link>
            <span>/</span>
            <span style={{ color: '#94A3B8' }}>{post.category}</span>
          </nav>

          {/* Header */}
          <header className="mb-10">
            <div className="flex flex-wrap items-center gap-2 mb-5">
              <span
                className="text-[10px] font-bold uppercase tracking-[0.13em] px-2.5 py-1 rounded-md"
                style={{ background: 'rgba(245,158,11,0.1)', color: '#F59E0B', border: '1px solid rgba(245,158,11,0.2)' }}
              >
                {post.category}
              </span>
              <time className="text-xs" style={{ color: '#64748B' }} dateTime={post.dateISO}>{post.date}</time>
              <span className="text-xs" style={{ color: '#64748B' }}>· {post.readTime} min</span>
            </div>

            <h1
              className="text-[#F8FAFC] font-black mb-6"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.1rem)', letterSpacing: '-0.035em', lineHeight: 1.1 }}
            >
              {post.title}
            </h1>

            <div className="flex items-center gap-3 pt-5" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
              <div className="w-9 h-9 rounded-full flex items-center justify-center text-[#F59E0B] font-bold text-sm" style={{ background: 'rgba(245,158,11,0.12)', border: '1px solid rgba(245,158,11,0.2)' }}>
                EM
              </div>
              <div>
                <p className="text-[#F8FAFC] text-sm font-semibold">{BLOG_AUTHOR}</p>
                <p className="text-xs" style={{ color: '#64748B' }}>Engenheiro Eletrotécnico · DGEG 82284</p>
              </div>
            </div>
          </header>

          {/* Body */}
          <div
            className="blog-prose"
            dangerouslySetInnerHTML={{ __html: post.body }}
          />

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-12 pt-8" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
            {post.tags.map((t) => (
              <span key={t} className="badge-zone">{t}</span>
            ))}
          </div>

          {/* CTA inline */}
          <div className="mt-12 p-7 rounded-2xl" style={{ background: 'rgba(245,158,11,0.06)', border: '1px solid rgba(245,158,11,0.18)' }}>
            <h3 className="text-[#F8FAFC] font-bold text-lg mb-2" style={{ letterSpacing: '-0.02em' }}>
              Tem um projecto em curso?
            </h3>
            <p className="text-[#94A3B8] text-sm mb-5" style={{ lineHeight: 1.65 }}>
              Falo consigo no WhatsApp e fazemos uma vistoria gratuita. Orçamento detalhado em 24h.
            </p>
            <a
              href={waLink(WA_MESSAGES.general)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-bold text-white transition-all hover:opacity-90"
              style={{ background: '#25D366' }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
              Falar no WhatsApp
            </a>
          </div>

          {/* Related */}
          {related.length > 0 && (
            <section className="mt-16">
              <h2 className="text-[#F8FAFC] font-bold text-xl mb-5" style={{ letterSpacing: '-0.02em' }}>
                Continue a ler
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {related.map((r) => (
                  <Link
                    key={r.slug}
                    href={`/blog/${r.slug}`}
                    className="block p-5 rounded-xl transition-all hover:-translate-y-0.5"
                    style={{ background: 'rgba(17,24,39,0.45)', border: '1px solid rgba(255,255,255,0.06)' }}
                  >
                    <span className="text-[10px] font-bold uppercase tracking-[0.13em]" style={{ color: '#F59E0B' }}>{r.category}</span>
                    <h3 className="text-[#F8FAFC] font-semibold text-sm mt-2" style={{ lineHeight: 1.35 }}>{r.title}</h3>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </article>
      </main>

      <Footer />
    </>
  )
}
