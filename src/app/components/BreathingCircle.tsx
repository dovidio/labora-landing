import { motion } from 'motion/react';

export function BreathingCircle() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Outer breathing circles */}
      <motion.div
        className="absolute w-64 h-64 rounded-full bg-pink-500/10 border border-pink-500/20"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.1, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute w-64 h-64 rounded-full bg-pink-500/10 border border-pink-500/20"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.1, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
      <motion.div
        className="absolute w-64 h-64 rounded-full bg-pink-500/10 border border-pink-500/20"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.1, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />
      
      {/* Center gradient circle */}
      <motion.div
        className="absolute w-48 h-48 rounded-full bg-gradient-to-br from-pink-400 to-rose-600"
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          boxShadow: "0 0 60px rgba(244, 114, 182, 0.4)",
        }}
      />
      
      {/* Inner white circle */}
      <motion.div
        className="absolute w-40 h-40 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center"
        animate={{
          scale: [1, 0.95, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="text-center">
          <motion.div
            animate={{
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="text-2xl">💗</div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
