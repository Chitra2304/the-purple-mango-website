import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import RoomCategoryCard, {
  RoomCategoryData,
} from '@/components/rooms/RoomCategoryCard'
import RoomComparisonTable from '@/components/rooms/RoomComparisonTable'
import RoomsFaqAccordion from '@/components/rooms/RoomsFaqAccordion'

export const metadata: Metadata = {
  title: 'Rooms & Suites in Lonavala | The Studio, Deluxe & Super Deluxe',
  description:
    'Discover 40 peaceful mountain rooms and suites at The Purple Mango resort in Karla, Lonavala. 100% pure vegetarian & Jain kitchen, en-suite bathrooms, and Western Ghats panoramas.',
  alternates: {
    canonical: '/rooms',
  },
}

/* ─── Room Categories Dataset (Exact Order Mandated) ─── */
const ROOM_CATEGORIES: RoomCategoryData[] = [
  {
    id: 'studio-room',
    name: 'The Studio Room',
    subtitle: 'Category 01 · Mountain Sanctuary for Two',
    description:
      'A serene, double-bedroom mountain retreat framed by floor-to-ceiling hillside foliage. Features a plush double bed, a cozy window-side sitting nook for slow morning teas, and a modern en-suite washroom with continuous hot & cold water.',
    bestFor: 'Couples, solo travelers & peaceful weekend mountain escapes',
    priceNote: 'Price on Request',
    whatsappMessage:
      'Hi, I would like to enquire about availability and rates for The Studio Room at The Purple Mango Resort, Lonavala.',
    images: [
      {
        src: '/images/rooms/studio.jpg',
        alt: 'The Studio Room at The Purple Mango Lonavala with double bed and mountain views',
        caption: 'Master bedroom with scenic hillside window framing',
      },
      {
        src: '/images/hero/hero-3.jpg',
        alt: 'The Studio Room interior perspective at The Purple Mango Lonavala',
        caption: 'Cozy two-seat morning lounge and ambient lighting',
      },
      {
        src: '/images/welcome/welcome-terrace.jpg',
        alt: 'The Studio Room immediate terrace surroundings at The Purple Mango Lonavala',
        caption: 'Step outside to bougainvillea-framed stone pathways',
      },
    ],
    confirmedFeatures: [
      'Climate-Controlled Air Conditioning',
      'Plush Double Bed & Premium Linens',
      'Attached Washroom with 24/7 Hot & Cold Water',
      'High-Speed Wi-Fi',
      'Digital Flat-Screen LED TV',
      'In-Room Electric Tea & Coffee Maker',
      'Prompt In-Room Service',
      'Meticulous Daily Housekeeping',
    ],
  },
  {
    id: 'deluxe-ac-room',
    name: 'Deluxe AC Room',
    subtitle: 'Category 02 · Spacious Family Comfort',
    description:
      'Built with generous floor space for families and traveling companions. Features powerful climate-controlled air conditioning, an expansive sitting area to gather comfortably, contemporary washroom fittings, and peaceful valley vistas.',
    bestFor: 'Families with children, small traveling groups & extended stays',
    priceNote: 'Price on Request',
    whatsappMessage:
      'Hi, I would like to enquire about availability and rates for the Deluxe AC Room at The Purple Mango Resort, Lonavala.',
    images: [
      {
        src: '/images/rooms/deluxe-haven.jpg',
        alt: 'Deluxe AC Room suite at The Purple Mango Lonavala with family seating area',
        caption: 'Generous floor layout with dedicated group lounge',
      },
      {
        src: '/images/hero/hero-3.jpg',
        alt: 'Deluxe AC Room panoramic view of valley contours at The Purple Mango Lonavala',
        caption: 'Spacious sleeping quarters with hill horizon views',
      },
      {
        src: '/images/hero/hero-2.jpg',
        alt: 'Deluxe AC Room proximity to infinity pool at The Purple Mango Lonavala',
        caption: 'Convenient ground-level access to resort amenities',
      },
    ],
    confirmedFeatures: [
      'Powerful Climate-Controlled AC',
      'Generous Open Floor Space Layout',
      'Dedicated Group Seating Area & Sofa',
      'Attached Washroom with Hot & Cold Water',
      'High-Speed Wi-Fi',
      'Large Wall-Mounted LED TV',
      'Electric Tea & Coffee Facilities',
      'Daily Housekeeping & Room Service',
    ],
  },
  {
    id: 'super-deluxe-ac-room',
    name: 'Super Deluxe AC Room',
    subtitle: 'Category 03 · Luxury Suite with Private Bathtub',
    description:
      'The top tier of mountain accommodation at The Purple Mango. Boasts a distinct separate living area, a deep-soaking bathtub in the master washroom, king-sized bedding, and the property’s largest entertainment setup overlooking misty ridgelines.',
    bestFor: 'Extended luxury escapes, anniversaries, family celebrations & VIP travelers',
    priceNote: 'Price on Request',
    whatsappMessage:
      'Hi, I would like to enquire about availability and rates for the Super Deluxe AC Room at The Purple Mango Resort, Lonavala.',
    images: [
      {
        src: '/images/rooms/super-deluxe.jpg',
        alt: 'Super Deluxe AC Room at The Purple Mango Lonavala with separate living room and sundeck',
        caption: 'Separate living room and sun deck framing the Ghats',
      },
      {
        src: '/images/hero/hero-3.jpg',
        alt: 'Super Deluxe AC Room bedroom suite at The Purple Mango Lonavala',
        caption: 'Master king bedroom with premium bespoke furnishings',
      },
      {
        src: '/images/welcome/welcome-terrace.jpg',
        alt: 'Super Deluxe AC Room tranquil terrace view at The Purple Mango Lonavala',
        caption: 'Private outlook over Karla valley peaks',
      },
    ],
    confirmedFeatures: [
      'Multi-Zone Climate Air Conditioning',
      'Distinct Separate Living & Lounge Area',
      'Luxury Deep-Soaking Bathtub & Walk-In Shower',
      'King-Sized Bedding with Premium Linens',
      'Largest In-Room LED TV on property',
      'High-Speed Wi-Fi',
      'Electric Tea & Coffee Maker',
      'Daily Housekeeping & Dedicated Room Service',
    ],
  },
]

