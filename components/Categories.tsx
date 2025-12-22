'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const categories = [
  {
    name: 'Sportswear',
    slug: 'sportswear',
    description: 'High-performance athletic apparel for professional and recreational sports',
    image: '/assets/sports wear/IMG-20251220-WA0014.jpg',
  },
  {
    name: 'Winter Wear',
    slug: 'winter-wear',
    description: 'Warm and durable winter clothing for cold weather conditions',
    image: '/assets/winter wear/IMG-20251220-WA0173.jpg',
  },
  {
    name: 'Summer Wear',
    slug: 'summer-wear',
    description: 'Lightweight and breathable summer clothing for comfort',
    image: '/assets/summer wear/IMG-20251220-WA0034.jpg',
  },
  {
    name: 'Street Wear',
    slug: 'street-wear',
    description: 'Trendy urban fashion for the modern lifestyle',
    image: '/assets/street wear/IMG-20251220-WA0060.jpg',
  },
  {
    name: 'Leisure Wear',
    slug: 'leisure-wear',
    description: 'Comfortable casual wear for everyday activities',
    image: '/assets/leisure wear/IMG-20251220-WA0150.jpg',
  },
  {
    name: 'Rain Wear',
    slug: 'rain-wear',
    description: 'Waterproof and weather-resistant protective clothing',
    image: '/assets/rain wear/IMG-20251220-WA0134.jpg',
  },
  {
    name: 'Gym Wear',
    slug: 'gym-wear',
    description: 'Flexible and durable workout apparel for fitness enthusiasts',
    image: '/assets/gym wear/IMG-20251220-WA0083.jpg',
  },
  {
    name: 'Caps & Beanies',
    slug: 'caps-and-beanies',
    description: 'Stylish headwear for all seasons and occasions',
    image: '/assets/caps and beanies/IMG-20251220-WA0112.jpg',
  },
]

export default function Categories() {
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
    <section id="categories" className="py-28 bg-gradient-to-b from-white via-gray-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block mb-4"
          >
            <span className="px-4 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm font-semibold">
              PRODUCT CATEGORIES
            </span>
          </motion.div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-navy-blue bg-clip-text text-transparent">
            Our Product Categories
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Explore our comprehensive range of premium garment manufacturing solutions
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              variants={itemVariants}
              className="group relative bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-700"
              whileHover={{ y: -12, scale: 1.02 }}
            >
              <div className="relative h-72 overflow-hidden">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover group-hover:scale-115 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs font-semibold border border-white/30">
                    NEW
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-3xl font-bold text-white mb-2 drop-shadow-lg">{category.name}</h3>
                </div>
              </div>
              <div className="p-8">
                <p className="text-gray-600 dark:text-gray-400 mb-6 text-lg leading-relaxed">{category.description}</p>
                <Link href={`/categories/${category.slug}`}>
                  <motion.div
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-navy-blue text-white rounded-full font-semibold group-hover:gap-4 transition-all shadow-lg hover:shadow-xl cursor-pointer"
                    whileHover={{ x: 5, scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Details
                    <ArrowRight size={18} />
                  </motion.div>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
