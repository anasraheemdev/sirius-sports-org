'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'John Smith',
    company: 'Global Sports Inc.',
    role: 'CEO',
    content: 'Sirius Sports has been our trusted manufacturing partner for over 5 years. Their quality, reliability, and attention to detail are unmatched.',
    rating: 5,
  },
  {
    name: 'Sarah Johnson',
    company: 'Urban Fashion Co.',
    role: 'Procurement Director',
    content: 'Working with Sirius Sports transformed our supply chain. They deliver on time, every time, with exceptional quality that our customers love.',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    company: 'Athletic Brands Ltd.',
    role: 'Operations Manager',
    content: 'The team at Sirius Sports understands our needs and goes above and beyond. Their custom branding services are top-notch.',
    rating: 5,
  },
  {
    name: 'Emma Williams',
    company: 'Retail Solutions Group',
    role: 'Brand Manager',
    content: 'From design to delivery, Sirius Sports provides a seamless experience. Their expertise in bulk manufacturing is impressive.',
    rating: 5,
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-24 bg-gradient-navy-blue">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            What Our Clients Say
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Trusted by brands worldwide for quality and reliability
          </p>
        </motion.div>

        <div className="relative h-96">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 bg-white/10 backdrop-blur-md rounded-2xl p-8 md:p-12"
            >
              <Quote className="text-white/30 mb-4" size={48} />
              <p className="text-xl md:text-2xl text-white mb-8 leading-relaxed">
                "{testimonials[currentIndex].content}"
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-xl font-bold text-white mb-1">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-blue-200">
                    {testimonials[currentIndex].role}, {testimonials[currentIndex].company}
                  </p>
                </div>
                <div className="flex gap-1">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-2xl">★</span>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentIndex
                  ? 'bg-white w-8'
                  : 'bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

