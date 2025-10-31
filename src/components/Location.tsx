import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, Plane, Building2, ShoppingBag, GraduationCap, Heart } from 'lucide-react';

const advantages = [
  { icon: Plane, title: 'IGI Airport', distance: '25 mins', description: 'Quick access to international airport' },
  { icon: Building2, title: 'Cyber City', distance: '15 mins', description: 'Close to business district' },
  { icon: ShoppingBag, title: 'Malls & Retail', distance: '10 mins', description: 'Premium shopping destinations' },
  { icon: GraduationCap, title: 'Top Schools', distance: '5 mins', description: 'Best educational institutions' },
  { icon: Heart, title: 'Hospitals', distance: '8 mins', description: 'Multi-specialty healthcare facilities' },
  { icon: MapPin, title: 'Metro Station', distance: '12 mins', description: 'Well-connected metro network' },
];

export default function Location() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="location" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <p className="text-amber-500 tracking-widest text-xs sm:text-sm font-semibold uppercase mb-3 sm:mb-4">
            Prime Location
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 px-4">
            Perfectly <span className="text-amber-500">Connected</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-start mb-8 sm:mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="bg-white p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-lg">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 flex items-center space-x-2">
                <MapPin className="text-amber-500 w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7" />
                <span>Sector 71, Gurgaon</span>
              </h3>
              <p className="text-xs sm:text-sm lg:text-base text-gray-600 leading-relaxed mb-4 sm:mb-6">
                Strategically located in one of Gurgaon's most sought-after sectors, Birla71 offers unparalleled connectivity to key landmarks, business hubs, and lifestyle destinations. Experience the perfect blend of accessibility and exclusivity.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {advantages.map((advantage, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="bg-gray-50 p-3 sm:p-4 rounded-lg sm:rounded-xl border border-gray-100 hover:border-amber-400 hover:shadow-md transition-all group"
                  >
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <advantage.icon className="text-white w-4 h-4 sm:w-5 sm:h-5" />
                      </div>
                      <div>
                        <p className="text-sm sm:text-base font-bold text-gray-900">{advantage.title}</p>
                        <p className="text-amber-600 text-xs sm:text-sm font-semibold">{advantage.distance}</p>
                        <p className="text-[10px] sm:text-xs text-gray-600 mt-0.5 sm:mt-1">{advantage.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-64 sm:h-80 md:h-96 lg:h-[600px] rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.6736744448945!2d77.05962631508076!3d28.44644998248905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d18be63a3f0b9%3A0x3e78e59be4d5b2c6!2sSector%2071%2C%20Gurugram%2C%20Haryana!5e0!3m2!1sen!2sin!4v1635782000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Birla71 Location"
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-gradient-to-r from-amber-400 to-amber-600 rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-12 text-center text-white"
        >
          <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">
            Your Address Defines You
          </h3>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-6 sm:mb-8 opacity-90 max-w-3xl mx-auto">
            Birla71 isn't just a home, it's a statement. Located at the heart of Gurgaon's most prestigious neighborhood, you're always close to what matters most.
          </p>
          <motion.a
            href="https://maps.google.com/?q=Sector+71+Gurugram"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-white text-amber-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:shadow-2xl transition-all"
          >
            Get Directions
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
