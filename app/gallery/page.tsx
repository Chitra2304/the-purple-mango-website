import type { Metadata } from 'next'
import GallerySection from '@/components/home/GallerySection'

export const metadata: Metadata = {
  title: 'Visual Gallery | The Purple Mango Resort Lonavala',
  description:
    'Explore the visual story of The Purple Mango resort in Karla, Lonavala. Browse our mountain suites, infinity pool, terrace dining, and scenic surroundings.',
  alternates: {
    canonical: '/gallery',
  },
}

export default function GalleryPage() {
  return (
    <>
      {/* Page Hero Header */}
      <div className="bg-purple-deep text-white py-16 lg:py-20 text-center">
        <div className="container-resort">
          <div className="flex flex-col items-center gap-3 max-w-2xl mx-auto">
            <span className="font-montserrat text-[12px] sm:text-[13px] font-normal tracking-[0.24em] uppercase text-gold-light">
              MOMENTS &amp; VIEWS
            </span>
            <h1 className="font-playfair text-3xl sm:text-4xl lg:text-[2.65rem] font-normal text-white leading-[1.14] sm:leading-[1.15] tracking-tight">
              A Glimpse of Serenity
            </h1>
            <p className="font-montserrat text-white/80 text-[14.5px] sm:text-[15.5px] leading-[1.8] font-normal mt-1">
              Explore the architectural calm, mist-draped hill views, pure
              vegetarian dining spaces, and thoughtful details that await your
              stay.
            </p>
          </div>
        </div>
      </div>

      {/* Gallery Main Section */}
      <GallerySection />
    </>
  )
}
