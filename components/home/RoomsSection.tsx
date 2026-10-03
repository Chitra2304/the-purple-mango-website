import Link from 'next/link'
import RoomCard from '@/components/ui/RoomCard'

const ROOMS = [
  {
    name: 'The Studio Room',
    description:
      'For couples and short stays. A comfortable double bed, a spacious washroom and a cozy sitting area...',
    imageSrc: '/images/rooms/studio.jpg',
    imageAlt: 'The Studio Room at The Purple Mango with mountain views',
    href: '/contact',
    aspectRatio: 'aspect-[4/3.2]',
    className: '',
  },
  {
    name: 'Deluxe Haven AC Room',
    description:
      'Built for families. More floor space, a proper seating area for the group and modern washroom fittings...',
    imageSrc: '/images/rooms/deluxe-haven.jpg',
    imageAlt: 'Deluxe Haven AC Room suite at The Purple Mango with valley views',
    href: '/contact',
    aspectRatio: 'aspect-[4/3.5]',
    className: 'md:-mt-6 lg:-mt-8',
  },
  {
    name: 'Super Deluxe AC Room',
    description:
      'The top tier: a separate living area, bathtub and the largest entertainment setup on the property, extra...',
    imageSrc: '/images/rooms/super-deluxe.jpg',
    imageAlt: 'Super Deluxe AC Room at The Purple Mango with luxury lounge and mountain view',
    href: '/contact',
    aspectRatio: 'aspect-[4/3.2]',
    className: '',
  },
]

export default function RoomsSection() {
  return (
    <section
      id="rooms"
      aria-labelledby="rooms-heading"
      className="bg-[#FBF2ED] section-padding"
    >
      <div className="container-resort">
        {/* ── Header Row ── */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12 lg:mb-16">
          <div className="flex flex-col gap-2.5 sm:gap-3">
            <span className="font-montserrat text-[12px] sm:text-[13px] font-normal tracking-[0.24em] uppercase text-purple-muted">
              ROOMS & STAY
            </span>
            <h2
              id="rooms-heading"
              className="font-playfair text-3xl sm:text-4xl lg:text-[2.65rem] font-normal text-purple-heading leading-[1.14] sm:leading-[1.15] tracking-tight"
            >
              Sanctuaries of Comfort
            </h2>
          </div>

          <Link
            href="/contact"
            id="rooms-book-stay-btn"
            className="inline-flex items-center justify-center font-montserrat font-medium sm:font-semibold text-[13px] sm:text-[14px] tracking-normal border border-purple-heading/80 hover:border-purple-heading text-purple-heading px-8 py-3.5 rounded-xl hover:bg-purple-heading hover:text-white transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-heading self-start sm:self-end text-center select-none"
          >
            Book Your Stay Now
          </Link>
        </div>

        {/* ── Cards Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-7 lg:gap-9 items-start">
          {ROOMS.map((room) => (
            <RoomCard key={room.name} {...room} />
          ))}
        </div>
      </div>
    </section>
  )
}
