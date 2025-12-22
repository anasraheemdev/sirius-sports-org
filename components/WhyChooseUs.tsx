'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Package, Tag, Clock, Globe, Award, Shirt } from 'lucide-react'

const features = [
  {
    icon: Package,
    title: 'Bulk Manufacturing',
    description: 'Large-scale production capacity to meet high-volume orders efficiently',
  },
  {
    icon: Tag,
    title: 'Custom Branding',
    description: 'Full OEM and private label services with your brand identity',
  },
  {
    icon: Clock,
    title: 'Timely Delivery',
    description: 'Commitment to on-time delivery with reliable production schedules',
  },
  {
    icon: Globe,
    title: 'Global Shipping',
    description: 'Worldwide shipping network ensuring your products reach anywhere',
  },
  {
    icon: Award,
    title: 'Premium Quality Fabrics',
    description: 'Only the finest materials sourced from trusted international suppliers',
  },
  {
    icon: Shirt,
    title: 'Expert Craftsmanship',
    description: 'Skilled artisans and modern technology for superior garment quality',
  },
]

export default function WhyChooseUs() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  }

  return (
    <section className="py-24 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-navy-blue bg-clip-text text-transparent">
            Why Choose Us
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            What sets Sirius Sports apart in the garment manufacturing industry
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.title}
                variants={itemVariants}
                className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-8 hover:shadow-xl transition-all duration-300"
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="w-14 h-14 bg-gradient-navy-blue rounded-xl flex items-center justify-center text-white mb-4">
                  <Icon size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

