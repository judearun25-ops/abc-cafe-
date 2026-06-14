import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="relative h-[90vh] w-full bg-cafe-dark flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&q=80&w=2000" 
          alt="Cinematic cafe interior" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-cafe-dark via-transparent to-transparent opacity-90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl text-cafe-cream mb-6 tracking-tight text-balance"
        >
          Crafted Coffee.<br/>
          <span className="text-cafe-gold italic">Memorable Moments.</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl font-sans font-light leading-relaxed text-balance"
        >
          Experience premium coffee, handcrafted beverages, fresh pastries, and a welcoming atmosphere at ABC Cafe.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          <a 
            href="#menu" 
            className="px-8 py-4 bg-cafe-gold text-white tracking-widest uppercase text-sm font-medium hover:bg-white hover:text-cafe-dark transition-colors duration-300 w-full sm:w-auto text-center"
          >
            View Menu
          </a>
          <a 
            href="#reservations" 
            className="px-8 py-4 border border-white text-white tracking-widest uppercase text-sm font-medium hover:bg-white hover:text-cafe-dark transition-colors duration-300 w-full sm:w-auto text-center"
          >
            Reserve a Table
          </a>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 flex flex-col items-center animate-bounce"
      >
        <span className="text-white/60 text-xs tracking-[0.2em] uppercase mb-2">Scroll</span>
        <ChevronDown className="text-white/60 w-4 h-4" />
      </motion.div>
    </section>
  );
}
