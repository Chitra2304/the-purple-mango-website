import Image from 'next/image'
import Link from 'next/link'

export default function WelcomeSection() {
  return (
    <section
      id="welcome"
      aria-labelledby="welcome-heading"
      className="bg-cream section-padding"
    >
      <div className="container-resort">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* ── Left: Text ── */}
          <div className="flex flex-col gap-5 sm:gap-6 order-2 lg:order-1">
            <div className="flex flex-col gap-3.5 sm:gap-4">
              <span className="font-montserrat text-[12px] sm:text-[13px] font-normal tracking-[0.24em] uppercase text-purple-muted">
                WELCOME
              </span>

              <h2
                id="welcome-heading"
                className="font-playfair text-3xl sm:text-4xl lg:text-[2.65rem] font-normal text-purple-heading leading-[1.14] sm:leading-[1.15] tracking-tight"
              >
                Where altitude meets
                <br />
                an unhurried pace.
              </h2>
            </div>

            <div className="flex flex-col gap-4 text-text-body text-[14.5px] sm:text-[15.5px] leading-[1.8] font-montserrat font-normal max-w-xl">
              <p>
                The Purple Mango sits near the Alkesh Modi Jain Temple in Karla, a
                short drive from central Lonavala. It&apos;s a 100% vegetarian
                property, no non-veg, no alcohol, no smoking ; designed for
                families, couples and groups who want a mountain break without
                leaving their values at the door.
              </p>
              <p>
                Jain-friendly meals are prepared with care alongside the regular
                vegetarian menu, and every space on the property, from the rooms
                to the banquet lawn, is built for that same easy, family-first pace.
              </p>
            </div>

            <div>
              <Link
                href="/about"
                id="welcome-discover-link"
                className="inline-flex items-center gap-3.5 font-montserrat text-sm sm:text-[15px] font-normal text-purple-heading hover:text-gold transition-colors duration-200 group"
              >
                <span className="h-px w-12 sm:w-14 bg-purple-muted/40 group-hover:bg-gold transition-colors duration-300 flex-shrink-0" aria-hidden="true" />
                <span>Discover Our Story</span>
                <svg
                  className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-purple-heading group-hover:text-gold transition-all duration-200 group-hover:translate-x-1 flex-shrink-0 -ml-1.5"
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

          {/* ── Right: Image ── */}
          <div className="relative order-1 lg:order-2">
            <div className="relative rounded-[2rem] overflow-hidden shadow-card-hover z-10 aspect-[4/5] lg:aspect-[4/5]">
              <Image
                src="/images/welcome/welcome-terrace.jpg"
                alt="The bougainvillea-covered stone terrace at The Purple Mango resort with panoramic Western Ghats mountain views"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
                loading="lazy"
                quality={85}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
