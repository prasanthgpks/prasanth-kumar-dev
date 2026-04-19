import type { Metadata } from 'next'
import { allFonts } from '@/lib/fonts'
import Nav from '@/components/portfolio/Nav'
import Footer from '@/components/portfolio/Footer'
import './globals.css'

export const metadata: Metadata = {
  title: 'Prasanth Kumar — Web Designer & Developer',
  description:
    'Melbourne-based web designer and developer. Building premium digital experiences for startups and growing businesses.',
  metadataBase: new URL('https://prasanth-kumar.dev'),
  openGraph: {
    title: 'Prasanth Kumar — Web Designer & Developer',
    description:
      'Melbourne-based web designer and developer. Building premium digital experiences for startups and growing businesses.',
    url: 'https://prasanth-kumar.dev',
    siteName: 'Prasanth Kumar',
    locale: 'en_AU',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={allFonts} suppressHydrationWarning>
      <body
        className={allFonts}
        style={
          {
            '--font-display': 'var(--font-cormorant)',
            '--font-heading': 'var(--font-dm-sans)',
            '--font-body': 'var(--font-inter)',
          } as React.CSSProperties
        }
      >
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
