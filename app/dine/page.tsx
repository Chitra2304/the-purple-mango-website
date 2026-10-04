import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import DineFaqAccordion from '@/components/dine/DineFaqAccordion'

export const metadata: Metadata = {
  title: 'Pure Vegetarian & Jain Dining | The Mango Leaf at The Purple Mango Lonavala',
  description:
    'Experience 100% pure vegetarian and Jain dining at The Purple Mango Resort in Karla, Lonavala. Featuring The Mango Leaf restaurant, candlelight terrace dining, separate dedicated Jain kitchen, and panoramic Western Ghats views.',
  alternates: {
    canonical: '/dine',
  },
}

const JAIN_FEATURES = [
  {
    title: 'Separate Jain Cookware',
    description: 'Dedicated preparation station and independent cookware for satvik cooking.',
  },
  {
    title: 'No Onion, Garlic or Root Veg',
    description: 'Wholesome satvik meals prepared strictly to Jain dietary principles upon request.',
  },
  {
    title: 'Alcohol-Free Haven',
    description: 'A serene, smoke-free and alcohol-free environment welcoming families of all generations.',
  },
  {
    title: 'Fresh Quality Sourcing',
    description: 'Fresh seasonal ingredients prepared with meticulous culinary hygiene standards.',
  },
]

