import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Coffee } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Menu', href: '#menu' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-cafe-dark/95 backdrop-blur-sm py-4 shadow-lg' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2 text-white group">
          <Coffee className="w-6 h-6 text-cafe-gold group-hover:text-white transition-colors" />
          <span className="font-serif text-2xl font-semibold tracking-wide">ABC Cafe</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-white/80 hover:text-cafe-gold text-sm uppercase tracking-widest transition-colors font-medium"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#reservations"
            className="px-6 py-2 bg-cafe-gold/20 text-cafe-gold border border-cafe-gold hover:bg-cafe-gold hover:text-white uppercase tracking-widest text-xs font-semibold transition-all"
          >
            Reservations
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-cafe-dark border-t border-white/10 overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-white hover:text-cafe-gold text-lg font-serif"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#reservations"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-4 px-6 py-3 bg-cafe-gold text-white uppercase tracking-widest text-sm font-semibold text-center"
              >
                Reserve a Table
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
