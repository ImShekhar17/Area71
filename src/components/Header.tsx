import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Home, Award, LayoutGrid, Sparkles, ImageIcon, MapPin, HelpCircle, Mail } from 'lucide-react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Overview', icon: Home },
    { name: 'Highlights', icon: Award },
    { name: 'Floor Plans', icon: LayoutGrid },
    { name: 'Amenities', icon: Sparkles },
    { name: 'Gallery', icon: ImageIcon },
    { name: 'Location', icon: MapPin },
    { name: 'FAQ', icon: HelpCircle },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id.toLowerCase().replace(' ', '-'));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setMobileMenuOpen(false);
    }
  };

  const handleScheduleVisit = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/80 backdrop-blur-xl shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex items-center space-x-2"
          >
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-amber-400 to-amber-600 rounded-md flex items-center justify-center">
              <span className="text-white font-bold text-lg sm:text-xl">B</span>
            </div>
            <div>
              <h1 className={`text-xl sm:text-2xl font-bold tracking-tight ${scrolled ? 'text-gray-900' : 'text-white'}`}>
                BIRLA<span className="text-amber-500">71</span>
              </h1>
              <p className={`text-[10px] sm:text-xs tracking-wider ${scrolled ? 'text-gray-600' : 'text-gray-200'}`}>
                BY BIRLA ESTATES
              </p>
            </div>
          </motion.div>

          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.button
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                onClick={() => scrollToSection(item.name)}
                className={`text-sm font-medium tracking-wide transition-all duration-300 hover:text-amber-500 ${
                  scrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                {item.name}
              </motion.button>
            ))}
          </nav>

          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleScheduleVisit}
            className="hidden lg:flex items-center space-x-2 bg-gradient-to-r from-amber-400 to-amber-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-xl hover:shadow-amber-500/50 transition-all duration-300"
          >
            <Phone size={18} />
            <span>Schedule Visit</span>
          </motion.button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`lg:hidden p-2 ${scrolled ? 'text-gray-900' : 'text-white'}`}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 h-full w-80 max-w-[85vw] bg-gradient-to-b from-gray-900 to-black text-white z-50 lg:hidden overflow-y-auto shadow-2xl"
            >
              <div className="p-6 pb-24">
                <div className="flex items-center justify-between mb-8 sticky top-0 bg-gradient-to-b from-gray-900 to-transparent pb-4 z-10">
                  <div className="flex items-center space-x-2">
                    <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-amber-600 rounded-md flex items-center justify-center">
                      <span className="text-white font-bold text-xl">B</span>
                    </div>
                    <div>
                      <h1 className="text-xl font-bold tracking-tight">
                        BIRLA<span className="text-amber-400">71</span>
                      </h1>
                      <p className="text-[10px] tracking-wider text-gray-400">BY BIRLA ESTATES</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 hover:bg-white/10 rounded-full transition-colors flex-shrink-0"
                  >
                    <X size={24} />
                  </button>
                </div>

                <nav className="space-y-2 mb-8 overflow-y-visible">
                  {navItems.map((item, index) => (
                    <motion.button
                      key={item.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      onClick={() => scrollToSection(item.name)}
                      className="w-full flex items-center space-x-3 px-4 py-3 rounded-xl hover:bg-white/10 transition-all group"
                    >
                      <item.icon className="text-amber-400 group-hover:scale-110 transition-transform" size={20} />
                      <span className="font-medium text-left">{item.name}</span>
                    </motion.button>
                  ))}
                </nav>

                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  onClick={handleScheduleVisit}
                  className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-amber-400 to-amber-600 text-white px-6 py-4 rounded-full font-semibold hover:shadow-xl hover:shadow-amber-500/50 transition-all mb-4"
                >
                  <Phone size={18} />
                  <span>Schedule Visit</span>
                </motion.button>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="border-t border-white/20 pt-6 mt-6"
                >
                  <p className="text-sm text-gray-400 mb-3">Contact Information</p>
                  <div className="space-y-3">
                    <a href="tel:+919876543210" className="flex items-center space-x-2 text-sm hover:text-amber-400 transition-colors">
                      <Phone size={16} />
                      <span>+91 98765 43210</span>
                    </a>
                    <a href="mailto:info@birla71.com" className="flex items-center space-x-2 text-sm hover:text-amber-400 transition-colors">
                      <Mail size={16} />
                      <span>info@birla71.com</span>
                    </a>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
