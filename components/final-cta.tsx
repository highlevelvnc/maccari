import { waLink, WA_MESSAGES, BRAND } from '@/lib/constants'

export default function FinalCta() {
  return (
    <section id="contacto" className="cta-bg py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-40 pointer-events-none" aria-hidden="true" />

      {/* Ambient amber glow center */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 40% at 50% 80%, rgba(245,158,11,0.09) 0%, transparent 70%)' }} />

      {/* Circuit SVG */}
      <svg className="absolute top-0 left-0 pointer-events-none" width="500" height="400" viewBox="0 0 500 400" fill="none" style={{ opacity: 0.03 }} aria-hidden="true">
        <line x1="20" y1="80" x2="200" y2="80" stroke="#38BDF8" strokeWidth="1.5" />
        <line x1="200" y1="80" x2="200" y2="180" stroke="#38BDF8" strokeWidth="1.5" />
        <line x1="200" y1="180" x2="480" y2="180" stroke="#38BDF8" strokeWidth="1.5" />
        <line x1="80" y1="130" x2="80" y2="280" stroke="#38BDF8" strokeWidth="1.5" />
        <line x1="80" y1="280" x2="380" y2="280" stroke="#38BDF8" strokeWidth="1.5" />
        <line x1="280" y1="50" x2="280" y2="180" stroke="#38BDF8" strokeWidth="1.5" />
        <circle cx="200" cy="80" r="3" fill="#38BDF8" />
        <circle cx="200" cy="180" r="3" fill="#38BDF8" />
        <circle cx="80" cy="280" r="3" fill="#38BDF8" />
        <circle cx="280" cy="180" r="3" fill="#38BDF8" />
        <rect x="120" y="100" width="60" height="40" rx="4" stroke="#38BDF8" strokeWidth="1.5" fill="none" />
      </svg>

      <div className="max-w-2xl mx-auto px-5 text-center relative z-10">
        {/* Urgency indicator */}
        <div className="inline-flex items-center gap-2 mb-5 px-4 py-2 rounded-full" style={{ background: 'rgba(16,185,129,0.08)', border: '1px solid rgba(16,185,129,0.2)' }}>
          <span className="status-dot" style={{ width: 7, height: 7 }} />
          <span className="text-xs font-semibold" style={{ color: '#10B981' }}>Disponível agora — resposta imediata</span>
        </div>

        <div className="section-label justify-center">Contacto Directo</div>

        <h2
          className="text-[#F8FAFC] font-black mt-3 mb-6"
          style={{ fontSize: 'clamp(2.4rem, 5vw, 3.8rem)', letterSpacing: '-0.04em', lineHeight: 1.05 }}
        >
          Pronto para resolver.{' '}
          <span className="text-amber-gradient">Agora.</span>
        </h2>

        <p className="text-[#94A3B8] mb-10 max-w-[44ch] mx-auto" style={{ fontSize: '1.05rem', lineHeight: 1.75 }}>
          Sem filas de espera, sem burocracia. Um engenheiro eletrotécnico certificado disponível para si — resposta imediata, orçamento gratuito.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
          <a
            href={waLink(WA_MESSAGES.general)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-base font-bold text-white transition-all duration-200 hover:scale-[1.03] hover:shadow-[0_0_40px_rgba(37,211,102,0.45)]"
            style={{ background: '#25D366', boxShadow: '0 0 24px rgba(37,211,102,0.3), 0 4px 16px rgba(37,211,102,0.15)', minHeight: 58 }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Falar no WhatsApp
          </a>
          <a
            href="tel:+351913973551"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-base font-semibold border text-[#F8FAFC] transition-all duration-200 hover:bg-white/5 hover:-translate-y-0.5"
            style={{ borderColor: 'rgba(255,255,255,0.15)', minHeight: 58 }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.63 3.18 2 2 0 0 1 3.61 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.59a16 16 0 0 0 5.5 5.5l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 16.92z" />
            </svg>
            {BRAND.phone}
          </a>
        </div>

        {/* Micro trust line */}
        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1.5">
          {[
            'Resposta em menos de 1 hora',
            'Disponível 24 horas',
            'Orçamento gratuito',
          ].map((item, i) => (
            <span key={item} className="flex items-center gap-1.5 text-xs" style={{ color: '#64748B' }}>
              {i > 0 && <span className="w-1 h-1 rounded-full bg-[#1E293B]" />}
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
