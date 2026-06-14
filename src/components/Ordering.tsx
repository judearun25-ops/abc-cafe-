import { motion } from 'motion/react';
import { ShoppingBag, Calendar, CreditCard, Smartphone, Truck } from 'lucide-react';

export default function Ordering() {
  return (
    <section id="reservations" className="py-24 bg-cafe-dark text-white relative z-10 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <div className="w-full lg:w-1/2">
            <h4 className="text-cafe-gold tracking-[0.2em] uppercase text-sm font-semibold mb-3">At Your Convenience</h4>
            <h2 className="font-serif text-4xl lg:text-5xl mb-8">Enjoy ABC Cafe,<br/>Anywhere.</h2>
            <p className="text-gray-400 font-light text-lg mb-12 max-w-md">
              Whether you're joining us for a meeting or enjoying our signature roasts at home, we make it seamless.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button className="flex items-center justify-center gap-3 px-8 py-4 bg-cafe-gold text-white tracking-widest uppercase text-sm font-medium hover:bg-white hover:text-cafe-dark transition-colors duration-300">
                <ShoppingBag className="w-5 h-5" />
                Order Online
              </button>
              <button className="flex items-center justify-center gap-3 px-8 py-4 border border-white/20 text-white tracking-widest uppercase text-sm font-medium hover:bg-white hover:text-cafe-dark transition-colors duration-300">
                <Calendar className="w-5 h-5" />
                Reserve Table
              </button>
            </div>

            <div className="pt-8 border-t border-white/10">
              <p className="text-xs text-gray-500 uppercase tracking-widest mb-4">Accepted Payments</p>
              <div className="flex gap-6 text-gray-400">
                <CreditCard className="w-6 h-6 hover:text-white transition-colors" />
                <div className="font-semibold text-sm flex items-center gap-1 hover:text-white transition-colors cursor-default">
                  <Smartphone className="w-4 h-4" /> Apple Pay
                </div>
                <div className="font-semibold text-sm flex items-center gap-1 hover:text-white transition-colors cursor-default">
                  <Smartphone className="w-4 h-4" /> Google Pay
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-cafe-cream text-cafe-dark p-8 md:p-12 shadow-2xl relative z-10"
            >
              <div className="absolute top-0 right-0 bg-cafe-gold text-white text-xs font-bold uppercase tracking-widest px-4 py-2 flex items-center gap-2">
                <Truck className="w-4 h-4" /> Local Delivery
              </div>
              <h3 className="font-serif text-2xl mb-6">Delivery Integration</h3>
              <div className="space-y-4 mb-8">
                <div className="w-full h-12 bg-white border border-gray-200 rounded flex items-center px-4 text-gray-400 italic">Enter delivery address...</div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="h-12 bg-white border border-gray-200 rounded flex items-center justify-center text-sm font-medium hover:border-cafe-gold cursor-pointer transition-colors">ASAP</div>
                  <div className="h-12 bg-white border border-gray-200 rounded flex items-center justify-center text-sm font-medium hover:border-cafe-gold cursor-pointer transition-colors">Schedule Later</div>
                </div>
              </div>
              <div className="bg-gray-50 p-4 rounded text-sm text-center text-gray-500 border border-dashed border-gray-300">
                Integration placeholder: Platform API connect goes here.
              </div>
            </motion.div>
            {/* Decoration */}
            <div className="absolute -bottom-6 -left-6 w-full h-full border-2 border-cafe-gold/30 z-0 hidden md:block"></div>
          </div>

        </div>

      </div>
    </section>
  );
}
