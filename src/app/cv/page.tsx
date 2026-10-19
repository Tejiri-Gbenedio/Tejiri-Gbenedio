import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CVView from '@/components/cv/CVView'

export const metadata: Metadata = {
  title: 'Curriculum Vitae & Technical Record — Tejiri Gbenedio',
  description:
    'Interactive CV & Technical Record of Tejiri Gbenedio. Verified StackedHQ Founding Builder (965 Stacks) & Full-Stack Developer.',
  openGraph: {
    title: 'Curriculum Vitae — Tejiri Gbenedio',
    description:
      'Executive Profile, Production Systems Experience, and Official PDF Download for Tejiri Gbenedio.',
    url: 'https://tejiri-gbenedio.vercel.app/cv',
  },
}

export default function CVPage() {
  return (
    <>
      <Navbar />
      <main>
        <CVView />
      </main>
      <Footer />
    </>
  )
}
