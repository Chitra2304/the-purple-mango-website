'use client'

import { useState, useRef } from 'react'

type FormState = 'idle' | 'submitting' | 'success' | 'error'

export default function ContactForm({ compact = false }: { compact?: boolean }) {
  const [state, setState] = useState<FormState>('idle')
  const formRef = useRef<HTMLFormElement>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setState('submitting')
    // Simulate network request (replace with real API/email endpoint)
    await new Promise((r) => setTimeout(r, 1200))
    setState('success')
    formRef.current?.reset()
  }

  if (state === 'success') {
    return (
      <div className="flex flex-col items-center justify-center text-center py-10 gap-4">
        <div className="w-14 h-14 rounded-full bg-gold/20 flex items-center justify-center">
          <svg className="w-7 h-7 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </div>
        <div>
          <p className="font-playfair text-xl text-white font-normal">Thank you!</p>
          <p className="font-montserrat text-sm text-white/70 mt-1">We&apos;ll be in touch within 24 hours.</p>
        </div>
        <button
          onClick={() => setState('idle')}
          className="font-montserrat text-xs text-gold hover:text-gold-light underline underline-offset-4 transition-colors"
        >
          Send another enquiry
        </button>
      </div>
    )
  }

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      noValidate
      aria-label="Reservation enquiry form"
      className="flex flex-col gap-3.5"
    >
      {/* Row 1: Name + Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
        <div>
          <label htmlFor={compact ? 'fn-c' : 'fn'} className="sr-only">Name</label>
          <input
            id={compact ? 'fn-c' : 'fn'}
            name="name"
            type="text"
            placeholder="Name"
            required
            autoComplete="name"
            className="form-input"
          />
        </div>
        <div>
          <label htmlFor={compact ? 'fe-c' : 'fe'} className="sr-only">Email</label>
          <input
            id={compact ? 'fe-c' : 'fe'}
            name="email"
            type="email"
            placeholder="Email"
            required
            autoComplete="email"
            className="form-input"
          />
        </div>
      </div>

      {/* Row 2: Phone + City */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
        <div>
          <label htmlFor={compact ? 'fp-c' : 'fp'} className="sr-only">Phone</label>
          <input
            id={compact ? 'fp-c' : 'fp'}
            name="phone"
            type="tel"
            placeholder="Phone"
            autoComplete="tel"
            className="form-input"
          />
        </div>
        <div>
          <label htmlFor={compact ? 'fc-c' : 'fc'} className="sr-only">City</label>
          <input
            id={compact ? 'fc-c' : 'fc'}
            name="city"
            type="text"
            placeholder="City"
            autoComplete="address-level2"
            className="form-input"
          />
        </div>
      </div>

      {/* Row 3: Message */}
      <div>
        <label htmlFor={compact ? 'fm-c' : 'fm'} className="sr-only">Message</label>
        <textarea
          id={compact ? 'fm-c' : 'fm'}
          name="message"
          placeholder="Message"
          rows={3}
          className="form-input resize-none"
        />
      </div>

      {/* Submit */}
      <button
        id={compact ? 'submit-enquiry-footer-c' : 'submit-enquiry-footer'}
        type="submit"
        disabled={state === 'submitting'}
        className="mt-2 w-full bg-gold text-gold-dark font-montserrat font-semibold text-xs sm:text-[13px] tracking-[0.12em] uppercase py-3.5 sm:py-4 rounded-xl hover:bg-gold-hover transition-all duration-300 shadow-btn hover:shadow-md disabled:opacity-60 disabled:cursor-not-allowed focus:outline-none focus-visible:ring-2 focus-visible:ring-gold select-none"
      >
        {state === 'submitting' ? (
          <span className="flex items-center justify-center gap-2">
            <svg className="w-4 h-4 animate-spin text-gold-dark" fill="none" viewBox="0 0 24 24" aria-hidden="true">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
            </svg>
            Sending…
          </span>
        ) : (
          'Send Enquiry'
        )}
      </button>
    </form>
  )
}
