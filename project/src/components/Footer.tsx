import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const footerLinks = {
    'Services': ['Ganesha Puja', 'Lakshmi Puja', 'Griha Pravesh', 'Satyanarayan Puja', 'Navgraha Puja'],
    'For Brahmins': ['Register as Brahmin', 'Brahmin Guidelines', 'Verification Process', 'Earnings', 'Support'],
    'Company': ['About Us', 'How it Works', 'Privacy Policy', 'Terms of Service', 'Contact Us'],
    'Support': ['Help Center', 'Booking Support', 'Payment Issues', 'Cancellation', 'Refunds']
  };

  const socialLinks = [
    { icon: Facebook, href: '#', color: 'hover:text-blue-600' },
    { icon: Twitter, href: '#', color: 'hover:text-blue-400' },
    { icon: Instagram, href: '#', color: 'hover:text-pink-600' },
    { icon: Youtube, href: '#', color: 'hover:text-red-600' }
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="absolute text-6xl"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            >
              🕉
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center space-x-3 mb-4">
                <img 
                  src="https://i.ibb.co/Q3gsYv17/Chat-GPT-Image-Jul-12-2025-10-17-11-AM.png" 
                  alt="VedaVahini Logo" 
                  className="w-12 h-12 object-contain"
                />
                <div>
                  <h3 className="text-2xl font-serif font-bold bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent">
                    VedaVahini
                  </h3>
                  <p className="text-xs text-gray-400">Sacred Booking Platform</p>
                </div>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                Connecting devotees with verified Brahmins for authentic spiritual ceremonies. 
                Experience the divine through traditional rituals performed with devotion and precision.
              </p>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 text-gray-300">
                  <MapPin className="h-5 w-5 text-orange-400" />
                  <span>123 Spiritual Lane, Sacred City, India 110001</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <Phone className="h-5 w-5 text-orange-400" />
                  <span>+91 98765 43210</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <Mail className="h-5 w-5 text-orange-400" />
                  <span>info@vedavahini.com</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([title, links], index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <h4 className="text-lg font-semibold mb-4 text-orange-300">{title}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <motion.a
                      href="#"
                      className="text-gray-300 hover:text-orange-300 transition-colors text-sm"
                      whileHover={{ x: 5 }}
                    >
                      {link}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <motion.div
            className="text-gray-400 text-sm mb-4 md:mb-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            © 2024 VedaVahini. All rights reserved. Built with devotion and love.
          </motion.div>

          <motion.div
            className="flex items-center gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            {socialLinks.map(({ icon: Icon, href, color }, index) => (
              <motion.a
                key={index}
                href={href}
                className={`text-gray-400 transition-colors ${color}`}
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Icon className="h-5 w-5" />
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Blessing */}
        <motion.div
          className="text-center mt-8 pt-8 border-t border-gray-700"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <p className="text-orange-300 font-serif italic">
            "सर्वे भवन्तु सुखिनः सर्वे सन्तु निरामयाः"
          </p>
          <p className="text-gray-400 text-sm mt-2">
            May all beings be happy and free from suffering
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;