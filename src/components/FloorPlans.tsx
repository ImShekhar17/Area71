import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Maximize2, Download, X } from 'lucide-react';
import toast from 'react-hot-toast';

const floorPlans = [
  {
    title: '3 BHK Luxury Residences',
    area: '1850 sq.ft',
    image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: '3.5 BHK Luxury Residences',
    area: '2250 sq.ft',
    image: 'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Site Plan',
    area: 'View Layout',
    image: 'https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

export default function FloorPlans() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [selectedPlan, setSelectedPlan] = useState<number | null>(null);

  const handleDownloadPlan = (title: string) => {
    toast.success(`Downloading ${title}...`);
  };

  return (
    <section id="floor-plans" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-8 sm:mb-12 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 px-4 mb-2">
            <span className="border-l-4 border-amber-500 pl-4 text-gray-900">Sizes & Floor Plan</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {floorPlans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group"
            >
              <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                <img
                  src={plan.image}
                  alt={plan.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setSelectedPlan(index)}
                  className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-white/20 backdrop-blur-md p-1.5 sm:p-2 rounded-full hover:bg-white/30 transition-all"
                >
                  <Maximize2 className="text-white" size={18} />
                </motion.button>
              </div>

              <div className="p-4 sm:p-6 bg-gray-50">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-2">{plan.title}</h3>
                <p className="text-base sm:text-lg text-gray-700 mb-4">
                  <span className="font-semibold">Size:</span> {plan.area}
                </p>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleDownloadPlan(plan.title)}
                  className="w-full bg-gradient-to-r from-amber-400 to-amber-600 text-white py-2.5 sm:py-3 rounded-full font-semibold text-sm sm:text-base flex items-center justify-center space-x-2 hover:shadow-xl hover:shadow-amber-500/50 transition-all"
                >
                  <Download size={16} className="sm:w-[18px] sm:h-[18px]" />
                  <span>Download Floor Plan</span>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {selectedPlan !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedPlan(null)}
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
            className="relative max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedPlan(null)}
              className="absolute -top-12 right-0 text-white hover:text-amber-400 transition-colors"
            >
              <X size={32} />
            </button>
            <img
              src={floorPlans[selectedPlan].image}
              alt={floorPlans[selectedPlan].title}
              className="w-full rounded-xl"
            />
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
