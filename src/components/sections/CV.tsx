'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Download, Eye, FileText } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'
import { cv } from '@/data'

export default function CV() {
  return (
    <section id="cv" className="py-24 px-6" style={{ background: 'var(--color-surface-alt)' }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <SectionHeading
              title="Download My Professional CV"
              subtitle="For recruiters, clients, and teams who want the full picture of my experience and background."
            />

            <div
              className="p-6 rounded-2xl border mb-8"
              style={{ background: 'var(--color-card)', borderColor: 'var(--color-border)' }}
            >
              <div className="flex items-start gap-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: 'var(--color-accent-soft)', color: 'var(--color-accent-ink)' }}
                >
                  <FileText size={22} aria-hidden="true" />
                </div>
                <div>
                  <h3
                    className="font-semibold text-lg mb-1 tracking-tight"
                    style={{ fontFamily: 'var(--font-geist-sans)', color: 'var(--color-ink)' }}
                  >
                    {cv.title}
                  </h3>
                  <p className="text-sm font-medium mb-2" style={{ color: 'var(--color-accent-ink)' }}>
                    {cv.role}
                  </p>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--color-muted)' }}>
                    {cv.summary}
                  </p>
                  <p className="text-xs mt-4 uppercase tracking-widest" style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-mono)' }}>
                    Updated {cv.updated}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href={cv.file}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-[10px] text-sm font-semibold transition-colors duration-200 hover:bg-[#8A4A2A]"
                style={{ background: 'var(--color-accent)', color: '#fff', fontFamily: 'var(--font-geist-sans)' }}
              >
                <Eye size={17} aria-hidden="true" />
                View CV
              </a>
              <a
                href={cv.file}
                download={cv.fileName}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-[10px] text-sm font-semibold border transition-colors duration-200 hover:bg-[#1C1917] hover:text-white"
                style={{ borderColor: 'var(--color-ink)', color: 'var(--color-ink)', fontFamily: 'var(--font-geist-sans)' }}
              >
                <Download size={17} aria-hidden="true" />
                Download CV
              </a>
            </div>
          </motion.div>

          <motion.a
            href={cv.file}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ y: -4 }}
            className="group relative block mx-auto w-full max-w-[420px]"
            aria-label="Open Tejiri Gbenedio CV PDF in a new tab"
          >
            <div
              className="relative overflow-hidden rounded-2xl border transition-all duration-300"
              style={{
                background: '#fff',
                borderColor: 'var(--color-border)',
                boxShadow: '0 24px 60px -20px rgba(28,25,23,0.28)',
              }}
            >
              <Image
                src={cv.previewImage}
                alt="Preview of Tejiri Gbenedio CV"
                width={1191}
                height={1685}
                sizes="(max-width: 1024px) 90vw, 420px"
                className="h-auto w-full"
                priority={false}
              />
            </div>
          </motion.a>
        </div>
      </div>
    </section>
  )
}
