import type { Metadata } from 'next'
import HeroCarousel from '@/components/home/HeroCarousel'
import WelcomeSection from '@/components/home/WelcomeSection'
import RoomsSection from '@/components/home/RoomsSection'
import DiningSection from '@/components/home/DiningSection'

export const metadata: Metadata = {
  title: 'The Purple Mango | Luxury Resort in Lonavala, Western Ghats',
  description:
    'Experience a luxury mountain retreat at The Purple Mango resort in the Western Ghats at Karla, Lonavala. 100% pure vegetarian. Breathtaking views, elevated dining and thoughtful hospitality.',
  alternates: {
    canonical: '/',
  },
}

export default function HomePage() {
  return (
    <>
      <HeroCarousel />
      <WelcomeSection />
      <RoomsSection />
      <DiningSection />
    </>
  )
}
