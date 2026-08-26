'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Globe, ShoppingBag, Bot, LayoutDashboard, Smartphone, Palette, RefreshCw, Search } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'
import { services } from '@/data'

const iconMap: Record<string, React.ReactNode> = {
  Globe: <Globe size={22} />,
  ShoppingBag: <ShoppingBag size={22} />,
  Bot: <Bot size={22} />,
  LayoutDashboard: <LayoutDashboard size={22} />,
  Smartphone: <Smartphone size={22} />,
  Palette: <Palette size={22} />,
  RefreshCw: <RefreshCw size={22} />,
  Search: <Search size={22} />,
}

function ServiceCard({ service, index }: { service: (typeof services)[number]; index: number }) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      whileHover={{ y: -4 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="p-6 rounded-2xl transition-all duration-300 cursor-default"
      style={{
        background: 'var(--color-card)',
        border: `1px solid ${hovered ? 'var(--color-border-strong)' : 'var(--color-border)'}`,
        boxShadow: hovered ? '0 16px 36px -14px rgba(28,25,23,0.16)' : '0 1px 2px rgba(28,25,23,0.04)',
      }}
    >
      <div
        className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 transition-colors duration-300"
        style={{
          background: hovered ? 'var(--color-accent)' : 'var(--color-accent-soft)',
          color: hovered ? '#fff' : 'var(--color-accent-ink)',
        }}
      >
        {iconMap[service.icon]}
      </div>
      <h3 className="text-base font-semibold tracking-tight mb-2" style={{ fontFamily: 'var(--font-geist-sans)', color: 'var(--color-ink)' }}>
        {service.title}
      </h3>
      <p className="text-sm leading-relaxed" style={{ color: 'var(--color-muted)' }}>
        {service.description}
      </p>
    </motion.div>
  )
}

export default function Services() {
  return (
    <section id="services" className="py-24 px-6" style={{ background: 'var(--color-canvas)' }}>
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title="Services That Grow Your Business"
          subtitle="From a simple landing page to a full AI-powered platform — I build what your business needs to thrive online."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
