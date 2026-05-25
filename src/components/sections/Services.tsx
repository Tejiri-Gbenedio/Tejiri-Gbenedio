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
      className="p-6 rounded-2xl border transition-all duration-300 cursor-default"
      style={{
        background: '#F8F7F4',
        borderColor: hovered ? '#10B98166' : '#F3F4F6',
        boxShadow: hovered ? '0 8px 30px rgba(16,185,129,0.08)' : 'none',
      }}
    >
      <div
        className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 transition-colors duration-300"
        style={{
          background: hovered ? '#10B981' : '#D1FAE5',
          color: hovered ? '#fff' : '#10B981',
        }}
      >
        {iconMap[service.icon]}
      </div>
      <h3 className="font-bold text-base mb-2" style={{ fontFamily: 'var(--font-syne)', color: '#111827' }}>
        {service.title}
      </h3>
      <p className="text-sm leading-relaxed" style={{ color: '#6B7280' }}>
        {service.description}
      </p>
    </motion.div>
  )
}

export default function Services() {
  return (
    <section id="services" className="py-24 px-6" style={{ background: '#FAFAF8' }}>
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          label="What I Do"
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
