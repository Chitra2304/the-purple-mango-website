'use client'

import { useState } from 'react'

interface FaqItem {
  question: string
  answer: string
  note?: string
}

const FAQS: FaqItem[] = [
  {
    question: 'What are the check-in and check-out timings?',
    answer:
      'Standard resort check-in is at 1:00 PM and check-out is at 11:00 AM. Early check-in or extended check-out is strictly subject to room availability on the date of travel and requires advance confirmation from our reservations team.',
    note: 'Please share your estimated arrival time during booking to facilitate a seamless check-in experience.',
  },
  {
    question: 'What dining options and cuisines are available at the resort?',
    answer:
      'The Purple Mango operates as a 100% pure vegetarian resort. We have a dedicated, pure Jain kitchen preparing wholesome satvik meals without onion, garlic, or root vegetables upon request. In addition to our restaurant, prompt in-room dining service is available.',
    note: 'Non-vegetarian food is strictly neither cooked nor served on property premises.',
  },
  {
    question: 'What is the policy regarding outside food, alcohol, and smoking?',
    answer:
      'To honor our sanctuary’s pure vegetarian sanctity, spiritual retreat ethos, and family atmosphere, outside cooked non-vegetarian food is strictly prohibited. Consumption of alcohol is prohibited in public and outdoor guest areas. All indoor guest rooms are designated non-smoking zones.',
  },
  {
    question: 'Is parking available on property for guest vehicles?',
    answer:
      'Yes. Complimentary, secure open-air on-site parking is available for all registered guests, accommodating private cars, SUVs, and group travelers.',
  },
  {
    question: 'What is the cancellation and refund policy?',
    answer:
      'Cancellation and refund terms depend on the booking season (regular weekday, weekend, or holiday peak), group size, and advance notice given.',
    note: 'Kindly confirm the exact cancellation terms applicable to your selected travel dates directly with our reservations team at the time of reservation.',
  },
  {
    question: 'What is the policy for extra guests and traveling with children?',
    answer:
      'Children of all ages are warmly welcomed at The Purple Mango. Extra bedding or rollaway mattresses can be arranged depending on the selected room category and maximum safe room occupancy.',
    note: 'Please specify the exact number of adults and children when enquiring so we can recommend the ideal room configuration and advise on applicable extra-occupant charges.',
  },
]

export default function RoomsFaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="flex flex-col gap-3.5 max-w-3xl mx-auto">
      {FAQS.map((faq, idx) => {
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
              aria-controls={`faq-answer-${idx}`}
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
                id={`faq-answer-${idx}`}
                className="px-4 pb-4 sm:px-5 sm:pb-5 lg:px-6 lg:pb-6 pt-0 border-t border-border-light text-text-body font-montserrat text-xs sm:text-[13.5px] lg:text-[14px] leading-[1.8] flex flex-col gap-2.5 animate-fade-in"
              >
                <p className="mt-2.5 sm:mt-3">{faq.answer}</p>
                {faq.note && (
                  <p className="text-xs bg-[#FAF7F2] text-purple-heading/85 p-3 rounded-xl border border-border/70 font-medium">
                    ℹ️ Note: {faq.note}
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
