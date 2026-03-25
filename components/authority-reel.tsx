'use client'

import { useRef, useState, useEffect } from 'react'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'
import { waLink, WA_MESSAGES } from '@/lib/constants'

export default function AuthorityReel() {
  const { ref: sectionRef, isVisible } = useIntersectionObserver({ threshold: 0.12, triggerOnce: true })
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
    <section className="relative py-24 md:py-32 overflow-hidden" style={{ background: '#05080F' }}>

      {/* VIDEO BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0" style={{ background: '#05080F' }} />
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover object-center"
          style={{ opacity: videoReady ? 0.32 : 0, transition: 'opacity 2s cubic-bezier(0.4,0,0.2,1)', filter: 'saturate(1.2) brightness(0.8)' }}
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          aria-hidden="true"
        >
          <source src="/headerma.mp4" type="video/mp4" />
        </video>
      </div>

      {/* OVERLAYS */}
      <div className="absolute inset-0 z-[1] pointer-events-none" style={{ background: 'linear-gradient(to bottom, rgba(5,8,15,0.92) 0%, rgba(5,8,15,0.65) 40%, rgba(5,8,15,0.65) 60%, rgba(5,8,15,0.96) 100%)' }} />
      <div className="absolute inset-0 z-[1] pointer-events-none" style={{ background: 'radial-gradient(ellipse 80% 60% at 80% 50%, rgba(245,158,11,0.05) 0%, transparent 60%)' }} />
      {/* Top amber edge */}
      <div className="absolute top-0 left-0 right-0 z-[2] h-px" style={{ background: 'linear-gradient(90deg, transparent 0%, rgba(245,158,11,0.4) 40%, rgba(245,158,11,0.4) 60%, transparent 100%)' }} />
      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 z-[2] h-32 pointer-events-none" style={{ background: 'linear-gradient(to bottom, transparent, rgba(5,8,15,0) 0%, var(--night) 100%)' }} />

      {/* CONTENT */}
      <div
        ref={sectionRef as React.RefObject<HTMLDivElement>}
        className="relative z-[3] max-w-[1280px] mx-auto px-5 md:px-10"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* LEFT */}
          <div>
            <div className={`section-label fade-up ${isVisible ? 'visible' : ''}`}>Credencial Técnica</div>
            <h2
              className={`text-[#F8FAFC] font-black mt-3 mb-6 fade-up delay-1 ${isVisible ? 'visible' : ''}`}
              style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', letterSpacing: '-0.035em', lineHeight: 1.08 }}
            >
              Cada projeto assinado.{' '}
              <span className="text-amber-gradient">Responsabilidade técnica formal.</span>
            </h2>
            <p
              className={`text-[#94A3B8] mb-8 fade-up delay-2 ${isVisible ? 'visible' : ''}`}
              style={{ fontSize: '1.05rem', lineHeight: 1.78, maxWidth: '48ch' }}
            >
              Trabalho elétrico exige mais do que técnica — exige responsabilidade civil e penal. Cada intervenção é assinada por um engenheiro eletrotécnico inscrito na Ordem dos Engenheiros e credenciado pela DGEG.
            </p>

            {/* Cert badges row */}
            <div className={`flex flex-wrap gap-2.5 mb-8 fade-up delay-3 ${isVisible ? 'visible' : ''}`}>
              <span className="badge-cert-premium">
                <span className="status-dot" style={{ width: 6, height: 6 }} />
                Credenciado DGEG
              </span>
              <span className="badge-oe-premium">
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                Ordem dos Engenheiros
              </span>
            </div>

            <a
              href={waLink(WA_MESSAGES.general)}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl text-sm font-semibold transition-all duration-200 fade-up delay-4 ${isVisible ? 'visible' : ''}`}
              style={{
                background: 'rgba(245,158,11,0.09)',
                border: '1px solid rgba(245,158,11,0.28)',
                color: '#F59E0B',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(245,158,11,0.16)'; e.currentTarget.style.borderColor = 'rgba(245,158,11,0.5)' }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(245,158,11,0.09)'; e.currentTarget.style.borderColor = 'rgba(245,158,11,0.28)' }}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
              Verificar credenciais — fale connosco
            </a>
          </div>

          {/* RIGHT — Authority blocks */}
          <div className="flex flex-col gap-4">
            {[
              {
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="8" r="6" /><path d="M8.21 13.89L7 23l5-3 5 3-1.21-9.12" />
                  </svg>
                ),
                color: 'rgba(245,158,11,0.1)',
                border: 'rgba(245,158,11,0.18)',
                title: 'Credencial DGEG',
                text: 'Autorização formal emitida pela Direção-Geral de Energia e Geologia para execução de instalações elétricas em Portugal.',
                accent: '#F59E0B',
              },
              {
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                ),
                color: 'rgba(56,189,248,0.08)',
                border: 'rgba(56,189,248,0.16)',
                title: 'Membro da Ordem dos Engenheiros',
                text: 'Inscrição ativa na Ordem dos Engenheiros — garantia de formação contínua, ética profissional e responsabilidade técnica.',
                accent: '#38BDF8',
              },
              {
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                  </svg>
                ),
                color: 'rgba(16,185,129,0.08)',
                border: 'rgba(16,185,129,0.16)',
                title: '20+ Anos de Experiência Comprovada',
                text: 'Duas décadas de intervenções em habitações, comércio e indústria. Diagnóstico preciso, soluções definitivas — não remendos.',
                accent: '#10B981',
              },
            ].map((item, i) => (
              <div
                key={item.title}
                className={`authority-reel-item fade-up delay-${i + 2} ${isVisible ? 'visible' : ''}`}
                style={{ borderColor: item.border }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: item.color, border: `1px solid ${item.border}` }}>
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-[#F8FAFC] font-semibold text-sm mb-1.5" style={{ letterSpacing: '-0.01em' }}>{item.title}</h3>
                    <p className="text-[#64748B] text-xs leading-relaxed" style={{ lineHeight: 1.65 }}>{item.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom divider stat bar */}
        <div className={`mt-16 pt-10 border-t border-white/[0.05] grid grid-cols-3 gap-6 fade-up delay-5 ${isVisible ? 'visible' : ''}`}>
          {[
            { value: '20+', label: 'Anos de experiência', color: '#F59E0B' },
            { value: '500+', label: 'Instalações realizadas', color: '#F59E0B' },
            { value: '100%', label: 'Trabalho certificado', color: '#10B981' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-black text-3xl md:text-4xl mb-1" style={{ color: stat.color, letterSpacing: '-0.03em' }}>{stat.value}</div>
              <div className="text-xs font-medium" style={{ color: '#475569' }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
