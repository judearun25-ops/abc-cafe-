import { motion } from 'motion/react';

export default function Gallery() {
  const images = [
    { src: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&q=80&w=800", alt: "Cafe exterior", className: "col-span-1 row-span-2" },
    { src: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=800", alt: "Coffee pouring", className: "col-span-1 row-span-1" },
    { src: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=800", alt: "Barista working", className: "col-span-1 row-span-1" },
    { src: "https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&q=80&w=800", alt: "Latte art", className: "col-span-2 row-span-1" }
  ];

  return (
    <section id="gallery" className="w-full bg-cafe-dark py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        <div className="text-center mb-16">
          <h4 className="text-cafe-gold tracking-[0.2em] uppercase text-sm font-semibold mb-3">Atmosphere</h4>
          <h2 className="font-serif text-4xl lg:text-5xl text-white">Experience ABC Cafe</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 grid-rows-2 gap-4 h-[600px] lg:h-[500px]">
          {images.map((img, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`relative overflow-hidden group ${img.className}`}
            >
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
              <img 
                src={img.src} 
                alt={img.alt} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
