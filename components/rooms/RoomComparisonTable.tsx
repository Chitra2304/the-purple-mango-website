import Link from 'next/link'

interface ComparisonRow {
  attribute: string
  studio: string
  deluxe: string
  superDeluxe: string
  highlight?: boolean
}

const COMPARISON_DATA: ComparisonRow[] = [
  {
    attribute: 'Room Space & Layout',
    studio: 'Compact master bedroom layout with cozy sitting corner',
    deluxe: 'Generous open floor space with expansive living zone',
    superDeluxe: 'Premier suite layout with distinct separate living area',
  },
  {
    attribute: 'Air Conditioning (AC)',
    studio: 'Climate Controlled AC',
    deluxe: 'Powerful Climate Controlled AC',
    superDeluxe: 'Individual Multi-zone Climate AC',
  },
  {
    attribute: 'Seating & Lounge Area',
    studio: 'Cozy two-seat mountain nook',
    deluxe: 'Spacious group/family seating lounge',
    superDeluxe: 'Separate furnished living room & plush lounge',
  },
  {
    attribute: 'Bathtub in Washroom',
    studio: 'Walk-in shower with 24/7 hot & cold water (No Bathtub)',
    deluxe: 'Spacious walk-in shower with 24/7 hot & cold water (No Bathtub)',
    superDeluxe: 'Luxury deep-soaking bathtub + walk-in shower',
    highlight: true,
  },
  {
    attribute: 'Entertainment Setup',
    studio: 'Digital Flat-screen LED TV',
    deluxe: 'Large Wall-mounted LED TV',
    superDeluxe: 'Largest Premium Entertainment Setup on property',
  },
  {
    attribute: 'Suitability / Best For',
    studio: 'Couples, solo travelers & short weekend retreats',
    deluxe: 'Families with children & small traveling groups',
    superDeluxe: 'Extended luxury escapes, anniversaries & VIP travelers',
  },
  {
    attribute: 'Tariff Structure',
    studio: 'Price on Request',
    deluxe: 'Price on Request',
    superDeluxe: 'Price on Request',
  },
]

