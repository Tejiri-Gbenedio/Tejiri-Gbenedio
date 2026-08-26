'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  Mail,
  Dumbbell,
  Radio,
  Phone,
  MessageCircle,
  Briefcase,
  ArrowUpRight,
} from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'
import { automations } from '@/data'

const iconMap: Record<string, React.ComponentType<{ size?: number }>> = {
  Mail,
  Dumbbell,
  Radio,
  Phone,
  MessageCircle,
  Briefcase,
}

export default function Automations() {
  return (
    <section id="automations" className="py-24 px-6" style={{ background: 'var(--color-surface-alt)' }}>
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title="AI Automations"
          subtitle="Workflows that run your business while you sleep."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {automations.map((automation, i) => {
            const Icon = iconMap[automation.icon]
            return (
              <motion.div
                key={automation.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="p-6 rounded-2xl border transition-all duration-300"
                style={{ background: 'var(--color-card)', borderColor: 'var(--color-border)' }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'var(--color-border-strong)'
                  e.currentTarget.style.boxShadow = '0 16px 36px -14px rgba(28,25,23,0.16)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'var(--color-border)'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: 'var(--color-accent-soft)', color: 'var(--color-accent-ink)' }}
                >
                  {Icon && <Icon size={20} />}
                </div>

                <h3
                  className="font-semibold text-base mb-2 leading-snug tracking-tight"
                  style={{ fontFamily: 'var(--font-geist-sans)', color: 'var(--color-ink)' }}
                >
                  {automation.title}
                </h3>

                <p className="text-sm mb-4 leading-relaxed" style={{ color: 'var(--color-muted)' }}>
                  {automation.tagline}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {automation.tools.map((tool) => (
                    <span
                      key={tool}
                      className="text-xs px-2.5 py-1 rounded-md border"
                      style={{ background: 'var(--color-surface-alt)', borderColor: 'var(--color-border)', color: 'var(--color-muted)', fontFamily: 'var(--font-mono)' }}
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex justify-center"
        >
          <Link
            href="/automations"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-[10px] text-sm font-semibold border transition-colors duration-200 hover:bg-[#1C1917] hover:text-white"
            style={{ borderColor: 'var(--color-ink)', color: 'var(--color-ink)', fontFamily: 'var(--font-geist-sans)' }}
          >
            Explore All Automations
            <ArrowUpRight size={15} />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
