import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import AboutView from '@/components/about/AboutView'

export const metadata: Metadata = {
  title: 'About & Engineering Philosophy — Tejiri Gbenedio',
  description:
    'Full-Stack Developer & AI Automation Specialist bridging high-contrast web systems with autonomous multi-agent pipelines.',
  openGraph: {
    title: 'About & Engineering Philosophy — Tejiri Gbenedio',
    description:
      'Bridging Full-Stack Code with Autonomous AI. Verified StackedHQ Founding Builder.',
    url: 'https://tejiri-gbenedio.vercel.app/about',
  },
}

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <AboutView />
      </main>
      <Footer />
    </>
  )
}
