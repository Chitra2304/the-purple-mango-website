'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export interface RoomImage {
  src: string
  alt: string
  caption: string
}

export interface RoomCategoryData {
  id: string
  name: string
  subtitle: string
  description: string
  bestFor: string
  images: RoomImage[]
  confirmedFeatures: string[]
  priceNote: string
  whatsappMessage: string
}

interface RoomCategoryCardProps {
  room: RoomCategoryData
  reverse?: boolean
  index: number
}

export default function RoomCategoryCard({
  room,
  reverse = false,
  index,
}: RoomCategoryCardProps) {
  const [activeImageIndex, setActiveImageIndex] = useState(0)
  const currentImage = room.images[activeImageIndex] || room.images[0]

  const whatsappUrl = `https://wa.me/919876543210?text=${encodeURIComponent(
    room.whatsappMessage
  )}`

  return (
    <article
      id={room.id}
      aria-labelledby={`room-title-${room.id}`}
      className="bg-white rounded-[1.5rem] sm:rounded-[2rem] border border-border shadow-card overflow-hidden transition-all duration-300 hover:shadow-card-hover"
    >
      <div
        className={`grid grid-cols-1 lg:grid-cols-12 gap-7 sm:gap-8 lg:gap-12 items-center p-5 sm:p-7 lg:p-10 ${
          reverse ? 'lg:grid-flow-dense' : ''
        }`}
      >
        {/* ── Visual Media Column ── */}
        <div
          className={`lg:col-span-6 flex flex-col gap-3 ${
            reverse ? 'lg:col-start-7' : ''
          }`}
        >
          {/* Main Selected Image */}
          <div className="relative aspect-[16/11] sm:aspect-[16/10] w-full rounded-[1.25rem] sm:rounded-[1.5rem] overflow-hidden bg-cream-dark shadow-sm">
            <Image
              src={currentImage.src}
              alt={currentImage.alt}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
              className="object-cover object-center transition-all duration-500"
              quality={88}
              priority={index === 0}
            />
            {/* Subtle Gradient & Caption */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 flex items-center justify-between text-white pointer-events-none gap-2">
              <span className="font-montserrat text-[11.5px] sm:text-xs text-white/90 font-light drop-shadow-sm line-clamp-1">
                {currentImage.caption}
              </span>
              <span className="font-montserrat text-[10.5px] sm:text-[11px] bg-black/40 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-white/20 flex-shrink-0">
                {activeImageIndex + 1} / {room.images.length}
              </span>
            </div>
          </div>

          {/* Thumbnail Strip */}
          {room.images.length > 1 && (
            <div className="flex items-center gap-2 sm:gap-2.5 overflow-x-auto pb-1 scroll-smooth">
              {room.images.map((img, idx) => {
                const isActive = idx === activeImageIndex
                return (
                  <button
                    key={img.src + idx}
                    type="button"
                    onClick={() => setActiveImageIndex(idx)}
                    aria-label={`View photo ${idx + 1} of ${room.name}`}
                    className={`relative w-18 h-13 sm:w-22 sm:h-15 lg:w-24 lg:h-16 rounded-xl overflow-hidden flex-shrink-0 transition-all duration-200 border-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold ${
                      isActive
                        ? 'border-gold shadow-sm scale-[1.02]'
                        : 'border-transparent opacity-70 hover:opacity-100'
                    }`}
                    style={{ width: '80px', height: '54px' }}
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      sizes="80px"
                      className="object-cover object-center"
                    />
                  </button>
                )
              })}
            </div>
          )}
        </div>

        {/* ── Content Details Column ── */}
        <div
          className={`lg:col-span-6 flex flex-col gap-4 sm:gap-5 ${
            reverse ? 'lg:col-start-1' : ''
          }`}
        >
          {/* Header */}
          <div className="flex flex-col gap-1.5 sm:gap-2">
            <div className="flex items-center justify-between gap-2.5 flex-wrap">
              <span className="font-montserrat text-[11px] sm:text-xs font-semibold tracking-[0.18em] uppercase text-purple-muted">
                Category 0{index + 1}
              </span>
              {/* Confirmed Price Badge */}
              <span className="font-montserrat text-[11px] sm:text-xs font-semibold tracking-wide uppercase px-2.5 sm:px-3 py-1 rounded-full bg-gold/15 text-gold-dark border border-gold/30">
                {room.priceNote}
              </span>
            </div>
            <h2
              id={`room-title-${room.id}`}
              className="font-playfair text-2xl sm:text-3xl lg:text-[2rem] font-normal text-purple-heading leading-snug tracking-tight"
            >
              {room.name}
            </h2>
            <p className="font-montserrat text-xs sm:text-[13px] text-purple-muted font-medium">
              {room.subtitle}
            </p>
          </div>

          {/* Description */}
          <p className="font-montserrat text-xs sm:text-[14.5px] lg:text-[15px] leading-[1.75] sm:leading-[1.8] font-normal text-text-body">
            {room.description}
          </p>

          {/* Best For Box */}
          <div className="bg-[#FAF7F2] rounded-xl p-3 sm:p-4 border border-border/80 flex items-start gap-2.5 sm:gap-3">
            <span
              className="mt-0.5 text-gold flex-shrink-0 text-sm sm:text-base"
              aria-hidden="true"
            >
              ✦
            </span>
            <div>
              <span className="font-montserrat text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-purple-heading block mb-0.5">
                Best For
              </span>
              <p className="font-montserrat text-xs sm:text-[13px] text-text-body font-normal leading-relaxed">
                {room.bestFor}
              </p>
            </div>
          </div>

          {/* Confirmed Key Features Grid */}
          <div className="flex flex-col gap-2">
            <span className="font-montserrat text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-purple-heading">
              Confirmed In-Room Features
            </span>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 sm:gap-2 list-none p-0 m-0">
              {room.confirmedFeatures.map((feat) => (
                <li
                  key={feat}
                  className="flex items-center gap-2 font-montserrat text-xs sm:text-[12.5px] lg:text-[13px] text-text-body font-normal"
                >
                  <svg
                    className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gold flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.2}
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 font-montserrat font-semibold text-xs sm:text-[13px] tracking-[0.08em] uppercase bg-green-700 hover:bg-green-800 text-white px-5 sm:px-6 py-3.5 rounded-xl shadow-btn hover:shadow-md transition-all duration-300 text-center select-none w-full sm:w-auto"
              aria-label={`Enquire about ${room.name} on WhatsApp`}
            >
              <svg
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="flex-shrink-0"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.554 4.123 1.523 5.855L.057 23.09a.75.75 0 00.93.875l5.174-1.61A11.942 11.942 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.721 9.721 0 01-4.975-1.364l-.356-.214-3.695 1.15 1.1-3.613-.233-.37A9.712 9.712 0 012.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z" />
              </svg>
              <span>Enquire on WhatsApp</span>
            </a>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center font-montserrat font-medium sm:font-semibold text-xs sm:text-[13px] tracking-[0.08em] uppercase border border-purple-heading/80 hover:border-purple-heading text-purple-heading px-5 sm:px-6 py-3.5 rounded-xl hover:bg-purple-heading hover:text-white transition-all duration-300 text-center select-none w-full sm:w-auto"
            >
              Book / Enquire Online
            </Link>
          </div>
        </div>
      </div>
    </article>
  )
}
