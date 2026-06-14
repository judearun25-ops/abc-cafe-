import { useState } from 'react';
import { motion } from 'motion/react';

const categories = ['All', 'Signature Drinks', 'Coffee & Espresso', 'Fresh Pastries', 'Breakfast'];

const items = [
  { id: 1, name: "Iced Caramel Macchiato", price: "$6.50", category: "Signature Drinks", desc: "Espresso, vanilla, milk, and caramel drizzle over ice.", img: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&q=80&w=800" },
  { id: 2, name: "Vanilla Bean Latte", price: "$5.75", category: "Signature Drinks", desc: "Rich espresso combined with real vanilla bean syrup and steamed milk.", img: "https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&q=80&w=800" },
  { id: 3, name: "Cold Brew Reserve", price: "$5.00", category: "Signature Drinks", desc: "Slow-steeped for 24 hours for a smooth, complex flavor.", img: "https://images.pexels.com/photos/13735958/pexels-photo-13735958.jpeg" },
  
  { id: 4, name: "Classic Cappuccino", price: "$4.50", category: "Coffee & Espresso", desc: "Equal parts espresso, steamed milk, and velvety foam.", img: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&q=80&w=800" },
  { id: 5, name: "Pour Over", price: "$4.50", category: "Coffee & Espresso", desc: "Hand-poured single origin coffee, clean and bright.", img: "https://images.unsplash.com/photo-1495474472201-4ae70135d57b?auto=format&fit=crop&q=80&w=800" },
  { id: 6, name: "Cafe Mocha", price: "$5.50", category: "Coffee & Espresso", desc: "Espresso with dark chocolate and steamed milk.", img: "https://images.unsplash.com/photo-1530373239216-42518e6b4063?auto=format&fit=crop&q=80&w=800" },
  
  { id: 7, name: "Butter Croissant", price: "$3.75", category: "Fresh Pastries", desc: "Flaky, buttery, and baked fresh every morning.", img: "https://images.unsplash.com/photo-1549903072-7e6e0d65bd0f?auto=format&fit=crop&q=80&w=800" },
  { id: 8, name: "Almond Tart", price: "$4.80", category: "Fresh Pastries", desc: "Sweet tart rimmed with sliced toasted almonds.", img: "https://images.unsplash.com/photo-1509365465985-25d11c17e812?auto=format&fit=crop&q=80&w=800" },
  
  { id: 9, name: "Avocado Toast", price: "$9.50", category: "Breakfast", desc: "Smashed avocado, cherry tomatoes, and microgreens on sourdough.", img: "https://images.unsplash.com/photo-1588137378633-dea1336ce1e2?auto=format&fit=crop&q=80&w=800" },
  { id: 10, name: "Berry Granola Bowl", price: "$8.50", category: "Breakfast", desc: "House-made granola, greek yogurt, fresh berries, and honey.", img: "https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?auto=format&fit=crop&q=80&w=800" },
];

export default function FeaturedMenu() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredItems = activeCategory === 'All' 
    ? items 
    : items.filter(item => item.category === activeCategory);

  return (
    <section id="menu" className="py-24 bg-white relative z-10 w-full">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        <div className="text-center mb-16">
          <h4 className="text-cafe-gold tracking-[0.2em] uppercase text-sm font-semibold mb-3">Our Offerings</h4>
          <h2 className="font-serif text-4xl lg:text-5xl text-cafe-dark">Featured Menu</h2>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 uppercase tracking-wider text-xs font-semibold border transition-all ${
                activeCategory === cat 
                  ? 'border-cafe-dark bg-cafe-dark text-white' 
                  : 'border-gray-200 text-gray-500 hover:border-cafe-gold hover:text-cafe-gold'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-12 gap-y-10">
          {filteredItems.map((item, idx) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex gap-6 group"
            >
              <div className="w-24 h-24 flex-shrink-0 overflow-hidden bg-gray-100 hidden sm:block">
                <img 
                  src={item.img} 
                  alt={item.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="flex-1 flex flex-col justify-center">
                <div className="flex justify-between items-baseline mb-2 border-b border-gray-200 pb-2">
                  <h3 className="font-serif text-xl text-cafe-dark">{item.name}</h3>
                  <span className="font-serif text-xl text-cafe-gold ml-4">{item.price}</span>
                </div>
                <p className="text-gray-500 font-light text-sm">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <a 
            href="#full-menu" 
            className="inline-block px-10 py-4 bg-cafe-dark text-white tracking-widest uppercase text-sm font-medium hover:bg-cafe-gold transition-colors duration-300"
          >
            Download Full Menu
          </a>
        </div>

      </div>
    </section>
  );
}
