import { Coffee, Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-cafe-dark text-white pt-20 pb-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          <div className="lg:col-span-1">
            <a href="#hero" className="flex items-center gap-2 text-white mb-6">
              <Coffee className="w-6 h-6 text-cafe-gold" />
              <span className="font-serif text-2xl font-semibold tracking-wide">ABC Cafe</span>
            </a>
            <p className="text-gray-400 font-light text-sm leading-relaxed mb-6">
              Crafted coffee, fresh pastries, and memorable moments in a modern, welcoming space.
            </p>
            <div className="flex items-center gap-4 text-gray-400">
              <a href="#" className="hover:text-cafe-gold transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="hover:text-cafe-gold transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="hover:text-cafe-gold transition-colors"><Twitter className="w-5 h-5" /></a>
            </div>
          </div>

          <div>
            <h4 className="text-white tracking-widest uppercase text-sm font-semibold mb-6">Explore</h4>
            <ul className="space-y-3 text-gray-400 font-light text-sm">
              <li><a href="#hero" className="hover:text-cafe-gold transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-cafe-gold transition-colors">About Us</a></li>
              <li><a href="#menu" className="hover:text-cafe-gold transition-colors">Menu</a></li>
              <li><a href="#gallery" className="hover:text-cafe-gold transition-colors">Gallery</a></li>
              <li><a href="#reservations" className="hover:text-cafe-gold transition-colors">Reservations</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white tracking-widest uppercase text-sm font-semibold mb-6">Contact</h4>
            <ul className="space-y-3 text-gray-400 font-light text-sm">
              <li>123 Artisan Avenue</li>
              <li>Metropolitan District, MD 10012</li>
              <li className="pt-2"><a href="mailto:hello@abccafe.com" className="hover:text-cafe-gold transition-colors">hello@abccafe.com</a></li>
              <li><a href="tel:+15551234567" className="hover:text-cafe-gold transition-colors">+1 (555) 123-4567</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white tracking-widest uppercase text-sm font-semibold mb-6">Hours</h4>
            <ul className="space-y-3 text-gray-400 font-light text-sm">
              <li className="flex justify-between">
                <span>Mon - Sat</span>
                <span>7:00 AM - 7:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span>8:00 AM - 5:00 PM</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 text-center text-gray-500 text-sm font-light flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© 2026 ABC Cafe. All Rights Reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
