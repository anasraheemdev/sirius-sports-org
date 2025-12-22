'use client'

import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import { useState } from 'react'

export default function WhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Pulsing Ring Animation */}
      <motion.div
        className="absolute inset-0 bg-green-500 rounded-full"
        animate={{
          scale: [1, 1.5, 1.5],
          opacity: [0.7, 0, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeOut',
        }}
      />

      {/* Tooltip */}
      <motion.div
        initial={{ opacity: 0, x: 10 }}
        animate={{
          opacity: isHovered ? 1 : 0,
          x: isHovered ? 0 : 10,
        }}
        transition={{ duration: 0.3 }}
        className="absolute right-full mr-4 top-1/2 transform -translate-y-1/2 whitespace-nowrap"
      >
        <div className="bg-gray-900 dark:bg-gray-800 text-white px-4 py-2 rounded-lg shadow-xl text-sm font-semibold relative">
          <span>Chat with us on WhatsApp</span>
          <div className="absolute right-0 top-1/2 transform translate-x-full -translate-y-1/2">
            <div className="w-0 h-0 border-t-8 border-t-transparent border-l-8 border-l-gray-900 dark:border-l-gray-800 border-b-8 border-b-transparent" />
          </div>
        </div>
      </motion.div>

      {/* Notification Badge */}
      <motion.div
        className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center"
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <span className="text-white text-xs font-bold">1</span>
      </motion.div>

      {/* Main Button */}
      <motion.a
        href="https://wa.me/923177245991"
        target="_blank"
        rel="noopener noreferrer"
        className="relative w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full shadow-2xl flex items-center justify-center text-white overflow-hidden group"
        initial={{ scale: 0, opacity: 0, rotate: -180 }}
        animate={{ 
          scale: 1, 
          opacity: 1, 
          rotate: 0,
          y: [0, -5, 0],
        }}
        transition={{ 
          delay: 1, 
          type: 'spring', 
          stiffness: 200,
          y: {
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }
        }}
        whileHover={{ 
          scale: 1.15, 
          y: -8,
          rotate: [0, -10, 10, -10, 10, 0],
        }}
        whileTap={{ scale: 0.95 }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        {/* Shine Effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
          animate={{
            x: ['-100%', '200%'],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'linear',
            repeatDelay: 1,
          }}
        />

        {/* WhatsApp Icon */}
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <MessageCircle size={28} className="relative z-10" />
        </motion.div>

        {/* Ripple Effect on Click */}
        <motion.div
          className="absolute inset-0 bg-white rounded-full"
          initial={{ scale: 0, opacity: 0.5 }}
          whileTap={{
            scale: 2,
            opacity: 0,
          }}
          transition={{ duration: 0.6 }}
        />
      </motion.a>

      {/* Floating Particles */}
      {isHovered && (
        <>
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-green-400 rounded-full"
              initial={{
                x: 32,
                y: 32,
                scale: 0,
                opacity: 1,
              }}
              animate={{
                x: 32 + Math.cos((i * 60) * Math.PI / 180) * 40,
                y: 32 + Math.sin((i * 60) * Math.PI / 180) * 40,
                scale: [0, 1, 0],
                opacity: [1, 1, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.1,
              }}
            />
          ))}
        </>
      )}
    </div>
  )
}

