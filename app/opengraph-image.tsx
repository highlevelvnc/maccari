import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Maccari Engenharia & Instalações — Engenheiro Eletrotécnico DGEG, Cascais'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '70px 80px',
          background: 'linear-gradient(135deg, #0A0E17 0%, #111827 100%)',
          position: 'relative',
        }}
      >
        {/* Amber radial accent */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: 700,
            height: 700,
            background: 'radial-gradient(circle at top right, rgba(245,158,11,0.18) 0%, transparent 60%)',
          }}
        />
        {/* Subtle grid */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />

        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 56,
              height: 56,
              background: 'rgba(245,158,11,0.12)',
              border: '1px solid rgba(245,158,11,0.3)',
              borderRadius: 14,
              fontSize: 28,
              color: '#F59E0B',
            }}
          >
            ⚡
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ color: '#F8FAFC', fontSize: 32, fontWeight: 900, letterSpacing: '-0.02em', lineHeight: 1 }}>
              MACCARI
            </span>
            <span style={{ color: 'rgba(245,158,11,0.7)', fontSize: 12, fontWeight: 600, letterSpacing: '0.22em', marginTop: 4 }}>
              ENGENHARIA &amp; INSTALAÇÕES
            </span>
          </div>
        </div>

        {/* Title */}
        <div style={{ display: 'flex', flexDirection: 'column', maxWidth: 1000 }}>
          <span style={{ color: '#94A3B8', fontSize: 18, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.18em', marginBottom: 18 }}>
            Engenheiro Eletrotécnico · Cascais
          </span>
          <h1
            style={{
              color: '#F8FAFC',
              fontSize: 72,
              fontWeight: 900,
              letterSpacing: '-0.04em',
              lineHeight: 1.05,
              margin: 0,
              display: 'flex',
              flexWrap: 'wrap',
            }}
          >
            <span>Engenharia é responsabilidade&nbsp;</span>
            <span style={{ color: '#F59E0B' }}>com nome e número.</span>
          </h1>
        </div>

        {/* Footer credentials */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 28, flexWrap: 'wrap' }}>
          {[
            { label: 'DGEG', value: '82284' },
            { label: 'Ordem dos Eng.', value: '84420' },
            { label: 'ANACOM', value: '84420' },
            { label: 'IMPIC', value: '117918-PUB' },
          ].map((c) => (
            <div key={c.label} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <div style={{ width: 6, height: 6, borderRadius: 3, background: '#F59E0B' }} />
              <span style={{ color: '#94A3B8', fontSize: 16, fontWeight: 500 }}>
                {c.label} <span style={{ color: '#F8FAFC', fontWeight: 700 }}>n.º {c.value}</span>
              </span>
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size },
  )
}
