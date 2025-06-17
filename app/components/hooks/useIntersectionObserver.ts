'use client'

import { useState, useEffect, RefObject, useCallback } from 'react'

interface IntersectionObserverOptions {
  threshold?: number | number[]
  root?: Element | null
  rootMargin?: string
  triggerOnce?: boolean
}

export function useIntersectionObserver(
  ref: RefObject<Element>,
  options: IntersectionObserverOptions = { 
    threshold: 0.1, 
    rootMargin: '0px 0px -50px 0px',
    triggerOnce: true
  }
): boolean {
  const [isIntersecting, setIntersecting] = useState(false)

  const { threshold, root, rootMargin, triggerOnce = true } = options

  const handleIntersection = useCallback(
    ([entry]: IntersectionObserverEntry[]) => {
      setIntersecting(entry.isIntersecting)
      
      // If triggerOnce is true and element is intersecting, unobserve
      if (triggerOnce && entry.isIntersecting && ref.current) {
        // We'll handle unobserving in the cleanup
      }
    },
    [triggerOnce, ref]
  )

  useEffect(() => {
    const element = ref.current
    if (!element) return

    // Check if IntersectionObserver is available (browser compatibility)
    if (typeof IntersectionObserver === 'undefined') {
      setIntersecting(true) // Fallback for SSR or unsupported browsers
      return
    }

    const observer = new IntersectionObserver(handleIntersection, {
      threshold,
      root,
      rootMargin,
    })

    observer.observe(element)

    return () => {
      observer.disconnect()
    }
  }, [ref, threshold, root, rootMargin, handleIntersection])

  return isIntersecting
} 