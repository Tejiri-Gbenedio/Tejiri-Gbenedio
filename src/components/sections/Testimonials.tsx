'use client'
import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'
import { testimonials } from '@/data'

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 px-6" style={{ background: 'var(--color-surface-alt)' }}>
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title="What Clients Say"
          subtitle="Real feedback from real clients."
          centered
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="relative p-7 rounded-2xl border transition-all duration-300"
              style={{ background: 'var(--color-card)', borderColor: 'var(--color-border)', boxShadow: '0 1px 2px rgba(28,25,23,0.04)' }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4" role="img" aria-label={`${t.rating} out of 5 stars`}>
                {Array.from({ length: t.rating }).map((_, idx) => (
                  <Star key={idx} size={13} aria-hidden="true" style={{ fill: 'var(--color-accent)', color: 'var(--color-accent)' }} />
                ))}
              </div>

              <p className="text-sm leading-relaxed mb-6" style={{ color: 'var(--color-muted)' }}>
                &ldquo;{t.quote}&rdquo;
              </p>

              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center font-semibold text-sm shrink-0"
                  style={{ background: 'var(--color-accent-soft)', color: 'var(--color-accent-ink)', fontFamily: 'var(--font-geist-sans)' }}
                >
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-sm" style={{ fontFamily: 'var(--font-geist-sans)', color: 'var(--color-ink)' }}>
                    {t.name}
                  </p>
                  <p className="text-xs" style={{ color: 'var(--color-subtle)' }}>{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
