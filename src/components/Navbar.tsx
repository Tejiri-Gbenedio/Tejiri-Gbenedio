'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { label: 'Home', href: '#hero', isAnchor: true },
  { label: 'Projects', href: '#projects', isAnchor: true },
  { label: 'Automations', href: '/automations', isAnchor: false },
  { label: 'Services', href: '#services', isAnchor: true },
  { label: 'About', href: '#about', isAnchor: true },
  { label: 'CV', href: '#cv', isAnchor: true },
  { label: 'Contact', href: '#contact', isAnchor: true },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const handleAnchorClick = (href: string) => {
    setOpen(false)
    if (pathname === '/') {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
    } else {
      window.location.href = '/' + href
    }
  }

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(250,248,245,0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--color-border)' : '1px solid transparent',
      }}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between" aria-label="Main navigation">
        <button
          onClick={() => handleAnchorClick('#hero')}
          className="text-lg font-bold tracking-tight"
          style={{ fontFamily: 'var(--font-geist-sans)', color: 'var(--color-ink)' }}
        >
          Tejiri<span style={{ color: 'var(--color-accent-ink)' }}>.Dev</span>
        </button>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              {l.isAnchor ? (
                <button
                  onClick={() => handleAnchorClick(l.href)}
                  className="text-sm transition-colors duration-200 hover:text-[#C9622E]"
                  style={{ color: 'var(--color-muted)' }}
                >
                  {l.label}
                </button>
              ) : (
                <Link
                  href={l.href}
                  className="text-sm transition-colors duration-200 hover:text-[#C9622E]"
                  style={{ color: 'var(--color-muted)' }}
                >
                  {l.label}
                </Link>
              )}
            </li>
          ))}
        </ul>

        <button
          onClick={() => handleAnchorClick('#contact')}
          className="hidden md:inline-flex items-center px-5 py-2 rounded-[10px] text-sm font-semibold text-white transition-colors duration-200 hover:bg-[#8A4A2A]"
          style={{ background: 'var(--color-accent)', fontFamily: 'var(--font-geist-sans)' }}
        >
          Hire Me
        </button>

        {/* Mobile toggle */}
        <button
          className="md:hidden"
          style={{ color: 'var(--color-ink)' }}
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
        >
          {open ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-nav"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden border-t"
            style={{ background: 'var(--color-canvas)', borderColor: 'var(--color-border)' }}
          >
            <ul className="px-6 py-5 space-y-4">
              {links.map((l) => (
                <li key={l.href}>
                  {l.isAnchor ? (
                    <button
                      onClick={() => handleAnchorClick(l.href)}
                      className="text-base w-full text-left transition-colors hover:text-[#C9622E]"
                      style={{ color: 'var(--color-ink)', fontFamily: 'var(--font-geist-sans)' }}
                    >
                      {l.label}
                    </button>
                  ) : (
                    <Link
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="text-base block w-full transition-colors hover:text-[#C9622E]"
                      style={{ color: 'var(--color-ink)', fontFamily: 'var(--font-geist-sans)' }}
                    >
                      {l.label}
                    </Link>
                  )}
                </li>
              ))}
              <li>
                <button
                  onClick={() => handleAnchorClick('#contact')}
                  className="w-full mt-2 py-3 rounded-[10px] text-sm font-semibold text-white"
                  style={{ background: 'var(--color-accent)', fontFamily: 'var(--font-geist-sans)' }}
                >
                  Hire Me
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
