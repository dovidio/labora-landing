import { motion } from 'motion/react';
import { ReactNode } from 'react';

interface PhoneMockupProps {
  children: ReactNode;
  className?: string;
  floatingElements?: boolean;
}

export function PhoneMockup({ children, className = '', floatingElements = false }: PhoneMockupProps) {
  return (
    <div className={`relative ${className}`}>
      {floatingElements && (
        <>
          {/* Floating UI Elements */}
          <motion.div
            className="absolute -left-8 top-1/4 w-16 h-16 bg-gradient-to-br from-indigo-400 to-indigo-600 rounded-2xl shadow-2xl"
            animate={{
              y: [0, -20, 0],
              rotate: [0, 10, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute -right-12 top-1/3 w-20 h-20 bg-gradient-to-br from-pink-300 to-coral-400 rounded-full shadow-2xl"
            style={{ backgroundColor: '#F6D1C6' }}
            animate={{
              y: [0, 25, 0],
              x: [0, 10, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
          />
          <motion.div
            className="absolute -left-6 bottom-1/4 w-12 h-12 rounded-xl shadow-2xl"
            style={{ backgroundColor: '#E6EEFF' }}
            animate={{
              y: [0, -15, 0],
              rotate: [0, -15, 0],
            }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />
        </>
      )}
      
      {/* iPhone Frame */}
      <div className="relative mx-auto" style={{ width: '340px', height: '694px' }}>
        {/* Phone body */}
        <div className="absolute inset-0 bg-gray-900 rounded-[60px] shadow-2xl border-8 border-gray-800">
          {/* Notch */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-7 bg-gray-900 rounded-b-3xl z-10" />
          
          {/* Screen */}
          <div className="absolute inset-0 m-2 bg-white rounded-[52px] overflow-hidden">
            {children}
          </div>
        </div>
        
        {/* Glare effect */}
        <div className="absolute inset-0 rounded-[60px] bg-gradient-to-br from-white/20 via-transparent to-transparent pointer-events-none" />
      </div>
    </div>
  );
}
