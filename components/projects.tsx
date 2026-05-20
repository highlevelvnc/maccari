'use client'

import Image from 'next/image'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'
import { waLink, WA_MESSAGES } from '@/lib/constants'

const PROJECTS = [
  {
    image: '/quadro-eletrico-knx-domotica.jpg',
    alt: 'Quadro elétrico com automação KNX para domótica em moradia de alto padrão em Cascais',
    title: 'Quadro KNX & Domótica',
    location: 'Cascais',
    category: 'Automação',
    description: 'Quadro eléctrico técnico com integração KNX completa: iluminação, estores, AVAC, segurança e controlo de cenas centralizado.',
    waMessage: WA_MESSAGES.domotica,
  },
  {
    image: '/iluminacao-sanca-cascais.jpg',
    alt: 'Iluminação cénica em sanca de tecto com fita LED indireta numa moradia em Cascais',
    title: 'Iluminação Cénica de Sanca',
    location: 'Cascais',
    category: 'Iluminação',
    description: 'Projecto e instalação de iluminação indirecta em sanca perimetral com fita LED dimerizável e temperatura de cor regulável.',
    waMessage: WA_MESSAGES.domotica,
  },
  {
    image: '/iluminacao-led-embebida-roupeiro.jpg',
    alt: 'Iluminação LED embebida em roupeiro de moradia premium em Cascais',
    title: 'Iluminação LED Integrada',
    location: 'Cascais',
    category: 'Iluminação',
    description: 'Iluminação LED embebida em mobiliário e roupeiros com sensores de presença e controlo via domótica.',
    waMessage: WA_MESSAGES.domotica,
  },
]

export default function Projects() {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1, triggerOnce: true })

  return (
    <section id="projetos" className="bg-graphite py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-30 pointer-events-none" aria-hidden="true" />

      <div ref={ref as React.RefObject<HTMLDivElement>} className="relative max-w-[1280px] mx-auto px-5 md:px-10">
        <div className={`text-center mb-12 fade-up ${isVisible ? 'visible' : ''}`}>
          <div className="section-label justify-center">Projetos Realizados</div>
          <h2
            className="text-[#F8FAFC] font-black mt-3 mb-4"
            style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', letterSpacing: '-0.035em', lineHeight: 1.1 }}
          >
            Trabalho técnico, <span className="text-amber-gradient">resultado limpo.</span>
          </h2>
          <p className="text-[#94A3B8] max-w-[55ch] mx-auto" style={{ lineHeight: 1.7 }}>
            Pequena selecção de projectos recentes em Cascais — quadros eléctricos, domótica e iluminação cénica.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {PROJECTS.map((p, i) => (
            <a
              key={p.image}
              href={waLink(p.waMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex flex-col rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 fade-up delay-${i + 1} ${isVisible ? 'visible' : ''}`}
              style={{ background: 'rgba(17,24,39,0.6)', border: '1px solid rgba(255,255,255,0.06)' }}
            >
              <div className="relative aspect-[4/3] overflow-hidden ken-burns-host">
                <Image
                  src={p.image}
                  alt={p.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.07]"
                />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(10,14,23,0.65) 0%, transparent 50%)' }} />
                <span className="absolute top-3 left-3 text-[10px] font-bold uppercase tracking-[0.13em] px-2.5 py-1 rounded-md backdrop-blur-md"
                  style={{ background: 'rgba(245,158,11,0.18)', color: '#FCD34D', border: '1px solid rgba(245,158,11,0.3)' }}
                >
                  {p.category}
                </span>
              </div>

              <div className="p-5 flex-1 flex flex-col">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-[#F8FAFC] font-bold text-base group-hover:text-[#F59E0B] transition-colors" style={{ letterSpacing: '-0.01em' }}>
                    {p.title}
                  </h3>
                  <span className="flex items-center gap-1 text-[11px]" style={{ color: '#64748B' }}>
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                    {p.location}
                  </span>
                </div>
                <p className="text-[#94A3B8] text-sm mb-3 flex-1" style={{ lineHeight: 1.6 }}>
                  {p.description}
                </p>
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold mt-auto" style={{ color: '#F59E0B' }}>
                  Pedir projeto similar
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="9 18 15 12 9 6" /></svg>
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
