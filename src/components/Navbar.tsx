'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ArrowUpRight } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Projects', href: '/projects' },
  { label: 'Automations', href: '/automations' },
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'CV', href: '/cv' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false)
  }, [pathname])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0A0A0B]/90 backdrop-blur-md border-b border-[#222226] py-4'
          : 'bg-transparent border-b border-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Left: Brand + Status Pill */}
        <div className="flex items-center gap-3 sm:gap-4">
          <Link
            href="/"
            className="group flex items-center gap-1 text-xl md:text-2xl font-bold tracking-tight text-[#F4F4F0] transition-colors"
          >
            <span>Tejiri</span>
            <span className="text-[#D4AF37] transition-colors group-hover:text-[#E5A93C]">.Dev</span>
          </Link>

          {/* Availability Pill */}
          <div
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#222226] bg-[#121214]/90 text-xs md:text-sm font-sans font-medium text-[#A1A1AA]"
            title="Available for high-impact contracts & full-stack AI systems"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10B981]" />
            </span>
            <span className="hidden sm:inline">Live · Available for Projects</span>
            <span className="sm:hidden">Available</span>
          </div>
        </div>

        {/* Desktop Nav Links: Title Case, font-sans, text-[15px] md:text-base font-medium */}
        <nav className="hidden lg:flex items-center gap-1 bg-[#121214]/75 border border-[#222226] px-4 py-1.5 rounded-full backdrop-blur-md">
          {navLinks.map((link) => {
            const isActive =
              link.href === '/'
                ? pathname === '/'
                : pathname?.startsWith(link.href)

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 font-sans text-[15px] md:text-base font-medium tracking-normal transition-colors duration-200 rounded-full ${
                  isActive
                    ? 'text-[#F4F4F0] font-semibold'
                    : 'text-[#A1A1AA] hover:text-[#F4F4F0]'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="navbar-active-pill"
                    className="absolute inset-0 bg-[#18181B] border border-[#323238] rounded-full -z-10 shadow-sm"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                {link.label}
              </Link>
            )
          })}
        </nav>

        {/* Right Desktop CTA: text-xs md:text-sm with generous padding */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="https://wa.me/2347084721120"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs md:text-sm font-sans font-semibold bg-[#D4AF37] text-[#0A0A0B] hover:bg-[#E5A93C] transition-all duration-200 active:scale-95 shadow-[0_0_20px_rgba(212,175,55,0.18)]"
          >
            <span>Let&apos;s Have A Talk</span>
            <ArrowUpRight size={16} className="text-[#0A0A0B]" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2.5 text-[#A1A1AA] hover:text-[#F4F4F0] border border-[#222226] bg-[#121214] rounded-lg transition-colors"
          aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden overflow-hidden bg-[#0A0A0B] border-b border-[#222226]"
          >
            <div className="max-w-7xl mx-auto px-6 py-6 space-y-4">
              <div className="grid grid-cols-2 gap-2.5">
                {navLinks.map((link) => {
                  const isActive =
                    link.href === '/'
                      ? pathname === '/'
                      : pathname?.startsWith(link.href)

                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`px-4 py-3 rounded-lg text-base font-sans font-medium border transition-all ${
                        isActive
                          ? 'bg-[#18181B] border-[#D4AF37]/60 text-[#D4AF37] font-semibold'
                          : 'bg-[#121214] border-[#222226] text-[#A1A1AA] hover:text-[#F4F4F0]'
                      }`}
                    >
                      {link.label}
                    </Link>
                  )
                })}
              </div>

              {/* Mobile CTA */}
              <div className="pt-2">
                <a
                  href="https://wa.me/2347084721120"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-4 rounded-lg text-base font-sans font-semibold bg-[#D4AF37] text-[#0A0A0B] active:scale-[0.98] transition-all shadow-[0_0_25px_rgba(212,175,55,0.22)]"
                >
                  <span>Let&apos;s Have A Talk</span>
                  <ArrowUpRight size={18} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