export default function RoomComparisonTable() {
  return (
    <div className="w-full">
      {/* ── Large Desktop Comparison Table (lg: 1024px+) ── */}
      <div className="hidden lg:block overflow-x-auto rounded-[1.5rem] border border-border shadow-card bg-white">
        <table className="w-full min-w-[880px] text-left border-collapse">
          <thead>
            <tr className="bg-purple-deep text-white border-b border-white/10">
              <th className="p-5 lg:p-6 font-montserrat text-xs font-semibold uppercase tracking-[0.16em] text-gold-light w-1/4">
                Attribute
              </th>
              <th className="p-5 lg:p-6 font-playfair text-lg lg:text-xl font-normal w-1/4">
                The Studio Room
              </th>
              <th className="p-5 lg:p-6 font-playfair text-lg lg:text-xl font-normal w-1/4">
                Deluxe AC Room
              </th>
              <th className="p-5 lg:p-6 font-playfair text-lg lg:text-xl font-normal w-1/4">
                Super Deluxe AC Room
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {COMPARISON_DATA.map((row, index) => (
              <tr
                key={row.attribute}
                className={index % 2 === 0 ? 'bg-white' : 'bg-[#FAF7F2]/60'}
              >
                <td className="p-5 lg:p-6 font-montserrat text-xs sm:text-[13px] font-semibold text-purple-heading uppercase tracking-wider">
                  {row.attribute}
                </td>
                <td className="p-5 lg:p-6 font-montserrat text-xs sm:text-[13.5px] text-text-body font-normal leading-relaxed">
                  {row.studio}
                </td>
                <td className="p-5 lg:p-6 font-montserrat text-xs sm:text-[13.5px] text-text-body font-normal leading-relaxed">
                  {row.deluxe}
                </td>
                <td
                  className={`p-5 lg:p-6 font-montserrat text-xs sm:text-[13.5px] leading-relaxed ${
                    row.highlight
                      ? 'text-purple-heading font-medium bg-gold/10'
                      : 'text-text-body font-normal'
                  }`}
                >
                  {row.superDeluxe}
                </td>
              </tr>
            ))}
            {/* CTA Row */}
            <tr className="bg-white">
              <td className="p-5 lg:p-6 font-montserrat text-xs uppercase font-semibold text-purple-heading">
                Action
              </td>
              <td className="p-5 lg:p-6">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center font-montserrat font-medium text-xs tracking-wider uppercase text-purple-heading border border-purple-heading/70 hover:bg-purple-heading hover:text-white px-4 py-2.5 rounded-lg transition-colors duration-200"
                >
                  Enquire Studio
                </Link>
              </td>
              <td className="p-5 lg:p-6">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center font-montserrat font-medium text-xs tracking-wider uppercase text-purple-heading border border-purple-heading/70 hover:bg-purple-heading hover:text-white px-4 py-2.5 rounded-lg transition-colors duration-200"
                >
                  Enquire Deluxe
                </Link>
              </td>
              <td className="p-5 lg:p-6">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center font-montserrat font-semibold text-xs tracking-wider uppercase bg-gold hover:bg-gold-hover text-gold-dark px-4 py-2.5 rounded-lg shadow-btn transition-colors duration-200"
                >
                  Enquire Super Deluxe
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* ── Mobile & Tablet Comparison Cards (< 1024px) ── */}
      <div className="lg:hidden grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
        {[
          {
            name: 'The Studio Room',
            subtitle: 'Best for Couples & Short Stays',
            badge: 'Category 01',
            space: 'Compact double bedroom with cozy sitting corner',
            ac: 'Climate Controlled AC',
            seating: 'Cozy two-seat mountain nook',
            bathtub: 'Walk-in shower (No Bathtub)',
            entertainment: 'Digital Flat-screen LED TV',
          },
          {
            name: 'Deluxe AC Room',
            subtitle: 'Best for Families & Small Groups',
            badge: 'Category 02',
            space: 'Generous open floor space with living zone',
            ac: 'Powerful Climate Controlled AC',
            seating: 'Spacious group/family seating lounge',
            bathtub: 'Spacious walk-in shower (No Bathtub)',
            entertainment: 'Large Wall-mounted LED TV',
          },
          {
            name: 'Super Deluxe AC Room',
            subtitle: 'Best for Celebrations & VIP Luxury',
            badge: 'Category 03',
            space: 'Premier suite layout with separate living area',
            ac: 'Individual Multi-zone Climate AC',
            seating: 'Separate furnished living room & plush lounge',
            bathtub: 'Deep-soaking bathtub + walk-in shower',
            entertainment: 'Largest Premium Entertainment Setup',
          },
        ].map((item) => (
          <div
            key={item.name}
            className="bg-white rounded-2xl p-5 sm:p-6 border border-border shadow-sm flex flex-col justify-between gap-4"
          >
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between gap-2">
                <span className="font-montserrat text-[11px] font-semibold uppercase tracking-wider text-purple-muted">
                  {item.badge}
                </span>
                <span className="font-montserrat text-[11px] sm:text-xs font-semibold uppercase text-gold-dark bg-gold/15 px-2.5 py-0.5 rounded-full border border-gold/30">
                  Price on Request
                </span>
              </div>
              <div>
                <h3 className="font-playfair text-xl sm:text-2xl font-normal text-purple-heading leading-tight">
                  {item.name}
                </h3>
                <p className="font-montserrat text-xs text-text-muted mt-0.5">
                  {item.subtitle}
                </p>
              </div>

              <div className="border-t border-border pt-3.5 flex flex-col gap-2.5 font-montserrat text-xs text-text-body">
                <div>
                  <span className="font-semibold text-purple-heading block mb-0.5">
                    Layout:
                  </span>
                  <span className="leading-relaxed">{item.space}</span>
                </div>
                <div>
                  <span className="font-semibold text-purple-heading block mb-0.5">
                    Air Conditioning:
                  </span>
                  <span>{item.ac}</span>
                </div>
                <div>
                  <span className="font-semibold text-purple-heading block mb-0.5">
                    Seating:
                  </span>
                  <span className="leading-relaxed">{item.seating}</span>
                </div>
                <div>
                  <span className="font-semibold text-purple-heading block mb-0.5">
                    Bathtub:
                  </span>
                  <span className="leading-relaxed">{item.bathtub}</span>
                </div>
                <div>
                  <span className="font-semibold text-purple-heading block mb-0.5">
                    Entertainment:
                  </span>
                  <span>{item.entertainment}</span>
                </div>
              </div>
            </div>

            <Link
              href="/contact"
              className="mt-2 text-center font-montserrat font-semibold text-xs uppercase tracking-wider bg-gold hover:bg-gold-hover text-gold-dark py-3 rounded-xl shadow-btn transition-colors select-none"
            >
              Enquire This Room
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

