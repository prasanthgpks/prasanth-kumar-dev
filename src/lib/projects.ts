export interface Project {
  slug: string
  title: string
  category: string
  description: string
  tags: string[]
  accent: string
  bg: string
  status: 'live' | 'in-progress' | 'coming-soon'
  order: number
}

export const projects: Project[] = [
  {
    slug: 'luxury',
    title: 'Maison Éclat',
    category: 'Luxury Ecommerce',
    description:
      'High-end fashion brand with editorial photography and a refined checkout experience.',
    tags: ['Next.js', 'Framer Motion', 'Tailwind', 'TypeScript'],
    accent: '#C9A96E',
    bg: '#faf8f5',
    status: 'in-progress',
    order: 1,
  },
  {
    slug: 'saas',
    title: 'Flowstate',
    category: 'SaaS Dashboard',
    description:
      'Project management tool with real-time data visualisation and a polished dark UI.',
    tags: ['Next.js', 'Recharts', 'Supabase', 'TypeScript'],
    accent: '#00D4FF',
    bg: '#f0f9ff',
    status: 'coming-soon',
    order: 2,
  },
  {
    slug: 'agency',
    title: 'Bolt Studio',
    category: 'Creative Agency',
    description:
      'Bold design studio site with GSAP scroll effects and an unconventional grid layout.',
    tags: ['Next.js', 'GSAP', 'Tailwind', 'TypeScript'],
    accent: '#FF006E',
    bg: '#fff0f6',
    status: 'coming-soon',
    order: 3,
  },
  {
    slug: 'tool',
    title: 'Palette.fyi',
    category: 'Interactive Tool',
    description:
      'Colour palette generator that exports to Tailwind, CSS variables, and Figma tokens.',
    tags: ['React', 'TypeScript', 'CSS', 'Vercel'],
    accent: '#7C3AED',
    bg: '#f5f3ff',
    status: 'coming-soon',
    order: 4,
  },
  {
    slug: 'realty',
    title: 'Arbour Property',
    category: 'Real Estate',
    description:
      'Melbourne property listings site with map integration and smart filtering.',
    tags: ['Next.js', 'Mapbox', 'Tailwind', 'TypeScript'],
    accent: '#16A34A',
    bg: '#f0fdf4',
    status: 'coming-soon',
    order: 5,
  },
]
