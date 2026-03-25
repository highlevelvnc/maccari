'use client'

import { COVERAGE_ZONES, waLink, WA_MESSAGES } from '@/lib/constants'

export default function Coverage() {
  return (
    <section className="bg-graphite py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-40 pointer-events-none" aria-hidden="true" />

      <div className="max-w-[1280px] mx-auto px-5 md:px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* LEFT */}
          <div>
            <div className="section-label">Área de Cobertura</div>
            <h2
              className="text-[#F8FAFC] font-black mt-2 mb-5"
              style={{ fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', letterSpacing: '-0.03em', lineHeight: 1.1 }}
            >
              Engenharia elétrica em São Domingos de Rana e região
            </h2>
            <p className="text-[#94A3B8] mb-8" style={{ lineHeight: 1.7 }}>
              Com base em São Domingos de Rana, prestamos serviços em toda a Área Metropolitana de Lisboa. Deslocação rápida, resposta imediata — a disponibilidade 24 horas aplica-se a toda a área de cobertura.
            </p>

            {/* Zones */}
            <div className="flex flex-wrap gap-2 mb-8">
              {COVERAGE_ZONES.map((zone) => (
                <span key={zone} className="badge-zone">
                  {zone}
                </span>
              ))}
            </div>

            <a
              href={waLink(WA_MESSAGES.general)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold transition-all duration-200"
              style={{
                background: 'rgba(245,158,11,0.1)',
                border: '1px solid rgba(245,158,11,0.25)',
                color: '#F59E0B',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(245,158,11,0.18)'
                e.currentTarget.style.borderColor = 'rgba(245,158,11,0.5)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(245,158,11,0.1)'
                e.currentTarget.style.borderColor = 'rgba(245,158,11,0.25)'
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              Verificar disponibilidade na minha área
            </a>
          </div>

          {/* RIGHT — Abstract Map */}
          <div>
            <div className="glass-card p-4">
              <svg
                viewBox="0 0 400 400"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full"
                style={{ maxHeight: 380 }}
                aria-label="Mapa de cobertura — São Domingos de Rana e Lisboa"
              >
                {/* Background */}
                <rect width="400" height="400" fill="#0A0E17" rx="12" />

                {/* Grid lines very subtle */}
                <line x1="0" y1="100" x2="400" y2="100" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
                <line x1="0" y1="200" x2="400" y2="200" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
                <line x1="0" y1="300" x2="400" y2="300" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
                <line x1="100" y1="0" x2="100" y2="400" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
                <line x1="200" y1="0" x2="200" y2="400" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
                <line x1="300" y1="0" x2="300" y2="400" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />

                {/* Tagus River (abstract curved path) */}
                <path
                  d="M 60 280 C 100 270, 150 290, 200 275 C 250 260, 290 285, 340 270 C 360 265, 380 260, 400 250"
                  stroke="rgba(56,189,248,0.15)"
                  strokeWidth="12"
                  fill="none"
                  strokeLinecap="round"
                />
                <path
                  d="M 60 280 C 100 270, 150 290, 200 275 C 250 260, 290 285, 340 270 C 360 265, 380 260, 400 250"
                  stroke="rgba(56,189,248,0.08)"
                  strokeWidth="18"
                  fill="none"
                  strokeLinecap="round"
                />

                {/* Coastline */}
                <path
                  d="M 30 120 C 40 140, 35 160, 50 180 C 60 195, 55 215, 60 235 C 65 255, 60 270, 60 280"
                  stroke="rgba(148,163,184,0.12)"
                  strokeWidth="1.5"
                  fill="none"
                  strokeDasharray="4 4"
                />

                {/* Road/connection lines between cities */}
                <line x1="200" y1="200" x2="155" y2="225" stroke="rgba(245,158,11,0.08)" strokeWidth="1" />
                <line x1="200" y1="200" x2="240" y2="215" stroke="rgba(245,158,11,0.08)" strokeWidth="1" />
                <line x1="200" y1="200" x2="260" y2="190" stroke="rgba(245,158,11,0.08)" strokeWidth="1" />
                <line x1="200" y1="200" x2="175" y2="170" stroke="rgba(245,158,11,0.08)" strokeWidth="1" />
                <line x1="200" y1="200" x2="310" y2="230" stroke="rgba(245,158,11,0.06)" strokeWidth="1" />
                <line x1="200" y1="200" x2="330" y2="200" stroke="rgba(245,158,11,0.06)" strokeWidth="1" />
                <line x1="200" y1="200" x2="130" y2="175" stroke="rgba(245,158,11,0.06)" strokeWidth="1" />
                <line x1="200" y1="200" x2="200" y2="120" stroke="rgba(245,158,11,0.06)" strokeWidth="1" />

                {/* City dots */}
                {/* São Domingos de Rana — PRIMARY with pulse */}
                <circle cx="200" cy="200" r="18" fill="rgba(245,158,11,0.08)" style={{ animation: 'status-pulse 2s infinite' }} />
                <circle cx="200" cy="200" r="10" fill="rgba(245,158,11,0.15)" />
                <circle cx="200" cy="200" r="5" fill="#F59E0B" />

                {/* Cascais */}
                <circle cx="155" cy="225" r="4" fill="rgba(245,158,11,0.7)" />
                <circle cx="155" cy="225" r="7" fill="rgba(245,158,11,0.1)" />

                {/* Estoril */}
                <circle cx="175" cy="215" r="3" fill="rgba(245,158,11,0.5)" />

                {/* Oeiras */}
                <circle cx="240" cy="215" r="4" fill="rgba(245,158,11,0.6)" />

                {/* Lisboa */}
                <circle cx="310" cy="230" r="5" fill="rgba(245,158,11,0.8)" />
                <circle cx="310" cy="230" r="9" fill="rgba(245,158,11,0.1)" />

                {/* Sintra */}
                <circle cx="130" cy="175" r="3.5" fill="rgba(245,158,11,0.5)" />

                {/* Amadora */}
                <circle cx="285" cy="200" r="3" fill="rgba(245,158,11,0.4)" />

                {/* Almada (south of Tagus) */}
                <circle cx="310" cy="310" r="3.5" fill="rgba(56,189,248,0.5)" />

                {/* Parede */}
                <circle cx="165" cy="200" r="2.5" fill="rgba(245,158,11,0.4)" />

                {/* City labels */}
                <text x="200" y="225" textAnchor="middle" fill="#F59E0B" fontSize="8.5" fontWeight="700" fontFamily="Inter, system-ui">
                  S. D. Rana
                </text>
                <text x="135" y="236" textAnchor="middle" fill="rgba(248,250,252,0.55)" fontSize="7.5" fontFamily="Inter, system-ui">
                  Cascais
                </text>
                <text x="240" y="230" textAnchor="middle" fill="rgba(248,250,252,0.55)" fontSize="7.5" fontFamily="Inter, system-ui">
                  Oeiras
                </text>
                <text x="315" y="248" textAnchor="middle" fill="rgba(248,250,252,0.65)" fontSize="8" fontWeight="600" fontFamily="Inter, system-ui">
                  Lisboa
                </text>
                <text x="115" y="170" textAnchor="middle" fill="rgba(248,250,252,0.45)" fontSize="7" fontFamily="Inter, system-ui">
                  Sintra
                </text>
                <text x="316" y="325" textAnchor="middle" fill="rgba(56,189,248,0.6)" fontSize="7" fontFamily="Inter, system-ui">
                  Almada
                </text>

                {/* Legend */}
                <rect x="14" y="350" width="120" height="38" rx="8" fill="rgba(17,24,39,0.85)" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
                <circle cx="28" cy="362" r="4" fill="#F59E0B" />
                <text x="37" y="366" fill="rgba(245,158,11,0.9)" fontSize="7" fontWeight="700" fontFamily="Inter, system-ui">
                  Sede
                </text>
                <circle cx="28" cy="378" r="3" fill="rgba(245,158,11,0.6)" />
                <text x="37" y="382" fill="rgba(148,163,184,0.8)" fontSize="7" fontFamily="Inter, system-ui">
                  Área coberta
                </text>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
