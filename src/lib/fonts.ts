// Premium fonts (Cormorant, Cabinet Grotesk) will be added here as localFont()
// once purchased from Fontspring. Drop WOFF2 files into /public/fonts/

import {
  Inter,
  DM_Sans,
  Playfair_Display,
  Space_Grotesk,
  DM_Serif_Display,
  Lora,
  Cormorant_Garamond,
} from 'next/font/google'

export const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-inter',
})

export const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-dm-sans',
})

export const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  style: ['normal', 'italic'],
  variable: '--font-playfair',
})

export const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-space-grotesk',
})

export const dmSerifDisplay = DM_Serif_Display({
  subsets: ['latin'],
  variable: '--font-dm-serif',
  weight: '400',
})

export const lora = Lora({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-lora',
})

export const cormorantGaramond = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
})

export const allFonts = [
  inter.variable,
  dmSans.variable,
  playfairDisplay.variable,
  spaceGrotesk.variable,
  dmSerifDisplay.variable,
  lora.variable,
  cormorantGaramond.variable,
].join(' ')
