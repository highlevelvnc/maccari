import { SERVICES, waLink } from '@/lib/constants'

function ServiceIcon({ name, color }: { name: string; color: string }) {
  const stroke = color === 'cyan' ? '#38BDF8' : color === 'green' ? '#10B981' : '#F59E0B'

  if (name === 'zap') {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    )
  }
  if (name === 'cpu') {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <rect x="8" y="8" width="8" height="8" />
        <line x1="4" y1="9" x2="2" y2="9" />
        <line x1="4" y1="12" x2="2" y2="12" />
        <line x1="4" y1="15" x2="2" y2="15" />
        <line x1="20" y1="9" x2="22" y2="9" />
        <line x1="20" y1="12" x2="22" y2="12" />
        <line x1="20" y1="15" x2="22" y2="15" />
        <line x1="9" y1="4" x2="9" y2="2" />
        <line x1="12" y1="4" x2="12" y2="2" />
        <line x1="15" y1="4" x2="15" y2="2" />
        <line x1="9" y1="20" x2="9" y2="22" />
        <line x1="12" y1="20" x2="12" y2="22" />
        <line x1="15" y1="20" x2="15" y2="22" />
      </svg>
    )
  }
  if (name === 'shield') {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    )
  }
  if (name === 'battery') {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="7" width="18" height="10" rx="2" />
        <line x1="23" y1="11" x2="23" y2="13" strokeWidth="3" />
        <polyline points="10 11 8 13 11 13 9 15" />
      </svg>
    )
  }
  if (name === 'sun') {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
    )
  }
  if (name === 'trending') {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
      </svg>
    )
  }
  return null
}

export default function Services() {
  return (
    <section id="servicos" className="bg-night py-20 md:py-28 relative overflow-hidden">
      {/* Dot grid */}
      <div className="absolute inset-0 dot-grid opacity-60 pointer-events-none" aria-hidden="true" />

      <div className="max-w-[1280px] mx-auto px-5 md:px-10 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="section-label justify-center">Serviços</div>
          <h2
            className="text-[#F8FAFC] font-black mt-2"
            style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', letterSpacing: '-0.03em', lineHeight: 1.1 }}
          >
            Serviços de Engenharia Elétrica
          </h2>
          <p className="text-[#94A3B8] mt-4 max-w-xl mx-auto" style={{ lineHeight: 1.7 }}>
            Do diagnóstico à execução — cada trabalho com a assinatura e responsabilidade de um engenheiro eletrotécnico certificado.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service) => (
            <div key={service.id} className="service-card">
              <div className={`service-icon-wrap ${service.color !== 'amber' ? service.color : ''}`}>
                <ServiceIcon name={service.icon} color={service.color} />
              </div>
              <div>
                <h3
                  className="text-[#F8FAFC] font-bold text-base mb-2"
                  style={{ letterSpacing: '-0.01em' }}
                >
                  {service.title}
                </h3>
                <p
                  className="text-[#94A3B8] text-sm"
                  style={{ lineHeight: 1.65 }}
                >
                  {service.description}
                </p>
              </div>
              <div className="mt-auto pt-2">
                <a
                  href={waLink(service.waMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold transition-all duration-200 hover:underline flex items-center gap-1"
                  style={{
                    color: service.color === 'cyan' ? '#38BDF8' : service.color === 'green' ? '#10B981' : '#F59E0B',
                  }}
                >
                  {service.cta}
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
