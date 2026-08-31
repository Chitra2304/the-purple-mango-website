import Link from 'next/link'
import ContactForm from './ContactForm'

const CONTACT = {
  phone: '+91 98765 43210',
  whatsapp: '+91 98765 43210',
  email: 'info@thepurplemango.in',
  address: '123 Malino Estate, Hillside Road, Highland Retreat, 583091',
}

const SOCIAL = [
  {
    label: 'Instagram',
    href: 'https://instagram.com/thepurplemangoresort',
    icon: (
      <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    label: 'Facebook',
    href: 'https://facebook.com/thepurplemangoresort',
    icon: (
      <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    label: 'YouTube',
    href: 'https://youtube.com/@thepurplemango',
    icon: (
      <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
]

export default function Footer() {
  return (
    <footer
      role="contentinfo"
      className="bg-purple-deep text-white"
      style={{ backgroundColor: '#3D2050' }}
    >
      {/* Main footer grid */}
      <div className="container-resort py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-10">
          {/* ── Left: Contact Info ── */}
          <div className="flex flex-col gap-7">
            {/* Logo */}
            <div>
              <div className="flex items-center gap-2.5 mb-3">
                <svg width="28" height="28" viewBox="0 0 32 32" fill="none" aria-hidden="true">
                  <path
                    d="M16 4C10 4 4 10 4 16C4 22 8 27 16 28C14 22 15 16 20 12C24 9 29 9 29 9C29 9 26 6 22 5L20 8C19 6 17.5 4 16 4Z"
                    fill="#C9A028"
                  />
                  <path
                    d="M20 12C15 16 14 22 16 28C20 26 24 22 26 18C28 14 27 10 24 9C23 10.5 21.5 11.5 20 12Z"
                    fill="white"
                    opacity="0.4"
                  />
                </svg>
                <span className="font-playfair text-xl font-semibold text-white">The Purple Mango</span>
              </div>
              <p className="font-montserrat text-sm text-white/60 leading-relaxed max-w-xs">
                A luxury mountain retreat in the Western Ghats at Karla, Lonavala. Pure vegetarian. Unhurried pace.
              </p>
            </div>

            {/* Contact details */}
            <address className="not-italic flex flex-col gap-4">
              <p className="font-montserrat text-xs font-semibold tracking-[0.18em] uppercase text-gold mb-1">
                Get In Touch
              </p>
              <ContactItem
                icon={
                  <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                }
                href={`tel:${CONTACT.phone.replace(/\s/g, '')}`}
                label={CONTACT.phone}
              />
              <ContactItem
                icon={
                  <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.554 4.123 1.523 5.855L.057 23.09a.75.75 0 00.93.875l5.174-1.61A11.942 11.942 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.721 9.721 0 01-4.975-1.364l-.356-.214-3.695 1.15 1.1-3.613-.233-.37A9.712 9.712 0 012.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z" />
                  </svg>
                }
                href={`https://wa.me/${CONTACT.whatsapp.replace(/[^0-9]/g, '')}`}
                label="WhatsApp Us"
                external
              />
              <ContactItem
                icon={
                  <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                }
                href={`mailto:${CONTACT.email}`}
                label={CONTACT.email}
              />
              <ContactItem
                icon={
                  <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                }
                href="https://maps.google.com/?q=The+Purple+Mango+Karla+Lonavala"
                label={CONTACT.address}
                external
              />
            </address>

            {/* Social icons */}
            <div className="flex items-center gap-4">
              {SOCIAL.map(({ label, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Follow us on ${label}`}
                  className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-gold hover:bg-gold/10 transition-all duration-300"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* ── Center: Google Map ── */}
          <div className="flex flex-col gap-4">
            <p className="font-montserrat text-xs font-semibold tracking-[0.18em] uppercase text-gold">
              Find Us
            </p>
            <div className="rounded-2xl overflow-hidden border border-white/10" style={{ height: '280px' }}>
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

          {/* ── Right: Reservation Enquiry Form ── */}
          <div className="flex flex-col gap-4">
            <p className="font-montserrat text-xs font-semibold tracking-[0.18em] uppercase text-gold">
              Reservation Enquiry
            </p>
            <ContactForm />
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container-resort py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-montserrat text-xs text-white/40">
            © {new Date().getFullYear()} The Purple Mango Resort. All rights reserved.
          </p>
          <nav aria-label="Footer legal links" className="flex items-center gap-5">
            {[
              { label: 'Privacy Policy', href: '/privacy' },
              { label: 'Terms & Conditions', href: '/terms' },
              { label: 'Contact Us', href: '/contact' },
            ].map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className="font-montserrat text-xs text-white/40 hover:text-white/80 transition-colors duration-200"
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  )
}

function ContactItem({
  icon,
  href,
  label,
  external = false,
}: {
  icon: React.ReactNode
  href: string
  label: string
  external?: boolean
}) {
  return (
    <a
      href={href}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className="flex items-start gap-3 font-montserrat text-sm text-white/70 hover:text-white transition-colors duration-200 group"
    >
      <span className="mt-0.5 text-gold flex-shrink-0 group-hover:scale-110 transition-transform duration-200">
        {icon}
      </span>
      <span className="leading-relaxed">{label}</span>
    </a>
  )
}
