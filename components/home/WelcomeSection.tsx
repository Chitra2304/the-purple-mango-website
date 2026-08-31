import Image from 'next/image'
import Link from 'next/link'
import SectionLabel from '@/components/ui/SectionLabel'

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
          <div className="flex flex-col gap-6 order-2 lg:order-1">
            <SectionLabel withLine>Welcome</SectionLabel>

            <h2
              id="welcome-heading"
              className="font-playfair text-4xl lg:text-5xl font-semibold text-purple-heading leading-tight"
            >
              Where altitude meets
              <br />
              <em className="not-italic italic">an unhurried pace.</em>
            </h2>

            <div className="flex flex-col gap-4 text-text-muted text-base leading-relaxed font-montserrat max-w-lg">
              <p>
                Nestled in the lush, mist-covered embrace of the Western Ghats,
                The Purple Mango is an exclusive sanctuary designed for those
                who seek quiet luxury. Here, the air is crisp, the views are
                expansive, and the hospitality is tailored to provide a
                seamless, restorative retreat.
              </p>
              <p>
                We pride ourselves on offering a completely pure vegetarian and
                Jain-friendly environment, ensuring that every aspect of your
                stay aligns with a philosophy of mindful, refined living.
              </p>
            </div>

            <div className="pt-2">
              <Link
                href="/about"
                id="welcome-discover-link"
                className="inline-flex items-center gap-3 font-montserrat text-sm font-semibold text-purple-heading hover:text-gold transition-colors duration-200 group"
              >
                <span className="h-px w-10 bg-text-muted group-hover:bg-gold transition-colors duration-300 flex-shrink-0" aria-hidden="true" />
                Discover Our Story
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

          {/* ── Right: Image ── */}
          <div className="relative order-1 lg:order-2">
            {/* Decorative gold accent */}
            <div
              className="absolute -top-4 -right-4 w-3/4 h-3/4 rounded-3xl border-2 border-gold/20 pointer-events-none z-0"
              aria-hidden="true"
            />
            <div className="relative rounded-3xl overflow-hidden shadow-card-hover z-10 aspect-[4/5] lg:aspect-[4/5]">
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

            {/* Floating badge */}
            <div className="absolute bottom-6 left-6 z-20 bg-white/95 backdrop-blur-sm rounded-2xl px-5 py-4 shadow-card max-w-[220px]">
              <div className="flex items-center gap-2 mb-1.5">
                <span className="text-green-600 text-xs" aria-hidden="true">🌿</span>
                <span className="font-montserrat text-xs font-bold tracking-wider uppercase text-green-700">
                  100% Pure Vegetarian
                </span>
              </div>
              <p className="font-montserrat text-xs text-text-muted leading-relaxed">
                Jain-friendly menu. Every ingredient mindfully sourced.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
