'use client'

import { useState, useEffect } from 'react'

export default function Preloader() {
  const [hidden, setHidden] = useState(false)
  const [phase, setPhase] = useState<'in' | 'hold' | 'out'>('in')

  useEffect(() => {
    const t1 = setTimeout(() => setPhase('hold'), 800)
    const t2 = setTimeout(() => setPhase('out'), 1900)
    const t3 = setTimeout(() => setHidden(true), 2500)
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3) }
  }, [])

  if (hidden) return null

  return (
    <div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
      style={{
        background: 'linear-gradient(135deg, #0A0E17 0%, #0D1220 100%)',
        opacity: phase === 'out' ? 0 : 1,
        transition: 'opacity 0.6s cubic-bezier(0.4,0,0.2,1)',
        pointerEvents: phase === 'out' ? 'none' : 'all',
      }}
    >
      {/* Outer glow ring */}
      <div
        className="relative flex items-center justify-center mb-7"
        style={{
          opacity: phase === 'in' ? 0 : 1,
          transform: phase === 'in' ? 'scale(0.85)' : 'scale(1)',
          transition: 'opacity 0.5s ease 0.3s, transform 0.5s cubic-bezier(0.34,1.56,0.64,1) 0.3s',
        }}
      >
        {/* Ambient glow */}
        <div className="absolute inset-0 rounded-full" style={{ background: 'radial-gradient(circle, rgba(245,158,11,0.15) 0%, transparent 70%)', width: 120, height: 120, top: -20, left: -20 }} />
        {/* Icon container */}
        <div
          className="relative w-20 h-20 rounded-2xl flex items-center justify-center"
          style={{ background: 'rgba(245,158,11,0.08)', border: '1px solid rgba(245,158,11,0.2)', boxShadow: '0 0 30px rgba(245,158,11,0.15)' }}
        >
          <svg
            width="36"
            height="36"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#F59E0B"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ strokeDasharray: 200, animation: 'bolt-draw 1s ease-out 0.1s forwards', opacity: 0 }}
          >
            <polyline points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
          </svg>
        </div>
      </div>

      {/* Brand text */}
      <div
        style={{
          opacity: phase === 'in' ? 0 : 1,
          transform: phase === 'in' ? 'translateY(10px)' : 'translateY(0)',
          transition: 'opacity 0.5s ease 0.6s, transform 0.5s ease 0.6s',
        }}
      >
        <p
          className="text-white text-2xl text-center font-black"
          style={{ fontWeight: 900, letterSpacing: '-0.025em' }}
        >
          MACCARI
        </p>
        <p
          className="text-center text-[10px] font-semibold tracking-[0.22em] mt-1"
          style={{ color: 'rgba(245,158,11,0.6)' }}
        >
          ENGENHARIA &amp; INSTALAÇÕES
        </p>
      </div>

      {/* Loading line */}
      <div
        className="mt-8 overflow-hidden rounded-full"
        style={{
          width: 80, height: 2,
          background: 'rgba(255,255,255,0.05)',
          opacity: phase === 'in' ? 0 : 1,
          transition: 'opacity 0.4s ease 0.8s',
        }}
      >
        <div
          className="h-full rounded-full"
          style={{
            background: 'linear-gradient(90deg, transparent, #F59E0B, transparent)',
            animation: phase !== 'in' ? 'shimmer 1.2s ease infinite' : 'none',
            backgroundSize: '200% 100%',
          }}
        />
      </div>
    </div>
  )
}
