'use client'

import { motion } from 'framer-motion'

const ease = [0.25, 0.1, 0.25, 1] as const

const coreSkills = [
  {
    name: 'UI & Web Design',
    description:
      'Designing directly in code. Every layout decision is intentional — typography, spacing, colour, motion.',
  },
  {
    name: 'Frontend Development',
    description:
      'React, Next.js, TypeScript. Component architecture, performance optimisation, accessibility.',
  },
  {
    name: 'Backend & APIs',
    description:
      'Node.js, C#/.NET, Supabase. Full-stack experience from database schema to REST and realtime APIs.',
  },
  {
    name: 'Design Systems',
    description:
      'Building token-based design systems that scale — from a single site to a multi-product agency.',
  },
]

const techStack = [
  { category: 'Languages', tags: ['TypeScript', 'JavaScript', 'C#', 'HTML', 'CSS'] },
  { category: 'Frameworks', tags: ['Next.js', 'React', 'Node.js', '.NET', 'Tailwind CSS'] },
  { category: 'Tools', tags: ['Vercel', 'Supabase', 'Git', 'Framer Motion', 'GSAP'] },
  { category: 'Currently learning', tags: ['Figma', 'Three.js', 'React Native'] },
]

export default function Skills() {
  return (
    <section
      id="skills"
      className="w-full py-20 md:py-[120px]"
    >
      <div className="mx-auto max-w-[1200px] px-6">

        {/* Section header */}
        <p className="font-body text-[12px] uppercase tracking-[0.08em] text-(--color-text-muted) mb-3">
          Expertise
        </p>
        <h2 className="font-display font-normal text-[32px] md:text-[48px] text-(--color-text) mb-12">
          Skills &amp; stack
        </h2>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-20">

          {/* Left: Core skills */}
          <div>
            {coreSkills.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ delay: i * 0.08, duration: 0.5, ease }}
              >
                {i > 0 && (
                  <hr className="border-0 border-t border-(--color-border)" />
                )}
                <h3 className="font-heading font-medium text-[17px] text-(--color-text) pt-5 pb-2">
                  {skill.name}
                </h3>
                <p className="font-body text-[14px] text-(--color-text-muted) leading-[1.6] pb-5">
                  {skill.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Right: Tech stack */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, delay: 0.1, ease }}
          >
            {techStack.map((group, i) => (
              <div key={group.category} style={{ marginTop: i === 0 ? 0 : 24 }}>
                <p className="font-body text-[11px] uppercase tracking-[0.06em] text-(--color-text-muted) font-medium mb-[10px]">
                  {group.category}
                </p>
                <div className="flex flex-wrap gap-2">
                  {group.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-body text-[13px] px-[14px] py-1.5 rounded-full border border-(--color-border) text-(--color-text) cursor-default transition-all duration-150"
                      style={{ background: 'var(--color-surface-2)' }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = '#c2622a'
                        e.currentTarget.style.color = '#c2622a'
                        e.currentTarget.style.backgroundColor = '#fdf0eb'
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = ''
                        e.currentTarget.style.color = ''
                        e.currentTarget.style.backgroundColor = ''
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  )
}
