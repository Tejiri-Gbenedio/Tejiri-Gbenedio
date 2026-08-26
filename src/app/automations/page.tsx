import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import AutomationDetailCard from '@/components/ui/AutomationDetailCard'
import MagneticButton from '@/components/ui/MagneticButton'
import { automations, contactLinks } from '@/data'

export const metadata: Metadata = {
  title: 'AI Automations — Tejiri Gbenedio',
  description:
    'n8n automation workflows built for real businesses — email triage, AI receptionists, RAG chatbots, and autonomous pipelines.',
}

export default function AutomationsPage() {
  return (
    <>
      <Navbar />
      <main style={{ background: 'var(--color-canvas)' }}>
        {/* Page header */}
        <section className="pt-32 pb-16 px-6">
          <div className="max-w-6xl mx-auto">
            <h1
              className="leading-tight mb-4"
              style={{
                fontFamily: 'var(--font-geist-sans)',
                fontWeight: 700,
                letterSpacing: '-0.03em',
                fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                color: 'var(--color-ink)',
              }}
            >
              AI Automations
            </h1>
            <p className="text-lg max-w-2xl leading-relaxed" style={{ color: 'var(--color-muted)' }}>
              Workflows I&apos;ve built that run real businesses — handling emails, calls, orders,
              and job applications automatically, without human intervention.
            </p>
          </div>
        </section>

        {/* Automation detail cards */}
        <section className="px-6 pb-24">
          <div className="max-w-6xl mx-auto space-y-20">
            {automations.map((automation, i) => (
              <div key={automation.id}>
                <AutomationDetailCard automation={automation} index={i} />
                {i < automations.length - 1 && (
                  <hr className="mt-20" style={{ borderColor: 'var(--color-border)' }} />
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Bottom CTA */}
        <section
          className="py-20 px-6 text-center"
          style={{ background: 'var(--color-surface-alt)', borderTop: '1px solid var(--color-border)' }}
        >
          <div className="max-w-xl mx-auto">
            <h2
              className="font-semibold text-3xl mb-4 tracking-tight"
              style={{ fontFamily: 'var(--font-geist-sans)', color: 'var(--color-ink)' }}
            >
              Ready to automate your business?
            </h2>
            <p className="mb-8 leading-relaxed" style={{ color: 'var(--color-muted)' }}>
              Let&apos;s talk about what processes are eating your team&apos;s time and how an automation can fix it.
            </p>
            <MagneticButton href={contactLinks.whatsapp} variant="primary">
              Let&apos;s Have A Talk
            </MagneticButton>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
