'use client'
import { motion } from 'framer-motion'
import { MessageCircle, Mail, ArrowUpRight } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'
import MagneticButton from '@/components/ui/MagneticButton'
import { contactLinks } from '@/data'

function GithubIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  )
}

function LinkedinIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  )
}

const channels = [
  {
    icon: <MessageCircle size={20} />,
    label: 'WhatsApp',
    value: '+234 705 238 1068',
    href: contactLinks.whatsapp,
    description: 'Fastest response. Message me directly.',
  },
  {
    icon: <Mail size={20} />,
    label: 'Email',
    value: 'tejirigbe@gmail.com',
    href: `mailto:${contactLinks.email}`,
    description: 'For detailed project briefs.',
  },
  {
    icon: <LinkedinIcon />,
    label: 'LinkedIn',
    value: 'Gbenedio Tejiri',
    href: contactLinks.linkedin,
    description: 'Connect professionally.',
  },
  {
    icon: <GithubIcon />,
    label: 'GitHub',
    value: 'Tejiri-Gbenedio',
    href: contactLinks.github,
    description: 'Browse my open source work.',
  },
]

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6" style={{ background: '#F8F7F4' }}>
      <div className="max-w-4xl mx-auto text-center">
        <SectionHeading
          label="Get In Touch"
          title="Ready to Build Something Great?"
          subtitle="Tell me about your project and let's figure out the best way to bring it to life."
          centered
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <MagneticButton href={contactLinks.whatsapp} variant="primary" className="text-base px-10 py-4">
            Let&apos;s Have A Talk
          </MagneticButton>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
          {channels.map((ch, i) => (
            <motion.a
              key={ch.label}
              href={ch.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              whileHover={{ y: -2 }}
              className="group flex items-start gap-4 p-5 rounded-2xl border transition-all duration-300"
              style={{ background: '#FAFAF8', borderColor: '#F3F4F6' }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = '#10B98166'
                e.currentTarget.style.boxShadow = '0 8px 30px rgba(16,185,129,0.08)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = '#F3F4F6'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                style={{ background: '#D1FAE5', color: '#10B981' }}
              >
                {ch.icon}
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-sm mb-0.5" style={{ fontFamily: 'var(--font-syne)', color: '#111827' }}>
                  {ch.label}
                </p>
                <p className="text-sm font-medium mb-0.5 truncate" style={{ color: '#10B981' }}>{ch.value}</p>
                <p className="text-xs" style={{ color: '#9CA3AF' }}>{ch.description}</p>
              </div>
              <ArrowUpRight size={15} className="mt-1 shrink-0 transition-colors duration-200 group-hover:text-[#10B981]" style={{ color: '#9CA3AF' }} />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
