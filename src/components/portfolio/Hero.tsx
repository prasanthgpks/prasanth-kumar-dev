'use client'

import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const ease = [0.25, 0.1, 0.25, 1] as const

const fadeUp = (delay: number, y = 20, duration = 0.6) => ({
  initial: { opacity: 0, y },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration, ease },
})

export default function Hero() {
  return (
    <section className="relative flex flex-col justify-center" style={{ minHeight: 'calc(100vh - 64px)' }}>
      <div className="mx-auto w-full max-w-[1200px] px-6">
        <div className="max-w-[680px]">

          {/* Availability badge */}
          <motion.div {...fadeUp(0, 10, 0.5)} className="mb-8">
            <span
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[12px] font-medium border"
              style={{ background: '#f0fdf4', color: '#15803d', borderColor: '#bbf7d0' }}
            >
              <motion.span
                className="block w-[6px] h-[6px] rounded-full flex-shrink-0"
                style={{ background: '#22c55e' }}
                animate={{ scale: [1, 1.4, 1], opacity: [1, 0.5, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              />
              Available for work
            </span>
          </motion.div>

          {/* Headline */}
          <div>
            <motion.p
              {...fadeUp(0.15, 20, 0.6)}
              className="font-display font-normal leading-[1.1] text-[42px] md:text-[72px] text-(--color-text)"
            >
              I design &amp; build
            </motion.p>
            <motion.p
              {...fadeUp(0.25, 20, 0.6)}
              className="font-display font-normal italic leading-[1.1] text-[42px] md:text-[72px] text-(--color-accent)"
            >
              web experiences.
            </motion.p>
          </div>

          {/* Sub-headline */}
          <motion.p
            {...fadeUp(0.4, 0, 0.5)}
            className="mt-6 font-body text-[16px] md:text-[18px] text-(--color-text-muted) leading-[1.6] max-w-[520px]"
          >
            Full-stack developer &amp; UI designer based in Melbourne.
            React, Next.js, TypeScript — with an eye for the details that matter.
          </motion.p>

          {/* CTA row */}
          <motion.div
            {...fadeUp(0.55, 10, 0.5)}
            className="mt-10 flex flex-row gap-4"
          >
            <a
              href="#work"
              className="inline-flex items-center justify-center px-7 py-[14px] rounded-[6px] font-body text-[15px] font-medium transition-all duration-200 ease-in-out hover:-translate-y-px"
              style={{ backgroundColor: 'var(--color-accent)', color: 'white' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--color-accent-hover)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--color-accent)'
              }}
            >
              View my work
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-7 py-[14px] rounded-[6px] font-body text-[15px] font-medium bg-transparent transition-all duration-200 ease-in-out hover:border-(--color-text)"
              style={{ border: '1px solid var(--color-border)', color: 'var(--color-text)' }}
            >
              Get in touch
            </a>
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <a href="#work" aria-label="Scroll to work">
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="text-(--color-text-muted)"
          >
            <ChevronDown size={20} />
          </motion.div>
        </a>
      </div>
    </section>
  )
}
