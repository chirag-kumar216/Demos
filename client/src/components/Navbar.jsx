import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Before & After', path: '/before-after' },
    { name: 'Tools', path: '/tools' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  const isDarkHeroPage = location.pathname === '/' || location.pathname === '/about';
  const logoColor = (!isScrolled && isDarkHeroPage) ? 'text-white' : 'text-primary-text';
  const subtitleColor = (!isScrolled && isDarkHeroPage) ? 'text-white/80' : 'text-secondary-text';
  const menuIconColor = (!isScrolled && isDarkHeroPage) ? 'text-white' : 'text-primary-text';

  return (
    <>
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-primary-bg/80 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <Link to="/" className="flex flex-col items-center">
            <span className={`font-display text-3xl font-medium tracking-wide ${logoColor} transition-colors duration-300`}>AURA</span>
            <span className={`font-accent text-[0.6rem] tracking-[0.3em] mt-1 uppercase ${subtitleColor} transition-colors duration-300`}>Interiors</span>
          </Link>

          <div className="hidden lg:flex items-center space-x-8">
            {links.map((link) => {
              const linkColor = location.pathname === link.path 
                ? 'text-accent-gold' 
                : (!isScrolled && isDarkHeroPage) ? 'text-white hover:text-accent-gold' : 'text-primary-text hover:text-accent-gold';
              
              return (
              <Link
                key={link.name}
                to={link.path}
                className={`font-accent text-sm tracking-wider uppercase relative group ${linkColor} transition-colors duration-300`}
              >
                {link.name}
                <span
                  className={`absolute -bottom-1 left-0 w-full h-[1px] bg-accent-gold transform origin-left transition-transform duration-300 ${
                    location.pathname === link.path ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`}
                />
              </Link>
            )})}
            <Link
              to="/contact"
              className="bg-accent-gold text-white font-accent text-sm tracking-wider uppercase px-6 py-2.5 hover:bg-accent-dark transition-colors duration-300"
            >
              Book Consultation
            </Link>
          </div>

          <button
            className={`lg:hidden focus:outline-none ${menuIconColor} transition-colors duration-300`}
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu size={28} />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="fixed inset-0 z-[60] bg-primary-bg flex flex-col justify-center items-center"
          >
            <button
              className="absolute top-6 right-6 text-primary-text focus:outline-none"
              onClick={() => setMobileMenuOpen(false)}
            >
              <X size={32} />
            </button>
            <div className="flex flex-col items-center space-y-8">
              {links.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                >
                  <Link
                    to={link.path}
                    className="font-display text-3xl text-primary-text hover:text-accent-gold transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + links.length * 0.1 }}
                className="pt-8"
              >
                <Link
                  to="/contact"
                  className="bg-accent-gold text-white font-accent text-sm tracking-wider uppercase px-8 py-3 hover:bg-accent-dark transition-colors duration-300"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Book Consultation
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
