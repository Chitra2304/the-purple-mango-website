'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface Experience {
  id: string
  title: string
  category: string
  tagline: string
  description: string
  src: string
  alt: string
  comingSoon?: boolean
  highlights?: string[]
  spanClass?: string
  aspectRatio?: string
}

const EXPERIENCES: Experience[] = [
  {
    id: 'weddings',
    title: 'Weddings & Corporate Gatherings',
    category: 'Celebrations',
    tagline: 'Lush Mountain Lawns & Curated Hospitality',
    description:
      'Sprawling open-air banquet lawns framed by the Sahyadri mountains. Designed for sacred wedding vows, intimate family milestones, and focused executive leadership retreats with customized 100% vegetarian banquet catering.',
    src: '/images/hero/hero-1.jpg',
    alt: 'Lush resort grounds and mountain backdrop for weddings and corporate gatherings',
    comingSoon: false,
    highlights: ['500+ Guest Capacity', 'Custom Pure Veg & Jain Menus', 'Panoramic Valley Lawns'],
    spanClass: 'lg:col-span-12',
    aspectRatio: 'aspect-[16/5.2] sm:aspect-[16/4.5] min-h-[200px] sm:min-h-[230px] lg:min-h-[250px]',
  },
  {
    id: 'infinity-pool',
    title: 'Cliffside Infinity Pool',
    category: 'Resort Leisure',
    tagline: 'Morning Mist & Valley Panoramas',
    description:
      'Lounge beside our temperature-balanced infinity pool as clouds drift gently below the horizon. A tranquil water retreat designed to restore your inner rhythm.',
    src: '/images/hero/hero-2.jpg',
    alt: 'Luxury infinity pool overlooking misty valley in Lonavala',
    comingSoon: true,
    highlights: ['Valley Views', 'Sun Loungers', 'Quiet Zone'],
    spanClass: 'lg:col-span-7',
    aspectRatio: 'aspect-[16/7.2] min-h-[175px] sm:min-h-[195px]',
  },
  {
    id: 'mountain-trails',
    title: 'Mountain Vistas & Trails',
    category: 'Nature',
    tagline: 'Guided Walks & Karla Hill Serenity',
    description:
      'Explore winding trailheads and scenic lookout points. Breathe crisp, unpolluted mountain air and experience birdsong amidst the Western Ghats.',
    src: '/images/hero/hero-3.jpg',
    alt: 'Scenic mountain viewpoints and nature walking trails near Karla',
    comingSoon: false,
    highlights: ['Sunrise Walks', 'Bird Watching', 'Fresh Mountain Air'],
    spanClass: 'lg:col-span-5',
    aspectRatio: 'aspect-[16/7.2] min-h-[175px] sm:min-h-[195px]',
  },
  {
    id: 'terrace-dining',
    title: 'Candlelight Terrace Dining',
    category: 'Culinary Craft',
    tagline: 'Starlit Evenings & Pure Flavours',
    description:
      'Savour farm-to-table vegetarian delicacies on open stone terraces as dusk settles over the hills and lanterns illuminate the evening.',
    src: '/images/hero/hero-4.jpg',
    alt: 'Candlelight open-air terrace dining under mountain skies at golden hour',
    comingSoon: false,
    highlights: ['Pure Veg & Jain Specialities', 'Open-Air Seating', 'Romantic Ambiance'],
    spanClass: 'lg:col-span-12',
    aspectRatio: 'aspect-[16/4.2] min-h-[165px] sm:min-h-[185px]',
  },
  {
    id: 'wellness',
    title: 'Yoga & Wellness Pavilion',
    category: 'Rejuvenation',
    tagline: 'Mindfulness, Breathwork & Holistic Calm',
    description:
      'An open-air timber deck dedicated to morning yoga, guided pranayama meditation, and restorative wellness therapies.',
    src: '/images/welcome/welcome-terrace.jpg',
    alt: 'Serene stone terrace setting for wellness and meditation',
    comingSoon: false,
    spanClass: 'sm:col-span-1 lg:col-span-3',
    aspectRatio: 'aspect-[4/2.7] min-h-[145px] sm:min-h-[160px]',
  },
  {
    id: 'fitness',
    title: 'Fitness & Motion Studio',
    category: 'Vitality',
    tagline: 'Cardio & Strength with Scenic Outlook',
    description:
      'A thoughtfully equipped workout space featuring premium cardio and functional strength equipment with nature views.',
    src: '/images/rooms/studio.jpg',
    alt: 'Bright exercise and fitness area with panoramic views',
    comingSoon: false,
    spanClass: 'sm:col-span-1 lg:col-span-3',
    aspectRatio: 'aspect-[4/2.7] min-h-[145px] sm:min-h-[160px]',
  },
  {
    id: 'rain-dance',
    title: 'Rain Dance Arena',
    category: 'Entertainment',
    tagline: 'Rhythmic Music & Joyous Outdoor Sprays',
    description:
      'A landscaped outdoor mist and rain dance facility with integrated sound design for unforgettable family celebrations and group bonding.',
    src: '/images/hero/hero-2.jpg',
    alt: 'Outdoor water and mist entertainment arena for group gatherings',
    comingSoon: false,
    spanClass: 'sm:col-span-1 lg:col-span-3',
    aspectRatio: 'aspect-[4/2.7] min-h-[145px] sm:min-h-[160px]',
  },
  {
    id: 'game-zone',
    title: 'Indoor Game Zone',
    category: 'Recreation',
    tagline: 'Billiards, Table Tennis & Classic Board Games',
    description:
      'A dedicated family recreation lounge featuring table tennis, pool tables, foosball, and a curated library of board games.',
    src: '/images/rooms/deluxe-haven.jpg',
    alt: 'Spacious recreation and games lounge at The Purple Mango resort',
    comingSoon: false,
    spanClass: 'sm:col-span-1 lg:col-span-3',
    aspectRatio: 'aspect-[4/2.7] min-h-[145px] sm:min-h-[160px]',
  },
]

