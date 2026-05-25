'use client'
import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'
import { testimonials } from '@/data'

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 px-6" style={{ background: '#FAFAF8' }}>
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          label="Social Proof"
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
              style={{ background: '#F8F7F4', borderColor: '#F3F4F6' }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, idx) => (
                  <Star key={idx} size={13} style={{ fill: '#C9A43E', color: '#C9A43E' }} />
                ))}
              </div>

              <p className="text-sm leading-relaxed mb-6 italic" style={{ color: '#374151' }}>
                &ldquo;{t.quote}&rdquo;
              </p>

              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm shrink-0"
                  style={{ background: '#FDF3D7', color: '#C9A43E', fontFamily: 'var(--font-syne)' }}
                >
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-sm" style={{ fontFamily: 'var(--font-syne)', color: '#111827' }}>
                    {t.name}
                  </p>
                  <p className="text-xs" style={{ color: '#9CA3AF' }}>{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
