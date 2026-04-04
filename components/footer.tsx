import Image from 'next/image'
import { BRAND, CREDENTIALS, SERVICES, waLink, WA_MESSAGES } from '@/lib/constants'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-graphite border-t pt-16 pb-8" style={{ borderColor: 'rgba(255,255,255,0.05)' }}>
      <div className="max-w-[1280px] mx-auto px-5 md:px-10">
        {/* Three columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Col 1 — Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-5">
              <Image src="/logo.png" alt="Maccari Engenharia" width={40} height={40} className="object-contain" />
              <div className="flex flex-col leading-none">
                <span className="text-white font-black tracking-tight text-xl" style={{ letterSpacing: '-0.02em' }}>MACCARI</span>
                <span className="text-amber-500/50 text-[10px] font-medium tracking-widest uppercase mt-0.5" style={{ letterSpacing: '0.18em' }}>ENGENHARIA &amp; INSTALAÇÕES</span>
              </div>
            </div>
            <p className="text-[#94A3B8] text-sm mb-4" style={{ lineHeight: 1.7, maxWidth: '32ch' }}>
              Engenheiro eletrotécnico credenciado, membro da Ordem dos Engenheiros. Instalações elétricas, telecomunicações e energias renováveis com rigor técnico formal.
            </p>

            {/* Credential badges with numbers */}
            <div className="flex flex-col gap-1.5 mb-5">
              {Object.values(CREDENTIALS).map((c) => (
                <span key={c.label} className="flex items-center gap-2 text-xs" style={{ color: '#64748B' }}>
                  <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#F59E0B', display: 'inline-block', flexShrink: 0 }} />
                  <span style={{ color: '#94A3B8' }}>{c.label}</span>
                  <span className="font-mono" style={{ color: '#64748B' }}>n.º {c.number}</span>
                </span>
              ))}
            </div>

            <p className="text-[#64748B] text-xs italic" style={{ lineHeight: 1.6 }}>
              &ldquo;Para mim, engenharia significa responsabilidade, segurança e confiança.&rdquo;
            </p>
            <p className="text-[#475569] text-[11px] mt-1">— Evandro Maccari</p>
          </div>

          {/* Col 2 — Services */}
          <div>
            <h3
              className="uppercase text-xs font-bold mb-5"
              style={{ color: 'rgba(248,250,252,0.4)', letterSpacing: '0.1em' }}
            >
              Serviços
            </h3>
            <ul className="flex flex-col gap-2.5">
              {SERVICES.map((service) => (
                <li key={service.id}>
                  <a
                    href={waLink(service.waMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-[#94A3B8] hover:text-[#F8FAFC] transition-colors duration-200"
                  >
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Contact */}
          <div>
            <h3
              className="uppercase text-xs font-bold mb-5"
              style={{ color: 'rgba(248,250,252,0.4)', letterSpacing: '0.1em' }}
            >
              Contacto
            </h3>

            <div className="flex flex-col gap-3 mb-5">
              <a
                href="tel:+351913973551"
                className="flex items-center gap-2.5 text-sm text-[#94A3B8] hover:text-[#F8FAFC] transition-colors duration-200"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.63 3.18 2 2 0 0 1 3.61 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.59a16 16 0 0 0 5.5 5.5l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 16.92z" />
                </svg>
                {BRAND.phone}
              </a>

              <a
                href="mailto:geral@maccariengenharia.pt"
                className="flex items-center gap-2.5 text-sm text-[#94A3B8] hover:text-[#F8FAFC] transition-colors duration-200"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                {BRAND.email}
              </a>
              <div className="flex items-start gap-2.5 text-sm text-[#94A3B8]">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginTop: 2, flexShrink: 0 }}>
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span>{BRAND.addressFull}</span>
              </div>

              <div className="flex items-center gap-2.5 text-sm">
                <span
                  style={{
                    width: 7,
                    height: 7,
                    borderRadius: '50%',
                    background: '#F59E0B',
                    display: 'inline-block',
                    animation: 'status-pulse 2s infinite',
                    flexShrink: 0,
                  }}
                />
                <span className="text-[#F59E0B] font-medium">24 Horas — Disponível</span>
              </div>
            </div>

            <a
              href={waLink(WA_MESSAGES.general)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold text-white transition-all duration-200 hover:opacity-90"
              style={{ background: '#25D366' }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Enviar Mensagem
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="hr-line mb-6" />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[#94A3B8] text-xs">
            &copy; {year} Maccari Engenharia &amp; Instalações. Todos os direitos reservados.
          </p>
          <p className="text-[#94A3B8] text-xs">
            DGEG 82284 · OE 84420 · ANACOM 84420 · IMPIC 117918-PUB · Cascais, Portugal
          </p>
        </div>
      </div>
    </footer>
  )
}
