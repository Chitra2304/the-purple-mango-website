import Image from 'next/image'
import Link from 'next/link'

interface RoomCardProps {
  name: string
  description: string
  price: string
  imageSrc: string
  imageAlt: string
  href?: string
  featured?: boolean
}

export default function RoomCard({
  name,
  description,
  price,
  imageSrc,
  imageAlt,
  href = '/contact',
  featured = false,
}: RoomCardProps) {
  return (
    <article className="room-card group flex flex-col bg-white rounded-3xl overflow-hidden shadow-card hover:shadow-card-hover transition-shadow duration-400">
      {/* Image */}
      <div className="relative overflow-hidden aspect-[4/3]">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="room-card-img object-cover"
          loading="lazy"
        />
        {featured && (
          <div className="absolute top-4 left-4 bg-gold text-white text-xs font-montserrat font-semibold tracking-wider px-3 py-1.5 rounded-full">
            Most Popular
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6 gap-3">
        <h3 className="font-playfair text-xl font-semibold text-purple-heading leading-snug group-hover:text-purple-mid transition-colors duration-200">
          {name}
        </h3>
        <p className="font-montserrat text-sm text-text-muted leading-relaxed line-clamp-3 flex-1">
          {description}
        </p>
        <div className="flex items-center justify-between pt-2 border-t border-border-light mt-auto">
          <div>
            <span className="font-montserrat text-xs text-text-light uppercase tracking-wider">From</span>
            <p className="font-playfair text-lg font-semibold text-gold leading-none mt-0.5">
              {price}
            </p>
          </div>
          <Link
            href={href}
            className="font-montserrat text-xs font-semibold text-purple-heading hover:text-gold tracking-wider uppercase transition-colors duration-200 flex items-center gap-1.5 group/link"
            aria-label={`Explore ${name}`}
          >
            Explore
            <svg
              className="w-3.5 h-3.5 transition-transform duration-200 group-hover/link:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </article>
  )
}
