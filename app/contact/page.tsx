import type { Metadata } from 'next'
import ContactForm from '@/components/layout/ContactForm'

export const metadata: Metadata = {
  title: 'Contact & Reservations',
  description:
    'Book your stay or send a reservation enquiry to The Purple Mango resort in Lonavala. Our team will respond within 24 hours.',
  alternates: {
    canonical: '/contact',
  },
}

const CONTACT_DETAILS = [
  {
    icon: '📞',
    label: 'Phone',
    value: '+91 98765 43210',
    href: 'tel:+919876543210',
  },
  {
    icon: '💬',
    label: 'WhatsApp',
    value: 'Chat with us',
    href: 'https://wa.me/919876543210',
  },
  {
    icon: '✉️',
    label: 'Email',
    value: 'info@thepurplemango.in',
    href: 'mailto:info@thepurplemango.in',
  },
  {
    icon: '📍',
    label: 'Address',
    value: '123 Malino Estate, Hillside Road, Highland Retreat, 583091',
    href: 'https://maps.google.com/?q=The+Purple+Mango+Karla+Lonavala',
  },
]

export default function ContactPage() {
  return (
    <>
      {/* Page hero */}
      <div className="bg-purple-deep text-white py-20 lg:py-24 text-center">
        <div className="container-resort">
          <div className="flex flex-col items-center gap-3.5 sm:gap-4 max-w-2xl mx-auto">
            <span className="font-montserrat text-[12px] sm:text-[13px] font-normal tracking-[0.24em] uppercase text-gold-light">
              GET IN TOUCH
            </span>
            <h1 className="font-playfair text-3xl sm:text-4xl lg:text-[2.65rem] font-normal text-white leading-[1.14] sm:leading-[1.15] tracking-tight">
              Reserve Your Retreat
            </h1>
            <p className="font-montserrat text-white/80 text-[14.5px] sm:text-[15.5px] leading-[1.8] font-normal mt-2">
              We&apos;d love to host you. Fill in the form below and our team will
              get back to you within 24 hours with personalised details for your
              stay.
            </p>
          </div>
        </div>
      </div>

      {/* Main content */}
      <section className="bg-cream section-padding" aria-labelledby="contact-form-heading">
        <div className="container-resort">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* ── Left: Contact Info + Map ── */}
            <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-3.5 sm:gap-4">
                <span className="font-montserrat text-[12px] sm:text-[13px] font-normal tracking-[0.24em] uppercase text-purple-muted">
                  CONTACT DETAILS
                </span>
                <div className="flex flex-col gap-4 mt-2">
                  {CONTACT_DETAILS.map(({ icon, label, value, href }) => (
                    <a
                      key={label}
                      href={href}
                      target={href.startsWith('http') ? '_blank' : undefined}
                      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="flex items-start gap-4 p-3 rounded-2xl hover:bg-white/60 transition-colors duration-200 group"
                    >
                      <div className="w-11 h-11 rounded-2xl bg-gold/15 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/25 transition-colors duration-200">
                        <span className="text-lg" role="img" aria-label={label}>{icon}</span>
                      </div>
                      <div>
                        <p className="font-montserrat text-[11px] sm:text-xs font-semibold tracking-[0.14em] uppercase text-purple-muted mb-0.5">
                          {label}
                        </p>
                        <p className="font-montserrat text-sm sm:text-[15px] text-text-dark font-normal group-hover:text-gold transition-colors duration-200">
                          {value}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Map */}
              <div className="flex flex-col gap-3.5 sm:gap-4">
                <span className="font-montserrat text-[12px] sm:text-[13px] font-normal tracking-[0.24em] uppercase text-purple-muted">
                  FIND US
                </span>
                <div className="rounded-[1.75rem] overflow-hidden shadow-card border border-border mt-1" style={{ height: '320px' }}>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3778.4!2d73.4758!3d18.7582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be80ab0a7abc567%3A0x1234567890abcdef!2sThe%20Purple%20Mango!5e0!3m2!1sen!2sin!4v1694000000000!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="The Purple Mango location on Google Maps"
                  />
                </div>
              </div>
            </div>

            {/* ── Right: Enquiry Form ── */}
            <div className="bg-purple-deep rounded-[2rem] p-8 lg:p-10 shadow-card-hover text-white">
              <div className="flex flex-col gap-2.5 sm:gap-3 mb-6">
                <span className="font-montserrat text-[12px] sm:text-[13px] font-normal tracking-[0.24em] uppercase text-gold-light">
                  RESERVATION ENQUIRY
                </span>
                <h2
                  id="contact-form-heading"
                  className="font-playfair text-2xl sm:text-3xl font-normal text-white leading-snug"
                >
                  Tell us about your perfect stay
                </h2>
              </div>
              <ContactForm compact />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
