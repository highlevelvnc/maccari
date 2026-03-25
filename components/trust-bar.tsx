import { TRUST_ITEMS } from '@/lib/constants'

const trustIcons: Record<string, React.ReactNode> = {
  '20 Anos': (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  ),
  'DGEG': (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  ),
  'Ordem Eng.': (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="4" />
      <path d="M8 14l-3 7h14l-3-7" />
    </svg>
  ),
  '24 Horas': (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  ),
  'Resposta Rápida': (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
      <polyline points="17 6 23 6 23 12" />
    </svg>
  ),
}

export default function TrustBar() {
  return (
    <section className="bg-graphite py-6 relative overflow-hidden">
      {/* Dot grid overlay */}
      <div className="absolute inset-0 dot-grid opacity-50 pointer-events-none" aria-hidden="true" />

      <div className="max-w-[1280px] mx-auto px-5 md:px-10 relative z-10">
        <div className="flex items-center justify-center gap-8 overflow-x-auto pb-1 scrollbar-thin">
          {TRUST_ITEMS.map((item, i) => (
            <div key={item.label} className="flex items-center gap-8 flex-shrink-0">
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0">
                  {trustIcons[item.label] || (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" strokeWidth="2">
                      <circle cx="12" cy="12" r="10" />
                    </svg>
                  )}
                </div>
                <div>
                  <p className="text-[#F8FAFC] font-bold text-sm leading-tight">{item.label}</p>
                  <p className="text-[#94A3B8] text-xs leading-tight">{item.sub}</p>
                </div>
              </div>
              {i < TRUST_ITEMS.length - 1 && (
                <div
                  className="hidden sm:block flex-shrink-0"
                  style={{
                    width: 1,
                    height: 32,
                    background: 'rgba(255,255,255,0.08)',
                  }}
                  aria-hidden="true"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
