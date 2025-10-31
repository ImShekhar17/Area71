import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Building2, Home, Layers, Users } from 'lucide-react';

const highlights = [
  { icon: Home, value: '3 & 3.5 BHK', label: 'Sizes', description: '' },
  { icon: Building2, value: '5', label: 'Iconic Towers', description: '' },
  { icon: Layers, value: '35 - 40', label: 'Floors', description: '' },
  { icon: Users, value: '2', label: 'Exclusive Clubhouses', description: '' },
  { icon: Building2, value: '5.5 Acres', label: 'Land Parcel', description: '' },
];

export default function Highlights() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="highlights" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <p className="text-amber-500 tracking-widest text-xs sm:text-sm font-semibold uppercase mb-3 sm:mb-4">
            Project Highlights
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 px-4">
            Where Luxury Meets <span className="text-amber-500">Excellence</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 group"
            >
              <motion.div
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
                className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-amber-400 to-amber-600 rounded-xl flex items-center justify-center mb-4 sm:mb-6 mx-auto group-hover:shadow-xl group-hover:shadow-amber-500/50 transition-all"
              >
                <item.icon className="text-white" size={24} />
              </motion.div>

              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 + 0.3, type: 'spring' }}
                className="text-center"
              >
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-amber-500 mb-2">{item.value}</h3>
                <p className="text-base sm:text-lg lg:text-xl font-semibold text-gray-900 mb-1 sm:mb-2">{item.label}</p>
                {item.description && <p className="text-xs sm:text-sm text-gray-600">{item.description}</p>}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
