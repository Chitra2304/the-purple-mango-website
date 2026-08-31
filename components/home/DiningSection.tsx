import Image from 'next/image'
import Link from 'next/link'
import SectionLabel from '@/components/ui/SectionLabel'

const DINING_HIGHLIGHTS = [
  {
    title: 'The Mango Leaf',
    description:
      'Our signature multi-cuisine restaurant offers carefully crafted vegetarian and Jain delicacies served with valley views.',
  },
  {
    title: 'In-Room Dining',
    description:
      'Discreet, elegant service to bring curated dishes directly to your private sanctum.',
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          {/* ── Left: Food Image ── */}
          <div className="relative">
            {/* Decorative blob */}
            <div
              className="absolute -bottom-6 -left-6 w-48 h-48 rounded-full bg-gold/10 pointer-events-none z-0"
              aria-hidden="true"
            />

            <div className="relative rounded-3xl overflow-hidden shadow-card-hover z-10 aspect-[4/5]">
              <Image
                src="/images/dining/dining-food.jpg"
                alt="Traditional Indian vegetarian dal baati meal at The Mango Leaf restaurant, artfully presented on stone plate"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
                loading="lazy"
                quality={85}
              />
            </div>

            {/* "100% Pure Vegetarian" overlay badge */}
            <div className="absolute bottom-6 left-6 z-20 bg-white/95 backdrop-blur-sm rounded-2xl px-5 py-4 shadow-card max-w-[240px]">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0" aria-hidden="true">
                  <span className="text-green-700 text-[10px]">✓</span>
                </span>
                <span className="font-montserrat text-xs font-bold tracking-wider uppercase text-green-700">
                  100% Pure Vegetarian
                </span>
              </div>
              <p className="font-montserrat text-xs text-text-muted leading-relaxed">
                A mindful approach to kitchen ensures every dish adheres to the strictest culinary ethics.
              </p>
            </div>
          </div>

          {/* ── Right: Text ── */}
          <div className="flex flex-col gap-6">
            <SectionLabel withLine>Culinary Craft</SectionLabel>

            <h2
              id="dining-heading"
              className="font-playfair text-4xl lg:text-5xl font-semibold text-purple-heading leading-tight"
            >
              Elevated Dining,{' '}
              <em className="italic">Rooted in Tradition.</em>
            </h2>

            <div className="flex flex-col gap-4 font-montserrat text-base text-text-muted leading-relaxed max-w-lg">
              <p>
                Dining at The Purple Mango is an experience carefully curated
                to celebrate the richness of vegetarian cuisine. Our chefs
                honour fresh, locally sourced ingredients and master pieces of
                flavour and presentation.
              </p>
              <p>
                We maintain a strict family-first atmosphere, offering a serene
                dining environment free from a noisy backdrop, focusing instead
                on the finest quality of nourishment at the table.
              </p>
            </div>

            {/* Dining highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              {DINING_HIGHLIGHTS.map(({ title, description }) => (
                <div key={title} className="flex flex-col gap-2">
                  <div className="w-8 h-0.5 bg-gold" aria-hidden="true" />
                  <h3 className="font-playfair text-lg font-semibold text-purple-heading">
                    {title}
                  </h3>
                  <p className="font-montserrat text-sm text-text-muted leading-relaxed">
                    {description}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <Link
                href="/dine"
                id="dining-explore-menu-btn"
                className="inline-flex items-center justify-center font-montserrat font-semibold text-sm tracking-wider border-2 border-purple-heading text-purple-heading px-7 py-3.5 rounded-full hover:bg-purple-heading hover:text-white transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-heading focus-visible:ring-offset-2"
              >
                Explore the Menu
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
