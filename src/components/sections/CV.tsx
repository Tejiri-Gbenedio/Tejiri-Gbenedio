'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Download, Eye, FileText } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'
import { cv } from '@/data'

export default function CV() {
  return (
    <section id="cv" className="py-24 px-6" style={{ background: '#FAFAF8' }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <SectionHeading
              label="My CV"
              title="Download My Professional CV"
              subtitle="For recruiters, clients, and teams who want the full picture of my experience and background."
            />

            <div
              className="p-6 rounded-2xl border mb-8"
              style={{ background: '#F8F7F4', borderColor: '#E5E7EB' }}
            >
              <div className="flex items-start gap-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: '#D1FAE5', color: '#059669' }}
                >
                  <FileText size={22} aria-hidden="true" />
                </div>
                <div>
                  <h3
                    className="font-bold text-lg mb-1"
                    style={{ fontFamily: 'var(--font-syne)', color: '#111827' }}
                  >
                    {cv.title}
                  </h3>
                  <p className="text-sm font-medium mb-2" style={{ color: '#10B981' }}>
                    {cv.role}
                  </p>
                  <p className="text-sm leading-relaxed" style={{ color: '#6B7280' }}>
                    {cv.summary}
                  </p>
                  <p className="text-xs mt-4 uppercase tracking-widest" style={{ color: '#9CA3AF', fontFamily: 'var(--font-syne)' }}>
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
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold transition-opacity hover:opacity-90"
                style={{ background: '#10B981', color: '#fff', fontFamily: 'var(--font-syne)' }}
              >
                <Eye size={17} aria-hidden="true" />
                View CV
              </a>
              <a
                href={cv.file}
                download={cv.fileName}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold border-2 transition-colors duration-200 hover:bg-[#111827] hover:text-white"
                style={{ borderColor: '#111827', color: '#111827', fontFamily: 'var(--font-syne)' }}
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
            className="group relative block mx-auto w-full max-w-[420px]"
            style={{ isolation: 'isolate' }}
            aria-label="Open Tejiri Gbenedio CV PDF in a new tab"
          >
            <motion.div
              className="absolute inset-0 rounded-2xl"
              style={{ background: 'rgba(16,185,129,0.36)', zIndex: 0 }}
              animate={{ x: [-10, 4, 10, -10], y: [-10, 8, -2, -10] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
            />
            <motion.div
              className="absolute inset-0 rounded-2xl"
              style={{ background: 'rgba(201,164,62,0.34)', zIndex: 0 }}
              animate={{ x: [10, -8, 5, 10], y: [10, -4, -10, 10] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
            />
            <div
              className="relative overflow-hidden rounded-2xl border shadow-xl transition-transform duration-300 group-hover:-translate-y-1"
              style={{ background: '#fff', borderColor: '#E5E7EB', zIndex: 1 }}
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
