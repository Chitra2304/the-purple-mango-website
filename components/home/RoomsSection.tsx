import Link from 'next/link'
import SectionLabel from '@/components/ui/SectionLabel'
import RoomCard from '@/components/ui/RoomCard'

const ROOMS = [
  {
    name: 'The Studio',
    description:
      'An intimate, thoughtfully designed space for two, featuring panoramic hill windows, bespoke wooden furnishings and curated amenities.',
    price: '₹8,500 / night',
    imageSrc: '/images/rooms/studio.jpg',
    imageAlt: 'The Studio room at The Purple Mango with panoramic hill views and warm wooden furnishings',
    href: '/contact',
    featured: false,
  },
  {
    name: 'Deluxe Haven',
    description:
      'Expansive interiors, a private outdoor seating area offering an immersive view of the valley and the voices of the hills.',
    price: '₹12,000 / night',
    imageSrc: '/images/rooms/deluxe-haven.jpg',
    imageAlt: 'Deluxe Haven suite at The Purple Mango with warm-toned living area and valley views',
    href: '/contact',
    featured: true,
  },
  {
    name: 'Super Deluxe',
    description:
      'Our most spacious offering: study, rest and an ultimate relaxation with premium lounges, deep soaking tub and sweeping vistas.',
    price: '₹16,000 / night',
    imageSrc: '/images/rooms/super-deluxe.jpg',
    imageAlt: 'Super Deluxe suite at The Purple Mango with luxury pool and sweeping Western Ghats views',
    href: '/contact',
    featured: false,
  },
]

export default function RoomsSection() {
  return (
    <section
      id="rooms"
      aria-labelledby="rooms-heading"
      className="bg-white section-padding"
    >
      <div className="container-resort">
        {/* ── Header Row ── */}
        <div className="flex flex-col gap-3 mb-12">
          <SectionLabel withLine>Residences</SectionLabel>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <h2
              id="rooms-heading"
              className="font-playfair text-4xl lg:text-5xl font-semibold text-purple-heading"
            >
              Sanctuaries of Comfort
            </h2>
            <Link
              href="/rooms"
              id="rooms-view-all-link"
              className="inline-flex items-center gap-2 font-montserrat text-sm font-semibold text-purple-heading hover:text-gold transition-colors duration-200 group flex-shrink-0"
              aria-label="View all suites and rooms"
            >
              View All Suites
              <svg
                className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>

        {/* ── Cards Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {ROOMS.map((room) => (
            <RoomCard key={room.name} {...room} />
          ))}
        </div>
      </div>
    </section>
  )
}
