import type { Metadata } from 'next'
import ActivitiesSection from '@/components/home/ActivitiesSection'

export const metadata: Metadata = {
  title: 'Activities & Experiences | The Purple Mango Resort Lonavala',
  description:
    'Discover signature activities and upcoming experiences at The Purple Mango Resort in Karla, Lonavala: Infinity pool, mountain trails, weddings, open terrace dining, wellness pavilion, and recreation.',
  alternates: {
    canonical: '/activities',
  },
}

export default function ActivitiesPage() {
  return (
    <>
      {/* Page Hero Header */}
      <div className="bg-purple-deep text-white py-16 lg:py-20 text-center">
        <div className="container-resort">
          <div className="flex flex-col items-center gap-3 max-w-2xl mx-auto">
            <span className="font-montserrat text-[12px] sm:text-[13px] font-normal tracking-[0.24em] uppercase text-gold-light">
              EXPERIENCES &amp; LEISURE
            </span>
            <h1 className="font-playfair text-3xl sm:text-4xl lg:text-[2.65rem] font-normal text-white leading-[1.14] sm:leading-[1.15] tracking-tight">
              Life in the Western Ghats
            </h1>
            <p className="font-montserrat text-white/80 text-[14.5px] sm:text-[15.5px] leading-[1.8] font-normal mt-1">
              From open-air cliffside dips and mountain trail walks to memorable
              family celebrations and bespoke upcoming wellness spaces.
            </p>
          </div>
        </div>
      </div>

      {/* Main Activities Section */}
      <ActivitiesSection />
    </>
  )
}
