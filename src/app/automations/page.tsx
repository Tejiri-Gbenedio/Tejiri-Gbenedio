import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import AutomationsView from '@/components/automations/AutomationsView'

export const metadata: Metadata = {
  title: 'AI Systems & Workflows — Tejiri Gbenedio',
  description:
    'Verified StackedHQ Founding Member · 965 Stacks. Enterprise n8n workflows, conversational Vapi Voice AI agents, and autonomous lead intake pipelines.',
  openGraph: {
    title: 'AI Systems & Workflows — Tejiri Gbenedio',
    description:
      'Verified StackedHQ Founding Member · 965 Stacks. Production AI agents, voice receptionists, and autonomous business workflows.',
    url: 'https://tejiri-gbenedio.vercel.app/automations',
  },
}

export default function AutomationsPage() {
  return (
    <>
      <Navbar />
      <main>
        <AutomationsView />
      </main>
      <Footer />
    </>
  )
}