/* ─── Confirmed In-Room Amenities Dataset ─── */
const IN_ROOM_AMENITIES = [
  {
    title: 'Premium Bedding',
    desc: 'Crisp fresh linens, plush pillows, and ergonomic mattresses designed for deep, restorative mountain sleep.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    ),
  },
  {
    title: 'Attached Washroom',
    desc: 'Contemporary sanitary fittings with 24/7 continuous hot & cold water supply and premium bath amenities.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
      </svg>
    ),
  },
  {
    title: 'High-Speed Wi-Fi',
    desc: 'Reliable wireless internet access across all rooms, keeping you connected during your mountain getaway.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z" />
      </svg>
    ),
  },
  {
    title: 'LED TV & Entertainment',
    desc: 'Digital flat-screen television setup with curated entertainment channels for peaceful evenings.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125z" />
      </svg>
    ),
  },
  {
    title: 'Tea & Coffee Facilities',
    desc: 'In-room electric kettle, assorted premium tea bags, fresh coffee sachets, and fine drinkware.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h8.25a2.25 2.25 0 002.25-2.25V3M3.75 3h12.75M3.75 3h-1.5m14.25 0h1.5a3 3 0 013 3v2.25a3 3 0 01-3 3h-1.5M6 21h8.25" />
      </svg>
    ),
  },
  {
    title: 'Prompt Room Service',
    desc: 'Order wholesome 100% pure vegetarian and Jain culinary dishes directly to your room door.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Daily Housekeeping',
    desc: 'Meticulous room care, routine sanitation, fresh linen servicing, and dedicated hospitality assistance.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    ),
  },
]

