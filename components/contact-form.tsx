'use client'

import { useState, useRef, useEffect } from 'react'
import { waLink } from '@/lib/constants'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'

// ─── Types ────────────────────────────────────────────────────────────────────

type FormState = 'idle' | 'submitting' | 'success'

interface FormFields {
  nome: string
  email: string
  telefone: string
  servico: string
  mensagem: string
}

const INITIAL_FIELDS: FormFields = {
  nome: '',
  email: '',
  telefone: '',
  servico: '',
  mensagem: '',
}

const SERVICOS = [
  'Reparação Elétrica',
  'Instalação Elétrica',
  'Manutenção',
  'WallBox / Veículo Elétrico',
  'Painéis Fotovoltaicos',
  'Telecomunicações (ITED)',
  'Segurança (CCTV / Alarme)',
  'Processo E-Redes',
  'Eficiência Energética',
  'Outro',
]

// ─── Input base styles (shared) ───────────────────────────────────────────────

const inputBase: React.CSSProperties = {
  width: '100%',
  background: 'rgba(255,255,255,0.03)',
  border: '1px solid rgba(255,255,255,0.08)',
  borderRadius: '12px',
  color: '#F8FAFC',
  padding: '14px 16px',
  fontSize: '15px',
  outline: 'none',
  transition: 'border-color 0.2s ease, background 0.2s ease',
  boxSizing: 'border-box' as const,
}

// ─── Subcomponents ────────────────────────────────────────────────────────────

function Label({ children }: { children: React.ReactNode }) {
  return (
    <label
      style={{
        display: 'block',
        fontSize: '12px',
        fontWeight: 600,
        letterSpacing: '0.08em',
        textTransform: 'uppercase' as const,
        color: 'rgba(248,250,252,0.5)',
        marginBottom: '8px',
      }}
    >
      {children}
    </label>
  )
}

function FocusInput({
  type,
  placeholder,
  value,
  onChange,
  required,
  name,
}: {
  type: string
  placeholder: string
  value: string
  onChange: (v: string) => void
  required?: boolean
  name: string
}) {
  const [focused, setFocused] = useState(false)
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      required={required}
      autoComplete="off"
      onChange={(e) => onChange(e.target.value)}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      style={{
        ...inputBase,
        borderColor: focused ? 'rgba(245,158,11,0.5)' : 'rgba(255,255,255,0.08)',
        background: focused ? 'rgba(255,255,255,0.05)' : 'rgba(255,255,255,0.03)',
      }}
    />
  )
}

function FocusSelect({
  value,
  onChange,
  required,
}: {
  value: string
  onChange: (v: string) => void
  required?: boolean
}) {
  const [focused, setFocused] = useState(false)
  return (
    <div style={{ position: 'relative' }}>
      <select
        name="servico"
        value={value}
        required={required}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        style={{
          ...inputBase,
          appearance: 'none' as const,
          WebkitAppearance: 'none' as const,
          cursor: 'pointer',
          paddingRight: '44px',
          borderColor: focused ? 'rgba(245,158,11,0.5)' : 'rgba(255,255,255,0.08)',
          background: focused ? 'rgba(255,255,255,0.05)' : 'rgba(255,255,255,0.03)',
        }}
      >
        <option value="" disabled style={{ background: '#1a1a1a', color: '#9ca3af' }}>
          Selecione um serviço…
        </option>
        {SERVICOS.map((s) => (
          <option key={s} value={s} style={{ background: '#1a1a1a', color: '#F8FAFC' }}>
            {s}
          </option>
        ))}
      </select>
      {/* Chevron icon */}
      <div
        style={{
          position: 'absolute',
          right: '16px',
          top: '50%',
          transform: 'translateY(-50%)',
          pointerEvents: 'none',
          color: 'rgba(248,250,252,0.4)',
        }}
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </div>
  )
}

