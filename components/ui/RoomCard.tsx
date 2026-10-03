import Image from 'next/image'
import Link from 'next/link'

interface RoomCardProps {
  name: string
  description: string
  imageSrc: string
  imageAlt: string
  href?: string
  aspectRatio?: string
  className?: string
}

export default function RoomCard({
  name,
  description,
  imageSrc,
  imageAlt,
  href = '/contact',
  aspectRatio = 'aspect-[4/3.2]',
  className = '',
}: RoomCardProps) {
  return (
    <article className={`group flex flex-col gap-4 ${className}`}>
      {/* Image */}
      <div className={`relative overflow-hidden rounded-[1.25rem] shadow-sm ${aspectRatio}`}>
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
          quality={85}
        />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-2.5">
        <h3 className="font-playfair text-xl sm:text-[1.35rem] font-normal text-purple-heading leading-snug group-hover:text-purple-mid transition-colors duration-200">
          {name}
        </h3>
        <p className="font-montserrat text-[13.5px] sm:text-[14px] text-text-body font-normal leading-[1.7]">
          {description}
        </p>
        <div className="pt-1">
          <Link
            href={href}
            className="inline-flex items-center gap-1.5 font-montserrat text-xs sm:text-[13px] font-semibold text-gold hover:text-gold-hover tracking-[0.08em] uppercase transition-colors duration-200 group/link"
            aria-label={`Explore ${name}`}
          >
            <span>Explore</span>
            <svg
              className="w-3.5 h-3.5 text-gold group-hover/link:text-gold-hover transition-all duration-200 group-hover/link:translate-x-1 flex-shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </article>
  )
}
