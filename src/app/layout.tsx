import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import MotionProvider from '@/components/MotionProvider'
import './globals.css'

const geistSans = Geist({
  subsets: ['latin'],
  variable: '--font-geist-sans',
  display: 'swap',
})

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://tejiri-gbenedio.vercel.app'),
  title: 'Tejiri Gbenedio — AI Automation & Full-Stack Web Developer',
  description:
    'I build modern websites, e-commerce platforms, automations, and AI-powered digital experiences that help businesses grow online.',
  keywords: ['web developer', 'AI automation', 'Next.js', 'e-commerce', 'Nigeria', 'full-stack'],
  openGraph: {
    title: 'Tejiri Gbenedio — AI Automation & Full-Stack Web Developer',
    description: 'Modern websites, e-commerce, and AI-powered digital experiences.',
    type: 'website',
    url: 'https://tejiri-gbenedio.vercel.app',
    siteName: 'Tejiri Gbenedio — Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tejiri Gbenedio — AI Automation & Full-Stack Web Developer',
    description: 'Modern websites, e-commerce, and AI-powered digital experiences.',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  )
}
