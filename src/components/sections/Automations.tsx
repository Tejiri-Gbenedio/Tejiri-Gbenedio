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

const iconMap: Record<string, React.ComponentType<{ size?: number; color?: string }>> = {
  Mail,
  Dumbbell,
  Radio,
  Phone,
  MessageCircle,
  Briefcase,
}

export default function Automations() {
  return (
    <section id="automations" className="py-24 px-6" style={{ background: '#FAFAF8' }}>
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          label="WHAT I BUILD WITH AI"
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
                style={{ background: '#fff', borderColor: '#E5E7EB' }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = '#10B98166'
                  e.currentTarget.style.boxShadow = '0 8px 30px rgba(16,185,129,0.08)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = '#E5E7EB'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: '#D1FAE5' }}
                >
                  {Icon && <Icon size={20} color="#059669" />}
                </div>

                <h3
                  className="font-bold text-base mb-2 leading-snug"
                  style={{ fontFamily: 'var(--font-syne)', color: '#111827' }}
                >
                  {automation.title}
                </h3>

                <p className="text-sm mb-4 leading-relaxed" style={{ color: '#6B7280' }}>
                  {automation.tagline}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {automation.tools.map((tool) => (
                    <span
                      key={tool}
                      className="text-xs px-2.5 py-1 rounded-full font-mono"
                      style={{ background: '#F3F4F6', color: '#4B5563' }}
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
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold border-2 transition-colors duration-200 hover:bg-[#111827] hover:text-white"
            style={{ borderColor: '#111827', color: '#111827', fontFamily: 'var(--font-syne)' }}
          >
            Explore All Automations
            <ArrowUpRight size={15} />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
