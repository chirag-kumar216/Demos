import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, Play, Star, Phone, MapPin, PencilRuler, CheckCircle, Key } from 'lucide-react';
import { Link } from 'react-router-dom';
import BeforeAfterSlider from '../components/BeforeAfterSlider';

const Home = () => {
  // Staggered text animation for Hero
  const titleText = "Spaces That Tell Your Story".split(" ");

  const [activeTab, setActiveTab] = useState(0);
  
  const sliderData = [
    { tab: 'Living Room', before: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80', after: 'https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?w=1200&q=80', name: 'The Ivory Retreat', loc: 'Koregaon Park, Pune', dur: '8 Weeks', bud: '₹12L - ₹15L' },
    { tab: 'Bedroom', before: 'https://images.unsplash.com/photo-1505693314120-0d443867891c?w=1200&q=80', after: 'https://images.unsplash.com/photo-1560448205-4d9b3e6bb6db?w=1200&q=80', name: 'Noir & Nude Suite', loc: 'Boat Club Road, Pune', dur: '6 Weeks', bud: '₹8L - ₹10L' },
    { tab: 'Kitchen', before: 'https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=1200&q=80', after: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&q=80', name: 'The Calm Kitchen', loc: 'Wakad, Pune', dur: '4 Weeks', bud: '₹6L - ₹8L' },
    { tab: 'Bathroom', before: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=1200&q=80', after: 'https://images.unsplash.com/photo-1620626011761-996317702782?w=1200&q=80', name: 'Marble & Mist', loc: 'Aundh, Pune', dur: '3 Weeks', bud: '₹4L - ₹5L' },
    { tab: 'Home Office', before: 'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=1200&q=80', after: 'https://images.unsplash.com/photo-1585841378924-a7c3d8ce2e55?w=1200&q=80', name: 'Viman Nagar Workspace', loc: 'Viman Nagar, Pune', dur: '5 Weeks', bud: '₹5L - ₹7L' },
  ];

  return (
    <div className="bg-primary-bg min-h-screen">
      {/* SECTION 1 — HERO */}
      <section className="relative h-screen w-full overflow-hidden flex items-center justify-center pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?w=1200&q=80" 
            alt="Luxury Living Room" 
            className="w-full h-full object-cover object-center animate-[kenBurns_20s_ease-out_infinite_alternate]"
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        <div className="container relative z-10 mx-auto px-6 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block px-4 py-1 border border-white/30 backdrop-blur-sm rounded-full mb-6 font-accent text-xs tracking-[0.2em] uppercase"
          >
            Est. 2010 · Pune
          </motion.div>

          <h1 className="text-white text-5xl md:text-7xl lg:text-8xl font-display mb-6 overflow-hidden flex justify-center flex-wrap gap-x-4">
            {titleText.map((word, index) => (
              <motion.span
                key={index}
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 + index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="inline-block pb-2"
              >
                {word}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="font-body text-lg md:text-xl font-light tracking-wide text-white/90 mb-10 max-w-2xl mx-auto"
          >
            Luxury Interior Design Studio · Pune, Maharashtra
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
          >
            <Link to="/portfolio" className="w-full sm:w-auto bg-white text-primary-text font-accent text-sm tracking-wider uppercase px-8 py-4 hover:bg-accent-gold hover:text-white transition-all duration-300">
              Explore Our Work
            </Link>
            <Link to="/contact" className="w-full sm:w-auto bg-transparent border border-white text-white font-accent text-sm tracking-wider uppercase px-8 py-4 hover:bg-white hover:text-primary-text transition-all duration-300">
              Book a Consultation
            </Link>
          </motion.div>
        </div>

        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 text-white"
        >
          <div className="w-[1px] h-12 bg-white/50 relative overflow-hidden">
            <motion.div 
              animate={{ y: ["-100%", "100%"] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
              className="absolute top-0 left-0 w-full h-full bg-white"
            />
          </div>
        </motion.div>
      </section>

      {/* SECTION 2 — INTRO MARQUEE */}
      <section className="py-6 border-y border-border-divider bg-secondary-bg overflow-hidden flex items-center">
        <div className="flex whitespace-nowrap animate-[marquee_20s_linear_infinite]">
          <span className="font-accent text-sm md:text-base tracking-[0.2em] text-primary-text uppercase px-4">
            Living Rooms · Bedrooms · Kitchens · Bathrooms · Offices · Villas · Penthouses · Cafés · Restaurants · Living Rooms · Bedrooms · Kitchens · Bathrooms · Offices · Villas · Penthouses · Cafés · Restaurants · 
          </span>
        </div>
      </section>

      {/* SECTION 3 — ABOUT SNIPPET */}
      <section className="py-24 lg:py-32 bg-primary-bg overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            <div className="w-full lg:w-1/2 relative">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="relative aspect-[3/4] overflow-hidden rounded-sm"
              >
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1200&q=80" 
                  alt="Prateek Sharma" 
                  className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
                />
              </motion.div>
              <div className="absolute -bottom-10 -right-10 lg:bottom-10 lg:-right-16 bg-white p-8 shadow-xl max-w-xs">
                <p className="font-display text-2xl italic text-primary-text">"A room should tell the story of who you are."</p>
                <p className="font-accent text-xs tracking-widest text-accent-gold uppercase mt-4">— Prateek Sharma</p>
              </div>
            </div>
            
            <div className="w-full lg:w-1/2 mt-16 lg:mt-0">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-sm font-accent tracking-[0.2em] text-accent-gold uppercase mb-4">Meet The Designer</h2>
                <h3 className="text-4xl md:text-5xl font-display text-primary-text mb-8 leading-tight">
                  Elevating Pune's living spaces since 2010.
                </h3>
                <p className="font-body text-secondary-text mb-8 leading-relaxed">
                  Founded by Prateek Sharma, Aura Interiors has redefined luxury living in Pune. With an editorial eye and a deep understanding of our clients' lifestyles, we create environments that are both visually stunning and intimately personal.
                </p>
                <Link to="/about" className="inline-flex items-center font-accent text-sm tracking-wider uppercase text-primary-text hover:text-accent-gold transition-colors group">
                  Read Full Story 
                  <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
                </Link>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-8 border-t border-border-divider">
                  {[
                    { number: "14+", label: "Years" },
                    { number: "320+", label: "Projects" },
                    { number: "28", label: "Awards" },
                    { number: "100%", label: "Satisfaction" }
                  ].map((stat, idx) => (
                    <div key={idx}>
                      <p className="font-display text-3xl md:text-4xl text-primary-text mb-1">{stat.number}</p>
                      <p className="font-accent text-xs tracking-wider text-secondary-text uppercase">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6 — BEFORE & AFTER SLIDER SHOWCASE */}
      <section className="py-24 bg-secondary-bg">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-sm font-accent tracking-[0.2em] text-accent-gold uppercase mb-4">The Aura Transformation</h2>
            <h3 className="text-4xl md:text-5xl font-display text-primary-text">Experience The Difference</h3>
          </div>
          
          <div className="hidden lg:flex justify-center space-x-8 mb-12">
            {sliderData.map((data, idx) => (
              <button 
                key={idx} 
                onClick={() => setActiveTab(idx)}
                className={`font-accent text-sm tracking-wider uppercase pb-2 border-b-2 ${activeTab === idx ? 'border-accent-gold text-accent-gold' : 'border-transparent text-secondary-text hover:text-primary-text'}`}>
                {data.tab}
              </button>
            ))}
          </div>

          <div className="max-w-5xl mx-auto">
             <BeforeAfterSlider 
               beforeImage={sliderData[activeTab].before}
               afterImage={sliderData[activeTab].after}
               projectName={sliderData[activeTab].name}
               location={sliderData[activeTab].loc}
               duration={sliderData[activeTab].dur}
               budget={sliderData[activeTab].bud}
             />
             <div className="flex justify-center mt-8">
                <Link to="/before-after" className="font-accent text-sm text-accent-gold tracking-widest uppercase hover:text-primary-text transition-colors flex items-center">
                   View All Transformations <ArrowRight size={16} className="ml-2" />
                </Link>
             </div>
          </div>
        </div>
      </section>

      {/* SECTION 10 — FINAL CTA BANNER */}
      <section className="py-24 bg-primary-bg border-t border-border-divider">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-5xl md:text-6xl font-display text-primary-text mb-6">Ready to Transform Your Space?</h2>
            <p className="font-body text-lg text-secondary-text mb-10">Book a free 30-minute discovery call with Prateek to discuss your vision.</p>
            <Link to="/contact" className="inline-block bg-accent-gold text-white font-accent text-sm tracking-wider uppercase px-10 py-4 hover:bg-accent-dark transition-all duration-300">
              Schedule a Call
            </Link>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default Home;
