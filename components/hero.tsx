'use client'

import { useRef, useState, useEffect } from 'react'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'
import { waLink, WA_MESSAGES, BRAND } from '@/lib/constants'

export default function Hero() {
  const { ref: heroRef, isVisible } = useIntersectionObserver({ threshold: 0.05, triggerOnce: true })
  const videoRef = useRef<HTMLVideoElement>(null)
  const [videoReady, setVideoReady] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    if (video.readyState >= 3) { setVideoReady(true); return }
    const handler = () => setVideoReady(true)
    video.addEventListener('canplay', handler)
    return () => video.removeEventListener('canplay', handler)
  }, [])

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-24 pb-20 overflow-hidden">

      {/* ── VIDEO BACKGROUND ── */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 hero-bg" />
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover object-center"
          style={{ opacity: videoReady ? 1 : 0, transition: 'opacity 1.5s cubic-bezier(0.4,0,0.2,1)' }}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
        >
          <source src="/header12.mp4" type="video/mp4" />
        </video>
      </div>

      {/* ── CINEMATIC OVERLAYS ── */}
      {/* Left text-protection gradient */}
      <div className="absolute inset-0 z-[1] pointer-events-none" style={{ background: 'linear-gradient(105deg, rgba(10,14,23,0.98) 0%, rgba(10,14,23,0.95) 28%, rgba(10,14,23,0.75) 48%, rgba(10,14,23,0.22) 70%, rgba(10,14,23,0.08) 100%)' }} />
      {/* Bottom section fade */}
      <div className="absolute inset-0 z-[1] pointer-events-none" style={{ background: 'linear-gradient(to top, rgba(10,14,23,1) 0%, rgba(10,14,23,0.6) 8%, transparent 24%)' }} />
      {/* Top navbar fade */}
      <div className="absolute inset-0 z-[1] pointer-events-none" style={{ background: 'linear-gradient(to bottom, rgba(10,14,23,0.7) 0%, transparent 18%)' }} />
      {/* Cinematic vignette */}
      <div className="absolute inset-0 z-[1] pointer-events-none" style={{ background: 'radial-gradient(ellipse 130% 110% at 50% 50%, transparent 30%, rgba(10,14,23,0.62) 100%)' }} />
      {/* Subtle amber warmth on right */}
      <div className="absolute inset-0 z-[1] pointer-events-none" style={{ background: 'radial-gradient(ellipse 55% 70% at 85% 45%, rgba(245,158,11,0.04) 0%, transparent 60%)' }} />
      <div className="absolute inset-0 z-[2] dot-grid pointer-events-none" style={{ opacity: 0.05 }} aria-hidden="true" />

      {/* Circuit SVG */}
      <svg className="absolute bottom-0 right-0 z-[2] pointer-events-none" width="600" height="500" viewBox="0 0 600 500" fill="none" style={{ opacity: 0.06 }} aria-hidden="true">
        <line x1="50" y1="100" x2="300" y2="100" stroke="#38BDF8" strokeWidth="1.5" />
        <line x1="300" y1="100" x2="300" y2="200" stroke="#38BDF8" strokeWidth="1.5" />
        <line x1="300" y1="200" x2="550" y2="200" stroke="#38BDF8" strokeWidth="1.5" />
        <line x1="100" y1="150" x2="100" y2="300" stroke="#38BDF8" strokeWidth="1.5" />
        <line x1="100" y1="300" x2="450" y2="300" stroke="#38BDF8" strokeWidth="1.5" />
        <line x1="450" y1="300" x2="450" y2="400" stroke="#38BDF8" strokeWidth="1.5" />
        <line x1="150" y1="250" x2="350" y2="250" stroke="#38BDF8" strokeWidth="1.5" />
        <line x1="350" y1="250" x2="350" y2="350" stroke="#38BDF8" strokeWidth="1.5" />
        <line x1="200" y1="350" x2="550" y2="350" stroke="#38BDF8" strokeWidth="1.5" />
        <line x1="200" y1="400" x2="200" y2="350" stroke="#38BDF8" strokeWidth="1.5" />
        <line x1="50" y1="400" x2="200" y2="400" stroke="#38BDF8" strokeWidth="1.5" />
        <line x1="50" y1="100" x2="50" y2="400" stroke="#38BDF8" strokeWidth="1.5" />
        <line x1="500" y1="150" x2="500" y2="350" stroke="#38BDF8" strokeWidth="1.5" />
        <circle cx="300" cy="100" r="3" fill="#38BDF8" />
        <circle cx="300" cy="200" r="3" fill="#38BDF8" />
        <circle cx="100" cy="300" r="3" fill="#38BDF8" />
        <circle cx="450" cy="300" r="3" fill="#38BDF8" />
        <circle cx="350" cy="250" r="3" fill="#38BDF8" />
        <circle cx="350" cy="350" r="3" fill="#38BDF8" />
        <circle cx="200" cy="350" r="3" fill="#38BDF8" />
        <rect x="220" y="170" width="60" height="40" rx="4" stroke="#38BDF8" strokeWidth="1.5" fill="none" />
        <rect x="360" y="310" width="50" height="35" rx="4" stroke="#38BDF8" strokeWidth="1.5" fill="none" />
      </svg>

      {/* ── CONTENT ── */}
      <div className="relative z-[3] max-w-[1280px] mx-auto px-5 md:px-10 w-full">
        <div
          ref={heroRef as React.RefObject<HTMLDivElement>}
          className="flex flex-col lg:flex-row items-center gap-10 lg:gap-14"
        >
          {/* LEFT */}
          <div className="w-full lg:w-[55%] flex flex-col gap-6">

            {/* Credential badges */}
            <div className={`flex flex-wrap gap-2 fade-up ${isVisible ? 'visible' : ''}`}>
              <span className="badge-cert-premium">
                <span className="status-dot" style={{ width: 6, height: 6 }} />
                Credenciado DGEG
              </span>
              <span className="badge-oe-premium">
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                Ordem dos Engenheiros
              </span>
            </div>

            {/* H1 */}
            <div className={`fade-up delay-1 ${isVisible ? 'visible' : ''}`}>
              <h1
                className="text-[#F8FAFC]"
                style={{ fontSize: 'clamp(2.8rem, 5.5vw, 5rem)', fontWeight: 900, letterSpacing: '-0.035em', lineHeight: 1.04 }}
              >
                Engenharia é responsabilidade{' '}
                <span className="text-amber-gradient">com nome e número.</span>
              </h1>
            </div>

            {/* Subtitle */}
            <p
              className={`text-[#94A3B8] fade-up delay-2 ${isVisible ? 'visible' : ''}`}
              style={{ fontSize: '1.08rem', lineHeight: 1.75, maxWidth: '54ch' }}
            >
              Loteamentos, edifícios, indústria, domótica, aumento de potência e certificações — com a assinatura de um engenheiro eletrotécnico credenciado DGEG.
            </p>

            {/* Trust micro-line */}
            <div className={`flex flex-wrap items-center gap-x-4 gap-y-2 fade-up delay-3 ${isVisible ? 'visible' : ''}`}>
              {[
                'Projetos até 10MW de experiência',
                'Credenciado DGEG n.º 82284',
                'Orçamento gratuito',
              ].map((text, i) => (
                <span key={text} className="flex items-center gap-1.5 text-xs font-medium" style={{ color: '#64748B' }}>
                  {i > 0 && <span className="w-px h-3 bg-[#1E293B]" />}
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>
                  {text}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className={`flex flex-col sm:flex-row gap-3 fade-up delay-4 ${isVisible ? 'visible' : ''}`}>
              <a href={waLink(WA_MESSAGES.general)} target="_blank" rel="noopener noreferrer" className="hero-cta-wa">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Falar no WhatsApp
              </a>
              <a href="tel:+351913973551" className="hero-cta-secondary">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.63 3.18 2 2 0 0 1 3.61 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.59a16 16 0 0 0 5.5 5.5l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 16.92z" /></svg>
                Ligar: {BRAND.phone}
              </a>
            </div>
          </div>

          {/* RIGHT — Glass card floating against video */}
          <div className={`w-full lg:w-[45%] fade-up delay-3 ${isVisible ? 'visible' : ''}`}>
            <div className="hero-glass-card">

              {/* Status row */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <span className="status-dot" />
                  <span className="text-[11px] font-bold uppercase tracking-[0.13em]" style={{ color: '#F59E0B' }}>Disponível Agora</span>
                </div>
                <a href="tel:+351913973551" className="text-xs font-medium tabular-nums transition-colors" style={{ color: '#64748B' }}>
                  {BRAND.phone}
                </a>
              </div>

              {/* Brand */}
              <div className="flex items-center gap-3 mb-6 pb-5" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(245,158,11,0.1)', border: '1px solid rgba(245,158,11,0.2)' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-bold text-base leading-tight" style={{ letterSpacing: '-0.02em' }}>Maccari Engenharia</p>
                  <p className="text-xs mt-0.5" style={{ color: '#64748B' }}>{BRAND.location}</p>
                </div>
              </div>

              {/* Metrics 2×2 */}
              <div className="grid grid-cols-2 gap-2.5 mb-5">
                {[
                  { value: '20', suffix: '+', label: 'Anos Exp.', gradient: 'linear-gradient(135deg, #F59E0B, #FCD34D)' },
                  { value: '500', suffix: '+', label: 'Projetos', gradient: 'linear-gradient(135deg, #F59E0B, #FCD34D)' },
                  { value: 'DGEG', suffix: '', label: 'Credenciado', gradient: 'linear-gradient(135deg, #F59E0B, #FCD34D)' },
                  { value: 'O.E.', suffix: '', label: 'Ordem Eng.', gradient: 'linear-gradient(135deg, #F59E0B, #FCD34D)' },
                ].map((m) => (
                  <div key={m.label} className="metric-cell-premium">
                    <div className="flex items-end justify-center gap-0.5 mb-1">
                      <span className="font-black text-2xl leading-none" style={{ background: m.gradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                        {m.value}
                      </span>
                      {m.suffix && (
                        <span className="font-black text-sm mb-0.5" style={{ background: 'linear-gradient(135deg, #F59E0B, #FCD34D)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                          {m.suffix}
                        </span>
                      )}
                    </div>
                    <p className="text-[11px] font-medium" style={{ color: '#64748B' }}>{m.label}</p>
                  </div>
                ))}
              </div>

              {/* Cert chips */}
              <div className="flex gap-2 mb-4">
                <span className="badge-cert text-[10px]">
                  <span className="status-dot" style={{ width: 5, height: 5 }} />DGEG
                </span>
                <span className="badge-cert text-[10px]">
                  <span className="status-dot" style={{ width: 5, height: 5 }} />Ordem dos Eng.
                </span>
              </div>

              <div className="hr-line mb-4" />

              {/* Response + quick CTA */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>
                  <span className="text-[11px] font-medium" style={{ color: '#94A3B8' }}>Orçamento gratuito</span>
                </div>
                <a
                  href={waLink(WA_MESSAGES.general)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] font-bold px-3 py-1.5 rounded-lg transition-all duration-200"
                  style={{ background: 'rgba(245,158,11,0.1)', border: '1px solid rgba(245,158,11,0.2)', color: '#F59E0B' }}
                >
                  Contactar →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-[3] flex flex-col items-center gap-2" style={{ opacity: 0.45 }}>
        <span className="text-[9px] tracking-[0.22em] uppercase font-semibold" style={{ color: '#64748B' }}>Scroll</span>
        <div style={{ width: 1, height: 36, background: 'linear-gradient(to bottom, rgba(245,158,11,0.7), transparent)', animation: 'bounce-scroll 1.8s ease-in-out infinite' }} />
      </div>
    </section>
  )
}
