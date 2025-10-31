import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, MapPin, Download } from 'lucide-react';
import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';

const heroImages = [
  'https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg?auto=compress&cs=tinysrgb&w=1920',
  'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1920',
  'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1920',
];

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleDownloadBrochure = () => {
    toast.success('Brochure download started!');
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60 z-10" />

      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
            className="absolute inset-0"
          >
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="w-full h-full bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url('${heroImages[currentImageIndex]}')`,
              }}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-20 h-full flex flex-col items-start justify-center text-left px-4 sm:px-6 md:px-12 lg:px-20 max-w-7xl pt-20 sm:pt-0"
      >
        <motion.h1
          variants={itemVariants}
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-2 sm:mb-4 leading-tight"
        >
          Birla 71
        </motion.h1>

        <motion.div
          variants={itemVariants}
          className="flex items-start sm:items-center space-x-1.5 sm:space-x-2 mb-3 sm:mb-6 text-white/90"
        >
          <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400 flex-shrink-0 mt-0.5 sm:mt-0" />
          <p className="text-xs sm:text-base md:text-lg lg:text-xl leading-tight sm:leading-normal">Sector 71 Gurugram Opposite to DLF Alameda</p>
        </motion.div>

        <motion.h2
          variants={itemVariants}
          className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 md:mb-6"
        >
          3 & 3.5 BHK Luxury Apartment
        </motion.h2>

        <motion.div variants={itemVariants} className="mb-3 sm:mb-6">
          <span className="inline-block px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 md:py-3 bg-gradient-to-r from-amber-400 to-amber-600 text-white text-sm sm:text-lg md:text-xl lg:text-2xl font-bold rounded-full">
            Starting Price: ₹ 3.70 Cr*
          </span>
        </motion.div>

        <motion.div variants={itemVariants} className="mb-4 sm:mb-6">
          <span className="inline-block text-white text-sm sm:text-base md:text-lg lg:text-xl font-medium">
            Sizes: 1850 - 2250 sq.ft.
          </span>
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="text-xs sm:text-sm md:text-base lg:text-lg text-white/90 mb-5 sm:mb-8 max-w-3xl leading-relaxed"
        >
          Discover a premium lifestyle crafted by Birla Estates in the heart of Gurgaon's thriving Sector 71. Designed for elegance, comfort, and convenience, Birla Sector 71 offers world-class residences for those who aspire for more.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-start w-full sm:w-auto"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(251, 191, 36, 0.5)' }}
            whileTap={{ scale: 0.95 }}
            onClick={handleDownloadBrochure}
            className="bg-gradient-to-r from-amber-400 to-amber-600 text-white px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 rounded-full font-semibold text-sm sm:text-base md:text-lg hover:shadow-xl transition-all flex items-center justify-center space-x-2 w-full sm:w-auto"
          >
            <Download className="w-4 h-4 sm:w-5 sm:h-5" />
            <span>Download Brochure</span>
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ delay: 1.5, repeat: Infinity, duration: 2 }}
          className="absolute bottom-4 sm:bottom-6 md:bottom-8 lg:bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-white" />
        </motion.div>
      </motion.div>
    </section>
  );
}
