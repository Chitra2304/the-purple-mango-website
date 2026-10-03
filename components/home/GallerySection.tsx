'use client'

import { useState, useEffect, useCallback, useMemo } from 'react'
import Image from 'next/image'

type Category = 'All' | 'Property' | 'Rooms' | 'Dining' | 'Nearby'

interface GalleryItem {
  id: string
  title: string
  subtitle: string
  category: 'Property' | 'Rooms' | 'Dining' | 'Nearby'
  src: string
  alt: string
  aspectRatio: string
  spanClass: string
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'prop-1',
    title: 'Aerial Mountain Panorama',
    subtitle: 'Western Ghats Ridge & Resort Architecture',
    category: 'Property',
    src: '/images/hero/hero-1.jpg',
    alt: 'Aerial view of The Purple Mango resort nestled in lush green Western Ghats hills at sunset',
    aspectRatio: 'aspect-[16/10]',
    spanClass: 'md:col-span-2 md:row-span-2 lg:col-span-8 lg:row-span-2',
  },
  {
    id: 'prop-2',
    title: 'Infinity Pool & Valley Mist',
    subtitle: 'Panoramic Overlook at Dawn',
    category: 'Property',
    src: '/images/hero/hero-2.jpg',
    alt: 'Infinity pool overlooking misty emerald valley in Lonavala',
    aspectRatio: 'aspect-[4/5]',
    spanClass: 'md:col-span-1 md:row-span-2 lg:col-span-4 lg:row-span-2',
  },
  {
    id: 'room-1',
    title: 'The Studio Room',
    subtitle: 'Floor-to-Ceiling Hillside Views',
    category: 'Rooms',
    src: '/images/rooms/studio.jpg',
    alt: 'The Studio Room interior framing misty mountain peaks',
    aspectRatio: 'aspect-[4/3.2]',
    spanClass: 'md:col-span-1 lg:col-span-4',
  },
  {
    id: 'dining-1',
    title: 'Culinary Artistry',
    subtitle: '100% Pure Vegetarian & Jain Delicacies',
    category: 'Dining',
    src: '/images/dining/dining-food.jpg',
    alt: 'Traditional Indian vegetarian feast presented on stone plate',
    aspectRatio: 'aspect-[4/3.2]',
    spanClass: 'md:col-span-1 lg:col-span-4',
  },
  {
    id: 'prop-3',
    title: 'Bougainvillea Terrace',
    subtitle: 'Stone Walkways & Mountain Solitude',
    category: 'Property',
    src: '/images/welcome/welcome-terrace.jpg',
    alt: 'Bougainvillea-covered stone terrace overlooking Western Ghats',
    aspectRatio: 'aspect-[4/3.2]',
    spanClass: 'md:col-span-1 lg:col-span-4',
  },
  {
    id: 'room-2',
    title: 'Deluxe Haven Suite',
    subtitle: 'Spacious Family Living & Valley Balcony',
    category: 'Rooms',
    src: '/images/rooms/deluxe-haven.jpg',
    alt: 'Deluxe Haven Suite with purple armchairs, wood floor and valley views',
    aspectRatio: 'aspect-[4/5]',
    spanClass: 'md:col-span-1 lg:col-span-4 lg:row-span-2',
  },
  {
    id: 'dining-2',
    title: 'Sunset Terrace Dining',
    subtitle: 'Candlelight Under Open Mountain Skies',
    category: 'Dining',
    src: '/images/hero/hero-4.jpg',
    alt: 'Open terrace dining setup with candle lanterns at golden hour',
    aspectRatio: 'aspect-[16/10]',
    spanClass: 'md:col-span-2 lg:col-span-8 lg:row-span-2',
  },
  {
    id: 'room-3',
    title: 'Super Deluxe Master Suite',
    subtitle: 'Study, Deep Soaking Tub & Sweeping Vistas',
    category: 'Rooms',
    src: '/images/rooms/super-deluxe.jpg',
    alt: 'Super Deluxe Suite with extensive lounge and mountain sundeck',
    aspectRatio: 'aspect-[4/3]',
    spanClass: 'md:col-span-1 lg:col-span-4',
  },
  {
    id: 'nearby-1',
    title: 'Karla Caves Heritage',
    subtitle: 'Ancient Buddhist Rock-Cut Shrines (3 km away)',
    category: 'Nearby',
    src: '/images/hero/hero-1.jpg',
    alt: 'Karla Caves mountain ridge in the Western Ghats',
    aspectRatio: 'aspect-[4/3]',
    spanClass: 'md:col-span-1 lg:col-span-4',
  },
  {
    id: 'nearby-2',
    title: 'Western Ghat Trails & Peaks',
    subtitle: 'Morning Trek Routes & Cloudline Vistas',
    category: 'Nearby',
    src: '/images/hero/hero-3.jpg',
    alt: 'Panoramic views of mountain peaks and lush forest trails',
    aspectRatio: 'aspect-[4/3]',
    spanClass: 'md:col-span-1 lg:col-span-4',
  },
]

