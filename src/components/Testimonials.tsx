import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  { id: 1, name: "Sarah Jenkins", role: "Local Writer", content: "ABC Cafe is my second home. The vanilla bean latte is unmatched, and the atmosphere provides the perfect creative backdrop." },
  { id: 2, name: "Marcus Thorne", role: "Coffee Enthusiast", content: "I've traveled the world seeking the best espresso, and the precision here rivals the top cafes in Italy." },
  { id: 3, name: "Elena Rodriguez", role: "Architect", content: "The interior design alone is worth the visit, but the fresh pastries and fast service make it a daily necessity." },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-24 bg-white relative w-full overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-cafe-cream rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2"></div>
      
      <div className="max-w-5xl mx-auto px-4 md:px-8 relative z-10">
        
        <div className="flex justify-center mb-10 text-cafe-gold/20">
          <Quote className="w-20 h-20" />
        </div>

        <div className="relative min-h-[250px] flex items-center justify-center text-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.4 }}
              className="px-8 md:px-16"
            >
              <p className="font-serif text-2xl md:text-3xl lg:text-4xl text-cafe-dark leading-relaxed mb-8">
                "{testimonials[currentIndex].content}"
              </p>
              <div>
                <h4 className="font-medium text-cafe-dark tracking-wide uppercase text-sm mb-1">{testimonials[currentIndex].name}</h4>
                <p className="text-cafe-gold text-xs uppercase tracking-widest">{testimonials[currentIndex].role}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center items-center gap-6 mt-12">
          <button 
            onClick={prev}
            className="w-10 h-10 border border-gray-200 rounded-full flex items-center justify-center text-gray-400 hover:text-cafe-gold hover:border-cafe-gold transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          <div className="flex gap-2">
            {testimonials.map((_, idx) => (
              <button 
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-2 h-2 rounded-full transition-all ${idx === currentIndex ? 'bg-cafe-gold w-6' : 'bg-gray-200'}`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          <button 
            onClick={next}
            className="w-10 h-10 border border-gray-200 rounded-full flex items-center justify-center text-gray-400 hover:text-cafe-gold hover:border-cafe-gold transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </section>
  );
}
