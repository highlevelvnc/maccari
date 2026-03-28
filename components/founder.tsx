'use client'

import React from 'react'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'
import { waLink, WA_MESSAGES } from '@/lib/constants'

// ─── Credential data ──────────────────────────────────────────────────────────

const CREDENTIALS = [
  {
    label: 'Ordem dos Engenheiros',
    number: 'n.º 84420',
    color: 'amber',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="6" />
        <path d="M8.21 13.89L7 23l5-3 5 3-1.21-9.12" />
      </svg>
    ),
  },
  {
    label: 'DGEG',
    number: '82284',
    color: 'cyan',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    label: 'ANACOM',
    number: '84420',
    color: 'cyan',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
  {
    label: 'Certificação UE',
    number: 'E1937120',
    color: 'amber',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 8 12 12 14 14" />
      </svg>
    ),
  },
  {
    label: 'IMPIC',
    number: '117918-PUB',
    color: 'amber',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M9 9h6M9 13h6M9 17h4" />
      </svg>
    ),
  },
]

// ─── Formation timeline data ───────────────────────────────────────────────────

const FORMATION = [
  {
    degree: 'Engenharia Elétrica',
    institution: 'UFSC',
    detail: 'Universidade Federal de Santa Catarina',
    color: 'amber',
  },
  {
    degree: 'Engenharia Civil',
    institution: 'Estácio de Sá',
    detail: 'Universidade Estácio de Sá',
    color: 'cyan',
  },
  {
    degree: 'MBA Gestão de Projetos',
    institution: 'FGV',
    detail: 'Fundação Getulio Vargas',
    color: 'amber',
  },
]

// ─── Credential Card ──────────────────────────────────────────────────────────

