'use client'

import { useState } from 'react'

interface FaqItem {
  question: string
  answer: string
  note?: string
}

const DINE_FAQS: FaqItem[] = [
  {
    question: 'Is all food served at The Purple Mango 100% pure vegetarian?',
    answer:
      'Yes. The Purple Mango operates as a strict 100% pure vegetarian resort. Non-vegetarian food, poultry, seafood, and eggs are strictly neither prepared nor served anywhere on the property premises.',
    note: 'Outside cooked non-vegetarian food is strictly prohibited across the entire resort grounds.',
  },
  {
    question: 'How are Jain-friendly and satvik meals prepared at the resort?',
    answer:
      'We maintain a completely separate, dedicated Jain kitchen and dedicated cookware. Our culinary team prepares authentic satvik meals without onion, garlic, or underground root vegetables upon request, ensuring complete adherence to Jain dietary principles without compromising on culinary richness.',
    note: 'Guests may notify our team before arrival or at the table to ensure personalized satvik preparation.',
  },
  {
    question: 'What dining venues and settings are available on the property?',
    answer:
      'Guests can dine at The Mango Leaf, our signature indoor restaurant offering panoramic valley views of the Western Ghats, or enjoy Candlelight Terrace Dining under the open sky with evening lanterns and mountain breezes. Prompt in-room dining is also available for guests wishing to dine privately in their room or suite.',
  },
  {
    question: 'What is the resort policy regarding alcohol and smoking in dining areas?',
    answer:
      'The Purple Mango is an alcohol-free, family-first retreat sanctuary. Consumption of alcohol is prohibited in all public, dining, and outdoor terrace areas. All indoor dining spaces and guest rooms are designated non-smoking zones.',
  },
  {
    question: 'Can you accommodate large family groups, reunions, and celebrations?',
    answer:
      'Yes. Our dining venues and open lawn spaces are well-suited for family gatherings, reunions, intimate anniversaries, and milestone celebrations. We offer tailored pure vegetarian and Jain menus for group dining.',
    note: 'For groups and celebrations, please contact our reservations team in advance for curated table setups.',
  },
  {
    question: 'Do non-resident or day visitors require advance reservations for dining?',
    answer:
      'While resident guests enjoy seamless dining access throughout their stay, non-resident visitors and outside dining parties are encouraged to contact our front desk in advance via phone or WhatsApp to verify table availability and allow our kitchen team to prepare appropriately.',
  },
]

export default function DineFaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="flex flex-col gap-3.5 max-w-3xl mx-auto">
      {DINE_FAQS.map((faq, idx) => {
        const isOpen = openIndex === idx
        return (
          <div
            key={faq.question}
            className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
              isOpen
                ? 'bg-white border-purple-muted/40 shadow-sm'
                : 'bg-white/80 border-border hover:bg-white'
            }`}
          >
            <button
              type="button"
              onClick={() => toggleFaq(idx)}
              aria-expanded={isOpen}
              aria-controls={`dine-faq-answer-${idx}`}
              className="w-full flex items-center justify-between gap-3 sm:gap-4 p-4 sm:p-5 lg:p-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            >
              <h3 className="font-playfair text-base sm:text-lg lg:text-[1.15rem] font-normal text-purple-heading leading-snug">
                {faq.question}
              </h3>
              <span
                className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-border flex items-center justify-center flex-shrink-0 text-purple-heading transition-transform duration-300 ${
                  isOpen ? 'rotate-180 bg-gold/15 border-gold text-gold-dark' : ''
                }`}
                aria-hidden="true"
              >
                <svg
                  className="w-3.5 h-3.5 sm:w-4 sm:h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </span>
            </button>

            {isOpen && (
              <div
                id={`dine-faq-answer-${idx}`}
                className="px-4 sm:px-5 lg:px-6 pb-5 sm:pb-6 pt-1 text-text-body font-montserrat text-xs sm:text-[13.5px] leading-[1.75] border-t border-border-light/60"
              >
                <p>{faq.answer}</p>
                {faq.note && (
                  <p className="mt-2 text-purple-muted font-medium text-[11.5px] sm:text-xs">
                    * {faq.note}
                  </p>
                )}
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
