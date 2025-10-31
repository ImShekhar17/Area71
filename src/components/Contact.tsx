import { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import toast from 'react-hot-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const toastId = toast.loading("Sending your message...");
    setSubmitted(true);

    setTimeout(() => {
      toast.success("Message sent successfully!", { id: toastId });
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', message: '' });
    }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Call Us',
      details: ['+1 (555) 123-4567', '+1 (555) 987-6543'],
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: ['info@luxuryestates.com', 'sales@luxuryestates.com'],
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: ['123 Luxury Avenue', 'Beverly Hills, CA 90210'],
    },
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
  ];

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative py-16 sm:py-20 md:py-24 overflow-hidden min-h-screen"
    >
      <div className="absolute inset-0 z-0">
        <motion.div
          style={{ y }}
          className="absolute inset-0 w-full h-full"
        >
          <div
            className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat scale-110"
            style={{
              backgroundImage: "url('https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg?auto=compress&cs=tinysrgb&w=1920')",
            }}
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 via-slate-900/85 to-black/90 z-[1]" />
      </div>

      <div className="absolute inset-0 opacity-20 z-[2]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(205,164,73,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(205,164,73,0.15),transparent_50%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-14 md:mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block text-amber-500 text-xs sm:text-sm tracking-wider sm:tracking-widest mb-4 font-medium"
          >
            CONNECT WITH US
          </motion.span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Get in <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-base sm:text-lg text-white/70 max-w-2xl mx-auto px-4">
            Ready to find your dream home? Our team is here to assist you every step of the way
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-10 md:mb-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 shadow-2xl">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Send us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-3 sm:px-4 py-3 sm:py-4 bg-white/5 border border-white/20 rounded-xl text-white placeholder-white/50 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/50 transition-all text-sm sm:text-base"
                    placeholder="Your Name"
                  />
                </div>

                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 sm:px-4 py-3 sm:py-4 bg-white/5 border border-white/20 rounded-xl text-white placeholder-white/50 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/50 transition-all text-sm sm:text-base"
                    placeholder="Email Address"
                  />
                </div>

                <div className="relative">
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-3 sm:px-4 py-3 sm:py-4 bg-white/5 border border-white/20 rounded-xl text-white placeholder-white/50 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/50 transition-all text-sm sm:text-base"
                    placeholder="Phone Number"
                  />
                </div>

                <div className="relative">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-3 sm:px-4 py-3 sm:py-4 bg-white/5 border border-white/20 rounded-xl text-white placeholder-white/50 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/50 transition-all resize-none text-sm sm:text-base"
                    placeholder="Your Message"
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(251, 191, 36, 0.4)' }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-white py-3 sm:py-4 rounded-full font-semibold hover:from-amber-600 hover:to-amber-700 transition-all flex items-center justify-center gap-2 shadow-lg text-sm sm:text-base"
                >
                  {submitted ? (
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="text-base sm:text-lg"
                    >
                      Message Sent Successfully!
                    </motion.span>
                  ) : (
                    <>
                      <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-4 sm:space-y-6"
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 hover:bg-white/15 transition-all shadow-lg"
              >
                <div className="flex items-start gap-3 sm:gap-4">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="bg-gradient-to-br from-amber-500 to-amber-600 p-3 sm:p-4 rounded-full shadow-lg flex-shrink-0"
                  >
                    <info.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </motion.div>
                  <div>
                    <h4 className="text-lg sm:text-xl font-bold text-white mb-2">{info.title}</h4>
                    {info.details.map((detail) => (
                      <p key={detail} className="text-sm sm:text-base text-white/70">
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 shadow-lg"
            >
              <h4 className="text-lg sm:text-xl font-bold text-white mb-4">Follow Us</h4>
              <div className="flex gap-3 sm:gap-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    whileHover={{ scale: 1.15, y: -5, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className="bg-white/10 p-2.5 sm:p-3 rounded-full hover:bg-gradient-to-br hover:from-amber-500 hover:to-amber-600 transition-all group border border-white/20 shadow-lg"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:scale-110 transition-transform" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl h-64 sm:h-80 md:h-96"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.7499278935!2d-118.40145938478658!3d34.07357608060315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bc04d6d147ab%3A0xd6c1d5b0f17f6b0!2sBeverly%20Hills%2C%20CA!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="opacity-90"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
