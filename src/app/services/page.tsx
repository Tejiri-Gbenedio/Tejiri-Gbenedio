import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ServicesView from '@/components/services/ServicesView'

export const metadata: Metadata = {
  title: 'Services & Solutions — Tejiri Gbenedio',
  description:
    'AI Automations & Custom AI Agents, Full-Stack Web Applications, and Conversion-Engineered Business Websites built to scale your operations.',
  openGraph: {
    title: 'Services & Solutions — Tejiri Gbenedio',
    description:
      'What I Can Build For Your Business: Modern websites, custom web apps, and 24/7 AI automations.',
    url: 'https://tejiri-gbenedio.vercel.app/services',
  },
}

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main>
        <ServicesView />
      </main>
      <Footer />
    </>
  )
}