function CredentialCard({
  label,
  number,
  color,
  icon,
  delay,
  visible,
}: {
  label: string
  number: string
  color: 'amber' | 'cyan'
  icon: React.ReactNode
  delay: number
  visible: boolean
}) {
  const borderColor = color === 'amber' ? 'rgba(245,158,11,0.2)' : 'rgba(56,189,248,0.2)'
  const bgColor = color === 'amber' ? 'rgba(245,158,11,0.05)' : 'rgba(56,189,248,0.05)'
  const hoverBorder = color === 'amber' ? 'rgba(245,158,11,0.38)' : 'rgba(56,189,248,0.38)'
  const numColor = color === 'amber' ? '#F59E0B' : '#38BDF8'

  return (
    <div
      className={`fade-up delay-${delay} ${visible ? 'visible' : ''}`}
      style={{
        background: bgColor,
        border: `1px solid ${borderColor}`,
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderRadius: '12px',
        padding: '12px 14px',
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        transition: 'border-color 0.25s ease, background 0.25s ease',
        cursor: 'default',
      }}
      onMouseEnter={e => {
        const el = e.currentTarget as HTMLDivElement
        el.style.borderColor = hoverBorder
        el.style.background = color === 'amber' ? 'rgba(245,158,11,0.09)' : 'rgba(56,189,248,0.09)'
      }}
      onMouseLeave={e => {
        const el = e.currentTarget as HTMLDivElement
        el.style.borderColor = borderColor
        el.style.background = bgColor
      }}
    >
      <div
        style={{
          width: 30,
          height: 30,
          borderRadius: 8,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: color === 'amber' ? 'rgba(245,158,11,0.1)' : 'rgba(56,189,248,0.1)',
          flexShrink: 0,
        }}
      >
        {icon}
      </div>
      <div style={{ minWidth: 0 }}>
        <p
          style={{
            fontSize: '0.65rem',
            fontWeight: 700,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: '#64748B',
            marginBottom: 1,
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
        >
          {label}
        </p>
        <p
          style={{
            fontSize: '0.78rem',
            fontWeight: 700,
            color: numColor,
            letterSpacing: '0.04em',
            whiteSpace: 'nowrap',
          }}
        >
          {number}
        </p>
      </div>
    </div>
  )
}

// ─── Formation Timeline Item ──────────────────────────────────────────────────

function FormationItem({
  degree,
  institution,
  detail,
  color,
  delay,
  visible,
  isLast,
}: {
  degree: string
  institution: string
  detail: string
  color: 'amber' | 'cyan'
  delay: number
  visible: boolean
  isLast: boolean
}) {
  const dotColor = color === 'amber' ? '#F59E0B' : '#38BDF8'
  const lineColor = 'rgba(255,255,255,0.06)'

  return (
    <div
      className={`fade-up delay-${delay} ${visible ? 'visible' : ''}`}
      style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}
    >
      {/* Timeline spine */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0, paddingTop: 4 }}>
        <div
          style={{
            width: 10,
            height: 10,
            borderRadius: '50%',
            background: dotColor,
            boxShadow: `0 0 8px ${dotColor}66`,
            flexShrink: 0,
          }}
        />
        {!isLast && (
          <div
            style={{
              width: 1,
              flex: 1,
              minHeight: 28,
              background: lineColor,
              marginTop: 4,
            }}
          />
        )}
      </div>

      {/* Content */}
      <div style={{ paddingBottom: isLast ? 0 : 20 }}>
        <p
          style={{
            fontSize: '0.82rem',
            fontWeight: 700,
            color: '#F8FAFC',
            letterSpacing: '-0.01em',
            marginBottom: 2,
          }}
        >
          {degree}
        </p>
        <p
          style={{
            fontSize: '0.75rem',
            fontWeight: 700,
            color: dotColor,
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
            marginBottom: 1,
          }}
        >
          {institution}
        </p>
        <p
          style={{
            fontSize: '0.72rem',
            color: '#475569',
            lineHeight: 1.4,
          }}
        >
          {detail}
        </p>
      </div>
    </div>
  )
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function Founder() {
  const { ref: sectionRef, isVisible } = useIntersectionObserver({ threshold: 0.1, triggerOnce: true })

  const ctaHref = waLink(WA_MESSAGES.general)

  return (
    <section
      id="fundador"
      style={{
        background: 'var(--night)',
        position: 'relative',
        overflow: 'hidden',
        padding: 'clamp(64px, 8vw, 112px) 0',
      }}
    >
      {/* Dot-grid overlay */}
      <div
        className="dot-grid"
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.45,
          pointerEvents: 'none',
        }}
      />

      {/* Ambient glows */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '10%',
          left: '-10%',
          width: '50%',
          height: '60%',
          borderRadius: '50%',
          background: 'radial-gradient(ellipse, rgba(245,158,11,0.04) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          bottom: '0%',
          right: '-5%',
          width: '45%',
          height: '55%',
          borderRadius: '50%',
          background: 'radial-gradient(ellipse, rgba(56,189,248,0.04) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      {/* Inner container */}
      <div
        ref={sectionRef as React.RefObject<HTMLDivElement>}
        style={{
          maxWidth: 1280,
          margin: '0 auto',
          padding: '0 clamp(20px, 5vw, 40px)',
          position: 'relative',
          zIndex: 10,
        }}
      >
        {/* ── Section label ── */}
        <div className={`fade-up ${isVisible ? 'visible' : ''}`}>
          <span className="section-label">O Fundador</span>
        </div>

        {/* ── Main two-column layout ── */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 48,
            alignItems: 'flex-start',
          }}
          className="founder-layout"
        >
          {/* ── LEFT COLUMN (70%) ── */}
          <div style={{ width: '100%' }}>
            {/* Headline */}
            <h2
              className={`fade-up delay-1 ${isVisible ? 'visible' : ''}`}
              style={{
                fontSize: 'clamp(1.75rem, 3.5vw, 2.8rem)',
                fontWeight: 900,
                letterSpacing: '-0.035em',
                lineHeight: 1.08,
                color: '#F8FAFC',
                marginBottom: 24,
                marginTop: 10,
              }}
            >
              Engenharia é responsabilidade{' '}
              <span className="text-amber-gradient">com nome e número.</span>
            </h2>

            {/* Status badge row */}
            <div
              className={`fade-up delay-2 ${isVisible ? 'visible' : ''}`}
              style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 28 }}
            >
              <span className="badge-oe-premium">
                <span className="status-dot" />
                Engenheiro Eletrotécnico
              </span>
              <span className="badge-cert-premium">
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Credenciado DGEG
              </span>
              <span className="badge-cert-premium">
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Membro Ordem dos Engenheiros
              </span>
            </div>

            {/* Avatar + intro */}
            <div
              className={`fade-up delay-2 ${isVisible ? 'visible' : ''}`}
              style={{ display: 'flex', gap: 20, alignItems: 'flex-start', marginBottom: 24 }}
            >
              {/* Avatar placeholder — amber gradient with bolt icon */}
              <div
                style={{
                  width: 72,
                  height: 72,
                  borderRadius: 16,
                  flexShrink: 0,
                  background: 'linear-gradient(135deg, #92400E 0%, #F59E0B 50%, #FCD34D 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 0 24px rgba(245,158,11,0.25), 0 4px 16px rgba(0,0,0,0.4)',
                  border: '1px solid rgba(245,158,11,0.3)',
                }}
                aria-hidden="true"
              >
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="rgba(0,0,0,0.75)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                </svg>
              </div>

              {/* Name + title */}
              <div>
                <p
                  style={{
                    fontSize: '1.15rem',
                    fontWeight: 800,
                    color: '#F8FAFC',
                    letterSpacing: '-0.02em',
                    marginBottom: 3,
                  }}
                >
                  Evandro Maccari
                </p>
                <p
                  style={{
                    fontSize: '0.78rem',
                    fontWeight: 600,
                    color: '#F59E0B',
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    marginBottom: 6,
                  }}
                >
                  Engenheiro Eletrotécnico &amp; Fundador
                </p>
                <p
                  style={{
                    fontSize: '0.75rem',
                    color: '#475569',
                    lineHeight: 1.5,
                  }}
                >
                  Em Portugal desde 2019 &middot; São Domingos de Rana
                </p>
              </div>
            </div>

            <hr className="hr-line" style={{ marginBottom: 24 }} />

            {/* Bio paragraphs */}
            <div
              className={`fade-up delay-3 ${isVisible ? 'visible' : ''}`}
              style={{ display: 'flex', flexDirection: 'column', gap: 14, marginBottom: 28 }}
            >
              <p style={{ color: '#94A3B8', lineHeight: 1.75, fontSize: '0.95rem' }}>
                Com formação em Engenharia Elétrica pela{' '}
                <span style={{ color: '#CBD5E1', fontWeight: 600 }}>UFSC</span>, Engenharia Civil pela{' '}
                <span style={{ color: '#CBD5E1', fontWeight: 600 }}>Estácio de Sá</span> e MBA em Gestão de Projetos pela{' '}
                <span style={{ color: '#CBD5E1', fontWeight: 600 }}>FGV</span>, Evandro acumula mais de{' '}
                <span style={{ color: '#F59E0B', fontWeight: 700 }}>15 anos</span> de experiência em grandes projetos de infraestrutura no Brasil e no México.
              </p>
              <p style={{ color: '#94A3B8', lineHeight: 1.75, fontSize: '0.95rem' }}>
                O seu percurso inclui centrais hidroelétricas, parques eólicos e solares, subestações de alta tensão e linhas de transmissão — projetos que exigem o mais alto rigor técnico e responsabilidade formal de engenheiro.
              </p>
              <p style={{ color: '#94A3B8', lineHeight: 1.75, fontSize: '0.95rem' }}>
                Radicado em Portugal desde 2019, fundou a{' '}
                <span style={{ color: '#F59E0B', fontWeight: 700 }}>Maccari Engenharia</span> com uma missão clara: aproximar a engenharia das pessoas. Explicar soluções com clareza, cumprir prazos com pontualidade e trabalhar sempre com total transparência — é esta a sua promessa em cada projeto.
              </p>
            </div>

            {/* Quote */}
            <div
              className={`fade-up delay-4 ${isVisible ? 'visible' : ''}`}
              style={{
                background: 'rgba(245,158,11,0.04)',
                border: '1px solid rgba(245,158,11,0.15)',
                borderLeft: '3px solid rgba(245,158,11,0.6)',
                borderRadius: '0 12px 12px 0',
                padding: '16px 20px',
                marginBottom: 28,
              }}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="rgba(245,158,11,0.35)"
                style={{ marginBottom: 8 }}
              >
                <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
                <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
              </svg>
              <p
                style={{
                  color: '#CBD5E1',
                  fontSize: '0.95rem',
                  fontStyle: 'italic',
                  lineHeight: 1.7,
                  fontWeight: 500,
                }}
              >
                "Para mim, engenharia significa responsabilidade, segurança e confiança."
              </p>
              <p
                style={{
                  color: '#F59E0B',
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  marginTop: 10,
                }}
              >
                Evandro Maccari &mdash; Fundador
              </p>
            </div>

            {/* Formation timeline */}
            <div
              className={`fade-up delay-4 ${isVisible ? 'visible' : ''}`}
              style={{ marginBottom: 32 }}
            >
              <p
                style={{
                  fontSize: '0.68rem',
                  fontWeight: 700,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: '#475569',
                  marginBottom: 16,
                }}
              >
                Formação Académica
              </p>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                {FORMATION.map((item, i) => (
                  <FormationItem
                    key={item.institution}
                    degree={item.degree}
                    institution={item.institution}
                    detail={item.detail}
                    color={item.color as 'amber' | 'cyan'}
                    delay={5}
                    visible={isVisible}
                    isLast={i === FORMATION.length - 1}
                  />
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className={`fade-up delay-6 ${isVisible ? 'visible' : ''}`}>
              <a
                href={ctaHref}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 10,
                  padding: '13px 28px',
                  borderRadius: 12,
                  background: 'linear-gradient(135deg, #D97706 0%, #F59E0B 50%, #FCD34D 100%)',
                  color: '#000',
                  fontWeight: 800,
                  fontSize: '0.88rem',
                  letterSpacing: '-0.01em',
                  textDecoration: 'none',
                  boxShadow: '0 4px 24px rgba(245,158,11,0.28), 0 1px 0 rgba(255,255,255,0.1) inset',
                  transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLAnchorElement
                  el.style.transform = 'translateY(-2px)'
                  el.style.boxShadow = '0 8px 32px rgba(245,158,11,0.4), 0 1px 0 rgba(255,255,255,0.1) inset'
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLAnchorElement
                  el.style.transform = 'translateY(0)'
                  el.style.boxShadow = '0 4px 24px rgba(245,158,11,0.28), 0 1px 0 rgba(255,255,255,0.1) inset'
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.32 10.7 19.79 19.79 0 01.25 2.11 2 2 0 012.24.01h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.18 6.18l1.56-1.56a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                </svg>
                Falar com o Engenheiro
              </a>
              <p
                style={{
                  marginTop: 10,
                  fontSize: '0.72rem',
                  color: '#475569',
                  letterSpacing: '0.02em',
                }}
              >
                Resposta em minutos &middot; Sem compromisso
              </p>
            </div>
          </div>

          {/* ── RIGHT COLUMN (30%) — Credential cards floating panel ── */}
          <div
            style={{
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              gap: 16,
            }}
            className="founder-credentials"
          >
            {/* Panel header */}
            <div
              className={`fade-up delay-1 ${isVisible ? 'visible' : ''}`}
              style={{
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid rgba(255,255,255,0.07)',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
                borderRadius: 16,
                padding: '16px 18px',
              }}
            >
              <p
                style={{
                  fontSize: '0.65rem',
                  fontWeight: 700,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: '#475569',
                  marginBottom: 4,
                }}
              >
                Credenciais Oficiais
              </p>
              <p
                style={{
                  fontSize: '0.78rem',
                  color: '#64748B',
                  lineHeight: 1.55,
                }}
              >
                Todas as credenciais são públicas e verificáveis nas respetivas entidades reguladoras.
              </p>
            </div>

            {/* Individual credential cards */}
            {CREDENTIALS.map((cred, i) => (
              <CredentialCard
                key={cred.label}
                label={cred.label}
                number={cred.number}
                color={cred.color as 'amber' | 'cyan'}
                icon={cred.icon}
                delay={Math.min(i + 2, 6)}
                visible={isVisible}
              />
            ))}

            {/* Experience highlight card */}
            <div
              className={`fade-up delay-6 ${isVisible ? 'visible' : ''}`}
              style={{
                background: 'rgba(56,189,248,0.04)',
                border: '1px solid rgba(56,189,248,0.15)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                borderRadius: 12,
                padding: '14px 16px',
                marginTop: 4,
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
                <div
                  style={{
                    width: 30,
                    height: 30,
                    borderRadius: 8,
                    background: 'rgba(56,189,248,0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="2" y1="12" x2="22" y2="12" />
                    <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
                  </svg>
                </div>
                <p
                  style={{
                    fontSize: '0.65rem',
                    fontWeight: 700,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: '#38BDF8',
                  }}
                >
                  Experiência Internacional
                </p>
              </div>
              <p style={{ fontSize: '0.75rem', color: '#64748B', lineHeight: 1.6 }}>
                Projetos em <span style={{ color: '#94A3B8', fontWeight: 600 }}>Brasil e México</span> — centrais hidroelétricas, parques eólicos &amp; solares, subestações e linhas de transmissão.
              </p>
              <div style={{ display: 'flex', gap: 6, marginTop: 10, flexWrap: 'wrap' }}>
                {['Hidroelétricas', 'Eólica', 'Solar', 'Subestações'].map(tag => (
                  <span
                    key={tag}
                    style={{
                      fontSize: '0.62rem',
                      fontWeight: 700,
                      letterSpacing: '0.06em',
                      textTransform: 'uppercase',
                      color: '#38BDF8',
                      background: 'rgba(56,189,248,0.08)',
                      border: '1px solid rgba(56,189,248,0.15)',
                      borderRadius: 6,
                      padding: '3px 7px',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Portugal since 2019 note */}
            <div
              className={`fade-up delay-6 ${isVisible ? 'visible' : ''}`}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                padding: '10px 14px',
                background: 'rgba(16,185,129,0.04)',
                border: '1px solid rgba(16,185,129,0.12)',
                borderRadius: 10,
              }}
            >
              <span className="status-dot" />
              <p style={{ fontSize: '0.73rem', color: '#64748B', lineHeight: 1.5 }}>
                Em Portugal desde <span style={{ color: '#10B981', fontWeight: 700 }}>2019</span> &middot; São Domingos de Rana
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Responsive layout styles */}
      <style>{`
        @media (min-width: 1024px) {
          .founder-layout {
            flex-direction: row !important;
            align-items: flex-start !important;
          }
          .founder-layout > div:first-child {
            width: 68% !important;
          }
          .founder-credentials {
            width: 32% !important;
            position: sticky;
            top: 100px;
          }
        }
      `}</style>
    </section>
  )
}
