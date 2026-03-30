import { waLink, WA_MESSAGES } from '@/lib/constants'

export default function EnergyHighlight() {
  return (
    <section className="bg-night py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-50 pointer-events-none" aria-hidden="true" />

      <div className="max-w-[1280px] mx-auto px-5 md:px-10 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="section-label justify-center">Energia &amp; Inovação</div>
          <h2
            className="text-[#F8FAFC] font-black mt-2"
            style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', letterSpacing: '-0.03em', lineHeight: 1.1 }}
          >
            O futuro da energia começa na sua casa.
          </h2>
          <p className="text-[#94A3B8] mt-4 max-w-xl mx-auto" style={{ lineHeight: 1.7 }}>
            WallBox para carregamento elétrico e manutenção fotovoltaica — instalados e certificados por um engenheiro eletrotécnico.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* WallBox card */}
          <div className="tech-card-amber">
            {/* Badge */}
            <div className="mb-5">
              <span
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold"
                style={{
                  background: 'rgba(245,158,11,0.1)',
                  border: '1px solid rgba(245,158,11,0.2)',
                  color: '#F59E0B',
                }}
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <rect x="1" y="7" width="18" height="10" rx="2" />
                  <line x1="23" y1="11" x2="23" y2="13" strokeWidth="3" />
                </svg>
                WallBox · EV Charging
              </span>
            </div>

            <h3
              className="text-[#F8FAFC] font-bold mb-3"
              style={{ fontSize: '1.3rem', letterSpacing: '-0.02em', lineHeight: 1.2 }}
            >
              WallBox — Carregamento Doméstico Certificado
            </h3>
            <p className="text-[#94A3B8] text-sm mb-6" style={{ lineHeight: 1.7 }}>
              A solução correta para carregar o seu veículo elétrico em casa, com total segurança e eficiência. Dimensionado especificamente para a sua instalação elétrica existente.
            </p>

            {/* Specs */}
            <ul className="flex flex-col gap-3 mb-8">
              {[
                'Compatível com todas as marcas de veículos elétricos',
                'Instalação homologada e certificada',
                'Carregamento até 22kW',
                'Circuito dedicado dimensionado pelo engenheiro',
              ].map((spec) => (
                <li key={spec} className="spec-item">
                  <span className="spec-dot-amber" />
                  {spec}
                </li>
              ))}
            </ul>

            <a
              href={waLink(WA_MESSAGES.wallbox)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-amber-500 hover:text-amber-400 transition-colors"
            >
              Pedir informações sobre WallBox
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
          </div>

          {/* Solar card */}
          <div className="tech-card-cyan">
            {/* Badge */}
            <div className="mb-5">
              <span
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold"
                style={{
                  background: 'rgba(56,189,248,0.1)',
                  border: '1px solid rgba(56,189,248,0.2)',
                  color: '#38BDF8',
                }}
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <circle cx="12" cy="12" r="5" />
                  <line x1="12" y1="1" x2="12" y2="3" />
                  <line x1="12" y1="21" x2="12" y2="23" />
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                  <line x1="1" y1="12" x2="3" y2="12" />
                  <line x1="21" y1="12" x2="23" y2="12" />
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                </svg>
                Fotovoltaico · Energia Solar
              </span>
            </div>

            <h3
              className="text-[#F8FAFC] font-bold mb-3"
              style={{ fontSize: '1.3rem', letterSpacing: '-0.02em', lineHeight: 1.2 }}
            >
              Painéis Fotovoltaicos — Máxima Eficiência, Sempre
            </h3>
            <p className="text-[#94A3B8] text-sm mb-6" style={{ lineHeight: 1.7 }}>
              O seu sistema fotovoltaico a render o máximo possível. Diagnóstico técnico especializado, manutenção preventiva e relatórios de desempenho detalhados para garantir que o seu investimento produz ao máximo.
            </p>

            {/* Specs */}
            <ul className="flex flex-col gap-3 mb-8">
              {[
                'Inspeção elétrica completa',
                'Diagnóstico de inversores',
                'Limpeza técnica especializada',
                'Relatório de desempenho detalhado',
              ].map((spec) => (
                <li key={spec} className="spec-item">
                  <span className="spec-dot-cyan" />
                  {spec}
                </li>
              ))}
            </ul>

            <a
              href={waLink(WA_MESSAGES.solar)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
              style={{ color: '#38BDF8' }}
            >
              Agendar manutenção fotovoltaica
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <a
            href={waLink(WA_MESSAGES.solar)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#94A3B8] hover:text-[#F8FAFC] text-sm transition-colors duration-200"
          >
            <span>Reduza a sua fatura de eletricidade já este mês →</span>
            <span className="text-amber-500 font-semibold hover:underline">fale connosco hoje</span>
          </a>
        </div>
      </div>
    </section>
  )
}
