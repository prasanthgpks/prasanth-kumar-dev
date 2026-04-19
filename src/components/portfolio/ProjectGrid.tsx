'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { projects, type Project } from '@/lib/projects'

const ease = [0.25, 0.1, 0.25, 1] as const

const statusBadge: Record<
  Project['status'],
  { bg: string; color: string; label: string }
> = {
  live: { bg: '#f0fdf4', color: '#15803d', label: 'Live' },
  'in-progress': { bg: '#fefce8', color: '#854d0e', label: 'In progress' },
  'coming-soon': { bg: '#f8f8f8', color: '#6b7280', label: 'Coming soon' },
}

export default function ProjectGrid() {
  const sorted = [...projects].sort((a, b) => a.order - b.order)

  return (
    <section id="work" className="py-20 md:py-[120px]">
      <div className="mx-auto max-w-[1200px] px-6">

        {/* Section header */}
        <p className="font-body text-[12px] uppercase tracking-[0.08em] text-(--color-text-muted) mb-3">
          Selected work
        </p>
        <h2 className="font-display font-normal text-[32px] md:text-[48px] text-(--color-text) mb-12">
          Projects
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {sorted.map((project, i) => {
            const badge = statusBadge[project.status]
            const isLive = project.status === 'live'

            return (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -4 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ delay: i * 0.1, duration: 0.5, ease }}
                className="relative overflow-hidden rounded-2xl p-8 border"
                style={{
                  background: project.bg,
                  borderColor: project.accent + '40',
                }}
              >
                {/* Top row */}
                <div className="flex items-start justify-between">
                  <span
                    className="font-body text-[11px] uppercase tracking-[0.06em] font-medium"
                    style={{ color: project.accent }}
                  >
                    {project.category}
                  </span>
                  <span
                    className="font-body text-[10px] font-medium rounded-full px-2 py-[3px]"
                    style={{ background: badge.bg, color: badge.color }}
                  >
                    {badge.label}
                  </span>
                </div>

                {/* Title + description */}
                <h3
                  className="font-display font-medium text-[28px] mt-4 mb-2"
                  style={{ color: '#0f0f0f' }}
                >
                  {project.title}
                </h3>
                <p
                  className="font-body text-[15px] leading-[1.6] line-clamp-2"
                  style={{ color: '#6b7280' }}
                >
                  {project.description}
                </p>

                {/* Bottom row */}
                <div className="mt-6 flex items-center justify-between">
                  {/* Tag pills */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-body text-[11px] px-[10px] py-1 rounded-full border"
                        style={{
                          background: '#ffffff',
                          borderColor: '#e5e7eb',
                          color: '#374151',
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Arrow link */}
                  <motion.div
                    whileHover={isLive ? { scale: 1.08 } : undefined}
                    transition={{ duration: 0.2 }}
                    className="flex-shrink-0 ml-4"
                    style={{ opacity: isLive ? 1 : 0.4 }}
                  >
                    <Link
                      href={`/work/${project.slug}`}
                      aria-label={`View ${project.title}`}
                      tabIndex={isLive ? undefined : -1}
                      style={{
                        pointerEvents: isLive ? 'auto' : 'none',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: 36,
                        height: 36,
                        borderRadius: '50%',
                        background: project.accent,
                        color: '#ffffff',
                      }}
                    >
                      <ArrowUpRight size={18} />
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
