'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-white/90 backdrop-blur-sm transition-colors duration-200${
        scrolled ? ' border-b border-[var(--color-border)]' : ''
      }`}
    >
      <div className="mx-auto max-w-[1200px] px-6 flex items-center justify-between h-16">
        <Link
          href="/"
          className="font-display text-[20px] font-medium text-[var(--color-text)] no-underline"
        >
          PK
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[14px] font-body text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors duration-150 no-underline"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          className="md:hidden text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors duration-150"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence initial={false}>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ height: 0 }}
            animate={{ height: 'auto' }}
            exit={{ height: 0 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden border-t border-[var(--color-border)]"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="flex items-center h-12 pl-6 text-[14px] font-body text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors duration-150 no-underline"
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