function FocusTextarea({
  placeholder,
  value,
  onChange,
  required,
}: {
  placeholder: string
  value: string
  onChange: (v: string) => void
  required?: boolean
}) {
  const [focused, setFocused] = useState(false)
  return (
    <textarea
      name="mensagem"
      placeholder={placeholder}
      value={value}
      required={required}
      rows={4}
      onChange={(e) => onChange(e.target.value)}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      style={{
        ...inputBase,
        resize: 'vertical' as const,
        minHeight: '120px',
        borderColor: focused ? 'rgba(245,158,11,0.5)' : 'rgba(255,255,255,0.08)',
        background: focused ? 'rgba(255,255,255,0.05)' : 'rgba(255,255,255,0.03)',
        fontFamily: 'inherit',
      }}
    />
  )
}

// ─── Contact info cards ───────────────────────────────────────────────────────

function ContactCard({
  icon,
  label,
  children,
  delay,
  isVisible,
}: {
  icon: React.ReactNode
  label: string
  children: React.ReactNode
  delay: number
  isVisible: boolean
}) {
  return (
    <div
      className="fade-up"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
        transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
        background: 'rgba(255,255,255,0.03)',
        border: '1px solid rgba(255,255,255,0.07)',
        borderRadius: '16px',
        padding: '20px 24px',
        display: 'flex',
        alignItems: 'flex-start',
        gap: '16px',
      }}
    >
      <div
        style={{
          flexShrink: 0,
          width: '44px',
          height: '44px',
          borderRadius: '12px',
          background: 'rgba(245,158,11,0.1)',
          border: '1px solid rgba(245,158,11,0.2)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#F59E0B',
        }}
      >
        {icon}
      </div>
      <div>
        <p
          style={{
            fontSize: '11px',
            fontWeight: 600,
            letterSpacing: '0.09em',
            textTransform: 'uppercase' as const,
            color: 'rgba(248,250,252,0.4)',
            marginBottom: '4px',
          }}
        >
          {label}
        </p>
        <div style={{ color: '#F8FAFC', fontSize: '15px', lineHeight: '1.5' }}>{children}</div>
      </div>
    </div>
  )
}

// ─── Success state ────────────────────────────────────────────────────────────

