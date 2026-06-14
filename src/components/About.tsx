import { motion } from 'motion/react';

export default function About() {
  const stats = [
    { value: "10,000+", label: "Happy Customers" },
    { value: "Daily", label: "Freshly Brewed" },
    { value: "100%", label: "Premium Coffee Beans" },
    { value: "Local", label: "Locally Inspired Menu" },
  ];

  return (
    <section id="about" className="py-24 bg-cafe-cream relative z-10 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Image Side */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <div className="relative">
              <div className="aspect-[4/5] overflow-hidden bg-gray-200">
                <img 
                  src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=1000" 
                  alt="Barista preparing coffee" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 w-64 h-64 border border-cafe-gold p-2 hidden md:block">
                <img 
                  src="https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&q=80&w=400" 
                  alt="Fresh pastries" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* Text Side */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 flex flex-col justify-center"
          >
            <h4 className="text-cafe-gold tracking-[0.2em] uppercase text-sm font-semibold mb-3">Our Story</h4>
            <h2 className="font-serif text-4xl lg:text-6xl text-cafe-dark mb-6">More Than Just<br/>Coffee</h2>
            
            <p className="text-gray-600 mb-6 text-lg font-light leading-relaxed">
              ABC Cafe is a modern cafe dedicated to serving exceptional coffee, fresh food, and unforgettable experiences. We combine premium ingredients, skilled craftsmanship, and a warm environment to create the perfect place to relax, work, and connect.
            </p>
            
            <p className="text-gray-600 mb-12 text-lg font-light leading-relaxed">
              Every cup tells a story, and every bite is a testament to our commitment to quality and community. Welcome to your new favorite local spot.
            </p>

            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat, idx) => (
                <div key={idx} className="border-l-2 border-cafe-gold pl-4">
                  <div className="text-2xl lg:text-3xl font-serif text-cafe-dark mb-1">{stat.value}</div>
                  <div className="text-xs uppercase tracking-wider text-gray-500 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
            
          </motion.div>
        </div>
      </div>
    </section>
  );
}
