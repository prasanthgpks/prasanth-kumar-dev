'use client'

import { useState } from 'react'
import { Mail } from 'lucide-react'

type Status = 'idle' | 'submitting' | 'success' | 'error'

function LinkedinIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

const inputBase: React.CSSProperties = {
  display: 'block',
  width: '100%',
  padding: '12px 16px',
  fontSize: 15,
  borderRadius: 8,
  border: '1px solid var(--color-border)',
  background: '#ffffff',
  color: 'var(--color-text)',
  marginBottom: 16,
  fontFamily: 'var(--font-body)',
  outline: 'none',
  transition: 'border-color 150ms, box-shadow 150ms',
}

const labelStyle: React.CSSProperties = {
  display: 'block',
  fontFamily: 'var(--font-body)',
  fontSize: 13,
  fontWeight: 500,
  color: 'var(--color-text)',
  marginBottom: 6,
}

function onFocus(e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) {
  e.target.style.borderColor = 'var(--color-accent)'
  e.target.style.boxShadow = '0 0 0 3px #6c63ff26'
}

function onBlur(e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) {
  e.target.style.borderColor = 'var(--color-border)'
  e.target.style.boxShadow = 'none'
}

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<Status>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('submitting')
    setErrorMsg('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      })

      if (!res.ok) throw new Error('Something went wrong. Please try again.')

      setStatus('success')
      setName('')
      setEmail('')
      setMessage('')
    } catch (err) {
      setStatus('error')
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong.')
    }
  }

  const isSubmitting = status === 'submitting'
  const isSuccess = status === 'success'

  return (
    <section
      id="contact"
      className="w-full py-20 md:py-[120px]"
    >
      <div className="mx-auto max-w-[680px] px-6">

        {/* Section header */}
        <p className="font-body text-[12px] uppercase tracking-[0.08em] text-(--color-text-muted) mb-3">
          Get in touch
        </p>
        <h2 className="font-display font-normal text-[32px] md:text-[48px] text-(--color-text)">
          Let&apos;s work together
        </h2>
        <p className="font-body text-[16px] text-(--color-text-muted) leading-[1.7] mt-4">
          Open to full-time roles, freelance projects, and interesting collaborations.
          Based in Melbourne — available remotely worldwide.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="mt-12">
          <div>
            <label style={labelStyle} htmlFor="contact-name">Name</label>
            <input
              id="contact-name"
              type="text"
              placeholder="Your name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              onFocus={onFocus}
              onBlur={onBlur}
              style={inputBase}
            />
          </div>

          <div>
            <label style={labelStyle} htmlFor="contact-email">Email</label>
            <input
              id="contact-email"
              type="email"
              placeholder="your@email.com"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onFocus={onFocus}
              onBlur={onBlur}
              style={inputBase}
            />
          </div>

          <div>
            <label style={labelStyle} htmlFor="contact-message">Message</label>
            <textarea
              id="contact-message"
              placeholder="Tell me about your project..."
              required
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onFocus={onFocus}
              onBlur={onBlur}
              style={{ ...inputBase, resize: 'vertical' }}
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting || isSuccess}
            className="w-full font-body text-[15px] font-medium text-white rounded-lg py-[14px] px-7 transition-all duration-200 hover:-translate-y-px disabled:cursor-not-allowed"
            style={{
              background: isSuccess ? '#16a34a' : 'var(--color-accent)',
              opacity: isSubmitting ? 0.7 : 1,
            }}
            onMouseEnter={(e) => {
              if (!isSubmitting && !isSuccess)
                e.currentTarget.style.background = 'var(--color-accent-hover)'
            }}
            onMouseLeave={(e) => {
              if (!isSubmitting && !isSuccess)
                e.currentTarget.style.background = 'var(--color-accent)'
            }}
          >
            {isSubmitting
              ? 'Sending...'
              : isSuccess
                ? "Message sent — I'll be in touch soon"
                : 'Send message'}
          </button>

          {status === 'error' && (
            <p className="font-body text-[13px] text-red-600 mt-3">{errorMsg}</p>
          )}
        </form>

        {/* Alternative contact */}
        <div
          className="mt-10 pt-8 flex flex-col sm:flex-row gap-5"
          style={{ borderTop: '1px solid var(--color-border)' }}
        >
          <a
            href="mailto:hi@prasanth-kumar.dev"
            className="flex items-center gap-2 font-body text-[14px] text-(--color-text-muted) hover:text-(--color-text) transition-colors duration-150"
          >
            <Mail size={16} />
            hi@prasanth-kumar.dev
          </a>
          <a
            href="#"
            className="flex items-center gap-2 font-body text-[14px] text-(--color-text-muted) hover:text-(--color-text) transition-colors duration-150"
          >
            <LinkedinIcon size={16} />
            linkedin.com/in/prasanth-kumar
          </a>
        </div>

      </div>
    </section>
  )
}