const CATEGORIES: Category[] = ['All', 'Property', 'Rooms', 'Dining', 'Nearby']

export default function GallerySection() {
  const [activeCategory, setActiveCategory] = useState<Category>('All')
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const filteredItems = useMemo(() => {
    if (activeCategory === 'All') return GALLERY_ITEMS
    return GALLERY_ITEMS.filter((item) => item.category === activeCategory)
  }, [activeCategory])

  // Lightbox handlers
  const openLightbox = (index: number) => {
    setLightboxIndex(index)
  }

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null)
  }, [])

  const nextImage = useCallback(() => {
    if (lightboxIndex === null) return
    setLightboxIndex((lightboxIndex + 1) % filteredItems.length)
  }, [lightboxIndex, filteredItems.length])

  const prevImage = useCallback(() => {
    if (lightboxIndex === null) return
    setLightboxIndex(
      (lightboxIndex - 1 + filteredItems.length) % filteredItems.length
    )
  }, [lightboxIndex, filteredItems.length])

  // Keyboard navigation
  useEffect(() => {
    if (lightboxIndex === null) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox()
      if (e.key === 'ArrowRight') nextImage()
      if (e.key === 'ArrowLeft') prevImage()
    }

    window.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [lightboxIndex, closeLightbox, nextImage, prevImage])

  return (
    <section
      id="gallery"
      aria-labelledby="gallery-heading"
      className="bg-cream section-padding relative"
    >
      <div className="container-resort">
        {/* ── Section Header ── */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-10 lg:mb-14">
          <span className="font-montserrat text-[12px] sm:text-[13px] font-normal tracking-[0.24em] uppercase text-purple-muted mb-2.5 sm:mb-3">
            VISUAL ESSENCE
          </span>
          <h2
            id="gallery-heading"
            className="font-playfair text-3xl sm:text-4xl lg:text-[2.65rem] font-normal text-purple-heading leading-[1.14] sm:leading-[1.15] tracking-tight mb-4"
          >
            Moments &amp; Sanctuaries
          </h2>
          <p className="font-montserrat text-[14.5px] sm:text-[15.5px] leading-[1.8] font-normal text-text-body">
            Immerse yourself in the serene textures, mist-covered heights, and
            wholesome atmospheres that define every stay at The Purple Mango.
          </p>
        </div>

        {/* ── Category Filter Tabs ── */}
        <div
          role="tablist"
          aria-label="Filter gallery by category"
          className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10 lg:mb-12"
        >
          {CATEGORIES.map((category) => {
            const isActive = activeCategory === category
            const count =
              category === 'All'
                ? GALLERY_ITEMS.length
                : GALLERY_ITEMS.filter((item) => item.category === category).length

            return (
              <button
                key={category}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveCategory(category)}
                className={`inline-flex items-center gap-2 font-montserrat text-xs sm:text-[13px] font-medium tracking-[0.06em] px-5 py-2.5 rounded-full transition-all duration-300 select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-gold ${
                  isActive
                    ? 'bg-purple-heading text-white shadow-sm ring-1 ring-purple-heading'
                    : 'bg-white/80 hover:bg-white text-purple-heading/80 hover:text-purple-heading border border-border/80 hover:border-purple-muted/40 shadow-none'
                }`}
              >
                <span>{category}</span>
                <span
                  className={`text-[10px] sm:text-[11px] font-normal px-1.5 py-0.5 rounded-full ${
                    isActive
                      ? 'bg-white/20 text-white'
                      : 'bg-cream-dark text-text-muted'
                  }`}
                >
                  {count}
                </span>
              </button>
            )
          })}
        </div>

        {/* ── Editorial Composition Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5 sm:gap-6 items-stretch">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className={`group relative rounded-[1.5rem] overflow-hidden shadow-card hover:shadow-card-hover border border-white/60 bg-cream-dark transition-all duration-500 cursor-pointer ${
                activeCategory === 'All' ? item.spanClass : 'lg:col-span-4'
              }`}
              onClick={() => openLightbox(index)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  openLightbox(index)
                }
              }}
              tabIndex={0}
              role="button"
              aria-label={`View photo: ${item.title} - ${item.subtitle}`}
            >
              {/* Image Container with natural aspect ratio container */}
              <div className={`relative w-full h-full min-h-[260px] sm:min-h-[300px] ${item.aspectRatio}`}>
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                  quality={85}
                />

                {/* Ambient Scrim Gradient */}
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent opacity-75 group-hover:opacity-90 transition-opacity duration-300 pointer-events-none"
                  aria-hidden="true"
                />

                {/* Top-Right Category Badge */}
                <div className="absolute top-4 right-4 z-10">
                  <span className="font-montserrat text-[10px] sm:text-[11px] font-semibold tracking-[0.14em] uppercase bg-black/40 backdrop-blur-md text-gold-light px-3 py-1.5 rounded-full border border-white/15">
                    {item.category}
                  </span>
                </div>

                {/* Bottom Context Details Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 z-10 flex items-end justify-between gap-4">
                  <div className="flex flex-col gap-1 text-left">
                    <h3 className="font-playfair text-lg sm:text-xl font-normal text-white leading-tight drop-shadow-sm group-hover:text-gold-light transition-colors duration-200">
                      {item.title}
                    </h3>
                    <p className="font-montserrat text-xs sm:text-[13px] text-white/80 font-light leading-snug line-clamp-1">
                      {item.subtitle}
                    </p>
                  </div>

                  {/* Expand Icon Pill */}
                  <div
                    className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white flex items-center justify-center flex-shrink-0 opacity-80 group-hover:opacity-100 group-hover:bg-gold group-hover:text-gold-dark group-hover:border-gold transition-all duration-300"
                    aria-hidden="true"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Interactive Lightbox / Fullscreen Modal ── */}
      {lightboxIndex !== null && filteredItems[lightboxIndex] && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Photo lightbox: ${filteredItems[lightboxIndex].title}`}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/92 backdrop-blur-md p-4 sm:p-6 lg:p-10 animate-fade-in"
          onClick={closeLightbox}
        >
          {/* Top Control Bar */}
          <div
            className="absolute top-0 left-0 right-0 p-4 sm:p-6 flex items-center justify-between z-20"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3">
              <span className="font-montserrat text-[11px] sm:text-xs font-semibold tracking-[0.16em] uppercase bg-gold text-gold-dark px-3 py-1 rounded-full">
                {filteredItems[lightboxIndex].category}
              </span>
              <span className="font-montserrat text-xs sm:text-sm text-white/70">
                {lightboxIndex + 1} / {filteredItems.length}
              </span>
            </div>

            <button
              onClick={closeLightbox}
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white flex items-center justify-center transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              aria-label="Close fullscreen view"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Left Arrow Button */}
          <button
            onClick={(e) => {
              e.stopPropagation()
              prevImage()
            }}
            className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-white/10 hover:bg-white/25 border border-white/20 text-white flex items-center justify-center transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white z-20"
            aria-label="Previous photograph"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Right Arrow Button */}
          <button
            onClick={(e) => {
              e.stopPropagation()
              nextImage()
            }}
            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-white/10 hover:bg-white/25 border border-white/20 text-white flex items-center justify-center transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white z-20"
            aria-label="Next photograph"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Center Image Container */}
          <div
            className="relative max-w-5xl max-h-[78vh] w-full h-[65vh] sm:h-[75vh] flex items-center justify-center z-10 select-none"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={filteredItems[lightboxIndex].src}
              alt={filteredItems[lightboxIndex].alt}
              fill
              sizes="(max-width: 1280px) 100vw, 1280px"
              className="object-contain rounded-2xl"
              priority
              quality={90}
            />
          </div>

          {/* Bottom Caption Bar */}
          <div
            className="absolute bottom-4 sm:bottom-6 left-4 right-4 sm:left-auto sm:right-auto text-center z-20 bg-black/60 backdrop-blur-md px-6 py-3 rounded-2xl border border-white/15 max-w-xl mx-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="font-playfair text-lg sm:text-xl font-normal text-white leading-tight">
              {filteredItems[lightboxIndex].title}
            </p>
            <p className="font-montserrat text-xs sm:text-[13px] text-white/75 font-light mt-1">
              {filteredItems[lightboxIndex].subtitle}
            </p>
          </div>
        </div>
      )}
    </section>
  )
}
