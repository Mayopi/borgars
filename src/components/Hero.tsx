import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const [isRevealed, setIsRevealed] = useState(false);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Multiple Animated Background Layers */}
      <div className="absolute inset-0">
        {/* Base Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-burger-red/20" />
        
        {/* Animated Gradient Mesh */}
        <motion.div
          animate={{
            background: [
              'radial-gradient(circle at 20% 80%, rgba(194, 16, 16, 0.3) 0%, transparent 50%)',
              'radial-gradient(circle at 80% 20%, rgba(230, 72, 72, 0.3) 0%, transparent 50%)',
              'radial-gradient(circle at 40% 40%, rgba(194, 16, 16, 0.3) 0%, transparent 50%)',
              'radial-gradient(circle at 20% 80%, rgba(194, 16, 16, 0.3) 0%, transparent 50%)',
            ],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          className="absolute inset-0"
        />
        
        {/* Moving Image Background */}
        <motion.div
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'url(/assets/img/burger-image.jpg)',
            backgroundSize: 'cover',
            backgroundBlendMode: 'overlay',
          }}
        />
        
        {/* Animated Overlay Pattern */}
        <motion.div
          animate={{
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          className="absolute inset-0"
          style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              transparent,
              transparent 10px,
              rgba(194, 16, 16, 0.05) 10px,
              rgba(194, 16, 16, 0.05) 20px
            )`,
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4"
            >
              <span className="text-white">"Did You Lift?"</span>
            </motion.h1>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6"
            >
              Yeah I Lift...
            </motion.h1>

            <motion.div
              animate={{ height: isRevealed ? 'auto' : 0 }}
              className="overflow-hidden"
            >
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-8">
                This <span className="text-gradient">Burger</span> Into My Mouth
              </h1>
            </motion.div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsRevealed(!isRevealed)}
              className="burger-gradient text-white px-8 py-4 rounded-full font-bold text-lg shadow-2xl hover:shadow-burger-red/50 transition-all duration-300"
            >
              {isRevealed ? 'Hide' : 'Show'}
            </motion.button>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <motion.div
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: 'loop',
              }}
              className="relative"
            >
              <div className="glass-card p-4">
                <img
                  src="/assets/img/burger-image.jpg"
                  alt="Delicious Burger"
                  className="w-full rounded-xl shadow-2xl"
                />
              </div>
              <div className="absolute -z-10 inset-0 burger-gradient opacity-50 blur-3xl" />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <ChevronDown className="text-white/60" size={32} />
      </motion.div>
    </section>
  );
};

export default Hero;