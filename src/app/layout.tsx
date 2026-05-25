import type { Metadata } from 'next'
import { Syne, Inter, Fraunces } from 'next/font/google'
import './globals.css'

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  weight: ['400', '600', '700', '800'],
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['300', '400', '500', '600'],
  display: 'swap',
})

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['700', '900'],
  style: ['normal', 'italic'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Tejiri Gbenedio — AI Automation & Full-Stack Web Developer',
  description:
    'I build modern websites, e-commerce platforms, automations, and AI-powered digital experiences that help businesses grow online.',
  keywords: ['web developer', 'AI automation', 'Next.js', 'e-commerce', 'Nigeria', 'full-stack'],
  openGraph: {
    title: 'Tejiri Gbenedio — AI Automation & Full-Stack Web Developer',
    description: 'Modern websites, e-commerce, and AI-powered digital experiences.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${syne.variable} ${inter.variable} ${fraunces.variable}`}>
        {children}
      </body>
    </html>
  )
}