/* ─── Why Stay With Us Dataset ─── */
const WHY_STAY_REASONS = [
  {
    title: '100% Pure Vegetarian & Jain Kitchen',
    description:
      'We maintain an uncompromised vegetarian sanctuary with a dedicated, separate Jain kitchen preparing authentic satvik dishes without onion or garlic on request.',
    badge: 'Pure Satvik Dining',
  },
  {
    title: 'Tranquil Mountain Surroundings',
    description:
      'Set against the evergreen ridgelines of Karla in the Western Ghats, waking up to birdsong, cool breezes, and rolling monsoon mists.',
    badge: 'Western Ghats Vistas',
  },
  {
    title: 'Tailored for Families & Groups',
    description:
      'With 40 rooms, open garden lawns, and versatile bedding arrangements, we provide a peaceful holiday haven where multiple generations gather comfortably.',
    badge: 'Family & Group Friendly',
  },
  {
    title: 'Celebration & Corporate Facilities',
    description:
      'Sprawling banquet lawns and dedicated hospitality support accommodating 500+ guests for sacred wedding rituals, milestones, and corporate retreats.',
    badge: 'Bespoke Events',
  },
  {
    title: 'Prime Karla, Lonavala Location',
    description:
      'Positioned away from highway noise yet minutes away from ancient Karla Caves, Bhaja Caves, and the Mumbai-Pune Expressway for smooth travel.',
    badge: 'Effortless Access',
  },
]

