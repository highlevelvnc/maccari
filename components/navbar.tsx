'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { waLink, WA_MESSAGES } from '@/lib/constants'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      setScrolled(scrollY > 30)
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      setScrollProgress(docHeight > 0 ? (scrollY / docHeight) * 100 : 0)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'Serviços', href: '#servicos' },
    { label: 'Porquê Maccari', href: '#porque-maccari' },
    { label: 'O Fundador', href: '#fundador' },
    { label: 'Contacto', href: '#contacto' },
  ]

  return (
    <header
      className="fixed top-0 w-full z-50 transition-all duration-400"
      style={{
        background: scrolled ? 'rgba(10, 14, 23, 0.88)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px) saturate(1.8)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(20px) saturate(1.8)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
        boxShadow: scrolled ? '0 4px 32px rgba(0,0,0,0.35)' : 'none',
      }}
    >
      {/* Scroll progress bar */}
      <div
        className="absolute bottom-0 left-0 h-[1px] transition-all duration-100"
        style={{
          width: `${scrollProgress}%`,
          background: 'linear-gradient(90deg, rgba(245,158,11,0.8), rgba(252,211,77,0.6))',
          opacity: scrolled ? 1 : 0,
        }}
      />

      <div className="max-w-[1280px] mx-auto px-5 md:px-10 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group" aria-label="Maccari Engenharia - início">
          <Image
            src="/logo.png"
            alt="Maccari Engenharia"
            width={36}
            height={36}
            className="object-contain transition-opacity duration-200 group-hover:opacity-90"
            priority
          />
          <div className="flex flex-col leading-none">
            <span
              className="text-white font-black tracking-tight text-xl transition-colors duration-200 group-hover:text-amber-400"
              style={{ fontWeight: 900, letterSpacing: '-0.025em' }}
            >
              MACCARI
            </span>
            <span className="text-[9px] font-semibold tracking-[0.22em] uppercase transition-colors duration-200 group-hover:text-amber-500/80" style={{ color: 'rgba(245,158,11,0.55)' }}>
              ENGENHARIA &amp; INSTALAÇÕES
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-7" aria-label="Navegação principal">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium transition-colors duration-200 relative group"
              style={{ color: '#94A3B8' }}
            >
              <span className="group-hover:text-[#F8FAFC] transition-colors duration-200">{link.label}</span>
              <span className="absolute -bottom-0.5 left-0 right-0 h-px bg-amber-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
            </a>
          ))}
          <a
            href={waLink(WA_MESSAGES.general)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 hover:shadow-[0_0_20px_rgba(245,158,11,0.4)] hover:-translate-y-0.5"
            style={{ background: '#F59E0B', color: '#0A0E17' }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Pedir Orçamento
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-[5px] p-2.5 rounded-xl transition-colors duration-200"
          style={{ background: mobileOpen ? 'rgba(245,158,11,0.08)' : 'transparent', border: '1px solid transparent', borderColor: mobileOpen ? 'rgba(245,158,11,0.18)' : 'transparent' }}
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label="Abrir menu"
          aria-expanded={mobileOpen}
        >
          <span className="block w-5 h-0.5 bg-[#F8FAFC] transition-all duration-250 origin-center"
            style={{ transform: mobileOpen ? 'rotate(45deg) translateY(7px)' : 'none', background: mobileOpen ? '#F59E0B' : '#F8FAFC' }} />
          <span className="block w-5 h-0.5 transition-all duration-250"
            style={{ opacity: mobileOpen ? 0 : 1, background: '#F8FAFC', transform: mobileOpen ? 'scaleX(0)' : 'scaleX(1)' }} />
          <span className="block w-5 h-0.5 bg-[#F8FAFC] transition-all duration-250 origin-center"
            style={{ transform: mobileOpen ? 'rotate(-45deg) translateY(-7px)' : 'none', background: mobileOpen ? '#F59E0B' : '#F8FAFC' }} />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className="md:hidden overflow-hidden transition-all duration-350 ease-in-out"
        style={{ maxHeight: mobileOpen ? '320px' : '0', opacity: mobileOpen ? 1 : 0, transform: mobileOpen ? 'translateY(0)' : 'translateY(-8px)' }}
      >
        <div
          className="mx-4 mb-4 rounded-2xl p-4 flex flex-col gap-1"
          style={{ background: 'rgba(10,14,23,0.95)', backdropFilter: 'blur(20px)', border: '1px solid rgba(255,255,255,0.06)' }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium py-2.5 px-3 rounded-xl transition-all duration-200"
              style={{ color: '#94A3B8' }}
              onMouseEnter={(e) => { e.currentTarget.style.color = '#F8FAFC'; e.currentTarget.style.background = 'rgba(255,255,255,0.04)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = '#94A3B8'; e.currentTarget.style.background = 'transparent'; }}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="mt-2 pt-3" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
            <a
              href={waLink(WA_MESSAGES.general)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-bold transition-all duration-200"
              style={{ background: '#F59E0B', color: '#0A0E17' }}
              onClick={() => setMobileOpen(false)}
            >
              Pedir Orçamento Gratuito
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
