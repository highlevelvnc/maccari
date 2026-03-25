'use client'

import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'
import { useCounter } from '@/hooks/useCounter'
import { PILLARS, COUNTERS } from '@/lib/constants'

function PillarIcon({ name }: { name: string }) {
  if (name === 'award') {
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="6" />
        <path d="M8.21 13.89L7 23l5-3 5 3-1.21-9.12" />
      </svg>
    )
  }
  if (name === 'calendar') {
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    )
  }
  if (name === 'zap-circle') {
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 8 10 13 12 13 12 16 14 11 12 11 12 8" />
      </svg>
    )
  }
  if (name === 'clock') {
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    )
  }
  return null
}

function CounterCell({ value, suffix, label, start }: { value: number; suffix: string; label: string; start: boolean }) {
  const count = useCounter({ target: value, duration: 2000, start })

  return (
    <div className="text-center p-4">
      <div className="flex items-end justify-center gap-1">
        <span className="counter-number">{count}</span>
        <span
          className="text-2xl font-black mb-1"
          style={{
            background: 'linear-gradient(135deg, #F59E0B, #FCD34D)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          {suffix}
        </span>
      </div>
      <p className="text-[#94A3B8] text-sm mt-1 font-medium">{label}</p>
    </div>
  )
}

export default function WhyMaccari() {
  const { ref: sectionRef, isVisible } = useIntersectionObserver({ threshold: 0.15, triggerOnce: true })

  return (
    <section
      id="porque-maccari"
      className="bg-graphite py-20 md:py-28 relative overflow-hidden"
    >
      {/* Dot grid */}
      <div className="absolute inset-0 dot-grid opacity-50 pointer-events-none" aria-hidden="true" />

      <div
        ref={sectionRef as React.RefObject<HTMLDivElement>}
        className="max-w-[1280px] mx-auto px-5 md:px-10 relative z-10"
      >
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          {/* LEFT */}
          <div className={`w-full lg:w-[42%] fade-up ${isVisible ? 'visible' : ''}`}>
            <div className="section-label">Porquê Maccari</div>
            <h2
              className="text-[#F8FAFC] font-black mt-2 mb-6"
              style={{ fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', letterSpacing: '-0.03em', lineHeight: 1.1 }}
            >
              Porque a eletricidade não admite segunda escolha.
            </h2>
            <p className="text-[#94A3B8] mb-8" style={{ lineHeight: 1.7 }}>
              Trabalho elétrico mal executado não é apenas incómodo — é um risco real para pessoas e propriedade. Por isso, cada projeto é assinado por um engenheiro eletrotécnico com credencial DGEG e inscrição na Ordem dos Engenheiros.
            </p>

            {/* Counter grid */}
            <div
              className="grid grid-cols-2 rounded-2xl overflow-hidden"
              style={{ border: '1px solid rgba(255,255,255,0.06)' }}
            >
              {COUNTERS.map((counter, i) => (
                <div
                  key={counter.label}
                  style={{
                    borderRight: i % 2 === 0 ? '1px solid rgba(255,255,255,0.06)' : 'none',
                    borderBottom: i < 2 ? '1px solid rgba(255,255,255,0.06)' : 'none',
                    background: 'rgba(10,14,23,0.5)',
                  }}
                >
                  <CounterCell
                    value={counter.value}
                    suffix={counter.suffix}
                    label={counter.label}
                    start={isVisible}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className="w-full lg:w-[58%]">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {PILLARS.map((pillar, i) => (
                <div
                  key={pillar.title}
                  className={`pilar-card fade-up delay-${i + 1} ${isVisible ? 'visible' : ''}`}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
                    style={{
                      background: i % 2 === 0 ? 'rgba(245,158,11,0.1)' : 'rgba(56,189,248,0.1)',
                      border: `1px solid ${i % 2 === 0 ? 'rgba(245,158,11,0.15)' : 'rgba(56,189,248,0.15)'}`,
                    }}
                  >
                    <PillarIcon name={pillar.icon} />
                  </div>
                  <h3
                    className="text-[#F8FAFC] font-bold text-sm mb-2"
                    style={{ letterSpacing: '-0.01em' }}
                  >
                    {pillar.title}
                  </h3>
                  <p className="text-[#94A3B8] text-sm" style={{ lineHeight: 1.65 }}>
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