export default function RoomsPage() {
  return (
    <>
      {/* ─── 1. HERO SECTION ─── */}
      <section
        aria-label="Rooms and suites hero"
        className="bg-purple-deep text-white py-16 sm:py-20 lg:py-24 relative overflow-hidden"
      >
        <div className="container-resort relative z-10">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto gap-4">
            <span className="font-montserrat text-[12px] sm:text-[13px] font-normal tracking-[0.24em] uppercase text-gold-light">
              ROOMS &amp; STAY
            </span>
            <h1 className="font-playfair text-3xl sm:text-4xl lg:text-[2.85rem] font-normal text-white leading-[1.14] sm:leading-[1.15] tracking-tight">
              Rooms &amp; Suites at The Purple Mango
            </h1>
            <p className="font-montserrat text-white/80 text-[14.5px] sm:text-[15.5px] leading-[1.8] font-normal mt-1 max-w-2xl">
              Tucked into the misty hill slopes of Karla, Lonavala, discover 40
              mindfully appointed sanctuaries designed for mountain calm,
              restorative rest, and cherished family gatherings.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row items-center gap-3.5 sm:gap-4 w-full sm:w-auto">
              <Link
                href="/contact"
                id="hero-book-stay-now-btn"
                className="inline-flex items-center justify-center font-montserrat font-semibold text-xs sm:text-[13px] tracking-[0.12em] uppercase bg-gold hover:bg-gold-hover text-gold-dark px-8 py-3.5 rounded-xl shadow-btn hover:shadow-md transition-all duration-300 text-center select-none w-full sm:w-auto"
              >
                Book Your Stay Now
              </Link>
              <a
                href="https://wa.me/919876543210?text=Hi%2C%20I%20would%20like%20to%20enquire%20about%20room%20availability%20at%20The%20Purple%20Mango%20Resort%2C%20Lonavala."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 font-montserrat font-medium text-xs sm:text-[13px] tracking-[0.08em] uppercase border border-white/30 hover:border-white text-white px-7 py-3.5 rounded-xl hover:bg-white/10 transition-all duration-300 text-center select-none w-full sm:w-auto"
              >
                <span>WhatsApp Enquiry</span>
              </a>
            </div>
          </div>
        </div>

        {/* Ambient Hero Media Feature Container */}
        <div className="container-resort mt-10 sm:mt-12">
          <div className="relative aspect-[16/10] sm:aspect-[21/9] min-h-[200px] sm:min-h-[280px] lg:min-h-[340px] rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden border border-white/15 shadow-2xl">
            <Image
              src="/images/rooms/deluxe-haven.jpg"
              alt="Panoramic mountain view from luxury suite at The Purple Mango Resort Lonavala"
              fill
              sizes="(max-width: 1280px) 100vw, 1200px"
              className="object-cover object-center"
              priority
              quality={90}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-8 sm:right-8 text-white">
              <span className="font-montserrat text-[10.5px] sm:text-xs font-semibold tracking-wider uppercase text-gold-light">
                Karla, Lonavala · Western Ghats
              </span>
              <p className="font-playfair text-base sm:text-xl lg:text-2xl font-normal text-white drop-shadow-sm mt-0.5 leading-snug">
                Quiet luxury surrounded by monsoon mist and Sahyadri greenery
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 2. QUICK FACTS BAR (Responsive Symmetric Cards) ─── */}
      <section
        aria-label="Quick resort facts"
        className="bg-white border-y border-border py-6 sm:py-7 relative z-10"
      >
        <div className="container-resort">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
            {[
              {
                value: '40 Rooms',
                label: 'Boutique Mountain Capacity',
              },
              {
                value: '100% Pure Veg',
                label: 'Dedicated Vegetarian Resort',
              },
              {
                value: 'Jain-Friendly',
                label: 'Authentic Satvik Kitchen',
              },
              {
                value: 'Family & Group Friendly',
                label: 'Spacious Layouts',
              },
            ].map((fact) => (
              <div
                key={fact.value}
                className="flex flex-col items-center justify-center text-center p-3.5 sm:p-5 rounded-2xl bg-[#FAF7F2]/80 border border-border/70"
              >
                <span className="font-playfair text-xl sm:text-2xl font-normal text-purple-heading">
                  {fact.value}
                </span>
                <span className="font-montserrat text-[10px] sm:text-xs text-text-muted mt-1 uppercase tracking-wider font-medium text-center">
                  {fact.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 3. ROOM CATEGORIES (Exact Order: Studio, Deluxe, Super Deluxe) ─── */}
      <section
        id="room-categories"
        aria-labelledby="room-categories-heading"
        className="bg-[#FBF2ED] py-14 sm:py-18 lg:py-24"
      >
        <div className="container-resort">
          <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-10 sm:mb-12 lg:mb-16">
            <span className="font-montserrat text-[12px] sm:text-[13px] font-normal tracking-[0.24em] uppercase text-purple-muted mb-2 sm:mb-3">
              SELECT YOUR SANCTUARY
            </span>
            <h2
              id="room-categories-heading"
              className="font-playfair text-3xl sm:text-4xl lg:text-[2.65rem] font-normal text-purple-heading leading-[1.14] sm:leading-[1.15] tracking-tight mb-3"
            >
              Tailored Room Categories
            </h2>
            <p className="font-montserrat text-xs sm:text-[14.5px] lg:text-[15.5px] leading-[1.75] sm:leading-[1.8] font-normal text-text-body">
              Every room is crafted to evoke calm, understated luxury, and an
              intimate relationship with the hill landscape.
            </p>
          </div>

          <div className="flex flex-col gap-8 sm:gap-10 lg:gap-14">
            {ROOM_CATEGORIES.map((room, index) => (
              <RoomCategoryCard
                key={room.id}
                room={room}
                index={index}
                reverse={index % 2 === 1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ─── 4. ROOM COMPARISON (Confirmed Attributes Only) ─── */}
      <section
        id="room-comparison"
        aria-labelledby="comparison-heading"
        className="bg-white py-16 sm:py-20 lg:py-24 border-t border-border"
      >
        <div className="container-resort">
          <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-10 lg:mb-14">
            <span className="font-montserrat text-[12px] sm:text-[13px] font-normal tracking-[0.24em] uppercase text-purple-muted mb-2.5 sm:mb-3">
              SIDE-BY-SIDE
            </span>
            <h2
              id="comparison-heading"
              className="font-playfair text-3xl sm:text-4xl lg:text-[2.65rem] font-normal text-purple-heading leading-[1.14] sm:leading-[1.15] tracking-tight mb-3"
            >
              Room Comparison
            </h2>
            <p className="font-montserrat text-[14.5px] sm:text-[15.5px] leading-[1.8] font-normal text-text-body">
              Compare confirmed layouts, climate control, bathtubs, and seating
              arrangements to choose the ideal fit for your stay.
            </p>
          </div>

          <RoomComparisonTable />
        </div>
      </section>

      {/* ─── 5. AMENITIES IN EVERY ROOM (Confirmed Features) ─── */}
      <section
        id="room-amenities"
        aria-labelledby="amenities-heading"
        className="bg-[#FBF2ED] py-16 sm:py-20 lg:py-24"
      >
        <div className="container-resort">
          <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-12 lg:mb-16">
            <span className="font-montserrat text-[12px] sm:text-[13px] font-normal tracking-[0.24em] uppercase text-purple-muted mb-2.5 sm:mb-3">
              CONFIRMED STANDARDS
            </span>
            <h2
              id="amenities-heading"
              className="font-playfair text-3xl sm:text-4xl lg:text-[2.65rem] font-normal text-purple-heading leading-[1.14] sm:leading-[1.15] tracking-tight mb-3"
            >
              Amenities in Every Room
            </h2>
            <p className="font-montserrat text-[14.5px] sm:text-[15.5px] leading-[1.8] font-normal text-text-body">
              Regardless of the room category chosen, every guest at The Purple
              Mango enjoys these foundational comforts.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
            {IN_ROOM_AMENITIES.map((amenity) => (
              <div
                key={amenity.title}
                className="bg-white rounded-[1.5rem] p-6 sm:p-7 border border-border shadow-sm flex flex-col gap-3 transition-transform duration-200 hover:-translate-y-0.5"
              >
                <div className="w-12 h-12 rounded-xl bg-gold/15 text-gold-dark flex items-center justify-center flex-shrink-0">
                  {amenity.icon}
                </div>
                <h3 className="font-playfair text-xl font-normal text-purple-heading">
                  {amenity.title}
                </h3>
                <p className="font-montserrat text-xs sm:text-[13.5px] leading-[1.7] text-text-body font-normal">
                  {amenity.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 6. WHY STAY WITH US ─── */}
      <section
        id="why-stay"
        aria-labelledby="why-stay-heading"
        className="bg-white py-16 sm:py-20 lg:py-24 border-t border-border"
      >
        <div className="container-resort">
          <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-12 lg:mb-16">
            <span className="font-montserrat text-[12px] sm:text-[13px] font-normal tracking-[0.24em] uppercase text-purple-muted mb-2.5 sm:mb-3">
              THE PURPLE MANGO EXPERIENCE
            </span>
            <h2
              id="why-stay-heading"
              className="font-playfair text-3xl sm:text-4xl lg:text-[2.65rem] font-normal text-purple-heading leading-[1.14] sm:leading-[1.15] tracking-tight mb-3"
            >
              Why Stay With Us
            </h2>
            <p className="font-montserrat text-[14.5px] sm:text-[15.5px] leading-[1.8] font-normal text-text-body">
              More than just accommodation — a holistic retreat rooted in pure
              vegetarian traditions and Sahyadri tranquility.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {WHY_STAY_REASONS.map((reason) => (
              <div
                key={reason.title}
                className="bg-[#FAF7F2] rounded-[1.75rem] p-7 sm:p-8 border border-border flex flex-col justify-between gap-5 transition-shadow hover:shadow-card"
              >
                <div className="flex flex-col gap-3">
                  <span className="font-montserrat text-[11px] font-semibold uppercase tracking-[0.14em] text-purple-muted">
                    {reason.badge}
                  </span>
                  <h3 className="font-playfair text-xl sm:text-2xl font-normal text-purple-heading leading-snug">
                    {reason.title}
                  </h3>
                  <p className="font-montserrat text-xs sm:text-[13.5px] leading-[1.75] text-text-body font-normal">
                    {reason.description}
                  </p>
                </div>
                <div className="pt-2">
                  <span className="w-8 h-[2px] bg-gold block" />
                </div>
              </div>
            ))}
          </div>

          {/* Contextual Internal Link Banner */}
          <div className="mt-10 sm:mt-12 p-6 sm:p-8 rounded-[1.75rem] bg-purple-deep text-white flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
            <div>
              <p className="font-playfair text-xl sm:text-2xl font-normal text-white">
                Craving satvik delicacies during your stay?
              </p>
              <p className="font-montserrat text-xs sm:text-[13.5px] text-white/80 mt-1 font-light">
                Discover The Mango Leaf restaurant and our dedicated Jain kitchen.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3 w-full sm:w-auto flex-shrink-0">
              <Link
                href="/dine"
                className="inline-flex items-center justify-center font-montserrat font-semibold text-xs tracking-wider uppercase bg-gold hover:bg-gold-hover text-gold-dark px-6 py-3 rounded-xl transition-all duration-300 w-full sm:w-auto text-center"
              >
                Explore Dining
              </Link>
              <Link
                href="/activities"
                className="inline-flex items-center justify-center font-montserrat font-medium text-xs tracking-wider uppercase border border-white/40 hover:border-white text-white px-6 py-3 rounded-xl transition-all duration-300 w-full sm:w-auto text-center"
              >
                Activities
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 7. FAQ SECTION (Confirmed Policies & Transparency) ─── */}
      <section
        id="faq"
        aria-labelledby="faq-heading"
        className="bg-[#FBF2ED] py-14 sm:py-18 lg:py-24 border-t border-border"
      >
        <div className="container-resort">
          <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-10 sm:mb-12 lg:mb-14">
            <span className="font-montserrat text-[12px] sm:text-[13px] font-normal tracking-[0.24em] uppercase text-purple-muted mb-2 sm:mb-3">
              GUEST INFORMATION
            </span>
            <h2
              id="faq-heading"
              className="font-playfair text-3xl sm:text-4xl lg:text-[2.65rem] font-normal text-purple-heading leading-[1.14] sm:leading-[1.15] tracking-tight mb-3"
            >
              Frequently Asked Questions
            </h2>
            <p className="font-montserrat text-xs sm:text-[14.5px] lg:text-[15.5px] leading-[1.75] sm:leading-[1.8] font-normal text-text-body">
              Clear answers regarding resort policies, vegetarian standards,
              timings, and reservations.
            </p>
          </div>

          <RoomsFaqAccordion />

          <p className="font-montserrat text-xs text-center text-text-muted mt-8 max-w-xl mx-auto px-4">
            * For special requests, group tariff inquiries, or seasonal
            cancellation terms, please contact our front desk team directly.
          </p>
        </div>
      </section>

      {/* ─── 8. FINAL CTA: PLAN YOUR STAY ─── */}
      <section
        aria-label="Plan your stay at The Purple Mango"
        className="bg-purple-deep text-white py-14 sm:py-18 lg:py-24 relative overflow-hidden"
      >
        <div className="container-resort text-center max-w-3xl mx-auto flex flex-col items-center gap-5">
          <span className="font-montserrat text-[12px] sm:text-[13px] font-normal tracking-[0.24em] uppercase text-gold-light">
            RESERVE YOUR SANCTUARY
          </span>
          <h2 className="font-playfair text-3xl sm:text-4xl lg:text-[2.85rem] font-normal text-white leading-[1.14] sm:leading-[1.15] tracking-tight">
            Plan Your Stay
          </h2>
          <p className="font-montserrat text-white/80 text-xs sm:text-[14.5px] lg:text-[15.5px] leading-[1.75] sm:leading-[1.8] font-normal max-w-2xl px-2">
            Whether planning an unhurried weekend retreat for two, a multi-generational
            family holiday, or a sacred destination celebration, our hospitality
            team will curate your stay with thoughtful care.
          </p>

          {/* Contact Details Pill Strip */}
          <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 sm:gap-6 pt-2 text-white/90 font-montserrat text-xs sm:text-[13.5px]">
            <a
              href="tel:+919876543210"
              className="flex items-center gap-2 hover:text-gold transition-colors"
            >
              <svg className="w-4 h-4 text-gold flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>+91 98765 43210</span>
            </a>
            <span className="hidden sm:inline text-white/30" aria-hidden="true">
              ·
            </span>
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-gold transition-colors"
            >
              <svg className="w-4 h-4 text-gold flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.554 4.123 1.523 5.855L.057 23.09a.75.75 0 00.93.875l5.174-1.61A11.942 11.942 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
              </svg>
              <span>WhatsApp Reservations</span>
            </a>
            <span className="hidden sm:inline text-white/30" aria-hidden="true">
              ·
            </span>
            <span className="text-white/70">Karla, Lonavala, Maharashtra</span>
          </div>

          <div className="pt-3 flex flex-col sm:flex-row items-center gap-3.5 sm:gap-4 w-full sm:w-auto">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center font-montserrat font-semibold text-xs sm:text-[13px] tracking-[0.12em] uppercase bg-gold hover:bg-gold-hover text-gold-dark px-8 py-3.5 rounded-xl shadow-btn hover:shadow-md transition-all duration-300 text-center select-none w-full sm:w-auto"
            >
              Send Reservation Enquiry
            </Link>
            <Link
              href="/gallery"
              className="inline-flex items-center justify-center font-montserrat font-medium text-xs sm:text-[13px] tracking-[0.08em] uppercase border border-white/30 hover:border-white text-white px-7 py-3.5 rounded-xl hover:bg-white/10 transition-all duration-300 text-center select-none w-full sm:w-auto"
            >
              Browse Photo Gallery
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
