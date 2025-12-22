'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { PenTool, Package, Factory, CheckCircle, Truck } from 'lucide-react'

const steps = [
  {
    icon: PenTool,
    title: 'Design',
    description: 'Collaborate with our design team to create custom apparel that matches your brand vision',
  },
  {
    icon: Package,
    title: 'Fabric Sourcing',
    description: 'We source premium quality fabrics from trusted suppliers worldwide',
  },
  {
    icon: Factory,
    title: 'Manufacturing',
    description: 'State-of-the-art production facilities ensure precision and quality at scale',
  },
  {
    icon: CheckCircle,
    title: 'Quality Check',
    description: 'Rigorous quality control processes guarantee every garment meets international standards',
  },
  {
    icon: Truck,
    title: 'Packaging & Shipping',
    description: 'Professional packaging and reliable shipping to destinations worldwide',
  },
]

export default function Process() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="process" className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-navy-blue bg-clip-text text-transparent">
            Our Manufacturing Process
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A streamlined workflow from design to delivery
          </p>
        </motion.div>

        <div ref={ref} className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-navy-blue transform -translate-y-1/2" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 relative">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 text-center relative z-10">
                    <motion.div
                      className="w-16 h-16 mx-auto mb-4 bg-gradient-navy-blue rounded-full flex items-center justify-center text-white"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <Icon size={32} />
                    </motion.div>
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-navy-blue rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {index + 1}
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{step.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">{step.description}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

