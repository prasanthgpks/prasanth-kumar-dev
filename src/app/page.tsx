import Hero from '@/components/portfolio/Hero'
import ProjectGrid from '@/components/portfolio/ProjectGrid'
import Skills from '@/components/portfolio/Skills'
import Experience from '@/components/portfolio/Experience'
import Contact from '@/components/portfolio/Contact'

export default function Home() {
  return (
    <>
      <Hero />
      <ProjectGrid />
      <Skills />
      <Experience />
      <Contact />
    </>
  )
}