export default function DinePage() {
  return (
    <>
      {/* ─── 1. PAGE HERO HEADER ─── */}
      <section
        aria-label="Dining overview at The Purple Mango"
        className="bg-purple-deep text-white py-16 lg:py-20 text-center relative overflow-hidden"
      >
        <div className="container-resort relative z-10">
          <div className="flex flex-col items-center gap-3.5 sm:gap-4 max-w-3xl mx-auto">
            <span className="font-montserrat text-[12px] sm:text-[13px] font-normal tracking-[0.24em] uppercase text-gold-light">
              PURE VEG &amp; JAIN DINING
            </span>

            <h1 className="font-playfair text-3xl sm:text-4xl lg:text-[2.65rem] font-normal text-white leading-[1.14] sm:leading-[1.15] tracking-tight">
              100% Pure Vegetarian &amp; Jain Dining in Karla, Lonavala
            </h1>

            <p className="font-montserrat text-white/80 text-[14.5px] sm:text-[15.5px] leading-[1.8] font-normal max-w-2xl mt-1">
              Wholesome multi-cuisine vegetarian gastronomy at The Mango Leaf and
              candlelight terrace dining, featuring a separate dedicated Jain
              kitchen in a serene, alcohol-free family setting overlooking the
              Western Ghats.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-3.5 sm:gap-4 pt-3 w-full sm:w-auto">
              <a
                href="#venues"
                className="inline-flex items-center justify-center font-montserrat font-semibold text-xs sm:text-[13px] tracking-[0.12em] uppercase bg-gold hover:bg-gold-hover text-gold-dark px-7 py-3.5 rounded-xl shadow-btn hover:shadow-md transition-all duration-300 w-full sm:w-auto text-center select-none"
              >
                Explore Dining Venues
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center font-montserrat font-medium text-xs sm:text-[13px] tracking-[0.08em] uppercase border border-white/30 hover:border-white text-white px-7 py-3.5 rounded-xl hover:bg-white/10 transition-all duration-300 w-full sm:w-auto text-center select-none"
              >
                Table &amp; Group Enquiries
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 2. DINING VENUES & SETTINGS ─── */}
      <section
        id="venues"
        aria-labelledby="venues-heading"
        className="bg-cream section-padding border-b border-border"
      >
        <div className="container-resort">
          <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-10 sm:mb-14">
            <span className="font-montserrat text-[12px] sm:text-[13px] font-normal tracking-[0.24em] uppercase text-purple-muted mb-2 sm:mb-3">
              OUR SETTINGS
            </span>
            <h2
              id="venues-heading"
              className="font-playfair text-3xl sm:text-4xl lg:text-[2.65rem] font-normal text-purple-heading leading-[1.14] sm:leading-[1.15] tracking-tight mb-3"
            >
              Valley Panoramas &amp; Open Mountain Skies
            </h2>
            <p className="font-montserrat text-xs sm:text-[14.5px] lg:text-[15.5px] leading-[1.75] sm:leading-[1.8] font-normal text-text-body">
              Two distinct dining atmospheres designed for slow mornings, relaxed
              family lunches, and lantern-lit mountain evenings.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
            {/* ── Venue 1: The Mango Leaf Restaurant ── */}
            <div className="bg-white rounded-[2rem] overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 border border-border flex flex-col group">
              <div className="relative aspect-[16/10] sm:aspect-[16/9] overflow-hidden">
                <Image
                  src="/images/dining/family-dining.jpg"
                  alt="Indoor dining room at The Mango Leaf restaurant with panoramic mountain valley views"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  quality={85}
                />
                <div className="absolute top-4 left-4 bg-purple-deep/90 backdrop-blur-md text-gold-light text-xs font-montserrat uppercase tracking-[0.14em] px-3.5 py-1.5 rounded-full border border-white/10">
                  Signature Restaurant
                </div>
              </div>

              <div className="p-6 sm:p-8 flex flex-col flex-1 justify-between gap-5">
                <div className="flex flex-col gap-2.5">
                  <div className="w-12 h-[2px] bg-gold" aria-hidden="true" />
                  <h3 className="font-playfair text-2xl sm:text-[1.75rem] font-normal text-purple-heading">
                    The Mango Leaf
                  </h3>
                  <p className="font-montserrat text-xs sm:text-[13px] text-purple-muted font-medium uppercase tracking-[0.12em]">
                    Indoor Multi-Cuisine Dining · Valley Panoramas
                  </p>
                  <p className="font-montserrat text-text-body text-[14px] sm:text-[15px] leading-[1.75] font-normal mt-1">
                    Our signature restaurant features sweeping panoramic valley views
                    through floor-to-ceiling glass. Enjoy slow-simmered Indian curries,
                    warm tandoori breads, and comforting multi-cuisine vegetarian
                    favorites in a calm, climate-controlled setting.
                  </p>
                </div>

                <div className="pt-2 border-t border-border-light flex flex-wrap gap-2 text-[11px] sm:text-xs font-montserrat font-medium text-purple-heading">
                  <span className="bg-cream px-3 py-1 rounded-lg">Panoramic Views</span>
                  <span className="bg-cream px-3 py-1 rounded-lg">Multi-Cuisine Vegetarian</span>
                  <span className="bg-cream px-3 py-1 rounded-lg">Family-Friendly Seating</span>
                </div>
              </div>
            </div>

            {/* ── Venue 2: Candlelight Terrace Dining ── */}
            <div className="bg-white rounded-[2rem] overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 border border-border flex flex-col group">
              <div className="relative aspect-[16/10] sm:aspect-[16/9] overflow-hidden">
                <Image
                  src="/images/hero/hero-4.jpg"
                  alt="Open-air candlelight terrace dining under mountain skies at golden hour at The Purple Mango"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  quality={85}
                />
                <div className="absolute top-4 left-4 bg-purple-deep/90 backdrop-blur-md text-gold-light text-xs font-montserrat uppercase tracking-[0.14em] px-3.5 py-1.5 rounded-full border border-white/10">
                  Open-Air Terrace
                </div>
              </div>

              <div className="p-6 sm:p-8 flex flex-col flex-1 justify-between gap-5">
                <div className="flex flex-col gap-2.5">
                  <div className="w-12 h-[2px] bg-gold" aria-hidden="true" />
                  <h3 className="font-playfair text-2xl sm:text-[1.75rem] font-normal text-purple-heading">
                    Candlelight Terrace Dining
                  </h3>
                  <p className="font-montserrat text-xs sm:text-[13px] text-purple-muted font-medium uppercase tracking-[0.12em]">
                    Open Terrace · Starlit Hill Views
                  </p>
                  <p className="font-montserrat text-text-body text-[14px] sm:text-[15px] leading-[1.75] font-normal mt-1">
                    Dine under the open sky on stone-paved terraces as twilight settles
                    over the hills. Glowing candle lanterns, crisp mountain air, and
                    starlit ridgelines create an intimate backdrop for evening dinners
                    and quiet conversations.
                  </p>
                </div>

                <div className="pt-2 border-t border-border-light flex flex-wrap gap-2 text-[11px] sm:text-xs font-montserrat font-medium text-purple-heading">
                  <span className="bg-cream px-3 py-1 rounded-lg">Open-Air Seating</span>
                  <span className="bg-cream px-3 py-1 rounded-lg">Lantern Ambiance</span>
                  <span className="bg-cream px-3 py-1 rounded-lg">Cool Mountain Breeze</span>
                </div>
              </div>
            </div>
          </div>

          {/* ── Compact In-Room Dining Note ── */}
          <div className="mt-8 sm:mt-10 bg-white rounded-2xl p-5 sm:p-6 border border-border flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
            <div className="flex items-center gap-4 text-center sm:text-left">
              <div className="w-10 h-10 rounded-xl bg-gold/15 text-gold-dark flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5" />
                </svg>
              </div>
              <div>
                <h3 className="font-playfair text-base sm:text-lg font-normal text-purple-heading">
                  Discreet In-Room Dining Service
                </h3>
                <p className="font-montserrat text-xs sm:text-[13px] text-text-body font-normal leading-normal">
                  Hot pure vegetarian and Jain meals delivered directly to your room or private suite balcony.
                </p>
              </div>
            </div>
            <Link
              href="/rooms"
              className="font-montserrat font-medium text-xs tracking-wider uppercase text-purple-heading hover:text-gold transition-colors duration-200 flex-shrink-0 whitespace-nowrap"
            >
              View Room Suites &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* ─── 3. DEDICATED JAIN KITCHEN & SATVIK CRAFT ─── */}
      <section
        id="jain-kitchen"
        aria-labelledby="jain-heading"
        className="bg-white py-16 sm:py-20 lg:py-24 border-b border-border"
      >
        <div className="container-resort">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            {/* ── Left: Jain Satvik Thali Photography ── */}
            <div className="relative">
              <div className="relative rounded-[2rem] overflow-hidden shadow-card-hover aspect-[4/3] sm:aspect-[4/3.2]">
                <Image
                  src="/images/dining/jain-dining-spread.jpg"
                  alt="Authentic Jain satvik thali meal served in traditional brass katoris at The Purple Mango with mountain backdrop"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center"
                  quality={85}
                />
                <div className="absolute bottom-4 left-4 right-4 sm:right-auto bg-cream/95 backdrop-blur-md rounded-xl p-3.5 sm:p-4 shadow-card max-w-[280px] border border-white/60">
                  <p className="font-montserrat text-[10.5px] font-semibold tracking-[0.14em] uppercase text-purple-muted mb-0.5">
                    Near Alkesh Modi Jain Temple
                  </p>
                  <p className="font-playfair text-sm font-normal text-purple-heading">
                    Segregated Jain Kitchen &amp; Cookware
                  </p>
                </div>
              </div>
            </div>

            {/* ── Right: Comprehensive Editorial & Features ── */}
            <div className="flex flex-col gap-5 sm:gap-6">
              <div className="flex flex-col gap-2 sm:gap-2.5">
                <span className="font-montserrat text-[12px] sm:text-[13px] font-normal tracking-[0.24em] uppercase text-purple-muted">
                  DIETARY INTEGRITY
                </span>

                <h2
                  id="jain-heading"
                  className="font-playfair text-3xl sm:text-4xl lg:text-[2.65rem] font-normal text-purple-heading leading-[1.14] sm:leading-[1.15] tracking-tight"
                >
                  Dedicated Jain Kitchen &amp; Satvik Craft
                </h2>
              </div>

              <div className="flex flex-col gap-3.5 text-text-body text-[14.5px] sm:text-[15.5px] leading-[1.8] font-montserrat font-normal">
                <p>
                  Located near the Alkesh Modi Jain Temple in Karla, The Purple Mango
                  operates with an absolute commitment to pure vegetarian dining. We
                  maintain a completely separate, dedicated Jain kitchen equipped with
                  independent cookware and utensils.
                </p>
                <p>
                  Our culinary team prepares authentic satvik dishes without onion,
                  garlic, potatoes, or underground root vegetables upon request. In
                  addition to traditional Jain recipes, our chefs craft a diverse
                  multi-cuisine menu—from rich regional Indian curries to continental
                  comfort favorites—all served in an alcohol-free, smoke-free atmosphere.
                </p>
              </div>

              {/* 4 Concise Feature Points */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
                {JAIN_FEATURES.map((item) => (
                  <div
                    key={item.title}
                    className="p-3.5 rounded-xl bg-cream border border-border/80 flex flex-col gap-1"
                  >
                    <h3 className="font-playfair text-base font-normal text-purple-heading">
                      {item.title}
                    </h3>
                    <p className="font-montserrat text-xs text-text-body font-normal leading-[1.6]">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 4. DINING FAQS ─── */}
      <section
        id="faq"
        aria-labelledby="faq-heading"
        className="bg-[#FBF2ED] py-14 sm:py-18 lg:py-20 border-b border-border"
      >
        <div className="container-resort">
          <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-10 sm:mb-12">
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
              Clear answers regarding vegetarian policies, Jain meal preparation,
              outside food restrictions, and reservation guidelines.
            </p>
          </div>

          <DineFaqAccordion />
        </div>
      </section>

      {/* ─── 5. FINAL RESERVATION & ENQUIRY CTA ─── */}
      <section
        aria-label="Enquire about dining at The Purple Mango"
        className="bg-purple-deep text-white py-14 sm:py-18 lg:py-20 relative overflow-hidden"
      >
        <div className="container-resort text-center max-w-3xl mx-auto flex flex-col items-center gap-5">
          <span className="font-montserrat text-[12px] sm:text-[13px] font-normal tracking-[0.24em] uppercase text-gold-light">
            TABLE &amp; BANQUET RESERVATIONS
          </span>

          <h2 className="font-playfair text-3xl sm:text-4xl lg:text-[2.65rem] font-normal text-white leading-[1.14] sm:leading-[1.15] tracking-tight">
            Reserve Your Dining Experience
          </h2>

          <p className="font-montserrat text-white/80 text-xs sm:text-[14.5px] lg:text-[15.5px] leading-[1.75] sm:leading-[1.8] font-normal max-w-2xl px-2">
            Whether planning an intimate terrace dinner at sunset, a multi-generational
            family celebration, or authentic satvik meals during your Karla retreat,
            our team is here to assist you.
          </p>

          {/* Contact Details Pill Strip */}
          <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 sm:gap-6 pt-1 text-white/90 font-montserrat text-xs sm:text-[13.5px]">
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
              href="https://wa.me/919876543210?text=Hi,%20I%20would%20like%20to%20enquire%20about%20dining%20and%20table%20reservations%20at%20The%20Purple%20Mango%20Resort,%20Lonavala."
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
            <span className="text-white/70">The Mango Leaf · Karla, Lonavala</span>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center gap-3.5 sm:gap-4 w-full sm:w-auto">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center font-montserrat font-semibold text-xs sm:text-[13px] tracking-[0.12em] uppercase bg-gold hover:bg-gold-hover text-gold-dark px-8 py-3.5 rounded-xl shadow-btn hover:shadow-md transition-all duration-300 text-center select-none w-full sm:w-auto"
            >
              Send Dining Enquiry
            </Link>
            <Link
              href="/rooms"
              className="inline-flex items-center justify-center font-montserrat font-medium text-xs sm:text-[13px] tracking-[0.08em] uppercase border border-white/30 hover:border-white text-white px-7 py-3.5 rounded-xl hover:bg-white/10 transition-all duration-300 text-center select-none w-full sm:w-auto"
            >
              Explore Mountain Suites
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
