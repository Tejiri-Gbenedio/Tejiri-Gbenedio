import type { Metadata } from 'next'
import { Plus_Jakarta_Sans, Geist, JetBrains_Mono } from 'next/font/google'
import MotionProvider from '@/components/motion/MotionProvider'
import './globals.css'

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  weight: ['500', '600', '700', '800'],
})

const geistSans = Geist({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
  weight: ['400', '500', '600'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://tejiri-gbenedio.vercel.app'),
  title: 'Tejiri Gbenedio — AI Automation & Full-Stack Developer',
  description:
    'Verified StackedHQ Founding Member · 965 Stacks. Building studio-grade web applications, autonomous AI agents, and enterprise workflow automations.',
  keywords: [
    'Tejiri Gbenedio',
    'AI Automation',
    'Full-Stack Developer',
    'StackedHQ',
    'n8n',
    'Next.js',
    'TypeScript',
    'Vapi Voice AI',
    'Agentic AI',
    'Nigeria',
  ],
  authors: [{ name: 'Tejiri Gbenedio' }],
  creator: 'Tejiri Gbenedio',
  openGraph: {
    title: 'Tejiri Gbenedio — AI Automation & Full-Stack Developer',
    description:
      'Verified StackedHQ Founding Member · 965 Stacks. Studio-grade web engineering & autonomous AI systems.',
    type: 'website',
    url: 'https://tejiri-gbenedio.vercel.app',
    siteName: 'Tejiri Gbenedio Portfolio',
    locale: 'en_US',
    images: [
      {
        url: '/tejiri-portrait.jpg',
        width: 1200,
        height: 630,
        alt: 'Tejiri Gbenedio — AI Automation & Full-Stack Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tejiri Gbenedio — AI Automation & Full-Stack Developer',
    description:
      'Verified StackedHQ Founding Member · 965 Stacks. Studio-grade web engineering & autonomous AI systems.',
    images: ['/tejiri-portrait.jpg'],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark bg-[#0A0A0B] text-[#F4F4F0]">
      <body
        className={`${plusJakarta.variable} ${geistSans.variable} ${jetbrainsMono.variable} font-sans bg-[#0A0A0B] text-[#F4F4F0] antialiased min-h-screen selection:bg-[#D4AF37]/20 selection:text-[#F4F4F0]`}
      >
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  )
}
