'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const SLIDES = [
  {
    id: 1,
    src: '/images/hero/hero-1.jpg',
    alt: 'Aerial view of The Purple Mango resort nestled in the lush green Western Ghats hills at sunset',
    headline: 'A Luxury Escape',
    headlineItalic: 'in the Hills of Lonavala',
    subtitle:
      'Set among the Western Ghats at Karla, experience a mountain stay where the food, the atmosphere and the company are all wholesome, comfortable and the hills close by.',
  },
  {
    id: 2,
    src: '/images/hero/hero-2.jpg',
    alt: 'Luxury infinity pool at The Purple Mango resort overlooking misty Western Ghats valley',
    headline: 'Serenity Above',
    headlineItalic: 'the Clouds',
    subtitle:
      'Unwind beside our infinity pool as morning mist rolls over emerald valleys. Every moment here is designed to slow you down and open your eyes.',
  },
  {
    id: 3,
    src: '/images/hero/hero-3.jpg',
    alt: 'Luxurious suite interior at The Purple Mango with panoramic mountain views through floor-to-ceiling windows',
    headline: 'Rest Deeply,',
    headlineItalic: 'Wake Beautifully',
    subtitle:
      'Our thoughtfully designed suites frame nature like living art. Open your eyes each morning to misty peaks, birdsong and crisp mountain air.',
  },
  {
    id: 4,
    src: '/images/hero/hero-4.jpg',
    alt: 'Open-air terrace dining at The Purple Mango resort with candle lanterns and valley views at golden hour',
    headline: 'Dine Under',
    headlineItalic: 'the Open Sky',
    subtitle:
      'Our open terrace restaurant brings farm-fresh, 100% vegetarian flavours to a setting where mountain air, candlelight and good conversation converge.',
  },
]

const INTERVAL_MS = 5000

export default function HeroCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const goTo = useCallback((index: number) => {
    setActiveIndex(((index % SLIDES.length) + SLIDES.length) % SLIDES.length)
  }, [])

  const goNext = useCallback(() => goTo(activeIndex + 1), [activeIndex, goTo])
  const goPrev = useCallback(() => goTo(activeIndex - 1), [activeIndex, goTo])

  // Auto-advance
  useEffect(() => {
    if (isPaused) return
    intervalRef.current = setInterval(goNext, INTERVAL_MS)
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [isPaused, goNext])

  // Keyboard navigation on the carousel container
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === 'ArrowRight') goNext()
      if (e.key === 'ArrowLeft') goPrev()
    },
    [goNext, goPrev]
  )

  return (
    <section
      aria-label="Hero image carousel"
      aria-roledescription="carousel"
      className="relative w-full overflow-hidden"
      style={{ height: 'calc(100vh - 4rem)' }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
      onKeyDown={handleKeyDown}
    >
      {/* ── Slides ── */}
      {SLIDES.map((slide, i) => (
        <div
          key={slide.id}
          role="group"
          aria-roledescription="slide"
          aria-label={`Slide ${i + 1} of ${SLIDES.length}: ${slide.headline} ${slide.headlineItalic}`}
          aria-hidden={i !== activeIndex}
          className={`hero-slide ${i === activeIndex ? 'active' : ''}`}
        >
          {/* Background image */}
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            priority={i === 0}
            loading={i === 0 ? 'eager' : 'lazy'}
            sizes="100vw"
            className="object-cover object-center"
            quality={85}
          />

          {/* Dark gradient overlay */}
          <div
            className="absolute inset-0 bg-hero-gradient"
            aria-hidden="true"
          />

          {/* Slide Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8">
            <div className={`w-full max-w-4xl lg:max-w-5xl transition-all duration-700 ${i === activeIndex ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              {/* Headline: Exactly 2 lines on desktop with elegant editorial contrast */}
              <h1 className="font-playfair text-white leading-[1.12] mb-5 sm:mb-6">
                <span className="block text-3xl sm:text-5xl md:text-6xl lg:text-[4.2rem] xl:text-[4.75rem] font-medium tracking-tight drop-shadow-[0_2px_12px_rgba(0,0,0,0.35)]">
                  {slide.headline}
                </span>
                <span className="block text-3xl sm:text-5xl md:text-6xl lg:text-[4.2rem] xl:text-[4.75rem] font-normal italic tracking-tight drop-shadow-[0_2px_12px_rgba(0,0,0,0.35)] mt-1 lg:mt-2">
                  {slide.headlineItalic}
                </span>
              </h1>

              {/* Subordinate Supporting Description */}
              <p className="font-montserrat text-white/90 text-xs sm:text-sm md:text-[15px] lg:text-base font-light md:font-normal leading-[1.75] max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-4xl mx-auto mb-8 sm:mb-10 drop-shadow-[0_1px_8px_rgba(0,0,0,0.4)]">
                {slide.subtitle}
              </p>

              {/* Clean Oval CTAs without glow */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4">
                <Link
                  href="/contact"
                  id={`hero-book-btn-${i + 1}`}
                  className="inline-flex items-center justify-center font-montserrat font-semibold text-xs sm:text-[13px] tracking-[0.14em] uppercase bg-gold text-gold-dark border border-transparent px-7 py-3.5 sm:px-8 sm:py-4 rounded-full hover:bg-gold-hover transition-all duration-300 shadow-btn hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white w-60 sm:w-auto sm:min-w-[210px] text-center select-none"
                  tabIndex={i !== activeIndex ? -1 : 0}
                >
                  BOOK YOUR STAY
                </Link>
                <Link
                  href="/rooms"
                  id={`hero-explore-btn-${i + 1}`}
                  className="inline-flex items-center justify-center font-montserrat font-semibold text-xs sm:text-[13px] tracking-[0.14em] uppercase border border-white/80 hover:border-white text-white hover:bg-white/10 px-7 py-3.5 sm:px-8 sm:py-4 rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white w-60 sm:w-auto sm:min-w-[210px] text-center select-none"
                  tabIndex={i !== activeIndex ? -1 : 0}
                >
                  EXPLORE THE RESORT
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* ── Arrow Controls ── */}
      <button
        onClick={goPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/20 backdrop-blur-sm border border-white/20 text-white flex items-center justify-center hover:bg-black/40 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white z-10 hidden sm:flex"
        aria-label="Previous slide"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={goNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/20 backdrop-blur-sm border border-white/20 text-white flex items-center justify-center hover:bg-black/40 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white z-10 hidden sm:flex"
        aria-label="Next slide"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* ── Dot Indicators ── */}
      <div
        role="tablist"
        aria-label="Slide indicators"
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10"
      >
        {SLIDES.map((slide, i) => (
          <button
            key={slide.id}
            role="tab"
            aria-selected={i === activeIndex}
            aria-controls={`slide-${i + 1}`}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => goTo(i)}
            className={`transition-all duration-300 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-white ${i === activeIndex
              ? 'w-6 h-1 bg-white'
              : 'w-1.5 h-1.5 bg-white/45 hover:bg-white/80'
              }`}
          />
        ))}
      </div>
    </section>
  )
}
