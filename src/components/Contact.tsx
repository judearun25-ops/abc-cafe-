import { MapPin, Phone, Mail, MessageCircle, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-cafe-cream relative z-10 w-full">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        <div className="text-center mb-16">
          <h4 className="text-cafe-gold tracking-[0.2em] uppercase text-sm font-semibold mb-3">Get in Touch</h4>
          <h2 className="font-serif text-4xl lg:text-5xl text-cafe-dark">Visit ABC Cafe</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Details */}
          <div>
            <div className="space-y-10 mb-12">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-cafe-gold shrink-0 shadow-sm">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-xl text-cafe-dark mb-2">Location</h3>
                  <p className="text-gray-500 font-light">123 Artisan Avenue<br/>Metropolitan District, MD 10012</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-cafe-gold shrink-0 shadow-sm">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-xl text-cafe-dark mb-2">Opening Hours</h3>
                  <p className="text-gray-500 font-light">Mon - Sat: 7:00 AM — 7:00 PM<br/>Sunday: 8:00 AM — 5:00 PM</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-cafe-gold shrink-0 shadow-sm">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-xl text-cafe-dark mb-2">Contact</h3>
                  <p className="text-gray-500 font-light mb-1">+1 (555) 123-4567</p>
                  <a href="#" className="flex items-center gap-2 text-green-600 hover:text-green-700 text-sm font-medium mt-2">
                    <MessageCircle className="w-4 h-4" /> WhatsApp Us
                  </a>
                </div>
              </div>
            </div>

            {/* Simulated Map */}
            <div className="w-full h-64 bg-gray-200 border border-gray-300 flex items-center justify-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=800')] bg-cover bg-center opacity-40 grayscale group-hover:grayscale-0 transition-all duration-700"></div>
              <div className="bg-white/90 backdrop-blur px-6 py-3 rounded shadow-lg relative z-10 flex items-center gap-2 text-cafe-dark font-medium shadow-xl">
                <MapPin className="text-cafe-gold w-5 h-5" /> Google Maps Integration
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 md:p-12 shadow-sm border border-gray-100">
            <h3 className="font-serif text-2xl text-cafe-dark mb-8">Send us a message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2 font-medium">Name</label>
                  <input type="text" className="w-full border-b border-gray-200 py-2 focus:outline-none focus:border-cafe-gold transition-colors bg-transparent" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2 font-medium">Email</label>
                  <input type="email" className="w-full border-b border-gray-200 py-2 focus:outline-none focus:border-cafe-gold transition-colors bg-transparent" placeholder="john@example.com" />
                </div>
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2 font-medium">Subject</label>
                <select className="w-full border-b border-gray-200 py-2 focus:outline-none focus:border-cafe-gold transition-colors bg-transparent text-gray-700">
                  <option>General Inquiry</option>
                  <option>Event Booking</option>
                  <option>Feedback</option>
                </select>
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2 font-medium">Message</label>
                <textarea rows={4} className="w-full border-b border-gray-200 py-2 focus:outline-none focus:border-cafe-gold transition-colors bg-transparent resize-none" placeholder="Your message here..."></textarea>
              </div>
              <button type="button" className="w-full px-8 py-4 bg-cafe-dark text-white tracking-widest uppercase text-sm font-medium hover:bg-cafe-gold transition-colors duration-300 mt-4">
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
