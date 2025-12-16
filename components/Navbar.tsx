import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, GraduationCap, ChevronRight } from 'lucide-react';
import { NAV_LINKS } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Scroll Spy Logic
      const sections = NAV_LINKS.map(link => link.href.substring(1));
      let current = '';
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Check if section is in viewport (with some offset for header)
          if (rect.top <= 150 && rect.bottom >= 150) {
            current = section;
          }
        }
      }
      
      // Special case for top of page
      if (window.scrollY < 100) current = '';
      
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        scrolled || isOpen
          ? 'bg-navy-950 border-white/10 py-4 shadow-xl' 
          : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center relative z-50">
        <a href="#" className="flex items-center gap-3 group" onClick={() => setIsOpen(false)}>
          <div className={`p-2 rounded-md border ${scrolled || isOpen ? 'border-gold-500/30 bg-navy-900' : 'border-white/20 bg-white/5'} group-hover:bg-gold-500 transition-colors duration-300`}>
            <GraduationCap size={24} className={scrolled || isOpen ? 'text-gold-400 group-hover:text-navy-900' : 'text-white group-hover:text-navy-900'} />
          </div>
          <div className="flex flex-col">
            <span className={`text-xl font-serif font-bold tracking-wide ${scrolled || isOpen ? 'text-white' : 'text-white'}`}>
              Ganesh Nayak
            </span>
            <span className={`text-[10px] uppercase tracking-[0.2em] ${scrolled || isOpen ? 'text-gold-400' : 'text-slate-300'}`}>
              Academic Portfolio
            </span>
          </div>
        </a>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-6">
          {NAV_LINKS.map((link) => {
             const isActive = activeSection === link.href.substring(1);
             return (
              <a
                key={link.name}
                href={link.href}
                className={`text-xs uppercase tracking-widest font-semibold transition-colors relative group py-2 ${
                  isActive 
                    ? 'text-gold-400' 
                    : scrolled ? 'text-slate-300 hover:text-gold-400' : 'text-slate-200 hover:text-gold-400'
                }`}
              >
                {link.name}
                <span className={`absolute bottom-0 left-0 h-0.5 bg-gold-400 transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
              </a>
            );
          })}
          <a
            href="#contact"
            className="ml-4 px-6 py-2 bg-gold-500 text-navy-900 rounded-sm hover:bg-white hover:text-navy-950 transition-all duration-300 font-bold text-xs uppercase tracking-wider shadow-[0_0_15px_rgba(251,191,36,0.3)] hover:shadow-none"
          >
            Get in Touch
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className={`lg:hidden p-2 -mr-2 transition-colors ${scrolled || isOpen ? 'text-gold-400' : 'text-white'}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-40 bg-navy-950 pt-24 pb-8 px-6 lg:hidden flex flex-col overflow-y-auto"
          >
            <div className="flex flex-col space-y-2 h-full">
              {NAV_LINKS.map((link, idx) => {
                 const isActive = activeSection === link.href.substring(1);
                 return (
                  <motion.a
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + idx * 0.05 }}
                    key={link.name}
                    href={link.href}
                    className={`group flex items-center justify-between p-4 rounded-lg border border-transparent hover:border-white/10 transition-all ${
                        isActive ? 'bg-white/5 border-gold-500/30' : 'hover:bg-white/5'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    <span className={`text-lg font-serif font-medium ${isActive ? 'text-gold-400' : 'text-slate-300 group-hover:text-white'}`}>
                        {link.name}
                    </span>
                    {isActive && <ChevronRight size={18} className="text-gold-500" />}
                  </motion.a>
              )})}
              
              <motion.div
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ delay: 0.6 }}
                 className="mt-auto pt-6"
              >
                  <a
                    href="#contact"
                    className="flex items-center justify-center w-full py-4 bg-gold-500 text-navy-900 rounded-sm font-bold uppercase tracking-widest text-sm shadow-lg hover:bg-white transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Contact Now
                  </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;