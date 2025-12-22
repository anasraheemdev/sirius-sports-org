'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { Factory, Users, Globe, Award } from 'lucide-react'

const stats = [
  { icon: Factory, value: 15, label: 'Years of Experience', suffix: '+' },
  { icon: Users, value: 500, label: 'Clients Served', suffix: '+' },
  { icon: Globe, value: 50, label: 'Countries Exported To', suffix: '+' },
  { icon: Award, value: 100, label: 'Quality Certifications', suffix: '%' },
]

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (isInView) {
      const duration = 2000
      const steps = 60
      const increment = value / steps
      const interval = setInterval(() => {
        setCount((prev: number) => {
          const next = prev + increment
          if (next >= value) {
            clearInterval(interval)
            return value
          }
          return next
        })
      }, duration / steps)
      return () => clearInterval(interval)
    }
  }, [isInView, value])

  return (
    <span ref={ref}>
      {Math.floor(count)}{suffix}
    </span>
  )
}

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="py-24 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-navy-blue bg-clip-text text-transparent">
            About Sirius Sports
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A leading B2B garment manufacturing company delivering excellence in custom apparel solutions
          </p>
        </motion.div>

        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
              Your Trusted Manufacturing Partner
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              Sirius Sports is a professional B2B garment manufacturer based in Sialkot, Pakistan, 
              specializing in large-scale production of premium apparel for global brands. With years 
              of experience in OEM and private label manufacturing, we deliver custom apparel solutions 
              that meet the highest international standards.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              Our commitment to quality, timely delivery, and customer satisfaction has made us a 
              preferred partner for brands worldwide. We combine traditional craftsmanship with modern 
              manufacturing techniques to produce garments that exceed expectations.
            </p>
            <div className="flex flex-wrap gap-4">
              <span className="px-4 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full font-semibold">
                Bulk Manufacturing
              </span>
              <span className="px-4 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full font-semibold">
                OEM/Private Label
              </span>
              <span className="px-4 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full font-semibold">
                Global Exports
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="bg-gradient-navy-blue p-6 rounded-2xl text-white text-center shadow-xl"
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <Icon className="mx-auto mb-4" size={32} />
                  <div className="text-4xl font-bold mb-2">
                    <Counter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-sm opacity-90">{stat.label}</div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