function SuccessPanel() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column' as const,
        alignItems: 'center',
        justifyContent: 'center',
        gap: '20px',
        padding: '48px 32px',
        textAlign: 'center' as const,
        minHeight: '320px',
      }}
    >
      {/* Animated checkmark */}
      <div
        style={{
          width: '72px',
          height: '72px',
          borderRadius: '50%',
          background: 'rgba(37,211,102,0.12)',
          border: '2px solid rgba(37,211,102,0.4)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          animation: 'successPop 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        }}
      >
        <svg
          width="34"
          height="34"
          viewBox="0 0 34 34"
          fill="none"
          style={{ animation: 'checkDraw 0.5s ease 0.2s both' }}
        >
          <path
            d="M7 17L14 24L27 10"
            stroke="#25D366"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{
              strokeDasharray: 30,
              strokeDashoffset: 0,
              animation: 'checkStroke 0.4s ease 0.25s both',
            }}
          />
        </svg>
      </div>

      <div>
        <h3
          style={{
            fontSize: '22px',
            fontWeight: 700,
            color: '#F8FAFC',
            marginBottom: '10px',
            letterSpacing: '-0.02em',
          }}
        >
          Mensagem enviada!
        </h3>
        <p style={{ color: 'rgba(248,250,252,0.6)', fontSize: '15px', lineHeight: '1.6' }}>
          Será contactado brevemente.
          <br />
          Obrigado pela sua confiança.
        </p>
      </div>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          marginTop: '8px',
        }}
      >
        <span className="status-dot" style={{ background: '#25D366' }} />
        <span style={{ fontSize: '13px', color: 'rgba(248,250,252,0.45)' }}>
          Mensagem enviada via WhatsApp
        </span>
      </div>

      <style>{`
        @keyframes successPop {
          from { transform: scale(0.5); opacity: 0; }
          to   { transform: scale(1);   opacity: 1; }
        }
        @keyframes checkStroke {
          from { stroke-dashoffset: 30; }
          to   { stroke-dashoffset: 0; }
        }
      `}</style>
    </div>
  )
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function ContactForm() {
  const [fields, setFields] = useState<FormFields>(INITIAL_FIELDS)
  const [formState, setFormState] = useState<FormState>('idle')

  const { ref: sectionRef, isVisible: sectionVisible } = useIntersectionObserver({ threshold: 0.08 })
  const { ref: cardsRef, isVisible: cardsVisible } = useIntersectionObserver({ threshold: 0.1 })

  function setField<K extends keyof FormFields>(key: K) {
    return (value: string) => setFields((prev) => ({ ...prev, [key]: value }))
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (formState !== 'idle') return

    setFormState('submitting')

    const servicoStr = fields.servico || 'Não especificado'
    const telefoneStr = fields.telefone ? fields.telefone : 'Não fornecido'

    const message =
      `Olá, sou ${fields.nome}. Tenho interesse em: ${servicoStr}. ` +
      `${fields.mensagem}. Email: ${fields.email}. Telefone: ${telefoneStr}`

    const url = waLink(message)

    window.open(url, '_blank', 'noopener,noreferrer')

    // Short delay to feel intentional before showing success
    setTimeout(() => {
      setFormState('success')
    }, 600)
  }

  return (
    <section
      id="contacto"
      ref={sectionRef as React.RefObject<HTMLElement>}
      style={{
        position: 'relative',
        background: 'linear-gradient(180deg, #0f0f0f 0%, #111214 50%, #0d0d0f 100%)',
        padding: 'clamp(80px, 10vw, 120px) clamp(20px, 5vw, 80px)',
        overflow: 'hidden',
      }}
    >
      {/* Subtle background grid texture */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'radial-gradient(circle at 20% 30%, rgba(245,158,11,0.04) 0%, transparent 50%), ' +
            'radial-gradient(circle at 80% 70%, rgba(245,158,11,0.03) 0%, transparent 50%)',
          pointerEvents: 'none',
        }}
      />

      <div style={{ position: 'relative', maxWidth: '1180px', margin: '0 auto' }}>

        {/* Section header */}
        <div
          className="fade-up"
          style={{
            textAlign: 'center' as const,
            marginBottom: 'clamp(48px, 6vw, 72px)',
            opacity: sectionVisible ? 1 : 0,
            transform: sectionVisible ? 'translateY(0)' : 'translateY(28px)',
            transition: 'opacity 0.7s ease, transform 0.7s ease',
          }}
        >
          <span className="section-label">FORMULÁRIO DE CONTACTO</span>
          <h2
            style={{
              fontSize: 'clamp(28px, 4vw, 44px)',
              fontWeight: 800,
              letterSpacing: '-0.03em',
              lineHeight: 1.15,
              color: '#F8FAFC',
              marginTop: '14px',
            }}
          >
            Fale connosco.{' '}
            <span className="text-amber-gradient">Resposta garantida.</span>
          </h2>
          <div className="hr-line" style={{ margin: '24px auto 0', maxWidth: '56px' }} />
        </div>

        {/* Two-column layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))',
            gap: 'clamp(32px, 4vw, 56px)',
            alignItems: 'start',
          }}
        >

          {/* ── Left: Form (60%) ─────────────────────────────────────────── */}
          <div
            className="fade-up"
            style={{
              flex: '0 0 60%',
              opacity: sectionVisible ? 1 : 0,
              transform: sectionVisible ? 'translateY(0)' : 'translateY(32px)',
              transition: 'opacity 0.7s ease 0.1s, transform 0.7s ease 0.1s',
            }}
          >
            <div
              style={{
                background: 'rgba(255,255,255,0.025)',
                backdropFilter: 'blur(24px)',
                WebkitBackdropFilter: 'blur(24px)',
                border: '1px solid rgba(255,255,255,0.07)',
                borderRadius: '24px',
                padding: 'clamp(28px, 4vw, 44px)',
                boxShadow:
                  '0 0 0 1px rgba(255,255,255,0.03) inset, ' +
                  '0 32px 64px rgba(0,0,0,0.4)',
              }}
            >
              {formState === 'success' ? (
                <SuccessPanel />
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                      gap: '20px',
                    }}
                  >
                    {/* Nome */}
                    <div>
                      <Label>Nome *</Label>
                      <FocusInput
                        type="text"
                        name="nome"
                        placeholder="O seu nome completo"
                        value={fields.nome}
                        onChange={setField('nome')}
                        required
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <Label>Email *</Label>
                      <FocusInput
                        type="email"
                        name="email"
                        placeholder="email@exemplo.pt"
                        value={fields.email}
                        onChange={setField('email')}
                        required
                      />
                    </div>

                    {/* Telefone */}
                    <div>
                      <Label>Telefone</Label>
                      <FocusInput
                        type="tel"
                        name="telefone"
                        placeholder="+351 9XX XXX XXX"
                        value={fields.telefone}
                        onChange={setField('telefone')}
                      />
                    </div>

                    {/* Serviço */}
                    <div>
                      <Label>Serviço *</Label>
                      <FocusSelect
                        value={fields.servico}
                        onChange={setField('servico')}
                        required
                      />
                    </div>
                  </div>

                  {/* Mensagem — full width */}
                  <div style={{ marginTop: '20px' }}>
                    <Label>Mensagem *</Label>
                    <FocusTextarea
                      placeholder="Descreva brevemente a sua necessidade ou dúvida…"
                      value={fields.mensagem}
                      onChange={setField('mensagem')}
                      required
                    />
                  </div>

                  {/* Submit */}
                  <div style={{ marginTop: '28px' }}>
                    <button
                      type="submit"
                      disabled={formState === 'submitting'}
                      style={{
                        width: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '10px',
                        background:
                          formState === 'submitting'
                            ? 'rgba(37,211,102,0.6)'
                            : '#25D366',
                        border: 'none',
                        borderRadius: '14px',
                        color: '#fff',
                        fontWeight: 700,
                        fontSize: '15px',
                        letterSpacing: '0.02em',
                        padding: '16px 24px',
                        cursor: formState === 'submitting' ? 'not-allowed' : 'pointer',
                        transition: 'background 0.2s ease, transform 0.15s ease, box-shadow 0.2s ease',
                        boxShadow: '0 4px 24px rgba(37,211,102,0.25)',
                      }}
                      onMouseEnter={(e) => {
                        if (formState === 'idle') {
                          ;(e.currentTarget as HTMLButtonElement).style.background = '#20c55e'
                          ;(e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-1px)'
                          ;(e.currentTarget as HTMLButtonElement).style.boxShadow = '0 8px 32px rgba(37,211,102,0.35)'
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (formState === 'idle') {
                          ;(e.currentTarget as HTMLButtonElement).style.background = '#25D366'
                          ;(e.currentTarget as HTMLButtonElement).style.transform = 'translateY(0)'
                          ;(e.currentTarget as HTMLButtonElement).style.boxShadow = '0 4px 24px rgba(37,211,102,0.25)'
                        }
                      }}
                    >
                      {formState === 'submitting' ? (
                        <>
                          <SpinnerIcon />
                          A abrir WhatsApp…
                        </>
                      ) : (
                        <>
                          <WhatsAppIcon />
                          Enviar via WhatsApp
                        </>
                      )}
                    </button>

                    <p
                      style={{
                        textAlign: 'center' as const,
                        marginTop: '14px',
                        fontSize: '12px',
                        color: 'rgba(248,250,252,0.35)',
                        lineHeight: '1.5',
                      }}
                    >
                      Será redirecionado para o WhatsApp. Entraremos em contacto brevemente.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>

          {/* ── Right: Contact info (40%) ─────────────────────────────────── */}
          <div
            ref={cardsRef as React.RefObject<HTMLDivElement>}
            style={{
              display: 'flex',
              flexDirection: 'column' as const,
              gap: '16px',
              paddingTop: '4px',
            }}
          >
            {/* Intro blurb */}
            <div
              className="fade-up"
              style={{
                opacity: cardsVisible ? 1 : 0,
                transform: cardsVisible ? 'translateY(0)' : 'translateY(24px)',
                transition: 'opacity 0.6s ease 0.05s, transform 0.6s ease 0.05s',
                marginBottom: '8px',
              }}
            >
              <h3
                style={{
                  fontSize: 'clamp(17px, 2vw, 20px)',
                  fontWeight: 700,
                  color: '#F8FAFC',
                  letterSpacing: '-0.02em',
                  marginBottom: '8px',
                }}
              >
                Contacto direto
              </h3>
              <p style={{ fontSize: '14px', color: 'rgba(248,250,252,0.5)', lineHeight: '1.6' }}>
                Prefere falar diretamente? Estamos disponíveis por telefone, email ou WhatsApp.
              </p>
            </div>

            {/* Phone */}
            <ContactCard
              icon={<PhoneIcon />}
              label="Telefone / WhatsApp"
              delay={150}
              isVisible={cardsVisible}
            >
              <a
                href="tel:+351913973551"
                style={{
                  color: '#F8FAFC',
                  textDecoration: 'none',
                  fontWeight: 600,
                  transition: 'color 0.2s',
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = '#F59E0B')}
                onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = '#F8FAFC')}
              >
                +351 913 973 551
              </a>
            </ContactCard>

            {/* Email */}
            <ContactCard
              icon={<MailIcon />}
              label="Email"
              delay={250}
              isVisible={cardsVisible}
            >
              <a
                href="mailto:geral@maccariengenharia.pt"
                style={{
                  color: '#F8FAFC',
                  textDecoration: 'none',
                  fontWeight: 500,
                  fontSize: '14px',
                  wordBreak: 'break-all' as const,
                  transition: 'color 0.2s',
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = '#F59E0B')}
                onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = '#F8FAFC')}
              >
                geral@maccariengenharia.pt
              </a>
            </ContactCard>

            {/* Address */}
            <ContactCard
              icon={<MapPinIcon />}
              label="Morada"
              delay={350}
              isVisible={cardsVisible}
            >
              <address style={{ fontStyle: 'normal', fontSize: '14px', lineHeight: '1.65' }}>
                Av. Francisca Lindoso, 44 2D
                <br />
                São Domingos de Rana
                <br />
                <span style={{ color: 'rgba(248,250,252,0.5)' }}>2785-451 Cascais</span>
              </address>
            </ContactCard>

            {/* Trust badge */}
            <div
              className="fade-up"
              style={{
                opacity: cardsVisible ? 1 : 0,
                transform: cardsVisible ? 'translateY(0)' : 'translateY(24px)',
                transition: 'opacity 0.6s ease 0.45s, transform 0.6s ease 0.45s',
                marginTop: '8px',
              }}
            >
              <div className="badge-cert-premium" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                <span
                  className="status-dot"
                  style={{ background: '#25D366', flexShrink: 0 }}
                />
                <span style={{ fontSize: '12px', color: 'rgba(248,250,252,0.55)', fontWeight: 500 }}>
                  Orçamento gratuito e sem compromisso
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

// ─── Inline SVG icons ─────────────────────────────────────────────────────────

function WhatsAppIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  )
}

function SpinnerIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      style={{ animation: 'spin 0.8s linear infinite' }}
    >
      <path d="M21 12a9 9 0 11-6.219-8.56" />
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.6 13.16a19.79 19.79 0 01-3.07-8.67A2 2 0 012.48 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 9.91a16 16 0 006.34 6.34l1.28-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
    </svg>
  )
}

function MailIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  )
}

function MapPinIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}
