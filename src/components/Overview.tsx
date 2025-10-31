import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Sparkles, Shield, Leaf, Download } from 'lucide-react';
import toast from 'react-hot-toast';

export default function Overview() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const handleDownload = () => {
    toast.success('Brochure download started!');
  };

  const features = [
    {
      icon: Sparkles,
      title: 'Timeless Elegance',
      description: 'Meticulously designed residences that reflect sophistication and contemporary aesthetics',
    },
    {
      icon: Shield,
      title: 'Trusted Legacy',
      description: 'Backed by Birla Estates, a name synonymous with quality and reliability for generations',
    },
    {
      icon: Leaf,
      title: 'Sustainable Living',
      description: 'Eco-friendly design principles that harmonize luxury with environmental consciousness',
    },
  ];

  return (
    <section id="overview" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-48 h-48 sm:w-96 sm:h-96 bg-amber-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-48 h-48 sm:w-96 sm:h-96 bg-amber-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
            Birla 71 – The New Benchmark of Luxury Living in Gurgaon
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="px-2 sm:px-0"
          >
            <p className="text-sm sm:text-base lg:text-lg text-gray-700 mb-4 sm:mb-6 leading-relaxed">
              Birla Sector 71 is an iconic residential development by Birla Estates, redefining modern living in Central Gurgaon. Spread over 5.5 acres with meticulously planned towers, the project combines luxury architecture with sustainable living. From expansive layouts to stellar amenities, Birla Sector 71 is where your lifestyle meets innovation.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleDownload}
              className="bg-gradient-to-r from-amber-400 to-amber-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:shadow-xl hover:shadow-amber-500/50 transition-all flex items-center space-x-2"
            >
              <Download className="w-5 h-5" />
              <span>Download Brochure</span>
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative h-64 sm:h-80 md:h-96 rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Birla71 Architecture"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="absolute -bottom-6 -left-6 sm:-bottom-8 sm:-left-8 bg-white p-4 sm:p-6 rounded-lg sm:rounded-xl shadow-xl"
            >
              <p className="text-amber-500 text-xs sm:text-sm font-semibold mb-1">POSSESSION</p>
              <p className="text-xl sm:text-2xl font-bold text-gray-900">Dec 2027</p>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mt-12 sm:mt-16 md:mt-20"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="text-center group"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-amber-400 to-amber-600 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:shadow-xl group-hover:shadow-amber-500/50 transition-all"
              >
                <feature.icon className="text-white" size={24} />
              </motion.div>
              <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 mb-1 sm:mb-2">{feature.title}</h3>
              <p className="text-xs sm:text-sm lg:text-base text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
