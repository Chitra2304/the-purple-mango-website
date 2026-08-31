'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NAV_LINKS = [
  { label: 'Rooms', href: '/rooms' },
  { label: 'Dine', href: '/dine' },
  { label: 'Activities', href: '/activities' },
  { label: 'Weddings & Corporate', href: '/weddings' },
  { label: 'About', href: '/about' },
  { label: 'Gallery', href: '/gallery' },
]

function MangoLogo() {
  return (
    <Link href="/" className="flex items-center gap-2.5 group flex-shrink-0" aria-label="The Purple Mango — Home">
      {/* Stylised mango leaf / bird SVG */}
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path
          d="M16 4C10 4 4 10 4 16C4 22 8 27 16 28C14 22 15 16 20 12C24 9 29 9 29 9C29 9 26 6 22 5L20 8C19 6 17.5 4 16 4Z"
          fill="#C9A028"
        />
        <path
          d="M20 12C15 16 14 22 16 28C20 26 24 22 26 18C28 14 27 10 24 9C23 10.5 21.5 11.5 20 12Z"
          fill="#4A2C5E"
          opacity="0.7"
        />
        <circle cx="17" cy="20" r="1.5" fill="#C9A028" opacity="0.6" />
      </svg>
      <div className="flex flex-col leading-none">
        <span className="font-playfair text-base font-semibold text-purple-deep tracking-wide">
          The Purple Mango
        </span>
        <span className="font-montserrat text-[9px] font-medium tracking-[0.18em] text-text-muted uppercase mt-0.5">
          Resort &amp; Retreat
        </span>
      </div>
    </Link>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 20)
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false)
    document.body.classList.remove('menu-open')
  }, [pathname])

  const toggleMenu = () => {
    const next = !menuOpen
    setMenuOpen(next)
    document.body.classList.toggle('menu-open', next)
  }

  const isActive = (href: string) => pathname === href || pathname.startsWith(href + '/')

  return (
    <>
      <header
        role="banner"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || menuOpen
            ? 'bg-white nav-scrolled'
            : 'bg-white/95 backdrop-blur-sm'
        }`}
      >
        <div className="container-resort">
          <nav
            className="flex items-center justify-between h-16 lg:h-20"
            aria-label="Main navigation"
          >
            {/* Logo */}
            <MangoLogo />

            {/* Desktop Nav Links */}
            <ul className="hidden lg:flex items-center gap-7 list-none m-0 p-0">
              {NAV_LINKS.map(({ label, href }) => {
                const active = isActive(href)
                return (
                  <li key={href}>
                    <Link
                      href={href}
                      className={`font-montserrat text-sm font-medium transition-colors duration-200 relative py-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded ${
                        active
                          ? 'text-gold'
                          : 'text-text-dark hover:text-gold'
                      }`}
                      aria-current={active ? 'page' : undefined}
                    >
                      {label}
                      {active && (
                        <span
                          className="absolute -bottom-0.5 left-0 right-0 h-0.5 bg-gold rounded-full"
                          aria-hidden="true"
                        />
                      )}
                    </Link>
                  </li>
                )
              })}
            </ul>

            {/* Contact Us CTA */}
            <div className="hidden lg:block">
              <Link
                href="/contact"
                id="nav-contact-btn"
                className="font-montserrat text-sm font-semibold bg-gold text-white px-6 py-2.5 rounded-full hover:bg-gold-hover transition-all duration-300 shadow-gold hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
              >
                Contact Us
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              id="mobile-menu-btn"
              onClick={toggleMenu}
              className="lg:hidden p-2 text-purple-deep hover:text-gold transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded-lg"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
            >
              <span className="block w-6 relative h-5">
                <span
                  className={`absolute left-0 top-0 w-full h-0.5 bg-current rounded transition-all duration-300 ${
                    menuOpen ? 'rotate-45 top-2' : ''
                  }`}
                />
                <span
                  className={`absolute left-0 top-2 w-full h-0.5 bg-current rounded transition-all duration-300 ${
                    menuOpen ? 'opacity-0 translate-x-2' : ''
                  }`}
                />
                <span
                  className={`absolute left-0 top-4 w-full h-0.5 bg-current rounded transition-all duration-300 ${
                    menuOpen ? '-rotate-45 top-2' : ''
                  }`}
                />
              </span>
            </button>
          </nav>
        </div>

        {/* Mobile Menu Drawer */}
        <div
          id="mobile-menu"
          role="dialog"
          aria-label="Mobile navigation menu"
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            menuOpen ? 'max-h-screen border-t border-border' : 'max-h-0'
          } bg-white`}
        >
          <nav className="container-resort pb-6 pt-4" aria-label="Mobile navigation">
            <ul className="flex flex-col gap-1 list-none m-0 p-0">
              {NAV_LINKS.map(({ label, href }) => {
                const active = isActive(href)
                return (
                  <li key={href}>
                    <Link
                      href={href}
                      className={`block font-montserrat text-base font-medium py-3 px-2 border-b border-border-light transition-colors duration-200 ${
                        active ? 'text-gold' : 'text-text-dark hover:text-gold'
                      }`}
                      aria-current={active ? 'page' : undefined}
                    >
                      {label}
                    </Link>
                  </li>
                )
              })}
            </ul>
            <Link
              href="/contact"
              className="mt-5 w-full flex items-center justify-center font-montserrat text-sm font-semibold bg-gold text-white px-6 py-3.5 rounded-full hover:bg-gold-hover transition-colors duration-300"
            >
              Contact Us
            </Link>
          </nav>
        </div>
      </header>

      {/* Spacer to prevent content jump below fixed header */}
      <div className="h-16 lg:h-20" aria-hidden="true" />
    </>
  )
}
