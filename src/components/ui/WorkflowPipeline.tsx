'use client'

import React from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, ArrowDown, Cpu, Sparkles } from 'lucide-react'
import { useMotionPreference } from '@/components/motion/MotionProvider'

interface WorkflowPipelineProps {
  nodes: string[]
  className?: string
}

export default function WorkflowPipeline({ nodes, className = '' }: WorkflowPipelineProps) {
  const systemReduced = useReducedMotion()
  const { isReduced } = useMotionPreference()
  const shouldReduce = isReduced || systemReduced

  return (
    <div className={`w-full overflow-hidden ${className}`}>
      {/* Desktop (>=1024px): Single horizontal row with flex-1 cards and compact connectors */}
      <div className="hidden md:flex items-center lg:flex-nowrap flex-wrap gap-y-4 gap-x-1 lg:gap-x-1.5 w-full">
        {nodes.map((node, index) => {
          const isFirst = index === 0
          const isLast = index === nodes.length - 1

          return (
            <React.Fragment key={index}>
              {/* Pipeline Node Card */}
              <motion.div
                initial={shouldReduce ? { opacity: 0 } : { opacity: 0, y: 16 }}
                whileInView={shouldReduce ? { opacity: 1 } : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: shouldReduce ? 0.2 : 0.5,
                  delay: shouldReduce ? 0 : index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`relative group px-3.5 py-3 rounded-xl border transition-all duration-300 flex-1 min-w-[140px] ${
                  isFirst
                    ? 'border-[#D4AF37]/50 bg-[#18181B] shadow-[0_0_15px_rgba(212,175,55,0.1)]'
                    : isLast
                    ? 'border-[#10B981]/50 bg-[#121214] shadow-[0_0_15px_rgba(16,185,129,0.1)]'
                    : 'border-[#222226] bg-[#121214] hover:border-[#323238] hover:bg-[#18181B]'
                }`}
              >
                <div className="flex items-center justify-between gap-1 mb-1.5">
                  <span
                    className={`text-xs font-mono tracking-widest uppercase font-semibold ${
                      isFirst
                        ? 'text-[#D4AF37]'
                        : isLast
                        ? 'text-[#10B981]'
                        : 'text-[#8E8E93]'
                    }`}
                  >
                    Node 0{index + 1}
                  </span>
                  {isFirst && <Sparkles size={13} className="text-[#D4AF37] shrink-0" />}
                  {isLast && <Cpu size={13} className="text-[#10B981] shrink-0" />}
                </div>
                <p className="text-xs sm:text-sm lg:text-[13px] xl:text-sm font-mono font-medium text-[#F4F4F0] leading-snug break-words">
                  {node}
                </p>
              </motion.div>

              {/* Animated Connector Arrow */}
              {!isLast && (
                <motion.div
                  initial={shouldReduce ? { opacity: 0 } : { opacity: 0, scale: 0.7 }}
                  whileInView={shouldReduce ? { opacity: 1 } : { opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: shouldReduce ? 0.2 : 0.4,
                    delay: shouldReduce ? 0 : index * 0.1 + 0.05,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="flex items-center justify-center px-1 lg:px-1.5 shrink-0 text-[#8E8E93]/60"
                >
                  <ArrowRight size={16} className="text-[#D4AF37]/80" />
                </motion.div>
              )}
            </React.Fragment>
          )
        })}
      </div>

      {/* Mobile: Clean vertical timeline stack */}
      <div className="md:hidden space-y-2">
        {nodes.map((node, index) => {
          const isFirst = index === 0
          const isLast = index === nodes.length - 1

          return (
            <div key={index} className="flex flex-col items-start">
              <motion.div
                initial={shouldReduce ? { opacity: 0 } : { opacity: 0, y: 12 }}
                whileInView={shouldReduce ? { opacity: 1 } : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: shouldReduce ? 0.2 : 0.4,
                  delay: shouldReduce ? 0 : index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`w-full p-3 rounded-lg border text-left ${
                  isFirst
                    ? 'border-[#D4AF37]/50 bg-[#18181B]'
                    : isLast
                    ? 'border-[#10B981]/50 bg-[#121214]'
                    : 'border-[#222226] bg-[#121214]'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span
                    className={`text-xs font-mono tracking-wider uppercase font-semibold ${
                      isFirst ? 'text-[#D4AF37]' : isLast ? 'text-[#10B981]' : 'text-[#8E8E93]'
                    }`}
                  >
                    Step 0{index + 1}
                  </span>
                  {isFirst && <Sparkles size={12} className="text-[#D4AF37]" />}
                  {isLast && <Cpu size={12} className="text-[#10B981]" />}
                </div>
                <p className="text-sm font-mono font-medium text-[#F4F4F0]">{node}</p>
              </motion.div>

              {!isLast && (
                <div className="w-full flex justify-center py-1">
                  <ArrowDown size={14} className="text-[#D4AF37]/60" />
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
