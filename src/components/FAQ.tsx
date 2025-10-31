import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: 'What is the possession date for Birla71?',
    answer: 'The expected possession date for Birla71 is December 2027. All construction is being executed as per schedule with the highest quality standards.',
  },
  {
    question: 'What are the available configurations?',
    answer: 'Birla71 offers premium 3 BHK and 4 BHK residences ranging from 2,150 sq.ft to 3,200 sq.ft, designed to cater to modern lifestyle needs.',
  },
  {
    question: 'What amenities are included?',
    answer: 'The project features 50+ world-class amenities including a swimming pool, fitness center, clubhouse, landscaped gardens, 24/7 security, power backup, and much more.',
  },
  {
    question: 'Is the project RERA approved?',
    answer: 'Yes, Birla71 is fully RERA registered and compliant with all regulatory requirements, ensuring complete transparency and security for homebuyers.',
  },
  {
    question: 'What payment plans are available?',
    answer: 'We offer flexible payment plans including construction-linked plans and possession-linked plans. Our team can customize a plan based on your financial requirements.',
  },
  {
    question: 'Is home loan assistance available?',
    answer: 'Yes, we have tie-ups with leading banks and financial institutions to provide home loan assistance at competitive interest rates with quick approvals.',
  },
];

export default function FAQ() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <p className="text-amber-500 tracking-widest text-xs sm:text-sm font-semibold uppercase mb-3 sm:mb-4">
            Got Questions?
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 px-4">
            Frequently Asked <span className="text-amber-500">Questions</span>
          </h2>
        </motion.div>

        <div className="space-y-3 sm:space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <motion.button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full bg-gray-50 hover:bg-gray-100 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-left transition-all duration-300 border-2 border-transparent hover:border-amber-400"
                whileHover={{ scale: 1.01 }}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center"
                  >
                    {openIndex === index ? (
                      <Minus className="text-white w-4 h-4 sm:w-5 sm:h-5" />
                    ) : (
                      <Plus className="text-white w-4 h-4 sm:w-5 sm:h-5" />
                    )}
                  </motion.div>
                </div>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <p className="text-xs sm:text-sm lg:text-base text-gray-600 mt-3 sm:mt-4 leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-8 sm:mt-10 md:mt-12 text-center bg-gradient-to-r from-gray-50 to-amber-50 rounded-xl sm:rounded-2xl p-6 sm:p-8"
        >
          <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">Still have questions?</h3>
          <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">Our team is here to help you find your dream home</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const contactSection = document.getElementById('contact');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="bg-gradient-to-r from-amber-400 to-amber-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:shadow-xl hover:shadow-amber-500/50 transition-all"
          >
            Contact Our Experts
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
