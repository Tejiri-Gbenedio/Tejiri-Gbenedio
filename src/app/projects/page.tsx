import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ProjectsView from '@/components/projects/ProjectsView'

export const metadata: Metadata = {
  title: 'Web & App Engineering — Tejiri Gbenedio',
  description:
    'Flagship case studies and production directory of studio-grade web applications, SaaS platforms, and multi-modal AI systems engineered by Tejiri Gbenedio.',
  openGraph: {
    title: 'Web & App Engineering — Tejiri Gbenedio',
    description:
      'Studio-grade web applications, SaaS portals, and AI systems engineered for velocity and conversion.',
    url: 'https://tejiri-gbenedio.vercel.app/projects',
  },
}

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main>
        <ProjectsView />
      </main>
      <Footer />
    </>
  )
}
