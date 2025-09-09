import { motion } from 'framer-motion';
import { Github, Twitter, Linkedin, Heart } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ];

  return (
    <footer id="credit" className="burger-gradient py-12">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-white mb-6 font-['Bebas_Neue'] tracking-wider">
            BORGARS
          </h2>
          
          <div className="flex justify-center space-x-6 mb-8">
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                aria-label={link.label}
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/20 p-3 rounded-full hover:bg-white/30 transition-colors duration-300"
              >
                <link.icon className="text-white" size={24} />
              </motion.a>
            ))}
          </div>
          
          <div className="border-t border-white/20 pt-6">
            <p className="text-white/90 text-sm md:text-base flex items-center justify-center gap-2">
              Made with <Heart className="text-red-300 animate-pulse" size={16} fill="currentColor" /> 
              <span>© 2024 Borgars. All Rights Reserved</span>
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;