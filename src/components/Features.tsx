import { motion } from 'motion/react';
import { Coffee, ShieldCheck, Leaf, Heart, Clock, Users } from 'lucide-react';

export default function Features() {
  const features = [
    { icon: <Coffee className="w-8 h-8" />, title: "Premium Beans", desc: "Sourced from the best sustainable farms globally." },
    { icon: <ShieldCheck className="w-8 h-8" />, title: "Expert Baristas", desc: "Trained professionals dedicated to the perfect pour." },
    { icon: <Leaf className="w-8 h-8" />, title: "Fresh Ingredients", desc: "Locally sourced, organic ingredients used daily." },
    { icon: <Heart className="w-8 h-8" />, title: "Cozy Atmosphere", desc: "Designed for comfort, conversation, and productivity." },
    { icon: <Clock className="w-8 h-8" />, title: "Fast Service", desc: "Quality doesn't have to mean waiting in long lines." },
    { icon: <Users className="w-8 h-8" />, title: "Community Focus", desc: "A gathering place for locals and travelers alike." },
  ];

  return (
    <section className="py-24 bg-cafe-cream relative z-10 w-full">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        <div className="text-center mb-16">
          <h4 className="text-cafe-gold tracking-[0.2em] uppercase text-sm font-semibold mb-3">Why Choose Us</h4>
          <h2 className="font-serif text-4xl lg:text-5xl text-cafe-dark">The ABC Difference</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {features.map((feature, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="text-center group"
            >
              <div className="w-16 h-16 mx-auto mb-6 bg-white rounded-full flex items-center justify-center text-cafe-gold shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] group-hover:bg-cafe-gold group-hover:text-white transition-colors duration-300">
                {feature.icon}
              </div>
              <h3 className="font-serif text-xl text-cafe-dark mb-3">{feature.title}</h3>
              <p className="text-gray-500 font-light text-balance">{feature.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
