'use client'

import { motion } from 'framer-motion'

const ease = [0.25, 0.1, 0.25, 1] as const

const roles = [
  {
    title: 'Development Consultant',
    company: 'Fred IT Group',
    period: 'Jul 2025 — Present',
    location: 'Melbourne, AU',
    bullets: [
      'Built an AI-powered chat interface in Dispense Web UI using an MCP server, enabling natural language queries and reducing screen navigation',
      "Delivered features and production support for Fred's web and Windows pharmacy management products across Agile/SAFe teams",
      'Stack: C# .NET, WinForms, DevExpress, SQL Server, Azure, SSIS, SSRS',
    ],
  },
  {
    title: 'Senior Software Engineer',
    company: 'Jonas Software',
    period: 'Oct 2023 — Jul 2025',
    location: 'Melbourne, AU',
    bullets: [
      'Led full-stack development of EmqNet platform — RESTful APIs in C#/.NET with Angular SPA frontend serving enterprise clients',
      'Integrated Azure services (App Services, Functions, APIM, Service Bus, SQL MI) for high availability and performance',
      'Stack: C# ASP.NET, AngularJS, TypeScript, Azure, SignalR, Entity Framework, SQL Server',
    ],
  },
  {
    title: 'Software Engineer',
    company: 'Kmart Australia',
    period: 'Jun 2022 — Oct 2023',
    location: 'Melbourne, AU',
    bullets: [
      'Contributed to Migrate to Cloud (M2C) initiative — provisioned AWS infrastructure (EC2, RDS, Lambda, API Gateway) using CloudFormation and CDK',
      'Maintained legacy ASP.NET systems and wrote PowerShell automation for scheduled DB operations and file transfers',
      'Stack: TypeScript, C#, AWS, GitHub Actions, Jenkins, Octopus Deploy, SQL Server, IBM MQ',
    ],
  },
]

export default function Experience() {
  return (
    <section id="about" className="py-20 md:py-[120px]">
      <div className="mx-auto max-w-[1200px] px-6">

        {/* Section header */}
        <p className="font-body text-[12px] uppercase tracking-[0.08em] text-(--color-text-muted) mb-3">
          Background
        </p>
        <h2 className="font-display font-normal text-[32px] md:text-[48px] text-(--color-text) mb-12">
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
            <p className="font-body text-[16px] leading-[1.8] text-(--color-text) mb-5">
              Melbourne-based full-stack developer with 8+ years of experience
              building production applications across healthcare, retail, and SaaS.
            </p>
            <p className="font-body text-[16px] leading-[1.8] text-(--color-text-muted)">
              Currently transitioning into UI-led roles, combining deep backend
              expertise with a growing focus on design systems and frontend craft.
            </p>

            {/* Stats */}
            <div className="flex gap-8 mt-8">
              <div>
                <p className="font-display text-[36px] leading-none text-(--color-accent)">
                  8+
                </p>
                <p className="font-body text-[12px] text-(--color-text-muted) mt-1">
                  years experience
                </p>
              </div>
              <div>
                <p className="font-display text-[36px] leading-none text-(--color-accent)">
                  20+
                </p>
                <p className="font-body text-[12px] text-(--color-text-muted) mt-1">
                  projects shipped
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right: Timeline */}
          <div className="mt-10 md:mt-0">
            <div className="relative border-l-2 border-(--color-border)">
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

                  <h3 className="font-heading font-medium text-[16px] text-(--color-text)">
                    {role.title}
                  </h3>
                  <p className="font-body text-[14px] text-(--color-accent) mt-0.5">
                    {role.company} · {role.period}
                  </p>
                  <p className="font-body text-[13px] text-(--color-text-muted)">
                    {role.location}
                  </p>

                  <ul className="mt-[10px] space-y-1">
                    {role.bullets.map((bullet, j) => (
                      <li
                        key={j}
                        className="relative font-body text-[14px] text-(--color-text-muted) leading-[1.6] pl-3"
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
