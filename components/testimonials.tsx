'use client'

import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'
import { TESTIMONIALS } from '@/lib/constants'

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="13" height="13" viewBox="0 0 24 24" fill="#F59E0B" stroke="none">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  )
}

function TestiCard({ testi, index, isVisible }: { testi: typeof TESTIMONIALS[0]; index: number; isVisible: boolean }) {
  return (
    <div className={`testi-card fade-up delay-${index + 1} ${isVisible ? 'visible' : ''}`}>
      {/* Stars + verified */}
      <div className="flex items-center justify-between mb-4">
        <StarRating count={testi.rating} />
        <span className="inline-flex items-center gap-1 text-[10px] font-semibold" style={{ color: '#10B981' }}>
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
          Verificado
        </span>
      </div>

      {/* Quote */}
      <p className="text-sm italic mb-5 leading-relaxed" style={{ color: 'rgba(248,250,252,0.88)', lineHeight: 1.75 }}>
        &ldquo;{testi.text}&rdquo;
      </p>

      <div className="hr-line mb-4" />

      {/* Author */}
      <div className="flex items-center gap-3 mb-3">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center text-night font-black text-sm flex-shrink-0"
          style={{ background: 'linear-gradient(135deg, #F59E0B, #FCD34D)', boxShadow: '0 0 14px rgba(245,158,11,0.3)' }}
        >
          {testi.name.charAt(0)}
        </div>
        <div className="min-w-0">
          <p className="text-[#F8FAFC] font-semibold text-sm leading-tight">{testi.name}</p>
          <p className="text-xs mt-0.5" style={{ color: '#64748B' }}>{testi.location}</p>
        </div>
      </div>

      <span
        className="inline-block text-xs px-2.5 py-1 rounded-full font-medium"
        style={{ background: 'rgba(245,158,11,0.07)', border: '1px solid rgba(245,158,11,0.14)', color: 'rgba(245,158,11,0.8)' }}
      >
        {testi.service}
      </span>
    </div>
  )
}

export default function Testimonials() {
  const { ref: sectionRef, isVisible } = useIntersectionObserver({ threshold: 0.1, triggerOnce: true })

  return (
    <section className="bg-night py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-40 pointer-events-none" aria-hidden="true" />

      <div
        ref={sectionRef as React.RefObject<HTMLDivElement>}
        className="max-w-[1280px] mx-auto px-5 md:px-10 relative z-10"
      >
        {/* Header */}
        <div className={`text-center mb-14 fade-up ${isVisible ? 'visible' : ''}`}>
          <div className="section-label justify-center">Clientes</div>
          <h2
            className="text-[#F8FAFC] font-black mt-2"
            style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', letterSpacing: '-0.03em', lineHeight: 1.1 }}
          >
            O que dizem os nossos clientes
          </h2>
          <p className="text-[#94A3B8] mt-4 max-w-md mx-auto text-sm" style={{ lineHeight: 1.75 }}>
            Trabalho que fala por si — histórias reais de clientes reais em São Domingos de Rana e região.
          </p>
          {/* Trust indicators */}
          <div className="flex items-center justify-center gap-4 mt-5">
            <div className="flex items-center gap-1.5">
              <div className="flex gap-0.5">
                {[1,2,3,4,5].map(i => (
                  <svg key={i} width="12" height="12" viewBox="0 0 24 24" fill="#F59E0B"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                ))}
              </div>
              <span className="text-xs font-semibold text-[#94A3B8]">5.0</span>
            </div>
            <span className="w-1 h-1 rounded-full bg-[#334155]" />
            <span className="text-xs text-[#64748B]">Avaliações verificadas</span>
          </div>
        </div>

        {/* Desktop grid */}
        <div className="hidden md:grid grid-cols-3 gap-6">
          {TESTIMONIALS.map((testi, i) => (
            <TestiCard key={testi.name} testi={testi} index={i} isVisible={isVisible} />
          ))}
        </div>

        {/* Mobile scroll */}
        <div className="md:hidden testi-scroll">
          {TESTIMONIALS.map((testi) => (
            <div key={testi.name} className="testi-card">
              <div className="flex items-center justify-between mb-4">
                <StarRating count={testi.rating} />
                <span className="inline-flex items-center gap-1 text-[10px] font-semibold" style={{ color: '#10B981' }}>
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
                  Verificado
                </span>
              </div>
              <p className="text-sm italic mb-5" style={{ color: 'rgba(248,250,252,0.88)', lineHeight: 1.75 }}>
                &ldquo;{testi.text}&rdquo;
              </p>
              <div className="hr-line mb-4" />
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-night font-black text-sm flex-shrink-0"
                  style={{ background: 'linear-gradient(135deg, #F59E0B, #FCD34D)', boxShadow: '0 0 14px rgba(245,158,11,0.3)' }}>
                  {testi.name.charAt(0)}
                </div>
                <div>
                  <p className="text-[#F8FAFC] font-semibold text-sm">{testi.name}</p>
                  <p className="text-xs mt-0.5" style={{ color: '#64748B' }}>{testi.location}</p>
                </div>
              </div>
              <span className="inline-block text-xs px-2.5 py-1 rounded-full font-medium"
                style={{ background: 'rgba(245,158,11,0.07)', border: '1px solid rgba(245,158,11,0.14)', color: 'rgba(245,158,11,0.8)' }}>
                {testi.service}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
