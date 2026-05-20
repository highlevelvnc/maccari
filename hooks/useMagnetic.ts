'use client'

import { useEffect, useRef } from 'react'

/**
 * Magnetic hover: element follows the cursor with a slight pull.
 * Only active on (hover: hover) devices (desktop with mouse).
 *
 * Strength = max translation in px when cursor is at the element edge.
 * Default 12 — subtle, premium.
 */
export function useMagnetic<T extends HTMLElement = HTMLAnchorElement>(strength = 12) {
  const ref = useRef<T | null>(null)
  const rafRef = useRef<number | null>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (typeof window === 'undefined') return
    if (!window.matchMedia('(hover: hover)').matches) return

    const onMove = (e: MouseEvent) => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      rafRef.current = requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect()
        const cx = rect.left + rect.width / 2
        const cy = rect.top + rect.height / 2
        const dx = ((e.clientX - cx) / rect.width) * 2  // -1..1
        const dy = ((e.clientY - cy) / rect.height) * 2 // -1..1
        el.style.transform = `translate(${dx * strength}px, ${dy * strength}px)`
      })
    }
    const onLeave = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      el.style.transform = 'translate(0, 0)'
    }

    el.addEventListener('mousemove', onMove)
    el.addEventListener('mouseleave', onLeave)
    return () => {
      el.removeEventListener('mousemove', onMove)
      el.removeEventListener('mouseleave', onLeave)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [strength])

  return ref
}
