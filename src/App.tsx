/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import FeaturedMenu from './components/FeaturedMenu';
import Gallery from './components/Gallery';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Ordering from './components/Ordering';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AiChatbot from './components/AiChatbot';

export default function App() {
  return (
    <div className="min-h-screen bg-cafe-cream flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <Features />
        <FeaturedMenu />
        <Gallery />
        <Testimonials />
        <Ordering />
        <Contact />
      </main>
      <Footer />
      <AiChatbot />
    </div>
  );
}
