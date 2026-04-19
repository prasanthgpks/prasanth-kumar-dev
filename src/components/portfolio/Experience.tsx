'use client'

import { motion } from 'framer-motion'

const ease = [0.25, 0.1, 0.25, 1] as const

const roles = [
  {
    title: 'Senior Developer',
    company: 'Current Company',
    period: '20XX — Present',
    location: 'Melbourne, AU',
    bullets: [
      'Led frontend architecture for [product], serving [X] users',
      'Introduced design system reducing UI inconsistencies by [X]%',
      'Stack: React, TypeScript, Next.js, [backend tech]',
    ],
  },
  {
    title: 'Developer',
    company: 'Previous Company',
    period: '20XX — 20XX',
    location: 'Melbourne, AU',
    bullets: [
      'Built and maintained [type of product]',
      'Collaborated with design team on [feature/project]',
      'Stack: [tech stack]',
    ],
  },
  {
    title: '[Role Title]',
    company: '[Company]',
    period: '20XX — 20XX',
    location: 'Melbourne, AU',
    bullets: [
      '[Key responsibility or achievement]',
      '[Key responsibility or achievement]',
      'Stack: [tech stack]',
    ],
  },
]

export default function Experience() {
  return (
    <section id="about" className="py-20 md:py-[120px]">
      <div className="mx-auto max-w-[1200px] px-6">

        {/* Section header */}
        <p className="font-body text-[12px] uppercase tracking-[0.08em] text-[var(--color-text-muted)] mb-3">
          Background
        </p>
        <h2 className="font-display font-normal text-[32px] md:text-[48px] text-[var(--color-text)] mb-12">
          Experience
        </h2>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-[35fr_65fr] md:gap-20">

          {/* Left: About blurb */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, ease }}
          >
            <p className="font-body text-[16px] leading-[1.8] text-[var(--color-text)] mb-5">
              Melbourne-based developer with 8+ years of experience building
              production web applications across fintech, logistics, and SaaS.
            </p>
            <p className="font-body text-[16px] leading-[1.8] text-[var(--color-text-muted)]">
              Currently building a design-focused portfolio to transition into
              UI-led roles and eventually launch a boutique web design agency.
            </p>

            {/* Stats */}
            <div className="flex gap-8 mt-8">
              <div>
                <p className="font-display text-[36px] leading-none text-[var(--color-accent)]">
                  8+
                </p>
                <p className="font-body text-[12px] text-[var(--color-text-muted)] mt-1">
                  years experience
                </p>
              </div>
              <div>
                <p className="font-display text-[36px] leading-none text-[var(--color-accent)]">
                  20+
                </p>
                <p className="font-body text-[12px] text-[var(--color-text-muted)] mt-1">
                  projects shipped
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right: Timeline */}
          <div className="mt-10 md:mt-0">
            <div className="relative border-l-2 border-[var(--color-border)]">
              {roles.map((role, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ delay: i * 0.1, duration: 0.5, ease }}
                  className="relative pl-6 pb-10 last:pb-0"
                >
                  {/* Dot */}
                  <span
                    className="absolute -left-[5px] top-[6px] w-2 h-2 rounded-full"
                    style={{ background: 'var(--color-accent)' }}
                  />

                  <h3 className="font-heading font-medium text-[16px] text-[var(--color-text)]">
                    {role.title}
                  </h3>
                  <p className="font-body text-[14px] text-[var(--color-accent)] mt-0.5">
                    {role.company} · {role.period}
                  </p>
                  <p className="font-body text-[13px] text-[var(--color-text-muted)]">
                    {role.location}
                  </p>

                  <ul className="mt-[10px] space-y-1">
                    {role.bullets.map((bullet, j) => (
                      <li
                        key={j}
                        className="relative font-body text-[14px] text-[var(--color-text-muted)] leading-[1.6] pl-3"
                      >
                        <span
                          className="absolute left-0 top-2 w-1 h-1"
                          style={{ background: 'var(--color-accent)' }}
                        />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