export default function ActivitiesSection() {
  const [activeModal, setActiveModal] = useState<Experience | null>(null)

  return (
    <section
      id="activities"
      aria-labelledby="activities-heading"
      className="bg-[#FBF2ED] py-10 sm:py-12 lg:py-14 relative overflow-hidden"
    >
      <div className="container-resort">
        {/* ── Section Header ── */}
        <div className="flex flex-col gap-2 sm:gap-2.5 mb-6 lg:mb-8">
          <span className="font-montserrat text-[12px] sm:text-[13px] font-normal tracking-[0.24em] uppercase text-purple-muted">
            EXPERIENCES
          </span>
          <h2
            id="activities-heading"
            className="font-playfair text-3xl sm:text-4xl lg:text-[2.65rem] font-normal text-purple-heading leading-[1.14] sm:leading-[1.15] tracking-tight"
          >
            Curated Activities
          </h2>
        </div>

        {/* ── Main Editorial Composition ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-3.5 sm:gap-4 lg:gap-4 items-stretch">
          {EXPERIENCES.map((exp) => (
            <article
              key={exp.id}
              onClick={() => setActiveModal(exp)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  setActiveModal(exp)
                }
              }}
              tabIndex={0}
              role="button"
              aria-label={`View experience details: ${exp.title}`}
              className={`group relative rounded-[1.25rem] sm:rounded-[1.4rem] overflow-hidden shadow-card hover:shadow-card-hover border border-white/60 bg-cream-dark transition-all duration-500 cursor-pointer flex flex-col justify-end ${
                exp.spanClass ? exp.spanClass : 'lg:col-span-6'
              }`}
            >
              {/* Background Image Container */}
              <div className={`relative w-full h-full ${exp.aspectRatio}`}>
                <Image
                  src={exp.src}
                  alt={exp.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 100vw"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                  quality={85}
                />

                {/* Multi-stage Ambient Gradient Scrim */}
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/10 opacity-80 group-hover:opacity-90 transition-opacity duration-300 pointer-events-none"
                  aria-hidden="true"
                />

                {/* Top Coming Soon Badge (Only on pool card) */}
                {exp.comingSoon && (
                  <div className="absolute top-3.5 right-3.5 sm:top-4 sm:right-4 z-10 pointer-events-none">
                    <span className="font-montserrat text-[10px] sm:text-[11px] font-semibold tracking-[0.14em] uppercase bg-gold/90 text-gold-dark px-3 py-1 rounded-full shadow-sm">
                      Coming Soon
                    </span>
                  </div>
                )}

                {/* Bottom Content Area with generous vertical spacing */}
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 lg:p-5 z-10 flex flex-col gap-2 sm:gap-2.5">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="font-playfair text-base sm:text-lg lg:text-[1.35rem] font-normal text-white leading-tight group-hover:text-gold-light transition-colors duration-200">
                        {exp.title}
                      </h3>
                      <p className="font-montserrat text-xs sm:text-[12.5px] text-white/85 font-light tracking-wide mt-1 sm:mt-1.5 line-clamp-1">
                        {exp.tagline}
                      </p>
                    </div>

                    {/* Circular Action Arrow */}
                    <div
                      className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white flex items-center justify-center flex-shrink-0 group-hover:bg-gold group-hover:text-gold-dark group-hover:border-gold transition-all duration-300 mt-0.5"
                      aria-hidden="true"
                    >
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>

                  {/* Highlights Tags on Top 4 Cards with clean vertical clearance */}
                  {exp.highlights && exp.highlights.length > 0 && (
                    <div className="flex flex-wrap items-center gap-1.5 pt-1.5 sm:pt-2 opacity-90">
                      {exp.highlights.map((tag) => (
                        <span
                          key={tag}
                          className="font-montserrat text-[10.5px] sm:text-[11px] font-normal text-white/90 bg-white/15 backdrop-blur-sm px-2.5 py-0.5 rounded-md border border-white/15"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* ── Bottom Plan Your Experience CTA ── */}
        <div className="mt-6 lg:mt-8 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center justify-center gap-4 bg-white/80 backdrop-blur-sm px-6 py-3.5 sm:px-7 sm:py-4 rounded-[1.5rem] border border-border shadow-sm max-w-2xl mx-auto">
            <div className="text-left">
              <h4 className="font-playfair text-base sm:text-lg font-normal text-purple-heading">
                Planning a Wedding or Group Retreat?
              </h4>
              <p className="font-montserrat text-xs sm:text-[12.5px] text-text-body font-normal mt-0.5">
                Our bespoke event planners will tailor schedules, accommodation, and Jain catering.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center font-montserrat font-semibold text-xs sm:text-[13px] tracking-[0.12em] uppercase bg-gold hover:bg-gold-hover text-gold-dark px-6 py-2.5 rounded-xl shadow-btn hover:shadow-md transition-all duration-300 flex-shrink-0 select-none"
            >
              Enquire Now
            </Link>
          </div>
        </div>
      </div>

      {/* ── Experience Details Modal ── */}
      {activeModal && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Details for ${activeModal.title}`}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 sm:p-6 animate-fade-in"
          onClick={() => setActiveModal(null)}
        >
          <div
            className="relative bg-white rounded-[2rem] overflow-hidden max-w-2xl w-full shadow-2xl border border-border flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Image Header */}
            <div className="relative w-full aspect-[16/9] min-h-[240px]">
              <Image
                src={activeModal.src}
                alt={activeModal.alt}
                fill
                sizes="(max-width: 768px) 100vw, 700px"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              <button
                onClick={() => setActiveModal(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                aria-label="Close modal"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="absolute bottom-4 left-6 right-6">
                <span className="font-montserrat text-[10px] sm:text-[11px] font-semibold tracking-[0.16em] uppercase bg-gold text-gold-dark px-3 py-1 rounded-full">
                  {activeModal.category}
                </span>
                <h3 className="font-playfair text-2xl sm:text-3xl font-normal text-white mt-2 leading-snug">
                  {activeModal.title}
                </h3>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 flex flex-col gap-4">
              <p className="font-montserrat text-sm sm:text-[15px] leading-[1.8] font-normal text-text-body">
                {activeModal.description}
              </p>

              {activeModal.highlights && activeModal.highlights.length > 0 && (
                <div className="pt-2 border-t border-border-light">
                  <p className="font-montserrat text-xs font-semibold tracking-wider uppercase text-purple-muted mb-2">
                    Key Highlights
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {activeModal.highlights.map((item) => (
                      <span
                        key={item}
                        className="font-montserrat text-xs text-text-dark bg-[#FAF7F2] px-3 py-1.5 rounded-lg border border-border"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Book/Enquire CTA (Only on top 4 cards: celebrations/weddings, trails, dining, pool) */}
              {['weddings', 'infinity-pool', 'mountain-trails', 'terrace-dining'].includes(activeModal.id) && (
                <div className="flex items-center justify-end pt-4 mt-2 border-t border-border-light">
                  <Link
                    href="/contact"
                    onClick={() => setActiveModal(null)}
                    className="font-montserrat font-semibold text-xs sm:text-[13px] tracking-[0.1em] uppercase bg-gold hover:bg-gold-hover text-gold-dark px-6 py-3 rounded-xl transition-all duration-200"
                  >
                    Book / Enquire
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

