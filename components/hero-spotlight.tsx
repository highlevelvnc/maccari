'use client'

import { useEffect, useRef } from 'react'

/**
 * Cursor-tracking radial glow. Mounted as a sibling inside any element
 * that has `.spotlight-host`. Updates CSS vars --mx / --my for the
 * ::after pseudo to follow the pointer.
 *
 * Desktop only — disables itself on (hover: none) devices.
 */
export default function HeroSpotlight({ targetSelector }: { targetSelector: string }) {
  const rafRef = useRef<number | null>(null)
  const targetRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return
    if (!window.matchMedia('(hover: hover)').matches) return

    const el = document.querySelector<HTMLElement>(targetSelector)
    if (!el) return
    targetRef.current = el
    el.classList.add('spotlight-host')

    const handleMove = (e: MouseEvent) => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      rafRef.current = requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top
        el.style.setProperty('--mx', `${x}px`)
        el.style.setProperty('--my', `${y}px`)
      })
    }

    el.addEventListener('mousemove', handleMove)
    return () => {
      el.removeEventListener('mousemove', handleMove)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      el.classList.remove('spotlight-host')
    }
  }, [targetSelector])

  return null
}
