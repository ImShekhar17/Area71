import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import toast from 'react-hot-toast';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white pt-12 sm:pt-16 md:pt-20 pb-6 sm:pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12 mb-10 sm:mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-2 mb-4 sm:mb-6">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-amber-400 to-amber-600 rounded-md flex items-center justify-center">
                <span className="text-white font-bold text-lg sm:text-xl">B</span>
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold">
                  BIRLA<span className="text-amber-400">71</span>
                </h3>
                <p className="text-[10px] sm:text-xs tracking-wider text-gray-400">BY BIRLA ESTATES</p>
              </div>
            </div>
            <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
              Experience the benchmark of luxury living in Gurgaon. Where sophistication meets comfort.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-base sm:text-lg font-bold mb-4 sm:mb-6 text-amber-400">Quick Links</h4>
            <ul className="space-y-2 sm:space-y-3">
              {['Overview', 'Floor Plans', 'Amenities', 'Gallery', 'Location', 'FAQ'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => {
                      const element = document.getElementById(item.toLowerCase().replace(' ', '-'));
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="text-sm sm:text-base text-gray-400 hover:text-amber-400 transition-colors text-left"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-base sm:text-lg font-bold mb-4 sm:mb-6 text-amber-400">Contact Info</h4>
            <ul className="space-y-3 sm:space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="text-amber-400 flex-shrink-0 mt-1" size={16} />
                <span className="text-xs sm:text-sm lg:text-base text-gray-400">Sector 71, Gurugram, Haryana 122004</span>
              </li>
              <li className="flex items-start space-x-3">
                <Phone className="text-amber-400 flex-shrink-0 mt-1" size={16} />
                <span className="text-xs sm:text-sm lg:text-base text-gray-400">+91 98765 43210</span>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="text-amber-400 flex-shrink-0 mt-1" size={16} />
                <span className="text-xs sm:text-sm lg:text-base text-gray-400">info@birla71.com</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-base sm:text-lg font-bold mb-4 sm:mb-6 text-amber-400">Newsletter</h4>
            <p className="text-xs sm:text-sm lg:text-base text-gray-400 mb-3 sm:mb-4">Subscribe for exclusive updates and offers</p>
            <form onSubmit={(e) => {
              e.preventDefault();
              const form = e.target as HTMLFormElement;
              const emailInput = form.elements.namedItem('email') as HTMLInputElement;
              if (emailInput && emailInput.value) {
                toast.success('Thank you for subscribing!');
                form.reset();
              }
            }} className="flex flex-col space-y-2 sm:space-y-3">
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                required
                className="bg-white/10 border border-white/20 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base text-white placeholder-gray-500 focus:outline-none focus:border-amber-400 transition-colors"
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-gradient-to-r from-amber-400 to-amber-600 text-white py-2 sm:py-3 rounded-lg text-sm sm:text-base font-semibold hover:shadow-xl hover:shadow-amber-500/50 transition-all"
              >
                Subscribe
              </motion.button>
            </form>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 pt-6 sm:pt-8"
        >
          <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0 gap-4">
            <p className="text-gray-400 text-xs sm:text-sm text-center sm:text-left">
              &copy; {currentYear} Birla71. All rights reserved. | RERA No: XXXXXXXX
            </p>

            <div className="flex items-center space-x-3 sm:space-x-4">
              {[
                { icon: Facebook, href: '#' },
                { icon: Instagram, href: '#' },
                { icon: Linkedin, href: '#' },
                { icon: Twitter, href: '#' },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.2, y: -3 }}
                  className="w-9 h-9 sm:w-10 sm:h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-gradient-to-br hover:from-amber-400 hover:to-amber-600 transition-all"
                >
                  <social.icon size={16} className="sm:w-[18px] sm:h-[18px]" />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
