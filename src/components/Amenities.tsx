import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Dumbbell, Waves, TreePine, Zap, Shield, Car, Users, Sparkles } from 'lucide-react';

const amenities = [
  { icon: Dumbbell, title: 'Fitness Center', description: 'State-of-the-art gym with modern equipment' },
  { icon: Waves, title: 'Swimming Pool', description: 'Olympic-sized infinity pool with lounge area' },
  { icon: TreePine, title: 'Landscaped Gardens', description: 'Beautifully manicured green spaces' },
  { icon: Zap, title: 'Power Backup', description: '100% power backup for uninterrupted living' },
  { icon: Shield, title: '24/7 Security', description: 'Advanced security systems and personnel' },
  { icon: Car, title: 'Ample Parking', description: 'Reserved parking with EV charging stations' },
  { icon: Users, title: 'Clubhouse', description: 'Premium clubhouse with entertainment facilities' },
  { icon: Sparkles, title: 'Concierge Service', description: 'Personalized services at your doorstep' },
];

export default function Amenities() {
  const containerRef = useRef(null);
  const contentRef = useRef(null);
  const isInView = useInView(contentRef, { once: true, margin: '-100px' });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

  return (
    <section id="amenities" ref={containerRef} className="relative py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden z-10">
      <motion.div
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        <div
          className="w-full h-full bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: "url('https://images.pexels.com/photos/1178994/pexels-photo-1178994.jpeg?auto=compress&cs=tinysrgb&w=1920')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/95 via-gray-900/90 to-gray-900/95" />
      </motion.div>

      <div ref={contentRef} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <p className="text-amber-400 tracking-widest text-xs sm:text-sm font-semibold uppercase mb-3 sm:mb-4">
            World-Class Amenities
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white px-4">
            Every Comfort, <span className="text-amber-400">Every Luxury</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {amenities.map((amenity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.05 }}
              className="bg-white/10 backdrop-blur-lg rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/20 hover:bg-white/15 transition-all duration-500 group"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg sm:rounded-xl flex items-center justify-center mb-3 sm:mb-4 group-hover:shadow-xl group-hover:shadow-amber-500/50 transition-all"
              >
                <amenity.icon className="text-white" size={20} />
              </motion.div>

              <h3 className="text-base sm:text-lg lg:text-xl font-bold text-white mb-1 sm:mb-2">{amenity.title}</h3>
              <p className="text-gray-300 text-xs sm:text-sm">{amenity.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-8 sm:mt-12 md:mt-16"
        >
          <p className="text-gray-300 text-sm sm:text-base lg:text-lg mb-4 sm:mb-6 px-4">And 40+ more premium amenities designed for your comfort</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const contactSection = document.getElementById('contact');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="bg-gradient-to-r from-amber-400 to-amber-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:shadow-2xl hover:shadow-amber-500/50 transition-all"
          >
            View Complete List
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
