'use client'

import { useState, useEffect, useRef } from 'react'

interface UseCounterOptions {
  target: number
  duration?: number
  start?: boolean
}

export function useCounter({ target, duration = 2000, start = false }: UseCounterOptions): number {
  const [count, setCount] = useState(0)
  const frameRef = useRef<number | null>(null)
  const startTimeRef = useRef<number | null>(null)
  const hasStarted = useRef(false)

  useEffect(() => {
    if (!start || hasStarted.current) return
    hasStarted.current = true

    const animate = (timestamp: number) => {
      if (!startTimeRef.current) {
        startTimeRef.current = timestamp
      }

      const elapsed = timestamp - startTimeRef.current
      const progress = Math.min(elapsed / duration, 1)

      // easeOut cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      const current = Math.round(eased * target)

      setCount(current)

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animate)
      }
    }

    frameRef.current = requestAnimationFrame(animate)

    return () => {
      if (frameRef.current !== null) {
        cancelAnimationFrame(frameRef.current)
      }
    }
  }, [start, target, duration])

  return count
}
