'use client'
import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'
import MagneticButton from '@/components/ui/MagneticButton'
import { pricingTiers, contactLinks } from '@/data'

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 px-6" style={{ background: '#F8F7F4' }}>
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          label="Investment"
          title="Transparent Pricing"
          subtitle="No hidden fees. No surprises. Just clear value for your investment."
          centered
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-4">
          {pricingTiers.map((tier, i) => (
            <motion.div
              key={tier.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative flex flex-col p-6 rounded-2xl border transition-all duration-300"
              style={
                tier.highlighted
                  ? { background: '#0F172A', borderColor: '#10B981', boxShadow: '0 20px 60px rgba(15,23,42,0.25)', transform: 'scale(1.04)' }
                  : { background: '#fff', borderColor: '#E5E7EB' }
              }
            >
              {tier.highlighted && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider" style={{ background: '#10B981', fontFamily: 'var(--font-syne)' }}>
                    Most Popular
                  </span>
                </div>
              )}

              <h3
                className="font-bold text-lg mb-1"
                style={{ fontFamily: 'var(--font-syne)', color: tier.highlighted ? '#fff' : '#111827' }}
              >
                {tier.name}
              </h3>
              <p className="text-sm leading-relaxed mb-5" style={{ color: tier.highlighted ? 'rgba(255,255,255,0.6)' : '#6B7280' }}>
                {tier.description}
              </p>
              <p
                className="font-extrabold text-2xl mb-6"
                style={{ fontFamily: 'var(--font-syne)', color: tier.highlighted ? '#10B981' : '#111827' }}
              >
                {tier.priceRange}
              </p>

              <ul className="space-y-2.5 mb-8 flex-1">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <Check size={13} className="mt-0.5 shrink-0" style={{ color: '#10B981' }} />
                    <span className="text-sm" style={{ color: tier.highlighted ? 'rgba(255,255,255,0.75)' : '#6B7280' }}>
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <MagneticButton
                href={contactLinks.whatsapp}
                variant={tier.highlighted ? 'primary' : 'outline'}
                className="justify-center w-full"
              >
                {tier.id === 4 ? "Let's Talk" : 'Get Started'}
              </MagneticButton>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
