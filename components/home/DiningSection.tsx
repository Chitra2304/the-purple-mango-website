import Image from 'next/image'
import Link from 'next/link'

const DINING_HIGHLIGHTS = [
  {
    title: 'The Mango Leaf',
    description:
      'Our signature multi-cuisine restaurant featuring panoramic valley views.',
  },
  {
    title: 'In-Room Dining',
    description:
      'Discreet, elegant service brought directly to your private sanctuary.',
  },
]

export default function DiningSection() {
  return (
    <section
      id="dining"
      aria-labelledby="dining-heading"
      className="bg-cream section-padding"
    >
      <div className="container-resort">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* ── Left: Food Image ── */}
          <div className="relative">
            <div className="relative rounded-[2rem] overflow-hidden shadow-card-hover z-10 aspect-[4/5]">
              <Image
                src="/images/dining/dining-food.jpg"
                alt="Traditional Indian vegetarian dal and flatbread meal at The Purple Mango, artfully presented on stone plate"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
                loading="lazy"
                quality={85}
              />

              {/* "100% Pure Vegetarian" overlay card */}
              <div className="absolute bottom-6 left-6 right-6 sm:right-auto z-20 bg-[#FAF7F2]/95 backdrop-blur-md rounded-2xl p-5 shadow-card max-w-[290px] border border-white/40">
                <h3 className="font-montserrat text-sm font-semibold text-purple-heading mb-2">
                  100% Pure Vegetarian
                </h3>
                <p className="font-montserrat text-xs text-text-body font-normal leading-[1.65]">
                  A separate, dedicated Jain kitchen ensures absolute adherence to dietary principles without compromising on culinary artistry.
                </p>
              </div>
            </div>
          </div>

          {/* ── Right: Text ── */}
          <div className="flex flex-col gap-5 sm:gap-6">
            <div className="flex flex-col gap-2.5 sm:gap-3">
              <span className="font-montserrat text-[12px] sm:text-[13px] font-normal tracking-[0.24em] uppercase text-purple-muted">
                DINE - PURE VEG &amp; JAIN RESTAURANT
              </span>

              <h2
                id="dining-heading"
                className="font-playfair text-3xl sm:text-4xl lg:text-[2.65rem] font-normal text-purple-heading leading-[1.14] sm:leading-[1.15] tracking-tight"
              >
                Elevated Dining,
                <br />
                Rooted in Tradition.
              </h2>
            </div>

            <div className="flex flex-col gap-4 text-text-body text-[14.5px] sm:text-[15.5px] leading-[1.8] font-montserrat font-normal max-w-xl">
              <p>
                Dining at The Purple Mango is an experience carefully curated
                to celebrate the richness of vegetarian cuisine. Our chefs
                transform fresh, locally sourced ingredients into masterpieces
                of flavor and presentation.
              </p>
              <p>
                We maintain a strict family-first atmosphere, offering a serene
                dining environment free from alcohol, focusing instead on the
                purity of the food and the quality of connection around the table.
              </p>
            </div>

            {/* Dining highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 pt-2">
              {DINING_HIGHLIGHTS.map(({ title, description }) => (
                <div key={title} className="flex flex-col gap-2.5">
                  <div className="w-12 h-[2px] bg-gold" aria-hidden="true" />
                  <h3 className="font-playfair text-lg sm:text-xl font-normal text-purple-heading">
                    {title}
                  </h3>
                  <p className="font-montserrat text-[13px] sm:text-[13.5px] text-text-body font-normal leading-[1.65]">
                    {description}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-2 sm:pt-3">
              <Link
                href="/dine"
                id="dining-explore-menu-btn"
                className="inline-flex items-center justify-center font-montserrat font-medium sm:font-semibold text-[13px] sm:text-[14px] tracking-normal border border-purple-heading/80 hover:border-purple-heading text-purple-heading px-8 py-3.5 rounded-xl hover:bg-purple-heading hover:text-white transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-heading self-start select-none"
              >
                Explore The Menu
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
